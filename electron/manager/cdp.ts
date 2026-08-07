import { WebSocket as UndiciWebSocket } from 'undici';

const DEFAULT_WAIT_TIMEOUT_MS = 5000;
const DEFAULT_POLL_MS = 100;
const DEFAULT_COMMAND_TIMEOUT_MS = 15000;
const DEFAULT_CONNECT_TIMEOUT_MS = 10000;
const DEFAULT_DISCOVERY_TIMEOUT_MS = 5000;

export function validatePort(port: number) {
  if (!Number.isInteger(port) || port < 1024 || port > 65535) {
    throw new TypeError(`port must be an integer from 1024 through 65535`);
  }
  return port;
}

export function validateDuration(value: number, name: string, options: { allowZero?: boolean } = {}) {
  const minimum = options.allowZero ? 0 : Number.EPSILON;
  if (!Number.isFinite(value) || value < minimum) {
    const qualifier = options.allowZero ? 'non-negative' : 'positive';
    throw new TypeError(`${name} must be a finite ${qualifier} number`);
  }
  return value;
}

export function parseLoopbackWebSocketUrl(value: string): URL {
  if (typeof value !== 'string' || value.length === 0 || value !== value.trim()) {
    throw new TypeError('webSocketDebuggerUrl must be a non-empty URL string');
  }

  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch (error) {
    throw new TypeError(`webSocketDebuggerUrl is invalid: ${(error as Error).message}`);
  }

  if (
    parsed.protocol !== 'ws:' ||
    parsed.hostname !== '127.0.0.1' ||
    parsed.username ||
    parsed.password ||
    parsed.hash ||
    !parsed.port
  ) {
    throw new TypeError('webSocketDebuggerUrl must use ws://127.0.0.1 with an explicit port');
  }

  validatePort(Number(parsed.port));
  return parsed;
}

export function isRendererTarget(target: any, rendererUrlHint: string): boolean {
  if (
    target === null ||
    typeof target !== 'object' ||
    Array.isArray(target) ||
    target.type !== 'page' ||
    typeof target.url !== 'string' ||
    typeof target.webSocketDebuggerUrl !== 'string'
  ) {
    return false;
  }

  try {
    parseLoopbackWebSocketUrl(target.webSocketDebuggerUrl);
  } catch {
    return false;
  }

  return target.url.includes(rendererUrlHint);
}

export function isAnyPageTarget(target: any): boolean {
  if (
    target === null ||
    typeof target !== 'object' ||
    Array.isArray(target) ||
    target.type !== 'page' ||
    typeof target.url !== 'string' ||
    typeof target.webSocketDebuggerUrl !== 'string'
  ) {
    return false;
  }

  try {
    parseLoopbackWebSocketUrl(target.webSocketDebuggerUrl);
    return true;
  } catch {
    return false;
  }
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function awaitBeforeDeadline<T>(
  promise: Promise<T>,
  options: { deadline: number; timeoutMs: number; label: string; onTimeout?: () => void }
): Promise<T> {
  const remainingMs = Math.max(0, options.deadline - Date.now());
  let timer: NodeJS.Timeout | null = null;
  try {
    return await Promise.race([
      promise,
      new Promise<T>((_, reject) => {
        timer = setTimeout(() => {
          options.onTimeout?.();
          reject(new Error(`${options.label} timed out after ${options.timeoutMs}ms`));
        }, remainingMs);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

export async function fetchRendererTargets(
  port: number,
  rendererUrlHint: string,
  options: { timeoutMs?: number; fetchImpl?: typeof fetch; quiet?: boolean } = {}
): Promise<any[]> {
  const timeoutMs = validateDuration(options.timeoutMs ?? DEFAULT_DISCOVERY_TIMEOUT_MS, 'timeoutMs', { allowZero: false });
  const fetchImpl = options.fetchImpl ?? globalThis.fetch;
  if (typeof fetchImpl !== 'function') {
    throw new TypeError('fetchImpl must be a function');
  }

  const endpoint = `http://127.0.0.1:${port}/json/list`;
  const controller = new AbortController();
  const deadline = Date.now() + timeoutMs;
  const quiet = options.quiet === true;
  if (!quiet) console.log(`[cdp] fetchRendererTargets: port=${port}, timeoutMs=${timeoutMs}, endpoint=${endpoint}`);

  let response: Response;
  try {
    response = await awaitBeforeDeadline(
      Promise.resolve(fetchImpl(endpoint, { redirect: 'error', signal: controller.signal })),
      { deadline, timeoutMs, label: 'renderer target discovery', onTimeout: () => controller.abort() }
    );
  } catch (error) {
    if (!quiet) console.log(`[cdp] fetchRendererTargets error:`, error);
    throw new Error(`failed to fetch renderer targets from ${endpoint}: ${(error as Error).message}`);
  }

  if (response === null || typeof response !== 'object' || !response.ok) {
    throw new Error(`renderer target discovery failed with HTTP ${response?.status ?? 'unknown'}`);
  }

  let targets: any[];
  try {
    targets = await awaitBeforeDeadline(Promise.resolve(response.json()), {
      deadline,
      timeoutMs,
      label: 'renderer target discovery JSON',
      onTimeout: () => controller.abort(),
    });
  } catch (error) {
    throw new Error(`malformed renderer target JSON from ${endpoint}: ${(error as Error).message}`);
  }

  if (!Array.isArray(targets)) {
    throw new Error('malformed renderer target JSON: expected an array');
  }

  return targets.filter((target) => isRendererTarget(target, rendererUrlHint)).sort(compareTargets);
}

export async function waitForRendererTargets(
  port: number,
  rendererUrlHint: string,
  options: { timeoutMs?: number; pollMs?: number; fetchImpl?: typeof fetch } = {}
): Promise<any[]> {
  const timeoutMs = validateDuration(options.timeoutMs ?? DEFAULT_WAIT_TIMEOUT_MS, 'timeoutMs', { allowZero: true });
  const pollMs = validateDuration(options.pollMs ?? DEFAULT_POLL_MS, 'pollMs', { allowZero: false });
  const fetchImpl = options.fetchImpl ?? globalThis.fetch;

  let elapsedMs = 0;
  const deadline = Date.now() + timeoutMs;
  let lastError = new Error('no renderer discovery attempt completed');

  console.log(`[cdp] waitForRendererTargets: port=${port}, hint=${rendererUrlHint}, timeoutMs=${timeoutMs}`);

  while (true) {
    try {
      const remainingBudgetMs = Math.max(1, Math.min(timeoutMs - elapsedMs, deadline - Date.now()));
      console.log(`[cdp] Attempting fetch: elapsed=${elapsedMs}ms, remainingBudget=${remainingBudgetMs}ms, deadline=${deadline}`);
      const targets = await fetchRendererTargets(port, rendererUrlHint, {
        fetchImpl,
        timeoutMs: remainingBudgetMs,
      });
      if (targets.length > 0) return targets;
      lastError = new Error('no matching renderer/index.html page targets');
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.log(`[cdp] Fetch error:`, lastError.message);
    }

    if (elapsedMs >= timeoutMs || Date.now() >= deadline) {
      throw new Error(`timed out after ${timeoutMs}ms waiting for renderer targets on 127.0.0.1:${port}: ${lastError.message}`);
    }

    const delayMs = Math.min(pollMs, timeoutMs - elapsedMs);
    await sleep(delayMs);
    elapsedMs += delayMs;
  }
}

export class CdpSession {
  private webSocketDebuggerUrl: string;
  private WebSocketImpl: any;
  private commandTimeoutMs: number;
  private connectTimeoutMs: number;
  private socket: WebSocket | null = null;
  private nextRequestId = 1;
  private pending = new Map<number, { resolve: (value: any) => void; reject: (error: Error) => void; timer: NodeJS.Timeout }>();
  private socketOpen = false;
  private opened = false;
  private closed = false;
  private closeStarted = false;
  private terminalError: Error | null = null;
  private openPromise: Promise<CdpSession> | null = null;
  private resolveOpen: ((value: CdpSession | PromiseLike<CdpSession>) => void) | null = null;
  private rejectOpen: ((error: Error) => void) | null = null;
  private connectTimer: NodeJS.Timeout | null = null;

  constructor(
    webSocketDebuggerUrl: string,
    options: { WebSocketImpl?: any; commandTimeoutMs?: number; connectTimeoutMs?: number } = {}
  ) {
    this.webSocketDebuggerUrl = webSocketDebuggerUrl;
    let WebSocketImpl: any = null;
    let loadError: string | null = null;

    // Try ws first (most reliable in Electron main process)
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const ws = require('ws');
      WebSocketImpl = ws ?? null;
      if (!WebSocketImpl) {
        loadError = 'ws loaded but WebSocket is undefined';
      }
    } catch (e: any) {
      loadError = `ws require failed: ${e?.message ?? e}`;
    }

    // Fallback to undici
    if (!WebSocketImpl) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const undici = require('undici');
        WebSocketImpl = undici?.WebSocket ?? null;
        if (!WebSocketImpl) {
          loadError = 'undici loaded but WebSocket is undefined';
        }
      } catch (e: any) {
        loadError = `undici require failed: ${e?.message ?? e}`;
      }
    }

    // Fallback to global WebSocket
    if (!WebSocketImpl && typeof globalThis.WebSocket === 'function') {
      WebSocketImpl = globalThis.WebSocket;
      loadError = null;
    }

    if (!WebSocketImpl) {
      const hint = loadError ? ` (${loadError})` : '';
      throw new Error(`No WebSocket implementation available for CDP${hint}`);
    }

    this.WebSocketImpl = options.WebSocketImpl ?? WebSocketImpl;
    this.commandTimeoutMs = validateDuration(options.commandTimeoutMs ?? DEFAULT_COMMAND_TIMEOUT_MS, 'commandTimeoutMs');
    this.connectTimeoutMs = validateDuration(options.connectTimeoutMs ?? DEFAULT_CONNECT_TIMEOUT_MS, 'connectTimeoutMs');
  }

  open(): Promise<CdpSession> {
    if (this.closed) {
      return Promise.reject(this.terminalError ?? new Error('CDP session is closed'));
    }
    if (this.opened) return Promise.resolve(this);
    if (this.openPromise) return this.openPromise;

    this.openPromise = new Promise((resolve, reject) => {
      this.resolveOpen = resolve;
      this.rejectOpen = reject;
    });

    this.connectTimer = setTimeout(() => {
      this.terminate(new Error(`CDP WebSocket connect timed out after ${this.connectTimeoutMs}ms`));
      this.closeSocket();
    }, this.connectTimeoutMs);

    try {
      this.socket = new this.WebSocketImpl(this.webSocketDebuggerUrl);
    } catch (error) {
      this.terminate(new Error(`failed to open CDP WebSocket: ${(error as Error).message}`));
      return this.openPromise;
    }

    const socket = this.socket as NonNullable<typeof this.socket>;
    socket.onopen = () => {
      if (this.closed || this.socketOpen) return;
      this.clearConnectTimer();
      this.socketOpen = true;
      Promise.all([this.send('Runtime.enable'), this.send('Page.enable')])
        .then(() => {
          if (this.closed) return;
          this.opened = true;
          const resolve = this.resolveOpen;
          this.resolveOpen = null;
          this.rejectOpen = null;
          resolve?.(this);
        })
        .catch((error) => {
          this.terminate(error);
          this.closeSocket();
        });
    };

    socket.onmessage = (event) => this.handleMessage(event);
    socket.onerror = (event) => {
      const source = (event as any).error;
      const detail =
        source instanceof Error
          ? source.message
          : typeof (event as any).message === 'string' && (event as any).message.length > 0
            ? (event as any).message
            : 'unknown socket error';
      this.terminate(new Error(`CDP WebSocket error: ${detail}`));
      this.closeSocket();
    };

    socket.onclose = () => {
      this.closeStarted = true;
      this.terminate(new Error('CDP WebSocket closed'));
    };

    return this.openPromise;
  }

  send(method: string, params: Record<string, any> = {}, options: { timeoutMs?: number } = {}): Promise<any> {
    if (this.closed) {
      return Promise.reject(this.terminalError ?? new Error('CDP session is closed'));
    }
    if (!this.socketOpen || !this.socket) {
      return Promise.reject(new Error('CDP session is not open'));
    }
    if (typeof method !== 'string' || method.length === 0) {
      return Promise.reject(new TypeError('CDP method must be a non-empty string'));
    }

    const timeoutMs = validateDuration(options.timeoutMs ?? this.commandTimeoutMs, 'timeoutMs');
    const id = this.nextRequestId++;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`CDP ${method} timed out after ${timeoutMs}ms`));
      }, timeoutMs);

      this.pending.set(id, { resolve, reject, timer });

      try {
        this.socket!.send(JSON.stringify({ id, method, params }));
      } catch (error) {
        clearTimeout(timer);
        this.pending.delete(id);
        reject(new Error(`failed to send CDP ${method}: ${(error as Error).message}`));
      }
    });
  }

  async evaluate(expression: string, options: { timeoutMs?: number } = {}): Promise<any> {
    if (typeof expression !== 'string') {
      throw new TypeError('Runtime.evaluate expression must be a string');
    }

    const response = await this.send('Runtime.evaluate', {
      expression,
      awaitPromise: true,
      returnByValue: true,
    }, options);

    if (response?.exceptionDetails) {
      throw new Error(`Runtime.evaluate failed: ${response.exceptionDetails.exception?.description ?? response.exceptionDetails.text ?? 'unknown JavaScript exception'}`);
    }
    if (response?.result?.type === 'undefined') return undefined;
    return response?.result?.value;
  }

  async addScriptToEvaluateOnNewDocument(source: string): Promise<string | undefined> {
    const response = await this.send('Page.addScriptToEvaluateOnNewDocument', { source });
    return response?.identifier;
  }

  async removeScriptToEvaluateOnNewDocument(identifier: string): Promise<void> {
    await this.send('Page.removeScriptToEvaluateOnNewDocument', { identifier });
  }

  close() {
    if (this.closeStarted) return;
    this.terminate(new Error('CDP session closed by client'));
    this.closeSocket();
  }

  private handleMessage(event: MessageEvent) {
    if (typeof event.data !== 'string') {
      this.terminate(new Error('received a non-text CDP WebSocket message'));
      this.closeSocket();
      return;
    }

    let message: any;
    try {
      message = JSON.parse(event.data);
    } catch (error) {
      this.terminate(new Error(`received malformed CDP JSON: ${(error as Error).message}`));
      this.closeSocket();
      return;
    }

    if (!Number.isInteger(message?.id)) return;
    const pending = this.pending.get(message.id);
    if (!pending) return;

    this.pending.delete(message.id);
    clearTimeout(pending.timer);
    if (message.error) {
      pending.reject(new Error(`CDP error: ${message.error.message}`));
      return;
    }
    pending.resolve(message.result);
  }

  private terminate(error: Error) {
    if (this.terminalError) return;
    this.clearConnectTimer();
    this.terminalError = error;
    this.closed = true;
    this.socketOpen = false;

    const rejectOpen = this.rejectOpen;
    this.resolveOpen = null;
    this.rejectOpen = null;
    rejectOpen?.(error);

    for (const { reject, timer } of this.pending.values()) {
      clearTimeout(timer);
      reject(error);
    }
    this.pending.clear();
  }

  private clearConnectTimer() {
    if (this.connectTimer !== null) {
      clearTimeout(this.connectTimer);
      this.connectTimer = null;
    }
  }

  private closeSocket() {
    if (this.closeStarted) return;
    this.closeStarted = true;
    if (!this.socket || typeof this.socket.close !== 'function') return;

    const closing = this.WebSocketImpl.CLOSING ?? 2;
    const closed = this.WebSocketImpl.CLOSED ?? 3;
    if (this.socket.readyState === closing || this.socket.readyState === closed) return;
    this.socket.close();
  }
}

function compareTargets(left: any, right: any): number {
  const leftKeys = [String(left.id ?? ''), left.url, left.webSocketDebuggerUrl];
  const rightKeys = [String(right.id ?? ''), right.url, right.webSocketDebuggerUrl];

  for (let i = 0; i < leftKeys.length; i++) {
    if (leftKeys[i] < rightKeys[i]) return -1;
    if (leftKeys[i] > rightKeys[i]) return 1;
  }
  return 0;
}

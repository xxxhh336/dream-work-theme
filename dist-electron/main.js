"use strict";var Ke=Object.defineProperty;var Je=(e,n,t)=>n in e?Ke(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var T=(e,n,t)=>Je(e,typeof n!="symbol"?n+"":n,t);const v=require("electron"),Ge=require("path"),Qe=require("fs"),K=require("child_process"),ce=require("util"),Xe=require("os"),Ve=require("http"),Ze=require("net"),Ye=require("fs/promises"),et=require("crypto");function W(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return n.default=e,Object.freeze(n)}const c=W(Ge),m=W(Qe),x=W(Xe),Ce=W(Ve),Se=W(Ze),le=W(et),A=process.env.LOCALAPPDATA||c.join(x.homedir(),"AppData","Local"),ee=process.env.APPDATA||c.join(x.homedir(),"AppData","Roaming"),D=process.env.ProgramFiles||"C:\\Program Files",G=process.env["ProgramFiles(x86)"]||"C:\\Program Files (x86)",V=[{id:"workbuddy",name:"WorkBuddy",exeNames:["WorkBuddy.exe"],processName:"WorkBuddy.exe",defaultPort:9339,installPaths:[c.join(A,"workbuddy"),c.join(A,"Programs","workbuddy"),c.join(D,"WorkBuddy"),c.join(G,"WorkBuddy"),"D:\\Program Files\\WorkBuddy"],rendererHints:["app.asar/renderer/index.html","renderer/index.html","index.html"],kind:"workbuddy",acceptsGenericThemes:!0,darwin:{appBundles:["WorkBuddy.app"],executableNames:["WorkBuddy"]},linux:{executableNames:["workbuddy","WorkBuddy"],desktopFiles:["workbuddy.desktop"]}},{id:"codex",name:"Codex",exeNames:["ChatGPT.exe","Codex.exe"],processName:"ChatGPT.exe",defaultPort:9340,installPaths:[c.join(A,"Programs","Codex"),c.join(A,"Programs","OpenAI","Codex"),c.join(D,"Codex"),c.join(G,"Codex"),"D:\\Program Files\\Codex"],rendererHints:["index.html","renderer/index.html"],kind:"codex",acceptsGenericThemes:!0,darwin:{appBundles:["ChatGPT.app","Codex.app"],executableNames:["ChatGPT","Codex"]},linux:{executableNames:["codex","Codex"],desktopFiles:["codex.desktop"]}},{id:"trae-work",name:"TRAE Work",exeNames:["TRAE SOLO CN.exe","TRAE Work CN.exe"],processName:"TRAE SOLO CN.exe",defaultPort:9341,installPaths:["D:\\Program Files\\TRAE SOLO CN",c.join(A,"Programs","TRAE SOLO CN"),c.join(D,"TRAE SOLO CN")],rendererHints:["solo/solo-lite.html","solo-lite.html"],kind:"vscode-work",acceptsGenericThemes:!0,darwin:{appBundles:["TRAE SOLO CN.app","TRAE Work CN.app","TRAE.app"],executableNames:["TRAE SOLO CN","TRAE Work CN","TRAE"]},linux:{executableNames:["trae","trae-work","TRAE"],desktopFiles:["trae.desktop","trae-work.desktop"]}},{id:"qoder-work",name:"QoderWork",exeNames:["QoderWork CN.exe","QoderWork.exe"],processName:"QoderWork CN.exe",defaultPort:9342,installPaths:["D:\\Program Files\\QoderWork CN",c.join(A,"Programs","QoderWork CN"),c.join(D,"QoderWork CN")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",devToolsActivePort:c.join(ee,"QoderWork CN","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["QoderWork CN.app","QoderWork.app"],executableNames:["QoderWork CN","QoderWork"]},linux:{executableNames:["qoder-work","qoderwork","QoderWork"],desktopFiles:["qoder-work.desktop","qoderwork.desktop"]}},{id:"catpaw",name:"CatPaw",exeNames:["CatPaw.exe"],processName:"CatPaw.exe",defaultPort:9343,installPaths:[c.join(A,"CatPaw"),c.join(A,"Programs","CatPaw"),c.join(D,"CatPaw")],rendererHints:["app.asar/dist/index.html","dist/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["CatPaw.app"],executableNames:["CatPaw"]},linux:{executableNames:["catpaw","CatPaw"],desktopFiles:["catpaw.desktop"]}},{id:"zcode",name:"ZCode",exeNames:["ZCode.exe"],processName:"ZCode.exe",defaultPort:9344,installPaths:["D:\\Program Files\\ZCode",c.join(A,"Programs","ZCode"),c.join(D,"ZCode")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["ZCode.app"],executableNames:["ZCode"]},linux:{executableNames:["zcode","ZCode"],desktopFiles:["zcode.desktop"]}},{id:"qwen-office",name:"千问办公",exeNames:["QwenWorkCN.exe"],processName:"QwenWorkCN.exe",defaultPort:9345,installPaths:["D:\\Program Files\\QwenWorkCN",c.join(A,"Programs","QwenWorkCN"),c.join(D,"QwenWorkCN")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",devToolsActivePort:c.join(ee,"QwenWorkCN","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["QwenWorkCN.app","Qwen Work.app"],executableNames:["QwenWorkCN","Qwen Work"]},linux:{executableNames:["qwen-work","qwenwork","QwenWorkCN"],desktopFiles:["qwen-work.desktop","qwenwork.desktop"]}},{id:"hana-agent",name:"HanaAgent",exeNames:["HanaAgent.exe"],processName:"HanaAgent.exe",defaultPort:9346,installPaths:[c.join(A,"Programs","HanaAgent"),c.join(D,"HanaAgent"),c.join(G,"HanaAgent")],rendererHints:[".hanako/artifacts/renderer/","artifacts/renderer/","/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["HanaAgent.app"],executableNames:["HanaAgent"]},linux:{executableNames:["hana-agent","HanaAgent"],desktopFiles:["hana-agent.desktop"]}},{id:"kimi",name:"Kimi Work",exeNames:["Kimi.exe"],processName:"Kimi.exe",defaultPort:9347,installPaths:["D:\\Program Files\\Kimi",c.join(A,"Programs","Kimi"),c.join(D,"Kimi"),c.join(G,"Kimi")],rendererHints:["kimi-agent.html","kimichat.html","https://www.kimi.com/"],kind:"generic-work",devToolsActivePort:c.join(ee,"kimi-desktop","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["Kimi.app"],executableNames:["Kimi"]},linux:{executableNames:["kimi","Kimi"],desktopFiles:["kimi.desktop"]}}];function j(e){return V.find(n=>n.id===e)}const de=ce.promisify(K.execFile);function tt(){const e=[],n=c.join(process.env.ProgramFiles||"C:\\Program Files","WindowsApps");if(!m.existsSync(n))return e;try{const t=m.readdirSync(n);for(const r of t)if(/^OpenAI\.Codex_\d+/i.test(r)){const o=c.join(n,r,"app","ChatGPT.exe");m.existsSync(o)&&e.push(o)}}catch{}return e}async function nt(){const e=`
$ErrorActionPreference = 'SilentlyContinue'
$package = Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue
if (-not $package) { exit 1 }
$manifest = Get-AppxPackageManifest -Package $package.PackageFullName
$rel = [string]$manifest.Package.Applications.Application.Executable
if (-not $rel) { exit 1 }
$full = Join-Path $package.InstallLocation $rel
if (Test-Path -LiteralPath $full -PathType Leaf) { Write-Output $full } else { exit 1 }
`;try{const{stdout:n}=await de("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",e],{encoding:"utf8",maxBuffer:4194304}),t=n.trim();if(t&&m.existsSync(t))return t}catch{}return null}async function rt(){const e=[];if(x.platform()!=="win32"){for(const o of V){const a=await ot(o);a&&e.push({appId:o.id,name:o.name,path:a})}return e}for(const o of V.filter(a=>a.id!=="codex")){const a=fe(o.exeNames,o.installPaths);a&&e.push({appId:o.id,name:o.name,path:a})}const t=fe(["Codex.exe","ChatGPT.exe"],[c.join(process.env.LOCALAPPDATA||"","Programs","Codex"),c.join(process.env.LOCALAPPDATA||"","Programs","OpenAI","Codex"),...tt()]),r=t?null:await nt();return r?e.push({appId:"codex",name:"Codex",path:r}):t&&e.push({appId:"codex",name:"Codex",path:t}),e}async function ot(e){var t,r,o;const n=x.platform();if(n==="darwin"){for(const a of((t=e.darwin)==null?void 0:t.appBundles)??[]){const s=c.join("/Applications",a);if(m.existsSync(s))return s}return null}if(n==="linux"){for(const a of((r=e.linux)==null?void 0:r.desktopFiles)??[]){const s=await at(a);if(s)return s}for(const a of((o=e.linux)==null?void 0:o.executableNames)??[])try{const{stdout:s}=await de("which",[a],{encoding:"utf8"}),d=s.trim();if(d&&m.existsSync(d))return d}catch{}}return null}async function at(e){for(const n of[c.join(x.homedir(),".local","share","applications",e),c.join("/usr/share/applications",e),c.join("/usr/local/share/applications",e)]){if(!m.existsSync(n))continue;const t=m.readFileSync(n,"utf8").match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m),r=(t==null?void 0:t[1])||(t==null?void 0:t[2]);if(r){if(c.isAbsolute(r)&&m.existsSync(r))return r;try{const{stdout:o}=await de("which",[r],{encoding:"utf8"}),a=o.trim();if(a&&m.existsSync(a))return a}catch{}}}return null}function fe(e,n){for(const t of n){if(!t||!m.existsSync(t))continue;if(m.statSync(t).isFile()&&e.some(o=>c.basename(t).toLowerCase()===o.toLowerCase()))return t;for(const o of e){const a=c.join(t,o);if(m.existsSync(a))return a}try{const o=m.readdirSync(t,{withFileTypes:!0}).filter(a=>a.isDirectory()).sort((a,s)=>s.name.localeCompare(a.name,void 0,{numeric:!0}));for(const a of o)for(const s of e){const d=c.join(t,a.name,s);if(m.existsSync(d))return d}}catch{}}return null}const oe=ce.promisify(K.execFile);async function st(e){const n=j(e);if(!n)return!1;const t=$e(n);if(x.platform()==="win32"){for(const r of t)try{const{stdout:o}=await oe("tasklist.exe",["/FI",`IMAGENAME eq ${r}`,"/FO","CSV","/NH"],{encoding:"utf8",windowsHide:!0});if(o.split(/\r?\n/).some(a=>a.trim().toLowerCase().startsWith(`"${r.toLowerCase()}"`)))return!0}catch{}return!1}for(const r of t)try{return await oe("pgrep",["-f",r],{encoding:"utf8"}),!0}catch{}return!1}async function Te(e,n){const t=j(e);if(!t)return{success:!1,error:`Unknown app: ${e}`};const r=t.defaultPort,o=[`--remote-debugging-port=${r}`];e==="codex"&&o.push("--disable-extensions"),n&&e!=="kimi"&&o.push(`--dream-theme=${n}`);try{const a=ft(e);console.log(`[launcher] Killing existing ${e} instances...`),await pt(e),await gt(r,15e3);const s=x.platform()==="win32"?t.devToolsActivePort:void 0;if(s)try{m.unlinkSync(s)}catch{}console.log(`[launcher] Launching ${a} with args: ${o.join(" ")}`);const d=e==="kimi"&&x.platform()==="win32"?await ct(a,o):it(a,o);console.log(`[launcher] Spawned process${d?` with PID: ${d}`:""}`),console.log(`[launcher] Waiting for CDP port ${r} to be ready...`);let i=r;return s?i=await lt(s,t.rendererHints,3e4):await ut(r,3e4),console.log(`[launcher] CDP port ${i} is ready`),(e==="hana-agent"||e==="kimi")&&await mt(i,t.rendererHints,3e4,e==="kimi"?750:3e3),{success:!0,port:i}}catch(a){return console.error("[launcher] Launch failed:",a),{success:!1,error:a.message}}}function it(e,n){const t=K.spawn(e,n,{detached:!0,stdio:"ignore",env:ae()});return t.unref(),t.pid}async function ct(e,n){const t=c.join(x.tmpdir(),`dream-work-kimi-${process.pid}-${Date.now()}.lnk`),r={...ae(),DREAM_WORK_LAUNCH_EXE:e,DREAM_WORK_LAUNCH_ARGS:JSON.stringify(n),DREAM_WORK_LAUNCH_CWD:c.dirname(e),DREAM_WORK_LAUNCH_SHORTCUT:t},o=["[string[]]$launchArgs = @($env:DREAM_WORK_LAUNCH_ARGS | ConvertFrom-Json)","$shell = New-Object -ComObject WScript.Shell","$shortcut = $shell.CreateShortcut($env:DREAM_WORK_LAUNCH_SHORTCUT)","$shortcut.TargetPath = $env:DREAM_WORK_LAUNCH_EXE","$shortcut.Arguments = [string]::Join(' ', $launchArgs)","$shortcut.WorkingDirectory = $env:DREAM_WORK_LAUNCH_CWD","$shortcut.Save()"].join("; ");await oe("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",o],{env:r,windowsHide:!0}),K.spawn(c.join(process.env.WINDIR||"C:\\Windows","explorer.exe"),[t],{detached:!0,stdio:"ignore",env:ae()}).unref(),setTimeout(()=>{try{m.unlinkSync(t)}catch{}},15e3).unref()}function ae(){const e={...process.env};for(const n of["VITE_DEV_SERVER_URL","ELECTRON_RENDERER_URL","MAIN_VITE_DEV_SERVER_URL","ELECTRON_RUN_AS_NODE"])delete e[n];return e}function $e(e){var n,t;return x.platform()==="darwin"?((n=e.darwin)==null?void 0:n.executableNames)??[]:x.platform()==="linux"?((t=e.linux)==null?void 0:t.executableNames)??[]:[...new Set([e.processName,...e.exeNames].filter(Boolean))]}async function lt(e,n,t){const r=Date.now();let o=0;for(;Date.now()-r<t;){try{const a=m.readFileSync(e,"utf8").split(/\r?\n/,1)[0],s=Number(a);if(Number.isInteger(s)&&s>0)return o=s,await dt(s,n,3e3),s}catch{}await new Promise(a=>setTimeout(a,500))}throw new Error(`DevToolsActivePort did not expose a live renderer${o?` on port ${o}`:""}: ${e}`)}async function dt(e,n,t){const r=Date.now();for(;Date.now()-r<t;){try{const o=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(1e3)});if(o.ok){const a=await o.json();if(Array.isArray(a)&&a.some(s=>(s==null?void 0:s.type)==="page"&&n.some(d=>String(s.url).includes(d))))return}}catch{}await new Promise(o=>setTimeout(o,250))}throw new Error(`CDP renderer endpoint is not ready on port ${e}`)}async function mt(e,n,t,r){const o=Date.now();let a="",s=0;for(;Date.now()-o<t;){try{const l=(await(await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(1e3)})).json()).find(u=>(u==null?void 0:u.type)==="page"&&n.some(h=>String(u.url).includes(h)));if(l!=null&&l.id){if(l.id!==a)a=l.id,s=Date.now();else if(Date.now()-s>=r){console.log(`[launcher] Stable renderer ${a} confirmed`);return}}}catch{}await new Promise(d=>setTimeout(d,250))}throw new Error(`Renderer did not stabilize on port ${e}`)}async function ut(e,n){const t=Date.now();let r="unknown";for(;Date.now()-t<n;)try{await new Promise((o,a)=>{const s=Se.createConnection(e,"127.0.0.1",()=>{s.end(),o()});s.once("error",d=>{r=d.message,a(d)}),setTimeout(()=>{s.destroy(),a(new Error("timeout"))},1e3)}),console.log(`[launcher] Port ${e} is open, verifying CDP endpoint...`),await ht(e,15e3),console.log(`[launcher] CDP endpoint verified on port ${e}`);return}catch(o){r=o.message,console.log(`[launcher] Port check failed: ${o.message}, retrying...`),await new Promise(a=>setTimeout(a,1e3))}throw new Error(`CDP port ${e} did not become ready within ${n}ms (last error: ${r})`)}async function ht(e,n){const t=Date.now();for(;Date.now()-t<n;)try{await new Promise((r,o)=>{const a=Ce.request({hostname:"127.0.0.1",port:e,path:"/json/version",method:"GET",timeout:2e3},s=>{let d="";s.on("data",i=>{d+=i}),s.on("end",()=>{s.statusCode===200?(console.log(`[launcher] CDP version response: ${d.substring(0,200)}`),r()):o(new Error(`HTTP ${s.statusCode}`))})});a.on("error",o),a.on("timeout",()=>{a.destroy(),o(new Error("timeout"))}),a.end()});return}catch(r){if(Date.now()-t>=n)throw r;await new Promise(o=>setTimeout(o,1e3))}}async function pt(e){const n=x.platform(),t=j(e);if(!t)return;const r=$e(t);try{if(n==="win32"){const{execSync:o}=require("child_process");for(const a of r)try{o(`taskkill /T /F /IM "${a}" 2>nul`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${a} process tree`)}catch{}}else if(n==="darwin"){const{execSync:o}=require("child_process");for(const a of r)try{o(`pkill -f "${a}" 2>/dev/null || true`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${a} processes`)}catch{}}else if(n==="linux"){const{execSync:o}=require("child_process");for(const a of r)try{o(`pkill -f "${a}" 2>/dev/null || true`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${a} processes`)}catch{}}}catch(o){console.warn("[launcher] Failed to kill existing instances:",o)}}async function gt(e,n){const t=Date.now();for(;Date.now()-t<n;){if(!await new Promise(o=>{const a=Se.createConnection(e,"127.0.0.1");a.once("connect",()=>{a.destroy(),o(!0)}),a.once("error",()=>o(!1)),a.setTimeout(500,()=>{a.destroy(),o(!1)})})){console.log(`[launcher] Previous CDP port ${e} is closed`);return}await new Promise(o=>setTimeout(o,250))}throw new Error(`Existing ${e} CDP service did not stop; refusing to inject into the old application instance`)}function ft(e){var r,o,a,s;const n=j(e);if(!n)throw new Error(`Unknown app: ${e}`);const t=x.platform();if(t==="win32"){for(const l of n.installPaths){if(!l||!m.existsSync(l))continue;if(m.statSync(l).isFile())return l;for(const h of n.exeNames){const p=c.join(l,h);if(m.existsSync(p))return p}const u=m.readdirSync(l,{withFileTypes:!0}).filter(h=>h.isDirectory()).sort((h,p)=>p.name.localeCompare(h.name,void 0,{numeric:!0}));for(const h of u)for(const p of n.exeNames){const k=c.join(l,h.name,p);if(m.existsSync(k))return k}}const d=n.exeNames,i=[process.env.ProgramFiles,process.env["ProgramFiles(x86)"]].filter(Boolean);for(const l of i){if(!l||!m.existsSync(l))continue;const h=m.readdirSync(l).find(p=>p.toLowerCase().includes(e.replace("-",""))||p.toLowerCase().includes(n.name.toLowerCase()));if(h){const p=c.join(l,h);for(const k of d){const w=c.join(p,k);if(m.existsSync(w))return w}}}if(e==="codex"){const l=c.join(process.env.ProgramFiles||"C:\\Program Files","WindowsApps");console.log("[launcher] Codex WindowsApps fallback, path:",l);try{const h=m.readdirSync(l).find(p=>/^OpenAI\.Codex_\d+/i.test(p));if(h){const p=c.join(l,h,"app","ChatGPT.exe");if(m.existsSync(p))return console.log("[launcher] Found Codex via WindowsApps scan:",p),p}}catch(u){console.log("[launcher] WindowsApps scan error:",u.message)}try{const{execFileSync:u}=require("child_process"),h="Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue | ForEach-Object { Join-Path $_.InstallLocation (Get-AppxPackageManifest -Package $_.PackageFullName).Package.Applications.Application.Executable }";console.log("[launcher] Running PowerShell fallback...");const p=u("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",h],{encoding:"utf8",stdio:["pipe","pipe","ignore"]}).trim();if(console.log("[launcher] PowerShell result:",p),p&&m.existsSync(p))return p}catch(u){console.log("[launcher] PowerShell fallback error:",u.message)}}}else if(t==="darwin")for(const d of((r=n.darwin)==null?void 0:r.appBundles)??[]){const i=c.join("/Applications",d);if(m.existsSync(i))for(const l of((o=n.darwin)==null?void 0:o.executableNames)??[]){const u=c.join(i,"Contents","MacOS",l);if(m.existsSync(u))return u}}else if(t==="linux"){const d=((a=n.linux)==null?void 0:a.executableNames)??[];for(const l of((s=n.linux)==null?void 0:s.desktopFiles)??[]){const u=bt(l);if(u)return u}const i=["/usr/bin","/usr/local/bin","/opt",c.join(x.homedir(),".local","bin"),"/snap/bin"];for(const l of i)if(m.existsSync(l))for(const u of d){const h=c.join(l,u);if(m.existsSync(h))return h}for(const l of d)try{const{execFileSync:u}=require("child_process"),h=u("which",[l],{encoding:"utf8",stdio:["ignore","pipe","ignore"]}).trim();if(h&&m.existsSync(h))return h}catch{}}throw new Error(`Could not find ${e} executable`)}function bt(e){for(const n of[c.join(x.homedir(),".local","share","applications",e),c.join("/usr/share/applications",e),c.join("/usr/local/share/applications",e)]){if(!m.existsSync(n))continue;const t=m.readFileSync(n,"utf8").match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m),r=(t==null?void 0:t[1])||(t==null?void 0:t[2]);if(r){if(c.isAbsolute(r)&&m.existsSync(r))return r;try{const{execFileSync:o}=require("child_process"),a=o("which",[r],{encoding:"utf8",stdio:["ignore","pipe","ignore"]}).trim();if(a&&m.existsSync(a))return a}catch{}}}}const wt=5e3,yt=100,xt=15e3,kt=1e4,vt=5e3;function Ct(e){if(!Number.isInteger(e)||e<1024||e>65535)throw new TypeError("port must be an integer from 1024 through 65535");return e}function U(e,n,t={}){const r=t.allowZero?0:Number.EPSILON;if(!Number.isFinite(e)||e<r){const o=t.allowZero?"non-negative":"positive";throw new TypeError(`${n} must be a finite ${o} number`)}return e}function Ee(e){if(typeof e!="string"||e.length===0||e!==e.trim())throw new TypeError("webSocketDebuggerUrl must be a non-empty URL string");let n;try{n=new URL(e)}catch(t){throw new TypeError(`webSocketDebuggerUrl is invalid: ${t.message}`)}if(n.protocol!=="ws:"||n.hostname!=="127.0.0.1"||n.username||n.password||n.hash||!n.port)throw new TypeError("webSocketDebuggerUrl must use ws://127.0.0.1 with an explicit port");return Ct(Number(n.port)),n}function St(e,n){if(e===null||typeof e!="object"||Array.isArray(e)||e.type!=="page"||typeof e.url!="string"||typeof e.webSocketDebuggerUrl!="string")return!1;try{Ee(e.webSocketDebuggerUrl)}catch{return!1}return e.url.includes(n)}function me(e){if(e===null||typeof e!="object"||Array.isArray(e)||e.type!=="page"||typeof e.url!="string"||typeof e.webSocketDebuggerUrl!="string")return!1;try{return Ee(e.webSocketDebuggerUrl),!0}catch{return!1}}function Tt(e){return new Promise(n=>setTimeout(n,e))}async function be(e,n){const t=Math.max(0,n.deadline-Date.now());let r=null;try{return await Promise.race([e,new Promise((o,a)=>{r=setTimeout(()=>{var s;(s=n.onTimeout)==null||s.call(n),a(new Error(`${n.label} timed out after ${n.timeoutMs}ms`))},t)})])}finally{r&&clearTimeout(r)}}async function J(e,n,t={}){const r=U(t.timeoutMs??vt,"timeoutMs",{allowZero:!1}),o=t.fetchImpl??globalThis.fetch;if(typeof o!="function")throw new TypeError("fetchImpl must be a function");const a=`http://127.0.0.1:${e}/json/list`,s=new AbortController,d=Date.now()+r,i=t.quiet===!0;i||console.log(`[cdp] fetchRendererTargets: port=${e}, timeoutMs=${r}, endpoint=${a}`);let l;try{l=await be(Promise.resolve(o(a,{redirect:"error",signal:s.signal})),{deadline:d,timeoutMs:r,label:"renderer target discovery",onTimeout:()=>s.abort()})}catch(h){throw i||console.log("[cdp] fetchRendererTargets error:",h),new Error(`failed to fetch renderer targets from ${a}: ${h.message}`)}if(l===null||typeof l!="object"||!l.ok)throw new Error(`renderer target discovery failed with HTTP ${(l==null?void 0:l.status)??"unknown"}`);let u;try{u=await be(Promise.resolve(l.json()),{deadline:d,timeoutMs:r,label:"renderer target discovery JSON",onTimeout:()=>s.abort()})}catch(h){throw new Error(`malformed renderer target JSON from ${a}: ${h.message}`)}if(!Array.isArray(u))throw new Error("malformed renderer target JSON: expected an array");return u.filter(h=>St(h,n)).sort(Et)}async function $t(e,n,t={}){const r=U(t.timeoutMs??wt,"timeoutMs",{allowZero:!0}),o=U(t.pollMs??yt,"pollMs",{allowZero:!1}),a=t.fetchImpl??globalThis.fetch;let s=0;const d=Date.now()+r;let i=new Error("no renderer discovery attempt completed");for(console.log(`[cdp] waitForRendererTargets: port=${e}, hint=${n}, timeoutMs=${r}`);;){try{const u=Math.max(1,Math.min(r-s,d-Date.now()));console.log(`[cdp] Attempting fetch: elapsed=${s}ms, remainingBudget=${u}ms, deadline=${d}`);const h=await J(e,n,{fetchImpl:a,timeoutMs:u});if(h.length>0)return h;i=new Error("no matching renderer/index.html page targets")}catch(u){i=u instanceof Error?u:new Error(String(u)),console.log("[cdp] Fetch error:",i.message)}if(s>=r||Date.now()>=d)throw new Error(`timed out after ${r}ms waiting for renderer targets on 127.0.0.1:${e}: ${i.message}`);const l=Math.min(o,r-s);await Tt(l),s+=l}}class O{constructor(n,t={}){T(this,"webSocketDebuggerUrl");T(this,"WebSocketImpl");T(this,"commandTimeoutMs");T(this,"connectTimeoutMs");T(this,"socket",null);T(this,"nextRequestId",1);T(this,"pending",new Map);T(this,"socketOpen",!1);T(this,"opened",!1);T(this,"closed",!1);T(this,"closeStarted",!1);T(this,"terminalError",null);T(this,"openPromise",null);T(this,"resolveOpen",null);T(this,"rejectOpen",null);T(this,"connectTimer",null);this.webSocketDebuggerUrl=n;let r=null,o=null;try{r=require("ws")??null,r||(o="ws loaded but WebSocket is undefined")}catch(a){o=`ws require failed: ${(a==null?void 0:a.message)??a}`}if(!r)try{const a=require("undici");r=(a==null?void 0:a.WebSocket)??null,r||(o="undici loaded but WebSocket is undefined")}catch(a){o=`undici require failed: ${(a==null?void 0:a.message)??a}`}if(!r&&typeof globalThis.WebSocket=="function"&&(r=globalThis.WebSocket,o=null),!r){const a=o?` (${o})`:"";throw new Error(`No WebSocket implementation available for CDP${a}`)}this.WebSocketImpl=t.WebSocketImpl??r,this.commandTimeoutMs=U(t.commandTimeoutMs??xt,"commandTimeoutMs"),this.connectTimeoutMs=U(t.connectTimeoutMs??kt,"connectTimeoutMs")}open(){if(this.closed)return Promise.reject(this.terminalError??new Error("CDP session is closed"));if(this.opened)return Promise.resolve(this);if(this.openPromise)return this.openPromise;this.openPromise=new Promise((t,r)=>{this.resolveOpen=t,this.rejectOpen=r}),this.connectTimer=setTimeout(()=>{this.terminate(new Error(`CDP WebSocket connect timed out after ${this.connectTimeoutMs}ms`)),this.closeSocket()},this.connectTimeoutMs);try{this.socket=new this.WebSocketImpl(this.webSocketDebuggerUrl)}catch(t){return this.terminate(new Error(`failed to open CDP WebSocket: ${t.message}`)),this.openPromise}const n=this.socket;return n.onopen=()=>{this.closed||this.socketOpen||(this.clearConnectTimer(),this.socketOpen=!0,Promise.all([this.send("Runtime.enable"),this.send("Page.enable")]).then(()=>{if(this.closed)return;this.opened=!0;const t=this.resolveOpen;this.resolveOpen=null,this.rejectOpen=null,t==null||t(this)}).catch(t=>{this.terminate(t),this.closeSocket()}))},n.onmessage=t=>this.handleMessage(t),n.onerror=t=>{const r=t.error,o=r instanceof Error?r.message:typeof t.message=="string"&&t.message.length>0?t.message:"unknown socket error";this.terminate(new Error(`CDP WebSocket error: ${o}`)),this.closeSocket()},n.onclose=()=>{this.closeStarted=!0,this.terminate(new Error("CDP WebSocket closed"))},this.openPromise}send(n,t={},r={}){if(this.closed)return Promise.reject(this.terminalError??new Error("CDP session is closed"));if(!this.socketOpen||!this.socket)return Promise.reject(new Error("CDP session is not open"));if(typeof n!="string"||n.length===0)return Promise.reject(new TypeError("CDP method must be a non-empty string"));const o=U(r.timeoutMs??this.commandTimeoutMs,"timeoutMs"),a=this.nextRequestId++;return new Promise((s,d)=>{const i=setTimeout(()=>{this.pending.delete(a),d(new Error(`CDP ${n} timed out after ${o}ms`))},o);this.pending.set(a,{resolve:s,reject:d,timer:i});try{this.socket.send(JSON.stringify({id:a,method:n,params:t}))}catch(l){clearTimeout(i),this.pending.delete(a),d(new Error(`failed to send CDP ${n}: ${l.message}`))}})}async evaluate(n,t={}){var o,a,s;if(typeof n!="string")throw new TypeError("Runtime.evaluate expression must be a string");const r=await this.send("Runtime.evaluate",{expression:n,awaitPromise:!0,returnByValue:!0},t);if(r!=null&&r.exceptionDetails)throw new Error(`Runtime.evaluate failed: ${((o=r.exceptionDetails.exception)==null?void 0:o.description)??r.exceptionDetails.text??"unknown JavaScript exception"}`);if(((a=r==null?void 0:r.result)==null?void 0:a.type)!=="undefined")return(s=r==null?void 0:r.result)==null?void 0:s.value}async addScriptToEvaluateOnNewDocument(n){const t=await this.send("Page.addScriptToEvaluateOnNewDocument",{source:n});return t==null?void 0:t.identifier}async removeScriptToEvaluateOnNewDocument(n){await this.send("Page.removeScriptToEvaluateOnNewDocument",{identifier:n})}close(){this.closeStarted||(this.terminate(new Error("CDP session closed by client")),this.closeSocket())}handleMessage(n){if(typeof n.data!="string"){this.terminate(new Error("received a non-text CDP WebSocket message")),this.closeSocket();return}let t;try{t=JSON.parse(n.data)}catch(o){this.terminate(new Error(`received malformed CDP JSON: ${o.message}`)),this.closeSocket();return}if(!Number.isInteger(t==null?void 0:t.id))return;const r=this.pending.get(t.id);if(r){if(this.pending.delete(t.id),clearTimeout(r.timer),t.error){r.reject(new Error(`CDP error: ${t.error.message}`));return}r.resolve(t.result)}}terminate(n){if(this.terminalError)return;this.clearConnectTimer(),this.terminalError=n,this.closed=!0,this.socketOpen=!1;const t=this.rejectOpen;this.resolveOpen=null,this.rejectOpen=null,t==null||t(n);for(const{reject:r,timer:o}of this.pending.values())clearTimeout(o),r(n);this.pending.clear()}clearConnectTimer(){this.connectTimer!==null&&(clearTimeout(this.connectTimer),this.connectTimer=null)}closeSocket(){if(this.closeStarted||(this.closeStarted=!0,!this.socket||typeof this.socket.close!="function"))return;const n=this.WebSocketImpl.CLOSING??2,t=this.WebSocketImpl.CLOSED??3;this.socket.readyState===n||this.socket.readyState===t||this.socket.close()}}function Et(e,n){const t=[String(e.id??""),e.url,e.webSocketDebuggerUrl],r=[String(n.id??""),n.url,n.webSocketDebuggerUrl];for(let o=0;o<t.length;o++){if(t[o]<r[o])return-1;if(t[o]>r[o])return 1}return 0}function It(){return c.join(v.app.getAppPath(),"themes")}function Ie(){const e=c.join(v.app.getPath("userData"),"themes");return m.mkdirSync(e,{recursive:!0}),e}function Pt(){return[Ie(),It()]}const we=new Map;function Y(e){const n=[],t=new Set;for(const o of Pt()){if(!m.existsSync(o))continue;const a=m.readdirSync(o,{withFileTypes:!0});for(const s of a){if(!s.isDirectory())continue;const d=c.join(o,s.name),i=c.join(d,"theme.json");if(m.existsSync(i))try{const l=JSON.parse(m.readFileSync(i,"utf-8")),u=Ot(l);if(t.has(u.id))continue;const h=c.join(d,u.hero);if(!m.existsSync(h)||!m.statSync(h).isFile())throw new Error(`theme hero is missing: ${u.hero}`);if(e&&!At(u,e))continue;t.add(u.id),n.push({id:u.id,name:u.name,author:u.author,path:d,manifest:u})}catch(l){console.error(`Failed to load theme ${s.name}:`,l)}}}const r=new Map;for(const o of n){const a=c.join(o.path,o.manifest.hero),s=se(a),d=`${o.name.trim().toLocaleLowerCase()}\0${o.author.trim().toLocaleLowerCase()}\0${s}`,i=r.get(d);(!i||Mt(o.id,i.id))&&r.set(d,o)}return[...r.values()].sort((o,a)=>o.name.localeCompare(a.name))}function At(e,n){var r,o;const t=(r=e.apps[n])==null?void 0:r.compat;return t!==void 0?t:((o=j(n))==null?void 0:o.acceptsGenericThemes)===!0}function se(e){const n=m.statSync(e),t=we.get(e);if(t&&t.size===n.size&&t.mtimeMs===n.mtimeMs)return t.hash;const r=le.createHash("sha256").update(m.readFileSync(e)).digest("hex");return we.set(e,{size:n.size,mtimeMs:n.mtimeMs,hash:r}),r}function Mt(e,n){const t=e.startsWith("custom-"),r=n.startsWith("custom-");return t!==r?!t:e.length<n.length||e.length===n.length&&e.localeCompare(n)<0}function Pe(e,n){return Y(n).find(t=>t.id===e)}function jt(e){const n=Pe(e);if(!n)return;const t=c.resolve(n.path,n.manifest.hero);if(t.startsWith(`${c.resolve(n.path)}${c.sep}`))return t}function Dt(e){return`theme-asset://local/${encodeURIComponent(e)}`}function Nt(e){const n=c.join(e.path,e.manifest.hero),t=m.readFileSync(n);return`data:${Rt(e.manifest.hero)};base64,${t.toString("base64")}`}function _t(e,n,t){const r=se(t);return Y().some(o=>o.name.trim().toLowerCase()!==e.trim().toLowerCase()||o.author.trim().toLowerCase()!==n.trim().toLowerCase()?!1:se(c.join(o.path,o.manifest.hero))===r)}function Ot(e){if(typeof e!="object"||e===null||Array.isArray(e))throw new Error("theme manifest must be an object");if(e.schemaVersion!==1)throw new Error(`unsupported theme schema ${e.schemaVersion}`);if(typeof e.id!="string"||!/^[a-z0-9-]+$/.test(e.id))throw new Error("theme id must use lowercase letters, numbers, and hyphens");if(typeof e.name!="string"||!e.name.trim())throw new Error("theme name must be a non-empty string");if(typeof e.author!="string")throw new Error("theme author must be a string");if(typeof e.hero!="string")throw new Error("theme hero must be a string");if(typeof e.colors!="object"||e.colors===null)throw new Error("theme colors must be an object");const n=["accent","secondary","surface","text"];for(const t of n)if(typeof e.colors[t]!="string"||!/^#[0-9a-fA-F]{6}$/.test(e.colors[t]))throw new Error(`theme color ${t} must be a hex color`);return{schemaVersion:1,id:e.id,name:e.name.trim(),author:e.author,hero:e.hero,colors:{accent:e.colors.accent,secondary:e.colors.secondary,surface:e.colors.surface,text:e.colors.text},copy:e.copy??void 0,apps:e.apps??{}}}function Rt(e){const n=c.extname(e).toLowerCase();return{".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".gif":"image/gif"}[n]||"image/png"}const Ae=5,Lt=32*1024*1024;let Q=null;function ue(){try{const e=JSON.parse(m.readFileSync(Me(),"utf8"));return he(e)}catch{return[]}}function Bt(e){const n=he(e),t=[...ue()];for(const o of n){const a=t.findIndex(s=>s.id===o.id);a>=0?t[a]=o:t.push(o)}const r=t.slice(0,Ae);return De(r),r}function Ut(e,n,t,r=4){const o=Ne()[e]??{};return[...n].sort((a,s)=>{if(a===t)return-1;if(s===t)return 1;const d=o[a]??{count:0,lastUsedAt:0},i=o[s]??{count:0,lastUsedAt:0};return i.count-d.count||i.lastUsedAt-d.lastUsedAt}).slice(0,r)}function ie(e,n){if(!/^[a-z0-9-]+$/i.test(e)||!/^[a-z0-9-]+$/i.test(n))return;const t=Ne(),r=t[e]??{},o=r[n]??{count:0};r[n]={count:o.count+1,lastUsedAt:Date.now()},t[e]=r,_e(je(),t)}function Wt(){return Q||(Q=new Promise((e,n)=>{const t=le.randomBytes(24).toString("hex"),r=Ce.createServer((o,a)=>{if(a.setHeader("Access-Control-Allow-Origin","*"),a.setHeader("Access-Control-Allow-Headers","Authorization, Content-Type"),a.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, OPTIONS"),a.setHeader("Access-Control-Allow-Private-Network","true"),o.method==="OPTIONS"){a.writeHead(204).end();return}if(o.headers.authorization!==`Bearer ${t}`){a.writeHead(401).end("Unauthorized");return}if(o.url==="/theme-usage"&&o.method==="POST"){ye(o,a,s=>{if(typeof(s==null?void 0:s.appId)!="string"||typeof(s==null?void 0:s.themeId)!="string")throw new Error("Invalid theme usage payload");ie(s.appId,s.themeId),te(a,200,{success:!0})});return}if(o.url!=="/custom-themes"){a.writeHead(404).end("Not found");return}if(o.method==="GET"){te(a,200,ue());return}if(o.method!=="PUT"){a.writeHead(405).end("Method not allowed");return}ye(o,a,s=>{const d=he(s);De(d),te(a,200,d)})});r.once("error",n),r.listen(0,"127.0.0.1",()=>{const o=r.address();if(!o||typeof o=="string"){r.close(),n(new Error("Shared custom theme service did not expose a TCP port"));return}const a=`http://127.0.0.1:${o.port}`;e({endpoint:`${a}/custom-themes`,usageEndpoint:`${a}/theme-usage`,token:t})})}),Q)}function Me(){return c.join(v.app.getPath("userData"),"custom-themes.json")}function je(){return c.join(v.app.getPath("userData"),"theme-usage.json")}function De(e){_e(Me(),e)}function Ne(){try{const e=JSON.parse(m.readFileSync(je(),"utf8"));return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}}function _e(e,n){m.mkdirSync(c.dirname(e),{recursive:!0}),m.writeFileSync(e,`${JSON.stringify(n,null,2)}
`)}function ye(e,n,t){let r=0;const o=[];e.on("data",a=>{if(r+=a.length,r>Lt){n.writeHead(413).end("Payload too large"),e.destroy();return}o.push(a)}),e.on("end",()=>{if(!n.headersSent)try{t(JSON.parse(Buffer.concat(o).toString("utf8")))}catch(a){n.writeHead(400).end(a.message)}})}function he(e){if(!Array.isArray(e))throw new Error("Custom themes must be an array");return e.slice(0,Ae).map((n,t)=>{var o;if(!n||typeof n!="object")throw new Error(`Invalid custom theme at index ${t}`);const r=n;if(typeof r.id!="string"||!/^custom-[a-z0-9-]+$/i.test(r.id))throw new Error(`Invalid custom theme id at index ${t}`);if(typeof r.name!="string"||!r.name.trim())throw new Error(`Invalid custom theme name at index ${t}`);if(typeof r.dataUrl!="string"||!/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(r.dataUrl))throw new Error(`Invalid custom theme image at index ${t}`);for(const a of["accent","secondary","surface","text"])if(typeof((o=r.colors)==null?void 0:o[a])!="string"||!/^#[0-9a-f]{6}$/i.test(r.colors[a]))throw new Error(`Invalid custom theme color ${a} at index ${t}`);return{id:r.id,name:r.name.trim(),dataUrl:r.dataUrl,colors:{accent:r.colors.accent,secondary:r.colors.secondary,surface:r.colors.surface,text:r.colors.text}}})}function te(e,n,t){e.writeHead(n,{"Content-Type":"application/json; charset=utf-8"}),e.end(JSON.stringify(t))}const M="dream-work-style",$="dream-work-menu",z=new Map,H=new Map,_=new Map,Oe=new Map,q=new Map,B=new Map,b={id:"wb-dream-sentinel-id",hero:"data:image/png;base64,WBDREAMHEROSENTINEL",accent:"#010203",secondary:"#040506",surface:"#070809",text:"#0a0b0c"};let X=null;async function Ft(){if(!X)try{const e=c.resolve(__dirname,"manager","codex-dream-skin.css");X=await Ye.readFile(e,"utf-8")}catch(e){console.warn("[injector] Failed to load Codex base CSS:",e.message),X=""}return X}async function Re(e,n,t,r={}){const o=j(e),a=r.rendererUrlHint?[r.rendererUrlHint]:(o==null?void 0:o.rendererHints)??["renderer/index.html","index.html"];let s=[],d="No renderer targets found";for(const i of a)try{if(console.log(`[injector] Trying hint "${i}" on port ${t}`),s=await $t(t,i,{timeoutMs:2e4,pollMs:500}),s.length>0){console.log(`[injector] Found ${s.length} targets with hint "${i}"`);break}}catch(l){d=l.message,console.log(`[injector] Hint "${i}" failed: ${l.message}`)}if(e==="kimi")try{const i=await Le(t);i.length>0&&(s=i)}catch(i){console.log(`[injector] Failed to collect all Kimi targets: ${i.message}`)}if(s.length===0)try{console.log(`[injector] Strict hints failed, trying relaxed page-target fallback on port ${t}`);const l=await(await fetch(`http://127.0.0.1:${t}/json/list`,{signal:AbortSignal.timeout(5e3)})).json(),u=(Array.isArray(l)?l:[]).filter(me).sort((h,p)=>{const k=[String(h.id??""),h.url,h.webSocketDebuggerUrl],w=[String(p.id??""),p.url,p.webSocketDebuggerUrl];for(let E=0;E<k.length;E++){if(k[E]<w[E])return-1;if(k[E]>w[E])return 1}return 0});u.length>0&&(console.log(`[injector] Relaxed fallback found ${u.length} page targets`),s=u)}catch(i){console.log(`[injector] Relaxed fallback failed: ${i.message}`)}if(s.length===0)return{success:!1,applied:0,error:d};try{const i=Y(e);if(console.log(`[injector] Loaded ${i.length} themes`),!i.some(g=>g.id===n))return{success:!1,applied:0,error:`Theme ${n} is not compatible with ${e}`};const l=Ut(e,i.map(g=>g.id),n),u=new Map(i.map(g=>[g.id,g])),h=l.map(g=>u.get(g)).filter(Boolean),p=new Map;for(const g of h)p.set(g.id,{name:g.name,css:xe(e,g.manifest,Nt(g)),surface:g.manifest.colors.surface});const k=Array.from(p.entries()).map(([g,y])=>{var I;return{id:g,name:y.name,css:y.css,surface:y.surface,accent:((I=i.find(f=>f.id===g))==null?void 0:I.manifest.colors.accent)??"#24c9d7"}});let w=ue();if(w.length===0){const g=e==="workbuddy"?"dreamCustomThemes":"dreamCodexCustomThemes";for(const y of s){const I=new O(y.webSocketDebuggerUrl);try{await I.open();const f=await I.evaluate(`(() => localStorage.getItem(${JSON.stringify(g)}) || '[]')()`),C=JSON.parse(f);if(Array.isArray(C)&&C.length>0){w=Bt(C);break}}catch(f){console.warn(`[injector] Failed to import existing custom themes from ${e} target ${y.id}:`,f)}finally{I.close()}}}const E=await Wt(),P=e==="workbuddy"?nn({styleId:M,menuId:$,currentThemeId:n,themes:k,sharedCustomThemes:w,sharedCustomThemeService:E,cssTemplate:We({id:b.id,colors:{accent:b.accent,secondary:b.secondary,surface:b.surface,text:b.text},copy:null},b.hero,{accent:b.accent,secondary:b.secondary,surface:b.surface,text:b.text})}):e==="hana-agent"?Vt({styleId:M,menuId:$,currentThemeId:n,themes:k,sharedCustomThemes:w,sharedCustomThemeService:E,cssTemplate:Ue({id:b.id,colors:{accent:b.accent,secondary:b.secondary,surface:b.surface,text:b.text}},b.hero,{accent:b.accent,secondary:b.secondary,surface:b.surface,text:b.text})}):rn({styleId:M,menuId:$,currentThemeId:n,appId:e,themes:k,sharedCustomThemes:w,sharedCustomThemeService:E,cssTemplate:xe(e,{id:b.id,colors:{accent:b.accent,secondary:b.secondary,surface:b.surface,text:b.text}},b.hero)});let R=0;for(const g of s)try{console.log(`[injector] Injecting to target ${g.id}: ${g.url}`);const y=new O(g.webSocketDebuggerUrl);if(await y.open(),e==="workbuddy"){let f=!1;const C=Date.now()+15e3;for(;Date.now()<C&&(f=await y.evaluate(`(() => {
              const body = document.body;
              return body?.dataset.applicationName === 'workbuddy' && Boolean(
                document.querySelector('[data-view-id], .teams-container, .conversation-list, .main-content')
              );
            })()`).catch(()=>!1),!f);)await new Promise(S=>setTimeout(S,100));if(!f){console.warn(`[injector] Skipping non-WorkBuddy target ${g.id}: ${g.url}`),y.close();continue}}if(e==="codex"){const f=await Ft();f&&await y.evaluate(`(() => {
              const existing = document.getElementById('codex-dream-skin-base');
              if (!existing) {
                const style = document.createElement('style');
                style.id = 'codex-dream-skin-base';
                style.textContent = ${JSON.stringify(f)};
                document.head.appendChild(style);
              }
            })()`)}if(e==="hana-agent"||e==="kimi"){const f=`(() => {
            const inject = () => ${P};
            if (document.readyState === 'loading') {
              window.addEventListener('DOMContentLoaded', inject, { once: true });
            } else {
              inject();
            }
          })()`,C=e==="hana-agent"?z:Oe,S=C.get(g.id);S&&await y.removeScriptToEvaluateOnNewDocument(S).catch(()=>{});const L=await y.addScriptToEvaluateOnNewDocument(f);L&&C.set(g.id,L)}const I=await y.evaluate(e==="hana-agent"?`(() => { window.__dreamWorkForceApply = true; return ${P}; })()`:P);if(console.log(`[injector] Injection result for target ${g.id}:`,I),e==="hana-agent"){let f=!1;for(let C=0;C<20&&(f=await y.evaluate(`(() => {
              const host = document.getElementById('${$}-host');
              return Boolean(
                document.getElementById('${M}') &&
                host?.shadowRoot?.getElementById('${$}') &&
                document.documentElement.dataset.dreamTheme
              );
            })()`).catch(()=>!1),!f);C++)await new Promise(S=>setTimeout(S,100));if(!f){console.warn(`[injector] HanaAgent injection did not become ready for target ${g.id}`),y.close();continue}}if(e==="codex")for(let f=1;f<=4;f++){const C=await y.evaluate(`(() => {
              const shellMain = document.querySelector('main.main-surface') || document.querySelector('main');
              let homeCandidate = shellMain ? (shellMain.matches('[role="main"]') ? shellMain : shellMain.querySelector('[role="main"]')) : null;
              
              // Fallback: if no [role="main"] found, try broader selectors.
              if (!homeCandidate) {
                homeCandidate = document.querySelector('[class*="home-main-content"]') ||
                                document.querySelector('[class*="home-content"]') ||
                                document.querySelector('main') ||
                                document.querySelector('.app-shell') ||
                                document.body;
              }
              
              if (!homeCandidate) return { error: 'no homeCandidate' };
              
              const hasGameSource = Boolean(homeCandidate.querySelector('[data-feature="game-source"]'));
              const hasSuggestions = Boolean(homeCandidate.querySelector('[class*="group/home-suggestions"]'));
              const hasTaskContent = Boolean(homeCandidate.querySelector('.thread-scroll-container, [data-message-author-role], article, .message'));
              
              // If we fell back to body/main and can't detect home signals, still tag it
              // so the CSS selectors have something to bind to.
              const isFallback = homeCandidate === document.body || homeCandidate.matches('main');
              const isHomeContainer = homeCandidate.matches('[class*="home-main-content"], [class*="container-name:home-main-content"]');
              if ((hasGameSource || hasSuggestions || isHomeContainer || isFallback) && !hasTaskContent) {
                homeCandidate.classList.add('dream-skin-home');
                if (shellMain) shellMain.classList.add('dream-skin-home-shell');
              } else if (shellMain) {
                shellMain.classList.remove('dream-skin-home-shell');
              }
              return {
                homeClasses: Array.from(homeCandidate.classList),
                shellClasses: shellMain ? Array.from(shellMain.classList) : [],
                hasGameSource,
                hasSuggestions,
                hasTaskContent,
                isHomeContainer,
                isFallback
              };
            })`);if(C.homeClasses&&C.homeClasses.includes("dream-skin-home")){console.log(`[injector] Codex home detection for ${g.id}: attempt=${f}`,JSON.stringify(C));break}f<4&&await new Promise(S=>setTimeout(S,800))}if(e==="codex")try{const f=await y.evaluate(`(() => {
              const html = document.documentElement;
              const body = document.body;
              const style = document.getElementById('dream-work-style');
              const baseStyle = document.getElementById('codex-dream-skin-base');
              const menu = document.getElementById('dream-work-menu');
              
              // Check computed styles of key elements
              const mainSurface = document.querySelector('main.main-surface') || document.querySelector('main');
              const sidebar = document.querySelector('aside.app-shell-left-panel');
              const homeEl = document.querySelector('.dream-skin-home');
              
              return {
                htmlClasses: Array.from(html.classList),
                bodyClasses: Array.from(body.classList),
                hasStyle: Boolean(style),
                styleLength: style ? style.textContent.length : 0,
                hasBaseStyle: Boolean(baseStyle),
                baseStyleLength: baseStyle ? baseStyle.textContent.length : 0,
                hasMenu: Boolean(menu),
                title: document.title,
                url: window.location.href,
                mainSurfaceClasses: mainSurface ? Array.from(mainSurface.classList) : null,
                sidebarClasses: sidebar ? Array.from(sidebar.classList) : null,
                homeClasses: homeEl ? Array.from(homeEl.classList) : null,
                codexDreamSkinOnHtml: html.classList.contains('codex-dream-skin'),
                dreamTheme: html.dataset.dreamTheme || null
              };
            })()`);console.log(`[injector] Codex debug info for ${g.id}:`,JSON.stringify(f,null,2))}catch(f){console.error(`[injector] Failed to get debug info for ${g.id}:`,f)}y.close(),R++}catch(y){console.error(`[injector] Failed to inject to target ${g.id}:`,y)}if(e==="hana-agent"&&R>0){const g=new Set(s.map(C=>C.id)),y=Date.now()+2e4;let I="",f=0;for(;Date.now()<y;){let C=[];try{C=await J(t,".hanako/artifacts/renderer/",{timeoutMs:2e3,quiet:!0})}catch{}const S=C[0];if(!S){I="",f=0,await new Promise(N=>setTimeout(N,250));continue}if(!g.has(S.id)){console.log(`[injector] HanaAgent created renderer target ${S.id}; injecting theme`);const N=new O(S.webSocketDebuggerUrl);try{await N.open();const ze=`(() => {
              const inject = () => ${P};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,ge=await N.addScriptToEvaluateOnNewDocument(ze);ge&&z.set(S.id,ge),await N.evaluate(`(() => { window.__dreamWorkForceApply = true; return ${P}; })()`),g.add(S.id)}finally{N.close()}}const L=new O(S.webSocketDebuggerUrl);let pe=!1;try{await L.open(),pe=await L.evaluate(`(() => {
            const host = document.getElementById('${$}-host');
            return Boolean(document.getElementById('${M}') && host?.shadowRoot?.getElementById('${$}') && document.documentElement.dataset.dreamTheme);
          })()`)}catch{}finally{L.close()}if(pe){if(I!==S.id)I=S.id,f=Date.now();else if(Date.now()-f>=2e3)return zt(t,P,g),ie(e,n),{success:!0,applied:1}}else I="",f=0;await new Promise(N=>setTimeout(N,250))}return{success:!1,applied:0,error:"HanaAgent renderer did not stabilize with the injected theme"}}return e==="kimi"&&R>0&&Ht(t,P,new Set(s.map(g=>g.id))),R>0&&ie(e,n),{success:R>0,applied:R}}catch(i){return console.error("[injector] Injection failed:",i),{success:!1,applied:0,error:i.message}}}async function Le(e){const n=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(2e3)});if(!n.ok)throw new Error(`HTTP ${n.status}`);const t=await n.json();return(Array.isArray(t)?t:[]).filter(r=>{if((r==null?void 0:r.type)!=="page"||!r.webSocketDebuggerUrl)return!1;const o=String(r.url??"");return o.includes("kimi-agent.html")||o.includes("kimichat.html")||/^https:\/\/(?:www\.)?kimi\.com\//.test(o)})}function Ht(e,n,t){const r=q.get(e);r&&clearInterval(r);const o=(B.get(e)??0)+1;B.set(e,o);let a=!1;const s=setInterval(async()=>{if(!(a||B.get(e)!==o)){a=!0;try{const d=await Le(e);for(const i of d){if(B.get(e)!==o)return;const l=new O(i.webSocketDebuggerUrl);try{await l.open();const u=await l.evaluate(`(() => ({
            ready: Boolean(document.getElementById('${M}') && document.documentElement.dataset.dreamTheme),
            restored: document.documentElement.dataset.dreamThemeRestored === 'true'
          }))()`).catch(()=>({ready:!1,restored:!1}));if(u.ready||u.restored){t.add(i.id);continue}if(console.log(`[injector] Kimi watcher restoring theme on target ${i.id}: ${i.url}`),!t.has(i.id)){const h=`(() => {
              const inject = () => ${n};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,p=await l.addScriptToEvaluateOnNewDocument(h);p&&Oe.set(i.id,p)}await l.evaluate(n),t.add(i.id)}finally{l.close()}}}catch{await Be(e)||(clearInterval(s),q.delete(e))}finally{a=!1}}},750);s.unref(),q.set(e,s)}async function qt(e,n,t={}){return Kt(e,n,t)}function zt(e,n,t){const r=H.get(e);r&&clearInterval(r);const o=(_.get(e)??0)+1;_.set(e,o);let a=!1;const s=setInterval(async()=>{if(!a&&_.get(e)===o){a=!0;try{const i=(await J(e,".hanako/artifacts/renderer/",{timeoutMs:1e3,quiet:!0}))[0];if(!i||_.get(e)!==o)return;const l=new O(i.webSocketDebuggerUrl);try{await l.open();const u=await l.evaluate(`(() => {
          const host = document.getElementById('${$}-host');
          if (document.documentElement.dataset.dreamThemeRestored === 'true') return 'restored';
          return document.getElementById('${M}') && host?.shadowRoot?.getElementById('${$}') && document.documentElement.dataset.dreamTheme
            ? 'ready'
            : 'missing';
        })()`).catch(()=>"missing");if(u==="ready"||u==="restored"){t.add(i.id);return}if(console.log(`[injector] HanaAgent watcher restoring theme on renderer target ${i.id}`),_.get(e)!==o)return;const h=`(() => {
          const inject = () => ${n};
          if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
          else inject();
        })()`;if(!t.has(i.id)){const p=await l.addScriptToEvaluateOnNewDocument(h);p&&z.set(i.id,p)}if(await l.evaluate(n),_.get(e)!==o){await l.evaluate(`(() => {
            document.getElementById('${M}')?.remove();
            document.getElementById('${$}-host')?.remove();
            clearInterval(window.__dreamWorkMenuGuard);
            delete window.__dreamWorkMenuGuard;
            delete document.documentElement.dataset.dreamTheme;
          })()`).catch(()=>{});return}t.add(i.id)}finally{l.close()}}catch{await Be(e)||(clearInterval(s),H.delete(e))}finally{a=!1}}},1e3);H.set(e,s)}async function Be(e){try{return(await fetch(`http://127.0.0.1:${e}/json/version`,{signal:AbortSignal.timeout(500)})).ok}catch{return!1}}async function Kt(e,n,t={}){var d;const r=t.rendererUrlHint?[t.rendererUrlHint]:((d=j(e))==null?void 0:d.rendererHints)??["renderer/index.html","index.html"];let o=[];for(const i of r)try{if(o=await J(n,i,{timeoutMs:1e3,quiet:!0}),o.length>0)break}catch{}if(o.length===0)try{const l=await(await fetch(`http://127.0.0.1:${n}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();o=(Array.isArray(l)?l:[]).filter(me).sort((u,h)=>{const p=[String(u.id??""),u.url,u.webSocketDebuggerUrl],k=[String(h.id??""),h.url,h.webSocketDebuggerUrl];for(let w=0;w<p.length;w++){if(p[w]<k[w])return-1;if(p[w]>k[w])return 1}return 0})}catch{}if(o.length===0)return{installed:!1,menu:!1,targets:0};const a=[];for(const i of o){const l=new O(i.webSocketDebuggerUrl);try{if(await l.open(),e==="workbuddy"&&!await l.evaluate("(() => document.body?.dataset.applicationName === 'workbuddy')()"))continue;const u=await l.evaluate(`(() => {
        const style = document.getElementById('${M}');
        const menuHost = document.getElementById('${$}-host');
        const menu = document.getElementById('${$}') || menuHost?.shadowRoot?.getElementById('${$}');
        return JSON.stringify({
          installed: Boolean(style),
          menu: Boolean(menu),
          themeId: document.documentElement.dataset.dreamTheme ?? undefined
        });
      })()`),h=JSON.parse(u);a.push(h)}catch(u){console.warn(`[injector] Status check failed for ${e} target ${i.id}:`,u)}finally{l.close()}}const s=a.find(i=>i.installed&&i.themeId)??a.find(i=>i.installed);return{installed:a.some(i=>i.installed),menu:a.some(i=>i.menu),themeId:s==null?void 0:s.themeId,targets:a.length}}async function Jt(e,n,t={}){var a;if(e==="hana-agent"){_.set(n,(_.get(n)??0)+1);const s=H.get(n);s&&clearInterval(s),H.delete(n)}if(e==="kimi"){B.set(n,(B.get(n)??0)+1);const s=q.get(n);s&&clearInterval(s),q.delete(n)}const r=t.rendererUrlHint??((a=j(e))==null?void 0:a.rendererHints[0])??"renderer/index.html";let o=[];try{o=await J(n,r)}catch{}if(o.length===0)try{const d=await(await fetch(`http://127.0.0.1:${n}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();o=(Array.isArray(d)?d:[]).filter(me).sort((i,l)=>{const u=[String(i.id??""),i.url,i.webSocketDebuggerUrl],h=[String(l.id??""),l.url,l.webSocketDebuggerUrl];for(let p=0;p<u.length;p++){if(u[p]<h[p])return-1;if(u[p]>h[p])return 1}return 0})}catch{}if(o.length===0)return{success:!1};for(const s of e==="hana-agent"?o:o.slice(0,1)){const d=new O(s.webSocketDebuggerUrl);if(await d.open(),e==="hana-agent"){const i=z.get(s.id);i&&(await d.removeScriptToEvaluateOnNewDocument(i).catch(()=>{}),z.delete(s.id))}await d.evaluate(`(() => {
      ${e==="hana-agent"?`try { localStorage.setItem('dream-work-theme:hana-agent:restored', '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';`:""}
      document.getElementById('${M}')?.remove();
      document.getElementById('${$}')?.remove();
      document.getElementById('${$}-host')?.remove();
      clearInterval(window.__dreamWorkMenuGuard);
      delete window.__dreamWorkMenuGuard;
      if (window.__dreamWorkOutsideClick) {
        document.removeEventListener('pointerdown', window.__dreamWorkOutsideClick, true);
        delete window.__dreamWorkOutsideClick;
      }
      delete document.documentElement.dataset.dreamTheme;
      delete document.documentElement.dataset.dreamShell;
      return true;
    })`),d.close()}return{success:!0}}function xe(e,n,t){var a,s,d,i;const r={accent:((a=n.colors)==null?void 0:a.accent)??"#24c9d7",secondary:((s=n.colors)==null?void 0:s.secondary)??"#ef8fd3",surface:((d=n.colors)==null?void 0:d.surface)??"#f7fbff",text:((i=n.colors)==null?void 0:i.text)??"#17344f"};if(e==="codex")return en(n,t,r);const o=j(e);return(o==null?void 0:o.kind)==="vscode-work"?Gt(n,t,r):(o==null?void 0:o.kind)==="generic-work"?e==="hana-agent"?Ue(n,t,r):e==="kimi"?Xt(n,t,r):Qt(e,n,t,r):We({...n,copy:null},t,r)}function Gt(e,n,t){return`/* DREAM_THEME:${e.id} */
:root {
  --vscode-editor-background: transparent !important;
  --vscode-foreground: ${t.text} !important;
  --vscode-sideBar-background: color-mix(in srgb, ${t.surface} 92%, transparent) !important;
  --vscode-panel-background: transparent !important;
  --vscode-input-background: color-mix(in srgb, ${t.surface} 94%, transparent) !important;
  --vscode-button-background: ${t.accent} !important;
  --vscode-button-foreground: #ffffff !important;
  --vscode-focusBorder: ${t.accent} !important;
}
body.solo-lite {
  background-color: ${t.surface} !important;
  color: ${t.text} !important;
}
body.solo-lite #root {
  background-color: ${t.surface} !important;
  background-image: url(${JSON.stringify(n)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  color: ${t.text} !important;
}
body.solo-lite #solo-lite-root {
  background-color: transparent !important;
  background-image: none !important;
}
.panel-content,
.initial-chat-panel,
.solo-lite-chat-panel-container {
  background-color: transparent !important;
  background-image: none !important;
  color: ${t.text} !important;
}
.panel-content > *,
.initial-chat-panel > *,
.initial-chat-panel-content,
.solo-lite-chat-panel-container > *,
.solo-lite-chat-panel-main,
.solo-lite-chat-panel,
.solo-lite-chat-panel-content > *,
.solo-lite-chat-container,
.session-panel-cache-layout,
.virtualized-message-list-view__content,
.virtualized-message-list-view,
[class*="virtualized-message-list-view__scroller"],
[class*="virtualized-message-list-view__virtuoso"] {
  background-color: transparent !important;
  background-image: none !important;
}
.messageInputContainer {
  background-color: color-mix(in srgb, ${t.surface} 76%, transparent) !important;
  color: ${t.text} !important;
  backdrop-filter: blur(12px) saturate(105%);
}
.messageInputContainer {
  border-color: color-mix(in srgb, ${t.accent} 34%, transparent) !important;
  box-shadow: 0 16px 44px color-mix(in srgb, ${t.surface} 34%, transparent) !important;
}
.messageInputContainer :where(
  .chat-input-v2-editor-part,
  .chat-input-v2-slot-header,
  .chat-input-v2-editor-part-lower-content,
  .chat-input-v2-editor-part-lower__left,
  .chat-input-v2-editor-part-lower__right,
  .chat-input-v2-slot-toolbar-right,
  .chat-input-v2-slot-overlay,
  .messageInputToolbarIconBtn,
  .messageInputPluginToolbar,
  .messageInputPluginToolbarIconWrapper,
  .messageInputPluginToolbarMore,
  .chat-input-v2-send-button
) {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
}
html body.solo-lite #root .initial-chat-panel .messageInputContainer button.messageInputToolbarIconBtn,
html body.solo-lite #root .initial-chat-panel .messageInputContainer button.messageInputPluginToolbar,
html body.solo-lite #root .initial-chat-panel .messageInputContainer .messageInputPluginToolbarIconWrapper,
html body.solo-lite #root .initial-chat-panel .messageInputContainer .messageInputPluginToolbarMore,
html body.solo-lite #root .initial-chat-panel .messageInputContainer .chat-input-v2-editor-part-lower__right,
html body.solo-lite #root .initial-chat-panel .messageInputContainer .chat-input-v2-slot-toolbar-right,
html body.solo-lite #root .solo-lite-chat-panel-content .messageInputContainer button.messageInputToolbarIconBtn,
html body.solo-lite #root .solo-lite-chat-panel-content .messageInputContainer button.messageInputPluginToolbar,
html body.solo-lite #root .solo-lite-chat-panel-content .messageInputContainer .messageInputPluginToolbarIconWrapper,
html body.solo-lite #root .solo-lite-chat-panel-content .messageInputContainer .messageInputPluginToolbarMore,
html body.solo-lite #root .solo-lite-chat-panel-content .messageInputContainer .chat-input-v2-editor-part-lower__right,
html body.solo-lite #root .solo-lite-chat-panel-content .messageInputContainer .chat-input-v2-slot-toolbar-right {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
}
html body.solo-lite #root :where(.initial-chat-panel, .solo-lite-chat-panel-content) .messageInputContainer
  :where(button, button span, .messageInputPluginToolbarMore, .core-model-select-trigger, .rtcVoicePluginButton, .voiceCallButton, .inputBarButton-ncFFma) {
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
}
html body.solo-lite #root :where(.initial-chat-panel, .solo-lite-chat-panel-content) .messageInputContainer
  :where(button, [role="button"]) svg {
  color: ${t.text} !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}
.messageInputContainer .chat-input-v2-slot-overlay {
  pointer-events: none !important;
}
.messageInputContainer :where(
  button,
  .messageInputToolbarIconBtn,
  .messageInputPluginToolbar,
  .core-model-select-trigger,
  .rtcVoicePluginButton,
  .voiceCallButton,
  .inputBarButton-ncFFma
) {
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
}
.messageInputContainer :where(button, [role="button"]) svg {
  color: ${t.text} !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}
.messageInputContainer :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${t.accent} 16%, transparent) !important;
}
.messageInputContainer .chat-input-v2-send-button:not(.disabled) {
  background-color: ${t.accent} !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}
.messageInputContainer .chat-input-v2-send-button.disabled {
  opacity: .5 !important;
}
.messageInputContainer .projectButtonPlaceholderWork-JV100D,
.messageInputContainer [class*="Placeholder"] {
  color: color-mix(in srgb, ${t.text} 66%, transparent) !important;
  -webkit-text-fill-color: color-mix(in srgb, ${t.text} 66%, transparent) !important;
}
html[data-dream-shell="dark"] body.solo-lite #root .messageInputContainer
  :where(.inputBarButton-ncFFma, .inputBarButton-ncFFma *, .core-model-select-trigger, .core-model-select-trigger *) {
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-base-content, .soloLiteMenubar, .task-list-base-footer)
  :where(
    .tab-pLFRtu,
    .tab-pLFRtu *,
    .task-list-new-task-item,
    .task-list-new-task-item *,
    .taskItem,
    .taskItem *,
    .task-list-heading,
    .task-list-heading *,
    .task-list-group-title,
    .task-list-group-title *,
    .accountTrigger-rIX2_l,
    .accountTrigger-rIX2_l *,
    .solo-mobile-expanded-btn,
    .solo-mobile-expanded-btn *,
    .menubar-menu-title,
    .menubar-menu-title *
  ) {
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-heading, .task-list-group-title, .menubar-menu-title) {
  opacity: .78 !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-base-content, .soloLiteMenubar, .task-list-base-footer, .messageInputContainer) svg {
  color: ${t.text} !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-base-content, .soloLiteMenubar, .task-list-base-footer, .messageInputContainer)
  :where(svg[fill]:not([fill="none"]), svg [fill]:not([fill="none"])) {
  fill: currentColor !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-base-content, .soloLiteMenubar, .task-list-base-footer, .messageInputContainer)
  :where(svg[stroke]:not([stroke="none"]), svg [stroke]:not([stroke="none"])) {
  stroke: currentColor !important;
}
`}function Qt(e,n,t,r){const o={"qoder-work":'#root > div, [class*="layout"], [class*="content-area"], [class*="main-content"]',catpaw:".main-area, .main-content-container, .main-content, .chat-content-area",zcode:'main, main > div, [class*="min-h-0"][class*="flex-1"]',"qwen-office":".agents-content-area, .agents-parchment-paper-surface"},a={"qoder-work":'[class*="sidebar"]',catpaw:".sidebar-wrapper, .sidebar",zcode:"#sidebar, aside","qwen-office":".agents-sidebar, .group\\/sidebar"},s=o[e]??'main, [role="main"], [class*="main-content"]',d=a[e]??'aside, nav, [class*="sidebar"]',i=e==="qoder-work"?Zt(r):e==="catpaw"?Yt(t,r):"";return`/* DREAM_THEME:${n.id} */
:root {
  --dream-work-accent: ${r.accent};
  --dream-work-secondary: ${r.secondary};
  --dream-work-surface: ${r.surface};
  --dream-work-text: ${r.text};
  --catpaw-bg-primary: ${r.surface} !important;
  --catpaw-text-primary: ${r.text} !important;
  --catpaw-text-secondary: color-mix(in srgb, ${r.text} 72%, transparent) !important;
  --agents-sidebar-material-bg: color-mix(in srgb, ${r.surface} 90%, transparent) !important;
  --text-base-primary: ${r.text} !important;
  --text-base-secondary: color-mix(in srgb, ${r.text} 72%, transparent) !important;
  --bg-base: color-mix(in srgb, ${r.surface} 86%, transparent) !important;
}
html, body, #root { background: ${r.surface} !important; color: ${r.text} !important; }
:is(${d}) {
  background: color-mix(in srgb, ${r.surface} 90%, transparent) !important;
  color: ${r.text} !important;
  backdrop-filter: blur(20px) saturate(108%);
}
:is(${s}) {
  background: linear-gradient(90deg, color-mix(in srgb, ${r.surface} 82%, transparent) 0 12%, transparent 42%), url(${JSON.stringify(t)}) center / cover no-repeat fixed !important;
  color: ${r.text} !important;
}
:is(${s}) :where([class*="message"], [class*="chat"], [class*="composer"], [class*="editor"], [contenteditable="true"], textarea) {
  color: ${r.text} !important;
}
:is(${s}) :where([class*="message"], [class*="bubble"], [class*="composer"], [class*="input-container"]) {
  background-color: color-mix(in srgb, ${r.surface} 88%, transparent) !important;
  backdrop-filter: blur(16px) saturate(108%);
}
:is(${s}) :where(p, span, li, h1, h2, h3, h4, strong, em) { color: ${r.text} !important; }
button[class*="bg-primary"], button[class*="bg-accent"] { background-color: ${r.accent} !important; color: #fff !important; }
${i}`}function Ue(e,n,t){return`/* DREAM_THEME:${e.id} */
:root {
  --dream-work-accent: ${t.accent};
  --dream-work-secondary: ${t.secondary};
  --dream-work-surface: ${t.surface};
  --dream-work-text: ${t.text};
}
html, body, #react-root, .app-shell {
  background-color: ${t.surface} !important;
  background-image: url(${JSON.stringify(n)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  color: ${t.text} !important;
}
.titlebar, .app, .main-content, .chat-area, .input-area {
  background-color: transparent !important;
  background-image: none !important;
}
#sidebar, #jianSidebar .universal-card, #previewBody {
  background: color-mix(in srgb, ${t.surface} 66%, transparent) !important;
  border-color: color-mix(in srgb, ${t.accent} 24%, transparent) !important;
  color: ${t.text} !important;
  backdrop-filter: blur(20px) saturate(110%) !important;
}
.titlebar {
  background: color-mix(in srgb, ${t.surface} 62%, transparent) !important;
  color: ${t.text} !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
}
[class*="input-wrapper"] {
  background: color-mix(in srgb, ${t.surface} 78%, transparent) !important;
  border-color: color-mix(in srgb, ${t.accent} 30%, transparent) !important;
  color: ${t.text} !important;
  box-shadow: 0 16px 42px color-mix(in srgb, ${t.surface} 28%, transparent) !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
}
[class*="input-wrapper"] :where(textarea, input, [contenteditable="true"]) {
  background: transparent !important;
  color: ${t.text} !important;
  caret-color: ${t.accent} !important;
}
#sidebar :where(button, [role="button"]):hover,
#jianSidebar :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${t.accent} 16%, transparent) !important;
}
:where(button[class*="primary"], button[type="submit"]) {
  background-color: ${t.accent} !important;
  color: #ffffff !important;
}`}function Xt(e,n,t){const r=t.accent;t.secondary;const o=t.surface,a=t.text;return`/* DREAM_THEME:${e.id} */
html.dark, html {
  --Bg-Primary: color-mix(in srgb, ${o} 54%, transparent) !important;
  --Bg-Primary90: color-mix(in srgb, ${o} 48%, transparent) !important;
  --Bg-Secondary: color-mix(in srgb, ${o} 46%, transparent) !important;
  --Bg-Tertiary: color-mix(in srgb, ${o} 36%, transparent) !important;
  --Bg-Quaternary: color-mix(in srgb, ${o} 28%, transparent) !important;
  --BgGp-Primary: color-mix(in srgb, ${o} 54%, transparent) !important;
  --BgGp-Primary90: color-mix(in srgb, ${o} 48%, transparent) !important;
  --BgGp-Secondary: color-mix(in srgb, ${o} 46%, transparent) !important;
  --BgGp-Tertiary: color-mix(in srgb, ${o} 36%, transparent) !important;
  --Bg-GroundPC: color-mix(in srgb, ${o} 20%, transparent) !important;
  --Labels-Primary: color-mix(in srgb, ${a} 88%, #000000) !important;
  --Labels-Secondary: color-mix(in srgb, ${a} 62%, transparent) !important;
  --Labels-Tertiary: color-mix(in srgb, ${a} 44%, transparent) !important;
  --Labels-Quaternary: color-mix(in srgb, ${a} 28%, transparent) !important;
  --Colors-KMBlue: ${r} !important;
  --Others-KMBlue10: color-mix(in srgb, ${r} 12%, transparent) !important;
  --Others-BubbleBlue: color-mix(in srgb, ${r} 26%, ${o}) !important;
  --Others-TextSelected: color-mix(in srgb, ${r} 22%, transparent) !important;
  --Syntax-Mark: ${r} !important;
}
html, body, .page {
  background-color: ${o} !important;
  color: ${a} !important;
}
body {
  background-image: url(${JSON.stringify(n)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}
.page, #app, .n-config-provider,
.home-view, .home-scroll, .home-scroll-content,
.conversation-tab, .conversation-view {
  background: transparent !important;
}
.sidebar, main.main-pane {
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.sidebar {
  background: color-mix(in srgb, ${o} 30%, transparent) !important;
  border-right: 1px solid color-mix(in srgb, ${r} 18%, transparent) !important;
  color: ${a} !important;
}
main.main-pane {
  background: color-mix(in srgb, ${o} 16%, transparent) !important;
  border-radius: 12px !important;
  color: ${a} !important;
}
.app > .main {
  background: color-mix(in srgb, ${o} 16%, transparent) !important;
}
.app > .main :where(.publisher-stage, .layout-sticky-space, .layout-sticky-group, .layout-header) {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.app > .main :where(#chat-box, .home-input-options) {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.app > .main .chat-editor-content {
  background: color-mix(in srgb, ${o} 42%, transparent) !important;
  border-color: color-mix(in srgb, ${r} 24%, transparent) !important;
}
main.main-pane .conversation-tab,
main.main-pane .conversation-view,
main.main-pane [class*="conversation"] {
  background: transparent !important;
  color: ${a} !important;
}
main.main-pane :where([class*="message"], [class*="chat"], [class*="composer"], [class*="input"], [contenteditable="true"], textarea) {
  background-color: color-mix(in srgb, ${o} 66%, transparent) !important;
  border-color: color-mix(in srgb, ${r} 30%, transparent) !important;
  color: ${a} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
main.main-pane :where(.message-list, .message-scroller, .message-list-inner, .messages, .msg-assistant, .chat-markdown) {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
main.main-pane :where(.composer-dock, .composer-inner, .composer-wrap, .composer-editor, .composer-toolbar) {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
main.main-pane .composer.docked {
  background: color-mix(in srgb, ${o} 42%, transparent) !important;
}
main.main-pane :where([class*="message"], [class*="chat"], [class*="composer"], [class*="input"]) :where(p, span, li, h1, h2, h3, h4, strong, em, a) {
  color: ${a} !important;
}
[contenteditable="true"], textarea, input {
  color: ${a} !important;
  caret-color: ${r} !important;
}
:where(button[class*="primary"], button[mode="primary"]) {
  background-color: ${r} !important;
  color: #ffffff !important;
}
.nav-item, .mode-tab, .sidebar-scroll a, .sidebar-scroll span, .sidebar-footer, .account {
  color: ${a} !important;
}
.nav-item:hover, .mode-tab:hover, [class*="nav-item"]:hover {
  background-color: color-mix(in srgb, ${r} 18%, transparent) !important;
}
.win-titlebar-drag {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.message-list-container:where(.top) {
  display: none !important;
}`}function Vt(e){return`(() => {
    const themes = ${JSON.stringify(e.themes)};
    const cssTemplate = ${JSON.stringify(e.cssTemplate)};
    const sentinels = ${JSON.stringify(b)};
    const restoreKey = 'dream-work-theme:hana-agent:restored';
    const customStorageKey = 'dreamCodexCustomThemes';
    const selectedKey = 'dream-work-theme:hana-agent:selected-theme';
    const sharedCustomThemes = ${JSON.stringify(e.sharedCustomThemes)};
    const sharedCustomThemeService = ${JSON.stringify(e.sharedCustomThemeService)};
    const recordPresetUsage = (themeId) => fetch(sharedCustomThemeService.usageEndpoint, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ appId: 'hana-agent', themeId }),
    }).catch(() => {});
    const forceApply = Boolean(window.__dreamWorkForceApply);
    delete window.__dreamWorkForceApply;
    let restored = false;
    try { restored = localStorage.getItem(restoreKey) === '1'; } catch {}
    if (forceApply) {
      restored = false;
      try { localStorage.removeItem(restoreKey); } catch {}
    }
    if (restored) document.documentElement.dataset.dreamThemeRestored = 'true';
    else delete document.documentElement.dataset.dreamThemeRestored;
    let active = !restored;
    let style = document.getElementById('${e.styleId}');
    if (!style) {
      style = document.createElement('style');
      style.id = '${e.styleId}';
    }
    const attachStyle = () => {
      if (active && !style.isConnected) document.head.appendChild(style);
    };
    let rows = [];
    const applyTheme = (themeId) => {
      const theme = themes.find(item => item.id === themeId);
      if (!theme) return;
      active = true;
      try { localStorage.removeItem(restoreKey); } catch {}
      delete document.documentElement.dataset.dreamThemeRestored;
      style.textContent = theme.css;
      attachStyle();
      document.documentElement.dataset.dreamTheme = themeId;
      try { localStorage.setItem(selectedKey, themeId); } catch {}
      rows.forEach((row) => {
        const selected = row.dataset.themeId === themeId;
        row.style.background = selected ? 'rgba(36,201,215,.16)' : 'transparent';
        row.style.fontWeight = selected ? '700' : '500';
      });
    };
    const restoreNative = () => {
      active = false;
      try { localStorage.setItem(restoreKey, '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';
      clearInterval(window.__dreamWorkMenuGuard);
      style.remove();
      delete document.documentElement.dataset.dreamTheme;
      try { localStorage.removeItem(selectedKey); } catch {}
      panel.style.display = 'none';
    };
    if (window.__dreamWorkOutsideClick) {
      document.removeEventListener('pointerdown', window.__dreamWorkOutsideClick, true);
      delete window.__dreamWorkOutsideClick;
    }
    document.getElementById('${e.menuId}-host')?.remove();
    clearInterval(window.__dreamWorkMenuGuard);
    const host = document.createElement('div');
    host.id = '${e.menuId}-host';
    host.style.cssText = 'all:initial!important;position:fixed!important;right:16px!important;bottom:16px!important;z-index:2147483647!important;display:block!important;pointer-events:auto!important;';
    const shadow = host.attachShadow({ mode: 'open' });
    const root = document.createElement('div');
    root.id = '${e.menuId}';
    root.style.cssText = 'display:flex;flex-direction:column;align-items:flex-end;font:500 13px/1.4 system-ui;color:#17344f;';
    const panel = document.createElement('div');
    panel.style.cssText = 'display:none;margin-bottom:8px;min-width:190px;padding:6px;border-radius:12px;border:1px solid rgba(0,0,0,.1);background:rgba(255,255,255,.96);box-shadow:0 10px 30px rgba(0,0,0,.18);';
    const button = document.createElement('button');
    button.type = 'button';
    button.title = 'Dream Work Theme';
    button.textContent = '◉';
    button.style.cssText = 'width:36px;height:36px;border-radius:10px;border:1px solid rgba(0,0,0,.12);background:rgba(255,255,255,.92);box-shadow:0 3px 12px rgba(0,0,0,.2);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;color:#17344f;font-size:18px;line-height:1;';
    const addRow = (label, themeId, accent, onClick, before) => {
      const row = document.createElement('div');
      row.dataset.themeId = themeId || '';
      row.style.cssText = 'display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;cursor:pointer;color:#17344f;';
      const dot = document.createElement('span');
      dot.style.cssText = 'width:10px;height:10px;border-radius:50%;flex:none;background:' + accent + ';';
      const text = document.createElement('span');
      text.textContent = label;
      row.append(dot, text);
      row.addEventListener('click', onClick);
      if (before) panel.insertBefore(row, before); else panel.appendChild(row);
      rows.push(row);
      return row;
    };
    themes.forEach((theme) => addRow(theme.name, theme.id, theme.accent || '#24c9d7', () => {
      applyTheme(theme.id);
      void recordPresetUsage(theme.id);
      panel.style.display = 'none';
    }));
    const materializeCustomCss = (dataUrl, colors, customId) => cssTemplate
      .split(sentinels.hero).join(dataUrl)
      .split(sentinels.accent).join(colors.accent)
      .split(sentinels.secondary).join(colors.secondary)
      .split(sentinels.surface).join(colors.surface)
      .split(sentinels.text).join(colors.text)
      .split(sentinels.id).join(customId);
    const hex = (r, g, b) => '#' + [r, g, b].map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, '0')).join('');
    const mix = (a, b, amount) => a.map((value, index) => value + (b[index] - value) * amount);
    const extractPalette = (canvas) => {
      const context = canvas.getContext('2d');
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
      const buckets = new Map();
      let luminanceSum = 0;
      let count = 0;
      for (let index = 0; index < pixels.length; index += 4) {
        const r = pixels[index], g = pixels[index + 1], b = pixels[index + 2];
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        luminanceSum += luminance;
        count += 1;
        const saturation = max === 0 ? 0 : (max - min) / max;
        if (saturation < 0.18 || luminance < 24 || luminance > 245) continue;
        const delta = max - min || 1;
        const hue = max === r ? (g - b) / delta + (g < b ? 6 : 0) : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;
        const bucket = (Math.round(hue) % 6) * 2 + (saturation > 0.55 ? 1 : 0);
        const entry = buckets.get(bucket) || { weight: 0, r: 0, g: 0, b: 0, hue: hue * 60 };
        const weight = saturation * saturation;
        entry.weight += weight;
        entry.r += r * weight;
        entry.g += g * weight;
        entry.b += b * weight;
        buckets.set(bucket, entry);
      }
      const ranked = [...buckets.values()].sort((left, right) => right.weight - left.weight)
        .map((entry) => ({ rgb: [entry.r / entry.weight, entry.g / entry.weight, entry.b / entry.weight], hue: entry.hue }));
      const accent = ranked[0]?.rgb || [36, 201, 215];
      const secondary = ranked.find((entry) => Math.abs(entry.hue - (ranked[0]?.hue || 0)) > 50)?.rgb || mix(accent, [255, 255, 255], 0.35);
      const light = (count ? luminanceSum / count : 128) > 128;
      return {
        accent: hex(...accent),
        secondary: hex(...secondary),
        surface: hex(...(light ? mix(accent, [252, 252, 255], 0.92) : mix(accent, [12, 12, 18], 0.86))),
        text: hex(...(light ? mix(accent, [16, 24, 40], 0.82) : mix(accent, [244, 246, 252], 0.85))),
      };
    };
    const MAX_CUSTOM = 5;
    const customRows = new Map();
    const removeCustomRow = (slotId) => {
      const row = customRows.get(slotId);
      if (!row) return;
      const rowIndex = rows.indexOf(row);
      if (rowIndex >= 0) rows.splice(rowIndex, 1);
      row.remove();
      customRows.delete(slotId);
    };
    const loadCustoms = () => {
      try {
        const saved = JSON.parse(localStorage.getItem(customStorageKey) || '[]');
        return Array.isArray(saved) ? saved.filter((item) => item?.id && item?.dataUrl && item?.colors).slice(0, MAX_CUSTOM) : [];
      } catch { return []; }
    };
    const writeLocalCustoms = (saved) => {
      try { localStorage.setItem(customStorageKey, JSON.stringify(saved.slice(0, MAX_CUSTOM))); }
      catch (error) { console.warn('Dream Theme: HanaAgent 自定义图片本地缓存失败', error); }
    };
    const syncSharedCustoms = (saved) => fetch(sharedCustomThemeService.endpoint, {
      method: 'PUT',
      headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
      body: JSON.stringify(saved.slice(0, MAX_CUSTOM)),
    }).then((response) => {
      if (!response.ok) throw new Error('共享图片同步失败: HTTP ' + response.status);
      return response.json();
    });
    const saveCustoms = (saved) => {
      const limited = saved.slice(0, MAX_CUSTOM);
      writeLocalCustoms(limited);
      return syncSharedCustoms(limited).catch((error) => {
        console.warn('Dream Theme: HanaAgent 共享图片同步失败', error);
        return limited;
      });
    };
    const localCustomThemes = loadCustoms();
    const initialCustomThemes = sharedCustomThemes.length > 0 ? sharedCustomThemes : localCustomThemes;
    writeLocalCustoms(initialCustomThemes);
    if (sharedCustomThemes.length === 0 && localCustomThemes.length > 0) void saveCustoms(localCustomThemes);
    const paintRows = (themeId) => rows.forEach((row) => {
      const selected = row.dataset.themeId === themeId;
      row.style.background = selected ? 'rgba(36,201,215,.16)' : 'transparent';
      row.style.fontWeight = selected ? '700' : '500';
    });
    const applyCustomTheme = (slot) => {
      active = true;
      try {
        localStorage.removeItem(restoreKey);
        localStorage.setItem(selectedKey, slot.id);
      } catch {}
      delete document.documentElement.dataset.dreamThemeRestored;
      style.textContent = materializeCustomCss(slot.dataUrl, slot.colors, slot.id);
      attachStyle();
      document.documentElement.dataset.dreamTheme = slot.id;
      paintRows(slot.id);
    };
    let uploadRow;
    const deleteCustom = async (slotId) => {
      const saved = loadCustoms();
      const index = saved.findIndex((item) => item.id === slotId);
      if (index < 0) return;
      if (document.documentElement.dataset.dreamTheme === slotId) restoreNative();
      saved.splice(index, 1);
      await saveCustoms(saved);
      removeCustomRow(slotId);
    };
    const ensureCustomRow = (slot) => {
      const existing = customRows.get(slot.id);
      if (existing) return;
      const item = addRow(slot.name, slot.id, slot.colors.accent, () => {
        const current = loadCustoms().find((saved) => saved.id === slot.id) || slot;
        applyCustomTheme(current);
        panel.style.display = 'none';
      }, uploadRow);
      const text = item.querySelector('span + span');
      text.style.cssText = 'flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
      const remove = document.createElement('span');
      remove.textContent = '×';
      remove.title = '删除这张自定义图片';
      remove.style.cssText = 'flex:none;width:18px;height:18px;line-height:18px;text-align:center;border-radius:50%;color:rgba(0,0,0,.45);font-size:14px;';
      remove.addEventListener('click', (event) => { event.stopPropagation(); deleteCustom(slot.id); });
      item.appendChild(remove);
      customRows.set(slot.id, item);
    };
    const importFromDataUrl = (dataUrl, name) => new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = async () => {
        const scale = Math.min(1, 1280 / image.width);
        const full = document.createElement('canvas');
        full.width = Math.max(1, Math.round(image.width * scale));
        full.height = Math.max(1, Math.round(image.height * scale));
        full.getContext('2d').drawImage(image, 0, 0, full.width, full.height);
        const sample = document.createElement('canvas');
        sample.width = 48;
        sample.height = Math.max(1, Math.round(48 * image.height / image.width));
        sample.getContext('2d').drawImage(image, 0, 0, sample.width, sample.height);
        const colors = extractPalette(sample);
        const compressed = full.toDataURL('image/webp', 0.78);
        const saved = loadCustoms();
        let slot;
        if (saved.length < MAX_CUSTOM) {
          slot = { id: 'custom-hana-' + Date.now().toString(36), name: name || '我的图片', dataUrl: compressed, colors };
          saved.push(slot);
        } else {
          const activeId = document.documentElement.dataset.dreamTheme;
          let index = saved.findIndex((item) => item.id === activeId);
          if (index < 0) index = 0;
          slot = { id: saved[index].id, name: name || '我的图片', dataUrl: compressed, colors };
          saved[index] = slot;
          removeCustomRow(slot.id);
        }
        await saveCustoms(saved);
        ensureCustomRow(slot);
        applyCustomTheme(slot);
        resolve(colors);
      };
      image.onerror = () => reject(new Error('图片读取失败'));
      image.src = dataUrl;
    });
    const picker = document.createElement('input');
    picker.type = 'file';
    picker.accept = 'image/png,image/jpeg,image/webp';
    picker.style.display = 'none';
    picker.addEventListener('change', () => {
      const file = picker.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => importFromDataUrl(reader.result, file.name.replace(/\\.[a-z0-9]+$/i, '')).catch((error) => console.warn('Dream Theme: HanaAgent 图片导入失败', error));
      reader.readAsDataURL(file);
      picker.value = '';
      panel.style.display = 'none';
    });
    uploadRow = addRow('＋ 自定义图片', '', 'rgba(36,201,215,.9)', () => picker.click());
    uploadRow.style.borderTop = '1px solid rgba(0,0,0,.08)';
    addRow('还原主题', '', 'rgba(0,0,0,.24)', restoreNative);
    initialCustomThemes.forEach(ensureCustomRow);
    fetch(sharedCustomThemeService.endpoint, {
      headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token },
    }).then((response) => response.ok ? response.json() : Promise.reject(new Error('HTTP ' + response.status)))
      .then((latest) => {
        if (!Array.isArray(latest)) return;
        for (const slotId of [...customRows.keys()]) {
          if (!latest.some((item) => item.id === slotId)) removeCustomRow(slotId);
        }
        writeLocalCustoms(latest);
        latest.forEach(ensureCustomRow);
        let selectedId = '';
        try { selectedId = localStorage.getItem(selectedKey) || ''; } catch {}
        const selected = latest.find((item) => item.id === selectedId);
        if (selected) applyCustomTheme(selected);
      }).catch((error) => console.warn('Dream Theme: HanaAgent 共享图片读取失败', error));
    button.addEventListener('click', () => {
      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });
    const closeOnOutsideClick = (event) => {
      if (panel.style.display === 'none') return;
      const path = event.composedPath?.() || [];
      if (!path.includes(host)) panel.style.display = 'none';
    };
    window.__dreamWorkOutsideClick = closeOnOutsideClick;
    document.addEventListener('pointerdown', closeOnOutsideClick, true);
    root.append(panel, button, picker);
    shadow.appendChild(root);
    document.documentElement.appendChild(host);
    window.__dreamWorkMenuGuard = setInterval(() => {
      attachStyle();
      if (!host.isConnected) document.documentElement.appendChild(host);
    }, 250);
    if (!restored || forceApply) {
      let selectedId = '${e.currentThemeId}';
      if (!forceApply) {
        try { selectedId = localStorage.getItem(selectedKey) || selectedId; } catch {}
      }
      const selectedCustom = loadCustoms().find((item) => item.id === selectedId);
      if (selectedCustom) applyCustomTheme(selectedCustom);
      else applyTheme('${e.currentThemeId}');
    }
    return true;
  })()`}function Zt(e){return`
/* QoderWork shell controls */
body > #root > div:first-child > div:first-child button[aria-label] {
  background-color: transparent !important;
  color: ${e.text} !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

body > #root > div:first-child > div:first-child button[aria-label]:hover,
body > #root > div:first-child > div:first-child button[aria-label]:focus-visible {
  background-color: color-mix(in srgb, ${e.accent} 16%, transparent) !important;
  color: ${e.text} !important;
}
body > #root > div:first-child > div:first-child button[aria-label="Close"]:hover {
  background-color: color-mix(in srgb, #ef4444 20%, transparent) !important;
  color: #ef4444 !important;
}
.agents-sidebar :where(button, [role="button"], [class*="cursor-pointer"]) {
  color: color-mix(in srgb, ${e.text} 76%, transparent) !important;
}
.agents-sidebar :where(button, [role="button"], [class*="cursor-pointer"]):hover {
  background-color: color-mix(in srgb, ${e.accent} 14%, transparent) !important;
  color: ${e.text} !important;
}
.agents-sidebar :where(button[aria-label="任务"], button[aria-label="频道"]) {
  background-color: transparent !important;
  color: color-mix(in srgb, ${e.text} 78%, transparent) !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
.agents-sidebar :where(button[aria-label="任务"], button[aria-label="频道"])[data-state="active"],
.agents-sidebar :where(button[aria-label="任务"], button[aria-label="频道"])[aria-selected="true"],
.agents-sidebar :where(button[aria-label="任务"], button[aria-label="频道"]):focus-visible {
  background-color: color-mix(in srgb, ${e.accent} 20%, transparent) !important;
  color: ${e.text} !important;
}
.agents-sidebar > :last-child button {
  background-color: transparent !important;
  color: ${e.text} !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
.agents-sidebar > :last-child button:hover {
  background-color: color-mix(in srgb, ${e.accent} 14%, transparent) !important;
}
.agents-content-area button.rounded-full:not(.SendButton-send),
.agents-parchment-paper-surface button.rounded-full:not(.SendButton-send) {
  background-color: color-mix(in srgb, ${e.surface} 70%, transparent) !important;
  color: ${e.text} !important;
  border-color: color-mix(in srgb, ${e.text} 14%, transparent) !important;
  box-shadow: none !important;
}
.agents-content-area button.rounded-full:not(.SendButton-send):hover,
.agents-parchment-paper-surface button.rounded-full:not(.SendButton-send):hover {
  background-color: color-mix(in srgb, ${e.accent} 18%, transparent) !important;
  border-color: color-mix(in srgb, ${e.accent} 34%, transparent) !important;
}
.agents-content-area button svg,
.agents-sidebar button svg,
body > #root > div:first-child > div:first-child button[aria-label] svg {
  color: currentColor !important;
}`}function Yt(e,n){return`
/* CatPaw new-task and conversation surfaces */
html body #root .main-area {
  position: relative !important;
  isolation: isolate !important;
  background-color: ${n.surface} !important;
  background-image: url(${JSON.stringify(e)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
html body #root .main-content-container,
html body #root .main-content,
html body #root .chat-content-area {
  background-color: transparent !important;
  background-image: none !important;
}
html body #root .chat-content-area > .relative.flex.flex-col.items-center.h-full,
html body #root .chat-content-area [class~="bg-catpaw-bg-primary"] {
  background-color: transparent !important;
  background-image: none !important;
}
html body #root .catpaw-desk-inputBox > .bg-catpaw-bg-card,
html body #root .catpaw-desk-inputBox [class~="bg-catpaw-bg-card"] {
  background-color: color-mix(in srgb, ${n.surface} 78%, transparent) !important;
  border: 1px solid color-mix(in srgb, ${n.accent} 30%, transparent) !important;
  box-shadow: 0 16px 42px color-mix(in srgb, ${n.surface} 30%, transparent) !important;
  backdrop-filter: blur(16px) saturate(108%) !important;
}
html body #root .catpaw-desk-inputBox :where(
  .catpaw-chat-input,
  .catpaw-editor,
  .catpaw-editor__body,
  .catpaw-editor__content,
  .mc-input-container
) {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  color: ${n.text} !important;
}
html body #root .catpaw-desk-inputBox :where(button, [role="button"]) {
  color: ${n.text} !important;
}
html body #root .catpaw-desk-inputBox :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${n.accent} 15%, transparent) !important;
}
html body #root .catpaw-desk-inputBox :where(svg, svg *) {
  color: currentColor !important;
}
`}function ke(e,n=""){return JSON.stringify(typeof e=="string"?e:n)}function We(e,n,t){var o,a;return`/* DREAM_THEME:${String(e.id??"custom").replace(/[^a-z0-9_-]/gi,"")} */
body[data-application-name="workbuddy"] {
  --wb-accent: ${t.accent};
  --wb-secondary: ${t.secondary};
  --wb-surface: ${t.surface};
  --wb-text: ${t.text};

  /* 背景 */
  --cb-bg-primary: var(--wb-surface) !important;
  --cb-bg-secondary: color-mix(in srgb, var(--wb-surface) 94%, transparent) !important;
  --cb-panel-bg-primary: color-mix(in srgb, var(--wb-surface) 92%, transparent) !important;
  --cb-team-member-card-background: color-mix(in srgb, var(--wb-surface) 92%, transparent) !important;

  /* 文字 */
  --cb-text-primary: var(--wb-text) !important;
  --cb-text-secondary: color-mix(in srgb, var(--wb-text) 82%, transparent) !important;
  --cb-text-disabled: color-mix(in srgb, var(--wb-text) 62%, transparent) !important;
  --cb-text-link: var(--wb-accent) !important;
  --cb-text-error-active: var(--wb-accent) !important;

  /* VS Code 主题色包装 */
  --cb-vscode-editor-background: var(--wb-surface) !important;
  --cb-vscode-sideBar-background: color-mix(in srgb, var(--wb-surface) 94%, transparent) !important;
  --cb-vscode-foreground: var(--wb-text) !important;
  --cb-vscode-editor-foreground: var(--wb-text) !important;
  --cb-vscode-descriptionForeground: color-mix(in srgb, var(--wb-text) 70%, transparent) !important;
  --cb-vscode-titleBar-activeBackground: var(--wb-accent) !important;
  --cb-vscode-titleBar-activeForeground: #ffffff !important;
  --cb-vscode-titleBar-inactiveBackground: color-mix(in srgb, var(--wb-accent) 80%, var(--wb-surface)) !important;
  --cb-vscode-titleBar-inactiveForeground: color-mix(in srgb, #ffffff 70%, transparent) !important;
  --cb-titlebar-control-hover-background: color-mix(in srgb, var(--wb-accent) 16%, transparent) !important;
  --cb-vscode-input-background: color-mix(in srgb, var(--wb-surface) 94%, transparent) !important;
  --cb-vscode-dropdown-background: color-mix(in srgb, var(--wb-surface) 96%, transparent) !important;
  --cb-vscode-list-hoverBackground: color-mix(in srgb, var(--wb-accent) 16%, transparent) !important;
  --cb-vscode-toolbar-hoverBackground: color-mix(in srgb, var(--wb-accent) 16%, transparent) !important;
  --cb-vscode-scrollbarSlider-background: color-mix(in srgb, var(--wb-accent) 30%, transparent) !important;
  --cb-vscode-scrollbarSlider-hoverBackground: color-mix(in srgb, var(--wb-accent) 50%, transparent) !important;
  --cb-vscode-textLink-foreground: var(--wb-accent) !important;
  --cb-vscode-widget-border: color-mix(in srgb, var(--wb-accent) 45%, transparent) !important;
  --cb-vscode-panel-border: color-mix(in srgb, var(--wb-accent) 30%, transparent) !important;

  /* 按钮 */
  --cb-button-dark-background: var(--wb-accent) !important;
  --cb-button-dark-foreground: #ffffff !important;
  --cb-button-dark-hover-background: color-mix(in srgb, var(--wb-accent) 85%, #000000) !important;
  --cb-vscode-button-background: var(--wb-accent) !important;
  --cb-vscode-button-foreground: #ffffff !important;
  --cb-vscode-button-hoverBackground: color-mix(in srgb, var(--wb-accent) 85%, #000000) !important;

  /* 描边 */
  --cb-stroke-secondary: color-mix(in srgb, var(--wb-accent) 45%, transparent) !important;
  --cb-markdown-hr-border-color: color-mix(in srgb, var(--wb-accent) 30%, transparent) !important;
}

#root {
  color: var(--wb-text) !important;
  background-color: var(--wb-surface) !important;
  background-image: url(${JSON.stringify(n)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}

/* 关键：teams-container 是 #root 直接子层，默认有不透明灰底，会完全盖住背景图 */
.teams-container,
.teams-container.is-mac {
  background: transparent !important;
}

/* 所有 grid 项容器透明，让 #root 背景图大面积透出 */
[data-view-id] {
  background: transparent !important;
}

/* 内容区内的子层也透明（否则会盖住背景图和磨砂层） */
.conversation-list,
.main-content,
.main-content--welcome,
.sidebar-next {
  background: transparent !important;
}

/* 侧边栏磨砂玻璃（覆盖上面的 transparent） */
[data-view-id=sidebar] {
  background: color-mix(in srgb, var(--wb-surface) 62%, transparent) !important;
  border-right: 1px solid color-mix(in srgb, var(--wb-accent) 45%, transparent) !important;
  backdrop-filter: blur(20px) saturate(1.12);
}

/* 主内容区：顶部透出底图，底部更强遮罩保证内容可读 */
[data-view-id=main-content] {
  background: linear-gradient(180deg, transparent 0 58%, color-mix(in srgb, var(--wb-surface) 58%, transparent) 100%) !important;
}

/* 详情面板半透明磨砂 */
[data-view-id=detail-panel] {
  background: color-mix(in srgb, var(--wb-surface) 64%, transparent) !important;
  backdrop-filter: blur(18px) saturate(1.08);
}

/* brand 文案（copy 为空时不显示） */
#root::before {
  position: fixed;
  z-index: 20;
  top: 60px;
  left: max(300px, 22vw);
  content: ${ke((o=e.copy)==null?void 0:o.brand)};
  color: var(--wb-accent);
  font: 800 clamp(16px, 2vw, 30px)/1.2 ui-rounded, system-ui;
  text-shadow: 0 2px 10px white;
  pointer-events: none;
}

/* headline 文案 */
#root::after {
  position: fixed;
  z-index: 20;
  top: 104px;
  left: max(300px, 22vw);
  max-width: 42vw;
  content: ${ke((a=e.copy)==null?void 0:a.headline)};
  color: var(--wb-text);
  font: 750 clamp(18px, 2.7vw, 42px)/1.15 ui-rounded, system-ui;
  text-shadow: 0 2px 12px white;
  pointer-events: none;
}`}function en(e,n,t){const r=tn(t.surface),o=r?`color-mix(in srgb, ${t.surface} 90%, transparent)`:`color-mix(in srgb, ${t.surface} 86%, transparent)`,a=r?`color-mix(in srgb, ${t.accent} 16%, ${t.surface})`:`color-mix(in srgb, ${t.accent} 42%, ${t.surface})`,s=r?"#172033":`color-mix(in srgb, ${t.surface} 72%, #000000)`,d="#f2f6ff",i=`/* DREAM_THEME:${e.id} */
:root.codex-dream-skin {
  --ds-bg: ${t.surface};
  --ds-panel: ${t.surface};
  --ds-panel-2: ${t.surface};
  --ds-surface: ${t.surface};
  --ds-green: ${t.accent};
  --ds-lime: ${t.secondary};
  --ds-cyan: ${t.secondary};
  --ds-purple: ${t.accent};
  --ds-text: ${t.text};
  --ds-muted: color-mix(in srgb, ${t.text} 82%, transparent);
  --ds-line: color-mix(in srgb, ${t.accent} 22%, transparent);
  --ds-hero-height: 252px;
  --ds-radius: 24px;
  --dream-skin-art: url(${JSON.stringify(n)});
}`,l=`/* DREAM_THEME_BODY:${e.id} */
html.codex-dream-skin[data-dream-theme],
html.codex-dream-skin[data-dream-theme] body {
  background-color: ${t.surface} !important;
  background-image: var(--dream-skin-art) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}

html.codex-dream-skin[data-dream-theme] main.main-surface,
html.codex-dream-skin[data-dream-theme] main.main-surface:not(.dream-skin-home-shell) {
  position: relative !important;
  isolation: isolate !important;
  background-color: color-mix(in srgb, ${t.surface} 12%, transparent) !important;
  background-image: none !important;
}

html.codex-dream-skin[data-dream-theme] main.main-surface::before {
  content: none !important;
  background: none !important;
}

html.codex-dream-skin[data-dream-theme] aside.app-shell-left-panel {
  background: color-mix(in srgb, ${t.surface} 30%, transparent) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

html.codex-dream-skin[data-dream-theme] main.main-surface > header.app-header-tint {
  background: color-mix(in srgb, ${t.surface} 16%, transparent) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

html.codex-dream-skin main.main-surface [role="main"],
html.codex-dream-skin main.main-surface .thread-scroll-container {
  --color-token-conversation-body: ${t.text} !important;
  --color-token-text-secondary: color-mix(in srgb, ${t.text} 76%, transparent) !important;
  --color-token-text-tertiary: color-mix(in srgb, ${t.text} 58%, transparent) !important;
  --color-token-conversation-summary-leading: color-mix(in srgb, ${t.text} 88%, transparent) !important;
  --color-token-conversation-summary-trailing: color-mix(in srgb, ${t.text} 68%, transparent) !important;
  --color-token-conversation-header: color-mix(in srgb, ${t.text} 78%, transparent) !important;
  --color-token-description-foreground: color-mix(in srgb, ${t.text} 72%, transparent) !important;
  --shimmer-text-secondary: color-mix(in srgb, ${t.text} 68%, transparent) !important;
  --shimmer-contrast: ${t.text} !important;
  background-color: transparent !important;
  color: ${t.text} !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) {
  background-color: transparent !important;
  background-image: none !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) article,
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) .message,
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [data-message-author-role],
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [class*="surface"]:not(.composer-surface-chrome):not([class*="home-main-content"]) {
  border-color: color-mix(in srgb, ${t.accent} 24%, transparent) !important;
  background: ${o} !important;
  color: ${t.text} !important;
  text-shadow: none !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [data-message-author-role="user"],
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [class*="bg-token-foreground"] {
  background: ${a} !important;
  color: ${t.text} !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container [class*="_markdownContent_"],
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container [class*="_markdownContent_"] :where(p, li, h1, h2, h3, h4, h5, h6, strong, em, blockquote, span),
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container :where(.text-token-conversation-body, .text-token-text-secondary, .group/activity-header),
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container .group/activity-header :where(span, svg) {
  color: ${t.text} !important;
  text-shadow: none !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container :where(
    article,
    article *,
    .message,
    .message *,
    [data-message-author-role],
    [data-message-author-role] *
  ) {
  color: ${t.text} !important;
  text-shadow: none !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container * {
  color: ${t.text} !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container [class*="_markdownContent_"] a {
  color: ${t.accent} !important;
}

html.codex-dream-skin .composer-surface-chrome {
  background: color-mix(in srgb, ${t.surface} 92%, transparent) !important;
  color: ${t.text} !important;
}

html.codex-dream-skin .composer-surface-chrome *,
html.codex-dream-skin .composer-surface-chrome .ProseMirror {
  color: ${t.text} !important;
  caret-color: ${t.accent} !important;
}

html.codex-dream-skin main.main-surface pre,
html.codex-dream-skin main.main-surface code,
html.codex-dream-skin main.main-surface table,
html.codex-dream-skin main.main-surface [data-testid*="code"] {
  background: ${s} !important;
  color: ${d} !important;
  text-shadow: none !important;
}

html.codex-dream-skin main.main-surface :where(pre, code, table) * {
  color: ${d} !important;
}

/* The main surface already owns the full artwork; avoid a second hero image. */
html.codex-dream-skin .dream-skin-home > div:first-child > div:first-child > div:first-child {
  background-image: none !important;
  background-color: transparent !important;
}

/* Codex new-task home: remove the full-page wash while keeping cards readable. */
html.codex-dream-skin main.main-surface.dream-skin-home-shell,
html.codex-dream-skin main.main-surface.dream-skin-home-shell > div,
html.codex-dream-skin .dream-skin-home,
html.codex-dream-skin .dream-skin-home > div {
  background-color: transparent !important;
  background-image: none !important;
}
html.codex-dream-skin .dream-skin-home :where([class*="bg-token-main-surface"], [class*="from-token-main-surface"], [class*="via-token-main-surface"]) {
  background-color: transparent !important;
  background-image: none !important;
}
html.codex-dream-skin main.main-surface [class*="container-name:home-main-content"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
}
html.codex-dream-skin .dream-skin-home .composer-surface-chrome {
  background-color: color-mix(in srgb, ${t.surface} 82%, transparent) !important;
  backdrop-filter: blur(14px) saturate(106%) !important;
}`;return i+`
`+l}function tn(e){const n=/^#([0-9a-f]{6})$/i.exec(e);if(!n)return!0;const t=parseInt(n[1],16);return .299*(t>>16&255)+.587*(t>>8&255)+.114*(t&255)>140}function nn(e){return`(() => {
  const data = ${JSON.stringify({styleId:e.styleId,menuId:e.menuId,activeId:e.currentThemeId,themes:e.themes,cssTemplate:e.cssTemplate,sentinels:b,storageKey:"dreamCustomThemes",selectedKey:"wb-dream-selected",sharedCustomThemes:e.sharedCustomThemes,sharedCustomThemeService:e.sharedCustomThemeService})};
  const recordPresetUsage = (themeId) => fetch(data.sharedCustomThemeService.usageEndpoint, {
    method: "POST",
    headers: { Authorization: "Bearer " + data.sharedCustomThemeService.token, "Content-Type": "application/json" },
    body: JSON.stringify({ appId: "workbuddy", themeId }),
  }).catch(() => {});
  const themeBlobUrls = new Map();
  const materializeCss = (css, cacheKey) => {
    const dataUrl = css.match(new RegExp('data:image/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/=]+'))?.[0];
    if (!dataUrl) return css;
    let blobUrl = themeBlobUrls.get(cacheKey);
    if (!blobUrl) {
      const [header, encoded] = dataUrl.split(',', 2);
      const mime = header.slice(5, header.indexOf(';'));
      const binary = atob(encoded);
      const bytes = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
      blobUrl = URL.createObjectURL(new Blob([bytes], { type: mime }));
      themeBlobUrls.set(cacheKey, blobUrl);
    }
    return css.split(dataUrl).join(blobUrl);
  };
  let style = document.getElementById(data.styleId);
  if (!style) {
    style = document.createElement("style");
    style.id = data.styleId;
    document.head.appendChild(style);
  }

  document.getElementById(data.menuId)?.remove();
  const root = document.createElement("div");
  root.id = data.menuId;
  root.style.cssText = "position:fixed;bottom:16px;right:16px;z-index:2147483000;font:500 13px/1.4 system-ui;user-select:none;";

  const button = document.createElement("button");
  button.type = "button";
  button.title = "WorkBuddy 主题切换";
  button.textContent = "◉";
  button.style.cssText = "margin-left:auto;width:36px;height:36px;border-radius:10px;border:1px solid rgba(0,0,0,.12);background:rgba(255,255,255,.92);backdrop-filter:blur(10px);box-shadow:0 3px 12px rgba(0,0,0,.2);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;color:#17344f;font-size:18px;line-height:1;";

  const panel = document.createElement("div");
  panel.style.cssText = "display:none;margin-bottom:8px;min-width:200px;padding:6px;border-radius:12px;border:1px solid rgba(0,0,0,.1);background:rgba(255,255,255,.94);backdrop-filter:blur(16px);box-shadow:0 10px 30px rgba(0,0,0,.18);color:#17344f;";

  const rows = new Map();
  const paint = (id) => {
    for (const [rowId, item] of rows) {
      item.style.background = rowId === id ? "rgba(36,201,215,.16)" : "transparent";
      item.style.fontWeight = rowId === id ? "700" : "500";
    }
  };
  const row = (label, dotColor, onPick, before) => {
    const item = document.createElement("div");
    item.style.cssText = "display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;cursor:pointer;";
    const dot = document.createElement("span");
    dot.style.cssText = "width:10px;height:10px;border-radius:50%;flex:none;background:" + dotColor + ";";
    const text = document.createElement("span");
    text.textContent = label;
    item.append(dot, text);
    item.addEventListener("mouseenter", () => { if (item.style.fontWeight !== "700") item.style.background = "rgba(0,0,0,.05)"; });
    item.addEventListener("mouseleave", () => paint(document.documentElement.dataset.dreamTheme ?? null));
    item.addEventListener("click", () => onPick(item));
    if (before) panel.insertBefore(item, before); else panel.appendChild(item);
    return item;
  };

  const isLightSurface = (hex) => {
    const match = /^#([0-9a-f]{6})$/i.exec(hex || "");
    if (!match) return true;
    const value = parseInt(match[1], 16);
    return (0.299 * ((value >> 16) & 255) + 0.587 * ((value >> 8) & 255) + 0.114 * (value & 255)) > 140;
  };
  const applyMode = (surface) => {
    const dark = !isLightSurface(surface);
    const body = document.body;
    const html = document.documentElement;
    html.dataset.dreamShell = dark ? "dark" : "light";
    body.dataset.vscodeThemeKind = dark ? "vscode-dark" : "vscode-light";
    body.dataset.vscodeThemeName = dark ? "IDE Dark" : "IDE Light";
    html.style.colorScheme = dark ? "dark" : "light";
    ["light", "vscode-light", "cb-light", "dark", "vscode-dark", "cb-dark"].forEach((className) => {
      const darkClass = className === "dark" || className === "vscode-dark" || className === "cb-dark";
      body.classList.toggle(className, dark ? darkClass : !darkClass);
      html.classList.toggle(className, dark ? darkClass : !darkClass);
    });
  };
  const setTheme = (id) => {
    const theme = data.themes.find((candidate) => candidate.id === id);
    if (!theme) return;
    style.textContent = materializeCss(theme.css, theme.id);
    document.documentElement.dataset.dreamTheme = theme.id;
    try { localStorage.setItem(data.selectedKey, theme.id); } catch {}
    applyMode(theme.surface);
    paint(theme.id);
  };
  const clearTheme = () => {
    style.textContent = "";
    delete document.documentElement.dataset.dreamTheme;
    try { localStorage.removeItem(data.selectedKey); } catch {}
    applyMode("#ffffff");
    paint(null);
  };

  for (const theme of data.themes) {
    const item = row(theme.name, theme.accent, () => { setTheme(theme.id); void recordPresetUsage(theme.id); panel.style.display = "none"; });
    item.dataset.dreamThemeId = theme.id;
    rows.set(theme.id, item);
  }

  const buildCustomCss = (dataUrl, colors, customId) => data.cssTemplate
    .split(data.sentinels.hero).join(dataUrl)
    .split(data.sentinels.accent).join(colors.accent)
    .split(data.sentinels.secondary).join(colors.secondary)
    .split(data.sentinels.surface).join(colors.surface)
    .split(data.sentinels.text).join(colors.text)
    .split(data.sentinels.id).join(customId);
  const hex = (r, g, b) => "#" + [r, g, b].map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0")).join("");
  const mix = (a, b, amount) => a.map((value, index) => value + (b[index] - value) * amount);
  const extractPalette = (canvas) => {
    const context = canvas.getContext("2d");
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const buckets = new Map();
    let luminanceSum = 0;
    let count = 0;
    for (let index = 0; index < pixels.length; index += 4) {
      const r = pixels[index], g = pixels[index + 1], b = pixels[index + 2];
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      luminanceSum += luminance;
      count += 1;
      const saturation = max === 0 ? 0 : (max - min) / max;
      if (saturation < 0.18 || luminance < 24 || luminance > 245) continue;
      const delta = max - min || 1;
      let hue = max === r ? (g - b) / delta + (g < b ? 6 : 0) : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;
      const bucket = (Math.round(hue) % 6) * 2 + (saturation > 0.55 ? 1 : 0);
      const entry = buckets.get(bucket) ?? { weight: 0, r: 0, g: 0, b: 0, hue: hue * 60 };
      const weight = saturation * saturation;
      entry.weight += weight;
      entry.r += r * weight;
      entry.g += g * weight;
      entry.b += b * weight;
      buckets.set(bucket, entry);
    }
    const averageLuminance = count ? luminanceSum / count : 128;
    const ranked = [...buckets.values()].sort((left, right) => right.weight - left.weight)
      .map((entry) => ({ rgb: [entry.r / entry.weight, entry.g / entry.weight, entry.b / entry.weight], hue: entry.hue }));
    const accent = ranked[0]?.rgb ?? [36, 201, 215];
    const secondary = ranked.find((entry) => Math.abs(entry.hue - (ranked[0]?.hue ?? 0)) > 50)?.rgb ?? mix(accent, [255, 255, 255], 0.35);
    const light = averageLuminance > 128;
    return {
      accent: hex(...accent),
      secondary: hex(...secondary),
      surface: hex(...(light ? mix(accent, [252, 252, 255], 0.92) : mix(accent, [12, 12, 18], 0.86))),
      text: hex(...(light ? mix(accent, [16, 24, 40], 0.82) : mix(accent, [244, 246, 252], 0.85))),
    };
  };

  const MAX_CUSTOM = 5;
  const customRows = new Map();
  const loadCustoms = () => {
    try {
      const themes = JSON.parse(localStorage.getItem(data.storageKey) ?? "[]");
      return Array.isArray(themes) ? themes.filter((theme) => theme && theme.dataUrl && theme.colors).slice(0, MAX_CUSTOM) : [];
    } catch { return []; }
  };
  const writeLocalCustoms = (themes) => {
    try { localStorage.setItem(data.storageKey, JSON.stringify(themes.slice(0, MAX_CUSTOM))); }
    catch (error) { console.warn("Dream Theme: 自定义图片本地缓存失败", error); }
  };
  const syncSharedCustoms = (themes) => fetch(data.sharedCustomThemeService.endpoint, {
    method: "PUT",
    headers: { Authorization: "Bearer " + data.sharedCustomThemeService.token, "Content-Type": "application/json" },
    body: JSON.stringify(themes.slice(0, MAX_CUSTOM)),
  }).then((response) => {
    if (!response.ok) throw new Error("共享图片同步失败: HTTP " + response.status);
    return response.json();
  });
  const saveCustoms = (themes) => {
    const limited = themes.slice(0, MAX_CUSTOM);
    writeLocalCustoms(limited);
    return syncSharedCustoms(limited).catch((error) => {
      console.warn("Dream Theme: 共享图片同步失败", error);
      return limited;
    });
  };
  const localCustomThemes = loadCustoms();
  const initialCustomThemes = data.sharedCustomThemes.length > 0 ? data.sharedCustomThemes : localCustomThemes;
  writeLocalCustoms(initialCustomThemes);
  if (data.sharedCustomThemes.length === 0 && localCustomThemes.length > 0) void saveCustoms(localCustomThemes);
  const applyCustomTheme = (slot) => {
    style.textContent = materializeCss(buildCustomCss(slot.dataUrl, slot.colors, slot.id), slot.id);
    document.documentElement.dataset.dreamTheme = slot.id;
    try { localStorage.removeItem(data.selectedKey); } catch {}
    applyMode(slot.colors.surface);
    ensureCustomRow(slot);
    paint(slot.id);
  };
  const deleteCustom = async (slotId) => {
    const themes = loadCustoms();
    const index = themes.findIndex((theme) => theme.id === slotId);
    if (index < 0) return;
    if (document.documentElement.dataset.dreamTheme === slotId) clearTheme();
    themes.splice(index, 1);
    await saveCustoms(themes);
    customRows.get(slotId)?.remove();
    customRows.delete(slotId);
    rows.delete(slotId);
  };
  const ensureCustomRow = (slot) => {
    const existing = customRows.get(slot.id);
    if (existing) {
      existing.querySelector("span + span").textContent = slot.name;
      existing.firstChild.style.background = slot.colors.accent;
      return;
    }
    const item = row(slot.name, slot.colors.accent, () => {
      const current = loadCustoms().find((theme) => theme.id === slot.id) ?? slot;
      applyCustomTheme(current);
      panel.style.display = "none";
    }, uploadRow);
    item.dataset.dreamThemeId = slot.id;
    const text = item.querySelector("span + span");
    text.style.cssText = "flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    const remove = document.createElement("span");
    remove.textContent = "×";
    remove.title = "删除这张自定义图片";
    remove.style.cssText = "flex:none;width:18px;height:18px;line-height:18px;text-align:center;border-radius:50%;color:rgba(0,0,0,.45);font-size:14px;";
    remove.addEventListener("mouseenter", () => { remove.style.background = "rgba(220,60,60,.15)"; remove.style.color = "#c03030"; });
    remove.addEventListener("mouseleave", () => { remove.style.background = "transparent"; remove.style.color = "rgba(0,0,0,.45)"; });
    remove.addEventListener("click", (event) => { event.stopPropagation(); deleteCustom(slot.id); });
    item.appendChild(remove);
    customRows.set(slot.id, item);
    rows.set(slot.id, item);
  };

  const importFromDataUrl = (dataUrl, name) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = async () => {
      const scale = Math.min(1, 1600 / image.width);
      const full = document.createElement("canvas");
      full.width = Math.round(image.width * scale);
      full.height = Math.round(image.height * scale);
      full.getContext("2d").drawImage(image, 0, 0, full.width, full.height);
      const sample = document.createElement("canvas");
      sample.width = 48;
      sample.height = Math.max(1, Math.round(48 * image.height / image.width));
      sample.getContext("2d").drawImage(image, 0, 0, sample.width, sample.height);
      const colors = extractPalette(sample);
      const compressed = full.toDataURL("image/webp", 0.8);
      const themes = loadCustoms();
      let slot;
      if (themes.length < MAX_CUSTOM) {
        slot = { id: "custom-upload-" + Date.now().toString(36), name: name || "我的图片", dataUrl: compressed, colors };
        themes.push(slot);
      } else {
        const activeId = document.documentElement.dataset.dreamTheme;
        let index = themes.findIndex((theme) => theme.id === activeId);
        if (index < 0) index = 0;
        slot = { id: themes[index].id, name: name || "我的图片", dataUrl: compressed, colors };
        themes[index] = slot;
      }
      await saveCustoms(themes);
      applyCustomTheme(slot);
      resolve(colors);
    };
    image.onerror = () => reject(new Error("图片读取失败"));
    image.src = dataUrl;
  });

  const picker = document.createElement("input");
  picker.type = "file";
  picker.accept = "image/png,image/jpeg,image/webp";
  picker.style.display = "none";
  picker.addEventListener("change", () => {
    const file = picker.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => importFromDataUrl(reader.result, file.name.replace(/\\.[a-z0-9]+$/i, ""));
    reader.readAsDataURL(file);
    picker.value = "";
    panel.style.display = "none";
  });

  const uploadRow = row("＋ 自定义图片", "rgba(36,201,215,.9)", () => picker.click());
  uploadRow.style.borderTop = "1px solid rgba(0,0,0,.08)";
  const native = row("还原主题", "rgba(0,0,0,.24)", () => { clearTheme(); panel.style.display = "none"; });
  rows.set(null, native);
  initialCustomThemes.forEach(ensureCustomRow);
  fetch(data.sharedCustomThemeService.endpoint, {
    headers: { Authorization: "Bearer " + data.sharedCustomThemeService.token },
  }).then((response) => response.ok ? response.json() : Promise.reject(new Error("HTTP " + response.status)))
    .then((latest) => {
      if (!Array.isArray(latest)) return;
      for (const slotId of [...customRows.keys()]) {
        if (!latest.some((item) => item.id === slotId)) {
          customRows.get(slotId)?.remove();
          customRows.delete(slotId);
          rows.delete(slotId);
        }
      }
      writeLocalCustoms(latest);
      latest.forEach(ensureCustomRow);
    }).catch((error) => console.warn("Dream Theme: 共享图片读取失败", error));

  button.addEventListener("click", () => { panel.style.display = panel.style.display === "none" ? "block" : "none"; });
  const closeOnOutsideClick = (event) => {
    if (panel.style.display === "none" || root.contains(event.target)) return;
    panel.style.display = "none";
  };
  if (window.__dreamWorkOutsideClick) {
    document.removeEventListener("pointerdown", window.__dreamWorkOutsideClick, true);
  }
  window.__dreamWorkOutsideClick = closeOnOutsideClick;
  document.addEventListener("pointerdown", closeOnOutsideClick, true);
  root.append(panel, button, picker);
  document.body.appendChild(root);

  setTheme(data.activeId);

  window.__dreamTheme = { importFromDataUrl, setTheme, clearTheme, deleteCustom };
  return true;
})()`}function rn(e){const n=JSON.stringify(e.themes),t=JSON.stringify(e.cssTemplate??""),r=e.appId;return`(() => {
  const themes = ${n};
  const cssTemplate = ${t};
  const sentinels = ${JSON.stringify(b)};
  const currentThemeId = '${e.currentThemeId}';
  const appId = '${r}';
  const customStorageKey = 'dreamCodexCustomThemes';
  const sharedCustomThemes = ${JSON.stringify(e.sharedCustomThemes)};
  const sharedCustomThemeService = ${JSON.stringify(e.sharedCustomThemeService)};
  const recordPresetUsage = (themeId) => fetch(sharedCustomThemeService.usageEndpoint, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
    body: JSON.stringify({ appId, themeId }),
  }).catch(() => {});
  const themeBlobUrls = new Map();
  const materializeCss = (css, cacheKey) => {
    const dataUrl = css.match(new RegExp('data:image/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/=]+'))?.[0];
    if (!dataUrl) return css;
    let blobUrl = themeBlobUrls.get(cacheKey);
    if (!blobUrl) {
      const [header, encoded] = dataUrl.split(',', 2);
      const mime = header.slice(5, header.indexOf(';'));
      const binary = atob(encoded);
      const bytes = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
      blobUrl = URL.createObjectURL(new Blob([bytes], { type: mime }));
      themeBlobUrls.set(cacheKey, blobUrl);
    }
    return css.split(dataUrl).join(blobUrl);
  };

  const isLightSurface = (hex) => {
    const m = /^#([0-9a-f]{6})$/i.exec(hex || "");
    if (!m) return true;
    const v = parseInt(m[1], 16);
    return (0.299 * ((v >> 16) & 255) + 0.587 * ((v >> 8) & 255) + 0.114 * (v & 255)) > 140;
  };
  const applyMode = (surface) => {
    const dark = !isLightSurface(surface);
    const body = document.body;
    const html = document.documentElement;
    html.dataset.dreamShell = dark ? "dark" : "light";
    body.dataset.vscodeThemeKind = dark ? "vscode-dark" : "vscode-light";
    body.dataset.vscodeThemeName = dark ? "IDE Dark" : "IDE Light";
    html.style.colorScheme = dark ? "dark" : "light";
    ["light", "vscode-light", "cb-light", "dark", "vscode-dark", "cb-dark"].forEach((cls) => {
      const isDarkCls = cls === "dark" || cls === "vscode-dark" || cls === "cb-dark";
      body.classList.toggle(cls, dark ? isDarkCls : !isDarkCls);
      html.classList.toggle(cls, dark ? isDarkCls : !isDarkCls);
    });
  };

  const style = document.getElementById('${e.styleId}');
  if (!style) {
    const s = document.createElement('style');
    s.id = '${e.styleId}';
    document.head.appendChild(s);
    window.__dreamWorkThemeStyle = s;
  } else {
    window.__dreamWorkThemeStyle = style;
  }

  const applyTheme = (themeId) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;
    window.__dreamWorkThemeStyle.textContent = materializeCss(theme.css, theme.id);
    document.documentElement.dataset.dreamTheme = themeId;
    if (appId !== 'hana-agent' && appId !== 'kimi') applyMode(theme.surface);
    
    // Codex themes require the codex-dream-skin class on <html> for CSS selectors to match
    if (appId === 'codex') {
      document.documentElement.classList.add('codex-dream-skin');
      const shellMain = document.querySelector('main.main-surface') || document.querySelector('main');
      if (shellMain) {
        const homeCandidate = (shellMain.matches('[role="main"]') ? shellMain : shellMain.querySelector('[role="main"]')) ||
          shellMain.querySelector('[class*="home-main-content"], [class*="container-name:home-main-content"]');
        if (homeCandidate) {
          const hasGameSource = homeCandidate.querySelector('[data-feature="game-source"]');
          const hasSuggestions = homeCandidate.querySelector('[class*="group/home-suggestions"]');
          const hasTaskContent = homeCandidate.querySelector('.thread-scroll-container, [data-message-author-role], article, .message');
          const isHomeContainer = homeCandidate.matches('[class*="home-main-content"], [class*="container-name:home-main-content"]');
          if ((hasGameSource || hasSuggestions || isHomeContainer) && !hasTaskContent) {
            homeCandidate.classList.add('dream-skin-home');
            shellMain.classList.add('dream-skin-home-shell');
          } else {
            shellMain.classList.remove('dream-skin-home-shell');
          }
        }
      }
    }
    
    const rows = root.querySelectorAll('.dream-theme-row');
    rows.forEach(row => {
      const id = row.dataset.themeId;
      row.style.background = id === themeId ? 'rgba(36,201,215,.16)' : 'transparent';
      row.style.fontWeight = id === themeId ? '700' : '500';
    });
  };

  const restoreNative = () => {
    window.__dreamWorkThemeStyle.textContent = '';
    delete document.documentElement.dataset.dreamTheme;
    if (appId !== 'hana-agent' && appId !== 'kimi') applyMode('#ffffff');
    if (appId === 'codex') {
      document.documentElement.classList.remove('codex-dream-skin');
      delete document.documentElement.dataset.dreamShell;
    }
    panel.style.display = 'none';
  };

  document.getElementById('${e.menuId}-host')?.remove();
  document.getElementById('${e.menuId}')?.remove();
  if (window.__dreamWorkOutsideClick) {
    document.removeEventListener('pointerdown', window.__dreamWorkOutsideClick, true);
    delete window.__dreamWorkOutsideClick;
  }

  const host = document.createElement('div');
  host.id = '${e.menuId}-host';
  host.style.cssText = "all:initial!important;position:fixed!important;right:16px!important;bottom:16px!important;z-index:2147483647!important;display:block!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;width:fit-content!important;height:fit-content!important;transform:none!important;filter:none!important;contain:none!important;isolation:isolate!important;";
  const mount = host.attachShadow({ mode: 'open' });

  const root = document.createElement('div');
  root.id = '${e.menuId}';
  root.style.cssText = "position:relative;display:flex;flex-direction:column;align-items:flex-end;font:500 13px/1.4 system-ui;user-select:none;color-scheme:light;pointer-events:auto;color:#17344f!important;";

  const button = document.createElement('button');
  button.type = 'button';
  button.title = 'Dream Work Theme';
  button.textContent = '◉';
  button.style.cssText = "margin-left:auto;width:36px;height:36px;border-radius:10px;border:1px solid rgba(0,0,0,.12);background:rgba(255,255,255,.92);backdrop-filter:blur(10px);box-shadow:0 3px 12px rgba(0,0,0,.2);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;color:#17344f;font-size:18px;line-height:1;";

  const panel = document.createElement('div');
  panel.style.cssText = "display:none;margin-bottom:8px;min-width:200px;padding:6px;border-radius:12px;border:1px solid rgba(0,0,0,.1);background:rgba(255,255,255,.96);backdrop-filter:blur(16px);box-shadow:0 10px 30px rgba(0,0,0,.18);color:#17344f!important;-webkit-text-fill-color:#17344f!important;";

  const row = (label, dotColor, onPick, before) => {
    const item = document.createElement('div');
    item.style.cssText = "display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;cursor:pointer;color:#17344f!important;-webkit-text-fill-color:#17344f!important;";
    const dot = document.createElement('span');
    dot.style.cssText = "width:10px;height:10px;border-radius:50%;flex:none;background:" + dotColor + ";";
    const text = document.createElement('span');
    text.textContent = label;
    text.style.cssText = 'color:#17344f!important;-webkit-text-fill-color:#17344f!important;';
    item.append(dot, text);
    item.addEventListener('mouseenter', () => { if (item.style.fontWeight !== '700') item.style.background = 'rgba(0,0,0,.05)'; });
    item.addEventListener('mouseleave', () => { item.style.background = 'transparent'; });
    item.addEventListener('click', () => onPick(item));
    if (before) panel.insertBefore(item, before); else panel.appendChild(item);
    return item;
  };

  for (const theme of themes) {
    const item = row(theme.name, theme.accent || '#24c9d7', () => {
      applyTheme(theme.id);
      void recordPresetUsage(theme.id);
      panel.style.display = 'none';
    });
    item.className = 'dream-theme-row';
    item.dataset.themeId = theme.id;
  }

  const buildCustomCss = (dataUrl, colors, customId) => cssTemplate
    .split(sentinels.hero).join(dataUrl)
    .split(sentinels.accent).join(colors.accent)
    .split(sentinels.secondary).join(colors.secondary)
    .split(sentinels.surface).join(colors.surface)
    .split(sentinels.text).join(colors.text)
    .split(sentinels.id).join(customId);
  const hex = (r, g, b) => '#' + [r, g, b].map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, amount) => a.map((value, index) => value + (b[index] - value) * amount);
  const extractPalette = (canvas) => {
    const context = canvas.getContext('2d');
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const buckets = new Map();
    let luminanceSum = 0;
    let count = 0;
    for (let index = 0; index < pixels.length; index += 4) {
      const r = pixels[index], g = pixels[index + 1], b = pixels[index + 2];
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      luminanceSum += luminance;
      count += 1;
      const saturation = max === 0 ? 0 : (max - min) / max;
      if (saturation < 0.18 || luminance < 24 || luminance > 245) continue;
      const delta = max - min || 1;
      const hue = max === r ? (g - b) / delta + (g < b ? 6 : 0) : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;
      const bucket = (Math.round(hue) % 6) * 2 + (saturation > 0.55 ? 1 : 0);
      const entry = buckets.get(bucket) || { weight: 0, r: 0, g: 0, b: 0, hue: hue * 60 };
      const weight = saturation * saturation;
      entry.weight += weight;
      entry.r += r * weight;
      entry.g += g * weight;
      entry.b += b * weight;
      buckets.set(bucket, entry);
    }
    const averageLuminance = count ? luminanceSum / count : 128;
    const ranked = [...buckets.values()].sort((left, right) => right.weight - left.weight)
      .map((entry) => ({ rgb: [entry.r / entry.weight, entry.g / entry.weight, entry.b / entry.weight], hue: entry.hue }));
    const accent = ranked[0]?.rgb || [36, 201, 215];
    const secondary = ranked.find((entry) => Math.abs(entry.hue - (ranked[0]?.hue || 0)) > 50)?.rgb || mix(accent, [255, 255, 255], 0.35);
    const light = averageLuminance > 128;
    return {
      accent: hex(...accent),
      secondary: hex(...secondary),
      surface: hex(...(light ? mix(accent, [252, 252, 255], 0.92) : mix(accent, [12, 12, 18], 0.86))),
      text: hex(...(light ? mix(accent, [16, 24, 40], 0.82) : mix(accent, [244, 246, 252], 0.85))),
    };
  };
  const MAX_CUSTOM = 5;
  const customRows = new Map();
  const loadCustoms = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(customStorageKey) || '[]');
      return Array.isArray(saved) ? saved.filter((theme) => theme && theme.dataUrl && theme.colors).slice(0, MAX_CUSTOM) : [];
    } catch { return []; }
  };
  const writeLocalCustoms = (saved) => {
    try { localStorage.setItem(customStorageKey, JSON.stringify(saved.slice(0, MAX_CUSTOM))); }
    catch (error) { console.warn('Dream Theme: 自定义图片本地缓存失败', error); }
  };
  const syncSharedCustoms = (saved) => fetch(sharedCustomThemeService.endpoint, {
    method: 'PUT',
    headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
    body: JSON.stringify(saved.slice(0, MAX_CUSTOM)),
  }).then((response) => {
    if (!response.ok) throw new Error('共享图片同步失败: HTTP ' + response.status);
    return response.json();
  });
  const saveCustoms = (saved) => {
    const limited = saved.slice(0, MAX_CUSTOM);
    writeLocalCustoms(limited);
    return syncSharedCustoms(limited).catch((error) => {
      console.warn('Dream Theme: 共享图片同步失败', error);
      return limited;
    });
  };
  const localCustomThemes = loadCustoms();
  const initialCustomThemes = sharedCustomThemes.length > 0 ? sharedCustomThemes : localCustomThemes;
  writeLocalCustoms(initialCustomThemes);
  if (sharedCustomThemes.length === 0 && localCustomThemes.length > 0) void saveCustoms(localCustomThemes);
  const applyCustomTheme = (slot) => {
    window.__dreamWorkThemeStyle.textContent = materializeCss(buildCustomCss(slot.dataUrl, slot.colors, slot.id), slot.id);
    document.documentElement.dataset.dreamTheme = slot.id;
    if (appId !== 'hana-agent') applyMode(slot.colors.surface);
    if (appId === 'codex') document.documentElement.classList.add('codex-dream-skin');
    ensureCustomRow(slot);
  };
  const deleteCustom = async (slotId) => {
    const saved = loadCustoms();
    const index = saved.findIndex((theme) => theme.id === slotId);
    if (index < 0) return;
    if (document.documentElement.dataset.dreamTheme === slotId) restoreNative();
    saved.splice(index, 1);
    await saveCustoms(saved);
    customRows.get(slotId)?.remove();
    customRows.delete(slotId);
  };
  const ensureCustomRow = (slot) => {
    const existing = customRows.get(slot.id);
    if (existing) {
      existing.querySelector('span + span').textContent = slot.name;
      existing.firstChild.style.background = slot.colors.accent;
      return;
    }
    const item = row(slot.name, slot.colors.accent, () => {
      const current = loadCustoms().find((theme) => theme.id === slot.id) || slot;
      applyCustomTheme(current);
      panel.style.display = 'none';
    }, uploadRow);
    const text = item.querySelector('span + span');
    text.style.cssText = 'flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
    const remove = document.createElement('span');
    remove.textContent = '×';
    remove.title = '删除这张自定义图片';
    remove.style.cssText = 'flex:none;width:18px;height:18px;line-height:18px;text-align:center;border-radius:50%;color:rgba(0,0,0,.45);font-size:14px;';
    remove.addEventListener('click', (event) => { event.stopPropagation(); deleteCustom(slot.id); });
    item.appendChild(remove);
    customRows.set(slot.id, item);
  };
  const importFromDataUrl = (dataUrl, name) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = async () => {
      const scale = Math.min(1, 1600 / image.width);
      const full = document.createElement('canvas');
      full.width = Math.round(image.width * scale);
      full.height = Math.round(image.height * scale);
      full.getContext('2d').drawImage(image, 0, 0, full.width, full.height);
      const sample = document.createElement('canvas');
      sample.width = 48;
      sample.height = Math.max(1, Math.round(48 * image.height / image.width));
      sample.getContext('2d').drawImage(image, 0, 0, sample.width, sample.height);
      const colors = extractPalette(sample);
      const compressed = full.toDataURL('image/webp', 0.8);
      const saved = loadCustoms();
      let slot;
      if (saved.length < MAX_CUSTOM) {
        slot = { id: 'custom-codex-' + Date.now().toString(36), name: name || '我的图片', dataUrl: compressed, colors };
        saved.push(slot);
      } else {
        slot = { id: saved[0].id, name: name || '我的图片', dataUrl: compressed, colors };
        saved[0] = slot;
      }
      await saveCustoms(saved);
      applyCustomTheme(slot);
      resolve(colors);
    };
    image.onerror = () => reject(new Error('图片读取失败'));
    image.src = dataUrl;
  });
  const picker = document.createElement('input');
  picker.type = 'file';
  picker.accept = 'image/png,image/jpeg,image/webp';
  picker.style.display = 'none';
  picker.addEventListener('change', () => {
    const file = picker.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => importFromDataUrl(reader.result, file.name.replace(/\\.[a-z0-9]+$/i, ''));
    reader.readAsDataURL(file);
    picker.value = '';
    panel.style.display = 'none';
  });
  const uploadRow = row('＋ 自定义图片', 'rgba(36,201,215,.9)', () => picker.click());
  uploadRow.style.borderTop = '1px solid rgba(0,0,0,.08)';
  const native = row('还原主题', 'rgba(0,0,0,.24)', () => restoreNative());
  initialCustomThemes.forEach(ensureCustomRow);
  fetch(sharedCustomThemeService.endpoint, {
    headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token },
  }).then((response) => response.ok ? response.json() : Promise.reject(new Error('HTTP ' + response.status)))
    .then((latest) => {
      if (!Array.isArray(latest)) return;
      for (const slotId of [...customRows.keys()]) {
        if (!latest.some((item) => item.id === slotId)) {
          customRows.get(slotId)?.remove();
          customRows.delete(slotId);
        }
      }
      writeLocalCustoms(latest);
      latest.forEach(ensureCustomRow);
    }).catch((error) => console.warn('Dream Theme: 共享图片读取失败', error));

  button.addEventListener('click', () => {
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  });

  const closeOnOutsideClick = (event) => {
    if (panel.style.display === 'none') return;
    const path = event.composedPath?.() || [];
    if (!path.includes(host)) panel.style.display = 'none';
  };
  if (window.__dreamWorkOutsideClick) {
    document.removeEventListener('pointerdown', window.__dreamWorkOutsideClick, true);
  }
  window.__dreamWorkOutsideClick = closeOnOutsideClick;
  document.addEventListener('pointerdown', closeOnOutsideClick, true);

  root.append(panel, button, picker);
  mount.appendChild(root);
  document.documentElement.appendChild(host);

  clearInterval(window.__dreamWorkMenuGuard);
  const ensureInjectedNodes = () => {
    if (!window.__dreamWorkThemeStyle.isConnected) document.head.appendChild(window.__dreamWorkThemeStyle);
    if (!host.isConnected) document.documentElement.appendChild(host);
  };
  window.__dreamWorkMenuGuard = setInterval(() => {
    ensureInjectedNodes();
  }, 250);
  applyTheme(currentThemeId);
  ensureInjectedNodes();
})()`}async function on(e){try{return x.platform()==="win32"?an(e):x.platform()==="darwin"?sn(e):x.platform()==="linux"?cn(e):{success:!1,error:`Unsupported platform: ${x.platform()}`}}catch(n){return{success:!1,error:n.message}}}function an(e){const n=c.join(x.homedir(),"Desktop"),t=c.join(n,`${e.label}.lnk`),r=process.execPath,o=c.dirname(r),a=`
    $WshShell = New-Object -comObject WScript.Shell
    $Shortcut = $WshShell.CreateShortcut("${t.replace(/\\/g,"\\\\")}")
    $Shortcut.TargetPath = "${r.replace(/\\/g,"\\\\")}"
    $Shortcut.Arguments = "--launch=${e.appId}:${e.themeId}"
    $Shortcut.WorkingDirectory = "${o.replace(/\\/g,"\\\\")}"
    $Shortcut.Save()
  `;return new Promise(s=>{require("child_process").exec(`powershell -Command "${a.replace(/"/g,'\\"')}"`,d=>{s(d?{success:!1,error:d.message}:{success:!0,path:t})})})}function sn(e){const n=c.join(x.homedir(),"Desktop"),t=c.join(n,`${e.label}.app`),o=`
    tell application "Terminal"
      do script "'${process.execPath}' --launch=${e.appId}:${e.themeId}"
    end tell
  `,a=c.join(n,`${e.id}.scpt`);return m.writeFileSync(a,o),new Promise(s=>{require("child_process").exec(`osacompile -o "${t}" "${a}"`,d=>{m.unlinkSync(a),s(d?{success:!1,error:d.message}:{success:!0,path:t})})})}async function cn(e){const n=c.join(x.homedir(),".local","share","applications");m.existsSync(n)||m.mkdirSync(n,{recursive:!0});const t=c.join(n,`${e.id}.desktop`),r=process.execPath,o=`[Desktop Entry]
Type=Application
Name=${e.label}
Exec="${r}" --launch=${e.appId}:${e.themeId}
Icon=${e.icon||"utilities-terminal"}
Terminal=false
Categories=Utility;
`;return m.writeFileSync(t,o),m.chmodSync(t,493),{success:!0,path:t}}const ln=ce.promisify(K.execFile),dn="https://api.dreamskin.cc",Fe=`${dn}/v1/themes`,He=32*1024*1024,Z=6;let ne=0;async function mn(){const e=ne,n=await un(e),t=n.items;ne=e+t.length>=n.total?0:e+Z;const r=Ie(),o={checked:t.length,imported:0,skipped:0,offset:e,page:Math.floor(e/Z)+1,total:n.total,nextOffset:ne,failed:[]};for(const a of t){const s=bn(a.themeId);if(!a.applyCompatible||Pe(s)){o.skipped++;continue}try{await hn(a,r,s)?o.imported++:o.skipped++}catch(d){o.failed.push({id:a.id,name:a.name,error:d.message})}}return o}async function un(e){const n=`${Fe}?limit=${Z}&offset=${e}&sort=recent`,t=await fetch(n,{signal:AbortSignal.timeout(3e4),redirect:"error"});if(!t.ok)throw new Error(`Theme list request failed: HTTP ${t.status}`);const r=await t.json();if(!Array.isArray(r.items)||r.items.length>Z||!Number.isInteger(r.total)||r.total<0)throw new Error("Theme list response is invalid");return{items:r.items,total:r.total}}async function hn(e,n,t){fn(e);const r=m.mkdtempSync(c.join(x.tmpdir(),"dream-work-theme-")),o=c.join(r,"theme.zip"),a=c.join(r,"extract"),s=c.join(n,`.updating-${t}-${process.pid}`);try{m.mkdirSync(a);const d=`${Fe}/${e.id}/download`,i=await fetch(d,{signal:AbortSignal.timeout(12e4),redirect:"error"});if(!i.ok)throw new Error(`Theme download failed: HTTP ${i.status}`);const l=Buffer.from(await i.arrayBuffer());if(l.length!==e.packageBytes)throw new Error(`Downloaded size mismatch: expected ${e.packageBytes}, got ${l.length}`);if(l.length>He)throw new Error("Theme package exceeds 32 MiB");if(le.createHash("sha256").update(l).digest("hex")!==e.packageSha256)throw new Error("Downloaded SHA-256 does not match metadata");m.writeFileSync(o,l,{flag:"wx"}),await pn(o,a);const h=gn(a),p=JSON.parse(m.readFileSync(c.join(h,"theme.json"),"utf8")),k=p.image;if(typeof k!="string"||c.basename(k)!==k||!/\.(png|jpe?g|webp)$/i.test(k))throw new Error("Theme image name is invalid");const w=c.join(h,k),E=c.join(h,"theme.css");if(!m.existsSync(w)||!m.statSync(w).isFile())throw new Error("Theme image is missing");if(!m.existsSync(E)||!m.statSync(E).isFile())throw new Error("theme.css is missing");const P=wn(p,e,t,`hero${c.extname(k).toLowerCase()}`);return _t(P.name,P.author,w)?!1:(m.mkdirSync(s),m.copyFileSync(w,c.join(s,P.hero)),m.copyFileSync(E,c.join(s,"theme.css")),m.writeFileSync(c.join(s,"theme.json"),`${JSON.stringify(P,null,2)}
`),m.renameSync(s,c.join(n,t)),!0)}finally{m.rmSync(s,{recursive:!0,force:!0}),m.rmSync(r,{recursive:!0,force:!0})}}async function pn(e,n){const{path7za:t}=require("7zip-bin");await ln(t,["x",e,`-o${n}`,"-y"],{windowsHide:!0,timeout:12e4})}function gn(e){const t=[e,...m.readdirSync(e,{withFileTypes:!0}).filter(r=>r.isDirectory()).map(r=>c.join(e,r.name))].filter(r=>m.existsSync(c.join(r,"theme.json"))&&m.existsSync(c.join(r,"theme.css")));if(t.length!==1)throw new Error("Theme ZIP must contain one theme root");return t[0]}function fn(e){if(!/^ver_[a-z0-9]{8,64}$/.test(e.id))throw new Error("Theme version ID is invalid");if(!Number.isInteger(e.packageBytes)||e.packageBytes<1||e.packageBytes>He)throw new Error("Theme package size is invalid");if(!/^[a-f0-9]{64}$/.test(e.packageSha256))throw new Error("Theme package SHA-256 is invalid")}function bn(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").replace(/-+/g,"-")||"community-theme"}function wn(e,n,t,r){const o=e.appearance==="dark"?"dark":"light",a=o==="dark"?"#10141c":"#f4f7fa",s=e.colors||{};return{schemaVersion:1,id:t,name:String(e.name||n.name||t).trim(),author:n.authorDisplayName||"DreamSkin Community",hero:r,colors:{accent:F(s.accent,"#4f8cff",a),secondary:F(s.secondary||s.accentAlt,"#7ba7d8",a),surface:F(s.panelAlt||s.panel||s.background,a,a),text:F(s.text,o==="dark"?"#eef2f7":"#1f2937",a)},copy:null,apps:Object.fromEntries(V.filter(d=>!d.acceptsGenericThemes).map(d=>[d.id,{compat:!0}]))}}function F(e,n,t){if(typeof e!="string")return n;const r=e.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(r){let i=r[1];return i.length===3&&(i=i.split("").map(l=>l+l).join("")),`#${i.slice(0,6).toLowerCase()}`}const o=e.trim().match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);if(!o)return n;const a=o[4]===void 0?1:Number(o[4]),s=F(t,n,n).slice(1).match(/../g).map(i=>parseInt(i,16));return`#${[1,2,3].map(i=>Math.round(Number(o[i])*a+s[i-1]*(1-a))).map(i=>i.toString(16).padStart(2,"0")).join("")}`}let re=null;v.protocol.registerSchemesAsPrivileged([{scheme:"theme-asset",privileges:{standard:!0,secure:!0,supportFetchAPI:!0,stream:!0}}]);function qe(){re=new v.BrowserWindow({width:1200,height:800,webPreferences:{preload:c.join(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1}}),process.env.VITE_DEV_SERVER_URL?re.loadURL(process.env.VITE_DEV_SERVER_URL):re.loadFile(c.join(__dirname,"../renderer/dist/index.html"))}v.app.whenReady().then(()=>{v.protocol.handle("theme-asset",e=>{const n=decodeURIComponent(new URL(e.url).pathname.replace(/^\//,"")),t=jt(n);return t?new Response(m.readFileSync(t),{headers:{"Content-Type":yn(t),"Cache-Control":"public, max-age=3600"}}):new Response("Theme asset not found",{status:404})}),qe()});function yn(e){const n=c.extname(e).toLowerCase();return n===".jpg"||n===".jpeg"?"image/jpeg":n===".webp"?"image/webp":"image/png"}v.app.on("window-all-closed",()=>{process.platform!=="darwin"&&v.app.quit()});v.app.on("activate",()=>{v.BrowserWindow.getAllWindows().length===0&&qe()});const ve=process.argv.find(e=>e.startsWith("--launch="));if(ve){const[,e]=ve.split("="),[n,t]=e.split(":");n&&t&&(console.log(`[main] Received launch args: ${n}:${t}`),setTimeout(async()=>{try{const r=await Te(n,t);if(r.success){console.log(`[main] Launched ${n} with theme ${t} on port ${r.port}`),console.log(`[main] Starting theme injection for ${n}:${t} on port ${r.port}`);const o=await Re(n,t,r.port);console.log("[main] Injection result:",o)}else console.error(`[main] Failed to launch ${n}: ${r.error}`)}catch(r){console.error("[main] Launch error:",r)}},1e3))}v.ipcMain.handle("discover-apps",async()=>rt());v.ipcMain.handle("launch-app",async(e,n,t)=>Te(n,t));v.ipcMain.handle("apply-theme",async(e,n,t,r)=>Re(n,t,r));v.ipcMain.handle("create-shortcut",async(e,n)=>{const t={...n,id:`${n.appId}-${n.themeId}-${Date.now()}`};return on(t)});v.ipcMain.handle("list-themes",async(e,n)=>Y(n).map(t=>({id:t.id,name:t.name,author:t.author,hero:Dt(t.id)})));v.ipcMain.handle("update-themes",async()=>mn());v.ipcMain.handle("get-status",async(e,n,t)=>{var o;return await st(n)?{...await qt(n,t||((o=j(n))==null?void 0:o.defaultPort)||9339),running:!0}:{installed:!1,menu:!1,targets:0,running:!1}});v.ipcMain.handle("remove-skin",async(e,n,t)=>Jt(n,t));v.ipcMain.handle("debug-targets",async(e,n)=>{try{const r=await(await fetch(`http://127.0.0.1:${n}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();return{success:!0,count:r.length,raw:r,targets:r.map(o=>({id:o.id,type:o.type,url:o.url,title:o.title,webSocketDebuggerUrl:o.webSocketDebuggerUrl}))}}catch(t){return{success:!1,error:t.message}}});

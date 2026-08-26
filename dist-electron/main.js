"use strict";var St=Object.defineProperty;var Ct=(e,t,a)=>t in e?St(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var D=(e,t,a)=>Ct(e,typeof t!="symbol"?t+"":t,a);const T=require("electron"),Tt=require("path"),_t=require("fs"),Z=require("child_process"),Be=require("util"),Et=require("os"),At=require("original-fs"),It=require("http"),Pt=require("net"),Dt=require("fs/promises"),Nt=require("crypto");function J(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const a in e)if(a!=="default"){const n=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,n.get?n:{enumerable:!0,get:()=>e[a]})}}return t.default=e,Object.freeze(t)}const d=J(Tt),h=J(_t),k=J(Et),L=J(At),Re=J(It),Fe=J(Pt),Le=J(Nt),v=process.env.LOCALAPPDATA||d.join(k.homedir(),"AppData","Local"),ee=process.env.APPDATA||d.join(k.homedir(),"AppData","Roaming"),E=process.env.ProgramFiles||"C:\\Program Files",N=process.env["ProgramFiles(x86)"]||"C:\\Program Files (x86)",fe=[{id:"workbuddy",name:"WorkBuddy",exeNames:["WorkBuddy.exe"],processName:"WorkBuddy.exe",defaultPort:9339,installPaths:[d.join(v,"workbuddy"),d.join(v,"Programs","workbuddy"),d.join(E,"WorkBuddy"),d.join(N,"WorkBuddy"),"D:\\Program Files\\WorkBuddy"],rendererHints:["app.asar/renderer/index.html","renderer/index.html","index.html"],kind:"workbuddy",acceptsGenericThemes:!0,darwin:{appBundles:["WorkBuddy.app"],executableNames:["WorkBuddy"]},linux:{executableNames:["workbuddy","WorkBuddy"],desktopFiles:["workbuddy.desktop"]}},{id:"codex",name:"Codex",exeNames:["ChatGPT.exe","Codex.exe"],processName:"ChatGPT.exe",defaultPort:9340,installPaths:[d.join(v,"Programs","Codex"),d.join(v,"Programs","OpenAI","Codex"),d.join(E,"Codex"),d.join(N,"Codex"),"D:\\Program Files\\Codex"],rendererHints:["index.html","renderer/index.html"],kind:"codex",acceptsGenericThemes:!0,darwin:{appBundles:["ChatGPT.app","Codex.app"],executableNames:["ChatGPT","Codex"]},linux:{executableNames:["codex","Codex"],desktopFiles:["codex.desktop"]}},{id:"trae-work",name:"TRAE Work",exeNames:["TRAE SOLO CN.exe","TRAE Work CN.exe"],processName:"TRAE SOLO CN.exe",defaultPort:9341,installPaths:["D:\\Program Files\\TRAE SOLO CN",d.join(v,"Programs","TRAE SOLO CN"),d.join(E,"TRAE SOLO CN")],rendererHints:["solo/solo-lite.html","solo-lite.html"],kind:"vscode-work",acceptsGenericThemes:!0,darwin:{appBundles:["TRAE SOLO CN.app","TRAE Work CN.app","TRAE.app"],executableNames:["TRAE SOLO CN","TRAE Work CN","TRAE"]},linux:{executableNames:["trae","trae-work","TRAE"],desktopFiles:["trae.desktop","trae-work.desktop"]}},{id:"qoder-work",name:"QoderWork",exeNames:["QoderWork CN.exe","QoderWork.exe"],processName:"QoderWork CN.exe",defaultPort:9342,installPaths:["D:\\Program Files\\QoderWork CN",d.join(v,"Programs","QoderWork CN"),d.join(E,"QoderWork CN")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",devToolsActivePort:d.join(ee,"QoderWork CN","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["QoderWork CN.app","QoderWork.app"],executableNames:["QoderWork CN","QoderWork"]},linux:{executableNames:["qoder-work","qoderwork","QoderWork"],desktopFiles:["qoder-work.desktop","qoderwork.desktop"]}},{id:"catpaw",name:"CatPaw",exeNames:["CatPaw.exe"],processName:"CatPaw.exe",defaultPort:9343,installPaths:[d.join(v,"CatPaw"),d.join(v,"Programs","CatPaw"),d.join(E,"CatPaw")],rendererHints:["app.asar/dist/index.html","dist/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["CatPaw.app"],executableNames:["CatPaw"]},linux:{executableNames:["catpaw","CatPaw"],desktopFiles:["catpaw.desktop"]}},{id:"zcode",name:"ZCode",exeNames:["ZCode.exe"],processName:"ZCode.exe",defaultPort:9344,installPaths:["D:\\Program Files\\ZCode",d.join(v,"Programs","ZCode"),d.join(E,"ZCode")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["ZCode.app"],executableNames:["ZCode"]},linux:{executableNames:["zcode","ZCode"],desktopFiles:["zcode.desktop"]}},{id:"qwen-office",name:"千问办公",exeNames:["QwenWorkCN.exe"],processName:"QwenWorkCN.exe",defaultPort:9345,installPaths:["D:\\Program Files\\QwenWorkCN",d.join(v,"Programs","QwenWorkCN"),d.join(E,"QwenWorkCN")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",devToolsActivePort:d.join(ee,"QwenWorkCN","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["QwenWorkCN.app","Qwen Work.app"],executableNames:["QwenWorkCN","Qwen Work"]},linux:{executableNames:["qwen-work","qwenwork","QwenWorkCN"],desktopFiles:["qwen-work.desktop","qwenwork.desktop"]}},{id:"hana-agent",name:"HanaAgent",exeNames:["HanaAgent.exe"],processName:"HanaAgent.exe",defaultPort:9346,installPaths:[d.join(v,"Programs","HanaAgent"),d.join(E,"HanaAgent"),d.join(N,"HanaAgent")],rendererHints:[".hanako/artifacts/renderer/","artifacts/renderer/","/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["HanaAgent.app"],executableNames:["HanaAgent"]},linux:{executableNames:["hana-agent","HanaAgent"],desktopFiles:["hana-agent.desktop"]}},{id:"kimi",name:"Kimi Work",exeNames:["Kimi.exe"],processName:"Kimi.exe",defaultPort:9347,installPaths:["D:\\Program Files\\Kimi",d.join(v,"Programs","Kimi"),d.join(E,"Kimi"),d.join(N,"Kimi")],rendererHints:["kimi-agent.html","kimichat.html","https://www.kimi.com/"],kind:"generic-work",devToolsActivePort:d.join(ee,"kimi-desktop","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["Kimi.app"],executableNames:["Kimi"]},linux:{executableNames:["kimi","Kimi"],desktopFiles:["kimi.desktop"]}},{id:"opencode",name:"OpenCode",exeNames:["OpenCode.exe"],processName:"OpenCode.exe",defaultPort:9348,installPaths:[d.join(v,"Programs","@opencode-aidesktop"),d.join(v,"Programs","OpenCode"),d.join(E,"OpenCode"),d.join(N,"OpenCode")],rendererHints:["oc://renderer/index.html"],kind:"generic-work",devToolsActivePort:d.join(ee,"ai.opencode.desktop","DevToolsActivePort"),windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["OpenCode.app"],executableNames:["OpenCode"]},linux:{executableNames:["opencode-desktop","OpenCode"],desktopFiles:["opencode-desktop.desktop"]}},{id:"doubao",name:"豆包",exeNames:["Doubao.exe"],processName:"Doubao.exe",defaultPort:9349,installPaths:[d.join(v,"Doubao","Application","app"),d.join(v,"Doubao","Application"),d.join(E,"Doubao"),d.join(N,"Doubao")],rendererHints:["doubao://doubao-chat/chat"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["Doubao.app"],executableNames:["Doubao"]},linux:{executableNames:["doubao","Doubao"],desktopFiles:["doubao.desktop"]}},{id:"agnes-code",name:"AgnesCode",exeNames:["AgnesCode.exe"],processName:"AgnesCode.exe",defaultPort:9350,installPaths:["D:\\Program Files\\AgnesCode",d.join(v,"Programs","AgnesCode"),d.join(E,"AgnesCode"),d.join(N,"AgnesCode")],rendererHints:["app.asar/.vite/renderer/main_window/index.html"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["AgnesCode.app"],executableNames:["AgnesCode"]},linux:{executableNames:["agnes-code","agnescode","AgnesCode"],desktopFiles:["agnes-code.desktop","agnescode.desktop"]}},{id:"minimax-code",name:"MiniMax Code",exeNames:["MiniMax Code.exe"],processName:"MiniMax Code.exe",defaultPort:9351,installPaths:["D:\\Program Files\\MiniMax Code",d.join(v,"Programs","MiniMax Code"),d.join(E,"MiniMax Code"),d.join(N,"MiniMax Code")],rendererHints:["app://./archon"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["MiniMax Code.app"],executableNames:["MiniMax Code"]},linux:{executableNames:["minimax-code","MiniMax Code"],desktopFiles:["minimax-code.desktop"]}},{id:"astronclaw",name:"AstronClaw",exeNames:["AstronClaw.exe"],processName:"AstronClaw.exe",defaultPort:9352,installPaths:["D:\\Program Files\\AstronClaw",d.join(v,"Programs","AstronClaw"),d.join(E,"AstronClaw"),d.join(N,"AstronClaw")],rendererHints:["app.asar/out/renderer/index.html","out/renderer/index.html"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["AstronClaw.app"],executableNames:["AstronClaw"]},linux:{executableNames:["astronclaw","AstronClaw"],desktopFiles:["astronclaw.desktop"]}},{id:"sparkdesk",name:"SparkDesk",exeNames:["SparkDesk.exe"],processName:"SparkDesk.exe",defaultPort:9354,installPaths:["D:\\Program Files\\SparkDesk",d.join(v,"Programs","SparkDesk"),d.join(E,"SparkDesk"),d.join(N,"SparkDesk")],rendererHints:["out/renderer/index.html#desk","out/renderer/index.html"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["SparkDesk.app"],executableNames:["SparkDesk"]},linux:{executableNames:["sparkdesk","SparkDesk"],desktopFiles:["sparkdesk.desktop"]}},{id:"stepfun",name:"StepFun",exeNames:["StepFun.exe"],processName:"StepFun.exe",defaultPort:9353,installPaths:["D:\\Program Files\\StepFun\\StepFun",d.join(v,"Programs","StepFun"),d.join(E,"StepFun"),d.join(N,"StepFun")],rendererHints:["app://chat-web/"],kind:"generic-work",devToolsActivePort:d.join(ee,"stepfun-desktop","DevToolsActivePort"),windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["StepFun.app"],executableNames:["StepFun"]},linux:{executableNames:["stepfun","StepFun"],desktopFiles:["stepfun.desktop"]}},{id:"deepseek-harness",name:"DSH Desktop",exeNames:["DSH Desktop.exe","DeepSeek Harness.exe"],processName:"DSH Desktop.exe",defaultPort:9355,installPaths:["D:\\Program Files\\DSH Desktop","D:\\Program Files\\DeepSeek Harness",d.join(v,"Programs","DSH Desktop"),d.join(v,"Programs","DeepSeek Harness"),d.join(E,"DSH Desktop"),d.join(E,"DeepSeek Harness"),d.join(N,"DSH Desktop"),d.join(N,"DeepSeek Harness")],rendererHints:["dsh-desktop-platform="],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["DSH Desktop.app","DeepSeek Harness.app"],executableNames:["DSH Desktop","DeepSeek Harness"]},linux:{executableNames:["dsh-desktop","DSH Desktop","deepseek-harness","DeepSeek Harness"],desktopFiles:["dsh-desktop.desktop","deepseek-harness.desktop"]}},{id:"monkeycode",name:"MonkeyCode",exeNames:["monkeycode-desktop.exe"],processName:"monkeycode-desktop.exe",defaultPort:9356,installPaths:["D:\\Program Files\\MonkeyCode",d.join(v,"Programs","MonkeyCode"),d.join(E,"MonkeyCode"),d.join(N,"MonkeyCode")],rendererHints:["http://tauri.localhost/"],kind:"generic-work",windowsPathScopedKill:!0,webView2:!0,acceptsGenericThemes:!0,darwin:{appBundles:["MonkeyCode.app"],executableNames:["MonkeyCode","monkeycode-desktop"]},linux:{executableNames:["monkeycode-desktop","MonkeyCode"],desktopFiles:["monkeycode.desktop","monkeycode-desktop.desktop"]}},{id:"autoclaw",name:"AutoClaw",exeNames:["AutoClaw.exe"],processName:"AutoClaw.exe",defaultPort:9357,installPaths:["D:\\Program Files\\AutoClaw",d.join(v,"Programs","AutoClaw"),d.join(E,"AutoClaw"),d.join(N,"AutoClaw")],rendererHints:["out/renderer/index.html"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["AutoClaw.app"],executableNames:["AutoClaw"]},linux:{executableNames:["autoclaw","AutoClaw"],desktopFiles:["autoclaw.desktop"]}}];function O(e){return fe.find(t=>t.id===e)}const Se=Be.promisify(Z.execFile);function Mt(){const e=[],t=d.join(process.env.ProgramFiles||"C:\\Program Files","WindowsApps");if(!h.existsSync(t))return e;try{const a=h.readdirSync(t);for(const n of a)if(/^OpenAI\.Codex_\d+/i.test(n)){const o=d.join(t,n,"app","ChatGPT.exe");h.existsSync(o)&&e.push(o)}}catch{}return e}async function jt(){const e=`
$ErrorActionPreference = 'SilentlyContinue'
$package = Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue
if (-not $package) { exit 1 }
$manifest = Get-AppxPackageManifest -Package $package.PackageFullName
$rel = [string]$manifest.Package.Applications.Application.Executable
if (-not $rel) { exit 1 }
$full = Join-Path $package.InstallLocation $rel
if (Test-Path -LiteralPath $full -PathType Leaf) { Write-Output $full } else { exit 1 }
`;try{const{stdout:t}=await Se("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",e],{encoding:"utf8",maxBuffer:4194304}),a=t.trim();if(a&&h.existsSync(a))return a}catch{}return null}async function nt(){const e=[];if(k.platform()!=="win32"){for(const o of fe){const r=await Rt(o);r&&e.push({appId:o.id,name:o.name,path:r})}return e}for(const o of fe.filter(r=>r.id!=="codex")){const r=qe(o.exeNames,o.installPaths);r&&e.push({appId:o.id,name:o.name,path:r,version:o.id==="monkeycode"?await Bt(r):void 0})}const a=qe(["Codex.exe","ChatGPT.exe"],[d.join(process.env.LOCALAPPDATA||"","Programs","Codex"),d.join(process.env.LOCALAPPDATA||"","Programs","OpenAI","Codex"),...Mt()]),n=a?null:await jt();return n?e.push({appId:"codex",name:"Codex",path:n}):a&&e.push({appId:"codex",name:"Codex",path:a}),e}async function Ot(e){return(await nt()).find(t=>t.appId===e)}async function Bt(e){if(k.platform()!=="win32")return;const t=e.replace(/'/g,"''");try{const{stdout:a}=await Se("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",`(Get-Item -LiteralPath '${t}').VersionInfo.ProductVersion`],{encoding:"utf8",maxBuffer:1048576});return a.trim()||void 0}catch{return}}async function Rt(e){var a,n,o;const t=k.platform();if(t==="darwin"){for(const r of((a=e.darwin)==null?void 0:a.appBundles)??[]){const s=d.join("/Applications",r);if(h.existsSync(s))return s}return null}if(t==="linux"){for(const r of((n=e.linux)==null?void 0:n.desktopFiles)??[]){const s=await Ft(r);if(s)return s}for(const r of((o=e.linux)==null?void 0:o.executableNames)??[])try{const{stdout:s}=await Se("which",[r],{encoding:"utf8"}),c=s.trim();if(c&&h.existsSync(c))return c}catch{}}return null}async function Ft(e){for(const t of[d.join(k.homedir(),".local","share","applications",e),d.join("/usr/share/applications",e),d.join("/usr/local/share/applications",e)]){if(!h.existsSync(t))continue;const a=h.readFileSync(t,"utf8").match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m),n=(a==null?void 0:a[1])||(a==null?void 0:a[2]);if(n){if(d.isAbsolute(n)&&h.existsSync(n))return n;try{const{stdout:o}=await Se("which",[n],{encoding:"utf8"}),r=o.trim();if(r&&h.existsSync(r))return r}catch{}}}return null}function qe(e,t){for(const a of t){if(!a||!h.existsSync(a))continue;if(h.statSync(a).isFile()&&e.some(o=>d.basename(a).toLowerCase()===o.toLowerCase()))return a;for(const o of e){const r=d.join(a,o);if(h.existsSync(r))return r}try{const o=h.readdirSync(a,{withFileTypes:!0}).filter(r=>r.isDirectory()).sort((r,s)=>s.name.localeCompare(r.name,void 0,{numeric:!0}));for(const r of o)for(const s of e){const c=d.join(a,r.name,s);if(h.existsSync(c))return c}}catch{}}return null}const we=Be.promisify(Z.execFile);async function Lt(e){const t=O(e);if(!t)return!1;const a=rt(t);if(k.platform()==="win32"){for(const n of a)try{const{stdout:o}=await we("tasklist.exe",["/FI",`IMAGENAME eq ${n}`,"/FO","CSV","/NH"],{encoding:"utf8",windowsHide:!0});if(o.split(/\r?\n/).some(r=>r.trim().toLowerCase().startsWith(`"${n.toLowerCase()}"`)))return!0}catch{}return!1}for(const n of a)try{return await we("pgrep",["-f",n],{encoding:"utf8"}),!0}catch{}return!1}async function ot(e,t){const a=O(e);if(!a)return{success:!1,error:`Unknown app: ${e}`};try{const n=na(e);console.log(`[launcher] Killing existing ${e} instances...`),e==="autoclaw"&&k.platform()==="win32"||(await ta(e,n),await aa(a.defaultPort,15e3));const r=await Xt(a.defaultPort);r!==a.defaultPort&&console.warn(`[launcher] Default CDP port ${a.defaultPort} is unavailable; using ${r}`);const s=a.webView2?[]:[`--remote-debugging-port=${r}`];e==="codex"&&s.push("--disable-extensions"),t&&e!=="kimi"&&s.push(`--dream-theme=${t}`),e==="agnes-code"&&k.platform()==="win32"&&await Gt(n);const c=k.platform()==="win32"?a.devToolsActivePort:void 0;if(c)try{h.unlinkSync(c)}catch{}console.log(`[launcher] Launching ${n} with args: ${s.join(" ")}`);const i=Kt(e,n,r),l=e==="kimi"&&k.platform()==="win32"?await zt(n,s):e==="autoclaw"&&k.platform()==="win32"?await Wt(n,s,i):await Ve(n,s,i);console.log(`[launcher] Spawned process${l?` with PID: ${l}`:""}`),console.log(`[launcher] Waiting for CDP port ${r} to be ready...`);let m=r;return c?e==="stepfun"?(m=await qt(c,3e4),await Ve(n,[],i),await st(m,a.rendererHints,3e4)):m=await Jt(c,a.rendererHints,3e4):e==="autoclaw"&&k.platform()==="win32"?m=await Yt(r,a.rendererHints,3e4):await Zt(r,3e4),console.log(`[launcher] CDP port ${m} is ready`),(e==="hana-agent"||e==="kimi")&&await Vt(m,a.rendererHints,3e4,e==="kimi"?750:3e3),{success:!0,port:m}}catch(n){return console.error("[launcher] Launch failed:",n),{success:!1,error:n.message}}}function Ve(e,t,a){return new Promise((n,o)=>{const r=Z.spawn(e,t,{detached:!0,stdio:"ignore",env:a});r.once("error",o),r.once("spawn",()=>{r.removeListener("error",o),r.unref(),n(r.pid)})})}async function Wt(e,t,a){const n=d.join(k.tmpdir(),`dream-work-autoclaw-${process.pid}-${Date.now()}.ready`);try{h.unlinkSync(n)}catch{}const o=Buffer.from(e,"utf8").toString("base64"),r=Buffer.from(d.dirname(e),"utf8").toString("base64"),s=Buffer.from(n,"utf8").toString("base64"),c=Buffer.from(JSON.stringify(t),"utf8").toString("base64"),i=[`$appPath = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('${o}'))`,`$workingDirectory = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('${r}'))`,`$launchMarker = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('${s}'))`,"$target = [IO.Path]::GetFullPath($appPath)","Get-CimInstance Win32_Process | Where-Object { $_.ExecutablePath -and [IO.Path]::GetFullPath($_.ExecutablePath) -ieq $target } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }","Start-Sleep -Milliseconds 500",`$argsJson = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('${c}'))`,"[string[]]$launchArgs = @($argsJson | ConvertFrom-Json)","Start-Process -FilePath $appPath -ArgumentList $launchArgs -WorkingDirectory $workingDirectory","[IO.File]::WriteAllText($launchMarker, 'ready')"].join("; "),m=`Start-Process -FilePath powershell.exe -ArgumentList '-NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -EncodedCommand ${Buffer.from(i,"utf16le").toString("base64")}' -Verb RunAs`;try{await Ht("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",m],a),await Ut(n,3e4)}catch(p){const u=String((p==null?void 0:p.message)||p);throw/canceled by the user|operation was canceled|操作已被用户取消|用户取消/i.test(u)?new Error("AutoClaw requires administrator permission to enable theme injection; the UAC prompt was canceled"):p}finally{try{h.unlinkSync(n)}catch{}}}async function Ut(e,t){const a=Date.now()+t;for(;Date.now()<a;){if(h.existsSync(e))return;await new Promise(n=>setTimeout(n,100))}throw new Error("Timed out waiting for elevated AutoClaw launch confirmation")}function Ht(e,t,a){return new Promise((n,o)=>{const r=Z.spawn(e,t,{stdio:"ignore",env:a,windowsHide:!0});r.once("error",o),r.once("exit",(s,c)=>{if(s===0){n();return}o(new Error(`${e} exited with ${c?`signal ${c}`:`code ${s??"unknown"}`}`))})})}async function zt(e,t){const a=d.join(k.tmpdir(),`dream-work-kimi-${process.pid}-${Date.now()}.lnk`),n={...De(),DREAM_WORK_LAUNCH_EXE:e,DREAM_WORK_LAUNCH_ARGS:JSON.stringify(t),DREAM_WORK_LAUNCH_CWD:d.dirname(e),DREAM_WORK_LAUNCH_SHORTCUT:a},o=["[string[]]$launchArgs = @($env:DREAM_WORK_LAUNCH_ARGS | ConvertFrom-Json)","$shell = New-Object -ComObject WScript.Shell","$shortcut = $shell.CreateShortcut($env:DREAM_WORK_LAUNCH_SHORTCUT)","$shortcut.TargetPath = $env:DREAM_WORK_LAUNCH_EXE","$shortcut.Arguments = [string]::Join(' ', $launchArgs)","$shortcut.WorkingDirectory = $env:DREAM_WORK_LAUNCH_CWD","$shortcut.Save()"].join("; ");await we("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",o],{env:n,windowsHide:!0}),Z.spawn(d.join(process.env.WINDIR||"C:\\Windows","explorer.exe"),[a],{detached:!0,stdio:"ignore",env:De()}).unref(),setTimeout(()=>{try{h.unlinkSync(a)}catch{}},15e3).unref()}function De(){const e={...process.env};for(const t of["VITE_DEV_SERVER_URL","ELECTRON_RENDERER_URL","MAIN_VITE_DEV_SERVER_URL","ELECTRON_RUN_AS_NODE"])delete e[t];return e}function Kt(e,t,a){var o,r;const n=De();if(e==="agnes-code"&&(n.AGNES_DEV="1",n.ENABLE_PLAYWRIGHT="1",n.PLAYWRIGHT_DEBUG_PORT=String(a),n.AGNESD_BINARY=d.join(d.dirname(t),"resources","bin",k.platform()==="win32"?"agnesd.exe":"agnesd")),(o=O(e))!=null&&o.webView2){const s=(r=n.WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS)==null?void 0:r.trim(),c=`--remote-debugging-port=${a}`;n.WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS=s?`${s} ${c}`:c}return n}async function Gt(e){const t=d.dirname(e),a=d.join(t,"resources","app.asar"),n=`${e}.dream-work-original`,o=`${a}.dream-work-titlebar.json`,r=L.readFileSync(a),s=r.toString("latin1");if(/function ([\w$]+)\(e,t="sidebar"\)\{return\{color:"#00000000",symbolColor:([\w$]+)\[e\],height:32\}\}/.test(s)){Xe(e),console.log("[launcher] AgnesCode native title bar overlay is already transparent");return}const l=/function ([\w$]+)\(e,t="sidebar"\)\{return\{color:t==="content"\?([\w$]+)\(e\):([\w$]+)\(e\),symbolColor:([\w$]+)\[e\],height:32\}\}/.exec(s);if(!l||l.index<0)throw new Error("AgnesCode title bar implementation was not recognized; the installed version may have changed");L.copyFileSync(e,n),Xe(e);const m=l[0],p=`function ${l[1]}(e,t="sidebar"){return{color:"#00000000",symbolColor:${l[4]}[e],height:32}}`;if(p.length>m.length)throw new Error("AgnesCode title bar patch does not fit the original ASAR entry");L.writeFileSync(o,JSON.stringify({archiveSize:r.length,offset:l.index,original:Buffer.from(m,"latin1").toString("base64")}));const u=Buffer.from(p.padEnd(m.length," "),"latin1"),g=L.openSync(a,"r+");try{L.writeSync(g,u,0,u.length,l.index),L.fsyncSync(g)}finally{L.closeSync(g)}console.log("[launcher] Patched AgnesCode native window controls overlay to transparent")}function Xe(e){const t=Buffer.from("dL7pKGdnNz796PbbjQWNKmHXBZaB9tsX","ascii"),a=L.readFileSync(e),n=a.indexOf(t),o=a.lastIndexOf(t);if(n<0)throw new Error("AgnesCode Electron fuse wire was not found");const r=n===o?[n]:[n,o];let s=!1;for(const c of r){const i=c+t.length,l=a[i],m=a[i+1];if(l!==1||m<=4)throw new Error(`Unsupported AgnesCode Electron fuse wire: version=${l}, length=${m}`);const p=i+2+4;a[p]!==48&&(a[p]=48,s=!0)}s&&(L.writeFileSync(e,a),console.log("[launcher] Disabled AgnesCode embedded ASAR integrity validation"))}function rt(e){var t,a;return k.platform()==="darwin"?((t=e.darwin)==null?void 0:t.executableNames)??[]:k.platform()==="linux"?((a=e.linux)==null?void 0:a.executableNames)??[]:[...new Set([e.processName,...e.exeNames].filter(Boolean))]}async function Jt(e,t,a){const n=Date.now();let o=0;for(;Date.now()-n<a;){try{const r=h.readFileSync(e,"utf8").split(/\r?\n/,1)[0],s=Number(r);if(Number.isInteger(s)&&s>0)return o=s,await st(s,t,3e3),s}catch{}await new Promise(r=>setTimeout(r,500))}throw new Error(`DevToolsActivePort did not expose a live renderer${o?` on port ${o}`:""}: ${e}`)}async function qt(e,t){const a=Date.now();let n=0;for(;Date.now()-a<t;){try{const o=h.readFileSync(e,"utf8").split(/\r?\n/,1)[0],r=Number(o);if(Number.isInteger(r)&&r>0&&(n=r,(await fetch(`http://127.0.0.1:${r}/json/version`,{signal:AbortSignal.timeout(1e3)})).ok))return r}catch{}await new Promise(o=>setTimeout(o,500))}throw new Error(`DevToolsActivePort did not expose a live endpoint${n?` on port ${n}`:""}: ${e}`)}async function st(e,t,a){const n=Date.now();for(;Date.now()-n<a;){try{const o=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(1e3)});if(o.ok){const r=await o.json();if(Array.isArray(r)&&r.some(s=>(s==null?void 0:s.type)==="page"&&t.some(c=>String(s.url).includes(c))))return}}catch{}await new Promise(o=>setTimeout(o,250))}throw new Error(`CDP renderer endpoint is not ready on port ${e}`)}async function Vt(e,t,a,n){const o=Date.now();let r="",s=0;for(;Date.now()-o<a;){try{const l=(await(await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(1e3)})).json()).find(m=>(m==null?void 0:m.type)==="page"&&t.some(p=>String(m.url).includes(p)));if(l!=null&&l.id){if(l.id!==r)r=l.id,s=Date.now();else if(Date.now()-s>=n){console.log(`[launcher] Stable renderer ${r} confirmed`);return}}}catch{}await new Promise(c=>setTimeout(c,250))}throw new Error(`Renderer did not stabilize on port ${e}`)}async function Xt(e){for(let t=e;t<=e+100;t++)if(await Qt(t))return t;throw new Error(`No available CDP port found between ${e} and ${e+100}`)}function Qt(e){return new Promise(t=>{const a=Fe.createServer();a.unref(),a.once("error",()=>t(!1)),a.listen(e,"127.0.0.1",()=>{a.close(n=>t(!n))})})}async function Zt(e,t){const a=Date.now();let n="unknown";for(;Date.now()-a<t;)try{await new Promise((o,r)=>{const s=Fe.createConnection(e,"127.0.0.1",()=>{s.end(),o()});s.once("error",c=>{n=c.message,r(c)}),setTimeout(()=>{s.destroy(),r(new Error("timeout"))},1e3)}),console.log(`[launcher] Port ${e} is open, verifying CDP endpoint...`),await ea(e,15e3),console.log(`[launcher] CDP endpoint verified on port ${e}`);return}catch(o){n=o.message,console.log(`[launcher] Port check failed: ${o.message}, retrying...`),await new Promise(r=>setTimeout(r,1e3))}throw new Error(`CDP port ${e} did not become ready within ${t}ms (last error: ${n})`)}async function Yt(e,t,a){const n=Date.now()+a;let o="AutoClaw CDP endpoint was not found";for(;Date.now()<n;){for(let r=e;r<Math.min(e+100,65536);r++)try{const s=await Qe(`http://127.0.0.1:${r}/json/version`,500);if(!`${(s==null?void 0:s.Browser)??""} ${(s==null?void 0:s["User-Agent"])??""}`.toLowerCase().includes("autoclaw"))continue;const i=await Qe(`http://127.0.0.1:${r}/json/list`,500);if(Array.isArray(i)&&i.some(m=>(m==null?void 0:m.type)==="page"&&typeof m.url=="string"&&t.some(p=>m.url.includes(p))))return r;o=`AutoClaw CDP on port ${r} did not expose its renderer`}catch(s){o=(s==null?void 0:s.message)||String(s)}await new Promise(r=>setTimeout(r,250))}throw new Error(`Timed out waiting for AutoClaw CDP near port ${e}: ${o}`)}async function Qe(e,t){return new Promise((a,n)=>{const o=Re.get(e,{timeout:t},r=>{if(r.statusCode!==200){r.resume(),n(new Error(`HTTP ${r.statusCode??"unknown"} from ${e}`));return}let s="";r.setEncoding("utf8"),r.on("data",c=>{s+=c}),r.on("end",()=>{try{a(JSON.parse(s))}catch(c){n(c)}})});o.on("timeout",()=>o.destroy(new Error(`Timed out fetching ${e}`))),o.on("error",n)})}async function ea(e,t){const a=Date.now();for(;Date.now()-a<t;)try{await new Promise((n,o)=>{const r=Re.request({hostname:"127.0.0.1",port:e,path:"/json/version",method:"GET",timeout:2e3},s=>{let c="";s.on("data",i=>{c+=i}),s.on("end",()=>{s.statusCode===200?(console.log(`[launcher] CDP version response: ${c.substring(0,200)}`),n()):o(new Error(`HTTP ${s.statusCode}`))})});r.on("error",o),r.on("timeout",()=>{r.destroy(),o(new Error("timeout"))}),r.end()});return}catch(n){if(Date.now()-a>=t)throw n;await new Promise(o=>setTimeout(o,1e3))}}async function ta(e,t){const a=k.platform(),n=O(e);if(!n)return;const o=rt(n);try{if(a==="win32"){if(n.windowsPathScopedKill){await we("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command","$target = [IO.Path]::GetFullPath($env:DREAM_WORK_TARGET_EXE); Get-CimInstance Win32_Process | Where-Object { $_.ExecutablePath -and [IO.Path]::GetFullPath($_.ExecutablePath) -ieq $target } | ForEach-Object { taskkill.exe /T /F /PID $_.ProcessId *> $null }"],{env:{...process.env,DREAM_WORK_TARGET_EXE:t},windowsHide:!0}).catch(()=>{}),console.log(`[launcher] Killed existing ${e} instances at ${t}`);return}const{execSync:r}=require("child_process");for(const s of o)try{r(`taskkill /T /F /IM "${s}" 2>nul`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${s} process tree`)}catch{}}else if(a==="darwin"){const{execSync:r}=require("child_process");for(const s of o)try{r(`pkill -f "${s}" 2>/dev/null || true`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${s} processes`)}catch{}}else if(a==="linux"){const{execSync:r}=require("child_process");for(const s of o)try{r(`pkill -f "${s}" 2>/dev/null || true`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${s} processes`)}catch{}}}catch(r){console.warn("[launcher] Failed to kill existing instances:",r)}}async function aa(e,t){const a=Date.now();for(;Date.now()-a<t;){if(!await new Promise(o=>{const r=Fe.createConnection(e,"127.0.0.1");r.once("connect",()=>{r.destroy(),o(!0)}),r.once("error",()=>o(!1)),r.setTimeout(500,()=>{r.destroy(),o(!1)})})){console.log(`[launcher] Previous CDP port ${e} is closed`);return}await new Promise(o=>setTimeout(o,250))}throw new Error(`Existing ${e} CDP service did not stop; refusing to inject into the old application instance`)}function na(e){var n,o,r,s;const t=O(e);if(!t)throw new Error(`Unknown app: ${e}`);const a=k.platform();if(a==="win32"){for(const l of t.installPaths){if(!l||!h.existsSync(l))continue;if(h.statSync(l).isFile())return l;for(const p of t.exeNames){const u=d.join(l,p);if(h.existsSync(u))return u}const m=h.readdirSync(l,{withFileTypes:!0}).filter(p=>p.isDirectory()).sort((p,u)=>u.name.localeCompare(p.name,void 0,{numeric:!0}));for(const p of m)for(const u of t.exeNames){const g=d.join(l,p.name,u);if(h.existsSync(g))return g}}const c=t.exeNames,i=[process.env.ProgramFiles,process.env["ProgramFiles(x86)"]].filter(Boolean);for(const l of i){if(!l||!h.existsSync(l))continue;const p=h.readdirSync(l).find(u=>u.toLowerCase().includes(e.replace("-",""))||u.toLowerCase().includes(t.name.toLowerCase()));if(p){const u=d.join(l,p);for(const g of c){const f=d.join(u,g);if(h.existsSync(f))return f}}}if(e==="codex"){const l=d.join(process.env.ProgramFiles||"C:\\Program Files","WindowsApps");console.log("[launcher] Codex WindowsApps fallback, path:",l);try{const p=h.readdirSync(l).find(u=>/^OpenAI\.Codex_\d+/i.test(u));if(p){const u=d.join(l,p,"app","ChatGPT.exe");if(h.existsSync(u))return console.log("[launcher] Found Codex via WindowsApps scan:",u),u}}catch(m){console.log("[launcher] WindowsApps scan error:",m.message)}try{const{execFileSync:m}=require("child_process"),p="Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue | ForEach-Object { Join-Path $_.InstallLocation (Get-AppxPackageManifest -Package $_.PackageFullName).Package.Applications.Application.Executable }";console.log("[launcher] Running PowerShell fallback...");const u=m("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",p],{encoding:"utf8",stdio:["pipe","pipe","ignore"]}).trim();if(console.log("[launcher] PowerShell result:",u),u&&h.existsSync(u))return u}catch(m){console.log("[launcher] PowerShell fallback error:",m.message)}}}else if(a==="darwin")for(const c of((n=t.darwin)==null?void 0:n.appBundles)??[]){const i=d.join("/Applications",c);if(h.existsSync(i))for(const l of((o=t.darwin)==null?void 0:o.executableNames)??[]){const m=d.join(i,"Contents","MacOS",l);if(h.existsSync(m))return m}}else if(a==="linux"){const c=((r=t.linux)==null?void 0:r.executableNames)??[];for(const l of((s=t.linux)==null?void 0:s.desktopFiles)??[]){const m=oa(l);if(m)return m}const i=["/usr/bin","/usr/local/bin","/opt",d.join(k.homedir(),".local","bin"),"/snap/bin"];for(const l of i)if(h.existsSync(l))for(const m of c){const p=d.join(l,m);if(h.existsSync(p))return p}for(const l of c)try{const{execFileSync:m}=require("child_process"),p=m("which",[l],{encoding:"utf8",stdio:["ignore","pipe","ignore"]}).trim();if(p&&h.existsSync(p))return p}catch{}}throw new Error(`Could not find ${e} executable`)}function oa(e){for(const t of[d.join(k.homedir(),".local","share","applications",e),d.join("/usr/share/applications",e),d.join("/usr/local/share/applications",e)]){if(!h.existsSync(t))continue;const a=h.readFileSync(t,"utf8").match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m),n=(a==null?void 0:a[1])||(a==null?void 0:a[2]);if(n){if(d.isAbsolute(n)&&h.existsSync(n))return n;try{const{execFileSync:o}=require("child_process"),r=o("which",[n],{encoding:"utf8",stdio:["ignore","pipe","ignore"]}).trim();if(r&&h.existsSync(r))return r}catch{}}}}const ra=5e3,sa=100,ia=15e3,ca=1e4,la=5e3;function da(e){if(!Number.isInteger(e)||e<1024||e>65535)throw new TypeError("port must be an integer from 1024 through 65535");return e}function X(e,t,a={}){const n=a.allowZero?0:Number.EPSILON;if(!Number.isFinite(e)||e<n){const o=a.allowZero?"non-negative":"positive";throw new TypeError(`${t} must be a finite ${o} number`)}return e}function it(e){if(typeof e!="string"||e.length===0||e!==e.trim())throw new TypeError("webSocketDebuggerUrl must be a non-empty URL string");let t;try{t=new URL(e)}catch(a){throw new TypeError(`webSocketDebuggerUrl is invalid: ${a.message}`)}if(t.protocol!=="ws:"||t.hostname!=="127.0.0.1"||t.username||t.password||t.hash||!t.port)throw new TypeError("webSocketDebuggerUrl must use ws://127.0.0.1 with an explicit port");return da(Number(t.port)),t}function ma(e,t){if(e===null||typeof e!="object"||Array.isArray(e)||e.type!=="page"||typeof e.url!="string"||typeof e.webSocketDebuggerUrl!="string")return!1;try{it(e.webSocketDebuggerUrl)}catch{return!1}return e.url.includes(t)}function We(e){if(e===null||typeof e!="object"||Array.isArray(e)||e.type!=="page"||typeof e.url!="string"||typeof e.webSocketDebuggerUrl!="string")return!1;try{return it(e.webSocketDebuggerUrl),!0}catch{return!1}}function ua(e){return new Promise(t=>setTimeout(t,e))}async function Ze(e,t){const a=Math.max(0,t.deadline-Date.now());let n=null;try{return await Promise.race([e,new Promise((o,r)=>{n=setTimeout(()=>{var s;(s=t.onTimeout)==null||s.call(t),r(new Error(`${t.label} timed out after ${t.timeoutMs}ms`))},a)})])}finally{n&&clearTimeout(n)}}async function Y(e,t,a={}){const n=X(a.timeoutMs??la,"timeoutMs",{allowZero:!1}),o=a.fetchImpl??globalThis.fetch;if(typeof o!="function")throw new TypeError("fetchImpl must be a function");const r=`http://127.0.0.1:${e}/json/list`,s=new AbortController,c=Date.now()+n,i=a.quiet===!0;i||console.log(`[cdp] fetchRendererTargets: port=${e}, timeoutMs=${n}, endpoint=${r}`);let l;try{l=await Ze(Promise.resolve(o(r,{redirect:"error",signal:s.signal})),{deadline:c,timeoutMs:n,label:"renderer target discovery",onTimeout:()=>s.abort()})}catch(p){throw i||console.log("[cdp] fetchRendererTargets error:",p),new Error(`failed to fetch renderer targets from ${r}: ${p.message}`)}if(l===null||typeof l!="object"||!l.ok)throw new Error(`renderer target discovery failed with HTTP ${(l==null?void 0:l.status)??"unknown"}`);let m;try{m=await Ze(Promise.resolve(l.json()),{deadline:c,timeoutMs:n,label:"renderer target discovery JSON",onTimeout:()=>s.abort()})}catch(p){throw new Error(`malformed renderer target JSON from ${r}: ${p.message}`)}if(!Array.isArray(m))throw new Error("malformed renderer target JSON: expected an array");return m.filter(p=>ma(p,t)).sort(ha)}async function pa(e,t,a={}){const n=X(a.timeoutMs??ra,"timeoutMs",{allowZero:!0}),o=X(a.pollMs??sa,"pollMs",{allowZero:!1}),r=a.fetchImpl??globalThis.fetch;let s=0;const c=Date.now()+n;let i=new Error("no renderer discovery attempt completed");for(console.log(`[cdp] waitForRendererTargets: port=${e}, hint=${t}, timeoutMs=${n}`);;){try{const m=Math.max(1,Math.min(n-s,c-Date.now()));console.log(`[cdp] Attempting fetch: elapsed=${s}ms, remainingBudget=${m}ms, deadline=${c}`);const p=await Y(e,t,{fetchImpl:r,timeoutMs:m});if(p.length>0)return p;i=new Error("no matching renderer/index.html page targets")}catch(m){i=m instanceof Error?m:new Error(String(m)),console.log("[cdp] Fetch error:",i.message)}if(s>=n||Date.now()>=c)throw new Error(`timed out after ${n}ms waiting for renderer targets on 127.0.0.1:${e}: ${i.message}`);const l=Math.min(o,n-s);await ua(l),s+=l}}class C{constructor(t,a={}){D(this,"webSocketDebuggerUrl");D(this,"WebSocketImpl");D(this,"commandTimeoutMs");D(this,"connectTimeoutMs");D(this,"socket",null);D(this,"nextRequestId",1);D(this,"pending",new Map);D(this,"socketOpen",!1);D(this,"opened",!1);D(this,"closed",!1);D(this,"closeStarted",!1);D(this,"terminalError",null);D(this,"openPromise",null);D(this,"resolveOpen",null);D(this,"rejectOpen",null);D(this,"connectTimer",null);this.webSocketDebuggerUrl=t;let n=null,o=null;try{n=require("ws")??null,n||(o="ws loaded but WebSocket is undefined")}catch(r){o=`ws require failed: ${(r==null?void 0:r.message)??r}`}if(!n)try{const r=require("undici");n=(r==null?void 0:r.WebSocket)??null,n||(o="undici loaded but WebSocket is undefined")}catch(r){o=`undici require failed: ${(r==null?void 0:r.message)??r}`}if(!n&&typeof globalThis.WebSocket=="function"&&(n=globalThis.WebSocket,o=null),!n){const r=o?` (${o})`:"";throw new Error(`No WebSocket implementation available for CDP${r}`)}this.WebSocketImpl=a.WebSocketImpl??n,this.commandTimeoutMs=X(a.commandTimeoutMs??ia,"commandTimeoutMs"),this.connectTimeoutMs=X(a.connectTimeoutMs??ca,"connectTimeoutMs")}open(){if(this.closed)return Promise.reject(this.terminalError??new Error("CDP session is closed"));if(this.opened)return Promise.resolve(this);if(this.openPromise)return this.openPromise;this.openPromise=new Promise((a,n)=>{this.resolveOpen=a,this.rejectOpen=n}),this.connectTimer=setTimeout(()=>{this.terminate(new Error(`CDP WebSocket connect timed out after ${this.connectTimeoutMs}ms`)),this.closeSocket()},this.connectTimeoutMs);try{this.socket=new this.WebSocketImpl(this.webSocketDebuggerUrl)}catch(a){return this.terminate(new Error(`failed to open CDP WebSocket: ${a.message}`)),this.openPromise}const t=this.socket;return t.onopen=()=>{this.closed||this.socketOpen||(this.clearConnectTimer(),this.socketOpen=!0,Promise.all([this.send("Runtime.enable"),this.send("Page.enable")]).then(()=>{if(this.closed)return;this.opened=!0;const a=this.resolveOpen;this.resolveOpen=null,this.rejectOpen=null,a==null||a(this)}).catch(a=>{this.terminate(a),this.closeSocket()}))},t.onmessage=a=>this.handleMessage(a),t.onerror=a=>{const n=a.error,o=n instanceof Error?n.message:typeof a.message=="string"&&a.message.length>0?a.message:"unknown socket error";this.terminate(new Error(`CDP WebSocket error: ${o}`)),this.closeSocket()},t.onclose=()=>{this.closeStarted=!0,this.terminate(new Error("CDP WebSocket closed"))},this.openPromise}send(t,a={},n={}){if(this.closed)return Promise.reject(this.terminalError??new Error("CDP session is closed"));if(!this.socketOpen||!this.socket)return Promise.reject(new Error("CDP session is not open"));if(typeof t!="string"||t.length===0)return Promise.reject(new TypeError("CDP method must be a non-empty string"));const o=X(n.timeoutMs??this.commandTimeoutMs,"timeoutMs"),r=this.nextRequestId++;return new Promise((s,c)=>{const i=setTimeout(()=>{this.pending.delete(r),c(new Error(`CDP ${t} timed out after ${o}ms`))},o);this.pending.set(r,{resolve:s,reject:c,timer:i});try{this.socket.send(JSON.stringify({id:r,method:t,params:a}))}catch(l){clearTimeout(i),this.pending.delete(r),c(new Error(`failed to send CDP ${t}: ${l.message}`))}})}async evaluate(t,a={}){var o,r,s;if(typeof t!="string")throw new TypeError("Runtime.evaluate expression must be a string");const n=await this.send("Runtime.evaluate",{expression:t,awaitPromise:!0,returnByValue:!0},a);if(n!=null&&n.exceptionDetails)throw new Error(`Runtime.evaluate failed: ${((o=n.exceptionDetails.exception)==null?void 0:o.description)??n.exceptionDetails.text??"unknown JavaScript exception"}`);if(((r=n==null?void 0:n.result)==null?void 0:r.type)!=="undefined")return(s=n==null?void 0:n.result)==null?void 0:s.value}async addScriptToEvaluateOnNewDocument(t){const a=await this.send("Page.addScriptToEvaluateOnNewDocument",{source:t});return a==null?void 0:a.identifier}async removeScriptToEvaluateOnNewDocument(t){await this.send("Page.removeScriptToEvaluateOnNewDocument",{identifier:t})}close(){this.closeStarted||(this.terminate(new Error("CDP session closed by client")),this.closeSocket())}handleMessage(t){if(typeof t.data!="string"){this.terminate(new Error("received a non-text CDP WebSocket message")),this.closeSocket();return}let a;try{a=JSON.parse(t.data)}catch(o){this.terminate(new Error(`received malformed CDP JSON: ${o.message}`)),this.closeSocket();return}if(!Number.isInteger(a==null?void 0:a.id))return;const n=this.pending.get(a.id);if(n){if(this.pending.delete(a.id),clearTimeout(n.timer),a.error){n.reject(new Error(`CDP error: ${a.error.message}`));return}n.resolve(a.result)}}terminate(t){if(this.terminalError)return;this.clearConnectTimer(),this.terminalError=t,this.closed=!0,this.socketOpen=!1;const a=this.rejectOpen;this.resolveOpen=null,this.rejectOpen=null,a==null||a(t);for(const{reject:n,timer:o}of this.pending.values())clearTimeout(o),n(t);this.pending.clear()}clearConnectTimer(){this.connectTimer!==null&&(clearTimeout(this.connectTimer),this.connectTimer=null)}closeSocket(){if(this.closeStarted||(this.closeStarted=!0,!this.socket||typeof this.socket.close!="function"))return;const t=this.WebSocketImpl.CLOSING??2,a=this.WebSocketImpl.CLOSED??3;this.socket.readyState===t||this.socket.readyState===a||this.socket.close()}}function ha(e,t){const a=[String(e.id??""),e.url,e.webSocketDebuggerUrl],n=[String(t.id??""),t.url,t.webSocketDebuggerUrl];for(let o=0;o<a.length;o++){if(a[o]<n[o])return-1;if(a[o]>n[o])return 1}return 0}function ga(){return d.join(T.app.getAppPath(),"themes")}function ct(){const e=d.join(T.app.getPath("userData"),"themes");return h.mkdirSync(e,{recursive:!0}),e}function ba(){return[ct(),ga()]}const Ye=new Map;function Ce(e){const t=[],a=new Set;for(const o of ba()){if(!h.existsSync(o))continue;const r=h.readdirSync(o,{withFileTypes:!0});for(const s of r){if(!s.isDirectory())continue;const c=d.join(o,s.name),i=d.join(c,"theme.json");if(h.existsSync(i))try{const l=JSON.parse(h.readFileSync(i,"utf-8")),m=$a(l);if(a.has(m.id))continue;const p=d.join(c,m.hero);if(!h.existsSync(p)||!h.statSync(p).isFile())throw new Error(`theme hero is missing: ${m.hero}`);if(e&&!fa(m,e))continue;a.add(m.id),t.push({id:m.id,name:m.name,author:m.author,path:c,manifest:m})}catch(l){console.error(`Failed to load theme ${s.name}:`,l)}}}const n=new Map;for(const o of t){const r=d.join(o.path,o.manifest.hero),s=Ne(r),c=`${o.name.trim().toLocaleLowerCase()}\0${o.author.trim().toLocaleLowerCase()}\0${s}`,i=n.get(c);(!i||wa(o.id,i.id))&&n.set(c,o)}return[...n.values()].sort((o,r)=>o.name.localeCompare(r.name))}function fa(e,t){var n,o;const a=(n=e.apps[t])==null?void 0:n.compat;return a!==void 0?a:((o=O(t))==null?void 0:o.acceptsGenericThemes)===!0}function Ne(e){const t=h.statSync(e),a=Ye.get(e);if(a&&a.size===t.size&&a.mtimeMs===t.mtimeMs)return a.hash;const n=Le.createHash("sha256").update(h.readFileSync(e)).digest("hex");return Ye.set(e,{size:t.size,mtimeMs:t.mtimeMs,hash:n}),n}function wa(e,t){const a=e.startsWith("custom-"),n=t.startsWith("custom-");return a!==n?!a:e.length<t.length||e.length===t.length&&e.localeCompare(t)<0}function lt(e,t){return Ce(t).find(a=>a.id===e)}function ka(e){const t=lt(e);if(!t)return;const a=d.resolve(t.path,t.manifest.hero);if(a.startsWith(`${d.resolve(t.path)}${d.sep}`))return a}function ya(e){return`theme-asset://local/${encodeURIComponent(e)}`}function xa(e){const t=d.join(e.path,e.manifest.hero),a=h.readFileSync(t);return`data:${Sa(e.manifest.hero)};base64,${a.toString("base64")}`}function va(e,t,a){const n=Ne(a);return Ce().some(o=>o.name.trim().toLowerCase()!==e.trim().toLowerCase()||o.author.trim().toLowerCase()!==t.trim().toLowerCase()?!1:Ne(d.join(o.path,o.manifest.hero))===n)}function $a(e){if(typeof e!="object"||e===null||Array.isArray(e))throw new Error("theme manifest must be an object");if(e.schemaVersion!==1)throw new Error(`unsupported theme schema ${e.schemaVersion}`);if(typeof e.id!="string"||!/^[a-z0-9-]+$/.test(e.id))throw new Error("theme id must use lowercase letters, numbers, and hyphens");if(typeof e.name!="string"||!e.name.trim())throw new Error("theme name must be a non-empty string");if(typeof e.author!="string")throw new Error("theme author must be a string");if(typeof e.hero!="string")throw new Error("theme hero must be a string");if(typeof e.colors!="object"||e.colors===null)throw new Error("theme colors must be an object");const t=["accent","secondary","surface","text"];for(const a of t)if(typeof e.colors[a]!="string"||!/^#[0-9a-fA-F]{6}$/.test(e.colors[a]))throw new Error(`theme color ${a} must be a hex color`);return{schemaVersion:1,id:e.id,name:e.name.trim(),author:e.author,hero:e.hero,colors:{accent:e.colors.accent,secondary:e.colors.secondary,surface:e.colors.surface,text:e.colors.text},copy:e.copy??void 0,apps:e.apps??{}}}function Sa(e){const t=d.extname(e).toLowerCase();return{".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".gif":"image/gif"}[t]||"image/png"}const dt=5,Ca=32*1024*1024;let ue=null;const pe=new Map;function Te(){try{const e=JSON.parse(h.readFileSync(mt(),"utf8"));return He(e)}catch{return[]}}function Ta(e){const t=He(e),a=[...Te()];for(const o of t){const r=a.findIndex(s=>s.id===o.id);r>=0?a[r]=o:a.push(o)}const n=a.slice(0,dt);return Ue(n),n}function Me(e){if(!/^custom-[a-z0-9-]+$/i.test(e))throw new Error("Invalid custom theme id");const t=Te().filter(a=>a.id!==e);return Ue(t),console.log(`[custom-theme-store] Deleted ${e}; ${t.length} custom themes remain`),t}function _a(e,t,a,n=4){const o=pt()[e]??{};return[...t].sort((r,s)=>{if(r===a)return-1;if(s===a)return 1;const c=o[r]??{count:0,lastUsedAt:0},i=o[s]??{count:0,lastUsedAt:0};return i.count-c.count||i.lastUsedAt-c.lastUsedAt}).slice(0,n)}function je(e,t){if(!/^[a-z0-9-]+$/i.test(e)||!/^[a-z0-9-]+$/i.test(t))return;const a=pt(),n=a[e]??{},o=n[t]??{count:0};n[t]={count:o.count+1,lastUsedAt:Date.now()},a[e]=n,ht(ut(),a)}function _e(){return ue||(ue=new Promise((e,t)=>{const a=Le.randomBytes(24).toString("hex"),n=Re.createServer((o,r)=>{var i,l;if(r.setHeader("Access-Control-Allow-Origin","*"),r.setHeader("Access-Control-Allow-Headers","Authorization, Content-Type"),r.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),r.setHeader("Access-Control-Allow-Private-Network","true"),o.method==="OPTIONS"){r.writeHead(204).end();return}if(o.headers.authorization!==`Bearer ${a}`){r.writeHead(401).end("Unauthorized");return}if(o.url==="/theme-usage"&&o.method==="POST"){he(o,r,m=>{if(typeof(m==null?void 0:m.appId)!="string"||typeof(m==null?void 0:m.themeId)!="string")throw new Error("Invalid theme usage payload");je(m.appId,m.themeId),G(r,200,{success:!0})});return}const s=(i=o.url)==null?void 0:i.match(/^\/app-state\/([a-z0-9-]+)$/i);if(s){const m=s[1].toLowerCase();if(o.method==="GET"){G(r,200,pe.get(m)??null);return}if(o.method==="PUT"){he(o,r,p=>{if(typeof(p==null?void 0:p.themeId)!="string"||!Number.isFinite(Number(p==null?void 0:p.actionAt)))throw new Error("Invalid app state payload");const u={themeId:p.themeId,actionAt:Number(p.actionAt)},g=pe.get(m);(!g||u.actionAt>=g.actionAt)&&pe.set(m,u),G(r,200,pe.get(m))});return}r.writeHead(405).end("Method not allowed");return}if(o.url==="/custom-themes/delete"&&o.method==="POST"){he(o,r,m=>{if(typeof(m==null?void 0:m.themeId)!="string"||!/^custom-[a-z0-9-]+$/i.test(m.themeId))throw new Error("Invalid custom theme id");const p=Me(m.themeId);G(r,200,p)});return}const c=(l=o.url)==null?void 0:l.match(/^\/custom-themes\/([a-z0-9-]+)$/i);if(c&&o.method==="DELETE"){const m=decodeURIComponent(c[1]),p=Me(m);G(r,200,p);return}if(o.url!=="/custom-themes"){r.writeHead(404).end("Not found");return}if(o.method==="GET"){G(r,200,Te());return}if(o.method!=="PUT"){r.writeHead(405).end("Method not allowed");return}he(o,r,m=>{const p=He(m);Ue(p),G(r,200,p)})});n.once("error",t),n.listen(0,"127.0.0.1",()=>{const o=n.address();if(!o||typeof o=="string"){n.close(),t(new Error("Shared custom theme service did not expose a TCP port"));return}const r=`http://127.0.0.1:${o.port}`;e({endpoint:`${r}/custom-themes`,usageEndpoint:`${r}/theme-usage`,appStateEndpoint:`${r}/app-state`,token:a})})}),ue)}function mt(){return d.join(T.app.getPath("userData"),"custom-themes.json")}function ut(){return d.join(T.app.getPath("userData"),"theme-usage.json")}function Ue(e){ht(mt(),e)}function pt(){try{const e=JSON.parse(h.readFileSync(ut(),"utf8"));return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}}function ht(e,t){h.mkdirSync(d.dirname(e),{recursive:!0}),h.writeFileSync(e,`${JSON.stringify(t,null,2)}
`)}function he(e,t,a){let n=0;const o=[];e.on("data",r=>{if(n+=r.length,n>Ca){t.writeHead(413).end("Payload too large"),e.destroy();return}o.push(r)}),e.on("end",()=>{if(!t.headersSent)try{a(JSON.parse(Buffer.concat(o).toString("utf8")))}catch(r){t.writeHead(400).end(r.message)}})}function He(e){if(!Array.isArray(e))throw new Error("Custom themes must be an array");return e.slice(0,dt).map((t,a)=>{var o;if(!t||typeof t!="object")throw new Error(`Invalid custom theme at index ${a}`);const n=t;if(typeof n.id!="string"||!/^custom-[a-z0-9-]+$/i.test(n.id))throw new Error(`Invalid custom theme id at index ${a}`);if(typeof n.name!="string"||!n.name.trim())throw new Error(`Invalid custom theme name at index ${a}`);if(typeof n.dataUrl!="string"||!/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(n.dataUrl))throw new Error(`Invalid custom theme image at index ${a}`);for(const r of["accent","secondary","surface","text"])if(typeof((o=n.colors)==null?void 0:o[r])!="string"||!/^#[0-9a-f]{6}$/i.test(n.colors[r]))throw new Error(`Invalid custom theme color ${r} at index ${a}`);return{id:n.id,name:n.name.trim(),dataUrl:n.dataUrl,colors:{accent:n.colors.accent,secondary:n.colors.secondary,surface:n.colors.surface,text:n.colors.text}}})}function G(e,t,a){e.writeHead(t,{"Content-Type":"application/json; charset=utf-8"}),e.end(JSON.stringify(a))}const P="dream-work-style",S="dream-work-menu",ce=new Map,ae=new Map,z=new Map,ke=new Map,Ae=new Map,ge=new Map,Oe=new Map,ye=new Map,V=new Map,xe=new Map,ne=new Map,oe=new Map,ve=new Map,re=new Map,F=new Map,le=new Map,se=new Map,ie=new Map,W="dream-work-theme:kimi:restored",Q="dream-work-theme:kimi:action-at",gt=new Set,y={id:"wb-dream-sentinel-id",hero:"data:image/png;base64,WBDREAMHEROSENTINEL",accent:"#010203",secondary:"#040506",surface:"#070809",text:"#0a0b0c"};let be=null;async function Ea(){if(!be)try{const e=d.resolve(__dirname,"manager","codex-dream-skin.css");be=await Dt.readFile(e,"utf-8")}catch(e){console.warn("[injector] Failed to load Codex base CSS:",e.message),be=""}return be}async function bt(e,t,a,n={}){var m,p;const o=O(e),r=((m=n.profile)==null?void 0:m.version)??(e==="monkeycode"?(p=await Ot(e))==null?void 0:p.version:void 0),s=e==="monkeycode"&&Ha(r)>=26082107,c=n.rendererUrlHint?[n.rendererUrlHint]:(o==null?void 0:o.rendererHints)??["renderer/index.html","index.html"];let i=[],l="No renderer targets found";for(const u of c)try{if(console.log(`[injector] Trying hint "${u}" on port ${a}`),i=await pa(a,u,{timeoutMs:2e4,pollMs:500}),i.length>0){console.log(`[injector] Found ${i.length} targets with hint "${u}"`);break}}catch(g){l=g.message,console.log(`[injector] Hint "${u}" failed: ${g.message}`)}if(e==="sparkdesk")try{const u=await de(a);u.length>0&&(i=u)}catch(u){console.log(`[injector] Failed to collect SparkDesk targets: ${u.message}`)}if(e==="stepfun")try{const u=await ze(a);u.length>0&&(i=u)}catch(u){console.log(`[injector] Failed to collect all StepFun targets: ${u.message}`)}if(e==="monkeycode")try{const u=await Ee(a);u.length>0&&(i=u,await Ja(i))}catch(u){console.log(`[injector] Failed to collect MonkeyCode main target: ${u.message}`)}if(e==="kimi")try{const u=await Ke(a);u.length>0&&(i=u),await Da(i)}catch(u){console.log(`[injector] Failed to collect all Kimi targets: ${u.message}`)}if(i.length===0&&e!=="monkeycode")try{console.log(`[injector] Strict hints failed, trying relaxed page-target fallback on port ${a}`);const g=await(await fetch(`http://127.0.0.1:${a}/json/list`,{signal:AbortSignal.timeout(5e3)})).json(),f=(Array.isArray(g)?g:[]).filter(We).sort((A,M)=>{const K=[String(A.id??""),A.url,A.webSocketDebuggerUrl],U=[String(M.id??""),M.url,M.webSocketDebuggerUrl];for(let j=0;j<K.length;j++){if(K[j]<U[j])return-1;if(K[j]>U[j])return 1}return 0});f.length>0&&(console.log(`[injector] Relaxed fallback found ${f.length} page targets`),i=f)}catch(u){console.log(`[injector] Relaxed fallback failed: ${u.message}`)}if(i.length===0)return{success:!1,applied:0,error:l};try{const u=Ce(e);if(console.log(`[injector] Loaded ${u.length} themes`),!u.some(b=>b.id===t))return{success:!1,applied:0,error:`Theme ${t} is not compatible with ${e}`};const g=_a(e,u.map(b=>b.id),t),f=new Map(u.map(b=>[b.id,b])),A=g.map(b=>f.get(b)).filter(Boolean),M=new Map;for(const b of A){const x=Ua(e,b);M.set(b.id,{name:b.name,css:et(e,b.manifest,xa(b),{monkeyCodeModern:s})+(x?Wa(b):""),surface:b.manifest.colors.surface})}const K=Array.from(M.entries()).map(([b,x])=>{var I;return{id:b,name:x.name,css:x.css,surface:x.surface,accent:((I=u.find(w=>w.id===b))==null?void 0:I.manifest.colors.accent)??"#24c9d7"}});let U=Te();if(U.length===0){const b=e==="workbuddy"?"dreamCustomThemes":"dreamCodexCustomThemes";for(const x of i){const I=new C(x.webSocketDebuggerUrl);try{await I.open();const w=await I.evaluate(`(() => localStorage.getItem(${JSON.stringify(b)}) || '[]')()`),_=JSON.parse(w).filter($=>!gt.has($==null?void 0:$.id));if(Array.isArray(_)&&_.length>0){U=Ta(_);break}}catch(w){console.warn(`[injector] Failed to import existing custom themes from ${e} target ${x.id}:`,w)}finally{I.close()}}}const j=await _e();if(e==="stepfun"){const b=Date.now();await fetch(`${j.appStateEndpoint}/stepfun`,{method:"PUT",headers:{Authorization:`Bearer ${j.token}`,"Content-Type":"application/json"},body:JSON.stringify({themeId:t,actionAt:b})}).catch(()=>{});for(const x of i.filter(I=>String(I.url).startsWith("app://chat-web/"))){const I=new C(x.webSocketDebuggerUrl);try{await I.open(),await I.evaluate(`(() => {
            localStorage.setItem('dream-work-theme:stepfun:state', ${JSON.stringify(JSON.stringify({themeId:t,actionAt:b}))});
          })()`)}catch{}finally{I.close()}}}e==="sparkdesk"&&await fetch(`${j.appStateEndpoint}/sparkdesk`,{method:"PUT",headers:{Authorization:`Bearer ${j.token}`,"Content-Type":"application/json"},body:JSON.stringify({themeId:t,actionAt:Date.now()})}).catch(()=>{});const B=e==="workbuddy"?mn({styleId:P,menuId:S,currentThemeId:t,themes:K,sharedCustomThemes:U,sharedCustomThemeService:j,cssTemplate:wt({id:y.id,colors:{accent:y.accent,secondary:y.secondary,surface:y.surface,text:y.text},copy:null},y.hero,{accent:y.accent,secondary:y.secondary,surface:y.surface,text:y.text})}):e==="hana-agent"?sn({styleId:P,menuId:S,currentThemeId:t,themes:K,sharedCustomThemes:U,sharedCustomThemeService:j,cssTemplate:ft({id:y.id,colors:{accent:y.accent,secondary:y.secondary,surface:y.surface,text:y.text}},y.hero,{accent:y.accent,secondary:y.secondary,surface:y.surface,text:y.text})}):un({styleId:P,menuId:S,currentThemeId:t,appId:e,monkeyCodeModern:s,themes:K,sharedCustomThemes:U,sharedCustomThemeService:j,cssTemplate:et(e,{id:y.id,colors:{accent:y.accent,secondary:y.secondary,surface:y.surface,text:y.text}},y.hero,{monkeyCodeModern:s})});let R=0;for(const b of i)try{console.log(`[injector] Injecting to target ${b.id}: ${b.url}`);const x=new C(b.webSocketDebuggerUrl);if(await x.open(),e==="workbuddy"){let w=!1;const _=Date.now()+15e3;for(;Date.now()<_&&(w=await x.evaluate(`(() => {
              const body = document.body;
              return body?.dataset.applicationName === 'workbuddy' && Boolean(
                document.querySelector('[data-view-id], .teams-container, .conversation-list, .main-content')
              );
            })()`).catch(()=>!1),!w);)await new Promise($=>setTimeout($,100));if(!w){console.warn(`[injector] Skipping non-WorkBuddy target ${b.id}: ${b.url}`),x.close();continue}}if(e==="codex"){const w=await Ea();w&&await x.evaluate(`(() => {
              const existing = document.getElementById('codex-dream-skin-base');
              if (!existing) {
                const style = document.createElement('style');
                style.id = 'codex-dream-skin-base';
                style.textContent = ${JSON.stringify(w)};
                document.head.appendChild(style);
              }
            })()`)}if(e==="hana-agent"||e==="kimi"||e==="doubao"||e==="stepfun"||e==="sparkdesk"||e==="monkeycode"){const w=`(() => {
            const inject = () => ${B};
            if (document.readyState === 'loading') {
              window.addEventListener('DOMContentLoaded', inject, { once: true });
            } else {
              inject();
            }
          })()`,_=e==="hana-agent"?ce:e==="kimi"?ke:e==="doubao"?Oe:e==="stepfun"?xe:e==="sparkdesk"?ve:le,$=_.get(b.id);$&&await x.removeScriptToEvaluateOnNewDocument($).catch(()=>{});const q=await x.addScriptToEvaluateOnNewDocument(w);q&&_.set(b.id,q)}const I=await x.evaluate(e==="hana-agent"?`(() => { window.__dreamWorkForceApply = true; return ${B}; })()`:B);if(console.log(`[injector] Injection result for target ${b.id}:`,I),e==="hana-agent"){let w=!1;for(let _=0;_<20&&(w=await x.evaluate(`(() => {
              const host = document.getElementById('${S}-host');
              return Boolean(
                document.getElementById('${P}') &&
                host?.shadowRoot?.getElementById('${S}') &&
                document.documentElement.dataset.dreamTheme
              );
            })()`).catch(()=>!1),!w);_++)await new Promise($=>setTimeout($,100));if(!w){console.warn(`[injector] HanaAgent injection did not become ready for target ${b.id}`),x.close();continue}}if(e==="codex")for(let w=1;w<=4;w++){const _=await x.evaluate(`(() => {
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
            })`);if(_.homeClasses&&_.homeClasses.includes("dream-skin-home")){console.log(`[injector] Codex home detection for ${b.id}: attempt=${w}`,JSON.stringify(_));break}w<4&&await new Promise($=>setTimeout($,800))}if(e==="codex")try{const w=await x.evaluate(`(() => {
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
            })()`);console.log(`[injector] Codex debug info for ${b.id}:`,JSON.stringify(w,null,2))}catch(w){console.error(`[injector] Failed to get debug info for ${b.id}:`,w)}x.close(),R++}catch(x){console.error(`[injector] Failed to inject to target ${b.id}:`,x)}if(e==="hana-agent"&&R>0){const b=new Set(i.map(_=>_.id)),x=Date.now()+2e4;let I="",w=0;for(;Date.now()<x;){let _=[];try{_=await Y(a,".hanako/artifacts/renderer/",{timeoutMs:2e3,quiet:!0})}catch{}const $=_[0];if(!$){I="",w=0,await new Promise(H=>setTimeout(H,250));continue}if(!b.has($.id)){console.log(`[injector] HanaAgent created renderer target ${$.id}; injecting theme`);const H=new C($.webSocketDebuggerUrl);try{await H.open();const $t=`(() => {
              const inject = () => ${B};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,Je=await H.addScriptToEvaluateOnNewDocument($t);Je&&ce.set($.id,Je),await H.evaluate(`(() => { window.__dreamWorkForceApply = true; return ${B}; })()`),b.add($.id)}finally{H.close()}}const q=new C($.webSocketDebuggerUrl);let Ge=!1;try{await q.open(),Ge=await q.evaluate(`(() => {
            const host = document.getElementById('${S}-host');
            return Boolean(document.getElementById('${P}') && host?.shadowRoot?.getElementById('${S}') && document.documentElement.dataset.dreamTheme);
          })()`)}catch{}finally{q.close()}if(Ge){if(I!==$.id)I=$.id,w=Date.now();else if(Date.now()-w>=2e3)return Ra(a,B,b),je(e,t),{success:!0,applied:1}}else I="",w=0;await new Promise(H=>setTimeout(H,250))}return{success:!1,applied:0,error:"HanaAgent renderer did not stabilize with the injected theme"}}return e==="kimi"&&R>0&&Na(a,B,new Set(i.map(b=>b.id))),e==="doubao"&&R>0&&Pa(a,B),e==="sparkdesk"&&R>0&&Aa(a,B),e==="stepfun"&&R>0&&Ia(a,B),e==="monkeycode"&&R>0&&qa(a,B),R>0&&je(e,t),{success:R>0,applied:R}}catch(u){return console.error("[injector] Injection failed:",u),{success:!1,applied:0,error:u.message}}}async function ze(e){const t=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(2e3)});if(!t.ok)throw new Error(`HTTP ${t.status}`);const a=await t.json();return(Array.isArray(a)?a:[]).filter(n=>{if((n==null?void 0:n.type)!=="page"||!n.webSocketDebuggerUrl)return!1;const o=String(n.url??"");return o.startsWith("app://chat-web/")||o.startsWith("app://ui/pages/browser/")||o.startsWith("https://chat.stepfun.com/subscription")})}async function de(e){const t=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(2e3)});if(!t.ok)throw new Error(`HTTP ${t.status}`);const a=await t.json();return(Array.isArray(a)?a:[]).filter(n=>{if((n==null?void 0:n.type)!=="page"||!n.webSocketDebuggerUrl)return!1;const o=String(n.url??"");return/\/out\/renderer\/index\.html(?:#desk|#settings)?$/.test(o)})}function Aa(e,t){const a=re.get(e);a&&clearInterval(a);const n=(F.get(e)??0)+1;F.set(e,n);let o=!1;const r=setInterval(async()=>{if(!(o||F.get(e)!==n)){o=!0;try{const s=await de(e),c=await _e(),i=await fetch(`${c.appStateEndpoint}/sparkdesk`,{headers:{Authorization:`Bearer ${c.token}`},signal:AbortSignal.timeout(1e3)}).then(l=>l.ok?l.json():null).catch(()=>null);if(F.get(e)!==n)return;for(const l of s){if(F.get(e)!==n)return;const m=new C(l.webSocketDebuggerUrl);try{if(await m.open(),!await m.evaluate(`(() => Boolean(window.__dreamTheme?.activateTheme && document.getElementById('${P}')))()`).catch(()=>!1)){if(F.get(e)!==n)return;const u=await fetch(`${c.appStateEndpoint}/sparkdesk`,{headers:{Authorization:`Bearer ${c.token}`},signal:AbortSignal.timeout(1e3)}).then(A=>A.ok?A.json():null).catch(()=>null);if(!u||u.actionAt!==(i==null?void 0:i.actionAt)||u.themeId!==(i==null?void 0:i.themeId))continue;const g=`(() => {
              const inject = () => ${t};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,f=await m.addScriptToEvaluateOnNewDocument(g);f&&ve.set(l.id,f),await m.evaluate(t)}if(i){if(F.get(e)!==n)return;const u=await m.evaluate("(() => document.documentElement.dataset.dreamTheme || '')()");if(F.get(e)!==n)return;const g=await fetch(`${c.appStateEndpoint}/sparkdesk`,{headers:{Authorization:`Bearer ${c.token}`},signal:AbortSignal.timeout(1e3)}).then(f=>f.ok?f.json():null).catch(()=>null);if(!g||g.actionAt!==i.actionAt||g.themeId!==i.themeId)continue;i.themeId&&u!==i.themeId?await m.evaluate(`(() => window.__dreamTheme?.activateTheme(${JSON.stringify(i.themeId)}, ${i.actionAt}))()`):!i.themeId&&u&&await m.evaluate(`(() => window.__dreamTheme?.restoreNative(${i.actionAt}))()`)}}catch{}finally{m.close()}}}catch{await me(e)||(clearInterval(r),re.delete(e))}finally{o=!1}}},500);r.unref(),re.set(e,r)}function Ia(e,t){const a=ne.get(e);a&&clearInterval(a);const n=(oe.get(e)??0)+1;oe.set(e,n);let o=!1;const r=setInterval(async()=>{if(!(o||oe.get(e)!==n)){o=!0;try{const s=await ze(e),c=await _e();let i=await fetch(`${c.appStateEndpoint}/stepfun`,{headers:{Authorization:`Bearer ${c.token}`},signal:AbortSignal.timeout(1e3)}).then(p=>p.ok?p.json():null).catch(()=>null),l=!1,m=!1;for(const p of s){const u=new C(p.webSocketDebuggerUrl);try{await u.open();const g=await u.evaluate(`(() => ({
            ready: Boolean(window.__dreamTheme?.activateTheme && document.getElementById('${P}')),
            themeId: document.documentElement.dataset.dreamTheme || '',
            restoring: Boolean(window.__dreamTheme?.restoring)
          }))()`).catch(()=>({ready:!1,themeId:"",restoring:!1}));if(String(p.url).startsWith("app://chat-web/")&&g.restoring&&(m=!0),String(p.url).startsWith("app://chat-web/")&&g.ready&&!g.themeId&&(l=!0),!g.ready){const f=`(() => {
              const inject = () => ${t};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,A=await u.addScriptToEvaluateOnNewDocument(f);A&&xe.set(p.id,A),await u.evaluate(t)}}catch{}finally{u.close()}}if((m||l)&&(i={themeId:"",actionAt:Date.now()},await fetch(`${c.appStateEndpoint}/stepfun`,{method:"PUT",headers:{Authorization:`Bearer ${c.token}`,"Content-Type":"application/json"},body:JSON.stringify(i),signal:AbortSignal.timeout(1e3)}).catch(()=>{})),i)for(const p of s){const u=new C(p.webSocketDebuggerUrl);try{await u.open();const g=await u.evaluate("(() => document.documentElement.dataset.dreamTheme || '')()");i.themeId?g!==i.themeId&&await u.evaluate(`(() => window.__dreamTheme?.activateTheme(${JSON.stringify(i.themeId)}, ${i.actionAt}))()`):g&&await u.evaluate(`(() => window.__dreamTheme?.restoreNative(${i.actionAt}))()`)}catch{}finally{u.close()}}}catch{await me(e)||(clearInterval(r),ne.delete(e))}finally{o=!1}}},750);r.unref(),ne.set(e,r)}async function Ke(e){const t=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(2e3)});if(!t.ok)throw new Error(`HTTP ${t.status}`);const a=await t.json();return(Array.isArray(a)?a:[]).filter(n=>{if((n==null?void 0:n.type)!=="page"||!n.webSocketDebuggerUrl)return!1;const o=String(n.url??"");return o.includes("kimi-agent.html")||o.includes("kimichat.html")||/^https:\/\/(?:www\.)?kimi\.com\//.test(o)})}function Pa(e,t){var s;const a=ye.get(e);a&&clearInterval(a);const n=(V.get(e)??0)+1;V.set(e,n);let o=!1;const r=setInterval(async()=>{if(!(o||V.get(e)!==n)){o=!0;try{const c=await Y(e,"doubao://doubao-chat/chat",{timeoutMs:2e3,quiet:!0});for(const i of c){const l=new C(i.webSocketDebuggerUrl);try{await l.open();const m=await l.evaluate(`(() => ({
            restored: document.documentElement.dataset.dreamThemeRestored === 'true' || (() => {
              try { return localStorage.getItem('dream-work-theme:doubao:restored') === '1'; } catch { return false; }
            })(),
            ready: Boolean(document.getElementById('${P}')?.textContent && document.documentElement.dataset.dreamTheme)
          }))()`).catch(()=>({restored:!1,ready:!1}));!m.restored&&!m.ready&&(console.log(`[injector] Doubao renderer ${i.id} lost theme after navigation; reinjecting`),await l.evaluate(t))}finally{l.close()}}}catch(c){V.get(e)===n&&console.warn("[injector] Doubao watcher check failed:",c.message)}finally{o=!1}}},500);(s=r.unref)==null||s.call(r),ye.set(e,r)}async function Da(e){for(const t of e){const a=new C(t.webSocketDebuggerUrl);try{await a.open(),await a.evaluate(`(() => {
        try { localStorage.removeItem('${W}'); } catch {}
        delete document.documentElement.dataset.dreamThemeRestored;
        return true;
      })()`)}finally{a.close()}}}function Na(e,t,a){const n=Ae.get(e);n&&clearInterval(n);const o=(ge.get(e)??0)+1;ge.set(e,o);let r=!1;const s=setInterval(async()=>{var c;if(!(r||ge.get(e)!==o)){r=!0;try{const i=await Ke(e),l=[];for(const u of i){const g=new C(u.webSocketDebuggerUrl);try{await g.open();const f=await g.evaluate(`(() => {
            let storedRestored = false;
            let actionAt = 0;
            try {
              storedRestored = localStorage.getItem('${W}') === '1';
              actionAt = Number(localStorage.getItem('${Q}') || '0');
            } catch {}
            const themeId = document.documentElement.dataset.dreamTheme || '';
            return {
              restored: document.documentElement.dataset.dreamThemeRestored === 'true' || storedRestored,
              themeId,
              actionAt,
              ready: Boolean(document.getElementById('${P}')?.textContent && themeId)
              ,deleteCustomThemeId: window.__dreamWorkDeleteCustomThemeId || ''
            };
          })()`).catch(()=>({restored:!1,themeId:"",actionAt:0,ready:!1,deleteCustomThemeId:""}));l.push({target:u,...f})}finally{g.close()}}const m=(c=l.find(u=>u.deleteCustomThemeId))==null?void 0:c.deleteCustomThemeId;if(m){const u=Me(m);gt.add(m),await Ma(i,u,m)}const p=[...l].sort((u,g)=>g.actionAt-u.actionAt)[0];if(p!=null&&p.restored){console.log("[injector] Kimi watcher observed restore state; preserving menus without theme"),await ja(i,t,a,p.actionAt);return}if(p!=null&&p.ready&&p.themeId&&l.some(u=>u.restored||!u.ready||u.themeId!==p.themeId)){console.log(`[injector] Kimi watcher synchronizing selected theme ${p.themeId} across targets`),await Oa(i,t,a,p.themeId,p.actionAt);return}for(const u of i){if(ge.get(e)!==o)return;const g=new C(u.webSocketDebuggerUrl);try{await g.open();const f=await g.evaluate(`(() => ({
            ready: Boolean(document.getElementById('${P}') && document.documentElement.dataset.dreamTheme),
            restored: document.documentElement.dataset.dreamThemeRestored === 'true'
          }))()`).catch(()=>({ready:!1,restored:!1}));if(f.ready||f.restored){a.add(u.id);continue}if(console.log(`[injector] Kimi watcher restoring theme on target ${u.id}: ${u.url}`),!a.has(u.id)){const A=`(() => {
              const inject = () => ${t};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,M=await g.addScriptToEvaluateOnNewDocument(A);M&&ke.set(u.id,M)}await g.evaluate(t),a.add(u.id)}finally{g.close()}}}catch{await me(e)||(clearInterval(s),Ae.delete(e))}finally{r=!1}}},750);s.unref(),Ae.set(e,s)}async function Ma(e,t,a){const n=JSON.stringify(t);for(const o of e){const r=new C(o.webSocketDebuggerUrl);try{await r.open(),await r.evaluate(`(() => {
        delete window.__dreamWorkDeleteCustomThemeId;
        try { localStorage.setItem('dreamCodexCustomThemes', ${JSON.stringify(n)}); } catch {}
        const host = document.getElementById('${S}-host');
        const menu = host?.shadowRoot?.getElementById('${S}');
        for (const row of Array.from(menu?.querySelectorAll('div') || [])) {
          if (row.dataset?.customThemeId === ${JSON.stringify(a)}) row.remove();
        }
        window.__dreamTheme?.replaceCustomThemes?.(${n});
        return true;
      })()`)}finally{r.close()}}}async function ja(e,t,a,n){for(const o of e){const r=new C(o.webSocketDebuggerUrl);try{if(await r.open(),!ke.has(o.id)){const c=`(() => {
          const inject = () => ${t};
          if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
          else inject();
        })()`,i=await r.addScriptToEvaluateOnNewDocument(c);i&&ke.set(o.id,i)}await r.evaluate(`(() => {
        try { localStorage.setItem('${W}', '1'); } catch {}
        try { localStorage.setItem('${Q}', '${n}'); } catch {}
        document.documentElement.dataset.dreamThemeRestored = 'true';
        return true;
      })()`),await r.evaluate(`(() => {
        const host = document.getElementById('${S}-host');
        return Boolean(host?.shadowRoot?.getElementById('${S}'));
      })()`).catch(()=>!1)||await r.evaluate(t),await r.evaluate(`(() => {
        try { localStorage.setItem('${W}', '1'); } catch {}
        try { localStorage.setItem('${Q}', '${n}'); } catch {}
        document.documentElement.dataset.dreamThemeRestored = 'true';
        const style = document.getElementById('${P}');
        if (style) style.textContent = '';
        delete document.documentElement.dataset.dreamTheme;
        delete document.documentElement.dataset.dreamShell;
        return true;
      })()`),a.add(o.id)}finally{r.close()}}}async function Oa(e,t,a,n,o){for(const r of e){const s=new C(r.webSocketDebuggerUrl);try{await s.open(),await s.evaluate(`(() => {
        try {
          localStorage.removeItem('${W}');
          localStorage.setItem('${Q}', '${o}');
        } catch {}
        delete document.documentElement.dataset.dreamThemeRestored;
        return true;
      })()`),await s.evaluate("(() => Boolean(window.__dreamTheme?.activateTheme))()").catch(()=>!1)||await s.evaluate(t),await s.evaluate(`(() => window.__dreamTheme?.activateTheme(${JSON.stringify(n)}, ${o}))()`),a.add(r.id)}finally{s.close()}}}async function Ba(e,t,a={}){return Fa(e,t,a)}function Ra(e,t,a){const n=ae.get(e);n&&clearInterval(n);const o=(z.get(e)??0)+1;z.set(e,o);let r=!1;const s=setInterval(async()=>{if(!r&&z.get(e)===o){r=!0;try{const i=(await Y(e,".hanako/artifacts/renderer/",{timeoutMs:1e3,quiet:!0}))[0];if(!i||z.get(e)!==o)return;const l=new C(i.webSocketDebuggerUrl);try{await l.open();const m=await l.evaluate(`(() => {
          const host = document.getElementById('${S}-host');
          if (document.documentElement.dataset.dreamThemeRestored === 'true') return 'restored';
          return document.getElementById('${P}') && host?.shadowRoot?.getElementById('${S}') && document.documentElement.dataset.dreamTheme
            ? 'ready'
            : 'missing';
        })()`).catch(()=>"missing");if(m==="ready"||m==="restored"){a.add(i.id);return}if(console.log(`[injector] HanaAgent watcher restoring theme on renderer target ${i.id}`),z.get(e)!==o)return;const p=`(() => {
          const inject = () => ${t};
          if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
          else inject();
        })()`;if(!a.has(i.id)){const u=await l.addScriptToEvaluateOnNewDocument(p);u&&ce.set(i.id,u)}if(await l.evaluate(t),z.get(e)!==o){await l.evaluate(`(() => {
            document.getElementById('${P}')?.remove();
            document.getElementById('${S}-host')?.remove();
            clearInterval(window.__dreamWorkMenuGuard);
            delete window.__dreamWorkMenuGuard;
            delete document.documentElement.dataset.dreamTheme;
          })()`).catch(()=>{});return}a.add(i.id)}finally{l.close()}}catch{await me(e)||(clearInterval(s),ae.delete(e))}finally{r=!1}}},1e3);ae.set(e,s)}async function me(e){try{return(await fetch(`http://127.0.0.1:${e}/json/version`,{signal:AbortSignal.timeout(500)})).ok}catch{return!1}}async function Fa(e,t,a={}){var c;const n=a.rendererUrlHint?[a.rendererUrlHint]:((c=O(e))==null?void 0:c.rendererHints)??["renderer/index.html","index.html"];let o=[];for(const i of n)try{if(o=await Y(t,i,{timeoutMs:1e3,quiet:!0}),o.length>0)break}catch{}if(e==="sparkdesk")try{const i=await de(t);i.length>0&&(o=i)}catch{}if(e==="monkeycode")try{o=await Ee(t)}catch{}if(o.length===0&&e!=="monkeycode")try{const l=await(await fetch(`http://127.0.0.1:${t}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();o=(Array.isArray(l)?l:[]).filter(We).sort((m,p)=>{const u=[String(m.id??""),m.url,m.webSocketDebuggerUrl],g=[String(p.id??""),p.url,p.webSocketDebuggerUrl];for(let f=0;f<u.length;f++){if(u[f]<g[f])return-1;if(u[f]>g[f])return 1}return 0})}catch{}if(o.length===0)return{installed:!1,menu:!1,targets:0};const r=[];for(const i of o){const l=new C(i.webSocketDebuggerUrl);try{if(await l.open(),e==="workbuddy"&&!await l.evaluate("(() => document.body?.dataset.applicationName === 'workbuddy')()"))continue;const m=await l.evaluate(`(() => {
        const style = document.getElementById('${P}');
        const menuHost = document.getElementById('${S}-host');
        const menu = document.getElementById('${S}') || menuHost?.shadowRoot?.getElementById('${S}');
        return JSON.stringify({
          installed: Boolean(style),
          menu: Boolean(menu),
          themeId: document.documentElement.dataset.dreamTheme ?? undefined
        });
      })()`),p=JSON.parse(m);r.push(p)}catch(m){console.warn(`[injector] Status check failed for ${e} target ${i.id}:`,m)}finally{l.close()}}const s=r.find(i=>i.installed&&i.themeId)??r.find(i=>i.installed);return{installed:r.some(i=>i.installed),menu:r.some(i=>i.menu),themeId:s==null?void 0:s.themeId,targets:r.length}}async function La(e,t,a={}){var s;const n=Date.now();if(e==="hana-agent"){z.set(t,(z.get(t)??0)+1);const c=ae.get(t);c&&clearInterval(c),ae.delete(t)}if(e==="doubao"){V.set(t,(V.get(t)??0)+1);const c=ye.get(t);c&&clearInterval(c),ye.delete(t)}if(e==="stepfun"){oe.set(t,(oe.get(t)??0)+1);const c=ne.get(t);c&&clearInterval(c),ne.delete(t)}if(e==="sparkdesk"){F.set(t,(F.get(t)??0)+1);const c=re.get(t);c&&clearInterval(c),re.delete(t);const i=await _e();await fetch(`${i.appStateEndpoint}/sparkdesk`,{method:"PUT",headers:{Authorization:`Bearer ${i.token}`,"Content-Type":"application/json"},body:JSON.stringify({themeId:"",actionAt:n})}).catch(()=>{})}if(e==="monkeycode"){ie.set(t,(ie.get(t)??0)+1);const c=se.get(t);c&&clearInterval(c),se.delete(t)}const o=a.rendererUrlHint??((s=O(e))==null?void 0:s.rendererHints[0])??"renderer/index.html";let r=[];try{r=e==="kimi"?await Ke(t):e==="stepfun"?await ze(t):e==="sparkdesk"?await de(t):e==="monkeycode"?await Ee(t):await Y(t,o)}catch{}if(r.length===0)try{const i=await(await fetch(`http://127.0.0.1:${t}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();r=(Array.isArray(i)?i:[]).filter(We).sort((l,m)=>{const p=[String(l.id??""),l.url,l.webSocketDebuggerUrl],u=[String(m.id??""),m.url,m.webSocketDebuggerUrl];for(let g=0;g<p.length;g++){if(p[g]<u[g])return-1;if(p[g]>u[g])return 1}return 0})}catch{}if(r.length===0)return{success:!1};for(const c of e==="hana-agent"||e==="kimi"||e==="agnes-code"||e==="stepfun"||e==="sparkdesk"?r:r.slice(0,1)){const i=new C(c.webSocketDebuggerUrl);if(await i.open(),e==="hana-agent"){const l=ce.get(c.id);l&&(await i.removeScriptToEvaluateOnNewDocument(l).catch(()=>{}),ce.delete(c.id))}if(e==="doubao"){const l=Oe.get(c.id);l&&(await i.removeScriptToEvaluateOnNewDocument(l).catch(()=>{}),Oe.delete(c.id))}if(e==="stepfun"){const l=xe.get(c.id);l&&(await i.removeScriptToEvaluateOnNewDocument(l).catch(()=>{}),xe.delete(c.id))}if(e==="sparkdesk"){const l=ve.get(c.id);l&&(await i.removeScriptToEvaluateOnNewDocument(l).catch(()=>{}),ve.delete(c.id))}if(e==="monkeycode"){const l=le.get(c.id);l&&(await i.removeScriptToEvaluateOnNewDocument(l).catch(()=>{}),le.delete(c.id))}await i.evaluate(`(async () => {
      ${e==="sparkdesk"?`await window.__dreamTheme?.restoreNative(${n});`:""}
      ${e==="hana-agent"?`try { localStorage.setItem('dream-work-theme:hana-agent:restored', '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';`:""}
      ${e==="doubao"?"document.documentElement.dataset.dreamThemeRestored = 'true';":""}
      ${e==="doubao"?"try { localStorage.setItem('dream-work-theme:doubao:restored', '1'); } catch {}":""}
      ${e==="kimi"?`try { localStorage.setItem('${W}', '1'); } catch {}
      try { localStorage.setItem('${Q}', '${n}'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';`:""}
      ${e==="kimi"?`const style = document.getElementById('${P}');
      if (style) style.textContent = '';`:`document.getElementById('${P}')?.remove();
      document.getElementById('${S}')?.remove();
      document.getElementById('${S}-host')?.remove();
      clearInterval(window.__dreamWorkMenuGuard);
      delete window.__dreamWorkMenuGuard;
      if (window.__dreamWorkOutsideClick) {
        document.removeEventListener('pointerdown', window.__dreamWorkOutsideClick, true);
        delete window.__dreamWorkOutsideClick;
      }`}
      ${e==="minimax-code"||e==="agnes-code"||e==="astronclaw"||e==="stepfun"||e==="sparkdesk"||e==="monkeycode"?"await window.__dreamWorkRestoreNativeMode?.();":""}
      delete document.documentElement.dataset.dreamTheme;
      delete document.documentElement.dataset.dreamShell;
      return true;
    })`),i.close()}if(e==="sparkdesk"){await new Promise(i=>setTimeout(i,750));const c=await de(t).catch(()=>[]);for(const i of c){const l=new C(i.webSocketDebuggerUrl);try{await l.open(),await l.evaluate(`(async () => {
          await window.__dreamWorkRestoreNativeMode?.();
          document.getElementById('${P}')?.remove();
          document.getElementById('${S}')?.remove();
          document.getElementById('${S}-host')?.remove();
          clearInterval(window.__dreamWorkMenuGuard);
          delete window.__dreamWorkMenuGuard;
          delete document.documentElement.dataset.dreamTheme;
          delete document.documentElement.dataset.dreamShell;
          return true;
        })()`)}finally{l.close()}}}return{success:!0}}function Wa(e){try{const t=d.join(e.path,"theme.css");return h.existsSync(t)?`
/* theme.css */
`+h.readFileSync(t,"utf-8"):""}catch(t){return console.warn(`[injector] Failed to read theme.css for ${e.id}:`,t),""}}function Ua(e,t){var o,r,s;return((o=O(e))==null?void 0:o.kind)!=="generic-work"?!1:((s=(r=t.manifest.apps)==null?void 0:r[e])==null?void 0:s.compat)!==!1}function Ha(e){const t=String(e??"").match(/^\s*(\d{8})/);return t?Number(t[1]):0}function et(e,t,a,n={}){var s,c,i,l;const o={accent:((s=t.colors)==null?void 0:s.accent)??"#24c9d7",secondary:((c=t.colors)==null?void 0:c.secondary)??"#ef8fd3",surface:((i=t.colors)==null?void 0:i.surface)??"#f7fbff",text:((l=t.colors)==null?void 0:l.text)??"#17344f"};if(e==="codex")return dn(t,a,o);const r=O(e);return(r==null?void 0:r.kind)==="vscode-work"?za(t,a,o):(r==null?void 0:r.kind)==="generic-work"?e==="hana-agent"?ft(t,a,o):e==="kimi"?rn(t,a,o):Ka(e,t,a,o,n):wt({...t,copy:null},a,o)}function za(e,t,a){return`/* DREAM_THEME:${e.id} */
:root {
  --vscode-editor-background: transparent !important;
  --vscode-foreground: ${a.text} !important;
  --vscode-sideBar-background: color-mix(in srgb, ${a.surface} 92%, transparent) !important;
  --vscode-panel-background: transparent !important;
  --vscode-input-background: color-mix(in srgb, ${a.surface} 94%, transparent) !important;
  --vscode-button-background: ${a.accent} !important;
  --vscode-button-foreground: #ffffff !important;
  --vscode-focusBorder: ${a.accent} !important;
}
body.solo-lite {
  background-color: ${a.surface} !important;
  color: ${a.text} !important;
}
body.solo-lite #root {
  background-color: ${a.surface} !important;
  background-image: url(${JSON.stringify(t)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  color: ${a.text} !important;
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
  color: ${a.text} !important;
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
  background-color: color-mix(in srgb, ${a.surface} 76%, transparent) !important;
  color: ${a.text} !important;
  backdrop-filter: blur(12px) saturate(105%);
}
.messageInputContainer {
  border-color: color-mix(in srgb, ${a.accent} 34%, transparent) !important;
  box-shadow: 0 16px 44px color-mix(in srgb, ${a.surface} 34%, transparent) !important;
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
  color: ${a.text} !important;
  -webkit-text-fill-color: ${a.text} !important;
}
html body.solo-lite #root :where(.initial-chat-panel, .solo-lite-chat-panel-content) .messageInputContainer
  :where(button, [role="button"]) svg {
  color: ${a.text} !important;
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
  color: ${a.text} !important;
  -webkit-text-fill-color: ${a.text} !important;
}
.messageInputContainer :where(button, [role="button"]) svg {
  color: ${a.text} !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}
.messageInputContainer :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${a.accent} 16%, transparent) !important;
}
.messageInputContainer .chat-input-v2-send-button:not(.disabled) {
  background-color: ${a.accent} !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}
.messageInputContainer .chat-input-v2-send-button.disabled {
  opacity: .5 !important;
}
.messageInputContainer .projectButtonPlaceholderWork-JV100D,
.messageInputContainer [class*="Placeholder"] {
  color: color-mix(in srgb, ${a.text} 66%, transparent) !important;
  -webkit-text-fill-color: color-mix(in srgb, ${a.text} 66%, transparent) !important;
}
html[data-dream-shell="dark"] body.solo-lite #root .messageInputContainer
  :where(.inputBarButton-ncFFma, .inputBarButton-ncFFma *, .core-model-select-trigger, .core-model-select-trigger *) {
  color: ${a.text} !important;
  -webkit-text-fill-color: ${a.text} !important;
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
  color: ${a.text} !important;
  -webkit-text-fill-color: ${a.text} !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-heading, .task-list-group-title, .menubar-menu-title) {
  opacity: .78 !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-base-content, .soloLiteMenubar, .task-list-base-footer, .messageInputContainer) svg {
  color: ${a.text} !important;
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
`}function Ka(e,t,a,n,o={}){const r={"qoder-work":'#root > div, [class*="layout"], [class*="content-area"], [class*="main-content"]',catpaw:".main-area, .main-content-container, .main-content, .chat-content-area",zcode:'main, main > div, [class*="min-h-0"][class*="flex-1"]',"qwen-office":".agents-content-area, .agents-parchment-paper-surface","agnes-code":":not(*)","minimax-code":":not(*)",astronclaw:'.local-chat-shell, .local-chat-main, [class*="local-chat-content"]',stepfun:"#root",sparkdesk:".app-container","deepseek-harness":'[class*="_centerCol"]',monkeycode:"main",autoclaw:".autoclaw-home, .autoclaw-shell"},s={"qoder-work":'[class*="sidebar"]',catpaw:".sidebar-wrapper, .sidebar",zcode:"#sidebar, aside","qwen-office":".agents-sidebar, .group\\/sidebar","agnes-code":":not(*)","minimax-code":":not(*)",astronclaw:'.local-chat-rail, [class*="local-chat-sidebar"]',sparkdesk:'.browser-header, [class*="left_side"], [class*="sidebar"]',monkeycode:"aside, #root > div > div > :first-child",autoclaw:'.autoclaw-shell aside, .autoclaw-shell nav, .autoclaw-shell [class*="sidebar"]'},c=r[e]??'main, [role="main"], [class*="main-content"]',i=s[e]??'aside, nav, [class*="sidebar"]',l=e==="qoder-work"?cn(n):e==="catpaw"?ln(a,n):e==="opencode"?nn(n):e==="doubao"?on(n):e==="agnes-code"?tn(a,n):e==="minimax-code"?an(a,n):e==="astronclaw"?en(a,n):e==="stepfun"?Ya(a,n):e==="sparkdesk"?Za(a,n):e==="deepseek-harness"?Va(a,n):e==="monkeycode"?Xa(a,n,!!o.monkeyCodeModern):e==="zcode"?Qa(a,n):e==="autoclaw"?Ga(a,n):"";return e==="sparkdesk"?`/* DREAM_THEME:${t.id} */
${l}`:`/* DREAM_THEME:${t.id} */
:root {
  --dream-work-accent: ${n.accent};
  --dream-work-secondary: ${n.secondary};
  --dream-work-surface: ${n.surface};
  --dream-work-text: ${n.text};
  --catpaw-bg-primary: ${n.surface} !important;
  --catpaw-text-primary: ${n.text} !important;
  --catpaw-text-secondary: color-mix(in srgb, ${n.text} 72%, transparent) !important;
  --agents-sidebar-material-bg: color-mix(in srgb, ${n.surface} 90%, transparent) !important;
  --text-base-primary: ${n.text} !important;
  --text-base-secondary: color-mix(in srgb, ${n.text} 72%, transparent) !important;
  --bg-base: color-mix(in srgb, ${n.surface} 86%, transparent) !important;
}
html, body, #root { background: ${n.surface} !important; color: ${n.text} !important; }
${e==="zcode"||e==="deepseek-harness"||e==="monkeycode"?"":`:is(${i}) {
  background: color-mix(in srgb, ${n.surface} 90%, transparent) !important;
  color: ${n.text} !important;
  backdrop-filter: blur(20px) saturate(108%);
}`}
${e==="zcode"?`:is(${c}) {
  color: ${n.text} !important;
}`:`:is(${c}) {
  background: linear-gradient(90deg, color-mix(in srgb, ${n.surface} 82%, transparent) 0 12%, transparent 42%), url(${JSON.stringify(a)}) center / cover no-repeat fixed !important;
  color: ${n.text} !important;
}`}
:is(${c}) :where([class*="message"], [class*="chat"], [class*="composer"], [class*="editor"], [contenteditable="true"], textarea) {
  color: ${n.text} !important;
}
${e==="doubao"||e==="astronclaw"||e==="stepfun"||e==="zcode"||e==="deepseek-harness"||e==="monkeycode"?"":`:is(${c}) :where([class*="message"], [class*="bubble"], [class*="composer"], [class*="input-container"]) {
  background-color: color-mix(in srgb, ${n.surface} 88%, transparent) !important;
  backdrop-filter: blur(16px) saturate(108%);
}`}
:is(${c}) :where(p, span, li, h1, h2, h3, h4, strong, em) { color: ${n.text} !important; }
button[class*="bg-primary"], button[class*="bg-accent"] { background-color: ${n.accent} !important; color: #fff !important; }
${l}`}function Ga(e,t){const a=kt(t.surface),n=a?`color-mix(in srgb, ${t.surface} 84%, transparent)`:`color-mix(in srgb, ${t.surface} 78%, transparent)`,o=a?`color-mix(in srgb, ${t.surface} 94%, transparent)`:`color-mix(in srgb, ${t.surface} 90%, #000000)`,r=`color-mix(in srgb, ${t.accent} ${a?"14%":"24%"}, ${t.surface})`,s=`color-mix(in srgb, ${t.accent} ${a?"24%":"38%"}, ${t.surface})`,c=`color-mix(in srgb, ${t.text} ${a?"68%":"76%"}, transparent)`;return`
html[data-dream-theme],
html[data-dream-theme] body {
  --autoclaw-bg-primary: ${t.surface} !important;
  --autoclaw-bg-secondary: ${n} !important;
  --autoclaw-bg-tertiary: ${o} !important;
  --autoclaw-text-primary: ${t.text} !important;
  --autoclaw-text-secondary: ${c} !important;
  --autoclaw-border: color-mix(in srgb, ${t.text} 18%, transparent) !important;
  --autoclaw-accent: ${t.accent} !important;
  color: ${t.text} !important;
}
html[data-dream-theme] body::before {
  content: none !important;
  display: none !important;
  background: none !important;
  opacity: 0 !important;
  filter: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
html,
body,
#root,
.autoclaw-home,
.autoclaw-shell,
.autoclaw-sidebar-left,
.figma-session-sidebar,
.autoclaw-chat-area,
.autoclaw-generic-stage,
.autoclaw-content-region,
.chat-messages {
  min-height: 100% !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root {
  position: relative !important;
  isolation: isolate;
}
#root::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-color: ${t.surface} !important;
  background-image: url(${JSON.stringify(e)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}
.autoclaw-home,
.autoclaw-shell {
  width: 100vw !important;
  min-height: 100vh !important;
}
#root .autoclaw-shell .autoclaw-sidebar-left,
#root .autoclaw-shell .figma-session-sidebar,
#root .autoclaw-shell .figma-sidebar-footer,
#root .autoclaw-shell .sidebar-footer-entries,
#root .autoclaw-shell .sidebar-footer-entry,
#root .autoclaw-shell .sidebar-footer-entry *,
#root .autoclaw-shell .autoclaw-left-sidebar-resizer,
#root .autoclaw-shell > :first-child {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root .autoclaw-shell .autoclaw-left-sidebar-resizer {
  width: 4px !important;
  border: 0 !important;
  box-shadow: none !important;
}
#root .autoclaw-shell .nested-agent-group,
#root .autoclaw-shell .nested-group-list,
#root .autoclaw-shell .nested-group-stack {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
}
#root .autoclaw-shell .nested-agent-group:hover {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
}
#root .autoclaw-shell .nested-agent-group:hover > :where(.nested-group-toggle, button:first-child) {
  background: ${r} !important;
  color: ${t.text} !important;
}
#root .autoclaw-shell :where(
  .figma-topbar,
  .figma-sidebar-tabs,
  .new-chat-home-header,
  .new-chat-home-header-actions,
  .autoclaw-content-header,
  [class*="topbar"],
  [class*="titlebar"]
) {
  background-color: transparent !important;
  background-image: none !important;
  color: ${t.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root .autoclaw-shell :where(
  .figma-top-collapse-btn,
  .figma-sidebar-tab,
  .nested-group-toggle,
  .nested-group-create,
  .nested-group-more,
  .nested-group-expand,
  .figma-session-main,
  .figma-session-more-btn,
  .sidebar-footer-entry,
  .figma-footer-settings-btn,
  .figma-footer-feedback-btn,
  .figma-user-chip,
  .new-chat-home-header-actions__button,
  .new-chat-home-header-actions__points-value,
  .new-chat-home-header-actions__purchase
) {
  color: ${t.text} !important;
  text-shadow: none !important;
}
#root .autoclaw-shell .figma-sidebar-tab :where(
  .figma-sidebar-tab-icon-frame,
  .figma-sidebar-tab-img
) {
  color: ${t.text} !important;
  opacity: 1 !important;
}
html[data-dream-theme] #root .autoclaw-home .figma-sidebar-tab .figma-sidebar-tab-icon-frame {
  width: 24px !important;
  height: 24px !important;
  border-radius: 7px !important;
  background: ${o} !important;
  box-shadow: inset 0 0 0 1px color-mix(in srgb, ${t.text} 28%, transparent) !important;
}
html[data-dream-theme] #root .autoclaw-home .figma-sidebar-tab .figma-sidebar-tab-img {
  width: 20px !important;
  height: 20px !important;
  filter: none !important;
  opacity: 1 !important;
  image-rendering: auto !important;
}
#root .autoclaw-shell .figma-sidebar-tab :where(svg, path) {
  color: ${t.text} !important;
  fill: currentColor !important;
  stroke: currentColor !important;
  opacity: 1 !important;
}
html[data-dream-theme] #root .autoclaw-home :where(
  .auto-designer-main-header,
  .auto-coder-main-header,
  .new-chat-home-header,
  .autoclaw-content-header,
  [class*="main-header"]
),
html[data-dream-theme] #root .autoclaw-home :where(
  .auto-designer-main-header,
  .auto-coder-main-header,
  .new-chat-home-header,
  .autoclaw-content-header,
  [class*="main-header"]
)::before,
html[data-dream-theme] #root .autoclaw-home :where(
  .auto-designer-main-header,
  .auto-coder-main-header,
  .new-chat-home-header,
  .autoclaw-content-header,
  [class*="main-header"]
)::after {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  filter: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root .autoclaw-shell :where(
  .figma-sidebar-tab,
  .nested-agent-group > .nested-group-toggle,
  .figma-session-main,
  .sidebar-footer-entry
):hover {
  background: ${r} !important;
  color: ${t.text} !important;
}
#root .autoclaw-shell :where(
  .figma-sidebar-tab.active,
  .nested-agent-group.is-active > .nested-group-toggle,
  .nested-agent-group.has-active-session > .nested-group-toggle,
  .figma-session-main.active,
  .figma-session-main.is-active,
  .figma-session-item.active,
  .figma-session-item.is-active,
  [aria-selected="true"]
) {
  background: ${s} !important;
  color: ${t.text} !important;
}
#root .autoclaw-shell :where(
  .figma-sidebar-tab,
  .nested-agent-group,
  .nested-agent-group *,
  .figma-session-main,
  .figma-session-main *,
  .figma-session-item,
  .figma-session-item *,
  .sidebar-footer-entry,
  .sidebar-footer-entry *
) {
  border-color: color-mix(in srgb, ${t.text} 16%, transparent) !important;
}
#root .autoclaw-shell :where(
  .figma-sidebar-tab:hover,
  .figma-sidebar-tab.active,
  .nested-agent-group > .nested-group-toggle:hover,
  .nested-agent-group.is-active > .nested-group-toggle,
  .nested-agent-group.has-active-session > .nested-group-toggle,
  .figma-session-main:hover,
  .figma-session-main.active,
  .figma-session-main.is-active,
  .figma-session-item:hover,
  .figma-session-item.active,
  .figma-session-item.is-active,
  [aria-selected="true"]
),
#root .autoclaw-shell :where(
  .figma-sidebar-tab:hover,
  .figma-sidebar-tab.active,
  .nested-agent-group > .nested-group-toggle:hover,
  .nested-agent-group.is-active > .nested-group-toggle,
  .nested-agent-group.has-active-session > .nested-group-toggle,
  .figma-session-main:hover,
  .figma-session-main.active,
  .figma-session-main.is-active,
  .figma-session-item:hover,
  .figma-session-item.active,
  .figma-session-item.is-active,
  [aria-selected="true"]
) * {
  color: ${t.text} !important;
  fill: currentColor !important;
}
.autoclaw-shell :where(
  .chat-area,
  .autoclaw-chat-area,
  .autoclaw-generic-stage,
  .autoclaw-content-region,
  .chat-messages,
  [class*="content"],
  [class*="workspace"],
  [class*="conversation"],
  [class*="chat-container"],
  [class*="message-list"]
) {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root .autoclaw-shell :where(
  .autoclaw-generic-stage,
  .autoclaw-content-region,
  .chat-messages
) {
  height: calc(100vh - 56px) !important;
  min-height: 0 !important;
  max-height: calc(100vh - 56px) !important;
  box-sizing: border-box !important;
}
#root .autoclaw-shell .new-chat-empty-state {
  min-height: 0 !important;
  height: 100% !important;
  max-height: 100% !important;
  box-sizing: border-box !important;
  padding-bottom: max(20px, env(safe-area-inset-bottom)) !important;
}
#root .autoclaw-shell .chat-messages {
  scroll-padding-bottom: 24px !important;
}
#root .autoclaw-shell .chat-messages > :where(.chat-empty-state, .agent-empty-state) {
  min-height: 100% !important;
  height: auto !important;
  max-height: none !important;
  box-sizing: border-box !important;
  padding-bottom: 16px !important;
}
#root .autoclaw-shell .chat-messages .input-container {
  position: sticky !important;
  z-index: 8 !important;
  bottom: 16px !important;
  flex: 0 0 auto !important;
  width: 100% !important;
  margin-top: auto !important;
  padding-bottom: 0 !important;
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  border: 0 !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root .autoclaw-shell :where(
  .input-container,
  .input-composer-stack,
  .new-chat-home-input,
  .input-skill-strip,
  .input-main,
  .input-tools,
  .input-tools-scroll
) {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.autoclaw-shell :where(
  .new-chat-empty-state__mode,
  .new-chat-empty-state__mode *,
  .new-chat-empty-state__title,
  .new-chat-empty-state__subtitle,
  .new-chat-home-header,
  .new-chat-home-header *
) {
  color: ${t.text} !important;
  text-shadow: none !important;
}
.autoclaw-shell .new-chat-empty-state__mode {
  background: ${n} !important;
  border-color: color-mix(in srgb, ${t.text} 18%, transparent) !important;
}
.autoclaw-shell .new-chat-empty-state__mode:hover {
  background: ${r} !important;
}
.autoclaw-shell .new-chat-empty-state__mode.is-active {
  background: ${s} !important;
  color: ${t.text} !important;
}
.autoclaw-shell :where(
  .input-composer-stack,
  .new-chat-home-input
) {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.autoclaw-shell .input-box {
  background: ${o} !important;
  border: 1px solid color-mix(in srgb, ${t.accent} 30%, transparent) !important;
  box-shadow: 0 14px 36px color-mix(in srgb, ${t.surface} 34%, transparent) !important;
  color: ${t.text} !important;
}
.autoclaw-shell :where(
  .input-main,
  .input-textarea-row,
  .input-textarea,
  .input-toolbar,
  .input-footer
) {
  background: transparent !important;
  color: ${t.text} !important;
}
.autoclaw-shell .input-textarea::placeholder {
  color: ${c} !important;
  opacity: 1 !important;
}
.autoclaw-shell :where(
  .tool-btn,
  .input-model-btn,
  .input-expert-btn,
  .goal-template-btn,
  .input-agent-cluster-btn
) {
  background: transparent !important;
  color: ${c} !important;
}
.autoclaw-shell :where(
  .tool-btn,
  .input-model-btn,
  .input-expert-btn,
  .goal-template-btn,
  .input-agent-cluster-btn
):hover {
  background: ${r} !important;
  color: ${t.text} !important;
}
.autoclaw-shell .send-btn {
  background: ${t.accent} !important;
  color: ${a?t.surface:"#ffffff"} !important;
  border-color: transparent !important;
}
.autoclaw-shell .send-btn:disabled {
  background: color-mix(in srgb, ${t.accent} 32%, ${t.surface}) !important;
  color: ${t.text} !important;
  border-color: color-mix(in srgb, ${t.accent} 36%, transparent) !important;
  opacity: 1 !important;
}
.autoclaw-shell :where(
  .new-chat-empty-state__quick-actions,
  .new-chat-empty-state__suggestions,
  .new-chat-empty-state__cards,
  .new-chat-empty-state__actions,
  .new-chat-empty-state__main > :last-child,
  .new-chat-home-shortcuts,
  [class*="quick-action"],
  [class*="shortcut"],
  [class*="suggestion"]
) {
  background: transparent !important;
  color: ${t.text} !important;
}
.autoclaw-shell :where(
  .new-chat-empty-state__quick-actions,
  .new-chat-empty-state__suggestions,
  .new-chat-empty-state__cards,
  .new-chat-empty-state__actions,
  .new-chat-empty-state__main > :last-child,
  .new-chat-home-shortcuts,
  [class*="quick-action"],
  [class*="shortcut"],
  [class*="suggestion"]
) :where(button, [role="button"], a) {
  background: ${o} !important;
  color: ${t.text} !important;
  border-color: color-mix(in srgb, ${t.text} 18%, transparent) !important;
}
.autoclaw-shell :where(
  .new-chat-empty-state__quick-actions,
  .new-chat-empty-state__suggestions,
  .new-chat-empty-state__cards,
  .new-chat-empty-state__actions,
  .new-chat-empty-state__main > :last-child,
  .new-chat-home-shortcuts,
  [class*="quick-action"],
  [class*="shortcut"],
  [class*="suggestion"]
) :where(button, [role="button"], a):hover {
  background: ${r} !important;
  color: ${t.text} !important;
}
.autoclaw-shell :where(
  .chat-area,
  .autoclaw-chat-area,
  .chat-messages
)::before,
.autoclaw-shell :where(
  .chat-area,
  .autoclaw-chat-area,
  .chat-messages
)::after {
  background-color: transparent !important;
  background-image: none !important;
  border: 0 !important;
  box-shadow: none !important;
  filter: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root .autoclaw-home .autoclaw-sidebar-left.collapsed + .autoclaw-chat-area,
#root .autoclaw-home .autoclaw-sidebar-left.collapsed + .autoclaw-chat-area::before,
#root .autoclaw-home .autoclaw-sidebar-left.collapsed + .autoclaw-chat-area::after,
#root .autoclaw-home .autoclaw-sidebar-left.collapsed + .autoclaw-chat-area .autoclaw-generic-stage,
#root .autoclaw-home .autoclaw-sidebar-left.collapsed + .autoclaw-chat-area .autoclaw-content-region {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  border: 0 !important;
  box-shadow: none !important;
  filter: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.autoclaw-shell :where(
  [class*="message-item"],
  [class*="message-bubble"],
  [class*="message-content"]
) {
  background-color: color-mix(in srgb, ${t.surface} 68%, transparent) !important;
  backdrop-filter: blur(12px) saturate(108%);
}
.autoclaw-shell :where(
  aside,
  nav,
  [class*="sidebar"],
  [class*="sider"]
) {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.autoclaw-shell :where(
  textarea,
  [contenteditable="true"]
) {
  background-color: color-mix(in srgb, ${t.surface} 78%, transparent) !important;
  color: ${t.text} !important;
}
`}async function Ee(e){const t=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(2e3)});if(!t.ok)throw new Error(`HTTP ${t.status}`);const a=await t.json();return(Array.isArray(a)?a:[]).filter(n=>(n==null?void 0:n.type)==="page"&&n.webSocketDebuggerUrl&&String(n.url)==="http://tauri.localhost/")}async function Ja(e){for(const t of e){const a=new C(t.webSocketDebuggerUrl);try{await a.open(),await a.evaluate(`(() => {
        try { localStorage.removeItem('dream-work-theme:monkeycode:restored'); } catch {}
        delete document.documentElement.dataset.dreamThemeRestored;
        return true;
      })()`)}finally{a.close()}}}function qa(e,t){const a=se.get(e);a&&clearInterval(a);const n=(ie.get(e)??0)+1;ie.set(e,n);let o=!1;const r=setInterval(async()=>{if(!(o||ie.get(e)!==n)){o=!0;try{const s=await Ee(e);for(const c of s){const i=new C(c.webSocketDebuggerUrl);try{await i.open();const l=await i.evaluate(`(() => ({
            ready: Boolean(window.__dreamTheme?.activateTheme && document.getElementById('${P}')),
            restored: (() => { try { return localStorage.getItem('dream-work-theme:monkeycode:restored') === '1'; } catch { return false; } })()
          }))()`).catch(()=>({ready:!1,restored:!1}));if(l.ready||l.restored)continue;let m=!1;for(let f=0;f<20&&(m=await i.evaluate("(() => location.href === 'http://tauri.localhost/' && document.readyState !== 'loading')()").catch(()=>!1),!m);f++)await new Promise(A=>setTimeout(A,100));if(!m)continue;const p=le.get(c.id);p&&await i.removeScriptToEvaluateOnNewDocument(p).catch(()=>{});const u=`(() => {
            const inject = () => ${t};
            if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
            else inject();
          })()`,g=await i.addScriptToEvaluateOnNewDocument(u);g&&le.set(c.id,g),await i.evaluate(t)}catch{}finally{i.close()}}}catch{await me(e)||(clearInterval(r),se.delete(e))}finally{o=!1}}},750);r.unref(),se.set(e,r)}function Va(e,t){return`
html {
  background-color: ${t.surface} !important;
  background-image: none !important;
}
html::before {
  content: "";
  position: fixed;
  z-index: 0;
  pointer-events: none;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${t.surface};
  background-image: url(${JSON.stringify(e)});
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
body,
#root,
#root > [data-slot="root"] > div,
[class*="_centerCol"],
[class*="_centerCol"] > [data-slot] > div,
[data-slot="main"] > div {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
}
[class*="_sidebarCol"],
[class*="_sidebarCol"] > [data-slot="sidebar"] > div,
[class*="_sidebarCol"] [class*="_fade"],
[class*="_composerSeat"],
[class*="_composerStack"] {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
body,
#root {
  position: relative;
  z-index: 1;
}
[class*="_centerCol"] :where(
  [class*="_composer"],
  [class*="_input"],
  [class*="_message"],
  [class*="_card"]
) {
  border-color: color-mix(in srgb, ${t.accent} 24%, transparent) !important;
}
`}function Xa(e,t,a){return`
:root {
  --color-base-100: color-mix(in srgb, ${t.surface} 78%, transparent) !important;
  --color-base-200: color-mix(in srgb, ${t.surface} 86%, transparent) !important;
  --color-base-300: color-mix(in srgb, ${t.surface} 92%, transparent) !important;
  --color-base-content: ${t.text} !important;
  --color-primary: ${t.accent} !important;
  --color-primary-content: #ffffff !important;
  --color-secondary: ${t.secondary} !important;
  --color-secondary-content: ${t.text} !important;
  --color-accent: ${t.accent} !important;
  --color-neutral-content: ${t.text} !important;
}
html {
  background: ${t.surface} !important;
}
html::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: ${t.surface} url(${JSON.stringify(e)}) center / cover no-repeat;
}
body,
#root,
#root > div,
#root > div > header[data-window-titlebar],
#root > div > .flex.min-h-0.flex-1,
#root > div > .flex.min-h-0.flex-1 > aside,
#root > div > .flex.min-h-0.flex-1 > main,
#root > div > .flex.min-h-0.flex-1 > main > :where(div, section) {
  background-color: transparent !important;
  background-image: none !important;
}
body,
#root {
  position: relative;
  z-index: 1;
  color: ${t.text} !important;
}
#root :where(.bg-base-100, .bg-base-200, .bg-base-300):not(
  [role="dialog"],
  [class*="modal"],
  [class*="popover"],
  [class*="dropdown"],
  textarea,
  input
) {
  background-color: color-mix(in srgb, ${t.surface} 72%, transparent) !important;
}
#root nav.w-rail,
#root main [class~="dropdown"][class~="h-full"] {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root :where([role="dialog"], [class*="modal"], [class*="popover"], [class*="dropdown"], textarea, input, [contenteditable="true"]) {
  background-color: color-mix(in srgb, ${t.surface} 90%, transparent) !important;
  color: ${t.text} !important;
  border-color: color-mix(in srgb, ${t.accent} 28%, transparent) !important;
}
#root main [class~="dropdown"][class~="h-full"] :where(.dropdown-content, [role="menu"]) {
  background-color: color-mix(in srgb, ${t.surface} 94%, transparent) !important;
}
${a?`html[data-dream-monkeycode-modern="true"] #root :where(
  .mc-workbench-surface-100,
  .mc-workbench-surface-200,
  .mc-workbench-surface-300
) ,
html[data-dream-monkeycode-modern="true"] #root .mc-workbench-surface-100 > :where(
  .flex-1.bg-base-100,
  [class*="overflow-y-auto"].bg-base-100
) {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}`:""}
#root :where(.text-base-content, p, span, li, h1, h2, h3, h4, strong, em, label) {
  color: ${t.text} !important;
}
#root :where(button, [role="button"]) {
  border-color: color-mix(in srgb, ${t.accent} 22%, transparent) !important;
}
`}function Qa(e,t){return`
html,
body,
#root,
.bg-background-win-alt,
section.bg-background {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
}
html {
  background-color: ${t.surface} !important;
}
html::before {
  content: "";
  position: fixed;
  z-index: 0;
  pointer-events: none;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${t.surface};
  background-image: url(${JSON.stringify(e)});
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
body,
#root {
  position: relative;
  z-index: 1;
}
`}function Za(e,t){const a=parseInt(String(t.surface).replace("#",""),16),n=Number.isFinite(a)?.299*(a>>16&255)+.587*(a>>8&255)+.114*(a&255)>140:!0;return`
html,
body,
#root,
.app-container {
  min-height: 100% !important;
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  color: ${t.text} !important;
}
html {
  background-color: ${t.surface} !important;
  background-image: none !important;
}
html::before {
  content: "";
  position: fixed;
  z-index: 0;
  pointer-events: none;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${t.surface};
  background-image: url(${JSON.stringify(e)});
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
html[data-dream-sparkdesk-surface="content"]::before {
  top: -80px;
  bottom: auto;
  height: calc(100vh + 80px);
}
body,
#root,
.app-container {
  position: relative;
  z-index: 1;
}
.browser-container,
.browser-header,
.tabs-container,
.tabs-list,
.tabs-wrap,
.drag-area,
.control-area,
.address-bar,
.wrapper-container {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  color: ${t.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.browser-container {
  box-shadow: none !important;
}
.tab,
.tab > div,
.new-tab-btn,
.new-tab-btn-wrap,
.navigation-bar,
.address-bar :where(button, [role="button"], input) {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.tab.active,
.tab.active > div {
  background-color: color-mix(in srgb, ${t.surface} 18%, transparent) !important;
  background-image: none !important;
}
.browser-container > :not(.browser-header):not(.address-bar),
[class*="right_side"],
[class*="chat_window_wrapper"],
[class*="chat_window"],
[class*="chat_content_wrapper"],
#chat-window,
#chat-content-wrapper,
#out-wrap {
  background-color: transparent !important;
  background-image: none !important;
}
#root > .app-container > div > div[class*="container_"]:first-child {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  filter: none !important;
}
[class^="_feature_card_"],
[class*=" _feature_card_"],
[class*="_function_item_"] {
  background: color-mix(in srgb, ${t.surface} 58%, transparent) !important;
  background-image: none !important;
  border-color: color-mix(in srgb, ${t.accent} 20%, transparent) !important;
  box-shadow: 0 8px 24px color-mix(in srgb, ${t.surface} 20%, transparent) !important;
}
[class^="_feature_card_"] *,
[class*=" _feature_card_"] *,
[class*="_function_item_"] *,
[class*="welcome"] *,
[class*="new_chat"] *,
[class*="recommend"] * {
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
}
[class*="left_side"],
[class*="personal_page"],
[class*="tabArea"],
[class*="header_"],
[class*="footer_wrap"] {
  background-color: color-mix(in srgb, ${t.surface} 18%, transparent) !important;
  color: ${t.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
[class*="ask_win"],
[class*="ask_wrapper"],
[class*="ask_textarea_wrapper"],
[class*="welcome_wrapper"],
[class*="example_item"],
.ant-input,
.ant-picker,
.ant-select-selector,
textarea,
[contenteditable="true"] {
  background-color: color-mix(in srgb, ${t.surface} 86%, transparent) !important;
  border-color: color-mix(in srgb, ${t.accent} 28%, transparent) !important;
  color: ${t.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
[class*="ask_window"] {
  --sparkdesk-composer-surface: color-mix(in srgb, ${t.surface} 86%, transparent);
  background-color: var(--sparkdesk-composer-surface) !important;
}
[class*="activeTab"],
.ant-btn-primary {
  background-color: ${t.accent} !important;
  color: #ffffff !important;
}
.app-container :where(p, span, li, h1, h2, h3, h4, label, strong, em, input, textarea) {
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
}
.app-container :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${t.accent} 16%, transparent) !important;
}
.markdown-body,
.markdown-body :where(p, span, li, div, strong, em, code),
[class*="content_gpt"],
[class*="content_gpt"] :where(p, span, li, div, strong, em, code),
.result-inner,
.result-inner :where(p, span, li, div, strong, em, code) {
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
}
[class*="content_user"] {
  background-color: color-mix(in srgb, ${t.accent} 24%, ${t.surface}) !important;
  color: ${t.text} !important;
}
[class*="content_user"] :where(p, span, div) {
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
}
[class*="right_operate_wrap"] > :where(
  [class*="open_upload_btn"],
  [class*="screen_shot_icon"],
  [class*="voice_input"],
  [class*="send"]
) {
  background-color: var(--sparkdesk-composer-surface) !important;
  background-image: none !important;
  color: ${t.text} !important;
  border-color: color-mix(in srgb, ${t.accent} 24%, transparent) !important;
  box-shadow: none !important;
}
[class*="ask_operate_wrap"],
[class*="ask_operate_wrap_v2"],
[class*="right_operate_wrap"] {
  background-color: var(--sparkdesk-composer-surface) !important;
  background-image: none !important;
  color: ${t.text} !important;
}
[class*="chat_func_wrap"] :where(
  [class*="deep_think_switch"],
  [class*="model"],
  [class*="switch"],
  button,
  [role="button"]
) {
  background-color: var(--sparkdesk-composer-surface) !important;
  background-image: none !important;
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
  border-color: color-mix(in srgb, ${t.accent} 24%, transparent) !important;
}
[class*="chat_func_wrap"] > * {
  background-color: var(--sparkdesk-composer-surface) !important;
  background-image: none !important;
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
  border-color: color-mix(in srgb, ${t.accent} 24%, transparent) !important;
}
[class*="chat_func_wrap"] > * svg,
[class*="chat_func_wrap"] > * svg * {
  color: ${t.text} !important;
  stroke: ${t.text} !important;
}
[class*="chat_func_wrap"] :where(
  [class*="deep_think_switch"],
  [class*="model"],
  [class*="switch"]
) svg,
[class*="chat_func_wrap"] :where(
  [class*="deep_think_switch"],
  [class*="model"],
  [class*="switch"]
) svg * {
  color: ${t.text} !important;
  stroke: ${t.text} !important;
}
[class*="right_operate_wrap"] > :where(
  [class*="open_upload_btn"],
  [class*="screen_shot_icon"],
  [class*="voice_input"],
  [class*="send"]
) :where(span, div, svg) {
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
}
[class*="right_operate_wrap"] > :where(
  [class*="open_upload_btn"],
  [class*="screen_shot_icon"],
  [class*="voice_input"],
  [class*="send"]
) svg,
[class*="right_operate_wrap"] > :where(
  [class*="open_upload_btn"],
  [class*="screen_shot_icon"],
  [class*="voice_input"],
  [class*="send"]
) svg * {
  color: ${t.text} !important;
  stroke: ${t.text} !important;
}
[class*="right_operate_wrap"] > [class*="send"] img {
  filter: ${n?"brightness(0)":"none"} !important;
}
[class*="mainContainer"],
[class*="mainContainer"] [class*="main_"],
[class*="menu_view"],
[class*="settings_content"],
[class*="settings_panel"] {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  color: ${t.text} !important;
}
[class*="mainContainer"] :where(div, span, p, label, h1, h2, h3, button) {
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
}
[class*="mainContainer"] :where(
  [class*="user_profile"],
  [class*="user_profile_info"],
  [class*="edit_profile_button"],
  [class*="settings_menu"],
  [class*="menu_item"],
  [class*="menu_item_content"],
  [class*="menu_item_right"]
) {
  background-color: color-mix(in srgb, ${t.surface} 76%, transparent) !important;
  background-image: none !important;
  color: ${t.text} !important;
  border-color: color-mix(in srgb, ${t.accent} 20%, transparent) !important;
  box-shadow: none !important;
}
[class*="mainContainer"] [class*="user_profile_"],
[class*="mainContainer"] [class*="user_profile_info_"],
[class*="mainContainer"] [class*="edit_profile_button_"],
[class*="mainContainer"] [class*="settings_menu_"],
[class*="mainContainer"] [class*="menu_item_"],
[class*="mainContainer"] [class*="menu_item_content_"],
[class*="mainContainer"] [class*="menu_item_right_"] {
  background-color: color-mix(in srgb, ${t.surface} 76%, transparent) !important;
  background-image: none !important;
  color: ${t.text} !important;
  -webkit-text-fill-color: ${t.text} !important;
  border-color: color-mix(in srgb, ${t.accent} 20%, transparent) !important;
  box-shadow: none !important;
}
[class*="mainContainer"] [class*="edit_profile_button_"] {
  background-color: color-mix(in srgb, ${t.surface} 88%, transparent) !important;
}
[class*="mainContainer"] :where([class*="menu_item"], [class*="edit_profile_button"]):hover {
  background-color: color-mix(in srgb, ${t.accent} 18%, ${t.surface}) !important;
}
[class*="mainContainer"] :where([class*="menu_icon"] img, [class*="menu_item_right"] img) {
  filter: ${n?"none":"brightness(0) invert(1)"} !important;
}
`}function Ya(e,t){return`
:root {
  --bg-gold: transparent !important;
  --background: transparent !important;
  --foreground: ${t.text} !important;
  --card: color-mix(in srgb, ${t.surface} 78%, transparent) !important;
  --card-foreground: ${t.text} !important;
  --popover: color-mix(in srgb, ${t.surface} 92%, transparent) !important;
  --popover-foreground: ${t.text} !important;
  --primary: ${t.accent} !important;
  --primary-foreground: #ffffff !important;
  --muted: color-mix(in srgb, ${t.surface} 72%, transparent) !important;
  --muted-foreground: color-mix(in srgb, ${t.text} 68%, transparent) !important;
  --border: color-mix(in srgb, ${t.accent} 24%, transparent) !important;
}
html,
body,
#root {
  min-height: 100% !important;
  background: transparent !important;
  color: ${t.text} !important;
}
html {
  background-color: ${t.surface} !important;
  background-image: url(${JSON.stringify(e)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}
html[data-dream-stepfun-surface="content"] {
  background-image: none !important;
}
html[data-dream-stepfun-surface="content"] body,
html[data-dream-stepfun-surface="content"] #root,
html[data-dream-stepfun-surface="content"] #root.bg-bg-gold,
html[data-dream-stepfun-surface="content"] #root.bg-gold,
html[data-dream-stepfun-surface="content"] #app {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
}
html::before {
  content: "";
  position: fixed;
  z-index: 0;
  pointer-events: none;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${t.surface};
  background-image: url(${JSON.stringify(e)});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
html[data-dream-stepfun-surface="content"]::before {
  top: -90px;
  height: calc(100vh + 90px);
}
body,
#root,
#app {
  position: relative;
  z-index: 1;
}
#root > div:not([class*="fixed"]),
#root [class*="flex-1"],
#root [class*="flex-grow"],
#root [class*="h-full"]:not([class*="fixed"]),
#root [class*="min-h-full"] {
  background-color: transparent !important;
  background-image: none !important;
}
#root.h-full.w-full > div.fixed.w-72.bg-gold,
#root.h-full.w-full > div.fixed.w-72.bg-bg-gold,
#root div.fixed.w-72.bg-gold,
#root div.fixed.w-72.bg-bg-gold {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  color: ${t.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root header,
#root > div.fixed[class*="z-[60]"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root :where([class*="message"], [class*="conversation"], [class*="chat-list"], [class*="scroll-area"]) {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.tab-bar,
.tab-bar .tab > div,
.navigation-bar,
.content-area {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
[class*="subscription-modal_root"],
[class*="subscription-modal_footer"] {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root :where(textarea, input, [contenteditable="true"]) {
  color: ${t.text} !important;
  caret-color: ${t.accent} !important;
}
`}function en(e,t){return`
:root {
  --background: ${t.surface} !important;
  --foreground: ${t.text} !important;
  --card: color-mix(in srgb, ${t.surface} 82%, transparent) !important;
  --card-foreground: ${t.text} !important;
  --popover: color-mix(in srgb, ${t.surface} 92%, transparent) !important;
  --popover-foreground: ${t.text} !important;
  --primary: ${t.accent} !important;
  --primary-foreground: #ffffff !important;
  --secondary: color-mix(in srgb, ${t.secondary} 22%, ${t.surface}) !important;
  --secondary-foreground: ${t.text} !important;
  --muted: color-mix(in srgb, ${t.surface} 76%, transparent) !important;
  --muted-foreground: color-mix(in srgb, ${t.text} 68%, transparent) !important;
  --accent: color-mix(in srgb, ${t.accent} 24%, ${t.surface}) !important;
  --accent-foreground: ${t.text} !important;
  --border: color-mix(in srgb, ${t.accent} 24%, transparent) !important;
  --input: color-mix(in srgb, ${t.surface} 72%, transparent) !important;
  --ring: ${t.accent} !important;
}
html,
body,
#root {
  min-height: 100% !important;
  background-color: ${t.surface} !important;
  background-image: url(${JSON.stringify(e)}) !important;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  color: ${t.text} !important;
}
#root > div,
.workspace-frame,
.workspace-frame > div,
.local-chat-shell,
.local-chat-main,
.local-chat-content-col,
[class*="local-chat-content"],
[class*="skills"],
[class*="inspiration"],
[class*="marketplace"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-rail,
.local-chat-sidebar-header-section,
.local-chat-account-panel {
  background-color: color-mix(in srgb, ${t.surface} 12%, transparent) !important;
  background-image: none !important;
  color: ${t.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-message-list,
.local-chat-message-list-content,
.local-chat-message,
.local-chat-message-body,
.local-chat-empty-state,
.local-chat-welcome,
.local-chat-new-task,
.local-chat-home {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-content-col > section.bg-card,
.local-chat-content-col > section[class~="bg-card"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-shell :where(textarea, input, [contenteditable="true"], [class*="composer"], [class*="message-input"]) {
  color: ${t.text} !important;
  caret-color: ${t.accent} !important;
}
.local-chat-composer-stack {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-composer-card,
.local-chat-shell :where([class*="message-input"]):not(textarea):not(input):not([contenteditable="true"]) {
  background-color: color-mix(in srgb, ${t.surface} 48%, transparent) !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-shell :where([class*="message"], [class*="dialog"], [class*="popover"], [class*="panel"]) {
  border-color: color-mix(in srgb, ${t.accent} 22%, transparent) !important;
}
`}function tn(e,t){return`
:root {
  --agnes-surface: transparent !important;
  --agnes-sidebar: transparent !important;
  --agnes-sidebar-panel: transparent !important;
  --agnes-current-sidebar-bg: transparent !important;
  --color-background-secondary: transparent !important;
  --color-background-primary: transparent !important;
  --background-primary: transparent !important;
  --agnes-card-bg: color-mix(in srgb, ${t.surface} 18%, transparent) !important;
  --agnes-text: ${t.text} !important;
  --agnes-composer-hub-shell: color-mix(in srgb, ${t.surface} 78%, transparent) !important;
  --agnes-composer-input-bg: color-mix(in srgb, ${t.surface} 68%, transparent) !important;
  --agnes-composer-border: color-mix(in srgb, ${t.accent} 36%, transparent) !important;
  --agnes-brand: ${t.accent} !important;
}
html,
body,
#root,
#__next {
  background-color: ${t.surface} !important;
  background-image: url(${JSON.stringify(e)}) !important;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}
#root > div[class*="h-screen"][class*="w-screen"],
.agnes-shell,
.agnes-shell > div[class*="flex-1"],
.agnes-shell div[class*="bg-[var(--agnes-surface)]"] {
  background-color: transparent !important;
  background-image: none !important;
}
.agnes-shell > div[class*="flex-1"][class*="flex-row"] {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.windows-title-bar {
  background: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.agnes-shell > div[class*="flex-row"] > div[class*="absolute"][class*="left-0"][class*="bg-[var(--agnes-current-sidebar-bg)]"] {
  background: transparent !important;
  color: ${t.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.agnes-shell div[class*="bg-[var(--agnes-sidebar-panel)]"],
.agnes-shell div[class*="bg-[var(--agnes-surface)]"],
.agnes-shell .bg-background-primary {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  filter: none !important;
}
.agnes-settings-route-overlay,
.agnes-settings-route-overlay > div,
.agnes-settings-route-overlay div[class*="bg-[var(--agnes-sidebar-panel)]"],
.agnes-settings-route-overlay div[class*="bg-[var(--agnes-surface)]"] {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  filter: none !important;
}
.agnes-settings-route-overlay div[class*="shadow-elevated"] {
  box-shadow: none !important;
}
.agnes-shell div[class*="bg-[var(--agnes-surface)]"][class*="shadow-elevated"] {
  box-shadow: none !important;
}
.agnes-shell div[class*="bg-[var(--agnes-card-bg)]"] {
  background: color-mix(in srgb, ${t.surface} 18%, transparent) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.agnes-shell div[class*="rounded-input-modal"] {
  background: color-mix(in srgb, ${t.surface} 72%, transparent) !important;
  border-color: color-mix(in srgb, ${t.accent} 34%, transparent) !important;
  backdrop-filter: blur(18px) saturate(112%) !important;
  -webkit-backdrop-filter: blur(18px) saturate(112%) !important;
}
.agnes-shell :where(input, textarea, [contenteditable="true"]) {
  color: ${t.text} !important;
  caret-color: ${t.accent} !important;
}
.agnes-shell :where(p, span, li, h1, h2, h3, h4, strong, em, label) {
  color: inherit;
}
`}function an(e,t){return`
:root {
  --color-bg-grouped-secondary: transparent !important;
  --color-bg-primary: transparent !important;
  --color-bg-secondary: transparent !important;
  --color-bg-tertiary: color-mix(in srgb, ${t.surface} 72%, transparent) !important;
}
html,
body,
#root {
  min-height: 100% !important;
  background-color: ${t.surface} !important;
  background-image: url(${JSON.stringify(e)}) !important;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}
body div.relative.flex.h-screen.overflow-hidden,
body div[class~="h-screen"][class~="bg-bg_grouped_secondary"],
#root > div.relative.flex.h-screen.overflow-hidden,
#root > div[class~="h-screen"][class~="bg-bg_grouped_secondary"],
#__next > div.relative.flex.h-screen.overflow-hidden,
#__next > div[class~="h-screen"][class~="bg-bg_grouped_secondary"] {
  background-color: transparent !important;
  background-image: none !important;
}
body :where(
  main,
  [role="main"],
  [class~="bg-bg_grouped_secondary"],
  [class~="bg-bg_primary"],
  [class~="bg-bg_secondary"]
) {
  background-color: transparent !important;
}
body div[class~="bg-bg_default_scrim"][class~="z-50"][class~="select-none"],
body div[class~="bg-bg_default_scrim"]:has(.message-input-container) {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
body div.flex.h-full.w-full.overflow-hidden[class~="bg-bg_default_primary"],
body div.absolute.inset-x-0.bottom-0.w-full[class~="bg-bg_grouped_secondary"],
body div.absolute.inset-0.z-10.flex.flex-col[class~="bg-bg_grouped_secondary"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
body div[class~="bg-bg_grouped_secondary_elevated"]:has(.message-input-container),
body div.w-full.border[class~="rounded-[20px]"][class~="bg-bg_grouped_secondary_elevated"],
body .message-input-container div[class~="bg-bg_grouped_secondary_elevated"] {
  background-color: color-mix(in srgb, ${t.surface} 62%, transparent) !important;
  background-image: none !important;
  border-color: color-mix(in srgb, ${t.accent} 30%, transparent) !important;
  backdrop-filter: blur(16px) saturate(108%) !important;
  -webkit-backdrop-filter: blur(16px) saturate(108%) !important;
}
body .message-input-home-container {
  width: 100% !important;
}
body div[class~="max-w-[743px]"]:has(.message-input-home-container) {
  max-width: 800px !important;
}
body div[class~="bg-bg_default_scrim"]:has(.message-input-home-container) {
  width: 100% !important;
  max-width: 768px !important;
  padding-bottom: 0 !important;
  gap: 0 !important;
  border-radius: 20px !important;
}
body div[class~="bg-bg_default_scrim"]:has(.message-input-home-container)
  > div[class~="bg-bg_grouped_secondary_elevated"] {
  width: 100% !important;
  border-radius: 20px !important;
  box-shadow: 0 0 20px rgba(10, 10, 10, 0.08) !important;
}
#root :where(
  textarea,
  input,
  [contenteditable="true"],
  [class*="composer"],
  [class*="rounded"]
) {
  caret-color: ${t.accent} !important;
}
#root :where(textarea, input, [contenteditable="true"]) {
  color: ${t.text} !important;
}
`}function nn(e){return`
:root {
  --v2-background-bg-deep: transparent !important;
  --v2-background-bg-base: transparent !important;
  --v2-background-bg-raised: color-mix(in srgb, ${e.surface} 42%, transparent) !important;
  --v2-text-text-base: ${e.text} !important;
  --v2-text-text-strong: ${e.text} !important;
}
main > div[class*="bg-v2-background-bg-deep"],
main div[class*="bg-v2-background-bg-deep"][class*="flex-1"][class*="overflow-hidden"] {
  background-color: transparent !important;
  background-image: none !important;
}
main div[class*="flex-1"][class*="flex-col"][class*="bg-v2-background-bg-base"][class*="rounded-"][class*="overflow-hidden"],
main div[class*="shrink-0"][class*="bg-v2-background-bg-base"][class*="pointer-events-none"] {
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
}
main form[class*="group/prompt-input"] {
  background: color-mix(in srgb, ${e.surface} 68%, transparent) !important;
  border: 1px solid color-mix(in srgb, ${e.accent} 28%, transparent) !important;
  box-shadow: 0 18px 52px color-mix(in srgb, #000000 28%, transparent) !important;
  backdrop-filter: blur(18px) saturate(112%) !important;
  -webkit-backdrop-filter: blur(18px) saturate(112%) !important;
}
main form[class*="group/prompt-input"] :where([contenteditable="true"], textarea, input) {
  background: transparent !important;
  color: ${e.text} !important;
  caret-color: ${e.accent} !important;
}
main form[class*="group/prompt-input"] :where([class*="toolbar"], [class*="footer"], [class*="controls"]) {
  background-color: transparent !important;
  background-image: none !important;
}
main form[class*="group/prompt-input"] :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${e.accent} 16%, transparent) !important;
}`}function on(e){return`
:root {
  --s-color-bg-body: transparent !important;
  --s-color-text-primary: ${e.text} !important;
  --s-color-text-secondary: color-mix(in srgb, ${e.text} 76%, transparent) !important;
  --s-color-text-tertiary: color-mix(in srgb, ${e.text} 58%, transparent) !important;
  --dbx-text-primary: ${e.text} !important;
  --dbx-text-secondary: color-mix(in srgb, ${e.text} 76%, transparent) !important;
  --dbx-text-tertiary: color-mix(in srgb, ${e.text} 58%, transparent) !important;
  --color-dbx-text-disable: color-mix(in srgb, ${e.text} 38%, transparent) !important;
  --input-guidance-input-container-background: color-mix(in srgb, ${e.surface} 68%, transparent) !important;
  --input-guidance-input-container-border: 1px solid color-mix(in srgb, ${e.accent} 28%, transparent) !important;
}
#chat-route-layout [class*="bg-dbx-bg-float"],
#chat-route-layout [class*="bg-dbx-bg-base-web"] {
  background-color: color-mix(in srgb, ${e.surface} 82%, transparent) !important;
  color: ${e.text} !important;
  border-color: color-mix(in srgb, ${e.accent} 18%, transparent) !important;
}
#chat-route-layout [class*="bg-dbx-fill-trans-20"],
#chat-route-layout [class*="bg-dbx-fill-trans-10"] {
  background-color: color-mix(in srgb, ${e.surface} 28%, transparent) !important;
}
html, body, #root,
#chat-route-layout,
#chat-route-main,
#flow-chat-guidance-page {
  background-color: transparent !important;
  background-image: none !important;
}
#chat-route-main > main,
main[class*="center-bg-"] {
  color: ${e.text} !important;
}
#chat-route-layout nav,
#chat-route-main nav,
nav[class*="panel-"] {
  background: color-mix(in srgb, ${e.surface} 46%, transparent) !important;
  border-color: color-mix(in srgb, ${e.accent} 18%, transparent) !important;
  color: ${e.text} !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
  -webkit-backdrop-filter: blur(18px) saturate(108%) !important;
}
#chat-route-main :where([class*="conversation"], [class*="message-list"], [class*="scroll-view"], [class*="chat-content"]) {
  background-color: transparent !important;
  background-image: none !important;
}
#chat-route-main div[class*="bg-(--input-guidance-input-container-background)"],
#chat-route-main div[class*="input-container"] {
  background: color-mix(in srgb, ${e.surface} 68%, transparent) !important;
  border-color: color-mix(in srgb, ${e.accent} 28%, transparent) !important;
  color: ${e.text} !important;
  box-shadow: 0 18px 52px color-mix(in srgb, #000000 24%, transparent) !important;
  backdrop-filter: blur(18px) saturate(110%) !important;
  -webkit-backdrop-filter: blur(18px) saturate(110%) !important;
}
#chat-route-main :where(textarea, input, [contenteditable="true"]) {
  background: transparent !important;
  color: ${e.text} !important;
  caret-color: ${e.accent} !important;
}
#chat-route-main :where(textarea, input)::placeholder {
  color: color-mix(in srgb, ${e.text} 58%, transparent) !important;
  opacity: 1 !important;
}
#chat-route-main :where(.tiptap, .ProseMirror)[data-placeholder]::before,
#chat-route-main :where(.tiptap, .ProseMirror) p.is-editor-empty:first-child::before,
#chat-route-main :where(.tiptap, .ProseMirror) p.is-empty:first-child::before,
#chat-route-main :where(.tiptap, .ProseMirror):empty::before {
  color: color-mix(in srgb, ${e.text} 58%, transparent) !important;
  opacity: 1 !important;
}
#flow-chat-guidance-page img[class*="dark:hidden"],
#chat-route-main div[class*="input-guidance"] img[class*="dark:hidden"] {
  display: none !important;
}
#flow-chat-guidance-page img[class*="hidden"][class*="dark:block"],
#chat-route-main div[class*="input-guidance"] img[class*="hidden"][class*="dark:block"] {
  display: block !important;
}
#flow-chat-guidance-page img[class*="object-contain"]:not([class*="image-item-img"]),
#chat-route-main div[class*="input-guidance"] img[class*="object-contain"]:not([class*="image-item-img"]) {
  filter: brightness(0) saturate(100%) invert(94%) sepia(5%) saturate(140%) hue-rotate(185deg) brightness(103%) contrast(95%) !important;
}
#flow-chat-guidance-page :where(svg, svg *),
#chat-route-main div[class*="input-guidance"] :where(svg, svg *) {
  color: ${e.text} !important;
  fill: currentColor !important;
  stroke: currentColor;
}
#chat-route-layout :is([class*="text-dbx-text-primary"], [class*="text-s-color-text-primary"]),
#chat-route-layout :is(button, [role="button"])[class*="text-dbx-text-primary"],
#chat-route-layout :is(button, [role="button"])[class*="text-s-color-text-primary"] {
  color: ${e.text} !important;
}
#chat-route-layout :is([class*="text-dbx-text-secondary"], [class*="text-s-color-text-secondary"]) {
  color: color-mix(in srgb, ${e.text} 76%, transparent) !important;
}
#chat-route-layout :is([class*="text-dbx-text-tertiary"], [class*="text-s-color-text-tertiary"]) {
  color: color-mix(in srgb, ${e.text} 58%, transparent) !important;
}
#flow_chat_sidebar,
#flow_chat_sidebar :where(button, [role="button"], a, div, span),
#chat-route-main > main > :where(header, [class*="header"]),
#chat-route-main > main > :where(header, [class*="header"]) :where(button, [role="button"], div, span),
#flow-chat-guidance-page,
#flow-chat-guidance-page :where(button, [role="button"], div, span),
#chat-route-main :where([class*="message"], [class*="conversation"], [class*="markdown"], article),
#chat-route-main :where([class*="message"], [class*="conversation"], [class*="markdown"], article) :where(p, div, span, li, h1, h2, h3, h4, strong, em, a),
#chat-route-main div[class*="bg-(--input-guidance-input-container-background)"],
#chat-route-main div[class*="bg-(--input-guidance-input-container-background)"] :where(button, [role="button"], div, span) {
  color: ${e.text} !important;
}
#flow-chat-guidance-page [class*="greeting-text-"]::after {
  background-color: transparent !important;
  background-image: none !important;
}
#flow_chat_sidebar [class*="text-dbx-text-tertiary"],
#flow_chat_sidebar [class*="text-s-color-text-tertiary"] {
  color: color-mix(in srgb, ${e.text} 58%, transparent) !important;
}
#chat-route-main :where(p, span, li, h1, h2, h3, h4, strong, em) {
  color: ${e.text} !important;
}
#chat-route-main :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${e.accent} 15%, transparent) !important;
}
#chat-route-main [class*="page-"] {
  background-color: transparent !important;
  color: ${e.text} !important;
}
#chat-route-main [class*="container-SrVXPg"],
#chat-route-main [class*="chrome70-container"] {
  background-color: transparent !important;
  background-image: none !important;
  color: ${e.text} !important;
}
#chat-route-main [class*="layout-padding-x-"][class*="sticky"][class*="bg-s-color-bg-body"] {
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
}
#chat-route-main div[class*="max-w-(--content-max-width)"][class*="my-0"][class*="mx-auto"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  box-shadow: none !important;
}
#chat-route-main [class*="message-list-"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  filter: none !important;
  box-shadow: none !important;
}
#chat-route-main [class*="page-"] :where(h1, h2, h3, h4, p, span, div, button, a, [role="button"]) {
  color: ${e.text} !important;
}
#chat-route-main [class*="searchBox-"] > div,
#chat-route-main [class*="searchBox-"] [class*="border-dbx-line"] {
  background: color-mix(in srgb, ${e.surface} 62%, transparent) !important;
  border-color: color-mix(in srgb, ${e.accent} 28%, transparent) !important;
  color: ${e.text} !important;
  backdrop-filter: blur(14px) saturate(108%) !important;
  -webkit-backdrop-filter: blur(14px) saturate(108%) !important;
}
#chat-route-main [class*="searchBox-"] input {
  background: transparent !important;
  color: ${e.text} !important;
  caret-color: ${e.accent} !important;
}
#chat-route-main [class*="searchBox-"] input::placeholder {
  color: color-mix(in srgb, ${e.text} 58%, transparent) !important;
}
#chat-route-main [class*="page-"] :is([class*="category"], [class*="tab"], [class*="filter"]),
#chat-route-main [class*="page-"] :is([class*="category"], [class*="tab"], [class*="filter"]) * {
  color: ${e.text} !important;
}
#chat-route-main [class*="group/carousel"] [role="tab"],
#chat-route-main [class*="group/carousel"] button {
  background: transparent !important;
  color: color-mix(in srgb, ${e.text} 76%, transparent) !important;
}
#chat-route-main [class*="group/carousel"] [role="tab"][data-state="active"],
#chat-route-main [class*="group/carousel"] button[data-state="active"] {
  background: color-mix(in srgb, ${e.accent} 24%, ${e.surface}) !important;
  color: ${e.text} !important;
}
#flow_chat_sidebar .group/sidebar_nav_item[class*="bg-dbx-bg-float"],
#flow_chat_sidebar .group/sidebar_nav_item[class*="shadow-"] {
  background: color-mix(in srgb, ${e.accent} 22%, ${e.surface}) !important;
  color: ${e.text} !important;
  border-color: color-mix(in srgb, ${e.accent} 32%, transparent) !important;
  box-shadow: none !important;
}
#flow_chat_sidebar .group/sidebar_nav_item[class*="bg-dbx-bg-float"] *,
#flow_chat_sidebar .group/sidebar_nav_item[class*="shadow-"] * {
  color: ${e.text} !important;
}
#flow_chat_sidebar [class*="chat-item-"] {
  color: ${e.text} !important;
  border-color: transparent !important;
}
#flow_chat_sidebar [class*="chat-item-"] * {
  color: ${e.text} !important;
}
#flow_chat_sidebar a[id^="conversation_"],
#flow_chat_sidebar a[id^="conversation_"] * {
  color: ${e.text} !important;
}
#flow_chat_sidebar a[id^="conversation_"] :where(svg, svg *) {
  color: ${e.text} !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}
#flow_chat_sidebar [class*="chat-item-"][class*="bg-dbx"],
#flow_chat_sidebar [class*="chat-item-"][aria-current="page"],
#flow_chat_sidebar [class*="chat-item-"][data-active="true"] {
  background: color-mix(in srgb, ${e.accent} 22%, ${e.surface}) !important;
  color: ${e.text} !important;
}`}function ft(e,t,a){return`/* DREAM_THEME:${e.id} */
:root {
  --dream-work-accent: ${a.accent};
  --dream-work-secondary: ${a.secondary};
  --dream-work-surface: ${a.surface};
  --dream-work-text: ${a.text};
}
html, body, #react-root, .app-shell {
  background-color: ${a.surface} !important;
  background-image: url(${JSON.stringify(t)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  color: ${a.text} !important;
}
.titlebar, .app, .main-content, .chat-area, .input-area {
  background-color: transparent !important;
  background-image: none !important;
}
#sidebar, #jianSidebar .universal-card, #previewBody {
  background: color-mix(in srgb, ${a.surface} 66%, transparent) !important;
  border-color: color-mix(in srgb, ${a.accent} 24%, transparent) !important;
  color: ${a.text} !important;
  backdrop-filter: blur(20px) saturate(110%) !important;
}
.titlebar {
  background: color-mix(in srgb, ${a.surface} 62%, transparent) !important;
  color: ${a.text} !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
}
[class*="input-wrapper"] {
  background: color-mix(in srgb, ${a.surface} 78%, transparent) !important;
  border-color: color-mix(in srgb, ${a.accent} 30%, transparent) !important;
  color: ${a.text} !important;
  box-shadow: 0 16px 42px color-mix(in srgb, ${a.surface} 28%, transparent) !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
}
[class*="input-wrapper"] :where(textarea, input, [contenteditable="true"]) {
  background: transparent !important;
  color: ${a.text} !important;
  caret-color: ${a.accent} !important;
}
#sidebar :where(button, [role="button"]):hover,
#jianSidebar :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${a.accent} 16%, transparent) !important;
}
:where(button[class*="primary"], button[type="submit"]) {
  background-color: ${a.accent} !important;
  color: #ffffff !important;
}`}function rn(e,t,a){const n=a.accent;a.secondary;const o=a.surface,r=a.text;return`/* DREAM_THEME:${e.id} */
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
  --Labels-Primary: color-mix(in srgb, ${r} 88%, #000000) !important;
  --Labels-Secondary: color-mix(in srgb, ${r} 62%, transparent) !important;
  --Labels-Tertiary: color-mix(in srgb, ${r} 44%, transparent) !important;
  --Labels-Quaternary: color-mix(in srgb, ${r} 28%, transparent) !important;
  --Colors-KMBlue: ${n} !important;
  --Others-KMBlue10: color-mix(in srgb, ${n} 12%, transparent) !important;
  --Others-BubbleBlue: color-mix(in srgb, ${n} 26%, ${o}) !important;
  --Others-TextSelected: color-mix(in srgb, ${n} 22%, transparent) !important;
  --Syntax-Mark: ${n} !important;
}
html, body, .page {
  background-color: ${o} !important;
  color: ${r} !important;
}
body {
  background-image: url(${JSON.stringify(t)}) !important;
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
  border-right: 1px solid color-mix(in srgb, ${n} 18%, transparent) !important;
  color: ${r} !important;
}
main.main-pane {
  background: color-mix(in srgb, ${o} 16%, transparent) !important;
  border-radius: 12px !important;
  color: ${r} !important;
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
  border-color: color-mix(in srgb, ${n} 24%, transparent) !important;
}
main.main-pane .conversation-tab,
main.main-pane .conversation-view,
main.main-pane [class*="conversation"] {
  background: transparent !important;
  color: ${r} !important;
}
main.main-pane :where([class*="message"], [class*="chat"], [class*="composer"], [class*="input"], [contenteditable="true"], textarea) {
  background-color: color-mix(in srgb, ${o} 66%, transparent) !important;
  border-color: color-mix(in srgb, ${n} 30%, transparent) !important;
  color: ${r} !important;
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
  color: ${r} !important;
}
[contenteditable="true"], textarea, input {
  color: ${r} !important;
  caret-color: ${n} !important;
}
:where(button[class*="primary"], button[mode="primary"]) {
  background-color: ${n} !important;
  color: #ffffff !important;
}
.nav-item, .mode-tab, .sidebar-scroll a, .sidebar-scroll span, .sidebar-footer, .account {
  color: ${r} !important;
}
.nav-item:hover, .mode-tab:hover, [class*="nav-item"]:hover {
  background-color: color-mix(in srgb, ${n} 18%, transparent) !important;
}
.win-titlebar-drag {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.message-list-container:where(.top) {
  display: none !important;
}`}function sn(e){return`(() => {
    const themes = ${JSON.stringify(e.themes)};
    const cssTemplate = ${JSON.stringify(e.cssTemplate)};
    const sentinels = ${JSON.stringify(y)};
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
  })()`}function cn(e){return`
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
}`}function ln(e,t){return`
/* CatPaw new-task and conversation surfaces */
html body #root .main-area {
  position: relative !important;
  isolation: isolate !important;
  background-color: ${t.surface} !important;
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
  background-color: color-mix(in srgb, ${t.surface} 78%, transparent) !important;
  border: 1px solid color-mix(in srgb, ${t.accent} 30%, transparent) !important;
  box-shadow: 0 16px 42px color-mix(in srgb, ${t.surface} 30%, transparent) !important;
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
  color: ${t.text} !important;
}
html body #root .catpaw-desk-inputBox :where(button, [role="button"]) {
  color: ${t.text} !important;
}
html body #root .catpaw-desk-inputBox :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${t.accent} 15%, transparent) !important;
}
html body #root .catpaw-desk-inputBox :where(svg, svg *) {
  color: currentColor !important;
}
`}function tt(e,t=""){return JSON.stringify(typeof e=="string"?e:t)}function wt(e,t,a){var o,r;return`/* DREAM_THEME:${String(e.id??"custom").replace(/[^a-z0-9_-]/gi,"")} */
body[data-application-name="workbuddy"] {
  --wb-accent: ${a.accent};
  --wb-secondary: ${a.secondary};
  --wb-surface: ${a.surface};
  --wb-text: ${a.text};

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
  background-image: url(${JSON.stringify(t)}) !important;
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
  content: ${tt((o=e.copy)==null?void 0:o.brand)};
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
  content: ${tt((r=e.copy)==null?void 0:r.headline)};
  color: var(--wb-text);
  font: 750 clamp(18px, 2.7vw, 42px)/1.15 ui-rounded, system-ui;
  text-shadow: 0 2px 12px white;
  pointer-events: none;
}`}function dn(e,t,a){const n=kt(a.surface),o=n?`color-mix(in srgb, ${a.surface} 90%, transparent)`:`color-mix(in srgb, ${a.surface} 86%, transparent)`,r=n?`color-mix(in srgb, ${a.accent} 16%, ${a.surface})`:`color-mix(in srgb, ${a.accent} 42%, ${a.surface})`,s=n?"#172033":`color-mix(in srgb, ${a.surface} 72%, #000000)`,c="#f2f6ff",i=`/* DREAM_THEME:${e.id} */
:root.codex-dream-skin {
  --ds-bg: ${a.surface};
  --ds-panel: ${a.surface};
  --ds-panel-2: ${a.surface};
  --ds-surface: ${a.surface};
  --ds-green: ${a.accent};
  --ds-lime: ${a.secondary};
  --ds-cyan: ${a.secondary};
  --ds-purple: ${a.accent};
  --ds-text: ${a.text};
  --ds-muted: color-mix(in srgb, ${a.text} 82%, transparent);
  --ds-line: color-mix(in srgb, ${a.accent} 22%, transparent);
  --ds-hero-height: 252px;
  --ds-radius: 24px;
  --dream-skin-art: url(${JSON.stringify(t)});
}`,l=`/* DREAM_THEME_BODY:${e.id} */
html.codex-dream-skin[data-dream-theme],
html.codex-dream-skin[data-dream-theme] body {
  background-color: ${a.surface} !important;
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
  background-color: color-mix(in srgb, ${a.surface} 12%, transparent) !important;
  background-image: none !important;
}

html.codex-dream-skin[data-dream-theme] main.main-surface::before {
  content: none !important;
  background: none !important;
}

html.codex-dream-skin[data-dream-theme] aside.app-shell-left-panel {
  background: color-mix(in srgb, ${a.surface} 30%, transparent) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

html.codex-dream-skin[data-dream-theme] main.main-surface > header.app-header-tint {
  background: color-mix(in srgb, ${a.surface} 16%, transparent) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

html.codex-dream-skin main.main-surface [role="main"],
html.codex-dream-skin main.main-surface .thread-scroll-container {
  --color-token-conversation-body: ${a.text} !important;
  --color-token-text-secondary: color-mix(in srgb, ${a.text} 76%, transparent) !important;
  --color-token-text-tertiary: color-mix(in srgb, ${a.text} 58%, transparent) !important;
  --color-token-conversation-summary-leading: color-mix(in srgb, ${a.text} 88%, transparent) !important;
  --color-token-conversation-summary-trailing: color-mix(in srgb, ${a.text} 68%, transparent) !important;
  --color-token-conversation-header: color-mix(in srgb, ${a.text} 78%, transparent) !important;
  --color-token-description-foreground: color-mix(in srgb, ${a.text} 72%, transparent) !important;
  --shimmer-text-secondary: color-mix(in srgb, ${a.text} 68%, transparent) !important;
  --shimmer-contrast: ${a.text} !important;
  background-color: transparent !important;
  color: ${a.text} !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) {
  background-color: transparent !important;
  background-image: none !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) article,
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) .message,
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [data-message-author-role],
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [class*="surface"]:not(.composer-surface-chrome):not([class*="home-main-content"]) {
  border-color: color-mix(in srgb, ${a.accent} 24%, transparent) !important;
  background: ${o} !important;
  color: ${a.text} !important;
  text-shadow: none !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [data-message-author-role="user"],
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [class*="bg-token-foreground"] {
  background: ${r} !important;
  color: ${a.text} !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container [class*="_markdownContent_"],
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container [class*="_markdownContent_"] :where(p, li, h1, h2, h3, h4, h5, h6, strong, em, blockquote, span),
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container :where(.text-token-conversation-body, .text-token-text-secondary, .group/activity-header),
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container .group/activity-header :where(span, svg) {
  color: ${a.text} !important;
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
  color: ${a.text} !important;
  text-shadow: none !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container * {
  color: ${a.text} !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container [class*="_markdownContent_"] a {
  color: ${a.accent} !important;
}

html.codex-dream-skin .composer-surface-chrome {
  background: color-mix(in srgb, ${a.surface} 92%, transparent) !important;
  color: ${a.text} !important;
}

html.codex-dream-skin .composer-surface-chrome *,
html.codex-dream-skin .composer-surface-chrome .ProseMirror {
  color: ${a.text} !important;
  caret-color: ${a.accent} !important;
}

html.codex-dream-skin main.main-surface pre,
html.codex-dream-skin main.main-surface code,
html.codex-dream-skin main.main-surface table,
html.codex-dream-skin main.main-surface [data-testid*="code"] {
  background: ${s} !important;
  color: ${c} !important;
  text-shadow: none !important;
}

html.codex-dream-skin main.main-surface :where(pre, code, table) * {
  color: ${c} !important;
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
  background-color: color-mix(in srgb, ${a.surface} 82%, transparent) !important;
  backdrop-filter: blur(14px) saturate(106%) !important;
}`;return i+`
`+l}function kt(e){const t=/^#([0-9a-f]{6})$/i.exec(e);if(!t)return!0;const a=parseInt(t[1],16);return .299*(a>>16&255)+.587*(a>>8&255)+.114*(a&255)>140}function mn(e){return`(() => {
  const data = ${JSON.stringify({styleId:e.styleId,menuId:e.menuId,activeId:e.currentThemeId,themes:e.themes,cssTemplate:e.cssTemplate,sentinels:y,storageKey:"dreamCustomThemes",selectedKey:"wb-dream-selected",sharedCustomThemes:e.sharedCustomThemes,sharedCustomThemeService:e.sharedCustomThemeService})};
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
})()`}function un(e){const t=JSON.stringify(e.themes),a=JSON.stringify(e.cssTemplate??""),n=e.appId,o=e.monkeyCodeModern===!0;return`(() => {
  const themes = ${t};
  const cssTemplate = ${a};
  const sentinels = ${JSON.stringify(y)};
  const currentThemeId = '${e.currentThemeId}';
  const appId = '${n}';
  if (appId === 'monkeycode') {
    document.documentElement.dataset.dreamMonkeycodeModern = ${JSON.stringify(o?"true":"false")};
  }
  if (appId === 'sparkdesk') {
    document.documentElement.dataset.dreamSparkdeskSurface = location.hash === '#desk' || location.hash === '#settings' ? 'content' : 'shell';
  }
  if (appId === 'stepfun') {
    document.documentElement.dataset.dreamStepfunSurface = location.href.startsWith('app://ui/pages/browser/') ? 'shell' : 'content';
  }
  const nativeModeKey = '__dreamWorkNativeMode';
  const customStorageKey = 'dreamCodexCustomThemes';
  const stepFunStateKey = 'dream-work-theme:stepfun:state';
  const stepFunChannelName = 'dream-work-theme:stepfun';
  const sparkDeskChannelName = 'dream-work-theme:sparkdesk';
  const monkeyCodeRestoreKey = 'dream-work-theme:monkeycode:restored';
  const monkeyCodeNativeKey = 'dream-work-theme:monkeycode:native';
  const sharedCustomThemes = ${JSON.stringify(e.sharedCustomThemes)};
  const sharedCustomThemeService = ${JSON.stringify(e.sharedCustomThemeService)};
  const recordPresetUsage = (themeId) => fetch(sharedCustomThemeService.usageEndpoint, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
    body: JSON.stringify({ appId, themeId }),
  }).catch(() => {});
  const themeBlobUrls = new Map();
  // file:// 协议页面导航后 URL.createObjectURL 创建的 blob URL 会失效,
  // 导致 hero 背景图丢失;直接在页面内按协议判断,内嵌 data URL。
  const useBlobUrl = location.protocol !== 'file:';
  const materializeCss = (css, cacheKey) => {
    if (!useBlobUrl) return css;
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
  const syncAutoClawMode = (dark) => {
    if (appId !== 'autoclaw') return;
    const html = document.documentElement;
    const body = document.body;
    html.dataset.theme = dark ? 'dark' : 'light';
    body.dataset.theme = dark ? 'dark' : 'light';
    html.style.colorScheme = dark ? 'dark' : 'light';
    body.style.colorScheme = dark ? 'dark' : 'light';
    [html, body].forEach((target) => {
      target.classList.toggle('dark', dark);
      target.classList.toggle('vscode-dark', dark);
      target.classList.toggle('cb-dark', dark);
      target.classList.toggle('light', !dark);
      target.classList.toggle('vscode-light', !dark);
      target.classList.toggle('cb-light', !dark);
    });
  };
  const applyMode = (surface) => {
    const dark = !isLightSurface(surface);
    const body = document.body;
    const html = document.documentElement;
    syncAutoClawMode(dark);
    html.dataset.dreamShell = dark ? "dark" : "light";
    body.dataset.vscodeThemeKind = dark ? "vscode-dark" : "vscode-light";
    body.dataset.vscodeThemeName = dark ? "IDE Dark" : "IDE Light";
    html.style.colorScheme = dark ? "dark" : "light";
    ["light", "vscode-light", "cb-light", "dark", "vscode-dark", "cb-dark"].forEach((cls) => {
      const isDarkCls = cls === "dark" || cls === "vscode-dark" || cls === "cb-dark";
      body.classList.toggle(cls, dark ? isDarkCls : !isDarkCls);
      html.classList.toggle(cls, dark ? isDarkCls : !isDarkCls);
    });
    if (appId === 'deepseek-harness') body.toggleAttribute('data-ds-dark-theme', dark);
    if (appId === 'monkeycode') {
      html.dataset.theme = dark ? 'dark' : 'light';
      html.style.background = surface;
    }
    if (appId === 'autoclaw') {
      clearInterval(window.__dreamAutoClawModeGuard);
      window.__dreamAutoClawModeGuard = setInterval(() => syncAutoClawMode(dark), 250);
    }
  };
  if (!window[nativeModeKey]) {
    const html = document.documentElement;
    const body = document.body;
    let monkeyCodeNative = null;
    if (appId === 'monkeycode') {
      try { monkeyCodeNative = JSON.parse(localStorage.getItem(monkeyCodeNativeKey) || 'null'); } catch {}
    }
    window[nativeModeKey] = monkeyCodeNative || {
      htmlClasses: Array.from(html.classList),
      bodyClasses: Array.from(body.classList),
      colorScheme: html.style.colorScheme,
      bodyThemeKind: body.dataset.vscodeThemeKind,
      bodyThemeName: body.dataset.vscodeThemeName,
      deepSeekDarkTheme: appId === 'deepseek-harness' ? body.hasAttribute('data-ds-dark-theme') : undefined,
      monkeyCodeTheme: appId === 'monkeycode' ? html.dataset.theme : undefined,
      monkeyCodeBackground: appId === 'monkeycode' ? html.style.background : undefined,
      monkeyCodeStoredTheme: appId === 'monkeycode' ? localStorage.getItem('mc.theme') : null,
      monkeyCodeStoredBackground: appId === 'monkeycode' ? localStorage.getItem('mc.themeBg') : null,
      stepFunTheme: appId === 'stepfun' ? localStorage.getItem('theme') : null,
      autoClawHtmlTheme: appId === 'autoclaw' ? html.dataset.theme : undefined,
      autoClawBodyTheme: appId === 'autoclaw' ? body.dataset.theme : undefined,
      autoClawBodyColorScheme: appId === 'autoclaw' ? body.style.colorScheme : undefined,
    };
    if (appId === 'monkeycode' && !monkeyCodeNative) {
      try { localStorage.setItem(monkeyCodeNativeKey, JSON.stringify(window[nativeModeKey])); } catch {}
    }
  }
  const restoreNativeMode = async () => {
    const nativeMode = window[nativeModeKey];
    if (!nativeMode) return;
    const html = document.documentElement;
    const body = document.body;
    if (appId === 'autoclaw') {
      clearInterval(window.__dreamAutoClawVisualGuard);
      delete window.__dreamAutoClawVisualGuard;
    }
    if (appId === 'autoclaw') {
      clearInterval(window.__dreamAutoClawModeGuard);
      delete window.__dreamAutoClawModeGuard;
    }
    let nativeDark = nativeMode.htmlClasses.includes('dark') || nativeMode.bodyClasses.includes('dark');
    if (appId === 'minimax-code' || appId === 'agnes-code' || appId === 'astronclaw' || appId === 'stepfun') {
      try {
        if (appId === 'astronclaw') {
          const storedTheme = (await window.astronDesktop?.settings?.get?.())?.general?.theme;
          if (storedTheme === 'system') nativeDark = matchMedia('(prefers-color-scheme: dark)').matches;
          else if (storedTheme === 'dark') nativeDark = true;
          else if (storedTheme === 'light') nativeDark = false;
        } else if (appId === 'stepfun') {
          const storedTheme = nativeMode.stepFunTheme || localStorage.getItem('theme');
          if (storedTheme === 'system') nativeDark = matchMedia('(prefers-color-scheme: dark)').matches;
          else if (storedTheme === 'dark') nativeDark = true;
          else if (storedTheme === 'light') nativeDark = false;
          else nativeDark = nativeMode.htmlClasses.includes('dark') || nativeMode.bodyClasses.includes('dark');
        } else {
          const storedTheme = localStorage.getItem('theme');
          const followsSystem = localStorage.getItem('use_system_theme') === 'true' || storedTheme === 'system';
          if (followsSystem) nativeDark = matchMedia('(prefers-color-scheme: dark)').matches;
          else if (storedTheme === 'dark') nativeDark = true;
          else if (storedTheme === 'light') nativeDark = false;
        }
      } catch {}
      ["light", "vscode-light", "cb-light", "dark", "vscode-dark", "cb-dark"].forEach((className) => {
        html.classList.remove(className);
        body.classList.remove(className);
      });
      html.classList.add(nativeDark ? 'dark' : 'light');
      html.style.colorScheme = nativeDark ? 'dark' : 'light';
      delete body.dataset.vscodeThemeKind;
      delete body.dataset.vscodeThemeName;
    } else {
      ["light", "vscode-light", "cb-light", "dark", "vscode-dark", "cb-dark"].forEach((className) => {
        html.classList.toggle(className, nativeMode.htmlClasses.includes(className));
        body.classList.toggle(className, nativeMode.bodyClasses.includes(className));
      });
      html.style.colorScheme = nativeMode.colorScheme;
      if (nativeMode.bodyThemeKind === undefined) delete body.dataset.vscodeThemeKind;
      else body.dataset.vscodeThemeKind = nativeMode.bodyThemeKind;
      if (nativeMode.bodyThemeName === undefined) delete body.dataset.vscodeThemeName;
      else body.dataset.vscodeThemeName = nativeMode.bodyThemeName;
      if (appId === 'deepseek-harness') body.toggleAttribute('data-ds-dark-theme', Boolean(nativeMode.deepSeekDarkTheme));
      if (appId === 'monkeycode') {
        if (nativeMode.monkeyCodeTheme === undefined) delete html.dataset.theme;
        else html.dataset.theme = nativeMode.monkeyCodeTheme;
        html.style.background = nativeMode.monkeyCodeBackground || '';
        try {
          if (nativeMode.monkeyCodeStoredTheme === null) localStorage.removeItem('mc.theme');
          else localStorage.setItem('mc.theme', nativeMode.monkeyCodeStoredTheme);
          if (nativeMode.monkeyCodeStoredBackground === null) localStorage.removeItem('mc.themeBg');
          else localStorage.setItem('mc.themeBg', nativeMode.monkeyCodeStoredBackground);
          localStorage.removeItem(monkeyCodeNativeKey);
        } catch {}
      }
      if (appId === 'autoclaw') {
        if (nativeMode.autoClawHtmlTheme === undefined) delete html.dataset.theme;
        else html.dataset.theme = nativeMode.autoClawHtmlTheme;
        if (nativeMode.autoClawBodyTheme === undefined) delete body.dataset.theme;
        else body.dataset.theme = nativeMode.autoClawBodyTheme;
        body.style.colorScheme = nativeMode.autoClawBodyColorScheme || '';
      }
    }
    delete html.dataset.dreamShell;
  };
  window.__dreamWorkRestoreNativeMode = restoreNativeMode;

  const style = document.getElementById('${e.styleId}');
  if (!style) {
    const s = document.createElement('style');
    s.id = '${e.styleId}';
    document.head.appendChild(s);
    window.__dreamWorkThemeStyle = s;
  } else {
    window.__dreamWorkThemeStyle = style;
  }

  const markKimiAction = (restored, actionAt = Date.now()) => {
    if (appId !== 'kimi') return actionAt;
    try {
      localStorage.setItem('${Q}', String(actionAt));
      if (restored) localStorage.setItem('${W}', '1');
      else localStorage.removeItem('${W}');
    } catch {}
    document.documentElement.dataset.dreamThemeRestored = restored ? 'true' : undefined;
    if (!restored) delete document.documentElement.dataset.dreamThemeRestored;
    return actionAt;
  };
  let stepFunSyncing = false;
  let sparkDeskSyncing = false;
  const writeStepFunState = (themeId, actionAt) => {
    if (appId !== 'stepfun' || stepFunSyncing || !location.href.startsWith('app://chat-web/')) return Promise.resolve();
    try {
      const current = JSON.parse(localStorage.getItem(stepFunStateKey) || 'null');
      if (current && Number(current.actionAt) > Number(actionAt)) return Promise.resolve();
      localStorage.setItem(stepFunStateKey, JSON.stringify({ themeId, actionAt }));
      window.__dreamWorkStepFunChannel?.postMessage({ themeId, actionAt });
      return fetch(sharedCustomThemeService.appStateEndpoint + '/stepfun', {
        method: 'PUT',
        headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ themeId, actionAt }),
      }).then(() => undefined).catch(() => undefined);
    } catch { return Promise.resolve(); }
  };
  const writeSparkDeskState = (themeId, actionAt) => {
    if (appId !== 'sparkdesk' || sparkDeskSyncing || location.hash !== '#desk') return Promise.resolve();
    try {
      const state = { themeId, actionAt };
      window.__dreamWorkSparkDeskChannel?.postMessage(state);
      return fetch(sharedCustomThemeService.appStateEndpoint + '/sparkdesk', {
        method: 'PUT',
        headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      }).then(() => undefined).catch(() => undefined);
    } catch { return Promise.resolve(); }
  };
  const applyTheme = (themeId, actionAt = Date.now()) => {
    if (Number(actionAt) < Number(window.__dreamTheme?.lastActionAt || 0)) return;
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;
    markKimiAction(false, actionAt);
    if (appId === 'doubao') {
      try { localStorage.removeItem('dream-work-theme:doubao:restored'); } catch {}
      delete document.documentElement.dataset.dreamThemeRestored;
    }
    if (appId === 'monkeycode') {
      try { localStorage.removeItem(monkeyCodeRestoreKey); } catch {}
      delete document.documentElement.dataset.dreamThemeRestored;
    }
    window.__dreamWorkThemeStyle.textContent = materializeCss(theme.css, theme.id);
    document.documentElement.dataset.dreamTheme = themeId;
    if (window.__dreamTheme) {
      window.__dreamTheme.lastActionAt = actionAt;
      window.__dreamTheme.restoring = false;
    }
    void writeStepFunState(themeId, actionAt);
    void writeSparkDeskState(themeId, actionAt);
    if (appId !== 'hana-agent' && appId !== 'kimi' && appId !== 'stepfun') applyMode(theme.surface);
    if (appId === 'autoclaw') {
      const dark = !isLightSurface(theme.surface);
      const iconImageCss = 'width:20px!important;height:20px!important;filter:none!important;opacity:1!important;';
      const iconFrameCss = 'width:24px!important;height:24px!important;border-radius:7px!important;background:' + (dark ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.08)') + '!important;box-shadow:inset 0 0 0 1px ' + (dark ? 'rgba(255,255,255,.28)' : 'rgba(0,0,0,.18)') + '!important;';
      const headerCss = 'background:transparent!important;background-color:transparent!important;background-image:none!important;border-color:transparent!important;box-shadow:none!important;filter:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;';
      const applyAutoClawInlineOverrides = () => {
        document.querySelectorAll('.figma-sidebar-tab .figma-sidebar-tab-img').forEach((node) => { node.style.cssText += iconImageCss; });
        document.querySelectorAll('.figma-sidebar-tab .figma-sidebar-tab-icon-frame').forEach((node) => { node.style.cssText += iconFrameCss; });
        document.querySelectorAll('.auto-designer-main-header, .auto-coder-main-header, .new-chat-home-header, .autoclaw-content-header, [class*="main-header"]').forEach((node) => {
          node.style.cssText += headerCss;
        });
      };
      applyAutoClawInlineOverrides();
      clearInterval(window.__dreamAutoClawVisualGuard);
      window.__dreamAutoClawVisualGuard = setInterval(applyAutoClawInlineOverrides, 300);
    }
    
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

  const restoreNative = async (actionAt = Date.now()) => {
    if (Number(actionAt) < Number(window.__dreamTheme?.lastActionAt || 0)) return;
    markKimiAction(true);
    if (appId === 'doubao') {
      try { localStorage.setItem('dream-work-theme:doubao:restored', '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';
    }
    if (appId === 'monkeycode') {
      try { localStorage.setItem(monkeyCodeRestoreKey, '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';
    }
    if (window.__dreamTheme) window.__dreamTheme.restoring = true;
    window.__dreamWorkThemeStyle.textContent = '';
    delete document.documentElement.dataset.dreamTheme;
    if (window.__dreamTheme) window.__dreamTheme.lastActionAt = actionAt;
    await writeStepFunState('', actionAt);
    await writeSparkDeskState('', actionAt);
    if (appId === 'stepfun' && !stepFunSyncing) await new Promise(resolve => setTimeout(resolve, 1000));
    if (appId === 'minimax-code' || appId === 'agnes-code' || appId === 'astronclaw' || appId === 'stepfun' || appId === 'sparkdesk' || appId === 'monkeycode') await restoreNativeMode();
    else if (appId !== 'hana-agent' && appId !== 'kimi') applyMode('#ffffff');
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
  let customRefreshGeneration = 0;
  const applyCustomTheme = (slot, actionAt = Date.now()) => {
    markKimiAction(false, actionAt);
    window.__dreamWorkThemeStyle.textContent = materializeCss(buildCustomCss(slot.dataUrl, slot.colors, slot.id), slot.id);
    document.documentElement.dataset.dreamTheme = slot.id;
    if (window.__dreamTheme) {
      window.__dreamTheme.lastActionAt = actionAt;
      window.__dreamTheme.restoring = false;
    }
    void writeSparkDeskState(slot.id, actionAt);
    if (appId !== 'hana-agent') applyMode(slot.colors.surface);
    if (appId === 'codex') document.documentElement.classList.add('codex-dream-skin');
    ensureCustomRow(slot);
  };
  const deleteCustom = async (slotId) => {
    customRefreshGeneration += 1;
    if (appId === 'kimi') {
      window.__dreamWorkDeleteCustomThemeId = slotId;
      const saved = loadCustoms().filter((theme) => theme.id !== slotId);
      if (document.documentElement.dataset.dreamTheme === slotId) restoreNative();
      writeLocalCustoms(saved);
      customRows.get(slotId)?.remove();
      customRows.delete(slotId);
      return;
    }
    let saved = [];
    try {
      const response = await fetch(sharedCustomThemeService.endpoint + '/delete', {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ themeId: slotId }),
      });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const latest = await response.json();
      saved = Array.isArray(latest) ? latest : [];
      if (window.__dreamTheme) window.__dreamTheme.lastCustomDeleteError = null;
    } catch (error) {
      if (window.__dreamTheme) window.__dreamTheme.lastCustomDeleteError = String(error?.message || error);
      console.warn('Dream Theme: 共享图片删除失败', error);
      saved = loadCustoms().filter((theme) => theme.id !== slotId);
      await saveCustoms(saved);
    }
    if (document.documentElement.dataset.dreamTheme === slotId) restoreNative();
    writeLocalCustoms(saved);
    customRows.get(slotId)?.remove();
    customRows.delete(slotId);
    void refreshCustomThemes();
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
    item.dataset.customThemeId = slot.id;
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
  const native = row('还原主题', 'rgba(0,0,0,.24)', () => { void restoreNative(); });
  initialCustomThemes.forEach(ensureCustomRow);
  const refreshCustomThemes = () => {
    const generation = ++customRefreshGeneration;
    return fetch(sharedCustomThemeService.endpoint, {
      headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token },
      cache: 'no-store',
    }).then((response) => response.ok ? response.json() : Promise.reject(new Error('HTTP ' + response.status)))
      .then((latest) => {
      if (generation !== customRefreshGeneration) return;
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
  };
  void refreshCustomThemes();

  button.addEventListener('click', () => {
    void refreshCustomThemes();
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

  if (appId === 'stepfun' && location.href.startsWith('app://chat-web/')) {
    if (window.__dreamWorkStepFunStorage) window.removeEventListener('storage', window.__dreamWorkStepFunStorage);
    window.__dreamWorkStepFunStorage = (event) => {
      if (event.key !== stepFunStateKey || !event.newValue) return;
      try {
        const state = JSON.parse(event.newValue);
        stepFunSyncing = true;
        if (state.themeId) applyTheme(state.themeId, state.actionAt);
        else void restoreNative(state.actionAt);
      } finally {
        stepFunSyncing = false;
      }
    };
    window.addEventListener('storage', window.__dreamWorkStepFunStorage);
    window.__dreamWorkStepFunChannel?.close?.();
    window.__dreamWorkStepFunChannel = new BroadcastChannel(stepFunChannelName);
    window.__dreamWorkStepFunChannel.onmessage = (event) => {
      const state = event.data;
      if (!state || Number(state.actionAt) <= Number(window.__dreamTheme?.lastActionAt || 0)) return;
      stepFunSyncing = true;
      try {
        if (state.themeId) applyTheme(state.themeId, state.actionAt);
        else void restoreNative(state.actionAt);
      } finally {
        stepFunSyncing = false;
      }
    };
  }
  if (appId === 'sparkdesk') {
    window.__dreamWorkSparkDeskChannel?.close?.();
    window.__dreamWorkSparkDeskChannel = new BroadcastChannel(sparkDeskChannelName);
    window.__dreamWorkSparkDeskChannel.onmessage = (event) => {
      const state = event.data;
      if (!state || Number(state.actionAt) <= Number(window.__dreamTheme?.lastActionAt || 0)) return;
      sparkDeskSyncing = true;
      try {
        if (state.themeId) applyTheme(state.themeId, state.actionAt);
        else void restoreNative(state.actionAt);
      } finally {
        sparkDeskSyncing = false;
      }
    };
  }

  root.append(panel, button, picker);
  mount.appendChild(root);
  const showMenu = appId === 'stepfun'
    ? location.href.startsWith('app://chat-web/')
    : appId !== 'sparkdesk' || location.hash === '#desk';
  if (showMenu) document.documentElement.appendChild(host);

  clearInterval(window.__dreamWorkMenuGuard);
  const ensureInjectedNodes = () => {
    if (!window.__dreamWorkThemeStyle.isConnected) document.head.appendChild(window.__dreamWorkThemeStyle);
    if (showMenu && !host.isConnected) document.documentElement.appendChild(host);
  };
  window.__dreamWorkMenuGuard = setInterval(() => {
    ensureInjectedNodes();
  }, 250);
  let restoredAtStart = false;
  if (appId === 'kimi') {
    try { restoredAtStart = localStorage.getItem('${W}') === '1'; } catch {}
  }
  if (appId === 'monkeycode') {
    try { restoredAtStart = localStorage.getItem(monkeyCodeRestoreKey) === '1'; } catch {}
  }
  let stepFunState = null;
  if (appId === 'stepfun' && location.href.startsWith('app://chat-web/')) {
    try { stepFunState = JSON.parse(localStorage.getItem(stepFunStateKey) || 'null'); } catch {}
  }
  if (stepFunState && !stepFunState.themeId) restoreNative(stepFunState.actionAt);
  else if (stepFunState?.themeId) applyTheme(stepFunState.themeId, stepFunState.actionAt);
  else if (restoredAtStart) restoreNative();
  else applyTheme(currentThemeId);
  window.__dreamTheme = {
    ...(window.__dreamTheme || {}),
    lastActionAt: window.__dreamTheme?.lastActionAt || Date.now(),
    restoring: window.__dreamTheme?.restoring || false,
    activateTheme: (themeId, actionAt) => applyTheme(themeId, actionAt),
    restoreNative,
    deleteCustom,
    refreshCustomThemes,
    replaceCustomThemes: (latest) => {
      if (!Array.isArray(latest)) return;
      for (const slotId of [...customRows.keys()]) {
        if (!latest.some((item) => item.id === slotId)) {
          customRows.get(slotId)?.remove();
          customRows.delete(slotId);
        }
      }
      writeLocalCustoms(latest);
      latest.forEach(ensureCustomRow);
    },
    customThemeEndpoint: sharedCustomThemeService.endpoint,
    appStateEndpoint: sharedCustomThemeService.appStateEndpoint,
  };
  ensureInjectedNodes();
})()`}async function pn(e){try{return k.platform()==="win32"?hn(e):k.platform()==="darwin"?gn(e):k.platform()==="linux"?bn(e):{success:!1,error:`Unsupported platform: ${k.platform()}`}}catch(t){return{success:!1,error:t.message}}}function hn(e){const t=d.join(k.homedir(),"Desktop"),a=d.join(t,`${e.label}.lnk`),n=process.execPath,o=d.dirname(n),r=`
    $WshShell = New-Object -comObject WScript.Shell
    $Shortcut = $WshShell.CreateShortcut("${a.replace(/\\/g,"\\\\")}")
    $Shortcut.TargetPath = "${n.replace(/\\/g,"\\\\")}"
    $Shortcut.Arguments = "--launch=${e.appId}:${e.themeId}"
    $Shortcut.WorkingDirectory = "${o.replace(/\\/g,"\\\\")}"
    $Shortcut.Save()
  `;return new Promise(s=>{require("child_process").exec(`powershell -Command "${r.replace(/"/g,'\\"')}"`,c=>{s(c?{success:!1,error:c.message}:{success:!0,path:a})})})}function gn(e){const t=d.join(k.homedir(),"Desktop"),a=d.join(t,`${e.label}.app`),o=`
    tell application "Terminal"
      do script "'${process.execPath}' --launch=${e.appId}:${e.themeId}"
    end tell
  `,r=d.join(t,`${e.id}.scpt`);return h.writeFileSync(r,o),new Promise(s=>{require("child_process").exec(`osacompile -o "${a}" "${r}"`,c=>{h.unlinkSync(r),s(c?{success:!1,error:c.message}:{success:!0,path:a})})})}async function bn(e){const t=d.join(k.homedir(),".local","share","applications");h.existsSync(t)||h.mkdirSync(t,{recursive:!0});const a=d.join(t,`${e.id}.desktop`),n=process.execPath,o=`[Desktop Entry]
Type=Application
Name=${e.label}
Exec="${n}" --launch=${e.appId}:${e.themeId}
Icon=${e.icon||"utilities-terminal"}
Terminal=false
Categories=Utility;
`;return h.writeFileSync(a,o),h.chmodSync(a,493),{success:!0,path:a}}const fn=Be.promisify(Z.execFile),wn="https://api.dreamskin.cc",yt=`${wn}/v1/themes`,xt=32*1024*1024,$e=6;let Ie=0;async function kn(){const e=Ie,t=await yn(e),a=t.items;Ie=e+a.length>=t.total?0:e+$e;const n=ct(),o={checked:a.length,imported:0,skipped:0,offset:e,page:Math.floor(e/$e)+1,total:t.total,nextOffset:Ie,failed:[]};for(const r of a){const s=Cn(r.themeId);if(!r.applyCompatible||lt(s)){o.skipped++;continue}try{await xn(r,n,s)?o.imported++:o.skipped++}catch(c){o.failed.push({id:r.id,name:r.name,error:c.message})}}return o}async function yn(e){const t=`${yt}?limit=${$e}&offset=${e}&sort=recent`,a=await fetch(t,{signal:AbortSignal.timeout(3e4),redirect:"error"});if(!a.ok)throw new Error(`Theme list request failed: HTTP ${a.status}`);const n=await a.json();if(!Array.isArray(n.items)||n.items.length>$e||!Number.isInteger(n.total)||n.total<0)throw new Error("Theme list response is invalid");return{items:n.items,total:n.total}}async function xn(e,t,a){Sn(e);const n=h.mkdtempSync(d.join(k.tmpdir(),"dream-work-theme-")),o=d.join(n,"theme.zip"),r=d.join(n,"extract"),s=d.join(t,`.updating-${a}-${process.pid}`);try{h.mkdirSync(r);const c=`${yt}/${e.id}/download`,i=await fetch(c,{signal:AbortSignal.timeout(12e4),redirect:"error"});if(!i.ok)throw new Error(`Theme download failed: HTTP ${i.status}`);const l=Buffer.from(await i.arrayBuffer());if(l.length!==e.packageBytes)throw new Error(`Downloaded size mismatch: expected ${e.packageBytes}, got ${l.length}`);if(l.length>xt)throw new Error("Theme package exceeds 32 MiB");if(Le.createHash("sha256").update(l).digest("hex")!==e.packageSha256)throw new Error("Downloaded SHA-256 does not match metadata");h.writeFileSync(o,l,{flag:"wx"}),await vn(o,r);const p=$n(r),u=JSON.parse(h.readFileSync(d.join(p,"theme.json"),"utf8")),g=u.image;if(typeof g!="string"||d.basename(g)!==g||!/\.(png|jpe?g|webp)$/i.test(g))throw new Error("Theme image name is invalid");const f=d.join(p,g),A=d.join(p,"theme.css");if(!h.existsSync(f)||!h.statSync(f).isFile())throw new Error("Theme image is missing");if(!h.existsSync(A)||!h.statSync(A).isFile())throw new Error("theme.css is missing");const M=Tn(u,e,a,`hero${d.extname(g).toLowerCase()}`);return va(M.name,M.author,f)?!1:(h.mkdirSync(s),h.copyFileSync(f,d.join(s,M.hero)),h.copyFileSync(A,d.join(s,"theme.css")),h.writeFileSync(d.join(s,"theme.json"),`${JSON.stringify(M,null,2)}
`),h.renameSync(s,d.join(t,a)),!0)}finally{h.rmSync(s,{recursive:!0,force:!0}),h.rmSync(n,{recursive:!0,force:!0})}}async function vn(e,t){const{path7za:a}=require("7zip-bin");await fn(a,["x",e,`-o${t}`,"-y"],{windowsHide:!0,timeout:12e4})}function $n(e){const a=[e,...h.readdirSync(e,{withFileTypes:!0}).filter(n=>n.isDirectory()).map(n=>d.join(e,n.name))].filter(n=>h.existsSync(d.join(n,"theme.json"))&&h.existsSync(d.join(n,"theme.css")));if(a.length!==1)throw new Error("Theme ZIP must contain one theme root");return a[0]}function Sn(e){if(!/^ver_[a-z0-9]{8,64}$/.test(e.id))throw new Error("Theme version ID is invalid");if(!Number.isInteger(e.packageBytes)||e.packageBytes<1||e.packageBytes>xt)throw new Error("Theme package size is invalid");if(!/^[a-f0-9]{64}$/.test(e.packageSha256))throw new Error("Theme package SHA-256 is invalid")}function Cn(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").replace(/-+/g,"-")||"community-theme"}function Tn(e,t,a,n){const o=e.appearance==="dark"?"dark":"light",r=o==="dark"?"#10141c":"#f4f7fa",s=e.colors||{};return{schemaVersion:1,id:a,name:String(e.name||t.name||a).trim(),author:t.authorDisplayName||"DreamSkin Community",hero:n,colors:{accent:te(s.accent,"#4f8cff",r),secondary:te(s.secondary||s.accentAlt,"#7ba7d8",r),surface:te(s.panelAlt||s.panel||s.background,r,r),text:te(s.text,o==="dark"?"#eef2f7":"#1f2937",r)},copy:null,apps:Object.fromEntries(fe.filter(c=>!c.acceptsGenericThemes).map(c=>[c.id,{compat:!0}]))}}function te(e,t,a){if(typeof e!="string")return t;const n=e.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(n){let i=n[1];return i.length===3&&(i=i.split("").map(l=>l+l).join("")),`#${i.slice(0,6).toLowerCase()}`}const o=e.trim().match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);if(!o)return t;const r=o[4]===void 0?1:Number(o[4]),s=te(a,t,t).slice(1).match(/../g).map(i=>parseInt(i,16));return`#${[1,2,3].map(i=>Math.round(Number(o[i])*r+s[i-1]*(1-r))).map(i=>i.toString(16).padStart(2,"0")).join("")}`}let Pe=null;T.protocol.registerSchemesAsPrivileged([{scheme:"theme-asset",privileges:{standard:!0,secure:!0,supportFetchAPI:!0,stream:!0}}]);function vt(){Pe=new T.BrowserWindow({width:1200,height:800,webPreferences:{preload:d.join(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1}}),process.env.VITE_DEV_SERVER_URL?Pe.loadURL(process.env.VITE_DEV_SERVER_URL):Pe.loadFile(d.join(__dirname,"../renderer/dist/index.html"))}T.app.whenReady().then(()=>{T.protocol.handle("theme-asset",e=>{const t=decodeURIComponent(new URL(e.url).pathname.replace(/^\//,"")),a=ka(t);return a?new Response(h.readFileSync(a),{headers:{"Content-Type":_n(a),"Cache-Control":"public, max-age=3600"}}):new Response("Theme asset not found",{status:404})}),vt()});function _n(e){const t=d.extname(e).toLowerCase();return t===".jpg"||t===".jpeg"?"image/jpeg":t===".webp"?"image/webp":"image/png"}T.app.on("window-all-closed",()=>{process.platform!=="darwin"&&T.app.quit()});T.app.on("activate",()=>{T.BrowserWindow.getAllWindows().length===0&&vt()});const at=process.argv.find(e=>e.startsWith("--launch="));if(at){const[,e]=at.split("="),[t,a]=e.split(":");t&&a&&(console.log(`[main] Received launch args: ${t}:${a}`),setTimeout(async()=>{try{const n=await ot(t,a);if(n.success){console.log(`[main] Launched ${t} with theme ${a} on port ${n.port}`),console.log(`[main] Starting theme injection for ${t}:${a} on port ${n.port}`);const o=await bt(t,a,n.port);console.log("[main] Injection result:",o)}else console.error(`[main] Failed to launch ${t}: ${n.error}`)}catch(n){console.error("[main] Launch error:",n)}},1e3))}T.ipcMain.handle("discover-apps",async()=>nt());T.ipcMain.handle("launch-app",async(e,t,a)=>ot(t,a));T.ipcMain.handle("apply-theme",async(e,t,a,n)=>bt(t,a,n));T.ipcMain.handle("create-shortcut",async(e,t)=>{const a={...t,id:`${t.appId}-${t.themeId}-${Date.now()}`};return pn(a)});T.ipcMain.handle("list-themes",async(e,t)=>Ce(t).map(a=>({id:a.id,name:a.name,author:a.author,hero:ya(a.id)})));T.ipcMain.handle("update-themes",async()=>kn());T.ipcMain.handle("get-status",async(e,t,a)=>{var o;return await Lt(t)?{...await Ba(t,a||((o=O(t))==null?void 0:o.defaultPort)||9339),running:!0}:{installed:!1,menu:!1,targets:0,running:!1}});T.ipcMain.handle("remove-skin",async(e,t,a)=>La(t,a));T.ipcMain.handle("debug-targets",async(e,t)=>{try{const n=await(await fetch(`http://127.0.0.1:${t}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();return{success:!0,count:n.length,raw:n,targets:n.map(o=>({id:o.id,type:o.type,url:o.url,title:o.title,webSocketDebuggerUrl:o.webSocketDebuggerUrl}))}}catch(a){return{success:!1,error:a.message}}});

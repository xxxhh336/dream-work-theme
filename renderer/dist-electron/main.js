"use strict";var tt=Object.defineProperty;var nt=(e,n,t)=>n in e?tt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var E=(e,n,t)=>nt(e,typeof n!="symbol"?n+"":n,t);const C=require("electron"),rt=require("path"),ot=require("fs"),V=require("child_process"),we=require("util"),at=require("os"),st=require("original-fs"),it=require("http"),ct=require("net"),lt=require("fs/promises"),dt=require("crypto");function W(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return n.default=e,Object.freeze(n)}const l=W(rt),p=W(ot),y=W(at),O=W(st),je=W(it),xe=W(ct),ye=W(dt),S=process.env.LOCALAPPDATA||l.join(y.homedir(),"AppData","Local"),Z=process.env.APPDATA||l.join(y.homedir(),"AppData","Roaming"),P=process.env.ProgramFiles||"C:\\Program Files",j=process.env["ProgramFiles(x86)"]||"C:\\Program Files (x86)",ne=[{id:"workbuddy",name:"WorkBuddy",exeNames:["WorkBuddy.exe"],processName:"WorkBuddy.exe",defaultPort:9339,installPaths:[l.join(S,"workbuddy"),l.join(S,"Programs","workbuddy"),l.join(P,"WorkBuddy"),l.join(j,"WorkBuddy"),"D:\\Program Files\\WorkBuddy"],rendererHints:["app.asar/renderer/index.html","renderer/index.html","index.html"],kind:"workbuddy",acceptsGenericThemes:!0,darwin:{appBundles:["WorkBuddy.app"],executableNames:["WorkBuddy"]},linux:{executableNames:["workbuddy","WorkBuddy"],desktopFiles:["workbuddy.desktop"]}},{id:"codex",name:"Codex",exeNames:["ChatGPT.exe","Codex.exe"],processName:"ChatGPT.exe",defaultPort:9340,installPaths:[l.join(S,"Programs","Codex"),l.join(S,"Programs","OpenAI","Codex"),l.join(P,"Codex"),l.join(j,"Codex"),"D:\\Program Files\\Codex"],rendererHints:["index.html","renderer/index.html"],kind:"codex",acceptsGenericThemes:!0,darwin:{appBundles:["ChatGPT.app","Codex.app"],executableNames:["ChatGPT","Codex"]},linux:{executableNames:["codex","Codex"],desktopFiles:["codex.desktop"]}},{id:"trae-work",name:"TRAE Work",exeNames:["TRAE SOLO CN.exe","TRAE Work CN.exe"],processName:"TRAE SOLO CN.exe",defaultPort:9341,installPaths:["D:\\Program Files\\TRAE SOLO CN",l.join(S,"Programs","TRAE SOLO CN"),l.join(P,"TRAE SOLO CN")],rendererHints:["solo/solo-lite.html","solo-lite.html"],kind:"vscode-work",acceptsGenericThemes:!0,darwin:{appBundles:["TRAE SOLO CN.app","TRAE Work CN.app","TRAE.app"],executableNames:["TRAE SOLO CN","TRAE Work CN","TRAE"]},linux:{executableNames:["trae","trae-work","TRAE"],desktopFiles:["trae.desktop","trae-work.desktop"]}},{id:"qoder-work",name:"QoderWork",exeNames:["QoderWork CN.exe","QoderWork.exe"],processName:"QoderWork CN.exe",defaultPort:9342,installPaths:["D:\\Program Files\\QoderWork CN",l.join(S,"Programs","QoderWork CN"),l.join(P,"QoderWork CN")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",devToolsActivePort:l.join(Z,"QoderWork CN","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["QoderWork CN.app","QoderWork.app"],executableNames:["QoderWork CN","QoderWork"]},linux:{executableNames:["qoder-work","qoderwork","QoderWork"],desktopFiles:["qoder-work.desktop","qoderwork.desktop"]}},{id:"catpaw",name:"CatPaw",exeNames:["CatPaw.exe"],processName:"CatPaw.exe",defaultPort:9343,installPaths:[l.join(S,"CatPaw"),l.join(S,"Programs","CatPaw"),l.join(P,"CatPaw")],rendererHints:["app.asar/dist/index.html","dist/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["CatPaw.app"],executableNames:["CatPaw"]},linux:{executableNames:["catpaw","CatPaw"],desktopFiles:["catpaw.desktop"]}},{id:"zcode",name:"ZCode",exeNames:["ZCode.exe"],processName:"ZCode.exe",defaultPort:9344,installPaths:["D:\\Program Files\\ZCode",l.join(S,"Programs","ZCode"),l.join(P,"ZCode")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["ZCode.app"],executableNames:["ZCode"]},linux:{executableNames:["zcode","ZCode"],desktopFiles:["zcode.desktop"]}},{id:"qwen-office",name:"千问办公",exeNames:["QwenWorkCN.exe"],processName:"QwenWorkCN.exe",defaultPort:9345,installPaths:["D:\\Program Files\\QwenWorkCN",l.join(S,"Programs","QwenWorkCN"),l.join(P,"QwenWorkCN")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",devToolsActivePort:l.join(Z,"QwenWorkCN","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["QwenWorkCN.app","Qwen Work.app"],executableNames:["QwenWorkCN","Qwen Work"]},linux:{executableNames:["qwen-work","qwenwork","QwenWorkCN"],desktopFiles:["qwen-work.desktop","qwenwork.desktop"]}},{id:"hana-agent",name:"HanaAgent",exeNames:["HanaAgent.exe"],processName:"HanaAgent.exe",defaultPort:9346,installPaths:[l.join(S,"Programs","HanaAgent"),l.join(P,"HanaAgent"),l.join(j,"HanaAgent")],rendererHints:[".hanako/artifacts/renderer/","artifacts/renderer/","/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["HanaAgent.app"],executableNames:["HanaAgent"]},linux:{executableNames:["hana-agent","HanaAgent"],desktopFiles:["hana-agent.desktop"]}},{id:"kimi",name:"Kimi Work",exeNames:["Kimi.exe"],processName:"Kimi.exe",defaultPort:9347,installPaths:["D:\\Program Files\\Kimi",l.join(S,"Programs","Kimi"),l.join(P,"Kimi"),l.join(j,"Kimi")],rendererHints:["kimi-agent.html","kimichat.html","https://www.kimi.com/"],kind:"generic-work",devToolsActivePort:l.join(Z,"kimi-desktop","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["Kimi.app"],executableNames:["Kimi"]},linux:{executableNames:["kimi","Kimi"],desktopFiles:["kimi.desktop"]}},{id:"opencode",name:"OpenCode",exeNames:["OpenCode.exe"],processName:"OpenCode.exe",defaultPort:9348,installPaths:[l.join(S,"Programs","@opencode-aidesktop"),l.join(S,"Programs","OpenCode"),l.join(P,"OpenCode"),l.join(j,"OpenCode")],rendererHints:["oc://renderer/index.html"],kind:"generic-work",devToolsActivePort:l.join(Z,"ai.opencode.desktop","DevToolsActivePort"),windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["OpenCode.app"],executableNames:["OpenCode"]},linux:{executableNames:["opencode-desktop","OpenCode"],desktopFiles:["opencode-desktop.desktop"]}},{id:"doubao",name:"豆包",exeNames:["Doubao.exe"],processName:"Doubao.exe",defaultPort:9349,installPaths:[l.join(S,"Doubao","Application","app"),l.join(S,"Doubao","Application"),l.join(P,"Doubao"),l.join(j,"Doubao")],rendererHints:["doubao://doubao-chat/chat"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["Doubao.app"],executableNames:["Doubao"]},linux:{executableNames:["doubao","Doubao"],desktopFiles:["doubao.desktop"]}},{id:"agnes-code",name:"AgnesCode",exeNames:["AgnesCode.exe"],processName:"AgnesCode.exe",defaultPort:9350,installPaths:["D:\\Program Files\\AgnesCode",l.join(S,"Programs","AgnesCode"),l.join(P,"AgnesCode"),l.join(j,"AgnesCode")],rendererHints:["app.asar/.vite/renderer/main_window/index.html"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["AgnesCode.app"],executableNames:["AgnesCode"]},linux:{executableNames:["agnes-code","agnescode","AgnesCode"],desktopFiles:["agnes-code.desktop","agnescode.desktop"]}},{id:"minimax-code",name:"MiniMax Code",exeNames:["MiniMax Code.exe"],processName:"MiniMax Code.exe",defaultPort:9351,installPaths:["D:\\Program Files\\MiniMax Code",l.join(S,"Programs","MiniMax Code"),l.join(P,"MiniMax Code"),l.join(j,"MiniMax Code")],rendererHints:["app://./archon"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["MiniMax Code.app"],executableNames:["MiniMax Code"]},linux:{executableNames:["minimax-code","MiniMax Code"],desktopFiles:["minimax-code.desktop"]}},{id:"astronclaw",name:"AstronClaw",exeNames:["AstronClaw.exe"],processName:"AstronClaw.exe",defaultPort:9352,installPaths:["D:\\Program Files\\AstronClaw",l.join(S,"Programs","AstronClaw"),l.join(P,"AstronClaw"),l.join(j,"AstronClaw")],rendererHints:["app.asar/out/renderer/index.html","out/renderer/index.html"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["AstronClaw.app"],executableNames:["AstronClaw"]},linux:{executableNames:["astronclaw","AstronClaw"],desktopFiles:["astronclaw.desktop"]}}];function D(e){return ne.find(n=>n.id===e)}const ke=we.promisify(V.execFile);function mt(){const e=[],n=l.join(process.env.ProgramFiles||"C:\\Program Files","WindowsApps");if(!p.existsSync(n))return e;try{const t=p.readdirSync(n);for(const r of t)if(/^OpenAI\.Codex_\d+/i.test(r)){const o=l.join(n,r,"app","ChatGPT.exe");p.existsSync(o)&&e.push(o)}}catch{}return e}async function ut(){const e=`
$ErrorActionPreference = 'SilentlyContinue'
$package = Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue
if (-not $package) { exit 1 }
$manifest = Get-AppxPackageManifest -Package $package.PackageFullName
$rel = [string]$manifest.Package.Applications.Application.Executable
if (-not $rel) { exit 1 }
$full = Join-Path $package.InstallLocation $rel
if (Test-Path -LiteralPath $full -PathType Leaf) { Write-Output $full } else { exit 1 }
`;try{const{stdout:n}=await ke("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",e],{encoding:"utf8",maxBuffer:4194304}),t=n.trim();if(t&&p.existsSync(t))return t}catch{}return null}async function pt(){const e=[];if(y.platform()!=="win32"){for(const o of ne){const a=await ht(o);a&&e.push({appId:o.id,name:o.name,path:a})}return e}for(const o of ne.filter(a=>a.id!=="codex")){const a=Ie(o.exeNames,o.installPaths);a&&e.push({appId:o.id,name:o.name,path:a})}const t=Ie(["Codex.exe","ChatGPT.exe"],[l.join(process.env.LOCALAPPDATA||"","Programs","Codex"),l.join(process.env.LOCALAPPDATA||"","Programs","OpenAI","Codex"),...mt()]),r=t?null:await ut();return r?e.push({appId:"codex",name:"Codex",path:r}):t&&e.push({appId:"codex",name:"Codex",path:t}),e}async function ht(e){var t,r,o;const n=y.platform();if(n==="darwin"){for(const a of((t=e.darwin)==null?void 0:t.appBundles)??[]){const s=l.join("/Applications",a);if(p.existsSync(s))return s}return null}if(n==="linux"){for(const a of((r=e.linux)==null?void 0:r.desktopFiles)??[]){const s=await gt(a);if(s)return s}for(const a of((o=e.linux)==null?void 0:o.executableNames)??[])try{const{stdout:s}=await ke("which",[a],{encoding:"utf8"}),d=s.trim();if(d&&p.existsSync(d))return d}catch{}}return null}async function gt(e){for(const n of[l.join(y.homedir(),".local","share","applications",e),l.join("/usr/share/applications",e),l.join("/usr/local/share/applications",e)]){if(!p.existsSync(n))continue;const t=p.readFileSync(n,"utf8").match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m),r=(t==null?void 0:t[1])||(t==null?void 0:t[2]);if(r){if(l.isAbsolute(r)&&p.existsSync(r))return r;try{const{stdout:o}=await ke("which",[r],{encoding:"utf8"}),a=o.trim();if(a&&p.existsSync(a))return a}catch{}}}return null}function Ie(e,n){for(const t of n){if(!t||!p.existsSync(t))continue;if(p.statSync(t).isFile()&&e.some(o=>l.basename(t).toLowerCase()===o.toLowerCase()))return t;for(const o of e){const a=l.join(t,o);if(p.existsSync(a))return a}try{const o=p.readdirSync(t,{withFileTypes:!0}).filter(a=>a.isDirectory()).sort((a,s)=>s.name.localeCompare(a.name,void 0,{numeric:!0}));for(const a of o)for(const s of e){const d=l.join(t,a.name,s);if(p.existsSync(d))return d}}catch{}}return null}const re=we.promisify(V.execFile);async function bt(e){const n=D(e);if(!n)return!1;const t=Re(n);if(y.platform()==="win32"){for(const r of t)try{const{stdout:o}=await re("tasklist.exe",["/FI",`IMAGENAME eq ${r}`,"/FO","CSV","/NH"],{encoding:"utf8",windowsHide:!0});if(o.split(/\r?\n/).some(a=>a.trim().toLowerCase().startsWith(`"${r.toLowerCase()}"`)))return!0}catch{}return!1}for(const r of t)try{return await re("pgrep",["-f",r],{encoding:"utf8"}),!0}catch{}return!1}async function Oe(e,n){const t=D(e);if(!t)return{success:!1,error:`Unknown app: ${e}`};try{const r=Pt(e);console.log(`[launcher] Killing existing ${e} instances...`),await It(e,r),await At(t.defaultPort,15e3);const o=await $t(t.defaultPort);o!==t.defaultPort&&console.warn(`[launcher] Default CDP port ${t.defaultPort} is unavailable; using ${o}`);const a=[`--remote-debugging-port=${o}`];e==="codex"&&a.push("--disable-extensions"),n&&e!=="kimi"&&a.push(`--dream-theme=${n}`),e==="agnes-code"&&y.platform()==="win32"&&await yt(r);const s=y.platform()==="win32"?t.devToolsActivePort:void 0;if(s)try{p.unlinkSync(s)}catch{}console.log(`[launcher] Launching ${r} with args: ${a.join(" ")}`);const d=xt(e,r,o),i=e==="kimi"&&y.platform()==="win32"?await wt(r,a):ft(r,a,d);console.log(`[launcher] Spawned process${i?` with PID: ${i}`:""}`),console.log(`[launcher] Waiting for CDP port ${o} to be ready...`);let c=o;return s?c=await kt(s,t.rendererHints,3e4):await Tt(o,3e4),console.log(`[launcher] CDP port ${c} is ready`),(e==="hana-agent"||e==="kimi")&&await Ct(c,t.rendererHints,3e4,e==="kimi"?750:3e3),{success:!0,port:c}}catch(r){return console.error("[launcher] Launch failed:",r),{success:!1,error:r.message}}}function ft(e,n,t){const r=V.spawn(e,n,{detached:!0,stdio:"ignore",env:t});return r.unref(),r.pid}async function wt(e,n){const t=l.join(y.tmpdir(),`dream-work-kimi-${process.pid}-${Date.now()}.lnk`),r={...pe(),DREAM_WORK_LAUNCH_EXE:e,DREAM_WORK_LAUNCH_ARGS:JSON.stringify(n),DREAM_WORK_LAUNCH_CWD:l.dirname(e),DREAM_WORK_LAUNCH_SHORTCUT:t},o=["[string[]]$launchArgs = @($env:DREAM_WORK_LAUNCH_ARGS | ConvertFrom-Json)","$shell = New-Object -ComObject WScript.Shell","$shortcut = $shell.CreateShortcut($env:DREAM_WORK_LAUNCH_SHORTCUT)","$shortcut.TargetPath = $env:DREAM_WORK_LAUNCH_EXE","$shortcut.Arguments = [string]::Join(' ', $launchArgs)","$shortcut.WorkingDirectory = $env:DREAM_WORK_LAUNCH_CWD","$shortcut.Save()"].join("; ");await re("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",o],{env:r,windowsHide:!0}),V.spawn(l.join(process.env.WINDIR||"C:\\Windows","explorer.exe"),[t],{detached:!0,stdio:"ignore",env:pe()}).unref(),setTimeout(()=>{try{p.unlinkSync(t)}catch{}},15e3).unref()}function pe(){const e={...process.env};for(const n of["VITE_DEV_SERVER_URL","ELECTRON_RENDERER_URL","MAIN_VITE_DEV_SERVER_URL","ELECTRON_RUN_AS_NODE"])delete e[n];return e}function xt(e,n,t){const r=pe();return e==="agnes-code"&&(r.AGNES_DEV="1",r.ENABLE_PLAYWRIGHT="1",r.PLAYWRIGHT_DEBUG_PORT=String(t),r.AGNESD_BINARY=l.join(l.dirname(n),"resources","bin",y.platform()==="win32"?"agnesd.exe":"agnesd")),r}async function yt(e){const n=l.dirname(e),t=l.join(n,"resources","app.asar"),r=`${e}.dream-work-original`,o=`${t}.dream-work-titlebar.json`,a=O.readFileSync(t),s=a.toString("latin1");if(/function ([\w$]+)\(e,t="sidebar"\)\{return\{color:"#00000000",symbolColor:([\w$]+)\[e\],height:32\}\}/.test(s)){Ae(e),console.log("[launcher] AgnesCode native title bar overlay is already transparent");return}const c=/function ([\w$]+)\(e,t="sidebar"\)\{return\{color:t==="content"\?([\w$]+)\(e\):([\w$]+)\(e\),symbolColor:([\w$]+)\[e\],height:32\}\}/.exec(s);if(!c||c.index<0)throw new Error("AgnesCode title bar implementation was not recognized; the installed version may have changed");O.copyFileSync(e,r),Ae(e);const m=c[0],u=`function ${c[1]}(e,t="sidebar"){return{color:"#00000000",symbolColor:${c[4]}[e],height:32}}`;if(u.length>m.length)throw new Error("AgnesCode title bar patch does not fit the original ASAR entry");O.writeFileSync(o,JSON.stringify({archiveSize:a.length,offset:c.index,original:Buffer.from(m,"latin1").toString("base64")}));const h=Buffer.from(u.padEnd(m.length," "),"latin1"),g=O.openSync(t,"r+");try{O.writeSync(g,h,0,h.length,c.index),O.fsyncSync(g)}finally{O.closeSync(g)}console.log("[launcher] Patched AgnesCode native window controls overlay to transparent")}function Ae(e){const n=Buffer.from("dL7pKGdnNz796PbbjQWNKmHXBZaB9tsX","ascii"),t=O.readFileSync(e),r=t.indexOf(n),o=t.lastIndexOf(n);if(r<0)throw new Error("AgnesCode Electron fuse wire was not found");const a=r===o?[r]:[r,o];let s=!1;for(const d of a){const i=d+n.length,c=t[i],m=t[i+1];if(c!==1||m<=4)throw new Error(`Unsupported AgnesCode Electron fuse wire: version=${c}, length=${m}`);const u=i+2+4;t[u]!==48&&(t[u]=48,s=!0)}s&&(O.writeFileSync(e,t),console.log("[launcher] Disabled AgnesCode embedded ASAR integrity validation"))}function Re(e){var n,t;return y.platform()==="darwin"?((n=e.darwin)==null?void 0:n.executableNames)??[]:y.platform()==="linux"?((t=e.linux)==null?void 0:t.executableNames)??[]:[...new Set([e.processName,...e.exeNames].filter(Boolean))]}async function kt(e,n,t){const r=Date.now();let o=0;for(;Date.now()-r<t;){try{const a=p.readFileSync(e,"utf8").split(/\r?\n/,1)[0],s=Number(a);if(Number.isInteger(s)&&s>0)return o=s,await vt(s,n,3e3),s}catch{}await new Promise(a=>setTimeout(a,500))}throw new Error(`DevToolsActivePort did not expose a live renderer${o?` on port ${o}`:""}: ${e}`)}async function vt(e,n,t){const r=Date.now();for(;Date.now()-r<t;){try{const o=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(1e3)});if(o.ok){const a=await o.json();if(Array.isArray(a)&&a.some(s=>(s==null?void 0:s.type)==="page"&&n.some(d=>String(s.url).includes(d))))return}}catch{}await new Promise(o=>setTimeout(o,250))}throw new Error(`CDP renderer endpoint is not ready on port ${e}`)}async function Ct(e,n,t,r){const o=Date.now();let a="",s=0;for(;Date.now()-o<t;){try{const c=(await(await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(1e3)})).json()).find(m=>(m==null?void 0:m.type)==="page"&&n.some(u=>String(m.url).includes(u)));if(c!=null&&c.id){if(c.id!==a)a=c.id,s=Date.now();else if(Date.now()-s>=r){console.log(`[launcher] Stable renderer ${a} confirmed`);return}}}catch{}await new Promise(d=>setTimeout(d,250))}throw new Error(`Renderer did not stabilize on port ${e}`)}async function $t(e){for(let n=e;n<=e+100;n++)if(await St(n))return n;throw new Error(`No available CDP port found between ${e} and ${e+100}`)}function St(e){return new Promise(n=>{const t=xe.createServer();t.unref(),t.once("error",()=>n(!1)),t.listen(e,"127.0.0.1",()=>{t.close(r=>n(!r))})})}async function Tt(e,n){const t=Date.now();let r="unknown";for(;Date.now()-t<n;)try{await new Promise((o,a)=>{const s=xe.createConnection(e,"127.0.0.1",()=>{s.end(),o()});s.once("error",d=>{r=d.message,a(d)}),setTimeout(()=>{s.destroy(),a(new Error("timeout"))},1e3)}),console.log(`[launcher] Port ${e} is open, verifying CDP endpoint...`),await Et(e,15e3),console.log(`[launcher] CDP endpoint verified on port ${e}`);return}catch(o){r=o.message,console.log(`[launcher] Port check failed: ${o.message}, retrying...`),await new Promise(a=>setTimeout(a,1e3))}throw new Error(`CDP port ${e} did not become ready within ${n}ms (last error: ${r})`)}async function Et(e,n){const t=Date.now();for(;Date.now()-t<n;)try{await new Promise((r,o)=>{const a=je.request({hostname:"127.0.0.1",port:e,path:"/json/version",method:"GET",timeout:2e3},s=>{let d="";s.on("data",i=>{d+=i}),s.on("end",()=>{s.statusCode===200?(console.log(`[launcher] CDP version response: ${d.substring(0,200)}`),r()):o(new Error(`HTTP ${s.statusCode}`))})});a.on("error",o),a.on("timeout",()=>{a.destroy(),o(new Error("timeout"))}),a.end()});return}catch(r){if(Date.now()-t>=n)throw r;await new Promise(o=>setTimeout(o,1e3))}}async function It(e,n){const t=y.platform(),r=D(e);if(!r)return;const o=Re(r);try{if(t==="win32"){if(r.windowsPathScopedKill){const s=`$target = [IO.Path]::GetFullPath($env:DREAM_WORK_TARGET_EXE); Get-CimInstance Win32_Process -Filter "Name='${r.processName.replace(/'/g,"''")}'" | Where-Object { $_.ExecutablePath -and [IO.Path]::GetFullPath($_.ExecutablePath) -ieq $target } | ForEach-Object { taskkill.exe /T /F /PID $_.ProcessId *> $null }`;await re("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",s],{env:{...process.env,DREAM_WORK_TARGET_EXE:n},windowsHide:!0}).catch(()=>{}),console.log(`[launcher] Killed existing ${e} instances at ${n}`);return}const{execSync:a}=require("child_process");for(const s of o)try{a(`taskkill /T /F /IM "${s}" 2>nul`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${s} process tree`)}catch{}}else if(t==="darwin"){const{execSync:a}=require("child_process");for(const s of o)try{a(`pkill -f "${s}" 2>/dev/null || true`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${s} processes`)}catch{}}else if(t==="linux"){const{execSync:a}=require("child_process");for(const s of o)try{a(`pkill -f "${s}" 2>/dev/null || true`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${s} processes`)}catch{}}}catch(a){console.warn("[launcher] Failed to kill existing instances:",a)}}async function At(e,n){const t=Date.now();for(;Date.now()-t<n;){if(!await new Promise(o=>{const a=xe.createConnection(e,"127.0.0.1");a.once("connect",()=>{a.destroy(),o(!0)}),a.once("error",()=>o(!1)),a.setTimeout(500,()=>{a.destroy(),o(!1)})})){console.log(`[launcher] Previous CDP port ${e} is closed`);return}await new Promise(o=>setTimeout(o,250))}throw new Error(`Existing ${e} CDP service did not stop; refusing to inject into the old application instance`)}function Pt(e){var r,o,a,s;const n=D(e);if(!n)throw new Error(`Unknown app: ${e}`);const t=y.platform();if(t==="win32"){for(const c of n.installPaths){if(!c||!p.existsSync(c))continue;if(p.statSync(c).isFile())return c;for(const u of n.exeNames){const h=l.join(c,u);if(p.existsSync(h))return h}const m=p.readdirSync(c,{withFileTypes:!0}).filter(u=>u.isDirectory()).sort((u,h)=>h.name.localeCompare(u.name,void 0,{numeric:!0}));for(const u of m)for(const h of n.exeNames){const g=l.join(c,u.name,h);if(p.existsSync(g))return g}}const d=n.exeNames,i=[process.env.ProgramFiles,process.env["ProgramFiles(x86)"]].filter(Boolean);for(const c of i){if(!c||!p.existsSync(c))continue;const u=p.readdirSync(c).find(h=>h.toLowerCase().includes(e.replace("-",""))||h.toLowerCase().includes(n.name.toLowerCase()));if(u){const h=l.join(c,u);for(const g of d){const x=l.join(h,g);if(p.existsSync(x))return x}}}if(e==="codex"){const c=l.join(process.env.ProgramFiles||"C:\\Program Files","WindowsApps");console.log("[launcher] Codex WindowsApps fallback, path:",c);try{const u=p.readdirSync(c).find(h=>/^OpenAI\.Codex_\d+/i.test(h));if(u){const h=l.join(c,u,"app","ChatGPT.exe");if(p.existsSync(h))return console.log("[launcher] Found Codex via WindowsApps scan:",h),h}}catch(m){console.log("[launcher] WindowsApps scan error:",m.message)}try{const{execFileSync:m}=require("child_process"),u="Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue | ForEach-Object { Join-Path $_.InstallLocation (Get-AppxPackageManifest -Package $_.PackageFullName).Package.Applications.Application.Executable }";console.log("[launcher] Running PowerShell fallback...");const h=m("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",u],{encoding:"utf8",stdio:["pipe","pipe","ignore"]}).trim();if(console.log("[launcher] PowerShell result:",h),h&&p.existsSync(h))return h}catch(m){console.log("[launcher] PowerShell fallback error:",m.message)}}}else if(t==="darwin")for(const d of((r=n.darwin)==null?void 0:r.appBundles)??[]){const i=l.join("/Applications",d);if(p.existsSync(i))for(const c of((o=n.darwin)==null?void 0:o.executableNames)??[]){const m=l.join(i,"Contents","MacOS",c);if(p.existsSync(m))return m}}else if(t==="linux"){const d=((a=n.linux)==null?void 0:a.executableNames)??[];for(const c of((s=n.linux)==null?void 0:s.desktopFiles)??[]){const m=_t(c);if(m)return m}const i=["/usr/bin","/usr/local/bin","/opt",l.join(y.homedir(),".local","bin"),"/snap/bin"];for(const c of i)if(p.existsSync(c))for(const m of d){const u=l.join(c,m);if(p.existsSync(u))return u}for(const c of d)try{const{execFileSync:m}=require("child_process"),u=m("which",[c],{encoding:"utf8",stdio:["ignore","pipe","ignore"]}).trim();if(u&&p.existsSync(u))return u}catch{}}throw new Error(`Could not find ${e} executable`)}function _t(e){for(const n of[l.join(y.homedir(),".local","share","applications",e),l.join("/usr/share/applications",e),l.join("/usr/local/share/applications",e)]){if(!p.existsSync(n))continue;const t=p.readFileSync(n,"utf8").match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m),r=(t==null?void 0:t[1])||(t==null?void 0:t[2]);if(r){if(l.isAbsolute(r)&&p.existsSync(r))return r;try{const{execFileSync:o}=require("child_process"),a=o("which",[r],{encoding:"utf8",stdio:["ignore","pipe","ignore"]}).trim();if(a&&p.existsSync(a))return a}catch{}}}}const Mt=5e3,Nt=100,Dt=15e3,jt=1e4,Ot=5e3;function Rt(e){if(!Number.isInteger(e)||e<1024||e>65535)throw new TypeError("port must be an integer from 1024 through 65535");return e}function K(e,n,t={}){const r=t.allowZero?0:Number.EPSILON;if(!Number.isFinite(e)||e<r){const o=t.allowZero?"non-negative":"positive";throw new TypeError(`${n} must be a finite ${o} number`)}return e}function Be(e){if(typeof e!="string"||e.length===0||e!==e.trim())throw new TypeError("webSocketDebuggerUrl must be a non-empty URL string");let n;try{n=new URL(e)}catch(t){throw new TypeError(`webSocketDebuggerUrl is invalid: ${t.message}`)}if(n.protocol!=="ws:"||n.hostname!=="127.0.0.1"||n.username||n.password||n.hash||!n.port)throw new TypeError("webSocketDebuggerUrl must use ws://127.0.0.1 with an explicit port");return Rt(Number(n.port)),n}function Bt(e,n){if(e===null||typeof e!="object"||Array.isArray(e)||e.type!=="page"||typeof e.url!="string"||typeof e.webSocketDebuggerUrl!="string")return!1;try{Be(e.webSocketDebuggerUrl)}catch{return!1}return e.url.includes(n)}function ve(e){if(e===null||typeof e!="object"||Array.isArray(e)||e.type!=="page"||typeof e.url!="string"||typeof e.webSocketDebuggerUrl!="string")return!1;try{return Be(e.webSocketDebuggerUrl),!0}catch{return!1}}function Lt(e){return new Promise(n=>setTimeout(n,e))}async function Pe(e,n){const t=Math.max(0,n.deadline-Date.now());let r=null;try{return await Promise.race([e,new Promise((o,a)=>{r=setTimeout(()=>{var s;(s=n.onTimeout)==null||s.call(n),a(new Error(`${n.label} timed out after ${n.timeoutMs}ms`))},t)})])}finally{r&&clearTimeout(r)}}async function G(e,n,t={}){const r=K(t.timeoutMs??Ot,"timeoutMs",{allowZero:!1}),o=t.fetchImpl??globalThis.fetch;if(typeof o!="function")throw new TypeError("fetchImpl must be a function");const a=`http://127.0.0.1:${e}/json/list`,s=new AbortController,d=Date.now()+r,i=t.quiet===!0;i||console.log(`[cdp] fetchRendererTargets: port=${e}, timeoutMs=${r}, endpoint=${a}`);let c;try{c=await Pe(Promise.resolve(o(a,{redirect:"error",signal:s.signal})),{deadline:d,timeoutMs:r,label:"renderer target discovery",onTimeout:()=>s.abort()})}catch(u){throw i||console.log("[cdp] fetchRendererTargets error:",u),new Error(`failed to fetch renderer targets from ${a}: ${u.message}`)}if(c===null||typeof c!="object"||!c.ok)throw new Error(`renderer target discovery failed with HTTP ${(c==null?void 0:c.status)??"unknown"}`);let m;try{m=await Pe(Promise.resolve(c.json()),{deadline:d,timeoutMs:r,label:"renderer target discovery JSON",onTimeout:()=>s.abort()})}catch(u){throw new Error(`malformed renderer target JSON from ${a}: ${u.message}`)}if(!Array.isArray(m))throw new Error("malformed renderer target JSON: expected an array");return m.filter(u=>Bt(u,n)).sort(Wt)}async function Ut(e,n,t={}){const r=K(t.timeoutMs??Mt,"timeoutMs",{allowZero:!0}),o=K(t.pollMs??Nt,"pollMs",{allowZero:!1}),a=t.fetchImpl??globalThis.fetch;let s=0;const d=Date.now()+r;let i=new Error("no renderer discovery attempt completed");for(console.log(`[cdp] waitForRendererTargets: port=${e}, hint=${n}, timeoutMs=${r}`);;){try{const m=Math.max(1,Math.min(r-s,d-Date.now()));console.log(`[cdp] Attempting fetch: elapsed=${s}ms, remainingBudget=${m}ms, deadline=${d}`);const u=await G(e,n,{fetchImpl:a,timeoutMs:m});if(u.length>0)return u;i=new Error("no matching renderer/index.html page targets")}catch(m){i=m instanceof Error?m:new Error(String(m)),console.log("[cdp] Fetch error:",i.message)}if(s>=r||Date.now()>=d)throw new Error(`timed out after ${r}ms waiting for renderer targets on 127.0.0.1:${e}: ${i.message}`);const c=Math.min(o,r-s);await Lt(c),s+=c}}class M{constructor(n,t={}){E(this,"webSocketDebuggerUrl");E(this,"WebSocketImpl");E(this,"commandTimeoutMs");E(this,"connectTimeoutMs");E(this,"socket",null);E(this,"nextRequestId",1);E(this,"pending",new Map);E(this,"socketOpen",!1);E(this,"opened",!1);E(this,"closed",!1);E(this,"closeStarted",!1);E(this,"terminalError",null);E(this,"openPromise",null);E(this,"resolveOpen",null);E(this,"rejectOpen",null);E(this,"connectTimer",null);this.webSocketDebuggerUrl=n;let r=null,o=null;try{r=require("ws")??null,r||(o="ws loaded but WebSocket is undefined")}catch(a){o=`ws require failed: ${(a==null?void 0:a.message)??a}`}if(!r)try{const a=require("undici");r=(a==null?void 0:a.WebSocket)??null,r||(o="undici loaded but WebSocket is undefined")}catch(a){o=`undici require failed: ${(a==null?void 0:a.message)??a}`}if(!r&&typeof globalThis.WebSocket=="function"&&(r=globalThis.WebSocket,o=null),!r){const a=o?` (${o})`:"";throw new Error(`No WebSocket implementation available for CDP${a}`)}this.WebSocketImpl=t.WebSocketImpl??r,this.commandTimeoutMs=K(t.commandTimeoutMs??Dt,"commandTimeoutMs"),this.connectTimeoutMs=K(t.connectTimeoutMs??jt,"connectTimeoutMs")}open(){if(this.closed)return Promise.reject(this.terminalError??new Error("CDP session is closed"));if(this.opened)return Promise.resolve(this);if(this.openPromise)return this.openPromise;this.openPromise=new Promise((t,r)=>{this.resolveOpen=t,this.rejectOpen=r}),this.connectTimer=setTimeout(()=>{this.terminate(new Error(`CDP WebSocket connect timed out after ${this.connectTimeoutMs}ms`)),this.closeSocket()},this.connectTimeoutMs);try{this.socket=new this.WebSocketImpl(this.webSocketDebuggerUrl)}catch(t){return this.terminate(new Error(`failed to open CDP WebSocket: ${t.message}`)),this.openPromise}const n=this.socket;return n.onopen=()=>{this.closed||this.socketOpen||(this.clearConnectTimer(),this.socketOpen=!0,Promise.all([this.send("Runtime.enable"),this.send("Page.enable")]).then(()=>{if(this.closed)return;this.opened=!0;const t=this.resolveOpen;this.resolveOpen=null,this.rejectOpen=null,t==null||t(this)}).catch(t=>{this.terminate(t),this.closeSocket()}))},n.onmessage=t=>this.handleMessage(t),n.onerror=t=>{const r=t.error,o=r instanceof Error?r.message:typeof t.message=="string"&&t.message.length>0?t.message:"unknown socket error";this.terminate(new Error(`CDP WebSocket error: ${o}`)),this.closeSocket()},n.onclose=()=>{this.closeStarted=!0,this.terminate(new Error("CDP WebSocket closed"))},this.openPromise}send(n,t={},r={}){if(this.closed)return Promise.reject(this.terminalError??new Error("CDP session is closed"));if(!this.socketOpen||!this.socket)return Promise.reject(new Error("CDP session is not open"));if(typeof n!="string"||n.length===0)return Promise.reject(new TypeError("CDP method must be a non-empty string"));const o=K(r.timeoutMs??this.commandTimeoutMs,"timeoutMs"),a=this.nextRequestId++;return new Promise((s,d)=>{const i=setTimeout(()=>{this.pending.delete(a),d(new Error(`CDP ${n} timed out after ${o}ms`))},o);this.pending.set(a,{resolve:s,reject:d,timer:i});try{this.socket.send(JSON.stringify({id:a,method:n,params:t}))}catch(c){clearTimeout(i),this.pending.delete(a),d(new Error(`failed to send CDP ${n}: ${c.message}`))}})}async evaluate(n,t={}){var o,a,s;if(typeof n!="string")throw new TypeError("Runtime.evaluate expression must be a string");const r=await this.send("Runtime.evaluate",{expression:n,awaitPromise:!0,returnByValue:!0},t);if(r!=null&&r.exceptionDetails)throw new Error(`Runtime.evaluate failed: ${((o=r.exceptionDetails.exception)==null?void 0:o.description)??r.exceptionDetails.text??"unknown JavaScript exception"}`);if(((a=r==null?void 0:r.result)==null?void 0:a.type)!=="undefined")return(s=r==null?void 0:r.result)==null?void 0:s.value}async addScriptToEvaluateOnNewDocument(n){const t=await this.send("Page.addScriptToEvaluateOnNewDocument",{source:n});return t==null?void 0:t.identifier}async removeScriptToEvaluateOnNewDocument(n){await this.send("Page.removeScriptToEvaluateOnNewDocument",{identifier:n})}close(){this.closeStarted||(this.terminate(new Error("CDP session closed by client")),this.closeSocket())}handleMessage(n){if(typeof n.data!="string"){this.terminate(new Error("received a non-text CDP WebSocket message")),this.closeSocket();return}let t;try{t=JSON.parse(n.data)}catch(o){this.terminate(new Error(`received malformed CDP JSON: ${o.message}`)),this.closeSocket();return}if(!Number.isInteger(t==null?void 0:t.id))return;const r=this.pending.get(t.id);if(r){if(this.pending.delete(t.id),clearTimeout(r.timer),t.error){r.reject(new Error(`CDP error: ${t.error.message}`));return}r.resolve(t.result)}}terminate(n){if(this.terminalError)return;this.clearConnectTimer(),this.terminalError=n,this.closed=!0,this.socketOpen=!1;const t=this.rejectOpen;this.resolveOpen=null,this.rejectOpen=null,t==null||t(n);for(const{reject:r,timer:o}of this.pending.values())clearTimeout(o),r(n);this.pending.clear()}clearConnectTimer(){this.connectTimer!==null&&(clearTimeout(this.connectTimer),this.connectTimer=null)}closeSocket(){if(this.closeStarted||(this.closeStarted=!0,!this.socket||typeof this.socket.close!="function"))return;const n=this.WebSocketImpl.CLOSING??2,t=this.WebSocketImpl.CLOSED??3;this.socket.readyState===n||this.socket.readyState===t||this.socket.close()}}function Wt(e,n){const t=[String(e.id??""),e.url,e.webSocketDebuggerUrl],r=[String(n.id??""),n.url,n.webSocketDebuggerUrl];for(let o=0;o<t.length;o++){if(t[o]<r[o])return-1;if(t[o]>r[o])return 1}return 0}function Ft(){return l.join(C.app.getAppPath(),"themes")}function Le(){const e=l.join(C.app.getPath("userData"),"themes");return p.mkdirSync(e,{recursive:!0}),e}function Ht(){return[Le(),Ft()]}const _e=new Map;function ie(e){const n=[],t=new Set;for(const o of Ht()){if(!p.existsSync(o))continue;const a=p.readdirSync(o,{withFileTypes:!0});for(const s of a){if(!s.isDirectory())continue;const d=l.join(o,s.name),i=l.join(d,"theme.json");if(p.existsSync(i))try{const c=JSON.parse(p.readFileSync(i,"utf-8")),m=Qt(c);if(t.has(m.id))continue;const u=l.join(d,m.hero);if(!p.existsSync(u)||!p.statSync(u).isFile())throw new Error(`theme hero is missing: ${m.hero}`);if(e&&!Kt(m,e))continue;t.add(m.id),n.push({id:m.id,name:m.name,author:m.author,path:d,manifest:m})}catch(c){console.error(`Failed to load theme ${s.name}:`,c)}}}const r=new Map;for(const o of n){const a=l.join(o.path,o.manifest.hero),s=he(a),d=`${o.name.trim().toLocaleLowerCase()}\0${o.author.trim().toLocaleLowerCase()}\0${s}`,i=r.get(d);(!i||zt(o.id,i.id))&&r.set(d,o)}return[...r.values()].sort((o,a)=>o.name.localeCompare(a.name))}function Kt(e,n){var r,o;const t=(r=e.apps[n])==null?void 0:r.compat;return t!==void 0?t:((o=D(n))==null?void 0:o.acceptsGenericThemes)===!0}function he(e){const n=p.statSync(e),t=_e.get(e);if(t&&t.size===n.size&&t.mtimeMs===n.mtimeMs)return t.hash;const r=ye.createHash("sha256").update(p.readFileSync(e)).digest("hex");return _e.set(e,{size:n.size,mtimeMs:n.mtimeMs,hash:r}),r}function zt(e,n){const t=e.startsWith("custom-"),r=n.startsWith("custom-");return t!==r?!t:e.length<n.length||e.length===n.length&&e.localeCompare(n)<0}function Ue(e,n){return ie(n).find(t=>t.id===e)}function Gt(e){const n=Ue(e);if(!n)return;const t=l.resolve(n.path,n.manifest.hero);if(t.startsWith(`${l.resolve(n.path)}${l.sep}`))return t}function qt(e){return`theme-asset://local/${encodeURIComponent(e)}`}function Jt(e){const n=l.join(e.path,e.manifest.hero),t=p.readFileSync(n);return`data:${Vt(e.manifest.hero)};base64,${t.toString("base64")}`}function Xt(e,n,t){const r=he(t);return ie().some(o=>o.name.trim().toLowerCase()!==e.trim().toLowerCase()||o.author.trim().toLowerCase()!==n.trim().toLowerCase()?!1:he(l.join(o.path,o.manifest.hero))===r)}function Qt(e){if(typeof e!="object"||e===null||Array.isArray(e))throw new Error("theme manifest must be an object");if(e.schemaVersion!==1)throw new Error(`unsupported theme schema ${e.schemaVersion}`);if(typeof e.id!="string"||!/^[a-z0-9-]+$/.test(e.id))throw new Error("theme id must use lowercase letters, numbers, and hyphens");if(typeof e.name!="string"||!e.name.trim())throw new Error("theme name must be a non-empty string");if(typeof e.author!="string")throw new Error("theme author must be a string");if(typeof e.hero!="string")throw new Error("theme hero must be a string");if(typeof e.colors!="object"||e.colors===null)throw new Error("theme colors must be an object");const n=["accent","secondary","surface","text"];for(const t of n)if(typeof e.colors[t]!="string"||!/^#[0-9a-fA-F]{6}$/.test(e.colors[t]))throw new Error(`theme color ${t} must be a hex color`);return{schemaVersion:1,id:e.id,name:e.name.trim(),author:e.author,hero:e.hero,colors:{accent:e.colors.accent,secondary:e.colors.secondary,surface:e.colors.surface,text:e.colors.text},copy:e.copy??void 0,apps:e.apps??{}}}function Vt(e){const n=l.extname(e).toLowerCase();return{".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".gif":"image/gif"}[n]||"image/png"}const We=5,Zt=32*1024*1024;let Y=null;function ce(){try{const e=JSON.parse(p.readFileSync(Fe(),"utf8"));return $e(e)}catch{return[]}}function Yt(e){const n=$e(e),t=[...ce()];for(const o of n){const a=t.findIndex(s=>s.id===o.id);a>=0?t[a]=o:t.push(o)}const r=t.slice(0,We);return Ce(r),r}function ge(e){if(!/^custom-[a-z0-9-]+$/i.test(e))throw new Error("Invalid custom theme id");const n=ce().filter(t=>t.id!==e);return Ce(n),console.log(`[custom-theme-store] Deleted ${e}; ${n.length} custom themes remain`),n}function en(e,n,t,r=4){const o=Ke()[e]??{};return[...n].sort((a,s)=>{if(a===t)return-1;if(s===t)return 1;const d=o[a]??{count:0,lastUsedAt:0},i=o[s]??{count:0,lastUsedAt:0};return i.count-d.count||i.lastUsedAt-d.lastUsedAt}).slice(0,r)}function be(e,n){if(!/^[a-z0-9-]+$/i.test(e)||!/^[a-z0-9-]+$/i.test(n))return;const t=Ke(),r=t[e]??{},o=r[n]??{count:0};r[n]={count:o.count+1,lastUsedAt:Date.now()},t[e]=r,ze(He(),t)}function tn(){return Y||(Y=new Promise((e,n)=>{const t=ye.randomBytes(24).toString("hex"),r=je.createServer((o,a)=>{var d;if(a.setHeader("Access-Control-Allow-Origin","*"),a.setHeader("Access-Control-Allow-Headers","Authorization, Content-Type"),a.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),a.setHeader("Access-Control-Allow-Private-Network","true"),o.method==="OPTIONS"){a.writeHead(204).end();return}if(o.headers.authorization!==`Bearer ${t}`){a.writeHead(401).end("Unauthorized");return}if(o.url==="/theme-usage"&&o.method==="POST"){le(o,a,i=>{if(typeof(i==null?void 0:i.appId)!="string"||typeof(i==null?void 0:i.themeId)!="string")throw new Error("Invalid theme usage payload");be(i.appId,i.themeId),q(a,200,{success:!0})});return}if(o.url==="/custom-themes/delete"&&o.method==="POST"){le(o,a,i=>{if(typeof(i==null?void 0:i.themeId)!="string"||!/^custom-[a-z0-9-]+$/i.test(i.themeId))throw new Error("Invalid custom theme id");const c=ge(i.themeId);q(a,200,c)});return}const s=(d=o.url)==null?void 0:d.match(/^\/custom-themes\/([a-z0-9-]+)$/i);if(s&&o.method==="DELETE"){const i=decodeURIComponent(s[1]),c=ge(i);q(a,200,c);return}if(o.url!=="/custom-themes"){a.writeHead(404).end("Not found");return}if(o.method==="GET"){q(a,200,ce());return}if(o.method!=="PUT"){a.writeHead(405).end("Method not allowed");return}le(o,a,i=>{const c=$e(i);Ce(c),q(a,200,c)})});r.once("error",n),r.listen(0,"127.0.0.1",()=>{const o=r.address();if(!o||typeof o=="string"){r.close(),n(new Error("Shared custom theme service did not expose a TCP port"));return}const a=`http://127.0.0.1:${o.port}`;e({endpoint:`${a}/custom-themes`,usageEndpoint:`${a}/theme-usage`,token:t})})}),Y)}function Fe(){return l.join(C.app.getPath("userData"),"custom-themes.json")}function He(){return l.join(C.app.getPath("userData"),"theme-usage.json")}function Ce(e){ze(Fe(),e)}function Ke(){try{const e=JSON.parse(p.readFileSync(He(),"utf8"));return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}}function ze(e,n){p.mkdirSync(l.dirname(e),{recursive:!0}),p.writeFileSync(e,`${JSON.stringify(n,null,2)}
`)}function le(e,n,t){let r=0;const o=[];e.on("data",a=>{if(r+=a.length,r>Zt){n.writeHead(413).end("Payload too large"),e.destroy();return}o.push(a)}),e.on("end",()=>{if(!n.headersSent)try{t(JSON.parse(Buffer.concat(o).toString("utf8")))}catch(a){n.writeHead(400).end(a.message)}})}function $e(e){if(!Array.isArray(e))throw new Error("Custom themes must be an array");return e.slice(0,We).map((n,t)=>{var o;if(!n||typeof n!="object")throw new Error(`Invalid custom theme at index ${t}`);const r=n;if(typeof r.id!="string"||!/^custom-[a-z0-9-]+$/i.test(r.id))throw new Error(`Invalid custom theme id at index ${t}`);if(typeof r.name!="string"||!r.name.trim())throw new Error(`Invalid custom theme name at index ${t}`);if(typeof r.dataUrl!="string"||!/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(r.dataUrl))throw new Error(`Invalid custom theme image at index ${t}`);for(const a of["accent","secondary","surface","text"])if(typeof((o=r.colors)==null?void 0:o[a])!="string"||!/^#[0-9a-f]{6}$/i.test(r.colors[a]))throw new Error(`Invalid custom theme color ${a} at index ${t}`);return{id:r.id,name:r.name.trim(),dataUrl:r.dataUrl,colors:{accent:r.colors.accent,secondary:r.colors.secondary,surface:r.colors.surface,text:r.colors.text}}})}function q(e,n,t){e.writeHead(n,{"Content-Type":"application/json; charset=utf-8"}),e.end(JSON.stringify(t))}const _="dream-work-style",T="dream-work-menu",Q=new Map,X=new Map,L=new Map,oe=new Map,de=new Map,ee=new Map,fe=new Map,ae=new Map,H=new Map,R="dream-work-theme:kimi:restored",z="dream-work-theme:kimi:action-at",Ge=new Set,w={id:"wb-dream-sentinel-id",hero:"data:image/png;base64,WBDREAMHEROSENTINEL",accent:"#010203",secondary:"#040506",surface:"#070809",text:"#0a0b0c"};let te=null;async function nn(){if(!te)try{const e=l.resolve(__dirname,"manager","codex-dream-skin.css");te=await lt.readFile(e,"utf-8")}catch(e){console.warn("[injector] Failed to load Codex base CSS:",e.message),te=""}return te}async function qe(e,n,t,r={}){const o=D(e),a=r.rendererUrlHint?[r.rendererUrlHint]:(o==null?void 0:o.rendererHints)??["renderer/index.html","index.html"];let s=[],d="No renderer targets found";for(const i of a)try{if(console.log(`[injector] Trying hint "${i}" on port ${t}`),s=await Ut(t,i,{timeoutMs:2e4,pollMs:500}),s.length>0){console.log(`[injector] Found ${s.length} targets with hint "${i}"`);break}}catch(c){d=c.message,console.log(`[injector] Hint "${i}" failed: ${c.message}`)}if(e==="kimi")try{const i=await Se(t);i.length>0&&(s=i),await on(s)}catch(i){console.log(`[injector] Failed to collect all Kimi targets: ${i.message}`)}if(s.length===0)try{console.log(`[injector] Strict hints failed, trying relaxed page-target fallback on port ${t}`);const c=await(await fetch(`http://127.0.0.1:${t}/json/list`,{signal:AbortSignal.timeout(5e3)})).json(),m=(Array.isArray(c)?c:[]).filter(ve).sort((u,h)=>{const g=[String(u.id??""),u.url,u.webSocketDebuggerUrl],x=[String(h.id??""),h.url,h.webSocketDebuggerUrl];for(let I=0;I<g.length;I++){if(g[I]<x[I])return-1;if(g[I]>x[I])return 1}return 0});m.length>0&&(console.log(`[injector] Relaxed fallback found ${m.length} page targets`),s=m)}catch(i){console.log(`[injector] Relaxed fallback failed: ${i.message}`)}if(s.length===0)return{success:!1,applied:0,error:d};try{const i=ie(e);if(console.log(`[injector] Loaded ${i.length} themes`),!i.some(b=>b.id===n))return{success:!1,applied:0,error:`Theme ${n} is not compatible with ${e}`};const c=en(e,i.map(b=>b.id),n),m=new Map(i.map(b=>[b.id,b])),u=c.map(b=>m.get(b)).filter(Boolean),h=new Map;for(const b of u)h.set(b.id,{name:b.name,css:Me(e,b.manifest,Jt(b)),surface:b.manifest.colors.surface});const g=Array.from(h.entries()).map(([b,k])=>{var N;return{id:b,name:k.name,css:k.css,surface:k.surface,accent:((N=i.find(f=>f.id===b))==null?void 0:N.manifest.colors.accent)??"#24c9d7"}});let x=ce();if(x.length===0){const b=e==="workbuddy"?"dreamCustomThemes":"dreamCodexCustomThemes";for(const k of s){const N=new M(k.webSocketDebuggerUrl);try{await N.open();const f=await N.evaluate(`(() => localStorage.getItem(${JSON.stringify(b)}) || '[]')()`),$=JSON.parse(f).filter(v=>!Ge.has(v==null?void 0:v.id));if(Array.isArray($)&&$.length>0){x=Yt($);break}}catch(f){console.warn(`[injector] Failed to import existing custom themes from ${e} target ${k.id}:`,f)}finally{N.close()}}}const I=await tn(),A=e==="workbuddy"?En({styleId:_,menuId:T,currentThemeId:n,themes:g,sharedCustomThemes:x,sharedCustomThemeService:I,cssTemplate:Qe({id:w.id,colors:{accent:w.accent,secondary:w.secondary,surface:w.surface,text:w.text},copy:null},w.hero,{accent:w.accent,secondary:w.secondary,surface:w.surface,text:w.text})}):e==="hana-agent"?vn({styleId:_,menuId:T,currentThemeId:n,themes:g,sharedCustomThemes:x,sharedCustomThemeService:I,cssTemplate:Xe({id:w.id,colors:{accent:w.accent,secondary:w.secondary,surface:w.surface,text:w.text}},w.hero,{accent:w.accent,secondary:w.secondary,surface:w.surface,text:w.text})}):In({styleId:_,menuId:T,currentThemeId:n,appId:e,themes:g,sharedCustomThemes:x,sharedCustomThemeService:I,cssTemplate:Me(e,{id:w.id,colors:{accent:w.accent,secondary:w.secondary,surface:w.surface,text:w.text}},w.hero)});let U=0;for(const b of s)try{console.log(`[injector] Injecting to target ${b.id}: ${b.url}`);const k=new M(b.webSocketDebuggerUrl);if(await k.open(),e==="workbuddy"){let f=!1;const $=Date.now()+15e3;for(;Date.now()<$&&(f=await k.evaluate(`(() => {
              const body = document.body;
              return body?.dataset.applicationName === 'workbuddy' && Boolean(
                document.querySelector('[data-view-id], .teams-container, .conversation-list, .main-content')
              );
            })()`).catch(()=>!1),!f);)await new Promise(v=>setTimeout(v,100));if(!f){console.warn(`[injector] Skipping non-WorkBuddy target ${b.id}: ${b.url}`),k.close();continue}}if(e==="codex"){const f=await nn();f&&await k.evaluate(`(() => {
              const existing = document.getElementById('codex-dream-skin-base');
              if (!existing) {
                const style = document.createElement('style');
                style.id = 'codex-dream-skin-base';
                style.textContent = ${JSON.stringify(f)};
                document.head.appendChild(style);
              }
            })()`)}if(e==="hana-agent"||e==="kimi"||e==="doubao"){const f=`(() => {
            const inject = () => ${A};
            if (document.readyState === 'loading') {
              window.addEventListener('DOMContentLoaded', inject, { once: true });
            } else {
              inject();
            }
          })()`,$=e==="hana-agent"?Q:e==="kimi"?oe:fe,v=$.get(b.id);v&&await k.removeScriptToEvaluateOnNewDocument(v).catch(()=>{});const F=await k.addScriptToEvaluateOnNewDocument(f);F&&$.set(b.id,F)}const N=await k.evaluate(e==="hana-agent"?`(() => { window.__dreamWorkForceApply = true; return ${A}; })()`:A);if(console.log(`[injector] Injection result for target ${b.id}:`,N),e==="hana-agent"){let f=!1;for(let $=0;$<20&&(f=await k.evaluate(`(() => {
              const host = document.getElementById('${T}-host');
              return Boolean(
                document.getElementById('${_}') &&
                host?.shadowRoot?.getElementById('${T}') &&
                document.documentElement.dataset.dreamTheme
              );
            })()`).catch(()=>!1),!f);$++)await new Promise(v=>setTimeout(v,100));if(!f){console.warn(`[injector] HanaAgent injection did not become ready for target ${b.id}`),k.close();continue}}if(e==="codex")for(let f=1;f<=4;f++){const $=await k.evaluate(`(() => {
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
            })`);if($.homeClasses&&$.homeClasses.includes("dream-skin-home")){console.log(`[injector] Codex home detection for ${b.id}: attempt=${f}`,JSON.stringify($));break}f<4&&await new Promise(v=>setTimeout(v,800))}if(e==="codex")try{const f=await k.evaluate(`(() => {
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
            })()`);console.log(`[injector] Codex debug info for ${b.id}:`,JSON.stringify(f,null,2))}catch(f){console.error(`[injector] Failed to get debug info for ${b.id}:`,f)}k.close(),U++}catch(k){console.error(`[injector] Failed to inject to target ${b.id}:`,k)}if(e==="hana-agent"&&U>0){const b=new Set(s.map($=>$.id)),k=Date.now()+2e4;let N="",f=0;for(;Date.now()<k;){let $=[];try{$=await G(t,".hanako/artifacts/renderer/",{timeoutMs:2e3,quiet:!0})}catch{}const v=$[0];if(!v){N="",f=0,await new Promise(B=>setTimeout(B,250));continue}if(!b.has(v.id)){console.log(`[injector] HanaAgent created renderer target ${v.id}; injecting theme`);const B=new M(v.webSocketDebuggerUrl);try{await B.open();const et=`(() => {
              const inject = () => ${A};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,Ee=await B.addScriptToEvaluateOnNewDocument(et);Ee&&Q.set(v.id,Ee),await B.evaluate(`(() => { window.__dreamWorkForceApply = true; return ${A}; })()`),b.add(v.id)}finally{B.close()}}const F=new M(v.webSocketDebuggerUrl);let Te=!1;try{await F.open(),Te=await F.evaluate(`(() => {
            const host = document.getElementById('${T}-host');
            return Boolean(document.getElementById('${_}') && host?.shadowRoot?.getElementById('${T}') && document.documentElement.dataset.dreamTheme);
          })()`)}catch{}finally{F.close()}if(Te){if(N!==v.id)N=v.id,f=Date.now();else if(Date.now()-f>=2e3)return mn(t,A,b),be(e,n),{success:!0,applied:1}}else N="",f=0;await new Promise(B=>setTimeout(B,250))}return{success:!1,applied:0,error:"HanaAgent renderer did not stabilize with the injected theme"}}return e==="kimi"&&U>0&&an(t,A,new Set(s.map(b=>b.id))),e==="doubao"&&U>0&&rn(t,A),U>0&&be(e,n),{success:U>0,applied:U}}catch(i){return console.error("[injector] Injection failed:",i),{success:!1,applied:0,error:i.message}}}async function Se(e){const n=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(2e3)});if(!n.ok)throw new Error(`HTTP ${n.status}`);const t=await n.json();return(Array.isArray(t)?t:[]).filter(r=>{if((r==null?void 0:r.type)!=="page"||!r.webSocketDebuggerUrl)return!1;const o=String(r.url??"");return o.includes("kimi-agent.html")||o.includes("kimichat.html")||/^https:\/\/(?:www\.)?kimi\.com\//.test(o)})}function rn(e,n){var s;const t=ae.get(e);t&&clearInterval(t);const r=(H.get(e)??0)+1;H.set(e,r);let o=!1;const a=setInterval(async()=>{if(!(o||H.get(e)!==r)){o=!0;try{const d=await G(e,"doubao://doubao-chat/chat",{timeoutMs:2e3,quiet:!0});for(const i of d){const c=new M(i.webSocketDebuggerUrl);try{await c.open();const m=await c.evaluate(`(() => ({
            restored: document.documentElement.dataset.dreamThemeRestored === 'true' || (() => {
              try { return localStorage.getItem('dream-work-theme:doubao:restored') === '1'; } catch { return false; }
            })(),
            ready: Boolean(document.getElementById('${_}')?.textContent && document.documentElement.dataset.dreamTheme)
          }))()`).catch(()=>({restored:!1,ready:!1}));!m.restored&&!m.ready&&(console.log(`[injector] Doubao renderer ${i.id} lost theme after navigation; reinjecting`),await c.evaluate(n))}finally{c.close()}}}catch(d){H.get(e)===r&&console.warn("[injector] Doubao watcher check failed:",d.message)}finally{o=!1}}},500);(s=a.unref)==null||s.call(a),ae.set(e,a)}async function on(e){for(const n of e){const t=new M(n.webSocketDebuggerUrl);try{await t.open(),await t.evaluate(`(() => {
        try { localStorage.removeItem('${R}'); } catch {}
        delete document.documentElement.dataset.dreamThemeRestored;
        return true;
      })()`)}finally{t.close()}}}function an(e,n,t){const r=de.get(e);r&&clearInterval(r);const o=(ee.get(e)??0)+1;ee.set(e,o);let a=!1;const s=setInterval(async()=>{var d;if(!(a||ee.get(e)!==o)){a=!0;try{const i=await Se(e),c=[];for(const h of i){const g=new M(h.webSocketDebuggerUrl);try{await g.open();const x=await g.evaluate(`(() => {
            let storedRestored = false;
            let actionAt = 0;
            try {
              storedRestored = localStorage.getItem('${R}') === '1';
              actionAt = Number(localStorage.getItem('${z}') || '0');
            } catch {}
            const themeId = document.documentElement.dataset.dreamTheme || '';
            return {
              restored: document.documentElement.dataset.dreamThemeRestored === 'true' || storedRestored,
              themeId,
              actionAt,
              ready: Boolean(document.getElementById('${_}')?.textContent && themeId)
              ,deleteCustomThemeId: window.__dreamWorkDeleteCustomThemeId || ''
            };
          })()`).catch(()=>({restored:!1,themeId:"",actionAt:0,ready:!1,deleteCustomThemeId:""}));c.push({target:h,...x})}finally{g.close()}}const m=(d=c.find(h=>h.deleteCustomThemeId))==null?void 0:d.deleteCustomThemeId;if(m){const h=ge(m);Ge.add(m),await sn(i,h,m)}const u=[...c].sort((h,g)=>g.actionAt-h.actionAt)[0];if(u!=null&&u.restored){console.log("[injector] Kimi watcher observed restore state; preserving menus without theme"),await cn(i,n,t,u.actionAt);return}if(u!=null&&u.ready&&u.themeId&&c.some(h=>h.restored||!h.ready||h.themeId!==u.themeId)){console.log(`[injector] Kimi watcher synchronizing selected theme ${u.themeId} across targets`),await ln(i,n,t,u.themeId,u.actionAt);return}for(const h of i){if(ee.get(e)!==o)return;const g=new M(h.webSocketDebuggerUrl);try{await g.open();const x=await g.evaluate(`(() => ({
            ready: Boolean(document.getElementById('${_}') && document.documentElement.dataset.dreamTheme),
            restored: document.documentElement.dataset.dreamThemeRestored === 'true'
          }))()`).catch(()=>({ready:!1,restored:!1}));if(x.ready||x.restored){t.add(h.id);continue}if(console.log(`[injector] Kimi watcher restoring theme on target ${h.id}: ${h.url}`),!t.has(h.id)){const I=`(() => {
              const inject = () => ${n};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,A=await g.addScriptToEvaluateOnNewDocument(I);A&&oe.set(h.id,A)}await g.evaluate(n),t.add(h.id)}finally{g.close()}}}catch{await Je(e)||(clearInterval(s),de.delete(e))}finally{a=!1}}},750);s.unref(),de.set(e,s)}async function sn(e,n,t){const r=JSON.stringify(n);for(const o of e){const a=new M(o.webSocketDebuggerUrl);try{await a.open(),await a.evaluate(`(() => {
        delete window.__dreamWorkDeleteCustomThemeId;
        try { localStorage.setItem('dreamCodexCustomThemes', ${JSON.stringify(r)}); } catch {}
        const host = document.getElementById('${T}-host');
        const menu = host?.shadowRoot?.getElementById('${T}');
        for (const row of Array.from(menu?.querySelectorAll('div') || [])) {
          if (row.dataset?.customThemeId === ${JSON.stringify(t)}) row.remove();
        }
        window.__dreamTheme?.replaceCustomThemes?.(${r});
        return true;
      })()`)}finally{a.close()}}}async function cn(e,n,t,r){for(const o of e){const a=new M(o.webSocketDebuggerUrl);try{if(await a.open(),!oe.has(o.id)){const d=`(() => {
          const inject = () => ${n};
          if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
          else inject();
        })()`,i=await a.addScriptToEvaluateOnNewDocument(d);i&&oe.set(o.id,i)}await a.evaluate(`(() => {
        try { localStorage.setItem('${R}', '1'); } catch {}
        try { localStorage.setItem('${z}', '${r}'); } catch {}
        document.documentElement.dataset.dreamThemeRestored = 'true';
        return true;
      })()`),await a.evaluate(`(() => {
        const host = document.getElementById('${T}-host');
        return Boolean(host?.shadowRoot?.getElementById('${T}'));
      })()`).catch(()=>!1)||await a.evaluate(n),await a.evaluate(`(() => {
        try { localStorage.setItem('${R}', '1'); } catch {}
        try { localStorage.setItem('${z}', '${r}'); } catch {}
        document.documentElement.dataset.dreamThemeRestored = 'true';
        const style = document.getElementById('${_}');
        if (style) style.textContent = '';
        delete document.documentElement.dataset.dreamTheme;
        delete document.documentElement.dataset.dreamShell;
        return true;
      })()`),t.add(o.id)}finally{a.close()}}}async function ln(e,n,t,r,o){for(const a of e){const s=new M(a.webSocketDebuggerUrl);try{await s.open(),await s.evaluate(`(() => {
        try {
          localStorage.removeItem('${R}');
          localStorage.setItem('${z}', '${o}');
        } catch {}
        delete document.documentElement.dataset.dreamThemeRestored;
        return true;
      })()`),await s.evaluate("(() => Boolean(window.__dreamTheme?.activateTheme))()").catch(()=>!1)||await s.evaluate(n),await s.evaluate(`(() => window.__dreamTheme?.activateTheme(${JSON.stringify(r)}, ${o}))()`),t.add(a.id)}finally{s.close()}}}async function dn(e,n,t={}){return un(e,n,t)}function mn(e,n,t){const r=X.get(e);r&&clearInterval(r);const o=(L.get(e)??0)+1;L.set(e,o);let a=!1;const s=setInterval(async()=>{if(!a&&L.get(e)===o){a=!0;try{const i=(await G(e,".hanako/artifacts/renderer/",{timeoutMs:1e3,quiet:!0}))[0];if(!i||L.get(e)!==o)return;const c=new M(i.webSocketDebuggerUrl);try{await c.open();const m=await c.evaluate(`(() => {
          const host = document.getElementById('${T}-host');
          if (document.documentElement.dataset.dreamThemeRestored === 'true') return 'restored';
          return document.getElementById('${_}') && host?.shadowRoot?.getElementById('${T}') && document.documentElement.dataset.dreamTheme
            ? 'ready'
            : 'missing';
        })()`).catch(()=>"missing");if(m==="ready"||m==="restored"){t.add(i.id);return}if(console.log(`[injector] HanaAgent watcher restoring theme on renderer target ${i.id}`),L.get(e)!==o)return;const u=`(() => {
          const inject = () => ${n};
          if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
          else inject();
        })()`;if(!t.has(i.id)){const h=await c.addScriptToEvaluateOnNewDocument(u);h&&Q.set(i.id,h)}if(await c.evaluate(n),L.get(e)!==o){await c.evaluate(`(() => {
            document.getElementById('${_}')?.remove();
            document.getElementById('${T}-host')?.remove();
            clearInterval(window.__dreamWorkMenuGuard);
            delete window.__dreamWorkMenuGuard;
            delete document.documentElement.dataset.dreamTheme;
          })()`).catch(()=>{});return}t.add(i.id)}finally{c.close()}}catch{await Je(e)||(clearInterval(s),X.delete(e))}finally{a=!1}}},1e3);X.set(e,s)}async function Je(e){try{return(await fetch(`http://127.0.0.1:${e}/json/version`,{signal:AbortSignal.timeout(500)})).ok}catch{return!1}}async function un(e,n,t={}){var d;const r=t.rendererUrlHint?[t.rendererUrlHint]:((d=D(e))==null?void 0:d.rendererHints)??["renderer/index.html","index.html"];let o=[];for(const i of r)try{if(o=await G(n,i,{timeoutMs:1e3,quiet:!0}),o.length>0)break}catch{}if(o.length===0)try{const c=await(await fetch(`http://127.0.0.1:${n}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();o=(Array.isArray(c)?c:[]).filter(ve).sort((m,u)=>{const h=[String(m.id??""),m.url,m.webSocketDebuggerUrl],g=[String(u.id??""),u.url,u.webSocketDebuggerUrl];for(let x=0;x<h.length;x++){if(h[x]<g[x])return-1;if(h[x]>g[x])return 1}return 0})}catch{}if(o.length===0)return{installed:!1,menu:!1,targets:0};const a=[];for(const i of o){const c=new M(i.webSocketDebuggerUrl);try{if(await c.open(),e==="workbuddy"&&!await c.evaluate("(() => document.body?.dataset.applicationName === 'workbuddy')()"))continue;const m=await c.evaluate(`(() => {
        const style = document.getElementById('${_}');
        const menuHost = document.getElementById('${T}-host');
        const menu = document.getElementById('${T}') || menuHost?.shadowRoot?.getElementById('${T}');
        return JSON.stringify({
          installed: Boolean(style),
          menu: Boolean(menu),
          themeId: document.documentElement.dataset.dreamTheme ?? undefined
        });
      })()`),u=JSON.parse(m);a.push(u)}catch(m){console.warn(`[injector] Status check failed for ${e} target ${i.id}:`,m)}finally{c.close()}}const s=a.find(i=>i.installed&&i.themeId)??a.find(i=>i.installed);return{installed:a.some(i=>i.installed),menu:a.some(i=>i.menu),themeId:s==null?void 0:s.themeId,targets:a.length}}async function pn(e,n,t={}){var s;const r=Date.now();if(e==="hana-agent"){L.set(n,(L.get(n)??0)+1);const d=X.get(n);d&&clearInterval(d),X.delete(n)}if(e==="doubao"){H.set(n,(H.get(n)??0)+1);const d=ae.get(n);d&&clearInterval(d),ae.delete(n)}const o=t.rendererUrlHint??((s=D(e))==null?void 0:s.rendererHints[0])??"renderer/index.html";let a=[];try{a=e==="kimi"?await Se(n):await G(n,o)}catch{}if(a.length===0)try{const i=await(await fetch(`http://127.0.0.1:${n}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();a=(Array.isArray(i)?i:[]).filter(ve).sort((c,m)=>{const u=[String(c.id??""),c.url,c.webSocketDebuggerUrl],h=[String(m.id??""),m.url,m.webSocketDebuggerUrl];for(let g=0;g<u.length;g++){if(u[g]<h[g])return-1;if(u[g]>h[g])return 1}return 0})}catch{}if(a.length===0)return{success:!1};for(const d of e==="hana-agent"||e==="kimi"||e==="agnes-code"?a:a.slice(0,1)){const i=new M(d.webSocketDebuggerUrl);if(await i.open(),e==="hana-agent"){const c=Q.get(d.id);c&&(await i.removeScriptToEvaluateOnNewDocument(c).catch(()=>{}),Q.delete(d.id))}if(e==="doubao"){const c=fe.get(d.id);c&&(await i.removeScriptToEvaluateOnNewDocument(c).catch(()=>{}),fe.delete(d.id))}await i.evaluate(`(async () => {
      ${e==="hana-agent"?`try { localStorage.setItem('dream-work-theme:hana-agent:restored', '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';`:""}
      ${e==="doubao"?"document.documentElement.dataset.dreamThemeRestored = 'true';":""}
      ${e==="doubao"?"try { localStorage.setItem('dream-work-theme:doubao:restored', '1'); } catch {}":""}
      ${e==="kimi"?`try { localStorage.setItem('${R}', '1'); } catch {}
      try { localStorage.setItem('${z}', '${r}'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';`:""}
      ${e==="kimi"?`const style = document.getElementById('${_}');
      if (style) style.textContent = '';`:`document.getElementById('${_}')?.remove();
      document.getElementById('${T}')?.remove();
      document.getElementById('${T}-host')?.remove();
      clearInterval(window.__dreamWorkMenuGuard);
      delete window.__dreamWorkMenuGuard;
      if (window.__dreamWorkOutsideClick) {
        document.removeEventListener('pointerdown', window.__dreamWorkOutsideClick, true);
        delete window.__dreamWorkOutsideClick;
      }`}
      ${e==="minimax-code"||e==="agnes-code"||e==="astronclaw"?"await window.__dreamWorkRestoreNativeMode?.();":""}
      delete document.documentElement.dataset.dreamTheme;
      delete document.documentElement.dataset.dreamShell;
      return true;
    })`),i.close()}return{success:!0}}function Me(e,n,t){var a,s,d,i;const r={accent:((a=n.colors)==null?void 0:a.accent)??"#24c9d7",secondary:((s=n.colors)==null?void 0:s.secondary)??"#ef8fd3",surface:((d=n.colors)==null?void 0:d.surface)??"#f7fbff",text:((i=n.colors)==null?void 0:i.text)??"#17344f"};if(e==="codex")return Sn(n,t,r);const o=D(e);return(o==null?void 0:o.kind)==="vscode-work"?hn(n,t,r):(o==null?void 0:o.kind)==="generic-work"?e==="hana-agent"?Xe(n,t,r):e==="kimi"?kn(n,t,r):gn(e,n,t,r):Qe({...n,copy:null},t,r)}function hn(e,n,t){return`/* DREAM_THEME:${e.id} */
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
`}function gn(e,n,t,r){const o={"qoder-work":'#root > div, [class*="layout"], [class*="content-area"], [class*="main-content"]',catpaw:".main-area, .main-content-container, .main-content, .chat-content-area",zcode:'main, main > div, [class*="min-h-0"][class*="flex-1"]',"qwen-office":".agents-content-area, .agents-parchment-paper-surface","agnes-code":":not(*)","minimax-code":":not(*)",astronclaw:'.local-chat-shell, .local-chat-main, [class*="local-chat-content"]'},a={"qoder-work":'[class*="sidebar"]',catpaw:".sidebar-wrapper, .sidebar",zcode:"#sidebar, aside","qwen-office":".agents-sidebar, .group\\/sidebar","agnes-code":":not(*)","minimax-code":":not(*)",astronclaw:'.local-chat-rail, [class*="local-chat-sidebar"]'},s=o[e]??'main, [role="main"], [class*="main-content"]',d=a[e]??'aside, nav, [class*="sidebar"]',i=e==="qoder-work"?Cn(r):e==="catpaw"?$n(t,r):e==="opencode"?xn(r):e==="doubao"?yn(r):e==="agnes-code"?fn(t,r):e==="minimax-code"?wn(t,r):e==="astronclaw"?bn(t,r):"";return`/* DREAM_THEME:${n.id} */
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
${e==="doubao"||e==="astronclaw"?"":`:is(${s}) :where([class*="message"], [class*="bubble"], [class*="composer"], [class*="input-container"]) {
  background-color: color-mix(in srgb, ${r.surface} 88%, transparent) !important;
  backdrop-filter: blur(16px) saturate(108%);
}`}
:is(${s}) :where(p, span, li, h1, h2, h3, h4, strong, em) { color: ${r.text} !important; }
button[class*="bg-primary"], button[class*="bg-accent"] { background-color: ${r.accent} !important; color: #fff !important; }
${i}`}function bn(e,n){return`
:root {
  --background: ${n.surface} !important;
  --foreground: ${n.text} !important;
  --card: color-mix(in srgb, ${n.surface} 82%, transparent) !important;
  --card-foreground: ${n.text} !important;
  --popover: color-mix(in srgb, ${n.surface} 92%, transparent) !important;
  --popover-foreground: ${n.text} !important;
  --primary: ${n.accent} !important;
  --primary-foreground: #ffffff !important;
  --secondary: color-mix(in srgb, ${n.secondary} 22%, ${n.surface}) !important;
  --secondary-foreground: ${n.text} !important;
  --muted: color-mix(in srgb, ${n.surface} 76%, transparent) !important;
  --muted-foreground: color-mix(in srgb, ${n.text} 68%, transparent) !important;
  --accent: color-mix(in srgb, ${n.accent} 24%, ${n.surface}) !important;
  --accent-foreground: ${n.text} !important;
  --border: color-mix(in srgb, ${n.accent} 24%, transparent) !important;
  --input: color-mix(in srgb, ${n.surface} 72%, transparent) !important;
  --ring: ${n.accent} !important;
}
html,
body,
#root {
  min-height: 100% !important;
  background-color: ${n.surface} !important;
  background-image: url(${JSON.stringify(e)}) !important;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  color: ${n.text} !important;
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
  background-color: color-mix(in srgb, ${n.surface} 12%, transparent) !important;
  background-image: none !important;
  color: ${n.text} !important;
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
  color: ${n.text} !important;
  caret-color: ${n.accent} !important;
}
.local-chat-composer-stack {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-composer-card,
.local-chat-shell :where([class*="message-input"]):not(textarea):not(input):not([contenteditable="true"]) {
  background-color: color-mix(in srgb, ${n.surface} 48%, transparent) !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-shell :where([class*="message"], [class*="dialog"], [class*="popover"], [class*="panel"]) {
  border-color: color-mix(in srgb, ${n.accent} 22%, transparent) !important;
}
`}function fn(e,n){return`
:root {
  --agnes-surface: transparent !important;
  --agnes-sidebar: transparent !important;
  --agnes-sidebar-panel: transparent !important;
  --agnes-current-sidebar-bg: transparent !important;
  --color-background-secondary: transparent !important;
  --color-background-primary: transparent !important;
  --background-primary: transparent !important;
  --agnes-card-bg: color-mix(in srgb, ${n.surface} 18%, transparent) !important;
  --agnes-text: ${n.text} !important;
  --agnes-composer-hub-shell: color-mix(in srgb, ${n.surface} 78%, transparent) !important;
  --agnes-composer-input-bg: color-mix(in srgb, ${n.surface} 68%, transparent) !important;
  --agnes-composer-border: color-mix(in srgb, ${n.accent} 36%, transparent) !important;
  --agnes-brand: ${n.accent} !important;
}
html,
body,
#root,
#__next {
  background-color: ${n.surface} !important;
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
  color: ${n.text} !important;
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
  background: color-mix(in srgb, ${n.surface} 18%, transparent) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.agnes-shell div[class*="rounded-input-modal"] {
  background: color-mix(in srgb, ${n.surface} 72%, transparent) !important;
  border-color: color-mix(in srgb, ${n.accent} 34%, transparent) !important;
  backdrop-filter: blur(18px) saturate(112%) !important;
  -webkit-backdrop-filter: blur(18px) saturate(112%) !important;
}
.agnes-shell :where(input, textarea, [contenteditable="true"]) {
  color: ${n.text} !important;
  caret-color: ${n.accent} !important;
}
.agnes-shell :where(p, span, li, h1, h2, h3, h4, strong, em, label) {
  color: inherit;
}
`}function wn(e,n){return`
:root {
  --color-bg-grouped-secondary: transparent !important;
  --color-bg-primary: transparent !important;
  --color-bg-secondary: transparent !important;
  --color-bg-tertiary: color-mix(in srgb, ${n.surface} 72%, transparent) !important;
}
html,
body,
#root {
  min-height: 100% !important;
  background-color: ${n.surface} !important;
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
  background-color: color-mix(in srgb, ${n.surface} 62%, transparent) !important;
  background-image: none !important;
  border-color: color-mix(in srgb, ${n.accent} 30%, transparent) !important;
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
  caret-color: ${n.accent} !important;
}
#root :where(textarea, input, [contenteditable="true"]) {
  color: ${n.text} !important;
}
`}function xn(e){return`
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
}`}function yn(e){return`
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
}`}function Xe(e,n,t){return`/* DREAM_THEME:${e.id} */
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
}`}function kn(e,n,t){const r=t.accent;t.secondary;const o=t.surface,a=t.text;return`/* DREAM_THEME:${e.id} */
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
}`}function vn(e){return`(() => {
    const themes = ${JSON.stringify(e.themes)};
    const cssTemplate = ${JSON.stringify(e.cssTemplate)};
    const sentinels = ${JSON.stringify(w)};
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
  })()`}function Cn(e){return`
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
}`}function $n(e,n){return`
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
`}function Ne(e,n=""){return JSON.stringify(typeof e=="string"?e:n)}function Qe(e,n,t){var o,a;return`/* DREAM_THEME:${String(e.id??"custom").replace(/[^a-z0-9_-]/gi,"")} */
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
  content: ${Ne((o=e.copy)==null?void 0:o.brand)};
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
  content: ${Ne((a=e.copy)==null?void 0:a.headline)};
  color: var(--wb-text);
  font: 750 clamp(18px, 2.7vw, 42px)/1.15 ui-rounded, system-ui;
  text-shadow: 0 2px 12px white;
  pointer-events: none;
}`}function Sn(e,n,t){const r=Tn(t.surface),o=r?`color-mix(in srgb, ${t.surface} 90%, transparent)`:`color-mix(in srgb, ${t.surface} 86%, transparent)`,a=r?`color-mix(in srgb, ${t.accent} 16%, ${t.surface})`:`color-mix(in srgb, ${t.accent} 42%, ${t.surface})`,s=r?"#172033":`color-mix(in srgb, ${t.surface} 72%, #000000)`,d="#f2f6ff",i=`/* DREAM_THEME:${e.id} */
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
}`,c=`/* DREAM_THEME_BODY:${e.id} */
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
`+c}function Tn(e){const n=/^#([0-9a-f]{6})$/i.exec(e);if(!n)return!0;const t=parseInt(n[1],16);return .299*(t>>16&255)+.587*(t>>8&255)+.114*(t&255)>140}function En(e){return`(() => {
  const data = ${JSON.stringify({styleId:e.styleId,menuId:e.menuId,activeId:e.currentThemeId,themes:e.themes,cssTemplate:e.cssTemplate,sentinels:w,storageKey:"dreamCustomThemes",selectedKey:"wb-dream-selected",sharedCustomThemes:e.sharedCustomThemes,sharedCustomThemeService:e.sharedCustomThemeService})};
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
})()`}function In(e){const n=JSON.stringify(e.themes),t=JSON.stringify(e.cssTemplate??""),r=e.appId;return`(() => {
  const themes = ${n};
  const cssTemplate = ${t};
  const sentinels = ${JSON.stringify(w)};
  const currentThemeId = '${e.currentThemeId}';
  const appId = '${r}';
  const nativeModeKey = '__dreamWorkNativeMode';
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
  if (!window[nativeModeKey]) {
    const html = document.documentElement;
    const body = document.body;
    window[nativeModeKey] = {
      htmlClasses: Array.from(html.classList),
      bodyClasses: Array.from(body.classList),
      colorScheme: html.style.colorScheme,
      bodyThemeKind: body.dataset.vscodeThemeKind,
      bodyThemeName: body.dataset.vscodeThemeName,
    };
  }
  const restoreNativeMode = async () => {
    const nativeMode = window[nativeModeKey];
    if (!nativeMode) return;
    const html = document.documentElement;
    const body = document.body;
    let nativeDark = nativeMode.htmlClasses.includes('dark') || nativeMode.bodyClasses.includes('dark');
    if (appId === 'minimax-code' || appId === 'agnes-code' || appId === 'astronclaw') {
      try {
        if (appId === 'astronclaw') {
          const storedTheme = (await window.astronDesktop?.settings?.get?.())?.general?.theme;
          if (storedTheme === 'system') nativeDark = matchMedia('(prefers-color-scheme: dark)').matches;
          else if (storedTheme === 'dark') nativeDark = true;
          else if (storedTheme === 'light') nativeDark = false;
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
      localStorage.setItem('${z}', String(actionAt));
      if (restored) localStorage.setItem('${R}', '1');
      else localStorage.removeItem('${R}');
    } catch {}
    document.documentElement.dataset.dreamThemeRestored = restored ? 'true' : undefined;
    if (!restored) delete document.documentElement.dataset.dreamThemeRestored;
    return actionAt;
  };
  const applyTheme = (themeId, actionAt = Date.now()) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;
    markKimiAction(false, actionAt);
    if (appId === 'doubao') {
      try { localStorage.removeItem('dream-work-theme:doubao:restored'); } catch {}
      delete document.documentElement.dataset.dreamThemeRestored;
    }
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

  const restoreNative = async () => {
    markKimiAction(true);
    if (appId === 'doubao') {
      try { localStorage.setItem('dream-work-theme:doubao:restored', '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';
    }
    window.__dreamWorkThemeStyle.textContent = '';
    delete document.documentElement.dataset.dreamTheme;
    if (appId === 'minimax-code' || appId === 'agnes-code' || appId === 'astronclaw') await restoreNativeMode();
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
  let restoredAtStart = false;
  if (appId === 'kimi') {
    try { restoredAtStart = localStorage.getItem('${R}') === '1'; } catch {}
  }
  if (restoredAtStart) restoreNative();
  else applyTheme(currentThemeId);
  window.__dreamTheme = {
    ...(window.__dreamTheme || {}),
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
  };
  ensureInjectedNodes();
})()`}async function An(e){try{return y.platform()==="win32"?Pn(e):y.platform()==="darwin"?_n(e):y.platform()==="linux"?Mn(e):{success:!1,error:`Unsupported platform: ${y.platform()}`}}catch(n){return{success:!1,error:n.message}}}function Pn(e){const n=l.join(y.homedir(),"Desktop"),t=l.join(n,`${e.label}.lnk`),r=process.execPath,o=l.dirname(r),a=`
    $WshShell = New-Object -comObject WScript.Shell
    $Shortcut = $WshShell.CreateShortcut("${t.replace(/\\/g,"\\\\")}")
    $Shortcut.TargetPath = "${r.replace(/\\/g,"\\\\")}"
    $Shortcut.Arguments = "--launch=${e.appId}:${e.themeId}"
    $Shortcut.WorkingDirectory = "${o.replace(/\\/g,"\\\\")}"
    $Shortcut.Save()
  `;return new Promise(s=>{require("child_process").exec(`powershell -Command "${a.replace(/"/g,'\\"')}"`,d=>{s(d?{success:!1,error:d.message}:{success:!0,path:t})})})}function _n(e){const n=l.join(y.homedir(),"Desktop"),t=l.join(n,`${e.label}.app`),o=`
    tell application "Terminal"
      do script "'${process.execPath}' --launch=${e.appId}:${e.themeId}"
    end tell
  `,a=l.join(n,`${e.id}.scpt`);return p.writeFileSync(a,o),new Promise(s=>{require("child_process").exec(`osacompile -o "${t}" "${a}"`,d=>{p.unlinkSync(a),s(d?{success:!1,error:d.message}:{success:!0,path:t})})})}async function Mn(e){const n=l.join(y.homedir(),".local","share","applications");p.existsSync(n)||p.mkdirSync(n,{recursive:!0});const t=l.join(n,`${e.id}.desktop`),r=process.execPath,o=`[Desktop Entry]
Type=Application
Name=${e.label}
Exec="${r}" --launch=${e.appId}:${e.themeId}
Icon=${e.icon||"utilities-terminal"}
Terminal=false
Categories=Utility;
`;return p.writeFileSync(t,o),p.chmodSync(t,493),{success:!0,path:t}}const Nn=we.promisify(V.execFile),Dn="https://api.dreamskin.cc",Ve=`${Dn}/v1/themes`,Ze=32*1024*1024,se=6;let me=0;async function jn(){const e=me,n=await On(e),t=n.items;me=e+t.length>=n.total?0:e+se;const r=Le(),o={checked:t.length,imported:0,skipped:0,offset:e,page:Math.floor(e/se)+1,total:n.total,nextOffset:me,failed:[]};for(const a of t){const s=Wn(a.themeId);if(!a.applyCompatible||Ue(s)){o.skipped++;continue}try{await Rn(a,r,s)?o.imported++:o.skipped++}catch(d){o.failed.push({id:a.id,name:a.name,error:d.message})}}return o}async function On(e){const n=`${Ve}?limit=${se}&offset=${e}&sort=recent`,t=await fetch(n,{signal:AbortSignal.timeout(3e4),redirect:"error"});if(!t.ok)throw new Error(`Theme list request failed: HTTP ${t.status}`);const r=await t.json();if(!Array.isArray(r.items)||r.items.length>se||!Number.isInteger(r.total)||r.total<0)throw new Error("Theme list response is invalid");return{items:r.items,total:r.total}}async function Rn(e,n,t){Un(e);const r=p.mkdtempSync(l.join(y.tmpdir(),"dream-work-theme-")),o=l.join(r,"theme.zip"),a=l.join(r,"extract"),s=l.join(n,`.updating-${t}-${process.pid}`);try{p.mkdirSync(a);const d=`${Ve}/${e.id}/download`,i=await fetch(d,{signal:AbortSignal.timeout(12e4),redirect:"error"});if(!i.ok)throw new Error(`Theme download failed: HTTP ${i.status}`);const c=Buffer.from(await i.arrayBuffer());if(c.length!==e.packageBytes)throw new Error(`Downloaded size mismatch: expected ${e.packageBytes}, got ${c.length}`);if(c.length>Ze)throw new Error("Theme package exceeds 32 MiB");if(ye.createHash("sha256").update(c).digest("hex")!==e.packageSha256)throw new Error("Downloaded SHA-256 does not match metadata");p.writeFileSync(o,c,{flag:"wx"}),await Bn(o,a);const u=Ln(a),h=JSON.parse(p.readFileSync(l.join(u,"theme.json"),"utf8")),g=h.image;if(typeof g!="string"||l.basename(g)!==g||!/\.(png|jpe?g|webp)$/i.test(g))throw new Error("Theme image name is invalid");const x=l.join(u,g),I=l.join(u,"theme.css");if(!p.existsSync(x)||!p.statSync(x).isFile())throw new Error("Theme image is missing");if(!p.existsSync(I)||!p.statSync(I).isFile())throw new Error("theme.css is missing");const A=Fn(h,e,t,`hero${l.extname(g).toLowerCase()}`);return Xt(A.name,A.author,x)?!1:(p.mkdirSync(s),p.copyFileSync(x,l.join(s,A.hero)),p.copyFileSync(I,l.join(s,"theme.css")),p.writeFileSync(l.join(s,"theme.json"),`${JSON.stringify(A,null,2)}
`),p.renameSync(s,l.join(n,t)),!0)}finally{p.rmSync(s,{recursive:!0,force:!0}),p.rmSync(r,{recursive:!0,force:!0})}}async function Bn(e,n){const{path7za:t}=require("7zip-bin");await Nn(t,["x",e,`-o${n}`,"-y"],{windowsHide:!0,timeout:12e4})}function Ln(e){const t=[e,...p.readdirSync(e,{withFileTypes:!0}).filter(r=>r.isDirectory()).map(r=>l.join(e,r.name))].filter(r=>p.existsSync(l.join(r,"theme.json"))&&p.existsSync(l.join(r,"theme.css")));if(t.length!==1)throw new Error("Theme ZIP must contain one theme root");return t[0]}function Un(e){if(!/^ver_[a-z0-9]{8,64}$/.test(e.id))throw new Error("Theme version ID is invalid");if(!Number.isInteger(e.packageBytes)||e.packageBytes<1||e.packageBytes>Ze)throw new Error("Theme package size is invalid");if(!/^[a-f0-9]{64}$/.test(e.packageSha256))throw new Error("Theme package SHA-256 is invalid")}function Wn(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").replace(/-+/g,"-")||"community-theme"}function Fn(e,n,t,r){const o=e.appearance==="dark"?"dark":"light",a=o==="dark"?"#10141c":"#f4f7fa",s=e.colors||{};return{schemaVersion:1,id:t,name:String(e.name||n.name||t).trim(),author:n.authorDisplayName||"DreamSkin Community",hero:r,colors:{accent:J(s.accent,"#4f8cff",a),secondary:J(s.secondary||s.accentAlt,"#7ba7d8",a),surface:J(s.panelAlt||s.panel||s.background,a,a),text:J(s.text,o==="dark"?"#eef2f7":"#1f2937",a)},copy:null,apps:Object.fromEntries(ne.filter(d=>!d.acceptsGenericThemes).map(d=>[d.id,{compat:!0}]))}}function J(e,n,t){if(typeof e!="string")return n;const r=e.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(r){let i=r[1];return i.length===3&&(i=i.split("").map(c=>c+c).join("")),`#${i.slice(0,6).toLowerCase()}`}const o=e.trim().match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);if(!o)return n;const a=o[4]===void 0?1:Number(o[4]),s=J(t,n,n).slice(1).match(/../g).map(i=>parseInt(i,16));return`#${[1,2,3].map(i=>Math.round(Number(o[i])*a+s[i-1]*(1-a))).map(i=>i.toString(16).padStart(2,"0")).join("")}`}let ue=null;C.protocol.registerSchemesAsPrivileged([{scheme:"theme-asset",privileges:{standard:!0,secure:!0,supportFetchAPI:!0,stream:!0}}]);function Ye(){ue=new C.BrowserWindow({width:1200,height:800,webPreferences:{preload:l.join(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1}}),process.env.VITE_DEV_SERVER_URL?ue.loadURL(process.env.VITE_DEV_SERVER_URL):ue.loadFile(l.join(__dirname,"../renderer/dist/index.html"))}C.app.whenReady().then(()=>{C.protocol.handle("theme-asset",e=>{const n=decodeURIComponent(new URL(e.url).pathname.replace(/^\//,"")),t=Gt(n);return t?new Response(p.readFileSync(t),{headers:{"Content-Type":Hn(t),"Cache-Control":"public, max-age=3600"}}):new Response("Theme asset not found",{status:404})}),Ye()});function Hn(e){const n=l.extname(e).toLowerCase();return n===".jpg"||n===".jpeg"?"image/jpeg":n===".webp"?"image/webp":"image/png"}C.app.on("window-all-closed",()=>{process.platform!=="darwin"&&C.app.quit()});C.app.on("activate",()=>{C.BrowserWindow.getAllWindows().length===0&&Ye()});const De=process.argv.find(e=>e.startsWith("--launch="));if(De){const[,e]=De.split("="),[n,t]=e.split(":");n&&t&&(console.log(`[main] Received launch args: ${n}:${t}`),setTimeout(async()=>{try{const r=await Oe(n,t);if(r.success){console.log(`[main] Launched ${n} with theme ${t} on port ${r.port}`),console.log(`[main] Starting theme injection for ${n}:${t} on port ${r.port}`);const o=await qe(n,t,r.port);console.log("[main] Injection result:",o)}else console.error(`[main] Failed to launch ${n}: ${r.error}`)}catch(r){console.error("[main] Launch error:",r)}},1e3))}C.ipcMain.handle("discover-apps",async()=>pt());C.ipcMain.handle("launch-app",async(e,n,t)=>Oe(n,t));C.ipcMain.handle("apply-theme",async(e,n,t,r)=>qe(n,t,r));C.ipcMain.handle("create-shortcut",async(e,n)=>{const t={...n,id:`${n.appId}-${n.themeId}-${Date.now()}`};return An(t)});C.ipcMain.handle("list-themes",async(e,n)=>ie(n).map(t=>({id:t.id,name:t.name,author:t.author,hero:qt(t.id)})));C.ipcMain.handle("update-themes",async()=>jn());C.ipcMain.handle("get-status",async(e,n,t)=>{var o;return await bt(n)?{...await dn(n,t||((o=D(n))==null?void 0:o.defaultPort)||9339),running:!0}:{installed:!1,menu:!1,targets:0,running:!1}});C.ipcMain.handle("remove-skin",async(e,n,t)=>pn(n,t));C.ipcMain.handle("debug-targets",async(e,n)=>{try{const r=await(await fetch(`http://127.0.0.1:${n}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();return{success:!0,count:r.length,raw:r,targets:r.map(o=>({id:o.id,type:o.type,url:o.url,title:o.title,webSocketDebuggerUrl:o.webSocketDebuggerUrl}))}}catch(t){return{success:!1,error:t.message}}});

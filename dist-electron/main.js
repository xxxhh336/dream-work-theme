"use strict";var vt=Object.defineProperty;var St=(e,t,n)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var D=(e,t,n)=>St(e,typeof t!="symbol"?t+"":t,n);const T=require("electron"),$t=require("path"),Ct=require("fs"),de=require("child_process"),Be=require("util"),Tt=require("os"),_t=require("original-fs"),Et=require("http"),At=require("net"),It=require("fs/promises"),Pt=require("crypto");function G(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const d=G($t),h=G(Ct),x=G(Tt),F=G(_t),tt=G(Et),Re=G(At),Le=G(Pt),v=process.env.LOCALAPPDATA||d.join(x.homedir(),"AppData","Local"),Y=process.env.APPDATA||d.join(x.homedir(),"AppData","Roaming"),I=process.env.ProgramFiles||"C:\\Program Files",j=process.env["ProgramFiles(x86)"]||"C:\\Program Files (x86)",be=[{id:"workbuddy",name:"WorkBuddy",exeNames:["WorkBuddy.exe"],processName:"WorkBuddy.exe",defaultPort:9339,installPaths:[d.join(v,"workbuddy"),d.join(v,"Programs","workbuddy"),d.join(I,"WorkBuddy"),d.join(j,"WorkBuddy"),"D:\\Program Files\\WorkBuddy"],rendererHints:["app.asar/renderer/index.html","renderer/index.html","index.html"],kind:"workbuddy",acceptsGenericThemes:!0,darwin:{appBundles:["WorkBuddy.app"],executableNames:["WorkBuddy"]},linux:{executableNames:["workbuddy","WorkBuddy"],desktopFiles:["workbuddy.desktop"]}},{id:"codex",name:"Codex",exeNames:["ChatGPT.exe","Codex.exe"],processName:"ChatGPT.exe",defaultPort:9340,installPaths:[d.join(v,"Programs","Codex"),d.join(v,"Programs","OpenAI","Codex"),d.join(I,"Codex"),d.join(j,"Codex"),"D:\\Program Files\\Codex"],rendererHints:["index.html","renderer/index.html"],kind:"codex",acceptsGenericThemes:!0,darwin:{appBundles:["ChatGPT.app","Codex.app"],executableNames:["ChatGPT","Codex"]},linux:{executableNames:["codex","Codex"],desktopFiles:["codex.desktop"]}},{id:"trae-work",name:"TRAE Work",exeNames:["TRAE SOLO CN.exe","TRAE Work CN.exe"],processName:"TRAE SOLO CN.exe",defaultPort:9341,installPaths:["D:\\Program Files\\TRAE SOLO CN",d.join(v,"Programs","TRAE SOLO CN"),d.join(I,"TRAE SOLO CN")],rendererHints:["solo/solo-lite.html","solo-lite.html"],kind:"vscode-work",acceptsGenericThemes:!0,darwin:{appBundles:["TRAE SOLO CN.app","TRAE Work CN.app","TRAE.app"],executableNames:["TRAE SOLO CN","TRAE Work CN","TRAE"]},linux:{executableNames:["trae","trae-work","TRAE"],desktopFiles:["trae.desktop","trae-work.desktop"]}},{id:"qoder-work",name:"QoderWork",exeNames:["QoderWork CN.exe","QoderWork.exe"],processName:"QoderWork CN.exe",defaultPort:9342,installPaths:["D:\\Program Files\\QoderWork CN",d.join(v,"Programs","QoderWork CN"),d.join(I,"QoderWork CN")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",devToolsActivePort:d.join(Y,"QoderWork CN","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["QoderWork CN.app","QoderWork.app"],executableNames:["QoderWork CN","QoderWork"]},linux:{executableNames:["qoder-work","qoderwork","QoderWork"],desktopFiles:["qoder-work.desktop","qoderwork.desktop"]}},{id:"catpaw",name:"CatPaw",exeNames:["CatPaw.exe"],processName:"CatPaw.exe",defaultPort:9343,installPaths:[d.join(v,"CatPaw"),d.join(v,"Programs","CatPaw"),d.join(I,"CatPaw")],rendererHints:["app.asar/dist/index.html","dist/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["CatPaw.app"],executableNames:["CatPaw"]},linux:{executableNames:["catpaw","CatPaw"],desktopFiles:["catpaw.desktop"]}},{id:"zcode",name:"ZCode",exeNames:["ZCode.exe"],processName:"ZCode.exe",defaultPort:9344,installPaths:["D:\\Program Files\\ZCode",d.join(v,"Programs","ZCode"),d.join(I,"ZCode")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["ZCode.app"],executableNames:["ZCode"]},linux:{executableNames:["zcode","ZCode"],desktopFiles:["zcode.desktop"]}},{id:"qwen-office",name:"千问办公",exeNames:["QwenWorkCN.exe"],processName:"QwenWorkCN.exe",defaultPort:9345,installPaths:["D:\\Program Files\\QwenWorkCN",d.join(v,"Programs","QwenWorkCN"),d.join(I,"QwenWorkCN")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",devToolsActivePort:d.join(Y,"QwenWorkCN","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["QwenWorkCN.app","Qwen Work.app"],executableNames:["QwenWorkCN","Qwen Work"]},linux:{executableNames:["qwen-work","qwenwork","QwenWorkCN"],desktopFiles:["qwen-work.desktop","qwenwork.desktop"]}},{id:"hana-agent",name:"HanaAgent",exeNames:["HanaAgent.exe"],processName:"HanaAgent.exe",defaultPort:9346,installPaths:[d.join(v,"Programs","HanaAgent"),d.join(I,"HanaAgent"),d.join(j,"HanaAgent")],rendererHints:[".hanako/artifacts/renderer/","artifacts/renderer/","/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["HanaAgent.app"],executableNames:["HanaAgent"]},linux:{executableNames:["hana-agent","HanaAgent"],desktopFiles:["hana-agent.desktop"]}},{id:"kimi",name:"Kimi Work",exeNames:["Kimi.exe"],processName:"Kimi.exe",defaultPort:9347,installPaths:["D:\\Program Files\\Kimi",d.join(v,"Programs","Kimi"),d.join(I,"Kimi"),d.join(j,"Kimi")],rendererHints:["kimi-agent.html","kimichat.html","https://www.kimi.com/"],kind:"generic-work",devToolsActivePort:d.join(Y,"kimi-desktop","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["Kimi.app"],executableNames:["Kimi"]},linux:{executableNames:["kimi","Kimi"],desktopFiles:["kimi.desktop"]}},{id:"opencode",name:"OpenCode",exeNames:["OpenCode.exe"],processName:"OpenCode.exe",defaultPort:9348,installPaths:[d.join(v,"Programs","@opencode-aidesktop"),d.join(v,"Programs","OpenCode"),d.join(I,"OpenCode"),d.join(j,"OpenCode")],rendererHints:["oc://renderer/index.html"],kind:"generic-work",devToolsActivePort:d.join(Y,"ai.opencode.desktop","DevToolsActivePort"),windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["OpenCode.app"],executableNames:["OpenCode"]},linux:{executableNames:["opencode-desktop","OpenCode"],desktopFiles:["opencode-desktop.desktop"]}},{id:"doubao",name:"豆包",exeNames:["Doubao.exe"],processName:"Doubao.exe",defaultPort:9349,installPaths:[d.join(v,"Doubao","Application","app"),d.join(v,"Doubao","Application"),d.join(I,"Doubao"),d.join(j,"Doubao")],rendererHints:["doubao://doubao-chat/chat"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["Doubao.app"],executableNames:["Doubao"]},linux:{executableNames:["doubao","Doubao"],desktopFiles:["doubao.desktop"]}},{id:"agnes-code",name:"AgnesCode",exeNames:["AgnesCode.exe"],processName:"AgnesCode.exe",defaultPort:9350,installPaths:["D:\\Program Files\\AgnesCode",d.join(v,"Programs","AgnesCode"),d.join(I,"AgnesCode"),d.join(j,"AgnesCode")],rendererHints:["app.asar/.vite/renderer/main_window/index.html"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["AgnesCode.app"],executableNames:["AgnesCode"]},linux:{executableNames:["agnes-code","agnescode","AgnesCode"],desktopFiles:["agnes-code.desktop","agnescode.desktop"]}},{id:"minimax-code",name:"MiniMax Code",exeNames:["MiniMax Code.exe"],processName:"MiniMax Code.exe",defaultPort:9351,installPaths:["D:\\Program Files\\MiniMax Code",d.join(v,"Programs","MiniMax Code"),d.join(I,"MiniMax Code"),d.join(j,"MiniMax Code")],rendererHints:["app://./archon"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["MiniMax Code.app"],executableNames:["MiniMax Code"]},linux:{executableNames:["minimax-code","MiniMax Code"],desktopFiles:["minimax-code.desktop"]}},{id:"astronclaw",name:"AstronClaw",exeNames:["AstronClaw.exe"],processName:"AstronClaw.exe",defaultPort:9352,installPaths:["D:\\Program Files\\AstronClaw",d.join(v,"Programs","AstronClaw"),d.join(I,"AstronClaw"),d.join(j,"AstronClaw")],rendererHints:["app.asar/out/renderer/index.html","out/renderer/index.html"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["AstronClaw.app"],executableNames:["AstronClaw"]},linux:{executableNames:["astronclaw","AstronClaw"],desktopFiles:["astronclaw.desktop"]}},{id:"sparkdesk",name:"SparkDesk",exeNames:["SparkDesk.exe"],processName:"SparkDesk.exe",defaultPort:9354,installPaths:["D:\\Program Files\\SparkDesk",d.join(v,"Programs","SparkDesk"),d.join(I,"SparkDesk"),d.join(j,"SparkDesk")],rendererHints:["out/renderer/index.html#desk","out/renderer/index.html"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["SparkDesk.app"],executableNames:["SparkDesk"]},linux:{executableNames:["sparkdesk","SparkDesk"],desktopFiles:["sparkdesk.desktop"]}},{id:"stepfun",name:"StepFun",exeNames:["StepFun.exe"],processName:"StepFun.exe",defaultPort:9353,installPaths:["D:\\Program Files\\StepFun\\StepFun",d.join(v,"Programs","StepFun"),d.join(I,"StepFun"),d.join(j,"StepFun")],rendererHints:["app://chat-web/"],kind:"generic-work",devToolsActivePort:d.join(Y,"stepfun-desktop","DevToolsActivePort"),windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["StepFun.app"],executableNames:["StepFun"]},linux:{executableNames:["stepfun","StepFun"],desktopFiles:["stepfun.desktop"]}},{id:"deepseek-harness",name:"DSH Desktop",exeNames:["DSH Desktop.exe","DeepSeek Harness.exe"],processName:"DSH Desktop.exe",defaultPort:9355,installPaths:["D:\\Program Files\\DSH Desktop","D:\\Program Files\\DeepSeek Harness",d.join(v,"Programs","DSH Desktop"),d.join(v,"Programs","DeepSeek Harness"),d.join(I,"DSH Desktop"),d.join(I,"DeepSeek Harness"),d.join(j,"DSH Desktop"),d.join(j,"DeepSeek Harness")],rendererHints:["dsh-desktop-platform="],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["DSH Desktop.app","DeepSeek Harness.app"],executableNames:["DSH Desktop","DeepSeek Harness"]},linux:{executableNames:["dsh-desktop","DSH Desktop","deepseek-harness","DeepSeek Harness"],desktopFiles:["dsh-desktop.desktop","deepseek-harness.desktop"]}},{id:"monkeycode",name:"MonkeyCode",exeNames:["monkeycode-desktop.exe"],processName:"monkeycode-desktop.exe",defaultPort:9356,installPaths:["D:\\Program Files\\MonkeyCode",d.join(v,"Programs","MonkeyCode"),d.join(I,"MonkeyCode"),d.join(j,"MonkeyCode")],rendererHints:["http://tauri.localhost/"],kind:"generic-work",windowsPathScopedKill:!0,webView2:!0,acceptsGenericThemes:!0,darwin:{appBundles:["MonkeyCode.app"],executableNames:["MonkeyCode","monkeycode-desktop"]},linux:{executableNames:["monkeycode-desktop","MonkeyCode"],desktopFiles:["monkeycode.desktop","monkeycode-desktop.desktop"]}}];function O(e){return be.find(t=>t.id===e)}const $e=Be.promisify(de.execFile);function Dt(){const e=[],t=d.join(process.env.ProgramFiles||"C:\\Program Files","WindowsApps");if(!h.existsSync(t))return e;try{const n=h.readdirSync(t);for(const a of n)if(/^OpenAI\.Codex_\d+/i.test(a)){const o=d.join(t,a,"app","ChatGPT.exe");h.existsSync(o)&&e.push(o)}}catch{}return e}async function Nt(){const e=`
$ErrorActionPreference = 'SilentlyContinue'
$package = Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue
if (-not $package) { exit 1 }
$manifest = Get-AppxPackageManifest -Package $package.PackageFullName
$rel = [string]$manifest.Package.Applications.Application.Executable
if (-not $rel) { exit 1 }
$full = Join-Path $package.InstallLocation $rel
if (Test-Path -LiteralPath $full -PathType Leaf) { Write-Output $full } else { exit 1 }
`;try{const{stdout:t}=await $e("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",e],{encoding:"utf8",maxBuffer:4194304}),n=t.trim();if(n&&h.existsSync(n))return n}catch{}return null}async function nt(){const e=[];if(x.platform()!=="win32"){for(const o of be){const r=await Ot(o);r&&e.push({appId:o.id,name:o.name,path:r})}return e}for(const o of be.filter(r=>r.id!=="codex")){const r=Ge(o.exeNames,o.installPaths);r&&e.push({appId:o.id,name:o.name,path:r,version:o.id==="monkeycode"?await jt(r):void 0})}const n=Ge(["Codex.exe","ChatGPT.exe"],[d.join(process.env.LOCALAPPDATA||"","Programs","Codex"),d.join(process.env.LOCALAPPDATA||"","Programs","OpenAI","Codex"),...Dt()]),a=n?null:await Nt();return a?e.push({appId:"codex",name:"Codex",path:a}):n&&e.push({appId:"codex",name:"Codex",path:n}),e}async function Mt(e){return(await nt()).find(t=>t.appId===e)}async function jt(e){if(x.platform()!=="win32")return;const t=e.replace(/'/g,"''");try{const{stdout:n}=await $e("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",`(Get-Item -LiteralPath '${t}').VersionInfo.ProductVersion`],{encoding:"utf8",maxBuffer:1048576});return n.trim()||void 0}catch{return}}async function Ot(e){var n,a,o;const t=x.platform();if(t==="darwin"){for(const r of((n=e.darwin)==null?void 0:n.appBundles)??[]){const i=d.join("/Applications",r);if(h.existsSync(i))return i}return null}if(t==="linux"){for(const r of((a=e.linux)==null?void 0:a.desktopFiles)??[]){const i=await Bt(r);if(i)return i}for(const r of((o=e.linux)==null?void 0:o.executableNames)??[])try{const{stdout:i}=await $e("which",[r],{encoding:"utf8"}),l=i.trim();if(l&&h.existsSync(l))return l}catch{}}return null}async function Bt(e){for(const t of[d.join(x.homedir(),".local","share","applications",e),d.join("/usr/share/applications",e),d.join("/usr/local/share/applications",e)]){if(!h.existsSync(t))continue;const n=h.readFileSync(t,"utf8").match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m),a=(n==null?void 0:n[1])||(n==null?void 0:n[2]);if(a){if(d.isAbsolute(a)&&h.existsSync(a))return a;try{const{stdout:o}=await $e("which",[a],{encoding:"utf8"}),r=o.trim();if(r&&h.existsSync(r))return r}catch{}}}return null}function Ge(e,t){for(const n of t){if(!n||!h.existsSync(n))continue;if(h.statSync(n).isFile()&&e.some(o=>d.basename(n).toLowerCase()===o.toLowerCase()))return n;for(const o of e){const r=d.join(n,o);if(h.existsSync(r))return r}try{const o=h.readdirSync(n,{withFileTypes:!0}).filter(r=>r.isDirectory()).sort((r,i)=>i.name.localeCompare(r.name,void 0,{numeric:!0}));for(const r of o)for(const i of e){const l=d.join(n,r.name,i);if(h.existsSync(l))return l}}catch{}}return null}const we=Be.promisify(de.execFile);async function Rt(e){const t=O(e);if(!t)return!1;const n=ot(t);if(x.platform()==="win32"){for(const a of n)try{const{stdout:o}=await we("tasklist.exe",["/FI",`IMAGENAME eq ${a}`,"/FO","CSV","/NH"],{encoding:"utf8",windowsHide:!0});if(o.split(/\r?\n/).some(r=>r.trim().toLowerCase().startsWith(`"${a.toLowerCase()}"`)))return!0}catch{}return!1}for(const a of n)try{return await we("pgrep",["-f",a],{encoding:"utf8"}),!0}catch{}return!1}async function at(e,t){const n=O(e);if(!n)return{success:!1,error:`Unknown app: ${e}`};try{const a=Qt(e);console.log(`[launcher] Killing existing ${e} instances...`),await Vt(e,a),await Xt(n.defaultPort,15e3);const o=await zt(n.defaultPort);o!==n.defaultPort&&console.warn(`[launcher] Default CDP port ${n.defaultPort} is unavailable; using ${o}`);const r=n.webView2?[]:[`--remote-debugging-port=${o}`];e==="codex"&&r.push("--disable-extensions"),t&&e!=="kimi"&&r.push(`--dream-theme=${t}`),e==="agnes-code"&&x.platform()==="win32"&&await Wt(a);const i=x.platform()==="win32"?n.devToolsActivePort:void 0;if(i)try{h.unlinkSync(i)}catch{}console.log(`[launcher] Launching ${a} with args: ${r.join(" ")}`);const l=Ft(e,a,o),s=e==="kimi"&&x.platform()==="win32"?await Lt(a,r):qe(a,r,l);console.log(`[launcher] Spawned process${s?` with PID: ${s}`:""}`),console.log(`[launcher] Waiting for CDP port ${o} to be ready...`);let c=o;return i?e==="stepfun"?(c=await Ht(i,3e4),qe(a,[],l),await rt(c,n.rendererHints,3e4)):c=await Ut(i,n.rendererHints,3e4):await Gt(o,3e4),console.log(`[launcher] CDP port ${c} is ready`),(e==="hana-agent"||e==="kimi")&&await Kt(c,n.rendererHints,3e4,e==="kimi"?750:3e3),{success:!0,port:c}}catch(a){return console.error("[launcher] Launch failed:",a),{success:!1,error:a.message}}}function qe(e,t,n){const a=de.spawn(e,t,{detached:!0,stdio:"ignore",env:n});return a.unref(),a.pid}async function Lt(e,t){const n=d.join(x.tmpdir(),`dream-work-kimi-${process.pid}-${Date.now()}.lnk`),a={...De(),DREAM_WORK_LAUNCH_EXE:e,DREAM_WORK_LAUNCH_ARGS:JSON.stringify(t),DREAM_WORK_LAUNCH_CWD:d.dirname(e),DREAM_WORK_LAUNCH_SHORTCUT:n},o=["[string[]]$launchArgs = @($env:DREAM_WORK_LAUNCH_ARGS | ConvertFrom-Json)","$shell = New-Object -ComObject WScript.Shell","$shortcut = $shell.CreateShortcut($env:DREAM_WORK_LAUNCH_SHORTCUT)","$shortcut.TargetPath = $env:DREAM_WORK_LAUNCH_EXE","$shortcut.Arguments = [string]::Join(' ', $launchArgs)","$shortcut.WorkingDirectory = $env:DREAM_WORK_LAUNCH_CWD","$shortcut.Save()"].join("; ");await we("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",o],{env:a,windowsHide:!0}),de.spawn(d.join(process.env.WINDIR||"C:\\Windows","explorer.exe"),[n],{detached:!0,stdio:"ignore",env:De()}).unref(),setTimeout(()=>{try{h.unlinkSync(n)}catch{}},15e3).unref()}function De(){const e={...process.env};for(const t of["VITE_DEV_SERVER_URL","ELECTRON_RENDERER_URL","MAIN_VITE_DEV_SERVER_URL","ELECTRON_RUN_AS_NODE"])delete e[t];return e}function Ft(e,t,n){var o,r;const a=De();if(e==="agnes-code"&&(a.AGNES_DEV="1",a.ENABLE_PLAYWRIGHT="1",a.PLAYWRIGHT_DEBUG_PORT=String(n),a.AGNESD_BINARY=d.join(d.dirname(t),"resources","bin",x.platform()==="win32"?"agnesd.exe":"agnesd")),(o=O(e))!=null&&o.webView2){const i=(r=a.WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS)==null?void 0:r.trim(),l=`--remote-debugging-port=${n}`;a.WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS=i?`${i} ${l}`:l}return a}async function Wt(e){const t=d.dirname(e),n=d.join(t,"resources","app.asar"),a=`${e}.dream-work-original`,o=`${n}.dream-work-titlebar.json`,r=F.readFileSync(n),i=r.toString("latin1");if(/function ([\w$]+)\(e,t="sidebar"\)\{return\{color:"#00000000",symbolColor:([\w$]+)\[e\],height:32\}\}/.test(i)){Ve(e),console.log("[launcher] AgnesCode native title bar overlay is already transparent");return}const c=/function ([\w$]+)\(e,t="sidebar"\)\{return\{color:t==="content"\?([\w$]+)\(e\):([\w$]+)\(e\),symbolColor:([\w$]+)\[e\],height:32\}\}/.exec(i);if(!c||c.index<0)throw new Error("AgnesCode title bar implementation was not recognized; the installed version may have changed");F.copyFileSync(e,a),Ve(e);const u=c[0],p=`function ${c[1]}(e,t="sidebar"){return{color:"#00000000",symbolColor:${c[4]}[e],height:32}}`;if(p.length>u.length)throw new Error("AgnesCode title bar patch does not fit the original ASAR entry");F.writeFileSync(o,JSON.stringify({archiveSize:r.length,offset:c.index,original:Buffer.from(u,"latin1").toString("base64")}));const m=Buffer.from(p.padEnd(u.length," "),"latin1"),g=F.openSync(n,"r+");try{F.writeSync(g,m,0,m.length,c.index),F.fsyncSync(g)}finally{F.closeSync(g)}console.log("[launcher] Patched AgnesCode native window controls overlay to transparent")}function Ve(e){const t=Buffer.from("dL7pKGdnNz796PbbjQWNKmHXBZaB9tsX","ascii"),n=F.readFileSync(e),a=n.indexOf(t),o=n.lastIndexOf(t);if(a<0)throw new Error("AgnesCode Electron fuse wire was not found");const r=a===o?[a]:[a,o];let i=!1;for(const l of r){const s=l+t.length,c=n[s],u=n[s+1];if(c!==1||u<=4)throw new Error(`Unsupported AgnesCode Electron fuse wire: version=${c}, length=${u}`);const p=s+2+4;n[p]!==48&&(n[p]=48,i=!0)}i&&(F.writeFileSync(e,n),console.log("[launcher] Disabled AgnesCode embedded ASAR integrity validation"))}function ot(e){var t,n;return x.platform()==="darwin"?((t=e.darwin)==null?void 0:t.executableNames)??[]:x.platform()==="linux"?((n=e.linux)==null?void 0:n.executableNames)??[]:[...new Set([e.processName,...e.exeNames].filter(Boolean))]}async function Ut(e,t,n){const a=Date.now();let o=0;for(;Date.now()-a<n;){try{const r=h.readFileSync(e,"utf8").split(/\r?\n/,1)[0],i=Number(r);if(Number.isInteger(i)&&i>0)return o=i,await rt(i,t,3e3),i}catch{}await new Promise(r=>setTimeout(r,500))}throw new Error(`DevToolsActivePort did not expose a live renderer${o?` on port ${o}`:""}: ${e}`)}async function Ht(e,t){const n=Date.now();let a=0;for(;Date.now()-n<t;){try{const o=h.readFileSync(e,"utf8").split(/\r?\n/,1)[0],r=Number(o);if(Number.isInteger(r)&&r>0&&(a=r,(await fetch(`http://127.0.0.1:${r}/json/version`,{signal:AbortSignal.timeout(1e3)})).ok))return r}catch{}await new Promise(o=>setTimeout(o,500))}throw new Error(`DevToolsActivePort did not expose a live endpoint${a?` on port ${a}`:""}: ${e}`)}async function rt(e,t,n){const a=Date.now();for(;Date.now()-a<n;){try{const o=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(1e3)});if(o.ok){const r=await o.json();if(Array.isArray(r)&&r.some(i=>(i==null?void 0:i.type)==="page"&&t.some(l=>String(i.url).includes(l))))return}}catch{}await new Promise(o=>setTimeout(o,250))}throw new Error(`CDP renderer endpoint is not ready on port ${e}`)}async function Kt(e,t,n,a){const o=Date.now();let r="",i=0;for(;Date.now()-o<n;){try{const c=(await(await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(1e3)})).json()).find(u=>(u==null?void 0:u.type)==="page"&&t.some(p=>String(u.url).includes(p)));if(c!=null&&c.id){if(c.id!==r)r=c.id,i=Date.now();else if(Date.now()-i>=a){console.log(`[launcher] Stable renderer ${r} confirmed`);return}}}catch{}await new Promise(l=>setTimeout(l,250))}throw new Error(`Renderer did not stabilize on port ${e}`)}async function zt(e){for(let t=e;t<=e+100;t++)if(await Jt(t))return t;throw new Error(`No available CDP port found between ${e} and ${e+100}`)}function Jt(e){return new Promise(t=>{const n=Re.createServer();n.unref(),n.once("error",()=>t(!1)),n.listen(e,"127.0.0.1",()=>{n.close(a=>t(!a))})})}async function Gt(e,t){const n=Date.now();let a="unknown";for(;Date.now()-n<t;)try{await new Promise((o,r)=>{const i=Re.createConnection(e,"127.0.0.1",()=>{i.end(),o()});i.once("error",l=>{a=l.message,r(l)}),setTimeout(()=>{i.destroy(),r(new Error("timeout"))},1e3)}),console.log(`[launcher] Port ${e} is open, verifying CDP endpoint...`),await qt(e,15e3),console.log(`[launcher] CDP endpoint verified on port ${e}`);return}catch(o){a=o.message,console.log(`[launcher] Port check failed: ${o.message}, retrying...`),await new Promise(r=>setTimeout(r,1e3))}throw new Error(`CDP port ${e} did not become ready within ${t}ms (last error: ${a})`)}async function qt(e,t){const n=Date.now();for(;Date.now()-n<t;)try{await new Promise((a,o)=>{const r=tt.request({hostname:"127.0.0.1",port:e,path:"/json/version",method:"GET",timeout:2e3},i=>{let l="";i.on("data",s=>{l+=s}),i.on("end",()=>{i.statusCode===200?(console.log(`[launcher] CDP version response: ${l.substring(0,200)}`),a()):o(new Error(`HTTP ${i.statusCode}`))})});r.on("error",o),r.on("timeout",()=>{r.destroy(),o(new Error("timeout"))}),r.end()});return}catch(a){if(Date.now()-n>=t)throw a;await new Promise(o=>setTimeout(o,1e3))}}async function Vt(e,t){const n=x.platform(),a=O(e);if(!a)return;const o=ot(a);try{if(n==="win32"){if(a.windowsPathScopedKill){await we("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command","$target = [IO.Path]::GetFullPath($env:DREAM_WORK_TARGET_EXE); Get-CimInstance Win32_Process | Where-Object { $_.ExecutablePath -and [IO.Path]::GetFullPath($_.ExecutablePath) -ieq $target } | ForEach-Object { taskkill.exe /T /F /PID $_.ProcessId *> $null }"],{env:{...process.env,DREAM_WORK_TARGET_EXE:t},windowsHide:!0}).catch(()=>{}),console.log(`[launcher] Killed existing ${e} instances at ${t}`);return}const{execSync:r}=require("child_process");for(const i of o)try{r(`taskkill /T /F /IM "${i}" 2>nul`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${i} process tree`)}catch{}}else if(n==="darwin"){const{execSync:r}=require("child_process");for(const i of o)try{r(`pkill -f "${i}" 2>/dev/null || true`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${i} processes`)}catch{}}else if(n==="linux"){const{execSync:r}=require("child_process");for(const i of o)try{r(`pkill -f "${i}" 2>/dev/null || true`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${i} processes`)}catch{}}}catch(r){console.warn("[launcher] Failed to kill existing instances:",r)}}async function Xt(e,t){const n=Date.now();for(;Date.now()-n<t;){if(!await new Promise(o=>{const r=Re.createConnection(e,"127.0.0.1");r.once("connect",()=>{r.destroy(),o(!0)}),r.once("error",()=>o(!1)),r.setTimeout(500,()=>{r.destroy(),o(!1)})})){console.log(`[launcher] Previous CDP port ${e} is closed`);return}await new Promise(o=>setTimeout(o,250))}throw new Error(`Existing ${e} CDP service did not stop; refusing to inject into the old application instance`)}function Qt(e){var a,o,r,i;const t=O(e);if(!t)throw new Error(`Unknown app: ${e}`);const n=x.platform();if(n==="win32"){for(const c of t.installPaths){if(!c||!h.existsSync(c))continue;if(h.statSync(c).isFile())return c;for(const p of t.exeNames){const m=d.join(c,p);if(h.existsSync(m))return m}const u=h.readdirSync(c,{withFileTypes:!0}).filter(p=>p.isDirectory()).sort((p,m)=>m.name.localeCompare(p.name,void 0,{numeric:!0}));for(const p of u)for(const m of t.exeNames){const g=d.join(c,p.name,m);if(h.existsSync(g))return g}}const l=t.exeNames,s=[process.env.ProgramFiles,process.env["ProgramFiles(x86)"]].filter(Boolean);for(const c of s){if(!c||!h.existsSync(c))continue;const p=h.readdirSync(c).find(m=>m.toLowerCase().includes(e.replace("-",""))||m.toLowerCase().includes(t.name.toLowerCase()));if(p){const m=d.join(c,p);for(const g of l){const b=d.join(m,g);if(h.existsSync(b))return b}}}if(e==="codex"){const c=d.join(process.env.ProgramFiles||"C:\\Program Files","WindowsApps");console.log("[launcher] Codex WindowsApps fallback, path:",c);try{const p=h.readdirSync(c).find(m=>/^OpenAI\.Codex_\d+/i.test(m));if(p){const m=d.join(c,p,"app","ChatGPT.exe");if(h.existsSync(m))return console.log("[launcher] Found Codex via WindowsApps scan:",m),m}}catch(u){console.log("[launcher] WindowsApps scan error:",u.message)}try{const{execFileSync:u}=require("child_process"),p="Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue | ForEach-Object { Join-Path $_.InstallLocation (Get-AppxPackageManifest -Package $_.PackageFullName).Package.Applications.Application.Executable }";console.log("[launcher] Running PowerShell fallback...");const m=u("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",p],{encoding:"utf8",stdio:["pipe","pipe","ignore"]}).trim();if(console.log("[launcher] PowerShell result:",m),m&&h.existsSync(m))return m}catch(u){console.log("[launcher] PowerShell fallback error:",u.message)}}}else if(n==="darwin")for(const l of((a=t.darwin)==null?void 0:a.appBundles)??[]){const s=d.join("/Applications",l);if(h.existsSync(s))for(const c of((o=t.darwin)==null?void 0:o.executableNames)??[]){const u=d.join(s,"Contents","MacOS",c);if(h.existsSync(u))return u}}else if(n==="linux"){const l=((r=t.linux)==null?void 0:r.executableNames)??[];for(const c of((i=t.linux)==null?void 0:i.desktopFiles)??[]){const u=Zt(c);if(u)return u}const s=["/usr/bin","/usr/local/bin","/opt",d.join(x.homedir(),".local","bin"),"/snap/bin"];for(const c of s)if(h.existsSync(c))for(const u of l){const p=d.join(c,u);if(h.existsSync(p))return p}for(const c of l)try{const{execFileSync:u}=require("child_process"),p=u("which",[c],{encoding:"utf8",stdio:["ignore","pipe","ignore"]}).trim();if(p&&h.existsSync(p))return p}catch{}}throw new Error(`Could not find ${e} executable`)}function Zt(e){for(const t of[d.join(x.homedir(),".local","share","applications",e),d.join("/usr/share/applications",e),d.join("/usr/local/share/applications",e)]){if(!h.existsSync(t))continue;const n=h.readFileSync(t,"utf8").match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m),a=(n==null?void 0:n[1])||(n==null?void 0:n[2]);if(a){if(d.isAbsolute(a)&&h.existsSync(a))return a;try{const{execFileSync:o}=require("child_process"),r=o("which",[a],{encoding:"utf8",stdio:["ignore","pipe","ignore"]}).trim();if(r&&h.existsSync(r))return r}catch{}}}}const Yt=5e3,en=100,tn=15e3,nn=1e4,an=5e3;function on(e){if(!Number.isInteger(e)||e<1024||e>65535)throw new TypeError("port must be an integer from 1024 through 65535");return e}function X(e,t,n={}){const a=n.allowZero?0:Number.EPSILON;if(!Number.isFinite(e)||e<a){const o=n.allowZero?"non-negative":"positive";throw new TypeError(`${t} must be a finite ${o} number`)}return e}function st(e){if(typeof e!="string"||e.length===0||e!==e.trim())throw new TypeError("webSocketDebuggerUrl must be a non-empty URL string");let t;try{t=new URL(e)}catch(n){throw new TypeError(`webSocketDebuggerUrl is invalid: ${n.message}`)}if(t.protocol!=="ws:"||t.hostname!=="127.0.0.1"||t.username||t.password||t.hash||!t.port)throw new TypeError("webSocketDebuggerUrl must use ws://127.0.0.1 with an explicit port");return on(Number(t.port)),t}function rn(e,t){if(e===null||typeof e!="object"||Array.isArray(e)||e.type!=="page"||typeof e.url!="string"||typeof e.webSocketDebuggerUrl!="string")return!1;try{st(e.webSocketDebuggerUrl)}catch{return!1}return e.url.includes(t)}function Fe(e){if(e===null||typeof e!="object"||Array.isArray(e)||e.type!=="page"||typeof e.url!="string"||typeof e.webSocketDebuggerUrl!="string")return!1;try{return st(e.webSocketDebuggerUrl),!0}catch{return!1}}function sn(e){return new Promise(t=>setTimeout(t,e))}async function Xe(e,t){const n=Math.max(0,t.deadline-Date.now());let a=null;try{return await Promise.race([e,new Promise((o,r)=>{a=setTimeout(()=>{var i;(i=t.onTimeout)==null||i.call(t),r(new Error(`${t.label} timed out after ${t.timeoutMs}ms`))},n)})])}finally{a&&clearTimeout(a)}}async function Z(e,t,n={}){const a=X(n.timeoutMs??an,"timeoutMs",{allowZero:!1}),o=n.fetchImpl??globalThis.fetch;if(typeof o!="function")throw new TypeError("fetchImpl must be a function");const r=`http://127.0.0.1:${e}/json/list`,i=new AbortController,l=Date.now()+a,s=n.quiet===!0;s||console.log(`[cdp] fetchRendererTargets: port=${e}, timeoutMs=${a}, endpoint=${r}`);let c;try{c=await Xe(Promise.resolve(o(r,{redirect:"error",signal:i.signal})),{deadline:l,timeoutMs:a,label:"renderer target discovery",onTimeout:()=>i.abort()})}catch(p){throw s||console.log("[cdp] fetchRendererTargets error:",p),new Error(`failed to fetch renderer targets from ${r}: ${p.message}`)}if(c===null||typeof c!="object"||!c.ok)throw new Error(`renderer target discovery failed with HTTP ${(c==null?void 0:c.status)??"unknown"}`);let u;try{u=await Xe(Promise.resolve(c.json()),{deadline:l,timeoutMs:a,label:"renderer target discovery JSON",onTimeout:()=>i.abort()})}catch(p){throw new Error(`malformed renderer target JSON from ${r}: ${p.message}`)}if(!Array.isArray(u))throw new Error("malformed renderer target JSON: expected an array");return u.filter(p=>rn(p,t)).sort(ln)}async function cn(e,t,n={}){const a=X(n.timeoutMs??Yt,"timeoutMs",{allowZero:!0}),o=X(n.pollMs??en,"pollMs",{allowZero:!1}),r=n.fetchImpl??globalThis.fetch;let i=0;const l=Date.now()+a;let s=new Error("no renderer discovery attempt completed");for(console.log(`[cdp] waitForRendererTargets: port=${e}, hint=${t}, timeoutMs=${a}`);;){try{const u=Math.max(1,Math.min(a-i,l-Date.now()));console.log(`[cdp] Attempting fetch: elapsed=${i}ms, remainingBudget=${u}ms, deadline=${l}`);const p=await Z(e,t,{fetchImpl:r,timeoutMs:u});if(p.length>0)return p;s=new Error("no matching renderer/index.html page targets")}catch(u){s=u instanceof Error?u:new Error(String(u)),console.log("[cdp] Fetch error:",s.message)}if(i>=a||Date.now()>=l)throw new Error(`timed out after ${a}ms waiting for renderer targets on 127.0.0.1:${e}: ${s.message}`);const c=Math.min(o,a-i);await sn(c),i+=c}}class C{constructor(t,n={}){D(this,"webSocketDebuggerUrl");D(this,"WebSocketImpl");D(this,"commandTimeoutMs");D(this,"connectTimeoutMs");D(this,"socket",null);D(this,"nextRequestId",1);D(this,"pending",new Map);D(this,"socketOpen",!1);D(this,"opened",!1);D(this,"closed",!1);D(this,"closeStarted",!1);D(this,"terminalError",null);D(this,"openPromise",null);D(this,"resolveOpen",null);D(this,"rejectOpen",null);D(this,"connectTimer",null);this.webSocketDebuggerUrl=t;let a=null,o=null;try{a=require("ws")??null,a||(o="ws loaded but WebSocket is undefined")}catch(r){o=`ws require failed: ${(r==null?void 0:r.message)??r}`}if(!a)try{const r=require("undici");a=(r==null?void 0:r.WebSocket)??null,a||(o="undici loaded but WebSocket is undefined")}catch(r){o=`undici require failed: ${(r==null?void 0:r.message)??r}`}if(!a&&typeof globalThis.WebSocket=="function"&&(a=globalThis.WebSocket,o=null),!a){const r=o?` (${o})`:"";throw new Error(`No WebSocket implementation available for CDP${r}`)}this.WebSocketImpl=n.WebSocketImpl??a,this.commandTimeoutMs=X(n.commandTimeoutMs??tn,"commandTimeoutMs"),this.connectTimeoutMs=X(n.connectTimeoutMs??nn,"connectTimeoutMs")}open(){if(this.closed)return Promise.reject(this.terminalError??new Error("CDP session is closed"));if(this.opened)return Promise.resolve(this);if(this.openPromise)return this.openPromise;this.openPromise=new Promise((n,a)=>{this.resolveOpen=n,this.rejectOpen=a}),this.connectTimer=setTimeout(()=>{this.terminate(new Error(`CDP WebSocket connect timed out after ${this.connectTimeoutMs}ms`)),this.closeSocket()},this.connectTimeoutMs);try{this.socket=new this.WebSocketImpl(this.webSocketDebuggerUrl)}catch(n){return this.terminate(new Error(`failed to open CDP WebSocket: ${n.message}`)),this.openPromise}const t=this.socket;return t.onopen=()=>{this.closed||this.socketOpen||(this.clearConnectTimer(),this.socketOpen=!0,Promise.all([this.send("Runtime.enable"),this.send("Page.enable")]).then(()=>{if(this.closed)return;this.opened=!0;const n=this.resolveOpen;this.resolveOpen=null,this.rejectOpen=null,n==null||n(this)}).catch(n=>{this.terminate(n),this.closeSocket()}))},t.onmessage=n=>this.handleMessage(n),t.onerror=n=>{const a=n.error,o=a instanceof Error?a.message:typeof n.message=="string"&&n.message.length>0?n.message:"unknown socket error";this.terminate(new Error(`CDP WebSocket error: ${o}`)),this.closeSocket()},t.onclose=()=>{this.closeStarted=!0,this.terminate(new Error("CDP WebSocket closed"))},this.openPromise}send(t,n={},a={}){if(this.closed)return Promise.reject(this.terminalError??new Error("CDP session is closed"));if(!this.socketOpen||!this.socket)return Promise.reject(new Error("CDP session is not open"));if(typeof t!="string"||t.length===0)return Promise.reject(new TypeError("CDP method must be a non-empty string"));const o=X(a.timeoutMs??this.commandTimeoutMs,"timeoutMs"),r=this.nextRequestId++;return new Promise((i,l)=>{const s=setTimeout(()=>{this.pending.delete(r),l(new Error(`CDP ${t} timed out after ${o}ms`))},o);this.pending.set(r,{resolve:i,reject:l,timer:s});try{this.socket.send(JSON.stringify({id:r,method:t,params:n}))}catch(c){clearTimeout(s),this.pending.delete(r),l(new Error(`failed to send CDP ${t}: ${c.message}`))}})}async evaluate(t,n={}){var o,r,i;if(typeof t!="string")throw new TypeError("Runtime.evaluate expression must be a string");const a=await this.send("Runtime.evaluate",{expression:t,awaitPromise:!0,returnByValue:!0},n);if(a!=null&&a.exceptionDetails)throw new Error(`Runtime.evaluate failed: ${((o=a.exceptionDetails.exception)==null?void 0:o.description)??a.exceptionDetails.text??"unknown JavaScript exception"}`);if(((r=a==null?void 0:a.result)==null?void 0:r.type)!=="undefined")return(i=a==null?void 0:a.result)==null?void 0:i.value}async addScriptToEvaluateOnNewDocument(t){const n=await this.send("Page.addScriptToEvaluateOnNewDocument",{source:t});return n==null?void 0:n.identifier}async removeScriptToEvaluateOnNewDocument(t){await this.send("Page.removeScriptToEvaluateOnNewDocument",{identifier:t})}close(){this.closeStarted||(this.terminate(new Error("CDP session closed by client")),this.closeSocket())}handleMessage(t){if(typeof t.data!="string"){this.terminate(new Error("received a non-text CDP WebSocket message")),this.closeSocket();return}let n;try{n=JSON.parse(t.data)}catch(o){this.terminate(new Error(`received malformed CDP JSON: ${o.message}`)),this.closeSocket();return}if(!Number.isInteger(n==null?void 0:n.id))return;const a=this.pending.get(n.id);if(a){if(this.pending.delete(n.id),clearTimeout(a.timer),n.error){a.reject(new Error(`CDP error: ${n.error.message}`));return}a.resolve(n.result)}}terminate(t){if(this.terminalError)return;this.clearConnectTimer(),this.terminalError=t,this.closed=!0,this.socketOpen=!1;const n=this.rejectOpen;this.resolveOpen=null,this.rejectOpen=null,n==null||n(t);for(const{reject:a,timer:o}of this.pending.values())clearTimeout(o),a(t);this.pending.clear()}clearConnectTimer(){this.connectTimer!==null&&(clearTimeout(this.connectTimer),this.connectTimer=null)}closeSocket(){if(this.closeStarted||(this.closeStarted=!0,!this.socket||typeof this.socket.close!="function"))return;const t=this.WebSocketImpl.CLOSING??2,n=this.WebSocketImpl.CLOSED??3;this.socket.readyState===t||this.socket.readyState===n||this.socket.close()}}function ln(e,t){const n=[String(e.id??""),e.url,e.webSocketDebuggerUrl],a=[String(t.id??""),t.url,t.webSocketDebuggerUrl];for(let o=0;o<n.length;o++){if(n[o]<a[o])return-1;if(n[o]>a[o])return 1}return 0}function dn(){return d.join(T.app.getAppPath(),"themes")}function it(){const e=d.join(T.app.getPath("userData"),"themes");return h.mkdirSync(e,{recursive:!0}),e}function mn(){return[it(),dn()]}const Qe=new Map;function Ce(e){const t=[],n=new Set;for(const o of mn()){if(!h.existsSync(o))continue;const r=h.readdirSync(o,{withFileTypes:!0});for(const i of r){if(!i.isDirectory())continue;const l=d.join(o,i.name),s=d.join(l,"theme.json");if(h.existsSync(s))try{const c=JSON.parse(h.readFileSync(s,"utf-8")),u=wn(c);if(n.has(u.id))continue;const p=d.join(l,u.hero);if(!h.existsSync(p)||!h.statSync(p).isFile())throw new Error(`theme hero is missing: ${u.hero}`);if(e&&!un(u,e))continue;n.add(u.id),t.push({id:u.id,name:u.name,author:u.author,path:l,manifest:u})}catch(c){console.error(`Failed to load theme ${i.name}:`,c)}}}const a=new Map;for(const o of t){const r=d.join(o.path,o.manifest.hero),i=Ne(r),l=`${o.name.trim().toLocaleLowerCase()}\0${o.author.trim().toLocaleLowerCase()}\0${i}`,s=a.get(l);(!s||pn(o.id,s.id))&&a.set(l,o)}return[...a.values()].sort((o,r)=>o.name.localeCompare(r.name))}function un(e,t){var a,o;const n=(a=e.apps[t])==null?void 0:a.compat;return n!==void 0?n:((o=O(t))==null?void 0:o.acceptsGenericThemes)===!0}function Ne(e){const t=h.statSync(e),n=Qe.get(e);if(n&&n.size===t.size&&n.mtimeMs===t.mtimeMs)return n.hash;const a=Le.createHash("sha256").update(h.readFileSync(e)).digest("hex");return Qe.set(e,{size:t.size,mtimeMs:t.mtimeMs,hash:a}),a}function pn(e,t){const n=e.startsWith("custom-"),a=t.startsWith("custom-");return n!==a?!n:e.length<t.length||e.length===t.length&&e.localeCompare(t)<0}function ct(e,t){return Ce(t).find(n=>n.id===e)}function hn(e){const t=ct(e);if(!t)return;const n=d.resolve(t.path,t.manifest.hero);if(n.startsWith(`${d.resolve(t.path)}${d.sep}`))return n}function gn(e){return`theme-asset://local/${encodeURIComponent(e)}`}function fn(e){const t=d.join(e.path,e.manifest.hero),n=h.readFileSync(t);return`data:${kn(e.manifest.hero)};base64,${n.toString("base64")}`}function bn(e,t,n){const a=Ne(n);return Ce().some(o=>o.name.trim().toLowerCase()!==e.trim().toLowerCase()||o.author.trim().toLowerCase()!==t.trim().toLowerCase()?!1:Ne(d.join(o.path,o.manifest.hero))===a)}function wn(e){if(typeof e!="object"||e===null||Array.isArray(e))throw new Error("theme manifest must be an object");if(e.schemaVersion!==1)throw new Error(`unsupported theme schema ${e.schemaVersion}`);if(typeof e.id!="string"||!/^[a-z0-9-]+$/.test(e.id))throw new Error("theme id must use lowercase letters, numbers, and hyphens");if(typeof e.name!="string"||!e.name.trim())throw new Error("theme name must be a non-empty string");if(typeof e.author!="string")throw new Error("theme author must be a string");if(typeof e.hero!="string")throw new Error("theme hero must be a string");if(typeof e.colors!="object"||e.colors===null)throw new Error("theme colors must be an object");const t=["accent","secondary","surface","text"];for(const n of t)if(typeof e.colors[n]!="string"||!/^#[0-9a-fA-F]{6}$/.test(e.colors[n]))throw new Error(`theme color ${n} must be a hex color`);return{schemaVersion:1,id:e.id,name:e.name.trim(),author:e.author,hero:e.hero,colors:{accent:e.colors.accent,secondary:e.colors.secondary,surface:e.colors.surface,text:e.colors.text},copy:e.copy??void 0,apps:e.apps??{}}}function kn(e){const t=d.extname(e).toLowerCase();return{".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".gif":"image/gif"}[t]||"image/png"}const lt=5,yn=32*1024*1024;let ue=null;const pe=new Map;function Te(){try{const e=JSON.parse(h.readFileSync(dt(),"utf8"));return Ue(e)}catch{return[]}}function xn(e){const t=Ue(e),n=[...Te()];for(const o of t){const r=n.findIndex(i=>i.id===o.id);r>=0?n[r]=o:n.push(o)}const a=n.slice(0,lt);return We(a),a}function Me(e){if(!/^custom-[a-z0-9-]+$/i.test(e))throw new Error("Invalid custom theme id");const t=Te().filter(n=>n.id!==e);return We(t),console.log(`[custom-theme-store] Deleted ${e}; ${t.length} custom themes remain`),t}function vn(e,t,n,a=4){const o=ut()[e]??{};return[...t].sort((r,i)=>{if(r===n)return-1;if(i===n)return 1;const l=o[r]??{count:0,lastUsedAt:0},s=o[i]??{count:0,lastUsedAt:0};return s.count-l.count||s.lastUsedAt-l.lastUsedAt}).slice(0,a)}function je(e,t){if(!/^[a-z0-9-]+$/i.test(e)||!/^[a-z0-9-]+$/i.test(t))return;const n=ut(),a=n[e]??{},o=a[t]??{count:0};a[t]={count:o.count+1,lastUsedAt:Date.now()},n[e]=a,pt(mt(),n)}function _e(){return ue||(ue=new Promise((e,t)=>{const n=Le.randomBytes(24).toString("hex"),a=tt.createServer((o,r)=>{var s,c;if(r.setHeader("Access-Control-Allow-Origin","*"),r.setHeader("Access-Control-Allow-Headers","Authorization, Content-Type"),r.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),r.setHeader("Access-Control-Allow-Private-Network","true"),o.method==="OPTIONS"){r.writeHead(204).end();return}if(o.headers.authorization!==`Bearer ${n}`){r.writeHead(401).end("Unauthorized");return}if(o.url==="/theme-usage"&&o.method==="POST"){he(o,r,u=>{if(typeof(u==null?void 0:u.appId)!="string"||typeof(u==null?void 0:u.themeId)!="string")throw new Error("Invalid theme usage payload");je(u.appId,u.themeId),J(r,200,{success:!0})});return}const i=(s=o.url)==null?void 0:s.match(/^\/app-state\/([a-z0-9-]+)$/i);if(i){const u=i[1].toLowerCase();if(o.method==="GET"){J(r,200,pe.get(u)??null);return}if(o.method==="PUT"){he(o,r,p=>{if(typeof(p==null?void 0:p.themeId)!="string"||!Number.isFinite(Number(p==null?void 0:p.actionAt)))throw new Error("Invalid app state payload");const m={themeId:p.themeId,actionAt:Number(p.actionAt)},g=pe.get(u);(!g||m.actionAt>=g.actionAt)&&pe.set(u,m),J(r,200,pe.get(u))});return}r.writeHead(405).end("Method not allowed");return}if(o.url==="/custom-themes/delete"&&o.method==="POST"){he(o,r,u=>{if(typeof(u==null?void 0:u.themeId)!="string"||!/^custom-[a-z0-9-]+$/i.test(u.themeId))throw new Error("Invalid custom theme id");const p=Me(u.themeId);J(r,200,p)});return}const l=(c=o.url)==null?void 0:c.match(/^\/custom-themes\/([a-z0-9-]+)$/i);if(l&&o.method==="DELETE"){const u=decodeURIComponent(l[1]),p=Me(u);J(r,200,p);return}if(o.url!=="/custom-themes"){r.writeHead(404).end("Not found");return}if(o.method==="GET"){J(r,200,Te());return}if(o.method!=="PUT"){r.writeHead(405).end("Method not allowed");return}he(o,r,u=>{const p=Ue(u);We(p),J(r,200,p)})});a.once("error",t),a.listen(0,"127.0.0.1",()=>{const o=a.address();if(!o||typeof o=="string"){a.close(),t(new Error("Shared custom theme service did not expose a TCP port"));return}const r=`http://127.0.0.1:${o.port}`;e({endpoint:`${r}/custom-themes`,usageEndpoint:`${r}/theme-usage`,appStateEndpoint:`${r}/app-state`,token:n})})}),ue)}function dt(){return d.join(T.app.getPath("userData"),"custom-themes.json")}function mt(){return d.join(T.app.getPath("userData"),"theme-usage.json")}function We(e){pt(dt(),e)}function ut(){try{const e=JSON.parse(h.readFileSync(mt(),"utf8"));return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}}function pt(e,t){h.mkdirSync(d.dirname(e),{recursive:!0}),h.writeFileSync(e,`${JSON.stringify(t,null,2)}
`)}function he(e,t,n){let a=0;const o=[];e.on("data",r=>{if(a+=r.length,a>yn){t.writeHead(413).end("Payload too large"),e.destroy();return}o.push(r)}),e.on("end",()=>{if(!t.headersSent)try{n(JSON.parse(Buffer.concat(o).toString("utf8")))}catch(r){t.writeHead(400).end(r.message)}})}function Ue(e){if(!Array.isArray(e))throw new Error("Custom themes must be an array");return e.slice(0,lt).map((t,n)=>{var o;if(!t||typeof t!="object")throw new Error(`Invalid custom theme at index ${n}`);const a=t;if(typeof a.id!="string"||!/^custom-[a-z0-9-]+$/i.test(a.id))throw new Error(`Invalid custom theme id at index ${n}`);if(typeof a.name!="string"||!a.name.trim())throw new Error(`Invalid custom theme name at index ${n}`);if(typeof a.dataUrl!="string"||!/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(a.dataUrl))throw new Error(`Invalid custom theme image at index ${n}`);for(const r of["accent","secondary","surface","text"])if(typeof((o=a.colors)==null?void 0:o[r])!="string"||!/^#[0-9a-f]{6}$/i.test(a.colors[r]))throw new Error(`Invalid custom theme color ${r} at index ${n}`);return{id:a.id,name:a.name.trim(),dataUrl:a.dataUrl,colors:{accent:a.colors.accent,secondary:a.colors.secondary,surface:a.colors.surface,text:a.colors.text}}})}function J(e,t,n){e.writeHead(t,{"Content-Type":"application/json; charset=utf-8"}),e.end(JSON.stringify(n))}const P="dream-work-style",$="dream-work-menu",ie=new Map,te=new Map,K=new Map,ke=new Map,Ae=new Map,ge=new Map,Oe=new Map,ye=new Map,V=new Map,xe=new Map,ne=new Map,ae=new Map,ve=new Map,oe=new Map,L=new Map,ce=new Map,re=new Map,se=new Map,W="dream-work-theme:kimi:restored",Q="dream-work-theme:kimi:action-at",ht=new Set,k={id:"wb-dream-sentinel-id",hero:"data:image/png;base64,WBDREAMHEROSENTINEL",accent:"#010203",secondary:"#040506",surface:"#070809",text:"#0a0b0c"};let fe=null;async function Sn(){if(!fe)try{const e=d.resolve(__dirname,"manager","codex-dream-skin.css");fe=await It.readFile(e,"utf-8")}catch(e){console.warn("[injector] Failed to load Codex base CSS:",e.message),fe=""}return fe}async function gt(e,t,n,a={}){var u,p;const o=O(e),r=((u=a.profile)==null?void 0:u.version)??(e==="monkeycode"?(p=await Mt(e))==null?void 0:p.version:void 0),i=e==="monkeycode"&&Rn(r)>=26082107,l=a.rendererUrlHint?[a.rendererUrlHint]:(o==null?void 0:o.rendererHints)??["renderer/index.html","index.html"];let s=[],c="No renderer targets found";for(const m of l)try{if(console.log(`[injector] Trying hint "${m}" on port ${n}`),s=await cn(n,m,{timeoutMs:2e4,pollMs:500}),s.length>0){console.log(`[injector] Found ${s.length} targets with hint "${m}"`);break}}catch(g){c=g.message,console.log(`[injector] Hint "${m}" failed: ${g.message}`)}if(e==="sparkdesk")try{const m=await le(n);m.length>0&&(s=m)}catch(m){console.log(`[injector] Failed to collect SparkDesk targets: ${m.message}`)}if(e==="stepfun")try{const m=await He(n);m.length>0&&(s=m)}catch(m){console.log(`[injector] Failed to collect all StepFun targets: ${m.message}`)}if(e==="monkeycode")try{const m=await Ee(n);m.length>0&&(s=m,await Wn(s))}catch(m){console.log(`[injector] Failed to collect MonkeyCode main target: ${m.message}`)}if(e==="kimi")try{const m=await Ke(n);m.length>0&&(s=m),await _n(s)}catch(m){console.log(`[injector] Failed to collect all Kimi targets: ${m.message}`)}if(s.length===0&&e!=="monkeycode")try{console.log(`[injector] Strict hints failed, trying relaxed page-target fallback on port ${n}`);const g=await(await fetch(`http://127.0.0.1:${n}/json/list`,{signal:AbortSignal.timeout(5e3)})).json(),b=(Array.isArray(g)?g:[]).filter(Fe).sort((E,N)=>{const z=[String(E.id??""),E.url,E.webSocketDebuggerUrl],U=[String(N.id??""),N.url,N.webSocketDebuggerUrl];for(let M=0;M<z.length;M++){if(z[M]<U[M])return-1;if(z[M]>U[M])return 1}return 0});b.length>0&&(console.log(`[injector] Relaxed fallback found ${b.length} page targets`),s=b)}catch(m){console.log(`[injector] Relaxed fallback failed: ${m.message}`)}if(s.length===0)return{success:!1,applied:0,error:c};try{const m=Ce(e);if(console.log(`[injector] Loaded ${m.length} themes`),!m.some(f=>f.id===t))return{success:!1,applied:0,error:`Theme ${t} is not compatible with ${e}`};const g=vn(e,m.map(f=>f.id),t),b=new Map(m.map(f=>[f.id,f])),E=g.map(f=>b.get(f)).filter(Boolean),N=new Map;for(const f of E){const y=Bn(e,f);N.set(f.id,{name:f.name,css:Ze(e,f.manifest,fn(f),{monkeyCodeModern:i})+(y?On(f):""),surface:f.manifest.colors.surface})}const z=Array.from(N.entries()).map(([f,y])=>{var A;return{id:f,name:y.name,css:y.css,surface:y.surface,accent:((A=m.find(w=>w.id===f))==null?void 0:A.manifest.colors.accent)??"#24c9d7"}});let U=Te();if(U.length===0){const f=e==="workbuddy"?"dreamCustomThemes":"dreamCodexCustomThemes";for(const y of s){const A=new C(y.webSocketDebuggerUrl);try{await A.open();const w=await A.evaluate(`(() => localStorage.getItem(${JSON.stringify(f)}) || '[]')()`),_=JSON.parse(w).filter(S=>!ht.has(S==null?void 0:S.id));if(Array.isArray(_)&&_.length>0){U=xn(_);break}}catch(w){console.warn(`[injector] Failed to import existing custom themes from ${e} target ${y.id}:`,w)}finally{A.close()}}}const M=await _e();if(e==="stepfun"){const f=Date.now();await fetch(`${M.appStateEndpoint}/stepfun`,{method:"PUT",headers:{Authorization:`Bearer ${M.token}`,"Content-Type":"application/json"},body:JSON.stringify({themeId:t,actionAt:f})}).catch(()=>{});for(const y of s.filter(A=>String(A.url).startsWith("app://chat-web/"))){const A=new C(y.webSocketDebuggerUrl);try{await A.open(),await A.evaluate(`(() => {
            localStorage.setItem('dream-work-theme:stepfun:state', ${JSON.stringify(JSON.stringify({themeId:t,actionAt:f}))});
          })()`)}catch{}finally{A.close()}}}e==="sparkdesk"&&await fetch(`${M.appStateEndpoint}/sparkdesk`,{method:"PUT",headers:{Authorization:`Bearer ${M.token}`,"Content-Type":"application/json"},body:JSON.stringify({themeId:t,actionAt:Date.now()})}).catch(()=>{});const B=e==="workbuddy"?ra({styleId:P,menuId:$,currentThemeId:t,themes:z,sharedCustomThemes:U,sharedCustomThemeService:M,cssTemplate:bt({id:k.id,colors:{accent:k.accent,secondary:k.secondary,surface:k.surface,text:k.text},copy:null},k.hero,{accent:k.accent,secondary:k.secondary,surface:k.surface,text:k.text})}):e==="hana-agent"?ea({styleId:P,menuId:$,currentThemeId:t,themes:z,sharedCustomThemes:U,sharedCustomThemeService:M,cssTemplate:ft({id:k.id,colors:{accent:k.accent,secondary:k.secondary,surface:k.surface,text:k.text}},k.hero,{accent:k.accent,secondary:k.secondary,surface:k.surface,text:k.text})}):sa({styleId:P,menuId:$,currentThemeId:t,appId:e,monkeyCodeModern:i,themes:z,sharedCustomThemes:U,sharedCustomThemeService:M,cssTemplate:Ze(e,{id:k.id,colors:{accent:k.accent,secondary:k.secondary,surface:k.surface,text:k.text}},k.hero,{monkeyCodeModern:i})});let R=0;for(const f of s)try{console.log(`[injector] Injecting to target ${f.id}: ${f.url}`);const y=new C(f.webSocketDebuggerUrl);if(await y.open(),e==="workbuddy"){let w=!1;const _=Date.now()+15e3;for(;Date.now()<_&&(w=await y.evaluate(`(() => {
              const body = document.body;
              return body?.dataset.applicationName === 'workbuddy' && Boolean(
                document.querySelector('[data-view-id], .teams-container, .conversation-list, .main-content')
              );
            })()`).catch(()=>!1),!w);)await new Promise(S=>setTimeout(S,100));if(!w){console.warn(`[injector] Skipping non-WorkBuddy target ${f.id}: ${f.url}`),y.close();continue}}if(e==="codex"){const w=await Sn();w&&await y.evaluate(`(() => {
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
          })()`,_=e==="hana-agent"?ie:e==="kimi"?ke:e==="doubao"?Oe:e==="stepfun"?xe:e==="sparkdesk"?ve:ce,S=_.get(f.id);S&&await y.removeScriptToEvaluateOnNewDocument(S).catch(()=>{});const q=await y.addScriptToEvaluateOnNewDocument(w);q&&_.set(f.id,q)}const A=await y.evaluate(e==="hana-agent"?`(() => { window.__dreamWorkForceApply = true; return ${B}; })()`:B);if(console.log(`[injector] Injection result for target ${f.id}:`,A),e==="hana-agent"){let w=!1;for(let _=0;_<20&&(w=await y.evaluate(`(() => {
              const host = document.getElementById('${$}-host');
              return Boolean(
                document.getElementById('${P}') &&
                host?.shadowRoot?.getElementById('${$}') &&
                document.documentElement.dataset.dreamTheme
              );
            })()`).catch(()=>!1),!w);_++)await new Promise(S=>setTimeout(S,100));if(!w){console.warn(`[injector] HanaAgent injection did not become ready for target ${f.id}`),y.close();continue}}if(e==="codex")for(let w=1;w<=4;w++){const _=await y.evaluate(`(() => {
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
            })`);if(_.homeClasses&&_.homeClasses.includes("dream-skin-home")){console.log(`[injector] Codex home detection for ${f.id}: attempt=${w}`,JSON.stringify(_));break}w<4&&await new Promise(S=>setTimeout(S,800))}if(e==="codex")try{const w=await y.evaluate(`(() => {
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
            })()`);console.log(`[injector] Codex debug info for ${f.id}:`,JSON.stringify(w,null,2))}catch(w){console.error(`[injector] Failed to get debug info for ${f.id}:`,w)}y.close(),R++}catch(y){console.error(`[injector] Failed to inject to target ${f.id}:`,y)}if(e==="hana-agent"&&R>0){const f=new Set(s.map(_=>_.id)),y=Date.now()+2e4;let A="",w=0;for(;Date.now()<y;){let _=[];try{_=await Z(n,".hanako/artifacts/renderer/",{timeoutMs:2e3,quiet:!0})}catch{}const S=_[0];if(!S){A="",w=0,await new Promise(H=>setTimeout(H,250));continue}if(!f.has(S.id)){console.log(`[injector] HanaAgent created renderer target ${S.id}; injecting theme`);const H=new C(S.webSocketDebuggerUrl);try{await H.open();const xt=`(() => {
              const inject = () => ${B};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,Je=await H.addScriptToEvaluateOnNewDocument(xt);Je&&ie.set(S.id,Je),await H.evaluate(`(() => { window.__dreamWorkForceApply = true; return ${B}; })()`),f.add(S.id)}finally{H.close()}}const q=new C(S.webSocketDebuggerUrl);let ze=!1;try{await q.open(),ze=await q.evaluate(`(() => {
            const host = document.getElementById('${$}-host');
            return Boolean(document.getElementById('${P}') && host?.shadowRoot?.getElementById('${$}') && document.documentElement.dataset.dreamTheme);
          })()`)}catch{}finally{q.close()}if(ze){if(A!==S.id)A=S.id,w=Date.now();else if(Date.now()-w>=2e3)return Nn(n,B,f),je(e,t),{success:!0,applied:1}}else A="",w=0;await new Promise(H=>setTimeout(H,250))}return{success:!1,applied:0,error:"HanaAgent renderer did not stabilize with the injected theme"}}return e==="kimi"&&R>0&&En(n,B,new Set(s.map(f=>f.id))),e==="doubao"&&R>0&&Tn(n,B),e==="sparkdesk"&&R>0&&$n(n,B),e==="stepfun"&&R>0&&Cn(n,B),e==="monkeycode"&&R>0&&Un(n,B),R>0&&je(e,t),{success:R>0,applied:R}}catch(m){return console.error("[injector] Injection failed:",m),{success:!1,applied:0,error:m.message}}}async function He(e){const t=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(2e3)});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();return(Array.isArray(n)?n:[]).filter(a=>{if((a==null?void 0:a.type)!=="page"||!a.webSocketDebuggerUrl)return!1;const o=String(a.url??"");return o.startsWith("app://chat-web/")||o.startsWith("app://ui/pages/browser/")||o.startsWith("https://chat.stepfun.com/subscription")})}async function le(e){const t=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(2e3)});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();return(Array.isArray(n)?n:[]).filter(a=>{if((a==null?void 0:a.type)!=="page"||!a.webSocketDebuggerUrl)return!1;const o=String(a.url??"");return/\/out\/renderer\/index\.html(?:#desk|#settings)?$/.test(o)})}function $n(e,t){const n=oe.get(e);n&&clearInterval(n);const a=(L.get(e)??0)+1;L.set(e,a);let o=!1;const r=setInterval(async()=>{if(!(o||L.get(e)!==a)){o=!0;try{const i=await le(e),l=await _e(),s=await fetch(`${l.appStateEndpoint}/sparkdesk`,{headers:{Authorization:`Bearer ${l.token}`},signal:AbortSignal.timeout(1e3)}).then(c=>c.ok?c.json():null).catch(()=>null);if(L.get(e)!==a)return;for(const c of i){if(L.get(e)!==a)return;const u=new C(c.webSocketDebuggerUrl);try{if(await u.open(),!await u.evaluate(`(() => Boolean(window.__dreamTheme?.activateTheme && document.getElementById('${P}')))()`).catch(()=>!1)){if(L.get(e)!==a)return;const m=await fetch(`${l.appStateEndpoint}/sparkdesk`,{headers:{Authorization:`Bearer ${l.token}`},signal:AbortSignal.timeout(1e3)}).then(E=>E.ok?E.json():null).catch(()=>null);if(!m||m.actionAt!==(s==null?void 0:s.actionAt)||m.themeId!==(s==null?void 0:s.themeId))continue;const g=`(() => {
              const inject = () => ${t};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,b=await u.addScriptToEvaluateOnNewDocument(g);b&&ve.set(c.id,b),await u.evaluate(t)}if(s){if(L.get(e)!==a)return;const m=await u.evaluate("(() => document.documentElement.dataset.dreamTheme || '')()");if(L.get(e)!==a)return;const g=await fetch(`${l.appStateEndpoint}/sparkdesk`,{headers:{Authorization:`Bearer ${l.token}`},signal:AbortSignal.timeout(1e3)}).then(b=>b.ok?b.json():null).catch(()=>null);if(!g||g.actionAt!==s.actionAt||g.themeId!==s.themeId)continue;s.themeId&&m!==s.themeId?await u.evaluate(`(() => window.__dreamTheme?.activateTheme(${JSON.stringify(s.themeId)}, ${s.actionAt}))()`):!s.themeId&&m&&await u.evaluate(`(() => window.__dreamTheme?.restoreNative(${s.actionAt}))()`)}}catch{}finally{u.close()}}}catch{await me(e)||(clearInterval(r),oe.delete(e))}finally{o=!1}}},500);r.unref(),oe.set(e,r)}function Cn(e,t){const n=ne.get(e);n&&clearInterval(n);const a=(ae.get(e)??0)+1;ae.set(e,a);let o=!1;const r=setInterval(async()=>{if(!(o||ae.get(e)!==a)){o=!0;try{const i=await He(e),l=await _e();let s=await fetch(`${l.appStateEndpoint}/stepfun`,{headers:{Authorization:`Bearer ${l.token}`},signal:AbortSignal.timeout(1e3)}).then(p=>p.ok?p.json():null).catch(()=>null),c=!1,u=!1;for(const p of i){const m=new C(p.webSocketDebuggerUrl);try{await m.open();const g=await m.evaluate(`(() => ({
            ready: Boolean(window.__dreamTheme?.activateTheme && document.getElementById('${P}')),
            themeId: document.documentElement.dataset.dreamTheme || '',
            restoring: Boolean(window.__dreamTheme?.restoring)
          }))()`).catch(()=>({ready:!1,themeId:"",restoring:!1}));if(String(p.url).startsWith("app://chat-web/")&&g.restoring&&(u=!0),String(p.url).startsWith("app://chat-web/")&&g.ready&&!g.themeId&&(c=!0),!g.ready){const b=`(() => {
              const inject = () => ${t};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,E=await m.addScriptToEvaluateOnNewDocument(b);E&&xe.set(p.id,E),await m.evaluate(t)}}catch{}finally{m.close()}}if((u||c)&&(s={themeId:"",actionAt:Date.now()},await fetch(`${l.appStateEndpoint}/stepfun`,{method:"PUT",headers:{Authorization:`Bearer ${l.token}`,"Content-Type":"application/json"},body:JSON.stringify(s),signal:AbortSignal.timeout(1e3)}).catch(()=>{})),s)for(const p of i){const m=new C(p.webSocketDebuggerUrl);try{await m.open();const g=await m.evaluate("(() => document.documentElement.dataset.dreamTheme || '')()");s.themeId?g!==s.themeId&&await m.evaluate(`(() => window.__dreamTheme?.activateTheme(${JSON.stringify(s.themeId)}, ${s.actionAt}))()`):g&&await m.evaluate(`(() => window.__dreamTheme?.restoreNative(${s.actionAt}))()`)}catch{}finally{m.close()}}}catch{await me(e)||(clearInterval(r),ne.delete(e))}finally{o=!1}}},750);r.unref(),ne.set(e,r)}async function Ke(e){const t=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(2e3)});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();return(Array.isArray(n)?n:[]).filter(a=>{if((a==null?void 0:a.type)!=="page"||!a.webSocketDebuggerUrl)return!1;const o=String(a.url??"");return o.includes("kimi-agent.html")||o.includes("kimichat.html")||/^https:\/\/(?:www\.)?kimi\.com\//.test(o)})}function Tn(e,t){var i;const n=ye.get(e);n&&clearInterval(n);const a=(V.get(e)??0)+1;V.set(e,a);let o=!1;const r=setInterval(async()=>{if(!(o||V.get(e)!==a)){o=!0;try{const l=await Z(e,"doubao://doubao-chat/chat",{timeoutMs:2e3,quiet:!0});for(const s of l){const c=new C(s.webSocketDebuggerUrl);try{await c.open();const u=await c.evaluate(`(() => ({
            restored: document.documentElement.dataset.dreamThemeRestored === 'true' || (() => {
              try { return localStorage.getItem('dream-work-theme:doubao:restored') === '1'; } catch { return false; }
            })(),
            ready: Boolean(document.getElementById('${P}')?.textContent && document.documentElement.dataset.dreamTheme)
          }))()`).catch(()=>({restored:!1,ready:!1}));!u.restored&&!u.ready&&(console.log(`[injector] Doubao renderer ${s.id} lost theme after navigation; reinjecting`),await c.evaluate(t))}finally{c.close()}}}catch(l){V.get(e)===a&&console.warn("[injector] Doubao watcher check failed:",l.message)}finally{o=!1}}},500);(i=r.unref)==null||i.call(r),ye.set(e,r)}async function _n(e){for(const t of e){const n=new C(t.webSocketDebuggerUrl);try{await n.open(),await n.evaluate(`(() => {
        try { localStorage.removeItem('${W}'); } catch {}
        delete document.documentElement.dataset.dreamThemeRestored;
        return true;
      })()`)}finally{n.close()}}}function En(e,t,n){const a=Ae.get(e);a&&clearInterval(a);const o=(ge.get(e)??0)+1;ge.set(e,o);let r=!1;const i=setInterval(async()=>{var l;if(!(r||ge.get(e)!==o)){r=!0;try{const s=await Ke(e),c=[];for(const m of s){const g=new C(m.webSocketDebuggerUrl);try{await g.open();const b=await g.evaluate(`(() => {
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
          })()`).catch(()=>({restored:!1,themeId:"",actionAt:0,ready:!1,deleteCustomThemeId:""}));c.push({target:m,...b})}finally{g.close()}}const u=(l=c.find(m=>m.deleteCustomThemeId))==null?void 0:l.deleteCustomThemeId;if(u){const m=Me(u);ht.add(u),await An(s,m,u)}const p=[...c].sort((m,g)=>g.actionAt-m.actionAt)[0];if(p!=null&&p.restored){console.log("[injector] Kimi watcher observed restore state; preserving menus without theme"),await In(s,t,n,p.actionAt);return}if(p!=null&&p.ready&&p.themeId&&c.some(m=>m.restored||!m.ready||m.themeId!==p.themeId)){console.log(`[injector] Kimi watcher synchronizing selected theme ${p.themeId} across targets`),await Pn(s,t,n,p.themeId,p.actionAt);return}for(const m of s){if(ge.get(e)!==o)return;const g=new C(m.webSocketDebuggerUrl);try{await g.open();const b=await g.evaluate(`(() => ({
            ready: Boolean(document.getElementById('${P}') && document.documentElement.dataset.dreamTheme),
            restored: document.documentElement.dataset.dreamThemeRestored === 'true'
          }))()`).catch(()=>({ready:!1,restored:!1}));if(b.ready||b.restored){n.add(m.id);continue}if(console.log(`[injector] Kimi watcher restoring theme on target ${m.id}: ${m.url}`),!n.has(m.id)){const E=`(() => {
              const inject = () => ${t};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,N=await g.addScriptToEvaluateOnNewDocument(E);N&&ke.set(m.id,N)}await g.evaluate(t),n.add(m.id)}finally{g.close()}}}catch{await me(e)||(clearInterval(i),Ae.delete(e))}finally{r=!1}}},750);i.unref(),Ae.set(e,i)}async function An(e,t,n){const a=JSON.stringify(t);for(const o of e){const r=new C(o.webSocketDebuggerUrl);try{await r.open(),await r.evaluate(`(() => {
        delete window.__dreamWorkDeleteCustomThemeId;
        try { localStorage.setItem('dreamCodexCustomThemes', ${JSON.stringify(a)}); } catch {}
        const host = document.getElementById('${$}-host');
        const menu = host?.shadowRoot?.getElementById('${$}');
        for (const row of Array.from(menu?.querySelectorAll('div') || [])) {
          if (row.dataset?.customThemeId === ${JSON.stringify(n)}) row.remove();
        }
        window.__dreamTheme?.replaceCustomThemes?.(${a});
        return true;
      })()`)}finally{r.close()}}}async function In(e,t,n,a){for(const o of e){const r=new C(o.webSocketDebuggerUrl);try{if(await r.open(),!ke.has(o.id)){const l=`(() => {
          const inject = () => ${t};
          if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
          else inject();
        })()`,s=await r.addScriptToEvaluateOnNewDocument(l);s&&ke.set(o.id,s)}await r.evaluate(`(() => {
        try { localStorage.setItem('${W}', '1'); } catch {}
        try { localStorage.setItem('${Q}', '${a}'); } catch {}
        document.documentElement.dataset.dreamThemeRestored = 'true';
        return true;
      })()`),await r.evaluate(`(() => {
        const host = document.getElementById('${$}-host');
        return Boolean(host?.shadowRoot?.getElementById('${$}'));
      })()`).catch(()=>!1)||await r.evaluate(t),await r.evaluate(`(() => {
        try { localStorage.setItem('${W}', '1'); } catch {}
        try { localStorage.setItem('${Q}', '${a}'); } catch {}
        document.documentElement.dataset.dreamThemeRestored = 'true';
        const style = document.getElementById('${P}');
        if (style) style.textContent = '';
        delete document.documentElement.dataset.dreamTheme;
        delete document.documentElement.dataset.dreamShell;
        return true;
      })()`),n.add(o.id)}finally{r.close()}}}async function Pn(e,t,n,a,o){for(const r of e){const i=new C(r.webSocketDebuggerUrl);try{await i.open(),await i.evaluate(`(() => {
        try {
          localStorage.removeItem('${W}');
          localStorage.setItem('${Q}', '${o}');
        } catch {}
        delete document.documentElement.dataset.dreamThemeRestored;
        return true;
      })()`),await i.evaluate("(() => Boolean(window.__dreamTheme?.activateTheme))()").catch(()=>!1)||await i.evaluate(t),await i.evaluate(`(() => window.__dreamTheme?.activateTheme(${JSON.stringify(a)}, ${o}))()`),n.add(r.id)}finally{i.close()}}}async function Dn(e,t,n={}){return Mn(e,t,n)}function Nn(e,t,n){const a=te.get(e);a&&clearInterval(a);const o=(K.get(e)??0)+1;K.set(e,o);let r=!1;const i=setInterval(async()=>{if(!r&&K.get(e)===o){r=!0;try{const s=(await Z(e,".hanako/artifacts/renderer/",{timeoutMs:1e3,quiet:!0}))[0];if(!s||K.get(e)!==o)return;const c=new C(s.webSocketDebuggerUrl);try{await c.open();const u=await c.evaluate(`(() => {
          const host = document.getElementById('${$}-host');
          if (document.documentElement.dataset.dreamThemeRestored === 'true') return 'restored';
          return document.getElementById('${P}') && host?.shadowRoot?.getElementById('${$}') && document.documentElement.dataset.dreamTheme
            ? 'ready'
            : 'missing';
        })()`).catch(()=>"missing");if(u==="ready"||u==="restored"){n.add(s.id);return}if(console.log(`[injector] HanaAgent watcher restoring theme on renderer target ${s.id}`),K.get(e)!==o)return;const p=`(() => {
          const inject = () => ${t};
          if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
          else inject();
        })()`;if(!n.has(s.id)){const m=await c.addScriptToEvaluateOnNewDocument(p);m&&ie.set(s.id,m)}if(await c.evaluate(t),K.get(e)!==o){await c.evaluate(`(() => {
            document.getElementById('${P}')?.remove();
            document.getElementById('${$}-host')?.remove();
            clearInterval(window.__dreamWorkMenuGuard);
            delete window.__dreamWorkMenuGuard;
            delete document.documentElement.dataset.dreamTheme;
          })()`).catch(()=>{});return}n.add(s.id)}finally{c.close()}}catch{await me(e)||(clearInterval(i),te.delete(e))}finally{r=!1}}},1e3);te.set(e,i)}async function me(e){try{return(await fetch(`http://127.0.0.1:${e}/json/version`,{signal:AbortSignal.timeout(500)})).ok}catch{return!1}}async function Mn(e,t,n={}){var l;const a=n.rendererUrlHint?[n.rendererUrlHint]:((l=O(e))==null?void 0:l.rendererHints)??["renderer/index.html","index.html"];let o=[];for(const s of a)try{if(o=await Z(t,s,{timeoutMs:1e3,quiet:!0}),o.length>0)break}catch{}if(e==="sparkdesk")try{const s=await le(t);s.length>0&&(o=s)}catch{}if(e==="monkeycode")try{o=await Ee(t)}catch{}if(o.length===0&&e!=="monkeycode")try{const c=await(await fetch(`http://127.0.0.1:${t}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();o=(Array.isArray(c)?c:[]).filter(Fe).sort((u,p)=>{const m=[String(u.id??""),u.url,u.webSocketDebuggerUrl],g=[String(p.id??""),p.url,p.webSocketDebuggerUrl];for(let b=0;b<m.length;b++){if(m[b]<g[b])return-1;if(m[b]>g[b])return 1}return 0})}catch{}if(o.length===0)return{installed:!1,menu:!1,targets:0};const r=[];for(const s of o){const c=new C(s.webSocketDebuggerUrl);try{if(await c.open(),e==="workbuddy"&&!await c.evaluate("(() => document.body?.dataset.applicationName === 'workbuddy')()"))continue;const u=await c.evaluate(`(() => {
        const style = document.getElementById('${P}');
        const menuHost = document.getElementById('${$}-host');
        const menu = document.getElementById('${$}') || menuHost?.shadowRoot?.getElementById('${$}');
        return JSON.stringify({
          installed: Boolean(style),
          menu: Boolean(menu),
          themeId: document.documentElement.dataset.dreamTheme ?? undefined
        });
      })()`),p=JSON.parse(u);r.push(p)}catch(u){console.warn(`[injector] Status check failed for ${e} target ${s.id}:`,u)}finally{c.close()}}const i=r.find(s=>s.installed&&s.themeId)??r.find(s=>s.installed);return{installed:r.some(s=>s.installed),menu:r.some(s=>s.menu),themeId:i==null?void 0:i.themeId,targets:r.length}}async function jn(e,t,n={}){var i;const a=Date.now();if(e==="hana-agent"){K.set(t,(K.get(t)??0)+1);const l=te.get(t);l&&clearInterval(l),te.delete(t)}if(e==="doubao"){V.set(t,(V.get(t)??0)+1);const l=ye.get(t);l&&clearInterval(l),ye.delete(t)}if(e==="stepfun"){ae.set(t,(ae.get(t)??0)+1);const l=ne.get(t);l&&clearInterval(l),ne.delete(t)}if(e==="sparkdesk"){L.set(t,(L.get(t)??0)+1);const l=oe.get(t);l&&clearInterval(l),oe.delete(t);const s=await _e();await fetch(`${s.appStateEndpoint}/sparkdesk`,{method:"PUT",headers:{Authorization:`Bearer ${s.token}`,"Content-Type":"application/json"},body:JSON.stringify({themeId:"",actionAt:a})}).catch(()=>{})}if(e==="monkeycode"){se.set(t,(se.get(t)??0)+1);const l=re.get(t);l&&clearInterval(l),re.delete(t)}const o=n.rendererUrlHint??((i=O(e))==null?void 0:i.rendererHints[0])??"renderer/index.html";let r=[];try{r=e==="kimi"?await Ke(t):e==="stepfun"?await He(t):e==="sparkdesk"?await le(t):e==="monkeycode"?await Ee(t):await Z(t,o)}catch{}if(r.length===0)try{const s=await(await fetch(`http://127.0.0.1:${t}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();r=(Array.isArray(s)?s:[]).filter(Fe).sort((c,u)=>{const p=[String(c.id??""),c.url,c.webSocketDebuggerUrl],m=[String(u.id??""),u.url,u.webSocketDebuggerUrl];for(let g=0;g<p.length;g++){if(p[g]<m[g])return-1;if(p[g]>m[g])return 1}return 0})}catch{}if(r.length===0)return{success:!1};for(const l of e==="hana-agent"||e==="kimi"||e==="agnes-code"||e==="stepfun"||e==="sparkdesk"?r:r.slice(0,1)){const s=new C(l.webSocketDebuggerUrl);if(await s.open(),e==="hana-agent"){const c=ie.get(l.id);c&&(await s.removeScriptToEvaluateOnNewDocument(c).catch(()=>{}),ie.delete(l.id))}if(e==="doubao"){const c=Oe.get(l.id);c&&(await s.removeScriptToEvaluateOnNewDocument(c).catch(()=>{}),Oe.delete(l.id))}if(e==="stepfun"){const c=xe.get(l.id);c&&(await s.removeScriptToEvaluateOnNewDocument(c).catch(()=>{}),xe.delete(l.id))}if(e==="sparkdesk"){const c=ve.get(l.id);c&&(await s.removeScriptToEvaluateOnNewDocument(c).catch(()=>{}),ve.delete(l.id))}if(e==="monkeycode"){const c=ce.get(l.id);c&&(await s.removeScriptToEvaluateOnNewDocument(c).catch(()=>{}),ce.delete(l.id))}await s.evaluate(`(async () => {
      ${e==="sparkdesk"?`await window.__dreamTheme?.restoreNative(${a});`:""}
      ${e==="hana-agent"?`try { localStorage.setItem('dream-work-theme:hana-agent:restored', '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';`:""}
      ${e==="doubao"?"document.documentElement.dataset.dreamThemeRestored = 'true';":""}
      ${e==="doubao"?"try { localStorage.setItem('dream-work-theme:doubao:restored', '1'); } catch {}":""}
      ${e==="kimi"?`try { localStorage.setItem('${W}', '1'); } catch {}
      try { localStorage.setItem('${Q}', '${a}'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';`:""}
      ${e==="kimi"?`const style = document.getElementById('${P}');
      if (style) style.textContent = '';`:`document.getElementById('${P}')?.remove();
      document.getElementById('${$}')?.remove();
      document.getElementById('${$}-host')?.remove();
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
    })`),s.close()}if(e==="sparkdesk"){await new Promise(s=>setTimeout(s,750));const l=await le(t).catch(()=>[]);for(const s of l){const c=new C(s.webSocketDebuggerUrl);try{await c.open(),await c.evaluate(`(async () => {
          await window.__dreamWorkRestoreNativeMode?.();
          document.getElementById('${P}')?.remove();
          document.getElementById('${$}')?.remove();
          document.getElementById('${$}-host')?.remove();
          clearInterval(window.__dreamWorkMenuGuard);
          delete window.__dreamWorkMenuGuard;
          delete document.documentElement.dataset.dreamTheme;
          delete document.documentElement.dataset.dreamShell;
          return true;
        })()`)}finally{c.close()}}}return{success:!0}}function On(e){try{const t=d.join(e.path,"theme.css");return h.existsSync(t)?`
/* theme.css */
`+h.readFileSync(t,"utf-8"):""}catch(t){return console.warn(`[injector] Failed to read theme.css for ${e.id}:`,t),""}}function Bn(e,t){var o,r,i;return((o=O(e))==null?void 0:o.kind)!=="generic-work"?!1:((i=(r=t.manifest.apps)==null?void 0:r[e])==null?void 0:i.compat)!==!1}function Rn(e){const t=String(e??"").match(/^\s*(\d{8})/);return t?Number(t[1]):0}function Ze(e,t,n,a={}){var i,l,s,c;const o={accent:((i=t.colors)==null?void 0:i.accent)??"#24c9d7",secondary:((l=t.colors)==null?void 0:l.secondary)??"#ef8fd3",surface:((s=t.colors)==null?void 0:s.surface)??"#f7fbff",text:((c=t.colors)==null?void 0:c.text)??"#17344f"};if(e==="codex")return aa(t,n,o);const r=O(e);return(r==null?void 0:r.kind)==="vscode-work"?Ln(t,n,o):(r==null?void 0:r.kind)==="generic-work"?e==="hana-agent"?ft(t,n,o):e==="kimi"?Yn(t,n,o):Fn(e,t,n,o,a):bt({...t,copy:null},n,o)}function Ln(e,t,n){return`/* DREAM_THEME:${e.id} */
:root {
  --vscode-editor-background: transparent !important;
  --vscode-foreground: ${n.text} !important;
  --vscode-sideBar-background: color-mix(in srgb, ${n.surface} 92%, transparent) !important;
  --vscode-panel-background: transparent !important;
  --vscode-input-background: color-mix(in srgb, ${n.surface} 94%, transparent) !important;
  --vscode-button-background: ${n.accent} !important;
  --vscode-button-foreground: #ffffff !important;
  --vscode-focusBorder: ${n.accent} !important;
}
body.solo-lite {
  background-color: ${n.surface} !important;
  color: ${n.text} !important;
}
body.solo-lite #root {
  background-color: ${n.surface} !important;
  background-image: url(${JSON.stringify(t)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  color: ${n.text} !important;
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
  color: ${n.text} !important;
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
  background-color: color-mix(in srgb, ${n.surface} 76%, transparent) !important;
  color: ${n.text} !important;
  backdrop-filter: blur(12px) saturate(105%);
}
.messageInputContainer {
  border-color: color-mix(in srgb, ${n.accent} 34%, transparent) !important;
  box-shadow: 0 16px 44px color-mix(in srgb, ${n.surface} 34%, transparent) !important;
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
  color: ${n.text} !important;
  -webkit-text-fill-color: ${n.text} !important;
}
html body.solo-lite #root :where(.initial-chat-panel, .solo-lite-chat-panel-content) .messageInputContainer
  :where(button, [role="button"]) svg {
  color: ${n.text} !important;
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
  color: ${n.text} !important;
  -webkit-text-fill-color: ${n.text} !important;
}
.messageInputContainer :where(button, [role="button"]) svg {
  color: ${n.text} !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}
.messageInputContainer :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${n.accent} 16%, transparent) !important;
}
.messageInputContainer .chat-input-v2-send-button:not(.disabled) {
  background-color: ${n.accent} !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}
.messageInputContainer .chat-input-v2-send-button.disabled {
  opacity: .5 !important;
}
.messageInputContainer .projectButtonPlaceholderWork-JV100D,
.messageInputContainer [class*="Placeholder"] {
  color: color-mix(in srgb, ${n.text} 66%, transparent) !important;
  -webkit-text-fill-color: color-mix(in srgb, ${n.text} 66%, transparent) !important;
}
html[data-dream-shell="dark"] body.solo-lite #root .messageInputContainer
  :where(.inputBarButton-ncFFma, .inputBarButton-ncFFma *, .core-model-select-trigger, .core-model-select-trigger *) {
  color: ${n.text} !important;
  -webkit-text-fill-color: ${n.text} !important;
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
  color: ${n.text} !important;
  -webkit-text-fill-color: ${n.text} !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-heading, .task-list-group-title, .menubar-menu-title) {
  opacity: .78 !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-base-content, .soloLiteMenubar, .task-list-base-footer, .messageInputContainer) svg {
  color: ${n.text} !important;
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
`}function Fn(e,t,n,a,o={}){const r={"qoder-work":'#root > div, [class*="layout"], [class*="content-area"], [class*="main-content"]',catpaw:".main-area, .main-content-container, .main-content, .chat-content-area",zcode:'main, main > div, [class*="min-h-0"][class*="flex-1"]',"qwen-office":".agents-content-area, .agents-parchment-paper-surface","agnes-code":":not(*)","minimax-code":":not(*)",astronclaw:'.local-chat-shell, .local-chat-main, [class*="local-chat-content"]',stepfun:"#root",sparkdesk:".app-container","deepseek-harness":'[class*="_centerCol"]',monkeycode:"main"},i={"qoder-work":'[class*="sidebar"]',catpaw:".sidebar-wrapper, .sidebar",zcode:"#sidebar, aside","qwen-office":".agents-sidebar, .group\\/sidebar","agnes-code":":not(*)","minimax-code":":not(*)",astronclaw:'.local-chat-rail, [class*="local-chat-sidebar"]',sparkdesk:'.browser-header, [class*="left_side"], [class*="sidebar"]',monkeycode:"aside, #root > div > div > :first-child"},l=r[e]??'main, [role="main"], [class*="main-content"]',s=i[e]??'aside, nav, [class*="sidebar"]',c=e==="qoder-work"?ta(a):e==="catpaw"?na(n,a):e==="opencode"?Qn(a):e==="doubao"?Zn(a):e==="agnes-code"?Vn(n,a):e==="minimax-code"?Xn(n,a):e==="astronclaw"?qn(n,a):e==="stepfun"?Gn(n,a):e==="sparkdesk"?Jn(n,a):e==="deepseek-harness"?Hn(n,a):e==="monkeycode"?Kn(n,a,!!o.monkeyCodeModern):e==="zcode"?zn(n,a):"";return e==="sparkdesk"?`/* DREAM_THEME:${t.id} */
${c}`:`/* DREAM_THEME:${t.id} */
:root {
  --dream-work-accent: ${a.accent};
  --dream-work-secondary: ${a.secondary};
  --dream-work-surface: ${a.surface};
  --dream-work-text: ${a.text};
  --catpaw-bg-primary: ${a.surface} !important;
  --catpaw-text-primary: ${a.text} !important;
  --catpaw-text-secondary: color-mix(in srgb, ${a.text} 72%, transparent) !important;
  --agents-sidebar-material-bg: color-mix(in srgb, ${a.surface} 90%, transparent) !important;
  --text-base-primary: ${a.text} !important;
  --text-base-secondary: color-mix(in srgb, ${a.text} 72%, transparent) !important;
  --bg-base: color-mix(in srgb, ${a.surface} 86%, transparent) !important;
}
html, body, #root { background: ${a.surface} !important; color: ${a.text} !important; }
${e==="zcode"||e==="deepseek-harness"||e==="monkeycode"?"":`:is(${s}) {
  background: color-mix(in srgb, ${a.surface} 90%, transparent) !important;
  color: ${a.text} !important;
  backdrop-filter: blur(20px) saturate(108%);
}`}
${e==="zcode"?`:is(${l}) {
  color: ${a.text} !important;
}`:`:is(${l}) {
  background: linear-gradient(90deg, color-mix(in srgb, ${a.surface} 82%, transparent) 0 12%, transparent 42%), url(${JSON.stringify(n)}) center / cover no-repeat fixed !important;
  color: ${a.text} !important;
}`}
:is(${l}) :where([class*="message"], [class*="chat"], [class*="composer"], [class*="editor"], [contenteditable="true"], textarea) {
  color: ${a.text} !important;
}
${e==="doubao"||e==="astronclaw"||e==="stepfun"||e==="zcode"||e==="deepseek-harness"||e==="monkeycode"?"":`:is(${l}) :where([class*="message"], [class*="bubble"], [class*="composer"], [class*="input-container"]) {
  background-color: color-mix(in srgb, ${a.surface} 88%, transparent) !important;
  backdrop-filter: blur(16px) saturate(108%);
}`}
:is(${l}) :where(p, span, li, h1, h2, h3, h4, strong, em) { color: ${a.text} !important; }
button[class*="bg-primary"], button[class*="bg-accent"] { background-color: ${a.accent} !important; color: #fff !important; }
${c}`}async function Ee(e){const t=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(2e3)});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();return(Array.isArray(n)?n:[]).filter(a=>(a==null?void 0:a.type)==="page"&&a.webSocketDebuggerUrl&&String(a.url)==="http://tauri.localhost/")}async function Wn(e){for(const t of e){const n=new C(t.webSocketDebuggerUrl);try{await n.open(),await n.evaluate(`(() => {
        try { localStorage.removeItem('dream-work-theme:monkeycode:restored'); } catch {}
        delete document.documentElement.dataset.dreamThemeRestored;
        return true;
      })()`)}finally{n.close()}}}function Un(e,t){const n=re.get(e);n&&clearInterval(n);const a=(se.get(e)??0)+1;se.set(e,a);let o=!1;const r=setInterval(async()=>{if(!(o||se.get(e)!==a)){o=!0;try{const i=await Ee(e);for(const l of i){const s=new C(l.webSocketDebuggerUrl);try{await s.open();const c=await s.evaluate(`(() => ({
            ready: Boolean(window.__dreamTheme?.activateTheme && document.getElementById('${P}')),
            restored: (() => { try { return localStorage.getItem('dream-work-theme:monkeycode:restored') === '1'; } catch { return false; } })()
          }))()`).catch(()=>({ready:!1,restored:!1}));if(c.ready||c.restored)continue;let u=!1;for(let b=0;b<20&&(u=await s.evaluate("(() => location.href === 'http://tauri.localhost/' && document.readyState !== 'loading')()").catch(()=>!1),!u);b++)await new Promise(E=>setTimeout(E,100));if(!u)continue;const p=ce.get(l.id);p&&await s.removeScriptToEvaluateOnNewDocument(p).catch(()=>{});const m=`(() => {
            const inject = () => ${t};
            if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
            else inject();
          })()`,g=await s.addScriptToEvaluateOnNewDocument(m);g&&ce.set(l.id,g),await s.evaluate(t)}catch{}finally{s.close()}}}catch{await me(e)||(clearInterval(r),re.delete(e))}finally{o=!1}}},750);r.unref(),re.set(e,r)}function Hn(e,t){return`
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
`}function Kn(e,t,n){return`
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
${n?`html[data-dream-monkeycode-modern="true"] #root :where(
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
`}function zn(e,t){return`
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
`}function Jn(e,t){const n=parseInt(String(t.surface).replace("#",""),16),a=Number.isFinite(n)?.299*(n>>16&255)+.587*(n>>8&255)+.114*(n&255)>140:!0;return`
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
  filter: ${a?"brightness(0)":"none"} !important;
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
  filter: ${a?"none":"brightness(0) invert(1)"} !important;
}
`}function Gn(e,t){return`
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
`}function qn(e,t){return`
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
`}function Vn(e,t){return`
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
`}function Xn(e,t){return`
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
`}function Qn(e){return`
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
}`}function Zn(e){return`
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
}`}function ft(e,t,n){return`/* DREAM_THEME:${e.id} */
:root {
  --dream-work-accent: ${n.accent};
  --dream-work-secondary: ${n.secondary};
  --dream-work-surface: ${n.surface};
  --dream-work-text: ${n.text};
}
html, body, #react-root, .app-shell {
  background-color: ${n.surface} !important;
  background-image: url(${JSON.stringify(t)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  color: ${n.text} !important;
}
.titlebar, .app, .main-content, .chat-area, .input-area {
  background-color: transparent !important;
  background-image: none !important;
}
#sidebar, #jianSidebar .universal-card, #previewBody {
  background: color-mix(in srgb, ${n.surface} 66%, transparent) !important;
  border-color: color-mix(in srgb, ${n.accent} 24%, transparent) !important;
  color: ${n.text} !important;
  backdrop-filter: blur(20px) saturate(110%) !important;
}
.titlebar {
  background: color-mix(in srgb, ${n.surface} 62%, transparent) !important;
  color: ${n.text} !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
}
[class*="input-wrapper"] {
  background: color-mix(in srgb, ${n.surface} 78%, transparent) !important;
  border-color: color-mix(in srgb, ${n.accent} 30%, transparent) !important;
  color: ${n.text} !important;
  box-shadow: 0 16px 42px color-mix(in srgb, ${n.surface} 28%, transparent) !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
}
[class*="input-wrapper"] :where(textarea, input, [contenteditable="true"]) {
  background: transparent !important;
  color: ${n.text} !important;
  caret-color: ${n.accent} !important;
}
#sidebar :where(button, [role="button"]):hover,
#jianSidebar :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${n.accent} 16%, transparent) !important;
}
:where(button[class*="primary"], button[type="submit"]) {
  background-color: ${n.accent} !important;
  color: #ffffff !important;
}`}function Yn(e,t,n){const a=n.accent;n.secondary;const o=n.surface,r=n.text;return`/* DREAM_THEME:${e.id} */
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
  --Colors-KMBlue: ${a} !important;
  --Others-KMBlue10: color-mix(in srgb, ${a} 12%, transparent) !important;
  --Others-BubbleBlue: color-mix(in srgb, ${a} 26%, ${o}) !important;
  --Others-TextSelected: color-mix(in srgb, ${a} 22%, transparent) !important;
  --Syntax-Mark: ${a} !important;
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
  border-right: 1px solid color-mix(in srgb, ${a} 18%, transparent) !important;
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
  border-color: color-mix(in srgb, ${a} 24%, transparent) !important;
}
main.main-pane .conversation-tab,
main.main-pane .conversation-view,
main.main-pane [class*="conversation"] {
  background: transparent !important;
  color: ${r} !important;
}
main.main-pane :where([class*="message"], [class*="chat"], [class*="composer"], [class*="input"], [contenteditable="true"], textarea) {
  background-color: color-mix(in srgb, ${o} 66%, transparent) !important;
  border-color: color-mix(in srgb, ${a} 30%, transparent) !important;
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
  caret-color: ${a} !important;
}
:where(button[class*="primary"], button[mode="primary"]) {
  background-color: ${a} !important;
  color: #ffffff !important;
}
.nav-item, .mode-tab, .sidebar-scroll a, .sidebar-scroll span, .sidebar-footer, .account {
  color: ${r} !important;
}
.nav-item:hover, .mode-tab:hover, [class*="nav-item"]:hover {
  background-color: color-mix(in srgb, ${a} 18%, transparent) !important;
}
.win-titlebar-drag {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.message-list-container:where(.top) {
  display: none !important;
}`}function ea(e){return`(() => {
    const themes = ${JSON.stringify(e.themes)};
    const cssTemplate = ${JSON.stringify(e.cssTemplate)};
    const sentinels = ${JSON.stringify(k)};
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
  })()`}function ta(e){return`
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
}`}function na(e,t){return`
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
`}function Ye(e,t=""){return JSON.stringify(typeof e=="string"?e:t)}function bt(e,t,n){var o,r;return`/* DREAM_THEME:${String(e.id??"custom").replace(/[^a-z0-9_-]/gi,"")} */
body[data-application-name="workbuddy"] {
  --wb-accent: ${n.accent};
  --wb-secondary: ${n.secondary};
  --wb-surface: ${n.surface};
  --wb-text: ${n.text};

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
  content: ${Ye((o=e.copy)==null?void 0:o.brand)};
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
  content: ${Ye((r=e.copy)==null?void 0:r.headline)};
  color: var(--wb-text);
  font: 750 clamp(18px, 2.7vw, 42px)/1.15 ui-rounded, system-ui;
  text-shadow: 0 2px 12px white;
  pointer-events: none;
}`}function aa(e,t,n){const a=oa(n.surface),o=a?`color-mix(in srgb, ${n.surface} 90%, transparent)`:`color-mix(in srgb, ${n.surface} 86%, transparent)`,r=a?`color-mix(in srgb, ${n.accent} 16%, ${n.surface})`:`color-mix(in srgb, ${n.accent} 42%, ${n.surface})`,i=a?"#172033":`color-mix(in srgb, ${n.surface} 72%, #000000)`,l="#f2f6ff",s=`/* DREAM_THEME:${e.id} */
:root.codex-dream-skin {
  --ds-bg: ${n.surface};
  --ds-panel: ${n.surface};
  --ds-panel-2: ${n.surface};
  --ds-surface: ${n.surface};
  --ds-green: ${n.accent};
  --ds-lime: ${n.secondary};
  --ds-cyan: ${n.secondary};
  --ds-purple: ${n.accent};
  --ds-text: ${n.text};
  --ds-muted: color-mix(in srgb, ${n.text} 82%, transparent);
  --ds-line: color-mix(in srgb, ${n.accent} 22%, transparent);
  --ds-hero-height: 252px;
  --ds-radius: 24px;
  --dream-skin-art: url(${JSON.stringify(t)});
}`,c=`/* DREAM_THEME_BODY:${e.id} */
html.codex-dream-skin[data-dream-theme],
html.codex-dream-skin[data-dream-theme] body {
  background-color: ${n.surface} !important;
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
  background-color: color-mix(in srgb, ${n.surface} 12%, transparent) !important;
  background-image: none !important;
}

html.codex-dream-skin[data-dream-theme] main.main-surface::before {
  content: none !important;
  background: none !important;
}

html.codex-dream-skin[data-dream-theme] aside.app-shell-left-panel {
  background: color-mix(in srgb, ${n.surface} 30%, transparent) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

html.codex-dream-skin[data-dream-theme] main.main-surface > header.app-header-tint {
  background: color-mix(in srgb, ${n.surface} 16%, transparent) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

html.codex-dream-skin main.main-surface [role="main"],
html.codex-dream-skin main.main-surface .thread-scroll-container {
  --color-token-conversation-body: ${n.text} !important;
  --color-token-text-secondary: color-mix(in srgb, ${n.text} 76%, transparent) !important;
  --color-token-text-tertiary: color-mix(in srgb, ${n.text} 58%, transparent) !important;
  --color-token-conversation-summary-leading: color-mix(in srgb, ${n.text} 88%, transparent) !important;
  --color-token-conversation-summary-trailing: color-mix(in srgb, ${n.text} 68%, transparent) !important;
  --color-token-conversation-header: color-mix(in srgb, ${n.text} 78%, transparent) !important;
  --color-token-description-foreground: color-mix(in srgb, ${n.text} 72%, transparent) !important;
  --shimmer-text-secondary: color-mix(in srgb, ${n.text} 68%, transparent) !important;
  --shimmer-contrast: ${n.text} !important;
  background-color: transparent !important;
  color: ${n.text} !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) {
  background-color: transparent !important;
  background-image: none !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) article,
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) .message,
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [data-message-author-role],
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [class*="surface"]:not(.composer-surface-chrome):not([class*="home-main-content"]) {
  border-color: color-mix(in srgb, ${n.accent} 24%, transparent) !important;
  background: ${o} !important;
  color: ${n.text} !important;
  text-shadow: none !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [data-message-author-role="user"],
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [class*="bg-token-foreground"] {
  background: ${r} !important;
  color: ${n.text} !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container [class*="_markdownContent_"],
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container [class*="_markdownContent_"] :where(p, li, h1, h2, h3, h4, h5, h6, strong, em, blockquote, span),
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container :where(.text-token-conversation-body, .text-token-text-secondary, .group/activity-header),
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container .group/activity-header :where(span, svg) {
  color: ${n.text} !important;
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
  color: ${n.text} !important;
  text-shadow: none !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container * {
  color: ${n.text} !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container [class*="_markdownContent_"] a {
  color: ${n.accent} !important;
}

html.codex-dream-skin .composer-surface-chrome {
  background: color-mix(in srgb, ${n.surface} 92%, transparent) !important;
  color: ${n.text} !important;
}

html.codex-dream-skin .composer-surface-chrome *,
html.codex-dream-skin .composer-surface-chrome .ProseMirror {
  color: ${n.text} !important;
  caret-color: ${n.accent} !important;
}

html.codex-dream-skin main.main-surface pre,
html.codex-dream-skin main.main-surface code,
html.codex-dream-skin main.main-surface table,
html.codex-dream-skin main.main-surface [data-testid*="code"] {
  background: ${i} !important;
  color: ${l} !important;
  text-shadow: none !important;
}

html.codex-dream-skin main.main-surface :where(pre, code, table) * {
  color: ${l} !important;
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
  background-color: color-mix(in srgb, ${n.surface} 82%, transparent) !important;
  backdrop-filter: blur(14px) saturate(106%) !important;
}`;return s+`
`+c}function oa(e){const t=/^#([0-9a-f]{6})$/i.exec(e);if(!t)return!0;const n=parseInt(t[1],16);return .299*(n>>16&255)+.587*(n>>8&255)+.114*(n&255)>140}function ra(e){return`(() => {
  const data = ${JSON.stringify({styleId:e.styleId,menuId:e.menuId,activeId:e.currentThemeId,themes:e.themes,cssTemplate:e.cssTemplate,sentinels:k,storageKey:"dreamCustomThemes",selectedKey:"wb-dream-selected",sharedCustomThemes:e.sharedCustomThemes,sharedCustomThemeService:e.sharedCustomThemeService})};
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
})()`}function sa(e){const t=JSON.stringify(e.themes),n=JSON.stringify(e.cssTemplate??""),a=e.appId,o=e.monkeyCodeModern===!0;return`(() => {
  const themes = ${t};
  const cssTemplate = ${n};
  const sentinels = ${JSON.stringify(k)};
  const currentThemeId = '${e.currentThemeId}';
  const appId = '${a}';
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
    if (appId === 'deepseek-harness') body.toggleAttribute('data-ds-dark-theme', dark);
    if (appId === 'monkeycode') {
      html.dataset.theme = dark ? 'dark' : 'light';
      html.style.background = surface;
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
})()`}async function ia(e){try{return x.platform()==="win32"?ca(e):x.platform()==="darwin"?la(e):x.platform()==="linux"?da(e):{success:!1,error:`Unsupported platform: ${x.platform()}`}}catch(t){return{success:!1,error:t.message}}}function ca(e){const t=d.join(x.homedir(),"Desktop"),n=d.join(t,`${e.label}.lnk`),a=process.execPath,o=d.dirname(a),r=`
    $WshShell = New-Object -comObject WScript.Shell
    $Shortcut = $WshShell.CreateShortcut("${n.replace(/\\/g,"\\\\")}")
    $Shortcut.TargetPath = "${a.replace(/\\/g,"\\\\")}"
    $Shortcut.Arguments = "--launch=${e.appId}:${e.themeId}"
    $Shortcut.WorkingDirectory = "${o.replace(/\\/g,"\\\\")}"
    $Shortcut.Save()
  `;return new Promise(i=>{require("child_process").exec(`powershell -Command "${r.replace(/"/g,'\\"')}"`,l=>{i(l?{success:!1,error:l.message}:{success:!0,path:n})})})}function la(e){const t=d.join(x.homedir(),"Desktop"),n=d.join(t,`${e.label}.app`),o=`
    tell application "Terminal"
      do script "'${process.execPath}' --launch=${e.appId}:${e.themeId}"
    end tell
  `,r=d.join(t,`${e.id}.scpt`);return h.writeFileSync(r,o),new Promise(i=>{require("child_process").exec(`osacompile -o "${n}" "${r}"`,l=>{h.unlinkSync(r),i(l?{success:!1,error:l.message}:{success:!0,path:n})})})}async function da(e){const t=d.join(x.homedir(),".local","share","applications");h.existsSync(t)||h.mkdirSync(t,{recursive:!0});const n=d.join(t,`${e.id}.desktop`),a=process.execPath,o=`[Desktop Entry]
Type=Application
Name=${e.label}
Exec="${a}" --launch=${e.appId}:${e.themeId}
Icon=${e.icon||"utilities-terminal"}
Terminal=false
Categories=Utility;
`;return h.writeFileSync(n,o),h.chmodSync(n,493),{success:!0,path:n}}const ma=Be.promisify(de.execFile),ua="https://api.dreamskin.cc",wt=`${ua}/v1/themes`,kt=32*1024*1024,Se=6;let Ie=0;async function pa(){const e=Ie,t=await ha(e),n=t.items;Ie=e+n.length>=t.total?0:e+Se;const a=it(),o={checked:n.length,imported:0,skipped:0,offset:e,page:Math.floor(e/Se)+1,total:t.total,nextOffset:Ie,failed:[]};for(const r of n){const i=ka(r.themeId);if(!r.applyCompatible||ct(i)){o.skipped++;continue}try{await ga(r,a,i)?o.imported++:o.skipped++}catch(l){o.failed.push({id:r.id,name:r.name,error:l.message})}}return o}async function ha(e){const t=`${wt}?limit=${Se}&offset=${e}&sort=recent`,n=await fetch(t,{signal:AbortSignal.timeout(3e4),redirect:"error"});if(!n.ok)throw new Error(`Theme list request failed: HTTP ${n.status}`);const a=await n.json();if(!Array.isArray(a.items)||a.items.length>Se||!Number.isInteger(a.total)||a.total<0)throw new Error("Theme list response is invalid");return{items:a.items,total:a.total}}async function ga(e,t,n){wa(e);const a=h.mkdtempSync(d.join(x.tmpdir(),"dream-work-theme-")),o=d.join(a,"theme.zip"),r=d.join(a,"extract"),i=d.join(t,`.updating-${n}-${process.pid}`);try{h.mkdirSync(r);const l=`${wt}/${e.id}/download`,s=await fetch(l,{signal:AbortSignal.timeout(12e4),redirect:"error"});if(!s.ok)throw new Error(`Theme download failed: HTTP ${s.status}`);const c=Buffer.from(await s.arrayBuffer());if(c.length!==e.packageBytes)throw new Error(`Downloaded size mismatch: expected ${e.packageBytes}, got ${c.length}`);if(c.length>kt)throw new Error("Theme package exceeds 32 MiB");if(Le.createHash("sha256").update(c).digest("hex")!==e.packageSha256)throw new Error("Downloaded SHA-256 does not match metadata");h.writeFileSync(o,c,{flag:"wx"}),await fa(o,r);const p=ba(r),m=JSON.parse(h.readFileSync(d.join(p,"theme.json"),"utf8")),g=m.image;if(typeof g!="string"||d.basename(g)!==g||!/\.(png|jpe?g|webp)$/i.test(g))throw new Error("Theme image name is invalid");const b=d.join(p,g),E=d.join(p,"theme.css");if(!h.existsSync(b)||!h.statSync(b).isFile())throw new Error("Theme image is missing");if(!h.existsSync(E)||!h.statSync(E).isFile())throw new Error("theme.css is missing");const N=ya(m,e,n,`hero${d.extname(g).toLowerCase()}`);return bn(N.name,N.author,b)?!1:(h.mkdirSync(i),h.copyFileSync(b,d.join(i,N.hero)),h.copyFileSync(E,d.join(i,"theme.css")),h.writeFileSync(d.join(i,"theme.json"),`${JSON.stringify(N,null,2)}
`),h.renameSync(i,d.join(t,n)),!0)}finally{h.rmSync(i,{recursive:!0,force:!0}),h.rmSync(a,{recursive:!0,force:!0})}}async function fa(e,t){const{path7za:n}=require("7zip-bin");await ma(n,["x",e,`-o${t}`,"-y"],{windowsHide:!0,timeout:12e4})}function ba(e){const n=[e,...h.readdirSync(e,{withFileTypes:!0}).filter(a=>a.isDirectory()).map(a=>d.join(e,a.name))].filter(a=>h.existsSync(d.join(a,"theme.json"))&&h.existsSync(d.join(a,"theme.css")));if(n.length!==1)throw new Error("Theme ZIP must contain one theme root");return n[0]}function wa(e){if(!/^ver_[a-z0-9]{8,64}$/.test(e.id))throw new Error("Theme version ID is invalid");if(!Number.isInteger(e.packageBytes)||e.packageBytes<1||e.packageBytes>kt)throw new Error("Theme package size is invalid");if(!/^[a-f0-9]{64}$/.test(e.packageSha256))throw new Error("Theme package SHA-256 is invalid")}function ka(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").replace(/-+/g,"-")||"community-theme"}function ya(e,t,n,a){const o=e.appearance==="dark"?"dark":"light",r=o==="dark"?"#10141c":"#f4f7fa",i=e.colors||{};return{schemaVersion:1,id:n,name:String(e.name||t.name||n).trim(),author:t.authorDisplayName||"DreamSkin Community",hero:a,colors:{accent:ee(i.accent,"#4f8cff",r),secondary:ee(i.secondary||i.accentAlt,"#7ba7d8",r),surface:ee(i.panelAlt||i.panel||i.background,r,r),text:ee(i.text,o==="dark"?"#eef2f7":"#1f2937",r)},copy:null,apps:Object.fromEntries(be.filter(l=>!l.acceptsGenericThemes).map(l=>[l.id,{compat:!0}]))}}function ee(e,t,n){if(typeof e!="string")return t;const a=e.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(a){let s=a[1];return s.length===3&&(s=s.split("").map(c=>c+c).join("")),`#${s.slice(0,6).toLowerCase()}`}const o=e.trim().match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);if(!o)return t;const r=o[4]===void 0?1:Number(o[4]),i=ee(n,t,t).slice(1).match(/../g).map(s=>parseInt(s,16));return`#${[1,2,3].map(s=>Math.round(Number(o[s])*r+i[s-1]*(1-r))).map(s=>s.toString(16).padStart(2,"0")).join("")}`}let Pe=null;T.protocol.registerSchemesAsPrivileged([{scheme:"theme-asset",privileges:{standard:!0,secure:!0,supportFetchAPI:!0,stream:!0}}]);function yt(){Pe=new T.BrowserWindow({width:1200,height:800,webPreferences:{preload:d.join(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1}}),process.env.VITE_DEV_SERVER_URL?Pe.loadURL(process.env.VITE_DEV_SERVER_URL):Pe.loadFile(d.join(__dirname,"../renderer/dist/index.html"))}T.app.whenReady().then(()=>{T.protocol.handle("theme-asset",e=>{const t=decodeURIComponent(new URL(e.url).pathname.replace(/^\//,"")),n=hn(t);return n?new Response(h.readFileSync(n),{headers:{"Content-Type":xa(n),"Cache-Control":"public, max-age=3600"}}):new Response("Theme asset not found",{status:404})}),yt()});function xa(e){const t=d.extname(e).toLowerCase();return t===".jpg"||t===".jpeg"?"image/jpeg":t===".webp"?"image/webp":"image/png"}T.app.on("window-all-closed",()=>{process.platform!=="darwin"&&T.app.quit()});T.app.on("activate",()=>{T.BrowserWindow.getAllWindows().length===0&&yt()});const et=process.argv.find(e=>e.startsWith("--launch="));if(et){const[,e]=et.split("="),[t,n]=e.split(":");t&&n&&(console.log(`[main] Received launch args: ${t}:${n}`),setTimeout(async()=>{try{const a=await at(t,n);if(a.success){console.log(`[main] Launched ${t} with theme ${n} on port ${a.port}`),console.log(`[main] Starting theme injection for ${t}:${n} on port ${a.port}`);const o=await gt(t,n,a.port);console.log("[main] Injection result:",o)}else console.error(`[main] Failed to launch ${t}: ${a.error}`)}catch(a){console.error("[main] Launch error:",a)}},1e3))}T.ipcMain.handle("discover-apps",async()=>nt());T.ipcMain.handle("launch-app",async(e,t,n)=>at(t,n));T.ipcMain.handle("apply-theme",async(e,t,n,a)=>gt(t,n,a));T.ipcMain.handle("create-shortcut",async(e,t)=>{const n={...t,id:`${t.appId}-${t.themeId}-${Date.now()}`};return ia(n)});T.ipcMain.handle("list-themes",async(e,t)=>Ce(t).map(n=>({id:n.id,name:n.name,author:n.author,hero:gn(n.id)})));T.ipcMain.handle("update-themes",async()=>pa());T.ipcMain.handle("get-status",async(e,t,n)=>{var o;return await Rt(t)?{...await Dn(t,n||((o=O(t))==null?void 0:o.defaultPort)||9339),running:!0}:{installed:!1,menu:!1,targets:0,running:!1}});T.ipcMain.handle("remove-skin",async(e,t,n)=>jn(t,n));T.ipcMain.handle("debug-targets",async(e,t)=>{try{const a=await(await fetch(`http://127.0.0.1:${t}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();return{success:!0,count:a.length,raw:a,targets:a.map(o=>({id:o.id,type:o.type,url:o.url,title:o.title,webSocketDebuggerUrl:o.webSocketDebuggerUrl}))}}catch(n){return{success:!1,error:n.message}}});

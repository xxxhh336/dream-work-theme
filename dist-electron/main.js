"use strict";var Ye=Object.defineProperty;var et=(e,o,t)=>o in e?Ye(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var T=(e,o,t)=>et(e,typeof o!="symbol"?o+"":o,t);const C=require("electron"),tt=require("path"),ot=require("fs"),Q=require("child_process"),be=require("util"),nt=require("os"),rt=require("http"),at=require("net"),st=require("fs/promises"),it=require("crypto");function K(e){const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(o,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return o.default=e,Object.freeze(o)}const c=K(tt),m=K(ot),k=K(nt),De=K(rt),Me=K(at),we=K(it),P=process.env.LOCALAPPDATA||c.join(k.homedir(),"AppData","Local"),V=process.env.APPDATA||c.join(k.homedir(),"AppData","Roaming"),M=process.env.ProgramFiles||"C:\\Program Files",U=process.env["ProgramFiles(x86)"]||"C:\\Program Files (x86)",te=[{id:"workbuddy",name:"WorkBuddy",exeNames:["WorkBuddy.exe"],processName:"WorkBuddy.exe",defaultPort:9339,installPaths:[c.join(P,"workbuddy"),c.join(P,"Programs","workbuddy"),c.join(M,"WorkBuddy"),c.join(U,"WorkBuddy"),"D:\\Program Files\\WorkBuddy"],rendererHints:["app.asar/renderer/index.html","renderer/index.html","index.html"],kind:"workbuddy",acceptsGenericThemes:!0,darwin:{appBundles:["WorkBuddy.app"],executableNames:["WorkBuddy"]},linux:{executableNames:["workbuddy","WorkBuddy"],desktopFiles:["workbuddy.desktop"]}},{id:"codex",name:"Codex",exeNames:["ChatGPT.exe","Codex.exe"],processName:"ChatGPT.exe",defaultPort:9340,installPaths:[c.join(P,"Programs","Codex"),c.join(P,"Programs","OpenAI","Codex"),c.join(M,"Codex"),c.join(U,"Codex"),"D:\\Program Files\\Codex"],rendererHints:["index.html","renderer/index.html"],kind:"codex",acceptsGenericThemes:!0,darwin:{appBundles:["ChatGPT.app","Codex.app"],executableNames:["ChatGPT","Codex"]},linux:{executableNames:["codex","Codex"],desktopFiles:["codex.desktop"]}},{id:"trae-work",name:"TRAE Work",exeNames:["TRAE SOLO CN.exe","TRAE Work CN.exe"],processName:"TRAE SOLO CN.exe",defaultPort:9341,installPaths:["D:\\Program Files\\TRAE SOLO CN",c.join(P,"Programs","TRAE SOLO CN"),c.join(M,"TRAE SOLO CN")],rendererHints:["solo/solo-lite.html","solo-lite.html"],kind:"vscode-work",acceptsGenericThemes:!0,darwin:{appBundles:["TRAE SOLO CN.app","TRAE Work CN.app","TRAE.app"],executableNames:["TRAE SOLO CN","TRAE Work CN","TRAE"]},linux:{executableNames:["trae","trae-work","TRAE"],desktopFiles:["trae.desktop","trae-work.desktop"]}},{id:"qoder-work",name:"QoderWork",exeNames:["QoderWork CN.exe","QoderWork.exe"],processName:"QoderWork CN.exe",defaultPort:9342,installPaths:["D:\\Program Files\\QoderWork CN",c.join(P,"Programs","QoderWork CN"),c.join(M,"QoderWork CN")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",devToolsActivePort:c.join(V,"QoderWork CN","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["QoderWork CN.app","QoderWork.app"],executableNames:["QoderWork CN","QoderWork"]},linux:{executableNames:["qoder-work","qoderwork","QoderWork"],desktopFiles:["qoder-work.desktop","qoderwork.desktop"]}},{id:"catpaw",name:"CatPaw",exeNames:["CatPaw.exe"],processName:"CatPaw.exe",defaultPort:9343,installPaths:[c.join(P,"CatPaw"),c.join(P,"Programs","CatPaw"),c.join(M,"CatPaw")],rendererHints:["app.asar/dist/index.html","dist/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["CatPaw.app"],executableNames:["CatPaw"]},linux:{executableNames:["catpaw","CatPaw"],desktopFiles:["catpaw.desktop"]}},{id:"zcode",name:"ZCode",exeNames:["ZCode.exe"],processName:"ZCode.exe",defaultPort:9344,installPaths:["D:\\Program Files\\ZCode",c.join(P,"Programs","ZCode"),c.join(M,"ZCode")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["ZCode.app"],executableNames:["ZCode"]},linux:{executableNames:["zcode","ZCode"],desktopFiles:["zcode.desktop"]}},{id:"qwen-office",name:"千问办公",exeNames:["QwenWorkCN.exe"],processName:"QwenWorkCN.exe",defaultPort:9345,installPaths:["D:\\Program Files\\QwenWorkCN",c.join(P,"Programs","QwenWorkCN"),c.join(M,"QwenWorkCN")],rendererHints:["out/renderer/index.html","renderer/index.html"],kind:"generic-work",devToolsActivePort:c.join(V,"QwenWorkCN","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["QwenWorkCN.app","Qwen Work.app"],executableNames:["QwenWorkCN","Qwen Work"]},linux:{executableNames:["qwen-work","qwenwork","QwenWorkCN"],desktopFiles:["qwen-work.desktop","qwenwork.desktop"]}},{id:"hana-agent",name:"HanaAgent",exeNames:["HanaAgent.exe"],processName:"HanaAgent.exe",defaultPort:9346,installPaths:[c.join(P,"Programs","HanaAgent"),c.join(M,"HanaAgent"),c.join(U,"HanaAgent")],rendererHints:[".hanako/artifacts/renderer/","artifacts/renderer/","/index.html"],kind:"generic-work",acceptsGenericThemes:!0,darwin:{appBundles:["HanaAgent.app"],executableNames:["HanaAgent"]},linux:{executableNames:["hana-agent","HanaAgent"],desktopFiles:["hana-agent.desktop"]}},{id:"kimi",name:"Kimi Work",exeNames:["Kimi.exe"],processName:"Kimi.exe",defaultPort:9347,installPaths:["D:\\Program Files\\Kimi",c.join(P,"Programs","Kimi"),c.join(M,"Kimi"),c.join(U,"Kimi")],rendererHints:["kimi-agent.html","kimichat.html","https://www.kimi.com/"],kind:"generic-work",devToolsActivePort:c.join(V,"kimi-desktop","DevToolsActivePort"),acceptsGenericThemes:!0,darwin:{appBundles:["Kimi.app"],executableNames:["Kimi"]},linux:{executableNames:["kimi","Kimi"],desktopFiles:["kimi.desktop"]}},{id:"opencode",name:"OpenCode",exeNames:["OpenCode.exe"],processName:"OpenCode.exe",defaultPort:9348,installPaths:[c.join(P,"Programs","@opencode-aidesktop"),c.join(P,"Programs","OpenCode"),c.join(M,"OpenCode"),c.join(U,"OpenCode")],rendererHints:["oc://renderer/index.html"],kind:"generic-work",devToolsActivePort:c.join(V,"ai.opencode.desktop","DevToolsActivePort"),windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["OpenCode.app"],executableNames:["OpenCode"]},linux:{executableNames:["opencode-desktop","OpenCode"],desktopFiles:["opencode-desktop.desktop"]}},{id:"doubao",name:"豆包",exeNames:["Doubao.exe"],processName:"Doubao.exe",defaultPort:9349,installPaths:[c.join(P,"Doubao","Application","app"),c.join(P,"Doubao","Application"),c.join(M,"Doubao"),c.join(U,"Doubao")],rendererHints:["doubao://doubao-chat/chat"],kind:"generic-work",windowsPathScopedKill:!0,acceptsGenericThemes:!0,darwin:{appBundles:["Doubao.app"],executableNames:["Doubao"]},linux:{executableNames:["doubao","Doubao"],desktopFiles:["doubao.desktop"]}}];function j(e){return te.find(o=>o.id===e)}const xe=be.promisify(Q.execFile);function ct(){const e=[],o=c.join(process.env.ProgramFiles||"C:\\Program Files","WindowsApps");if(!m.existsSync(o))return e;try{const t=m.readdirSync(o);for(const n of t)if(/^OpenAI\.Codex_\d+/i.test(n)){const r=c.join(o,n,"app","ChatGPT.exe");m.existsSync(r)&&e.push(r)}}catch{}return e}async function lt(){const e=`
$ErrorActionPreference = 'SilentlyContinue'
$package = Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue
if (-not $package) { exit 1 }
$manifest = Get-AppxPackageManifest -Package $package.PackageFullName
$rel = [string]$manifest.Package.Applications.Application.Executable
if (-not $rel) { exit 1 }
$full = Join-Path $package.InstallLocation $rel
if (Test-Path -LiteralPath $full -PathType Leaf) { Write-Output $full } else { exit 1 }
`;try{const{stdout:o}=await xe("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",e],{encoding:"utf8",maxBuffer:4194304}),t=o.trim();if(t&&m.existsSync(t))return t}catch{}return null}async function dt(){const e=[];if(k.platform()!=="win32"){for(const r of te){const a=await mt(r);a&&e.push({appId:r.id,name:r.name,path:a})}return e}for(const r of te.filter(a=>a.id!=="codex")){const a=Te(r.exeNames,r.installPaths);a&&e.push({appId:r.id,name:r.name,path:a})}const t=Te(["Codex.exe","ChatGPT.exe"],[c.join(process.env.LOCALAPPDATA||"","Programs","Codex"),c.join(process.env.LOCALAPPDATA||"","Programs","OpenAI","Codex"),...ct()]),n=t?null:await lt();return n?e.push({appId:"codex",name:"Codex",path:n}):t&&e.push({appId:"codex",name:"Codex",path:t}),e}async function mt(e){var t,n,r;const o=k.platform();if(o==="darwin"){for(const a of((t=e.darwin)==null?void 0:t.appBundles)??[]){const s=c.join("/Applications",a);if(m.existsSync(s))return s}return null}if(o==="linux"){for(const a of((n=e.linux)==null?void 0:n.desktopFiles)??[]){const s=await ut(a);if(s)return s}for(const a of((r=e.linux)==null?void 0:r.executableNames)??[])try{const{stdout:s}=await xe("which",[a],{encoding:"utf8"}),d=s.trim();if(d&&m.existsSync(d))return d}catch{}}return null}async function ut(e){for(const o of[c.join(k.homedir(),".local","share","applications",e),c.join("/usr/share/applications",e),c.join("/usr/local/share/applications",e)]){if(!m.existsSync(o))continue;const t=m.readFileSync(o,"utf8").match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m),n=(t==null?void 0:t[1])||(t==null?void 0:t[2]);if(n){if(c.isAbsolute(n)&&m.existsSync(n))return n;try{const{stdout:r}=await xe("which",[n],{encoding:"utf8"}),a=r.trim();if(a&&m.existsSync(a))return a}catch{}}}return null}function Te(e,o){for(const t of o){if(!t||!m.existsSync(t))continue;if(m.statSync(t).isFile()&&e.some(r=>c.basename(t).toLowerCase()===r.toLowerCase()))return t;for(const r of e){const a=c.join(t,r);if(m.existsSync(a))return a}try{const r=m.readdirSync(t,{withFileTypes:!0}).filter(a=>a.isDirectory()).sort((a,s)=>s.name.localeCompare(a.name,void 0,{numeric:!0}));for(const a of r)for(const s of e){const d=c.join(t,a.name,s);if(m.existsSync(d))return d}}catch{}}return null}const oe=be.promisify(Q.execFile);async function ht(e){const o=j(e);if(!o)return!1;const t=Ne(o);if(k.platform()==="win32"){for(const n of t)try{const{stdout:r}=await oe("tasklist.exe",["/FI",`IMAGENAME eq ${n}`,"/FO","CSV","/NH"],{encoding:"utf8",windowsHide:!0});if(r.split(/\r?\n/).some(a=>a.trim().toLowerCase().startsWith(`"${n.toLowerCase()}"`)))return!0}catch{}return!1}for(const n of t)try{return await oe("pgrep",["-f",n],{encoding:"utf8"}),!0}catch{}return!1}async function je(e,o){const t=j(e);if(!t)return{success:!1,error:`Unknown app: ${e}`};const n=t.defaultPort,r=[`--remote-debugging-port=${n}`];e==="codex"&&r.push("--disable-extensions"),o&&e!=="kimi"&&r.push(`--dream-theme=${o}`);try{const a=Ct(e);console.log(`[launcher] Killing existing ${e} instances...`),await kt(e,a),await vt(n,15e3);const s=k.platform()==="win32"?t.devToolsActivePort:void 0;if(s)try{m.unlinkSync(s)}catch{}console.log(`[launcher] Launching ${a} with args: ${r.join(" ")}`);const d=e==="kimi"&&k.platform()==="win32"?await gt(a,r):pt(a,r);console.log(`[launcher] Spawned process${d?` with PID: ${d}`:""}`),console.log(`[launcher] Waiting for CDP port ${n} to be ready...`);let i=n;return s?i=await ft(s,t.rendererHints,3e4):await xt(n,3e4),console.log(`[launcher] CDP port ${i} is ready`),(e==="hana-agent"||e==="kimi")&&await wt(i,t.rendererHints,3e4,e==="kimi"?750:3e3),{success:!0,port:i}}catch(a){return console.error("[launcher] Launch failed:",a),{success:!1,error:a.message}}}function pt(e,o){const t=Q.spawn(e,o,{detached:!0,stdio:"ignore",env:ue()});return t.unref(),t.pid}async function gt(e,o){const t=c.join(k.tmpdir(),`dream-work-kimi-${process.pid}-${Date.now()}.lnk`),n={...ue(),DREAM_WORK_LAUNCH_EXE:e,DREAM_WORK_LAUNCH_ARGS:JSON.stringify(o),DREAM_WORK_LAUNCH_CWD:c.dirname(e),DREAM_WORK_LAUNCH_SHORTCUT:t},r=["[string[]]$launchArgs = @($env:DREAM_WORK_LAUNCH_ARGS | ConvertFrom-Json)","$shell = New-Object -ComObject WScript.Shell","$shortcut = $shell.CreateShortcut($env:DREAM_WORK_LAUNCH_SHORTCUT)","$shortcut.TargetPath = $env:DREAM_WORK_LAUNCH_EXE","$shortcut.Arguments = [string]::Join(' ', $launchArgs)","$shortcut.WorkingDirectory = $env:DREAM_WORK_LAUNCH_CWD","$shortcut.Save()"].join("; ");await oe("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",r],{env:n,windowsHide:!0}),Q.spawn(c.join(process.env.WINDIR||"C:\\Windows","explorer.exe"),[t],{detached:!0,stdio:"ignore",env:ue()}).unref(),setTimeout(()=>{try{m.unlinkSync(t)}catch{}},15e3).unref()}function ue(){const e={...process.env};for(const o of["VITE_DEV_SERVER_URL","ELECTRON_RENDERER_URL","MAIN_VITE_DEV_SERVER_URL","ELECTRON_RUN_AS_NODE"])delete e[o];return e}function Ne(e){var o,t;return k.platform()==="darwin"?((o=e.darwin)==null?void 0:o.executableNames)??[]:k.platform()==="linux"?((t=e.linux)==null?void 0:t.executableNames)??[]:[...new Set([e.processName,...e.exeNames].filter(Boolean))]}async function ft(e,o,t){const n=Date.now();let r=0;for(;Date.now()-n<t;){try{const a=m.readFileSync(e,"utf8").split(/\r?\n/,1)[0],s=Number(a);if(Number.isInteger(s)&&s>0)return r=s,await bt(s,o,3e3),s}catch{}await new Promise(a=>setTimeout(a,500))}throw new Error(`DevToolsActivePort did not expose a live renderer${r?` on port ${r}`:""}: ${e}`)}async function bt(e,o,t){const n=Date.now();for(;Date.now()-n<t;){try{const r=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(1e3)});if(r.ok){const a=await r.json();if(Array.isArray(a)&&a.some(s=>(s==null?void 0:s.type)==="page"&&o.some(d=>String(s.url).includes(d))))return}}catch{}await new Promise(r=>setTimeout(r,250))}throw new Error(`CDP renderer endpoint is not ready on port ${e}`)}async function wt(e,o,t,n){const r=Date.now();let a="",s=0;for(;Date.now()-r<t;){try{const l=(await(await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(1e3)})).json()).find(u=>(u==null?void 0:u.type)==="page"&&o.some(h=>String(u.url).includes(h)));if(l!=null&&l.id){if(l.id!==a)a=l.id,s=Date.now();else if(Date.now()-s>=n){console.log(`[launcher] Stable renderer ${a} confirmed`);return}}}catch{}await new Promise(d=>setTimeout(d,250))}throw new Error(`Renderer did not stabilize on port ${e}`)}async function xt(e,o){const t=Date.now();let n="unknown";for(;Date.now()-t<o;)try{await new Promise((r,a)=>{const s=Me.createConnection(e,"127.0.0.1",()=>{s.end(),r()});s.once("error",d=>{n=d.message,a(d)}),setTimeout(()=>{s.destroy(),a(new Error("timeout"))},1e3)}),console.log(`[launcher] Port ${e} is open, verifying CDP endpoint...`),await yt(e,15e3),console.log(`[launcher] CDP endpoint verified on port ${e}`);return}catch(r){n=r.message,console.log(`[launcher] Port check failed: ${r.message}, retrying...`),await new Promise(a=>setTimeout(a,1e3))}throw new Error(`CDP port ${e} did not become ready within ${o}ms (last error: ${n})`)}async function yt(e,o){const t=Date.now();for(;Date.now()-t<o;)try{await new Promise((n,r)=>{const a=De.request({hostname:"127.0.0.1",port:e,path:"/json/version",method:"GET",timeout:2e3},s=>{let d="";s.on("data",i=>{d+=i}),s.on("end",()=>{s.statusCode===200?(console.log(`[launcher] CDP version response: ${d.substring(0,200)}`),n()):r(new Error(`HTTP ${s.statusCode}`))})});a.on("error",r),a.on("timeout",()=>{a.destroy(),r(new Error("timeout"))}),a.end()});return}catch(n){if(Date.now()-t>=o)throw n;await new Promise(r=>setTimeout(r,1e3))}}async function kt(e,o){const t=k.platform(),n=j(e);if(!n)return;const r=Ne(n);try{if(t==="win32"){if(n.windowsPathScopedKill){const s=`$target = [IO.Path]::GetFullPath($env:DREAM_WORK_TARGET_EXE); Get-CimInstance Win32_Process -Filter "Name='${n.processName.replace(/'/g,"''")}'" | Where-Object { $_.ExecutablePath -and [IO.Path]::GetFullPath($_.ExecutablePath) -ieq $target } | ForEach-Object { taskkill.exe /T /F /PID $_.ProcessId *> $null }`;await oe("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",s],{env:{...process.env,DREAM_WORK_TARGET_EXE:o},windowsHide:!0}).catch(()=>{}),console.log(`[launcher] Killed existing ${e} instances at ${o}`);return}const{execSync:a}=require("child_process");for(const s of r)try{a(`taskkill /T /F /IM "${s}" 2>nul`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${s} process tree`)}catch{}}else if(t==="darwin"){const{execSync:a}=require("child_process");for(const s of r)try{a(`pkill -f "${s}" 2>/dev/null || true`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${s} processes`)}catch{}}else if(t==="linux"){const{execSync:a}=require("child_process");for(const s of r)try{a(`pkill -f "${s}" 2>/dev/null || true`,{stdio:"ignore"}),console.log(`[launcher] Killed existing ${s} processes`)}catch{}}}catch(a){console.warn("[launcher] Failed to kill existing instances:",a)}}async function vt(e,o){const t=Date.now();for(;Date.now()-t<o;){if(!await new Promise(r=>{const a=Me.createConnection(e,"127.0.0.1");a.once("connect",()=>{a.destroy(),r(!0)}),a.once("error",()=>r(!1)),a.setTimeout(500,()=>{a.destroy(),r(!1)})})){console.log(`[launcher] Previous CDP port ${e} is closed`);return}await new Promise(r=>setTimeout(r,250))}throw new Error(`Existing ${e} CDP service did not stop; refusing to inject into the old application instance`)}function Ct(e){var n,r,a,s;const o=j(e);if(!o)throw new Error(`Unknown app: ${e}`);const t=k.platform();if(t==="win32"){for(const l of o.installPaths){if(!l||!m.existsSync(l))continue;if(m.statSync(l).isFile())return l;for(const h of o.exeNames){const p=c.join(l,h);if(m.existsSync(p))return p}const u=m.readdirSync(l,{withFileTypes:!0}).filter(h=>h.isDirectory()).sort((h,p)=>p.name.localeCompare(h.name,void 0,{numeric:!0}));for(const h of u)for(const p of o.exeNames){const g=c.join(l,h.name,p);if(m.existsSync(g))return g}}const d=o.exeNames,i=[process.env.ProgramFiles,process.env["ProgramFiles(x86)"]].filter(Boolean);for(const l of i){if(!l||!m.existsSync(l))continue;const h=m.readdirSync(l).find(p=>p.toLowerCase().includes(e.replace("-",""))||p.toLowerCase().includes(o.name.toLowerCase()));if(h){const p=c.join(l,h);for(const g of d){const x=c.join(p,g);if(m.existsSync(x))return x}}}if(e==="codex"){const l=c.join(process.env.ProgramFiles||"C:\\Program Files","WindowsApps");console.log("[launcher] Codex WindowsApps fallback, path:",l);try{const h=m.readdirSync(l).find(p=>/^OpenAI\.Codex_\d+/i.test(p));if(h){const p=c.join(l,h,"app","ChatGPT.exe");if(m.existsSync(p))return console.log("[launcher] Found Codex via WindowsApps scan:",p),p}}catch(u){console.log("[launcher] WindowsApps scan error:",u.message)}try{const{execFileSync:u}=require("child_process"),h="Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue | ForEach-Object { Join-Path $_.InstallLocation (Get-AppxPackageManifest -Package $_.PackageFullName).Package.Applications.Application.Executable }";console.log("[launcher] Running PowerShell fallback...");const p=u("powershell.exe",["-NoLogo","-NoProfile","-NonInteractive","-ExecutionPolicy","Bypass","-Command",h],{encoding:"utf8",stdio:["pipe","pipe","ignore"]}).trim();if(console.log("[launcher] PowerShell result:",p),p&&m.existsSync(p))return p}catch(u){console.log("[launcher] PowerShell fallback error:",u.message)}}}else if(t==="darwin")for(const d of((n=o.darwin)==null?void 0:n.appBundles)??[]){const i=c.join("/Applications",d);if(m.existsSync(i))for(const l of((r=o.darwin)==null?void 0:r.executableNames)??[]){const u=c.join(i,"Contents","MacOS",l);if(m.existsSync(u))return u}}else if(t==="linux"){const d=((a=o.linux)==null?void 0:a.executableNames)??[];for(const l of((s=o.linux)==null?void 0:s.desktopFiles)??[]){const u=$t(l);if(u)return u}const i=["/usr/bin","/usr/local/bin","/opt",c.join(k.homedir(),".local","bin"),"/snap/bin"];for(const l of i)if(m.existsSync(l))for(const u of d){const h=c.join(l,u);if(m.existsSync(h))return h}for(const l of d)try{const{execFileSync:u}=require("child_process"),h=u("which",[l],{encoding:"utf8",stdio:["ignore","pipe","ignore"]}).trim();if(h&&m.existsSync(h))return h}catch{}}throw new Error(`Could not find ${e} executable`)}function $t(e){for(const o of[c.join(k.homedir(),".local","share","applications",e),c.join("/usr/share/applications",e),c.join("/usr/local/share/applications",e)]){if(!m.existsSync(o))continue;const t=m.readFileSync(o,"utf8").match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m),n=(t==null?void 0:t[1])||(t==null?void 0:t[2]);if(n){if(c.isAbsolute(n)&&m.existsSync(n))return n;try{const{execFileSync:r}=require("child_process"),a=r("which",[n],{encoding:"utf8",stdio:["ignore","pipe","ignore"]}).trim();if(a&&m.existsSync(a))return a}catch{}}}}const St=5e3,Tt=100,Et=15e3,It=1e4,Pt=5e3;function At(e){if(!Number.isInteger(e)||e<1024||e>65535)throw new TypeError("port must be an integer from 1024 through 65535");return e}function F(e,o,t={}){const n=t.allowZero?0:Number.EPSILON;if(!Number.isFinite(e)||e<n){const r=t.allowZero?"non-negative":"positive";throw new TypeError(`${o} must be a finite ${r} number`)}return e}function Oe(e){if(typeof e!="string"||e.length===0||e!==e.trim())throw new TypeError("webSocketDebuggerUrl must be a non-empty URL string");let o;try{o=new URL(e)}catch(t){throw new TypeError(`webSocketDebuggerUrl is invalid: ${t.message}`)}if(o.protocol!=="ws:"||o.hostname!=="127.0.0.1"||o.username||o.password||o.hash||!o.port)throw new TypeError("webSocketDebuggerUrl must use ws://127.0.0.1 with an explicit port");return At(Number(o.port)),o}function _t(e,o){if(e===null||typeof e!="object"||Array.isArray(e)||e.type!=="page"||typeof e.url!="string"||typeof e.webSocketDebuggerUrl!="string")return!1;try{Oe(e.webSocketDebuggerUrl)}catch{return!1}return e.url.includes(o)}function ye(e){if(e===null||typeof e!="object"||Array.isArray(e)||e.type!=="page"||typeof e.url!="string"||typeof e.webSocketDebuggerUrl!="string")return!1;try{return Oe(e.webSocketDebuggerUrl),!0}catch{return!1}}function Dt(e){return new Promise(o=>setTimeout(o,e))}async function Ee(e,o){const t=Math.max(0,o.deadline-Date.now());let n=null;try{return await Promise.race([e,new Promise((r,a)=>{n=setTimeout(()=>{var s;(s=o.onTimeout)==null||s.call(o),a(new Error(`${o.label} timed out after ${o.timeoutMs}ms`))},t)})])}finally{n&&clearTimeout(n)}}async function z(e,o,t={}){const n=F(t.timeoutMs??Pt,"timeoutMs",{allowZero:!1}),r=t.fetchImpl??globalThis.fetch;if(typeof r!="function")throw new TypeError("fetchImpl must be a function");const a=`http://127.0.0.1:${e}/json/list`,s=new AbortController,d=Date.now()+n,i=t.quiet===!0;i||console.log(`[cdp] fetchRendererTargets: port=${e}, timeoutMs=${n}, endpoint=${a}`);let l;try{l=await Ee(Promise.resolve(r(a,{redirect:"error",signal:s.signal})),{deadline:d,timeoutMs:n,label:"renderer target discovery",onTimeout:()=>s.abort()})}catch(h){throw i||console.log("[cdp] fetchRendererTargets error:",h),new Error(`failed to fetch renderer targets from ${a}: ${h.message}`)}if(l===null||typeof l!="object"||!l.ok)throw new Error(`renderer target discovery failed with HTTP ${(l==null?void 0:l.status)??"unknown"}`);let u;try{u=await Ee(Promise.resolve(l.json()),{deadline:d,timeoutMs:n,label:"renderer target discovery JSON",onTimeout:()=>s.abort()})}catch(h){throw new Error(`malformed renderer target JSON from ${a}: ${h.message}`)}if(!Array.isArray(u))throw new Error("malformed renderer target JSON: expected an array");return u.filter(h=>_t(h,o)).sort(jt)}async function Mt(e,o,t={}){const n=F(t.timeoutMs??St,"timeoutMs",{allowZero:!0}),r=F(t.pollMs??Tt,"pollMs",{allowZero:!1}),a=t.fetchImpl??globalThis.fetch;let s=0;const d=Date.now()+n;let i=new Error("no renderer discovery attempt completed");for(console.log(`[cdp] waitForRendererTargets: port=${e}, hint=${o}, timeoutMs=${n}`);;){try{const u=Math.max(1,Math.min(n-s,d-Date.now()));console.log(`[cdp] Attempting fetch: elapsed=${s}ms, remainingBudget=${u}ms, deadline=${d}`);const h=await z(e,o,{fetchImpl:a,timeoutMs:u});if(h.length>0)return h;i=new Error("no matching renderer/index.html page targets")}catch(u){i=u instanceof Error?u:new Error(String(u)),console.log("[cdp] Fetch error:",i.message)}if(s>=n||Date.now()>=d)throw new Error(`timed out after ${n}ms waiting for renderer targets on 127.0.0.1:${e}: ${i.message}`);const l=Math.min(r,n-s);await Dt(l),s+=l}}class _{constructor(o,t={}){T(this,"webSocketDebuggerUrl");T(this,"WebSocketImpl");T(this,"commandTimeoutMs");T(this,"connectTimeoutMs");T(this,"socket",null);T(this,"nextRequestId",1);T(this,"pending",new Map);T(this,"socketOpen",!1);T(this,"opened",!1);T(this,"closed",!1);T(this,"closeStarted",!1);T(this,"terminalError",null);T(this,"openPromise",null);T(this,"resolveOpen",null);T(this,"rejectOpen",null);T(this,"connectTimer",null);this.webSocketDebuggerUrl=o;let n=null,r=null;try{n=require("ws")??null,n||(r="ws loaded but WebSocket is undefined")}catch(a){r=`ws require failed: ${(a==null?void 0:a.message)??a}`}if(!n)try{const a=require("undici");n=(a==null?void 0:a.WebSocket)??null,n||(r="undici loaded but WebSocket is undefined")}catch(a){r=`undici require failed: ${(a==null?void 0:a.message)??a}`}if(!n&&typeof globalThis.WebSocket=="function"&&(n=globalThis.WebSocket,r=null),!n){const a=r?` (${r})`:"";throw new Error(`No WebSocket implementation available for CDP${a}`)}this.WebSocketImpl=t.WebSocketImpl??n,this.commandTimeoutMs=F(t.commandTimeoutMs??Et,"commandTimeoutMs"),this.connectTimeoutMs=F(t.connectTimeoutMs??It,"connectTimeoutMs")}open(){if(this.closed)return Promise.reject(this.terminalError??new Error("CDP session is closed"));if(this.opened)return Promise.resolve(this);if(this.openPromise)return this.openPromise;this.openPromise=new Promise((t,n)=>{this.resolveOpen=t,this.rejectOpen=n}),this.connectTimer=setTimeout(()=>{this.terminate(new Error(`CDP WebSocket connect timed out after ${this.connectTimeoutMs}ms`)),this.closeSocket()},this.connectTimeoutMs);try{this.socket=new this.WebSocketImpl(this.webSocketDebuggerUrl)}catch(t){return this.terminate(new Error(`failed to open CDP WebSocket: ${t.message}`)),this.openPromise}const o=this.socket;return o.onopen=()=>{this.closed||this.socketOpen||(this.clearConnectTimer(),this.socketOpen=!0,Promise.all([this.send("Runtime.enable"),this.send("Page.enable")]).then(()=>{if(this.closed)return;this.opened=!0;const t=this.resolveOpen;this.resolveOpen=null,this.rejectOpen=null,t==null||t(this)}).catch(t=>{this.terminate(t),this.closeSocket()}))},o.onmessage=t=>this.handleMessage(t),o.onerror=t=>{const n=t.error,r=n instanceof Error?n.message:typeof t.message=="string"&&t.message.length>0?t.message:"unknown socket error";this.terminate(new Error(`CDP WebSocket error: ${r}`)),this.closeSocket()},o.onclose=()=>{this.closeStarted=!0,this.terminate(new Error("CDP WebSocket closed"))},this.openPromise}send(o,t={},n={}){if(this.closed)return Promise.reject(this.terminalError??new Error("CDP session is closed"));if(!this.socketOpen||!this.socket)return Promise.reject(new Error("CDP session is not open"));if(typeof o!="string"||o.length===0)return Promise.reject(new TypeError("CDP method must be a non-empty string"));const r=F(n.timeoutMs??this.commandTimeoutMs,"timeoutMs"),a=this.nextRequestId++;return new Promise((s,d)=>{const i=setTimeout(()=>{this.pending.delete(a),d(new Error(`CDP ${o} timed out after ${r}ms`))},r);this.pending.set(a,{resolve:s,reject:d,timer:i});try{this.socket.send(JSON.stringify({id:a,method:o,params:t}))}catch(l){clearTimeout(i),this.pending.delete(a),d(new Error(`failed to send CDP ${o}: ${l.message}`))}})}async evaluate(o,t={}){var r,a,s;if(typeof o!="string")throw new TypeError("Runtime.evaluate expression must be a string");const n=await this.send("Runtime.evaluate",{expression:o,awaitPromise:!0,returnByValue:!0},t);if(n!=null&&n.exceptionDetails)throw new Error(`Runtime.evaluate failed: ${((r=n.exceptionDetails.exception)==null?void 0:r.description)??n.exceptionDetails.text??"unknown JavaScript exception"}`);if(((a=n==null?void 0:n.result)==null?void 0:a.type)!=="undefined")return(s=n==null?void 0:n.result)==null?void 0:s.value}async addScriptToEvaluateOnNewDocument(o){const t=await this.send("Page.addScriptToEvaluateOnNewDocument",{source:o});return t==null?void 0:t.identifier}async removeScriptToEvaluateOnNewDocument(o){await this.send("Page.removeScriptToEvaluateOnNewDocument",{identifier:o})}close(){this.closeStarted||(this.terminate(new Error("CDP session closed by client")),this.closeSocket())}handleMessage(o){if(typeof o.data!="string"){this.terminate(new Error("received a non-text CDP WebSocket message")),this.closeSocket();return}let t;try{t=JSON.parse(o.data)}catch(r){this.terminate(new Error(`received malformed CDP JSON: ${r.message}`)),this.closeSocket();return}if(!Number.isInteger(t==null?void 0:t.id))return;const n=this.pending.get(t.id);if(n){if(this.pending.delete(t.id),clearTimeout(n.timer),t.error){n.reject(new Error(`CDP error: ${t.error.message}`));return}n.resolve(t.result)}}terminate(o){if(this.terminalError)return;this.clearConnectTimer(),this.terminalError=o,this.closed=!0,this.socketOpen=!1;const t=this.rejectOpen;this.resolveOpen=null,this.rejectOpen=null,t==null||t(o);for(const{reject:n,timer:r}of this.pending.values())clearTimeout(r),n(o);this.pending.clear()}clearConnectTimer(){this.connectTimer!==null&&(clearTimeout(this.connectTimer),this.connectTimer=null)}closeSocket(){if(this.closeStarted||(this.closeStarted=!0,!this.socket||typeof this.socket.close!="function"))return;const o=this.WebSocketImpl.CLOSING??2,t=this.WebSocketImpl.CLOSED??3;this.socket.readyState===o||this.socket.readyState===t||this.socket.close()}}function jt(e,o){const t=[String(e.id??""),e.url,e.webSocketDebuggerUrl],n=[String(o.id??""),o.url,o.webSocketDebuggerUrl];for(let r=0;r<t.length;r++){if(t[r]<n[r])return-1;if(t[r]>n[r])return 1}return 0}function Nt(){return c.join(C.app.getAppPath(),"themes")}function Re(){const e=c.join(C.app.getPath("userData"),"themes");return m.mkdirSync(e,{recursive:!0}),e}function Ot(){return[Re(),Nt()]}const Ie=new Map;function se(e){const o=[],t=new Set;for(const r of Ot()){if(!m.existsSync(r))continue;const a=m.readdirSync(r,{withFileTypes:!0});for(const s of a){if(!s.isDirectory())continue;const d=c.join(r,s.name),i=c.join(d,"theme.json");if(m.existsSync(i))try{const l=JSON.parse(m.readFileSync(i,"utf-8")),u=Ht(l);if(t.has(u.id))continue;const h=c.join(d,u.hero);if(!m.existsSync(h)||!m.statSync(h).isFile())throw new Error(`theme hero is missing: ${u.hero}`);if(e&&!Rt(u,e))continue;t.add(u.id),o.push({id:u.id,name:u.name,author:u.author,path:d,manifest:u})}catch(l){console.error(`Failed to load theme ${s.name}:`,l)}}}const n=new Map;for(const r of o){const a=c.join(r.path,r.manifest.hero),s=he(a),d=`${r.name.trim().toLocaleLowerCase()}\0${r.author.trim().toLocaleLowerCase()}\0${s}`,i=n.get(d);(!i||Bt(r.id,i.id))&&n.set(d,r)}return[...n.values()].sort((r,a)=>r.name.localeCompare(a.name))}function Rt(e,o){var n,r;const t=(n=e.apps[o])==null?void 0:n.compat;return t!==void 0?t:((r=j(o))==null?void 0:r.acceptsGenericThemes)===!0}function he(e){const o=m.statSync(e),t=Ie.get(e);if(t&&t.size===o.size&&t.mtimeMs===o.mtimeMs)return t.hash;const n=we.createHash("sha256").update(m.readFileSync(e)).digest("hex");return Ie.set(e,{size:o.size,mtimeMs:o.mtimeMs,hash:n}),n}function Bt(e,o){const t=e.startsWith("custom-"),n=o.startsWith("custom-");return t!==n?!t:e.length<o.length||e.length===o.length&&e.localeCompare(o)<0}function Be(e,o){return se(o).find(t=>t.id===e)}function Lt(e){const o=Be(e);if(!o)return;const t=c.resolve(o.path,o.manifest.hero);if(t.startsWith(`${c.resolve(o.path)}${c.sep}`))return t}function Ut(e){return`theme-asset://local/${encodeURIComponent(e)}`}function Wt(e){const o=c.join(e.path,e.manifest.hero),t=m.readFileSync(o);return`data:${Kt(e.manifest.hero)};base64,${t.toString("base64")}`}function Ft(e,o,t){const n=he(t);return se().some(r=>r.name.trim().toLowerCase()!==e.trim().toLowerCase()||r.author.trim().toLowerCase()!==o.trim().toLowerCase()?!1:he(c.join(r.path,r.manifest.hero))===n)}function Ht(e){if(typeof e!="object"||e===null||Array.isArray(e))throw new Error("theme manifest must be an object");if(e.schemaVersion!==1)throw new Error(`unsupported theme schema ${e.schemaVersion}`);if(typeof e.id!="string"||!/^[a-z0-9-]+$/.test(e.id))throw new Error("theme id must use lowercase letters, numbers, and hyphens");if(typeof e.name!="string"||!e.name.trim())throw new Error("theme name must be a non-empty string");if(typeof e.author!="string")throw new Error("theme author must be a string");if(typeof e.hero!="string")throw new Error("theme hero must be a string");if(typeof e.colors!="object"||e.colors===null)throw new Error("theme colors must be an object");const o=["accent","secondary","surface","text"];for(const t of o)if(typeof e.colors[t]!="string"||!/^#[0-9a-fA-F]{6}$/.test(e.colors[t]))throw new Error(`theme color ${t} must be a hex color`);return{schemaVersion:1,id:e.id,name:e.name.trim(),author:e.author,hero:e.hero,colors:{accent:e.colors.accent,secondary:e.colors.secondary,surface:e.colors.surface,text:e.colors.text},copy:e.copy??void 0,apps:e.apps??{}}}function Kt(e){const o=c.extname(e).toLowerCase();return{".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".gif":"image/gif"}[o]||"image/png"}const Le=5,zt=32*1024*1024;let Z=null;function ie(){try{const e=JSON.parse(m.readFileSync(Ue(),"utf8"));return ve(e)}catch{return[]}}function qt(e){const o=ve(e),t=[...ie()];for(const r of o){const a=t.findIndex(s=>s.id===r.id);a>=0?t[a]=r:t.push(r)}const n=t.slice(0,Le);return ke(n),n}function pe(e){if(!/^custom-[a-z0-9-]+$/i.test(e))throw new Error("Invalid custom theme id");const o=ie().filter(t=>t.id!==e);return ke(o),console.log(`[custom-theme-store] Deleted ${e}; ${o.length} custom themes remain`),o}function Jt(e,o,t,n=4){const r=Fe()[e]??{};return[...o].sort((a,s)=>{if(a===t)return-1;if(s===t)return 1;const d=r[a]??{count:0,lastUsedAt:0},i=r[s]??{count:0,lastUsedAt:0};return i.count-d.count||i.lastUsedAt-d.lastUsedAt}).slice(0,n)}function ge(e,o){if(!/^[a-z0-9-]+$/i.test(e)||!/^[a-z0-9-]+$/i.test(o))return;const t=Fe(),n=t[e]??{},r=n[o]??{count:0};n[o]={count:r.count+1,lastUsedAt:Date.now()},t[e]=n,He(We(),t)}function Gt(){return Z||(Z=new Promise((e,o)=>{const t=we.randomBytes(24).toString("hex"),n=De.createServer((r,a)=>{var d;if(a.setHeader("Access-Control-Allow-Origin","*"),a.setHeader("Access-Control-Allow-Headers","Authorization, Content-Type"),a.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),a.setHeader("Access-Control-Allow-Private-Network","true"),r.method==="OPTIONS"){a.writeHead(204).end();return}if(r.headers.authorization!==`Bearer ${t}`){a.writeHead(401).end("Unauthorized");return}if(r.url==="/theme-usage"&&r.method==="POST"){ce(r,a,i=>{if(typeof(i==null?void 0:i.appId)!="string"||typeof(i==null?void 0:i.themeId)!="string")throw new Error("Invalid theme usage payload");ge(i.appId,i.themeId),q(a,200,{success:!0})});return}if(r.url==="/custom-themes/delete"&&r.method==="POST"){ce(r,a,i=>{if(typeof(i==null?void 0:i.themeId)!="string"||!/^custom-[a-z0-9-]+$/i.test(i.themeId))throw new Error("Invalid custom theme id");const l=pe(i.themeId);q(a,200,l)});return}const s=(d=r.url)==null?void 0:d.match(/^\/custom-themes\/([a-z0-9-]+)$/i);if(s&&r.method==="DELETE"){const i=decodeURIComponent(s[1]),l=pe(i);q(a,200,l);return}if(r.url!=="/custom-themes"){a.writeHead(404).end("Not found");return}if(r.method==="GET"){q(a,200,ie());return}if(r.method!=="PUT"){a.writeHead(405).end("Method not allowed");return}ce(r,a,i=>{const l=ve(i);ke(l),q(a,200,l)})});n.once("error",o),n.listen(0,"127.0.0.1",()=>{const r=n.address();if(!r||typeof r=="string"){n.close(),o(new Error("Shared custom theme service did not expose a TCP port"));return}const a=`http://127.0.0.1:${r.port}`;e({endpoint:`${a}/custom-themes`,usageEndpoint:`${a}/theme-usage`,token:t})})}),Z)}function Ue(){return c.join(C.app.getPath("userData"),"custom-themes.json")}function We(){return c.join(C.app.getPath("userData"),"theme-usage.json")}function ke(e){He(Ue(),e)}function Fe(){try{const e=JSON.parse(m.readFileSync(We(),"utf8"));return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}}function He(e,o){m.mkdirSync(c.dirname(e),{recursive:!0}),m.writeFileSync(e,`${JSON.stringify(o,null,2)}
`)}function ce(e,o,t){let n=0;const r=[];e.on("data",a=>{if(n+=a.length,n>zt){o.writeHead(413).end("Payload too large"),e.destroy();return}r.push(a)}),e.on("end",()=>{if(!o.headersSent)try{t(JSON.parse(Buffer.concat(r).toString("utf8")))}catch(a){o.writeHead(400).end(a.message)}})}function ve(e){if(!Array.isArray(e))throw new Error("Custom themes must be an array");return e.slice(0,Le).map((o,t)=>{var r;if(!o||typeof o!="object")throw new Error(`Invalid custom theme at index ${t}`);const n=o;if(typeof n.id!="string"||!/^custom-[a-z0-9-]+$/i.test(n.id))throw new Error(`Invalid custom theme id at index ${t}`);if(typeof n.name!="string"||!n.name.trim())throw new Error(`Invalid custom theme name at index ${t}`);if(typeof n.dataUrl!="string"||!/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(n.dataUrl))throw new Error(`Invalid custom theme image at index ${t}`);for(const a of["accent","secondary","surface","text"])if(typeof((r=n.colors)==null?void 0:r[a])!="string"||!/^#[0-9a-f]{6}$/i.test(n.colors[a]))throw new Error(`Invalid custom theme color ${a} at index ${t}`);return{id:n.id,name:n.name.trim(),dataUrl:n.dataUrl,colors:{accent:n.colors.accent,secondary:n.colors.secondary,surface:n.colors.surface,text:n.colors.text}}})}function q(e,o,t){e.writeHead(o,{"Content-Type":"application/json; charset=utf-8"}),e.end(JSON.stringify(t))}const A="dream-work-style",S="dream-work-menu",X=new Map,G=new Map,R=new Map,ne=new Map,le=new Map,Y=new Map,fe=new Map,re=new Map,W=new Map,N="dream-work-theme:kimi:restored",H="dream-work-theme:kimi:action-at",Ke=new Set,w={id:"wb-dream-sentinel-id",hero:"data:image/png;base64,WBDREAMHEROSENTINEL",accent:"#010203",secondary:"#040506",surface:"#070809",text:"#0a0b0c"};let ee=null;async function Xt(){if(!ee)try{const e=c.resolve(__dirname,"manager","codex-dream-skin.css");ee=await st.readFile(e,"utf-8")}catch(e){console.warn("[injector] Failed to load Codex base CSS:",e.message),ee=""}return ee}async function ze(e,o,t,n={}){const r=j(e),a=n.rendererUrlHint?[n.rendererUrlHint]:(r==null?void 0:r.rendererHints)??["renderer/index.html","index.html"];let s=[],d="No renderer targets found";for(const i of a)try{if(console.log(`[injector] Trying hint "${i}" on port ${t}`),s=await Mt(t,i,{timeoutMs:2e4,pollMs:500}),s.length>0){console.log(`[injector] Found ${s.length} targets with hint "${i}"`);break}}catch(l){d=l.message,console.log(`[injector] Hint "${i}" failed: ${l.message}`)}if(e==="kimi")try{const i=await Ce(t);i.length>0&&(s=i),await Vt(s)}catch(i){console.log(`[injector] Failed to collect all Kimi targets: ${i.message}`)}if(s.length===0)try{console.log(`[injector] Strict hints failed, trying relaxed page-target fallback on port ${t}`);const l=await(await fetch(`http://127.0.0.1:${t}/json/list`,{signal:AbortSignal.timeout(5e3)})).json(),u=(Array.isArray(l)?l:[]).filter(ye).sort((h,p)=>{const g=[String(h.id??""),h.url,h.webSocketDebuggerUrl],x=[String(p.id??""),p.url,p.webSocketDebuggerUrl];for(let E=0;E<g.length;E++){if(g[E]<x[E])return-1;if(g[E]>x[E])return 1}return 0});u.length>0&&(console.log(`[injector] Relaxed fallback found ${u.length} page targets`),s=u)}catch(i){console.log(`[injector] Relaxed fallback failed: ${i.message}`)}if(s.length===0)return{success:!1,applied:0,error:d};try{const i=se(e);if(console.log(`[injector] Loaded ${i.length} themes`),!i.some(f=>f.id===o))return{success:!1,applied:0,error:`Theme ${o} is not compatible with ${e}`};const l=Jt(e,i.map(f=>f.id),o),u=new Map(i.map(f=>[f.id,f])),h=l.map(f=>u.get(f)).filter(Boolean),p=new Map;for(const f of h)p.set(f.id,{name:f.name,css:Pe(e,f.manifest,Wt(f)),surface:f.manifest.colors.surface});const g=Array.from(p.entries()).map(([f,y])=>{var D;return{id:f,name:y.name,css:y.css,surface:y.surface,accent:((D=i.find(b=>b.id===f))==null?void 0:D.manifest.colors.accent)??"#24c9d7"}});let x=ie();if(x.length===0){const f=e==="workbuddy"?"dreamCustomThemes":"dreamCodexCustomThemes";for(const y of s){const D=new _(y.webSocketDebuggerUrl);try{await D.open();const b=await D.evaluate(`(() => localStorage.getItem(${JSON.stringify(f)}) || '[]')()`),$=JSON.parse(b).filter(v=>!Ke.has(v==null?void 0:v.id));if(Array.isArray($)&&$.length>0){x=qt($);break}}catch(b){console.warn(`[injector] Failed to import existing custom themes from ${e} target ${y.id}:`,b)}finally{D.close()}}}const E=await Gt(),I=e==="workbuddy"?bo({styleId:A,menuId:S,currentThemeId:o,themes:g,sharedCustomThemes:x,sharedCustomThemeService:E,cssTemplate:Ge({id:w.id,colors:{accent:w.accent,secondary:w.secondary,surface:w.surface,text:w.text},copy:null},w.hero,{accent:w.accent,secondary:w.secondary,surface:w.surface,text:w.text})}):e==="hana-agent"?uo({styleId:A,menuId:S,currentThemeId:o,themes:g,sharedCustomThemes:x,sharedCustomThemeService:E,cssTemplate:Je({id:w.id,colors:{accent:w.accent,secondary:w.secondary,surface:w.surface,text:w.text}},w.hero,{accent:w.accent,secondary:w.secondary,surface:w.surface,text:w.text})}):wo({styleId:A,menuId:S,currentThemeId:o,appId:e,themes:g,sharedCustomThemes:x,sharedCustomThemeService:E,cssTemplate:Pe(e,{id:w.id,colors:{accent:w.accent,secondary:w.secondary,surface:w.surface,text:w.text}},w.hero)});let B=0;for(const f of s)try{console.log(`[injector] Injecting to target ${f.id}: ${f.url}`);const y=new _(f.webSocketDebuggerUrl);if(await y.open(),e==="workbuddy"){let b=!1;const $=Date.now()+15e3;for(;Date.now()<$&&(b=await y.evaluate(`(() => {
              const body = document.body;
              return body?.dataset.applicationName === 'workbuddy' && Boolean(
                document.querySelector('[data-view-id], .teams-container, .conversation-list, .main-content')
              );
            })()`).catch(()=>!1),!b);)await new Promise(v=>setTimeout(v,100));if(!b){console.warn(`[injector] Skipping non-WorkBuddy target ${f.id}: ${f.url}`),y.close();continue}}if(e==="codex"){const b=await Xt();b&&await y.evaluate(`(() => {
              const existing = document.getElementById('codex-dream-skin-base');
              if (!existing) {
                const style = document.createElement('style');
                style.id = 'codex-dream-skin-base';
                style.textContent = ${JSON.stringify(b)};
                document.head.appendChild(style);
              }
            })()`)}if(e==="hana-agent"||e==="kimi"||e==="doubao"){const b=`(() => {
            const inject = () => ${I};
            if (document.readyState === 'loading') {
              window.addEventListener('DOMContentLoaded', inject, { once: true });
            } else {
              inject();
            }
          })()`,$=e==="hana-agent"?X:e==="kimi"?ne:fe,v=$.get(f.id);v&&await y.removeScriptToEvaluateOnNewDocument(v).catch(()=>{});const L=await y.addScriptToEvaluateOnNewDocument(b);L&&$.set(f.id,L)}const D=await y.evaluate(e==="hana-agent"?`(() => { window.__dreamWorkForceApply = true; return ${I}; })()`:I);if(console.log(`[injector] Injection result for target ${f.id}:`,D),e==="hana-agent"){let b=!1;for(let $=0;$<20&&(b=await y.evaluate(`(() => {
              const host = document.getElementById('${S}-host');
              return Boolean(
                document.getElementById('${A}') &&
                host?.shadowRoot?.getElementById('${S}') &&
                document.documentElement.dataset.dreamTheme
              );
            })()`).catch(()=>!1),!b);$++)await new Promise(v=>setTimeout(v,100));if(!b){console.warn(`[injector] HanaAgent injection did not become ready for target ${f.id}`),y.close();continue}}if(e==="codex")for(let b=1;b<=4;b++){const $=await y.evaluate(`(() => {
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
            })`);if($.homeClasses&&$.homeClasses.includes("dream-skin-home")){console.log(`[injector] Codex home detection for ${f.id}: attempt=${b}`,JSON.stringify($));break}b<4&&await new Promise(v=>setTimeout(v,800))}if(e==="codex")try{const b=await y.evaluate(`(() => {
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
            })()`);console.log(`[injector] Codex debug info for ${f.id}:`,JSON.stringify(b,null,2))}catch(b){console.error(`[injector] Failed to get debug info for ${f.id}:`,b)}y.close(),B++}catch(y){console.error(`[injector] Failed to inject to target ${f.id}:`,y)}if(e==="hana-agent"&&B>0){const f=new Set(s.map($=>$.id)),y=Date.now()+2e4;let D="",b=0;for(;Date.now()<y;){let $=[];try{$=await z(t,".hanako/artifacts/renderer/",{timeoutMs:2e3,quiet:!0})}catch{}const v=$[0];if(!v){D="",b=0,await new Promise(O=>setTimeout(O,250));continue}if(!f.has(v.id)){console.log(`[injector] HanaAgent created renderer target ${v.id}; injecting theme`);const O=new _(v.webSocketDebuggerUrl);try{await O.open();const Ze=`(() => {
              const inject = () => ${I};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,Se=await O.addScriptToEvaluateOnNewDocument(Ze);Se&&X.set(v.id,Se),await O.evaluate(`(() => { window.__dreamWorkForceApply = true; return ${I}; })()`),f.add(v.id)}finally{O.close()}}const L=new _(v.webSocketDebuggerUrl);let $e=!1;try{await L.open(),$e=await L.evaluate(`(() => {
            const host = document.getElementById('${S}-host');
            return Boolean(document.getElementById('${A}') && host?.shadowRoot?.getElementById('${S}') && document.documentElement.dataset.dreamTheme);
          })()`)}catch{}finally{L.close()}if($e){if(D!==v.id)D=v.id,b=Date.now();else if(Date.now()-b>=2e3)return no(t,I,f),ge(e,o),{success:!0,applied:1}}else D="",b=0;await new Promise(O=>setTimeout(O,250))}return{success:!1,applied:0,error:"HanaAgent renderer did not stabilize with the injected theme"}}return e==="kimi"&&B>0&&Zt(t,I,new Set(s.map(f=>f.id))),e==="doubao"&&B>0&&Qt(t,I),B>0&&ge(e,o),{success:B>0,applied:B}}catch(i){return console.error("[injector] Injection failed:",i),{success:!1,applied:0,error:i.message}}}async function Ce(e){const o=await fetch(`http://127.0.0.1:${e}/json/list`,{signal:AbortSignal.timeout(2e3)});if(!o.ok)throw new Error(`HTTP ${o.status}`);const t=await o.json();return(Array.isArray(t)?t:[]).filter(n=>{if((n==null?void 0:n.type)!=="page"||!n.webSocketDebuggerUrl)return!1;const r=String(n.url??"");return r.includes("kimi-agent.html")||r.includes("kimichat.html")||/^https:\/\/(?:www\.)?kimi\.com\//.test(r)})}function Qt(e,o){var s;const t=re.get(e);t&&clearInterval(t);const n=(W.get(e)??0)+1;W.set(e,n);let r=!1;const a=setInterval(async()=>{if(!(r||W.get(e)!==n)){r=!0;try{const d=await z(e,"doubao://doubao-chat/chat",{timeoutMs:2e3,quiet:!0});for(const i of d){const l=new _(i.webSocketDebuggerUrl);try{await l.open();const u=await l.evaluate(`(() => ({
            restored: document.documentElement.dataset.dreamThemeRestored === 'true' || (() => {
              try { return localStorage.getItem('dream-work-theme:doubao:restored') === '1'; } catch { return false; }
            })(),
            ready: Boolean(document.getElementById('${A}')?.textContent && document.documentElement.dataset.dreamTheme)
          }))()`).catch(()=>({restored:!1,ready:!1}));!u.restored&&!u.ready&&(console.log(`[injector] Doubao renderer ${i.id} lost theme after navigation; reinjecting`),await l.evaluate(o))}finally{l.close()}}}catch(d){W.get(e)===n&&console.warn("[injector] Doubao watcher check failed:",d.message)}finally{r=!1}}},500);(s=a.unref)==null||s.call(a),re.set(e,a)}async function Vt(e){for(const o of e){const t=new _(o.webSocketDebuggerUrl);try{await t.open(),await t.evaluate(`(() => {
        try { localStorage.removeItem('${N}'); } catch {}
        delete document.documentElement.dataset.dreamThemeRestored;
        return true;
      })()`)}finally{t.close()}}}function Zt(e,o,t){const n=le.get(e);n&&clearInterval(n);const r=(Y.get(e)??0)+1;Y.set(e,r);let a=!1;const s=setInterval(async()=>{var d;if(!(a||Y.get(e)!==r)){a=!0;try{const i=await Ce(e),l=[];for(const p of i){const g=new _(p.webSocketDebuggerUrl);try{await g.open();const x=await g.evaluate(`(() => {
            let storedRestored = false;
            let actionAt = 0;
            try {
              storedRestored = localStorage.getItem('${N}') === '1';
              actionAt = Number(localStorage.getItem('${H}') || '0');
            } catch {}
            const themeId = document.documentElement.dataset.dreamTheme || '';
            return {
              restored: document.documentElement.dataset.dreamThemeRestored === 'true' || storedRestored,
              themeId,
              actionAt,
              ready: Boolean(document.getElementById('${A}')?.textContent && themeId)
              ,deleteCustomThemeId: window.__dreamWorkDeleteCustomThemeId || ''
            };
          })()`).catch(()=>({restored:!1,themeId:"",actionAt:0,ready:!1,deleteCustomThemeId:""}));l.push({target:p,...x})}finally{g.close()}}const u=(d=l.find(p=>p.deleteCustomThemeId))==null?void 0:d.deleteCustomThemeId;if(u){const p=pe(u);Ke.add(u),await Yt(i,p,u)}const h=[...l].sort((p,g)=>g.actionAt-p.actionAt)[0];if(h!=null&&h.restored){console.log("[injector] Kimi watcher observed restore state; preserving menus without theme"),await eo(i,o,t,h.actionAt);return}if(h!=null&&h.ready&&h.themeId&&l.some(p=>p.restored||!p.ready||p.themeId!==h.themeId)){console.log(`[injector] Kimi watcher synchronizing selected theme ${h.themeId} across targets`),await to(i,o,t,h.themeId,h.actionAt);return}for(const p of i){if(Y.get(e)!==r)return;const g=new _(p.webSocketDebuggerUrl);try{await g.open();const x=await g.evaluate(`(() => ({
            ready: Boolean(document.getElementById('${A}') && document.documentElement.dataset.dreamTheme),
            restored: document.documentElement.dataset.dreamThemeRestored === 'true'
          }))()`).catch(()=>({ready:!1,restored:!1}));if(x.ready||x.restored){t.add(p.id);continue}if(console.log(`[injector] Kimi watcher restoring theme on target ${p.id}: ${p.url}`),!t.has(p.id)){const E=`(() => {
              const inject = () => ${o};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`,I=await g.addScriptToEvaluateOnNewDocument(E);I&&ne.set(p.id,I)}await g.evaluate(o),t.add(p.id)}finally{g.close()}}}catch{await qe(e)||(clearInterval(s),le.delete(e))}finally{a=!1}}},750);s.unref(),le.set(e,s)}async function Yt(e,o,t){const n=JSON.stringify(o);for(const r of e){const a=new _(r.webSocketDebuggerUrl);try{await a.open(),await a.evaluate(`(() => {
        delete window.__dreamWorkDeleteCustomThemeId;
        try { localStorage.setItem('dreamCodexCustomThemes', ${JSON.stringify(n)}); } catch {}
        const host = document.getElementById('${S}-host');
        const menu = host?.shadowRoot?.getElementById('${S}');
        for (const row of Array.from(menu?.querySelectorAll('div') || [])) {
          if (row.dataset?.customThemeId === ${JSON.stringify(t)}) row.remove();
        }
        window.__dreamTheme?.replaceCustomThemes?.(${n});
        return true;
      })()`)}finally{a.close()}}}async function eo(e,o,t,n){for(const r of e){const a=new _(r.webSocketDebuggerUrl);try{if(await a.open(),!ne.has(r.id)){const d=`(() => {
          const inject = () => ${o};
          if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
          else inject();
        })()`,i=await a.addScriptToEvaluateOnNewDocument(d);i&&ne.set(r.id,i)}await a.evaluate(`(() => {
        try { localStorage.setItem('${N}', '1'); } catch {}
        try { localStorage.setItem('${H}', '${n}'); } catch {}
        document.documentElement.dataset.dreamThemeRestored = 'true';
        return true;
      })()`),await a.evaluate(`(() => {
        const host = document.getElementById('${S}-host');
        return Boolean(host?.shadowRoot?.getElementById('${S}'));
      })()`).catch(()=>!1)||await a.evaluate(o),await a.evaluate(`(() => {
        try { localStorage.setItem('${N}', '1'); } catch {}
        try { localStorage.setItem('${H}', '${n}'); } catch {}
        document.documentElement.dataset.dreamThemeRestored = 'true';
        const style = document.getElementById('${A}');
        if (style) style.textContent = '';
        delete document.documentElement.dataset.dreamTheme;
        delete document.documentElement.dataset.dreamShell;
        return true;
      })()`),t.add(r.id)}finally{a.close()}}}async function to(e,o,t,n,r){for(const a of e){const s=new _(a.webSocketDebuggerUrl);try{await s.open(),await s.evaluate(`(() => {
        try {
          localStorage.removeItem('${N}');
          localStorage.setItem('${H}', '${r}');
        } catch {}
        delete document.documentElement.dataset.dreamThemeRestored;
        return true;
      })()`),await s.evaluate("(() => Boolean(window.__dreamTheme?.activateTheme))()").catch(()=>!1)||await s.evaluate(o),await s.evaluate(`(() => window.__dreamTheme?.activateTheme(${JSON.stringify(n)}, ${r}))()`),t.add(a.id)}finally{s.close()}}}async function oo(e,o,t={}){return ro(e,o,t)}function no(e,o,t){const n=G.get(e);n&&clearInterval(n);const r=(R.get(e)??0)+1;R.set(e,r);let a=!1;const s=setInterval(async()=>{if(!a&&R.get(e)===r){a=!0;try{const i=(await z(e,".hanako/artifacts/renderer/",{timeoutMs:1e3,quiet:!0}))[0];if(!i||R.get(e)!==r)return;const l=new _(i.webSocketDebuggerUrl);try{await l.open();const u=await l.evaluate(`(() => {
          const host = document.getElementById('${S}-host');
          if (document.documentElement.dataset.dreamThemeRestored === 'true') return 'restored';
          return document.getElementById('${A}') && host?.shadowRoot?.getElementById('${S}') && document.documentElement.dataset.dreamTheme
            ? 'ready'
            : 'missing';
        })()`).catch(()=>"missing");if(u==="ready"||u==="restored"){t.add(i.id);return}if(console.log(`[injector] HanaAgent watcher restoring theme on renderer target ${i.id}`),R.get(e)!==r)return;const h=`(() => {
          const inject = () => ${o};
          if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
          else inject();
        })()`;if(!t.has(i.id)){const p=await l.addScriptToEvaluateOnNewDocument(h);p&&X.set(i.id,p)}if(await l.evaluate(o),R.get(e)!==r){await l.evaluate(`(() => {
            document.getElementById('${A}')?.remove();
            document.getElementById('${S}-host')?.remove();
            clearInterval(window.__dreamWorkMenuGuard);
            delete window.__dreamWorkMenuGuard;
            delete document.documentElement.dataset.dreamTheme;
          })()`).catch(()=>{});return}t.add(i.id)}finally{l.close()}}catch{await qe(e)||(clearInterval(s),G.delete(e))}finally{a=!1}}},1e3);G.set(e,s)}async function qe(e){try{return(await fetch(`http://127.0.0.1:${e}/json/version`,{signal:AbortSignal.timeout(500)})).ok}catch{return!1}}async function ro(e,o,t={}){var d;const n=t.rendererUrlHint?[t.rendererUrlHint]:((d=j(e))==null?void 0:d.rendererHints)??["renderer/index.html","index.html"];let r=[];for(const i of n)try{if(r=await z(o,i,{timeoutMs:1e3,quiet:!0}),r.length>0)break}catch{}if(r.length===0)try{const l=await(await fetch(`http://127.0.0.1:${o}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();r=(Array.isArray(l)?l:[]).filter(ye).sort((u,h)=>{const p=[String(u.id??""),u.url,u.webSocketDebuggerUrl],g=[String(h.id??""),h.url,h.webSocketDebuggerUrl];for(let x=0;x<p.length;x++){if(p[x]<g[x])return-1;if(p[x]>g[x])return 1}return 0})}catch{}if(r.length===0)return{installed:!1,menu:!1,targets:0};const a=[];for(const i of r){const l=new _(i.webSocketDebuggerUrl);try{if(await l.open(),e==="workbuddy"&&!await l.evaluate("(() => document.body?.dataset.applicationName === 'workbuddy')()"))continue;const u=await l.evaluate(`(() => {
        const style = document.getElementById('${A}');
        const menuHost = document.getElementById('${S}-host');
        const menu = document.getElementById('${S}') || menuHost?.shadowRoot?.getElementById('${S}');
        return JSON.stringify({
          installed: Boolean(style),
          menu: Boolean(menu),
          themeId: document.documentElement.dataset.dreamTheme ?? undefined
        });
      })()`),h=JSON.parse(u);a.push(h)}catch(u){console.warn(`[injector] Status check failed for ${e} target ${i.id}:`,u)}finally{l.close()}}const s=a.find(i=>i.installed&&i.themeId)??a.find(i=>i.installed);return{installed:a.some(i=>i.installed),menu:a.some(i=>i.menu),themeId:s==null?void 0:s.themeId,targets:a.length}}async function ao(e,o,t={}){var s;const n=Date.now();if(e==="hana-agent"){R.set(o,(R.get(o)??0)+1);const d=G.get(o);d&&clearInterval(d),G.delete(o)}if(e==="doubao"){W.set(o,(W.get(o)??0)+1);const d=re.get(o);d&&clearInterval(d),re.delete(o)}const r=t.rendererUrlHint??((s=j(e))==null?void 0:s.rendererHints[0])??"renderer/index.html";let a=[];try{a=e==="kimi"?await Ce(o):await z(o,r)}catch{}if(a.length===0)try{const i=await(await fetch(`http://127.0.0.1:${o}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();a=(Array.isArray(i)?i:[]).filter(ye).sort((l,u)=>{const h=[String(l.id??""),l.url,l.webSocketDebuggerUrl],p=[String(u.id??""),u.url,u.webSocketDebuggerUrl];for(let g=0;g<h.length;g++){if(h[g]<p[g])return-1;if(h[g]>p[g])return 1}return 0})}catch{}if(a.length===0)return{success:!1};for(const d of e==="hana-agent"||e==="kimi"?a:a.slice(0,1)){const i=new _(d.webSocketDebuggerUrl);if(await i.open(),e==="hana-agent"){const l=X.get(d.id);l&&(await i.removeScriptToEvaluateOnNewDocument(l).catch(()=>{}),X.delete(d.id))}if(e==="doubao"){const l=fe.get(d.id);l&&(await i.removeScriptToEvaluateOnNewDocument(l).catch(()=>{}),fe.delete(d.id))}await i.evaluate(`(() => {
      ${e==="hana-agent"?`try { localStorage.setItem('dream-work-theme:hana-agent:restored', '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';`:""}
      ${e==="doubao"?"document.documentElement.dataset.dreamThemeRestored = 'true';":""}
      ${e==="doubao"?"try { localStorage.setItem('dream-work-theme:doubao:restored', '1'); } catch {}":""}
      ${e==="kimi"?`try { localStorage.setItem('${N}', '1'); } catch {}
      try { localStorage.setItem('${H}', '${n}'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';`:""}
      ${e==="kimi"?`const style = document.getElementById('${A}');
      if (style) style.textContent = '';`:`document.getElementById('${A}')?.remove();
      document.getElementById('${S}')?.remove();
      document.getElementById('${S}-host')?.remove();
      clearInterval(window.__dreamWorkMenuGuard);
      delete window.__dreamWorkMenuGuard;
      if (window.__dreamWorkOutsideClick) {
        document.removeEventListener('pointerdown', window.__dreamWorkOutsideClick, true);
        delete window.__dreamWorkOutsideClick;
      }`}
      delete document.documentElement.dataset.dreamTheme;
      delete document.documentElement.dataset.dreamShell;
      return true;
    })`),i.close()}return{success:!0}}function Pe(e,o,t){var a,s,d,i;const n={accent:((a=o.colors)==null?void 0:a.accent)??"#24c9d7",secondary:((s=o.colors)==null?void 0:s.secondary)??"#ef8fd3",surface:((d=o.colors)==null?void 0:d.surface)??"#f7fbff",text:((i=o.colors)==null?void 0:i.text)??"#17344f"};if(e==="codex")return go(o,t,n);const r=j(e);return(r==null?void 0:r.kind)==="vscode-work"?so(o,t,n):(r==null?void 0:r.kind)==="generic-work"?e==="hana-agent"?Je(o,t,n):e==="kimi"?mo(o,t,n):io(e,o,t,n):Ge({...o,copy:null},t,n)}function so(e,o,t){return`/* DREAM_THEME:${e.id} */
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
  background-image: url(${JSON.stringify(o)}) !important;
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
`}function io(e,o,t,n){const r={"qoder-work":'#root > div, [class*="layout"], [class*="content-area"], [class*="main-content"]',catpaw:".main-area, .main-content-container, .main-content, .chat-content-area",zcode:'main, main > div, [class*="min-h-0"][class*="flex-1"]',"qwen-office":".agents-content-area, .agents-parchment-paper-surface"},a={"qoder-work":'[class*="sidebar"]',catpaw:".sidebar-wrapper, .sidebar",zcode:"#sidebar, aside","qwen-office":".agents-sidebar, .group\\/sidebar"},s=r[e]??'main, [role="main"], [class*="main-content"]',d=a[e]??'aside, nav, [class*="sidebar"]',i=e==="qoder-work"?ho(n):e==="catpaw"?po(t,n):e==="opencode"?co(n):e==="doubao"?lo(n):"";return`/* DREAM_THEME:${o.id} */
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
:is(${d}) {
  background: color-mix(in srgb, ${n.surface} 90%, transparent) !important;
  color: ${n.text} !important;
  backdrop-filter: blur(20px) saturate(108%);
}
:is(${s}) {
  background: linear-gradient(90deg, color-mix(in srgb, ${n.surface} 82%, transparent) 0 12%, transparent 42%), url(${JSON.stringify(t)}) center / cover no-repeat fixed !important;
  color: ${n.text} !important;
}
:is(${s}) :where([class*="message"], [class*="chat"], [class*="composer"], [class*="editor"], [contenteditable="true"], textarea) {
  color: ${n.text} !important;
}
${e==="doubao"?"":`:is(${s}) :where([class*="message"], [class*="bubble"], [class*="composer"], [class*="input-container"]) {
  background-color: color-mix(in srgb, ${n.surface} 88%, transparent) !important;
  backdrop-filter: blur(16px) saturate(108%);
}`}
:is(${s}) :where(p, span, li, h1, h2, h3, h4, strong, em) { color: ${n.text} !important; }
button[class*="bg-primary"], button[class*="bg-accent"] { background-color: ${n.accent} !important; color: #fff !important; }
${i}`}function co(e){return`
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
}`}function lo(e){return`
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
}`}function Je(e,o,t){return`/* DREAM_THEME:${e.id} */
:root {
  --dream-work-accent: ${t.accent};
  --dream-work-secondary: ${t.secondary};
  --dream-work-surface: ${t.surface};
  --dream-work-text: ${t.text};
}
html, body, #react-root, .app-shell {
  background-color: ${t.surface} !important;
  background-image: url(${JSON.stringify(o)}) !important;
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
}`}function mo(e,o,t){const n=t.accent;t.secondary;const r=t.surface,a=t.text;return`/* DREAM_THEME:${e.id} */
html.dark, html {
  --Bg-Primary: color-mix(in srgb, ${r} 54%, transparent) !important;
  --Bg-Primary90: color-mix(in srgb, ${r} 48%, transparent) !important;
  --Bg-Secondary: color-mix(in srgb, ${r} 46%, transparent) !important;
  --Bg-Tertiary: color-mix(in srgb, ${r} 36%, transparent) !important;
  --Bg-Quaternary: color-mix(in srgb, ${r} 28%, transparent) !important;
  --BgGp-Primary: color-mix(in srgb, ${r} 54%, transparent) !important;
  --BgGp-Primary90: color-mix(in srgb, ${r} 48%, transparent) !important;
  --BgGp-Secondary: color-mix(in srgb, ${r} 46%, transparent) !important;
  --BgGp-Tertiary: color-mix(in srgb, ${r} 36%, transparent) !important;
  --Bg-GroundPC: color-mix(in srgb, ${r} 20%, transparent) !important;
  --Labels-Primary: color-mix(in srgb, ${a} 88%, #000000) !important;
  --Labels-Secondary: color-mix(in srgb, ${a} 62%, transparent) !important;
  --Labels-Tertiary: color-mix(in srgb, ${a} 44%, transparent) !important;
  --Labels-Quaternary: color-mix(in srgb, ${a} 28%, transparent) !important;
  --Colors-KMBlue: ${n} !important;
  --Others-KMBlue10: color-mix(in srgb, ${n} 12%, transparent) !important;
  --Others-BubbleBlue: color-mix(in srgb, ${n} 26%, ${r}) !important;
  --Others-TextSelected: color-mix(in srgb, ${n} 22%, transparent) !important;
  --Syntax-Mark: ${n} !important;
}
html, body, .page {
  background-color: ${r} !important;
  color: ${a} !important;
}
body {
  background-image: url(${JSON.stringify(o)}) !important;
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
  background: color-mix(in srgb, ${r} 30%, transparent) !important;
  border-right: 1px solid color-mix(in srgb, ${n} 18%, transparent) !important;
  color: ${a} !important;
}
main.main-pane {
  background: color-mix(in srgb, ${r} 16%, transparent) !important;
  border-radius: 12px !important;
  color: ${a} !important;
}
.app > .main {
  background: color-mix(in srgb, ${r} 16%, transparent) !important;
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
  background: color-mix(in srgb, ${r} 42%, transparent) !important;
  border-color: color-mix(in srgb, ${n} 24%, transparent) !important;
}
main.main-pane .conversation-tab,
main.main-pane .conversation-view,
main.main-pane [class*="conversation"] {
  background: transparent !important;
  color: ${a} !important;
}
main.main-pane :where([class*="message"], [class*="chat"], [class*="composer"], [class*="input"], [contenteditable="true"], textarea) {
  background-color: color-mix(in srgb, ${r} 66%, transparent) !important;
  border-color: color-mix(in srgb, ${n} 30%, transparent) !important;
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
  background: color-mix(in srgb, ${r} 42%, transparent) !important;
}
main.main-pane :where([class*="message"], [class*="chat"], [class*="composer"], [class*="input"]) :where(p, span, li, h1, h2, h3, h4, strong, em, a) {
  color: ${a} !important;
}
[contenteditable="true"], textarea, input {
  color: ${a} !important;
  caret-color: ${n} !important;
}
:where(button[class*="primary"], button[mode="primary"]) {
  background-color: ${n} !important;
  color: #ffffff !important;
}
.nav-item, .mode-tab, .sidebar-scroll a, .sidebar-scroll span, .sidebar-footer, .account {
  color: ${a} !important;
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
}`}function uo(e){return`(() => {
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
  })()`}function ho(e){return`
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
}`}function po(e,o){return`
/* CatPaw new-task and conversation surfaces */
html body #root .main-area {
  position: relative !important;
  isolation: isolate !important;
  background-color: ${o.surface} !important;
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
  background-color: color-mix(in srgb, ${o.surface} 78%, transparent) !important;
  border: 1px solid color-mix(in srgb, ${o.accent} 30%, transparent) !important;
  box-shadow: 0 16px 42px color-mix(in srgb, ${o.surface} 30%, transparent) !important;
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
  color: ${o.text} !important;
}
html body #root .catpaw-desk-inputBox :where(button, [role="button"]) {
  color: ${o.text} !important;
}
html body #root .catpaw-desk-inputBox :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${o.accent} 15%, transparent) !important;
}
html body #root .catpaw-desk-inputBox :where(svg, svg *) {
  color: currentColor !important;
}
`}function Ae(e,o=""){return JSON.stringify(typeof e=="string"?e:o)}function Ge(e,o,t){var r,a;return`/* DREAM_THEME:${String(e.id??"custom").replace(/[^a-z0-9_-]/gi,"")} */
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
  background-image: url(${JSON.stringify(o)}) !important;
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
  content: ${Ae((r=e.copy)==null?void 0:r.brand)};
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
  content: ${Ae((a=e.copy)==null?void 0:a.headline)};
  color: var(--wb-text);
  font: 750 clamp(18px, 2.7vw, 42px)/1.15 ui-rounded, system-ui;
  text-shadow: 0 2px 12px white;
  pointer-events: none;
}`}function go(e,o,t){const n=fo(t.surface),r=n?`color-mix(in srgb, ${t.surface} 90%, transparent)`:`color-mix(in srgb, ${t.surface} 86%, transparent)`,a=n?`color-mix(in srgb, ${t.accent} 16%, ${t.surface})`:`color-mix(in srgb, ${t.accent} 42%, ${t.surface})`,s=n?"#172033":`color-mix(in srgb, ${t.surface} 72%, #000000)`,d="#f2f6ff",i=`/* DREAM_THEME:${e.id} */
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
  --dream-skin-art: url(${JSON.stringify(o)});
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
  background: ${r} !important;
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
`+l}function fo(e){const o=/^#([0-9a-f]{6})$/i.exec(e);if(!o)return!0;const t=parseInt(o[1],16);return .299*(t>>16&255)+.587*(t>>8&255)+.114*(t&255)>140}function bo(e){return`(() => {
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
})()`}function wo(e){const o=JSON.stringify(e.themes),t=JSON.stringify(e.cssTemplate??""),n=e.appId;return`(() => {
  const themes = ${o};
  const cssTemplate = ${t};
  const sentinels = ${JSON.stringify(w)};
  const currentThemeId = '${e.currentThemeId}';
  const appId = '${n}';
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

  const markKimiAction = (restored, actionAt = Date.now()) => {
    if (appId !== 'kimi') return actionAt;
    try {
      localStorage.setItem('${H}', String(actionAt));
      if (restored) localStorage.setItem('${N}', '1');
      else localStorage.removeItem('${N}');
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

  const restoreNative = () => {
    markKimiAction(true);
    if (appId === 'doubao') {
      try { localStorage.setItem('dream-work-theme:doubao:restored', '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';
    }
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
  const native = row('还原主题', 'rgba(0,0,0,.24)', () => restoreNative());
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
    try { restoredAtStart = localStorage.getItem('${N}') === '1'; } catch {}
  }
  if (restoredAtStart) restoreNative();
  else applyTheme(currentThemeId);
  window.__dreamTheme = {
    ...(window.__dreamTheme || {}),
    activateTheme: (themeId, actionAt) => applyTheme(themeId, actionAt),
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
})()`}async function xo(e){try{return k.platform()==="win32"?yo(e):k.platform()==="darwin"?ko(e):k.platform()==="linux"?vo(e):{success:!1,error:`Unsupported platform: ${k.platform()}`}}catch(o){return{success:!1,error:o.message}}}function yo(e){const o=c.join(k.homedir(),"Desktop"),t=c.join(o,`${e.label}.lnk`),n=process.execPath,r=c.dirname(n),a=`
    $WshShell = New-Object -comObject WScript.Shell
    $Shortcut = $WshShell.CreateShortcut("${t.replace(/\\/g,"\\\\")}")
    $Shortcut.TargetPath = "${n.replace(/\\/g,"\\\\")}"
    $Shortcut.Arguments = "--launch=${e.appId}:${e.themeId}"
    $Shortcut.WorkingDirectory = "${r.replace(/\\/g,"\\\\")}"
    $Shortcut.Save()
  `;return new Promise(s=>{require("child_process").exec(`powershell -Command "${a.replace(/"/g,'\\"')}"`,d=>{s(d?{success:!1,error:d.message}:{success:!0,path:t})})})}function ko(e){const o=c.join(k.homedir(),"Desktop"),t=c.join(o,`${e.label}.app`),r=`
    tell application "Terminal"
      do script "'${process.execPath}' --launch=${e.appId}:${e.themeId}"
    end tell
  `,a=c.join(o,`${e.id}.scpt`);return m.writeFileSync(a,r),new Promise(s=>{require("child_process").exec(`osacompile -o "${t}" "${a}"`,d=>{m.unlinkSync(a),s(d?{success:!1,error:d.message}:{success:!0,path:t})})})}async function vo(e){const o=c.join(k.homedir(),".local","share","applications");m.existsSync(o)||m.mkdirSync(o,{recursive:!0});const t=c.join(o,`${e.id}.desktop`),n=process.execPath,r=`[Desktop Entry]
Type=Application
Name=${e.label}
Exec="${n}" --launch=${e.appId}:${e.themeId}
Icon=${e.icon||"utilities-terminal"}
Terminal=false
Categories=Utility;
`;return m.writeFileSync(t,r),m.chmodSync(t,493),{success:!0,path:t}}const Co=be.promisify(Q.execFile),$o="https://api.dreamskin.cc",Xe=`${$o}/v1/themes`,Qe=32*1024*1024,ae=6;let de=0;async function So(){const e=de,o=await To(e),t=o.items;de=e+t.length>=o.total?0:e+ae;const n=Re(),r={checked:t.length,imported:0,skipped:0,offset:e,page:Math.floor(e/ae)+1,total:o.total,nextOffset:de,failed:[]};for(const a of t){const s=_o(a.themeId);if(!a.applyCompatible||Be(s)){r.skipped++;continue}try{await Eo(a,n,s)?r.imported++:r.skipped++}catch(d){r.failed.push({id:a.id,name:a.name,error:d.message})}}return r}async function To(e){const o=`${Xe}?limit=${ae}&offset=${e}&sort=recent`,t=await fetch(o,{signal:AbortSignal.timeout(3e4),redirect:"error"});if(!t.ok)throw new Error(`Theme list request failed: HTTP ${t.status}`);const n=await t.json();if(!Array.isArray(n.items)||n.items.length>ae||!Number.isInteger(n.total)||n.total<0)throw new Error("Theme list response is invalid");return{items:n.items,total:n.total}}async function Eo(e,o,t){Ao(e);const n=m.mkdtempSync(c.join(k.tmpdir(),"dream-work-theme-")),r=c.join(n,"theme.zip"),a=c.join(n,"extract"),s=c.join(o,`.updating-${t}-${process.pid}`);try{m.mkdirSync(a);const d=`${Xe}/${e.id}/download`,i=await fetch(d,{signal:AbortSignal.timeout(12e4),redirect:"error"});if(!i.ok)throw new Error(`Theme download failed: HTTP ${i.status}`);const l=Buffer.from(await i.arrayBuffer());if(l.length!==e.packageBytes)throw new Error(`Downloaded size mismatch: expected ${e.packageBytes}, got ${l.length}`);if(l.length>Qe)throw new Error("Theme package exceeds 32 MiB");if(we.createHash("sha256").update(l).digest("hex")!==e.packageSha256)throw new Error("Downloaded SHA-256 does not match metadata");m.writeFileSync(r,l,{flag:"wx"}),await Io(r,a);const h=Po(a),p=JSON.parse(m.readFileSync(c.join(h,"theme.json"),"utf8")),g=p.image;if(typeof g!="string"||c.basename(g)!==g||!/\.(png|jpe?g|webp)$/i.test(g))throw new Error("Theme image name is invalid");const x=c.join(h,g),E=c.join(h,"theme.css");if(!m.existsSync(x)||!m.statSync(x).isFile())throw new Error("Theme image is missing");if(!m.existsSync(E)||!m.statSync(E).isFile())throw new Error("theme.css is missing");const I=Do(p,e,t,`hero${c.extname(g).toLowerCase()}`);return Ft(I.name,I.author,x)?!1:(m.mkdirSync(s),m.copyFileSync(x,c.join(s,I.hero)),m.copyFileSync(E,c.join(s,"theme.css")),m.writeFileSync(c.join(s,"theme.json"),`${JSON.stringify(I,null,2)}
`),m.renameSync(s,c.join(o,t)),!0)}finally{m.rmSync(s,{recursive:!0,force:!0}),m.rmSync(n,{recursive:!0,force:!0})}}async function Io(e,o){const{path7za:t}=require("7zip-bin");await Co(t,["x",e,`-o${o}`,"-y"],{windowsHide:!0,timeout:12e4})}function Po(e){const t=[e,...m.readdirSync(e,{withFileTypes:!0}).filter(n=>n.isDirectory()).map(n=>c.join(e,n.name))].filter(n=>m.existsSync(c.join(n,"theme.json"))&&m.existsSync(c.join(n,"theme.css")));if(t.length!==1)throw new Error("Theme ZIP must contain one theme root");return t[0]}function Ao(e){if(!/^ver_[a-z0-9]{8,64}$/.test(e.id))throw new Error("Theme version ID is invalid");if(!Number.isInteger(e.packageBytes)||e.packageBytes<1||e.packageBytes>Qe)throw new Error("Theme package size is invalid");if(!/^[a-f0-9]{64}$/.test(e.packageSha256))throw new Error("Theme package SHA-256 is invalid")}function _o(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").replace(/-+/g,"-")||"community-theme"}function Do(e,o,t,n){const r=e.appearance==="dark"?"dark":"light",a=r==="dark"?"#10141c":"#f4f7fa",s=e.colors||{};return{schemaVersion:1,id:t,name:String(e.name||o.name||t).trim(),author:o.authorDisplayName||"DreamSkin Community",hero:n,colors:{accent:J(s.accent,"#4f8cff",a),secondary:J(s.secondary||s.accentAlt,"#7ba7d8",a),surface:J(s.panelAlt||s.panel||s.background,a,a),text:J(s.text,r==="dark"?"#eef2f7":"#1f2937",a)},copy:null,apps:Object.fromEntries(te.filter(d=>!d.acceptsGenericThemes).map(d=>[d.id,{compat:!0}]))}}function J(e,o,t){if(typeof e!="string")return o;const n=e.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(n){let i=n[1];return i.length===3&&(i=i.split("").map(l=>l+l).join("")),`#${i.slice(0,6).toLowerCase()}`}const r=e.trim().match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);if(!r)return o;const a=r[4]===void 0?1:Number(r[4]),s=J(t,o,o).slice(1).match(/../g).map(i=>parseInt(i,16));return`#${[1,2,3].map(i=>Math.round(Number(r[i])*a+s[i-1]*(1-a))).map(i=>i.toString(16).padStart(2,"0")).join("")}`}let me=null;C.protocol.registerSchemesAsPrivileged([{scheme:"theme-asset",privileges:{standard:!0,secure:!0,supportFetchAPI:!0,stream:!0}}]);function Ve(){me=new C.BrowserWindow({width:1200,height:800,webPreferences:{preload:c.join(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1}}),process.env.VITE_DEV_SERVER_URL?me.loadURL(process.env.VITE_DEV_SERVER_URL):me.loadFile(c.join(__dirname,"../renderer/dist/index.html"))}C.app.whenReady().then(()=>{C.protocol.handle("theme-asset",e=>{const o=decodeURIComponent(new URL(e.url).pathname.replace(/^\//,"")),t=Lt(o);return t?new Response(m.readFileSync(t),{headers:{"Content-Type":Mo(t),"Cache-Control":"public, max-age=3600"}}):new Response("Theme asset not found",{status:404})}),Ve()});function Mo(e){const o=c.extname(e).toLowerCase();return o===".jpg"||o===".jpeg"?"image/jpeg":o===".webp"?"image/webp":"image/png"}C.app.on("window-all-closed",()=>{process.platform!=="darwin"&&C.app.quit()});C.app.on("activate",()=>{C.BrowserWindow.getAllWindows().length===0&&Ve()});const _e=process.argv.find(e=>e.startsWith("--launch="));if(_e){const[,e]=_e.split("="),[o,t]=e.split(":");o&&t&&(console.log(`[main] Received launch args: ${o}:${t}`),setTimeout(async()=>{try{const n=await je(o,t);if(n.success){console.log(`[main] Launched ${o} with theme ${t} on port ${n.port}`),console.log(`[main] Starting theme injection for ${o}:${t} on port ${n.port}`);const r=await ze(o,t,n.port);console.log("[main] Injection result:",r)}else console.error(`[main] Failed to launch ${o}: ${n.error}`)}catch(n){console.error("[main] Launch error:",n)}},1e3))}C.ipcMain.handle("discover-apps",async()=>dt());C.ipcMain.handle("launch-app",async(e,o,t)=>je(o,t));C.ipcMain.handle("apply-theme",async(e,o,t,n)=>ze(o,t,n));C.ipcMain.handle("create-shortcut",async(e,o)=>{const t={...o,id:`${o.appId}-${o.themeId}-${Date.now()}`};return xo(t)});C.ipcMain.handle("list-themes",async(e,o)=>se(o).map(t=>({id:t.id,name:t.name,author:t.author,hero:Ut(t.id)})));C.ipcMain.handle("update-themes",async()=>So());C.ipcMain.handle("get-status",async(e,o,t)=>{var r;return await ht(o)?{...await oo(o,t||((r=j(o))==null?void 0:r.defaultPort)||9339),running:!0}:{installed:!1,menu:!1,targets:0,running:!1}});C.ipcMain.handle("remove-skin",async(e,o,t)=>ao(o,t));C.ipcMain.handle("debug-targets",async(e,o)=>{try{const n=await(await fetch(`http://127.0.0.1:${o}/json/list`,{signal:AbortSignal.timeout(5e3)})).json();return{success:!0,count:n.length,raw:n,targets:n.map(r=>({id:r.id,type:r.type,url:r.url,title:r.title,webSocketDebuggerUrl:r.webSocketDebuggerUrl}))}}catch(t){return{success:!1,error:t.message}}});

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = path.join(__dirname, 'node_modules', '7zip-bin', 'win', 'x64');
const targetPath = path.join(targetDir, '7za.exe');
const backupPath = path.join(targetDir, '7za-original.exe');

console.log('Patching 7za.exe with symlink-safe wrapper...');

// Backup original if not already backed up
if (!fs.existsSync(backupPath)) {
  if (fs.existsSync(targetPath)) {
    fs.copyFileSync(targetPath, backupPath);
    console.log('Backed up original 7za.exe');
  }
}

// Compile wrapper
const wrapperSrc = path.join(__dirname, '..', '7za-wrapper.c');
console.log('Compiling 7za wrapper...');
execSync(`gcc -mconsole -O2 -o "${targetPath}" "${wrapperSrc}"`, { stdio: 'inherit' });
console.log('Patched 7za.exe successfully');

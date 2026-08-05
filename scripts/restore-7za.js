const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'node_modules', '7zip-bin', 'win', 'x64');
const targetPath = path.join(targetDir, '7za.exe');
const backupPath = path.join(targetDir, '7za-original.exe');

console.log('Restoring original 7za.exe...');

if (fs.existsSync(backupPath)) {
  fs.copyFileSync(backupPath, targetPath);
  fs.unlinkSync(backupPath);
  console.log('Restored original 7za.exe');
} else {
  console.log('No backup found, skipping restore');
}

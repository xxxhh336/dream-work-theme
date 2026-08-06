const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const eventName = process.env.GITHUB_EVENT_NAME;
const refType = process.env.GITHUB_REF_TYPE;
const refName = process.env.GITHUB_REF_NAME;
const inputTag = process.env.INPUT_RELEASE_TAG?.trim();

function parseTag(tag) {
  const match = /^v(\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?)$/.exec(tag);
  if (!match) throw new Error(`Release tag must use the form v1.2.3, received: ${tag}`);
  return match[1];
}

if (eventName === 'workflow_dispatch' && inputTag) {
  const version = parseTag(inputTag);
  packageJson.version = version;
  fs.writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);
  console.log(`Manual release will build version ${version} for ${inputTag}.`);
} else if (eventName !== 'workflow_dispatch' && refType === 'tag') {
  const version = parseTag(refName);
  if (packageJson.version !== version) {
    throw new Error(`Tag ${refName} does not match package version v${packageJson.version}.`);
  }
  console.log(`Tag ${refName} matches package version ${packageJson.version}.`);
} else {
  console.log(`Building package version ${packageJson.version}.`);
}

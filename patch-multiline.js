// Multi-line patcher for JS bundles
// Usage: node patch-multiline.js <target-file> <patch-file>
const fs = require('fs');
const path = require('path');

if (process.argv.length < 4) {
  console.error('Usage: node patch-multiline.js <target-file> <patch-file>');
  process.exit(1);
}

const targetPath = process.argv[2];
const patchPath = process.argv[3];

const target = fs.readFileSync(targetPath, 'utf8');

let patch = fs.readFileSync(patchPath, 'utf8');
// Remove BOM and invisible characters from the start
patch = patch.replace(/^\uFEFF|^\u200B|^\u200C|^\u200D|^\u2060|^\u00A0|^\s+/, '');



function extractBlock(label) {
  // Print the raw patch file for debugging
  if (label === 'Old') {
    console.log('DEBUG: Raw patch file content:\n', patch);
  }
  // Allow optional leading whitespace before # marker
  const re = new RegExp(`^\s*# ${label}\r?\n([\s\S]*?)(?=^\s*# |$)`, 'm');
  const m = patch.match(re);
  if (!m) {
    console.log(`DEBUG: Regex match failed for label: ${label}`);
    return null;
  }
  // Remove leading indentation from all lines
  return m[1]
    .replace(/\r/g, '')
    .split('\n')
    .map(line => line.replace(/^\s+/, ''))
    .join('\n')
    .trim();
}


const oldBlock = extractBlock('Old');
const newBlock = extractBlock('New');
console.log('DEBUG: Extracted # Old block (length):', oldBlock && oldBlock.length, '\n', oldBlock);
console.log('DEBUG: Extracted # New block (length):', newBlock && newBlock.length, '\n', newBlock);
if (!oldBlock || !newBlock) {
  console.error('Could not extract Old/New blocks from patch file.');
  process.exit(1);
}


// Try to find the old block in the target, ignoring indentation
function findBlockInTarget(target, block) {
  // Remove leading indentation from both target and block for matching
  const norm = str => str.replace(/\r/g, '').split('\n').map(l => l.replace(/^\s+/, '')).join('\n');
  const normTarget = norm(target);
  const normBlock = norm(block);
  const idx = normTarget.indexOf(normBlock);
  if (idx === -1) return -1;
  // Find the corresponding index in the original target string
  const before = normTarget.slice(0, idx).split('\n').length;
  let realIdx = 0, lines = 0;
  while (lines < before && realIdx < target.length) {
    if (target[realIdx] === '\n') lines++;
    realIdx++;
  }
  return target.indexOf(block.split('\n')[0].trim(), realIdx - 1);
}

const idx = findBlockInTarget(target, oldBlock);
if (idx === -1) {
  console.error('No match found for multi-line patch!');
  process.exit(1);
}

const patched = target.slice(0, idx) + newBlock + target.slice(idx + oldBlock.length);
fs.writeFileSync(targetPath, patched);
console.log('Multi-line patch applied to', targetPath);

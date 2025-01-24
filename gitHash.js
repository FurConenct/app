import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Get the current Git commit hash
const gitHash = execSync('git rev-parse --short HEAD').toString().trim();

// Trim the last two characters from the Git hash
const trimmedGitHash = gitHash.slice(0, -1);

// Path to the cons.js file
const consFilePath = path.join(process.cwd(), 'src/client/state/cons.ts');

// Read the current contents of the cons.js file
let consFileContent = fs.readFileSync(consFilePath, 'utf-8');

// Update the version string
consFileContent = consFileContent.replace(/version: '.*?'/, `version: '${trimmedGitHash}'`);

// Write the updated content back to the file
fs.writeFileSync(consFilePath, consFileContent, 'utf-8');

console.log(`Version updated to ${trimmedGitHash} in cons.ts`);
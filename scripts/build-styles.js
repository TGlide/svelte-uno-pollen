import { execSync } from 'child_process';
import fs from 'fs';

execSync('npx pollen');

// Read file from ./src/styles/pollen.json, and convert to JS object
const pollen = JSON.parse(fs.readFileSync('./src/styles/pollen.json', 'utf8'));

// Write JS object to ./src/styles/pollen.js
fs.writeFileSync('./src/styles/pollen.js', `export default ${JSON.stringify(pollen)}`);

// Run prettier on ./src/styles/pollen.js
execSync('npx prettier --write ./src/styles/pollen.js');

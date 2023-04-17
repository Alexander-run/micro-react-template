// read all files under ./node_modules and print to a file

const fs = require('fs');
const path = require('path');

const dir = './node_modules';
const file = 'node_modules.txt';

const files = fs.readdirSync(dir);

fs.writeFileSync(file, files.join('\n'));


const fs = require('fs');
const path = require('path');
const decomment = require('decomment');

const filePath = path.join(__dirname, 'sample.js');
const file = fs.readFileSync(filePath, 'UTF-8');
const changedFile = decomment(file);
const newFilePath = path.join(__dirname, 'changedSample.js');
const fileWrite = fs.writeFileSync(newFilePath, changedFile, 'UTF-8');

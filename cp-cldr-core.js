#!/usr/bin/env node

const fs = require('fs');
const mkdirp = require('mkdirp');

const inputFileNames = [
  'likelySubtags',
  'numberingSystems',
  'plurals',
  'ordinals',
  'currencyData',
  'timeData',
  'weekData'
];

function main() {
  mkdirp.sync('./supplemental');

  inputFileNames.forEach(fileName => {
    json2ts(
      `./node_modules/cldr-core/supplemental/${fileName}.json`,
      `./supplemental/${fileName}.js`
    );
  });
}

function json2ts(inputPath, outputPath) {
  const contents = fs.readFileSync(inputPath);
  const output = `export default ${contents}\n`;
  fs.writeFileSync(outputPath, output);
}

main();

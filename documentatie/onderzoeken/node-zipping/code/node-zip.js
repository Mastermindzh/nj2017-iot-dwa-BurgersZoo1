const fs = require('fs');
const nodeZip = require('node-zip');
const output = './output/node-zip.zip'
const files = [
  './../bestanden/45.html',
  './../bestanden/lena3.tif',
  './../bestanden/mike.wav',
  './../bestanden/monarch.tif',
  './../bestanden/pine.bin'
]

console.time('script');

let zip = new nodeZip();

files.forEach(file => {
  zip.file(file.slice('./../bestanden/'.length, file.length), fs.readFileSync(file));
})

let data = zip.generate({base64:false,compression:'DEFLATE'});

fs.writeFileSync(output, data, 'binary');

console.timeEnd('script');

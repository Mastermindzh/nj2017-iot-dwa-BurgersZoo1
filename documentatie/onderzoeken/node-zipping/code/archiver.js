const fs = require('fs');
const archiver = require('archiver');

const files = [
  './../bestanden/45.html',
  './../bestanden/lena3.tif',
  './../bestanden/mike.wav',
  './../bestanden/monarch.tif',
  './../bestanden/pine.bin'
]

console.time('script');

var output = fs.createWriteStream('./output/archiver.zip');
var archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

archive.pipe(output);

files.forEach(file => {
  archive.file(file, { name: file });
})

archive.finalize();

console.timeEnd('script');

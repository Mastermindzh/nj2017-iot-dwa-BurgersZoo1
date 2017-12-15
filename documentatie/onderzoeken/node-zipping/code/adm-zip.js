const AdmZip = require('adm-zip');
const output = './output/admzip.zip'
const files = [
  './../bestanden/45.html',
  './../bestanden/lena3.tif',
  './../bestanden/mike.wav',
  './../bestanden/monarch.tif',
  './../bestanden/pine.bin'
]

console.time('script');

let zip = new AdmZip();

files.forEach(file => {
  zip.addLocalFile(file)
})

zip.writeZip(output, result => {
  console.log(result);
})

console.timeEnd('script');

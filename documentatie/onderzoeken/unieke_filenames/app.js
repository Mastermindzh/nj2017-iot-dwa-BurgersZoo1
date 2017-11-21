let crypto = require('crypto'),
  algorithm = 'aes-256-ctr',
  password = 'd6F3Efeq';

const fs = require('fs-extra')

/**
 * Empty directory
 */
fs.emptyDir('results', err => {
  if (err) return console.error(err)
})

/**
 * create a million files :)
 */
for (let counter = 0; counter < 1000000; counter++) {
  new Promise((fulfill, reject) => {
    // prepare filename with
    crypto.pseudoRandomBytes(16, function (err, raw) {
      fulfill(raw.toString('hex') + Date.now() + '.txt');
    })
  }).then(filename => {
    if (!fs.existsSync(`results/${filename}`)) {
      fs.writeFile(`results/${filename}`, "", function (err) {
        if (err) {
          reject(counter);
        }
      });
    }
  }).catch(number => {
    console.log(`failed after ${number} attemps`);
    process.exit();
  });
}

'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var fs = require('fs-extra')
var app = module.exports = loopback();
var express = require('express');
var multer = require('multer');
var mime = require('mime-types');
var audiopath = './audio';
var tempPath = './temp';
var SoxCommand = require('sox-audio');
var crypto = require('crypto'), // used to generate unique filenames
  algorithm = 'aes-256-ctr',
  password = 'd6F3Efeq';
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({storage: storage});

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) {
    throw err;
  }
  app.post('/upload', upload.any(), function (req, res, next) {
    let promises = [];
    req.files.forEach(file => {
      promises.push(new Promise((fulfill, reject) => {
        crypto.pseudoRandomBytes(16, function (err, raw) {
          file.filename = raw.toString('hex') + Date.now()
          fulfill(file);
        })
      }))
    });

    Promise.all(promises).then((files) => {
      const CONVERTPROMISES = files.map(file => {
        let input = file.path;
        let output = audiopath + '/' + file.filename + '.wav';
        return convertFile(input, output);
      });

      Promise.all(CONVERTPROMISES).then((paths)=>{
        fs.emptyDir('./temp');
        res.send(paths)
      })
    });
  });

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
});

// convert file to .wav with specific requirements for playing audio on the arduino.
var convertFile = function (input, output) {
  return new Promise((fulfill, reject) => {
    var command = SoxCommand(input)
      .inputEncoding('unsigned-integer')
      .output(output)
      .outputFileType('wav')
      .outputBits(8)
      .outputSampleRate('16k')
      .outputChannels(1);
    command.run();
    command.on('end', function() {
      fulfill(output.slice(1));
    });
    command.on('error', function(error){
      reject(error)
    })
  })

};



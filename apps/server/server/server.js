'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();
var express = require('express');
var multer = require('multer');
var mime = require('mime-types')
var audiopath = './audio';
var SoxCommand = require('sox-audio');
var crypto = require('crypto'), // used to generate unique filenames
  algorithm = 'aes-256-ctr',
  password = 'd6F3Efeq';
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, audiopath);
  },
  filename: function (req, file, cb) {
    console.log("filename file:")
    console.log(file);
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


  //todo
  app.post('/upload', upload.any(), function (req, res, next) {
    console.log(req.files);

    //todo get file and convert it


    var filePaths = [];
    for (var i = 0; i < req.files.length; i++) {
      var file = req.files[i];
      var input = file.path;
      var randomName = crypto.pseudoRandomBytes(16, function (err, raw) {
        return (raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
      });

      var output = audiopath+randomName+'.wav';
      console.log(randomName);

      console.log("input: "+input+" output: "+output)
      convertFile(input, output);

    }


    //todo alle paths terug geven van alle files
    res.send(file.path);
  });

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
});


var addStandardListeners = function (command) {
  command.on('prepare', function (args) {
    console.log('Preparing with args ' + args.join(' '));
  });

  command.on('start', function (commandLine) {
    console.log('Started with command ' + commandLine);
  });

  command.on('progress', function (progress) {
    console.log('Progress: ', progress);
  });

  command.on('error', function (err, stdout, stderr) {
    console.log('Cannot process audio: ' + err.message);
    console.log('Sox Command Stdout: ', stdout);
    console.log('Sox Command Stderr: ', stderr)
  });

  command.on('end', function () {
    console.log('Sox command end!');
  });
};

// convert file to .wav with specific requirements for playing audio on the arduino.
var convertFile = function (input, output) {
  var command = SoxCommand(input)
    .inputEncoding('unsigned-integer')
    .output(output)
    .outputFileType('wav')
    .outputBits(8)
    .outputSampleRate('16k')
    .outputChannels(1);
  addStandardListeners(command);
  command.run();
};



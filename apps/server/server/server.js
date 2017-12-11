'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();
var express = require('express');
var multer = require('multer');
var audiopath = './audio';
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, audiopath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({storage: storage})

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
    var file = req.files[0];
    res.send(file.path);
  });

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
});

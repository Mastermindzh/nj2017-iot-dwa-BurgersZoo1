'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');


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
  if (err) throw err;

//======================================================================
  //todo what to do if file name already exists?
  //toto filetoupload nog steeds....
  app.post('/upload', function (req, res) {


    console.log(req.file)
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = './audio' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  })


  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});


/**
 * Local function that moves the file to a different location on the filesystem
 * Takes two function arguments to make it compatible w/ Promise or Callback APIs
 * @param {Function} successFunc
 * @param {Function} errorFunc
 */
function doMove(successFunc, errorFunc) {
  const fstream = fs.createWriteStream(path);

  streamifier.createReadStream(buf).pipe(fstream);

  fstream.on('error', function (error) {
    errorFunc(error);
  });

  fstream.on('close', function () {
    successFunc();
  });
}

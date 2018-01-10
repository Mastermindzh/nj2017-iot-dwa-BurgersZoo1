"use strict";

let loopback = require("loopback");
let boot = require("loopback-boot");
let path = require("path");
let fs = require("fs-extra");
let app = (module.exports = loopback());
let express = require("express");
let multer = require("multer");
let mime = require("mime-types");
let audiopath = "./audio";
let tempPath = "./temp";
let SoxCommand = require("sox-audio");
let archiver = require('archiver');
let axios = require('axios');
let crypto = require("crypto"), // used to generate unique filenames
  algorithm = "aes-256-ctr",
  password = "d6F3Efeq";
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});


let upload = multer({storage: storage});

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit("started");
    let baseUrl = app.get("url").replace(/\/$/, "");
    console.log("Web server listening at: %s", baseUrl);
    if (app.get("loopback-component-explorer")) {
      let explorerPath = app.get("loopback-component-explorer").mountPath;
      console.log("Browse your REST API at %s%s", baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) {
    throw err;
  }
  app.post("/upload", upload.any(), function (req, res, next) {
    let promises = [];
    req.files.forEach(file => {
      promises.push(
        new Promise((fulfill, reject) => {
          crypto.pseudoRandomBytes(16, function (err, raw) {
            file.filename = raw.toString("hex") + Date.now();
            fulfill(file);
          });
        })
      );
    });

    Promise.all(promises).then(files => {
      const CONVERTPROMISES = files.map(file => {
        let input = file.path;
        let output = audiopath + "/" + file.filename + ".wav";
        return convertFile(input, output);
      });

      Promise.all(CONVERTPROMISES).then(paths => {
        fs.emptyDir("./temp");
        res.send(paths);
      });
    });
  });

  app.use(function (req, res, next) {
    if (req.originalUrl.startsWith("/audio/")) {
      if (!fs.existsSync(path.join(__dirname, "../", req.originalUrl))) {
        res.redirect("/audio/default.wav");
      }
    }

    next();
  });

  app.get("/zip/:speurpuntid", function (req, res) {
    let speurpuntid = req.params.speurpuntid;
    app.models.Speurpunt.getAudio(speurpuntid, function (err, result) {
      if (err) res.sendStatus(500);
      if (result === undefined || result === null) {
        res.sendStatus(500);
      }

      createZip(result).then(result => {
        let actualPath = path.join(__dirname,"../" + result);
        res.sendFile(actualPath, function (err) {
          if (err) {
              console.log(err);
          }
        });

      });
    })
  });

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
});

// convert file to .wav with specific requirements for playing audio on the arduino.
function convertFile(input, output) {
  return new Promise((fulfill, reject) => {
    let command = SoxCommand(input)
      .inputEncoding("unsigned-integer")
      .output(output)
      .outputFileType("wav")
      .outputBits(8)
      .outputSampleRate("16k")
      .outputChannels(1);
    command.run();
    command.on("end", function () {
      fulfill(output.slice(1));
    });
    command.on("error", function (error) {
      reject(error);
    });
  });
}


function createZip(files){

  return new Promise((resolve,reject) => {
    let zipname = './audio/audio.zip';

      var output = fs.createWriteStream(zipname);
      var archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
      });

      // listen for all archive data to be written
      // 'close' event is fired only when a file descriptor is involved
      output.on('close', function() {
        resolve(zipname);
      });

      // pipe archive data to the file
      archive.pipe(output);

      //voeg weetjes toe met juiste naamgeving
      for(let i=0; i<files.weetjes.length; i++){
        var file = __dirname + '/..' + files.weetjes[i];
        archive.append(fs.createReadStream(file), { name: i+'.wav' });
      }
      archive.finalize();
  })

}



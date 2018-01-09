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
let archiver = require('archiver')
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

  app.get("/zip", function (req, res) {
    createZip();
    res.download('audio/audio.zip');
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

function createZip() {
  let basePath = './audio';
  let output = fs.createWriteStream('./audio/audio.zip');
  let archive = archiver('zip', {
    zlib: {level: 9}
  });

  archive.on('error', function(err) {
    console.log(error);
    throw err;
  });

  archive.pipe(output);

  let files = [];
  fs.readdirSync(audiopath).forEach(file => {
    if(file.endsWith('.wav')) files.push(file);
  });

  files.forEach(file => {
    archive.file(basePath+'/'+file, {name: file});
  });

  archive.finalize();
  console.log("zip done")
}

function getAudioFilenames(speurpuntId){
  let path = 'http://localhost:8001/api/speurpunten/';
  let filter = '?filter=%7B%22include%22%3A%20%5B%22dierengeluid%22%2C%22verblijf%22%2C%20%22weetjes%22%5D%7D'
  axios.get(path+speurpuntId+filter).then(result => {

    //todo
  }).catch(err => {
    console.log(err);
  });
}

//todo dier.wav -> dierengeluid
// 0 tm n .wav

//?filter=%7B%22include%22%3A%20%5B%22dierengeluid%22%2C%22verblijf%22%2C%20%22weetjes%22%5D%7D

var audioConverter = require("audio-converter");
audioConverter("./audio-input", "./audio-output", {
  progressBar: true
}).then(function() {
  console.log("Done!");
});

//npm install --save audio-converter

/*
Fijn dat het een progress bar heeft, ziet er leuk uit :)
Verder is het niet mogelijk om een specifieke file mee te geven, en ook niet wat de output moet zijn.
Ik vind deze tool daarom niet geschikt.
(wel vreemd, aangezien het met sox wel mogelijk is, en deze package gebaseerd is op sox)
*/

var SoxCommand = require('sox-audio');

// npm install --save sox-audio
//***mono 8 bit 16kHz***.

/*
Heeft een fijne documentatie met veel voorbeelden :)
sox heeft geen standard support voor mp3 :/, dit komt omdat het patented is, dus moet je een extra library installeren:
twolame

dus: sudo pacman -S sox
en: sudo pacman -S twolame
Als het goed is moet sudo pacman -Qi sox dan alle optionele plugins die mp3 support aangeven hebben. Zo niet installeer deze ook.

Zodra je alles geïnstalleerd hebt werkt dit fijn, het kan je best gedetailleerde informatie geven.
 */
var addStandardListeners = function(command){
  command.on('prepare', function(args){
    console.log('Preparing with args '+args.join(' '));
  });

  command.on('start', function(commandLine) {
    console.log('Started with command ' + commandLine);
  });

  command.on('progress', function(progress) {
    console.log('Progress: ', progress);
  });

  command.on('error', function(err, stdout, stderr) {
    console.log('Cannot process audio: ' + err.message);
    console.log('Sox Command Stdout: ', stdout);
    console.log('Sox Command Stderr: ', stderr)
  });

  command.on('end', function() {
    console.log('Sox command end!');
  });
};

var convertFile = function(input, output){
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


var input = './audio-input/elephant.mp3';
var output = './audio-output/sox-audio.wav';

convertFile(input, output);
console.log("Converting %s to %s", input, output);

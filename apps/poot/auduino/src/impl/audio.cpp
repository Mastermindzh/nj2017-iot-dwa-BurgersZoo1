#include "../head/Audio.h"

Audio::Audio(){
  this->tmrpcm = new TMRpcm();
  this->tmrpcm->speakerPin = SPEAKER_PIN;
  this->soundCounter = 0;
  Serial.print(F("Initializing SD card..."));

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println(F("initialization SD card failed!"));
    return;
  }
  Serial.println(F("initialization SD card done."));
};

void Audio::play(){
  char* animalSound = (char*) "dier.wav";

  while(! tmrpcm -> isPlaying()){
    String tempString;
    tempString.concat(soundCounter);
    tempString.concat(".wav");
    char audioFact [tempString.length() + 1];
    tempString.toCharArray(audioFact,sizeof(audioFact));
    if(SD.exists(audioFact)){
      Serial.println("weetje");
      tmrpcm->play(audioFact);
      soundCounter++;
    }
    else{
      soundCounter = 0;
      Serial.println(F("geluid niet aanwezig"));
    }

  }

  // pause here until playing sound is finished }
  while(tmrpcm -> isPlaying()){
    Serial.println(F("wacht weetje"));

  }

  if(SD.exists(animalSound)){
    Serial.println(F("dier"));
    tmrpcm->play(animalSound);
  }
  else{

    Serial.println(F("dier niet hier"));

  }
  while(tmrpcm -> isPlaying()){
    Serial.println(F("wacht op dier"));

  }
  tmrpcm -> stopPlayback();
  Serial.println(F("klaar"));


};

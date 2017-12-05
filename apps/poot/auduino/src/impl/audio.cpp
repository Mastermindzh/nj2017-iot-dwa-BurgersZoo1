#include "../head/Audio.h"

Audio::Audio(){
  this->tmrpcm = new TMRpcm();
  this->tmrpcm->speakerPin = SPEAKER_PIN;

  Serial.print("Initializing SD card...");

  if (!SD.begin(4)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");
};
void Audio::play(){
  tmrpcm->play("audio.wav");
};

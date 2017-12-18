#include "../head/Audio.h"

Audio::Audio(){
  this->statusled = new Led(2);
  this->tmrpcm = new TMRpcm();
  this->tmrpcm->speakerPin = SPEAKER_PIN;

  Serial.print("Initializing SD card...");

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("initialization failed!");
    this->statusled->blink(300);
    this->inited = 0;
    return;
  }
  Serial.println("initialization done.");
  this->inited = 1;
};
void Audio::play(){
  if(!this->inited)
    return;
  tmrpcm->play("audio.wav");
};
void Audio::loop(){
  this->statusled->loop();
  if(!this->inited)
    return;

  //todo: integrate with Arne's state machine
  if(tmrpcm->isPlaying())
    statusled->on();
  else
    statusled->off();
}

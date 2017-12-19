#include "../head/Audio.h"

Audio::Audio(){
  this-> tmrpcm = new TMRpcm();
  this-> tmrpcm->speakerPin = SPEAKER_PIN;
  this-> soundCounter = 0;
  this-> dierenGeluid = (char*) "dier.wav";

  this->statusled = new Led(2);


  Serial.print(F("Initializing SD card..."));

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println(F("initialization SD card failed!"));
    return;
  }
  Serial.println(F("initialization SD card done."));
};

bool Audio::isWeetjeGeluidAanwezig(){

  this -> buf = "";
  this -> buf.concat(soundCounter);
  this -> buf.concat(".wav");

  char weetjeAudioBestandsnaam[sizeof(this->buf+1)];
  this->  buf.toCharArray(weetjeAudioBestandsnaam,sizeof(weetjeAudioBestandsnaam));

  if(SD.exists(weetjeAudioBestandsnaam)){
    return  true;
  }else{
    this -> soundCounter = 0;
    weetjeAudioBestandsnaam[0]='0';
    this -> buf[0]='0';
    return SD.exists(weetjeAudioBestandsnaam);
  }
};

bool Audio::isDierenGeluidAanwezig(){
  return SD.exists(this->dierenGeluid);
}

void Audio::speelWeetje(){
  char weetjeAudioBestandsnaam[sizeof(this->buf+1)];
  this->  buf.toCharArray(weetjeAudioBestandsnaam,sizeof(weetjeAudioBestandsnaam));
  tmrpcm -> play(weetjeAudioBestandsnaam);
  this -> soundCounter ++;
}

void Audio::speelDierengeluid(){
  tmrpcm -> play(this->dierenGeluid);
}

bool Audio::isPlaying(){
  return tmrpcm -> isPlaying();
}
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

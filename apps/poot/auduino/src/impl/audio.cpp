#include "../head/Audio.h"

Audio::Audio(){
  this->tmrpcm = new TMRpcm();
  this->tmrpcm->speakerPin = SPEAKER_PIN;
  this->soundCounter = 0;
  this->dierenGeluid = (char*) "dier.wav";

  this->statusled = new Led(2);

  Serial.print(F("Initializing SD card..."));

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println(F("initialization SD card failed!"));
    this->statusled->blink(300);
    return;
  }
  Serial.println(F("initialization SD card done."));
  this->inited = 1;
};

bool Audio::isWeetjeGeluidAanwezig(){
  this->buf = "";
  this->buf.concat(soundCounter);
  this->buf.concat(".wav");

  char weetjeAudioBestandsnaam[sizeof(this->buf+1)];
  this->buf.toCharArray(weetjeAudioBestandsnaam,sizeof(weetjeAudioBestandsnaam));

  if(SD.exists(weetjeAudioBestandsnaam)){
    return true;
  }else{
    this->soundCounter = 0;
    weetjeAudioBestandsnaam[0]='0';
    this->buf[0]='0';
    return SD.exists(weetjeAudioBestandsnaam);
  }
};

bool Audio::isDierenGeluidAanwezig(){
  return SD.exists(this->dierenGeluid);
}

bool Audio::isPlaying(){
  return tmrpcm->isPlaying();
}
void Audio::play(){
  if(!this->inited){
    Serial.println(F("Niet inited"));
    return; //todo: try to re-init?
  }
  if(this->isWeetjeGeluidAanwezig()){
    this->speelWeetje();
  }else if(this->isDierenGeluidAanwezig())
    this->speelDierengeluid();
  else{
    Serial.println(F("weetje en dierengeluid niet aanwezig."));
  }
};

void Audio::speelWeetje(){
  Serial.println(F("Start speel weetje"));
  this->statusled->on();
  char weetjeAudioBestandsnaam[sizeof(this->buf+1)];
  this->buf.toCharArray(weetjeAudioBestandsnaam,sizeof(weetjeAudioBestandsnaam));
  tmrpcm->play(weetjeAudioBestandsnaam);
  this->soundCounter++;
  this->state = WEETJE_AFSPELEN;
}

void Audio::speelDierengeluid(){
  Serial.println(F("Start speel dierengeluid"));
  this->statusled->on();
  tmrpcm->play(this->dierenGeluid);
  this->state = DIERENGELUID_AFSPELEN;
}
void Audio::idle(){
  this->statusled->off();
  this->state = IDLE;
}

void Audio::loop(){
  this->statusled->loop();
  if(!this->inited)
    return;

  switch (this->state) {
    case WEETJE_AFSPELEN:
      if(!this->isPlaying())
        this->isDierenGeluidAanwezig() ? this->speelDierengeluid() : this->idle();
      break;
    case DIERENGELUID_AFSPELEN:
      if(!this->isPlaying())
        this->idle();
      break;
    default:
      break;
  }
  //todo: integrate with Arne's state machine
  if(tmrpcm->isPlaying())
    statusled->on();
  else
    statusled->off();
}

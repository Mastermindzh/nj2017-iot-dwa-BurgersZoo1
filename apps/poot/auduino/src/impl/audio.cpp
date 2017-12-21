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

void Audio::play(){
  if(!this->inited){
    Serial.println(F("Niet inited"));
    return; //todo: try to re-init?
  }
  if(this->state != IDLE){
    Serial.println(F("already playing"));
    return;
  }
  if(this->isWeetjeGeluidAanwezig()){
    this->speelWeetje();
  }else if(this->isDierenGeluidAanwezig()){
    Serial.println(F("Direct diergeluid want weetje niet aanwezig"));
    this->speelDierengeluid();
  }else{
    Serial.println(F("weetje en dierengeluid niet aanwezig."));
  }
};

void Audio::loop(){
  this->statusled->loop();
  if(!this->inited)
    return;

  switch (this->state) {
    case WEETJE_AFSPELEN:
      if(!tmrpcm->isPlaying()){
        this->isDierenGeluidAanwezig() ? this->speelDierengeluid() : this->idle();
      }
      break;
    case DIERENGELUID_AFSPELEN:
      if(!this->isPlaying())
        this->idle();
      break;
    default:
      break;
  }
}

void Audio::speelWeetje(){
  this->statusled->on();

  String filenamestr = this->getCurrentAudioFilename();
  char filename[filenamestr.length()+1];
  filenamestr.toCharArray(filename, sizeof(filename));

  tmrpcm->play(filename);
  this->state = WEETJE_AFSPELEN;

  Serial.print(F("Started speel weetje nummer "));
  Serial.println(this->soundCounter);

  this->soundCounter++;
  if(!this->isWeetjeGeluidAanwezig())
    this->soundCounter = 0;
}

void Audio::speelDierengeluid(){
  Serial.println(F("Start speel dierengeluid"));
  this->statusled->on();
  tmrpcm->play(this->dierenGeluid);
  this->state = DIERENGELUID_AFSPELEN;
}

bool Audio::isWeetjeGeluidAanwezig(){
  String filenamestr = this->getCurrentAudioFilename();
  char filename[filenamestr.length()+1];
  filenamestr.toCharArray(filename, sizeof(filename));
  return SD.exists(filename);
};

bool Audio::isDierenGeluidAanwezig(){
  return SD.exists(this->dierenGeluid);
}

bool Audio::isPlaying(){
  return tmrpcm->isPlaying();
}

String Audio::getCurrentAudioFilename(){
  String filename = "";
  filename.concat(this->soundCounter);
  filename.concat(".wav");
  return filename;
}

void Audio::idle(){
  this->statusled->off();
  this->state = IDLE;
  Serial.println(F("Back to IDLE"));
}

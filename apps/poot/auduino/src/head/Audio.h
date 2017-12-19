#ifndef AUDIO
#define AUDIO

#include <TMRpcm.h>
#include <SD.h>
#include "./head/States.h"
#include "Led.h"

#define SPEAKER_PIN 9
#define SD_CS_PIN 4

class Audio {
public:
  Audio();
  States state = IDLE;

  bool isWeetjeGeluidAanwezig();
  bool isDierenGeluidAanwezig();
  bool isPlaying();

  void speelWeetje();
  void speelDierengeluid();
  
private:
  TMRpcm* tmrpcm;
  unsigned int soundCounter;
  char* dierenGeluid;
  String buf;
  Led* statusled;
  bool inited = 0;
};

#endif

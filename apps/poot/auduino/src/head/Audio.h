#ifndef AUDIO
#define AUDIO

#include <TMRpcm.h>
#include <SD.h>
#include "Led.h"

#define SPEAKER_PIN 9
#define SD_CS_PIN 4

class Audio {
public:
  Audio();
  void play();
  void loop();
private:
  TMRpcm* tmrpcm;
  Led* statusled;
  bool inited = 0;
};

#endif

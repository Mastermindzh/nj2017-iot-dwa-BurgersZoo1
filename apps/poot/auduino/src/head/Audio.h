#ifndef AUDIO
#define AUDIO

#include <TMRpcm.h>
#include <SD.h>
#include "Led.h"

#define SPEAKER_PIN 9
#define SD_CS_PIN 4

enum AudioStates {
  IDLE
  , DIERENGELUID_AFSPELEN   // Er wordt nu een dierengeluid afgespeeld
  , WEETJE_AFSPELEN         // Er wordt nu een weetje afgespeeld
};

class Audio {
public:
  Audio();
  void loop();
  void play();

private:
  TMRpcm* tmrpcm;
  unsigned int soundCounter;
  char* dierenGeluid;
  String buf;
  Led* statusled;
  bool inited = 0;

  AudioStates state = IDLE;

  bool isWeetjeGeluidAanwezig();
  bool isDierenGeluidAanwezig();
  bool isPlaying();

  void speelWeetje();
  void speelDierengeluid();
  void idle();
};


#endif

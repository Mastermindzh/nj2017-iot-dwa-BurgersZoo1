#ifndef AUDIO
#define AUDIO

#include <TMRpcm.h>
#include <SD.h>

#define SPEAKER_PIN 9
#define SD_CS_PIN 4

class Audio {
public:
  Audio();

  /**
   * Play the audio!
   */
  void play();

private:
  TMRpcm* tmrpcm;
  unsigned int soundCounter;
};

#endif

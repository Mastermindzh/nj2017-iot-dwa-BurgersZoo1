#ifndef MADUINOPORTAL
#define MADUINOPORTAL

#include "Audio.h"

class MaduinoPortal {
public:
  MaduinoPortal(Audio* audio);
  void loop();
private:
  Audio* audio;
};

#endif

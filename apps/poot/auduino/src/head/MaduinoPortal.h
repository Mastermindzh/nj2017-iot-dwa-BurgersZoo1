#ifndef MADUINOPORTAL
#define MADUINOPORTAL

#include "Audio.h"
#include <Wire.h>
#include <Arduino.h>

class MaduinoPortal {
public:
  MaduinoPortal(Audio* audio);
  void loop();
private:
  Audio* audioPlayer;
};

#endif

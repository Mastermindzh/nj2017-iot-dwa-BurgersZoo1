#ifndef POOT
#define POOT

#include <Arduino.h>
#include "StatusLights.h"
#include "Logger.h"
#include "RangerDetector.h"
#include "AuduinoPortal.h"

class Poot {
public:
  Poot();
  void loop();
  byte getPootid();
private:
  StatusLights* statusLights;
  Logger* logger;
  RangerDetector* rangerDetector;
  AuduinoPortal* auduinoPortal;
};

#endif

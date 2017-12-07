#ifndef POOT
#define POOT

#include <Arduino.h>
#include "StatusLights.h"
#include "Logger.h"
#include "RangerDetector.h"
#include "AuduinoPortal.h"

class RangerDetector;

class Poot {
public:
  Poot();

  /**
   * Update the poot. This will update timers and execute actions that are time based.
   */
  void loop();

  /**
   * Get the current pootid.
   */
  byte getPootid();

  /**
   * Event listener for when passes are scanned.
   */
  void pasScanned(String pasid);
private:
  StatusLights* statusLights;
  Logger* logger;
  RangerDetector* rangerDetector;
  AuduinoPortal* auduinoPortal;
  GatewayLink* gatewayLink;
};

#endif

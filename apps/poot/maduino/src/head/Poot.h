#ifndef POOT
#define POOT

#include <Arduino.h>
#include <EEPROM.h>
#include "StatusLights.h"
#include "Logger.h"
#include "RangerDetector.h"
#include "AuduinoPortal.h"

#define EEPROM_POOTID_ADDRESS 0x25
#define EEPROM_POOTID_DEFAULT_CODE 0xFF

class RangerDetector;
class Logger;
class GatewayLink;

class Poot {
public:
  Poot(StatusLights* lights);

  /**
   * Update the poot. This will update timers and execute actions that are time based.
   */
  void loop();

  /**
   * Get the current pootid.
   */
  byte getPootid();

  /**
   * Save pootid in the EEPROM.
   */
  void setPootid(byte code);

  /**
   * Event listener for when passes are scanned.
   */
  void pasScanned(String pasid);

  /**
  * Receive MySensors messages
  */
  void receive(const MyMessage &message);
private:
  StatusLights* lights;
  Logger* logger;
  RangerDetector* rangerDetector;
  AuduinoPortal* auduinoPortal;
  GatewayLink* gatewayLink;
};

#endif

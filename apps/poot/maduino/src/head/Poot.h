#ifndef POOT
#define POOT

#include <Arduino.h>
#include <EEPROM.h>
#include "StatusLights.h"
#include "Logger.h"
#include "RangerDetector.h"
#include "AuduinoPortal.h"
#include "TempSensor.h"
#include "HumidSensor.h"

#define EEPROM_POOTID_ADDRESS 0x25
#define EEPROM_POOTID_DEFAULT_CODE 0xFF

#define TEMPERATURE_PIN 5

class RangerDetector;
class Logger;
class GatewayLink;
class TempSensor;
class HumidSensor;


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

  /**
  * Get the current temperature
  */
  float getTemperature();

  /**
  * Get the current humidity
  */
  float getHumidity();

private:
  StatusLights* statusLights;
  Logger* logger;
  RangerDetector* rangerDetector;
  AuduinoPortal* auduinoPortal;
  GatewayLink* gatewayLink;
  TempSensor* tempSensor;
  HumidSensor* humSensor;
};

#endif

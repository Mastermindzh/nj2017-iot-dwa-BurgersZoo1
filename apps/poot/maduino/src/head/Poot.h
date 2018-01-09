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
#include <avr/wdt.h>

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

  /**
  * Get the current temperature
  */
  float getTemperature();

  /**
  * Get the current humidity
  */
  float getHumidity();
  /*
   * Event for when a wrong pas is scanned. The error codes are as following:
   *  1  =  Card could not be authenticated
   *  2  =  Card does not contain the correct content
   *  3  =  
   */
  void wrongPasScanned(byte errorCode);
  
 /**
  * Reset the EEPROM
  */
  void resetEEPROM();

private:
  StatusLights* lights;
  Logger* logger;
  RangerDetector* rangerDetector;
  AuduinoPortal* auduinoPortal;
  GatewayLink* gatewayLink;
  TempSensor* tempSensor;
  HumidSensor* humSensor;

};

#endif

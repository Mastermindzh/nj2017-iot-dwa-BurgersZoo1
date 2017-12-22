#ifndef HUMIDSENSOR
#define HUMIDSENSOR

#include <Arduino.h>
#include <SimpleDHT.h>

class HumidSensor {
public:
  HumidSensor(int pin);

  /**
  * Get the last known humidity measurement from the humidity sensor
  */
  float getHumidity();
private:
  int pin;
  SimpleDHT11 dht;

};

#endif

#ifndef TEMPSENSOR
#define TEMPSENSOR

#include <Arduino.h>
#include <SimpleDHT.h>

class TempSensor {
public:
  TempSensor(int pin);

  /**
  * Get the last measrued temperature.
  */
  float getTemperature();
private:
  int pin;
  SimpleDHT11 dht;

};

#endif

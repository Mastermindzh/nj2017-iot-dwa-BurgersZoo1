#ifndef TEMPSENSOR
#define TEMPSENSOR

#include <Arduino.h>

class TempSensor {
  public:
    TempSensor(byte pin);
    byte getTemperature();
  private:
    byte pin;
};

#endif

#ifndef TEMPSENSOR
#define TEMPSENSOR

#include <Arduino.h>

class TempSensor {
  public:
    TempSensor(byte pin);

    /**
     * Get the last measrued temperature.
     */
    byte getTemperature();
  private:
    byte pin;
};

#endif

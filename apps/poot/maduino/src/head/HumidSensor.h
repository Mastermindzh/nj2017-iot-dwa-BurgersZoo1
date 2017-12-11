#ifndef HUMIDSENSOR
#define HUMIDSENSOR

#include <Arduino.h>

class HumidSensor {
  public:

    /**
     * Get the last known humidity measurement from the humidity sensor
     */
    byte getHumidity();
  private:
};

#endif

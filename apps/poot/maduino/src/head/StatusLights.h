#ifndef STATUSLIGHTS
#define STATUSLIGHTS

#include "Led.h"

class StatusLights {
  public:
    void loop();
    void turnLightsOff();
    void turnLightsOn();
    void turnLightOn(char lightNr);
    void turnLightOff(char lightNr);
    void blinkLight(char lightNumber, char frequency);
    StatusLights();
  private:
    Led** leds;
};
#endif

#ifndef STATUSLIGHTS
#define STATUSLIGHTS

#include "Led.h"

class StatusLights {
  public:
    StatusLights();
    void loop();
    void turnLightsOff();
    void turnLightsOn();
    void turnLightOn(char lightNr);
    void turnLightOff(char lightNr);
    void blinkLight(char lightNumber, char frequency);
  private:
    Led** leds;
};
#endif

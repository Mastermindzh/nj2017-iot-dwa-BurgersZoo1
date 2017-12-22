#ifndef STATUSLIGHTS
#define STATUSLIGHTS

#include "Led.h"

class StatusLights {
  public:
    StatusLights();
    void loop();
    void turnLightsOff();
    void turnLightsOn();
    void auduinoStartTalking();
    void auduinoStopTalking();
    void pas();
    void wrongPas(unsigned int blinkLength);
  private:
    Led* red;
    Led* yellow;
    Led* green;
};
#endif

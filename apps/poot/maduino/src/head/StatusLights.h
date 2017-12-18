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
  private:
    Led* red;
    Led* yellow;
    Led* green;
};
#endif

#ifndef RANGERDETECTOR
#define RANGERDETECTOR

#include <Arduino.h>
#include "GatewayLink.h"

class RangerDetector {
  public:
    RangerDetector(GatewayLink* gatewayLink);
    void loop();
  private:
    GatewayLink* gatewayLink;
};

#endif

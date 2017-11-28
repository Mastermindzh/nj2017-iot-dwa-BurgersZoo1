#ifndef LOGGER
#define LOGGER

#include "TempSensor.h"
#include "HumidSensor.h"
#include "GatewayLink.h"

class Logger {
  public:
    Logger(GatewayLink* gateway);
    void loop();
  private:
    HumidSensor* HumiditySensor;
    TempSensor* thermometer;
    GatewayLink* gatewayLink;
};

#endif

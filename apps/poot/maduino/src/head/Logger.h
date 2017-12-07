#ifndef LOGGER
#define LOGGER

#include "TempSensor.h"
#include "HumidSensor.h"
#include "GatewayLink.h"

class Logger {
  public:
    Logger(GatewayLink* gateway);

    /**
     * loop through the logger. This method will check if it is time to send
     * antother log message to the gateway.
     */
    void loop();
  private:
    HumidSensor* HumiditySensor;
    TempSensor* thermometer;
    GatewayLink* gatewayLink;
};

#endif

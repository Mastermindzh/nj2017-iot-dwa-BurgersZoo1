#ifndef LOGGER
#define LOGGER

// Uncomment the type of sensor in use:
#define DHTTYPE           DHT11     // DHT 11
// #define DHTTYPE           DHT22     // DHT 22 (AM2302)
#define DHTPIN            5

#include "TempSensor.h"
#include "HumidSensor.h"
#include "GatewayLink.h"
#include "Poot.h"


class GatewayLink;
class TempSensor;
class HumidSensor;
class Poot;


class Logger {
public:
  Logger(GatewayLink* gateway, Poot* poot);

  /**
  * loop through the logger. This method will check if it is time to send
  * antother log message to the gateway.
  */
  void loop();
private:
  HumidSensor* HumiditySensor;
  TempSensor* thermometer;
  GatewayLink* gatewayLink;
  Poot* poot;

  void sendIntervalTemperatureMessage();
  void sendIntervalHumidityMessage();
};

#endif

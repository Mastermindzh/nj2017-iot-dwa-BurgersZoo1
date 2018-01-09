#ifndef GATEWAYLINK
#define GATEWAYLINK

#include <Arduino.h>
#include "Poot.h"

class Poot;

class GatewayLink {
public:
  GatewayLink(Poot *poot);

  /**
  * Inform the gateway that a card is scanned.
  */
  void sendCard(String cardid);

  /**
  * Inform the gateway of new log data.
  */
  void sendLog(char* logs, int buffersize);

  /**
  * Inform the gateway that this poot is finished starting up.
  */
  void sendStartup(byte pootid);

  /**
  * Send Mysensors message temperature
  */
  void sendTemperature(float temperature);

  /**
  * Send Mysensors message humidity
  */
  void sendHumidity(float humidity);
private:
  Poot *poot;
};

#endif

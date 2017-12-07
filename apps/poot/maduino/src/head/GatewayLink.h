#ifndef GATEWAYLINK
#define GATEWAYLINK

#include <Arduino.h>
#include <core/MySensorsCore.h>

class GatewayLink {
  public:
    GatewayLink();

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
    * Receive MySensors messages
    */
    void receive(const MyMessage &message);
  private:
    MyMessage* msg;
};

#endif

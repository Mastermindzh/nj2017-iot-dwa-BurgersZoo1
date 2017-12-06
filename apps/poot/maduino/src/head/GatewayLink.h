#ifndef GATEWAYLINK
#define GATEWAYLINK

#include <Arduino.h>
#include <core/MySensorsCore.h>

class GatewayLink {
  public:
    GatewayLink();
    void sendCard(String cardid);
    void sendLog(char* logs, int buffersize);
    void sendStartup(byte pootid);
  private:
    MyMessage* msg;
};

#endif

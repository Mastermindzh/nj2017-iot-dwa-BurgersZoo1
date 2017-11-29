#ifndef GATEWAYLINK
#define GATEWAYLINK

#include <Arduino.h>

class GatewayLink {
  public:
    GatewayLink();
    void sendCard(int cardid);
    void sendLog(char* logs, int buffersize);
    void sendStartup(byte pootid);
  private:
};

#endif

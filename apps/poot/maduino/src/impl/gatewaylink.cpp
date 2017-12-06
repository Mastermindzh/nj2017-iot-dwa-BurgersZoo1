#include "../head/GatewayLink.h"

//todo: deze is nu gecopieerd vanuit maduino.cpp. Dit is lelijk en moet mooier.
#define MY_CHILD_ID 66
#define GATEWAY_ID 0

GatewayLink::GatewayLink(){
    this->msg = new MyMessage(MY_CHILD_ID, V_VAR2);
};
void GatewayLink::sendCard(String cardid){
  MyMessage msgSend(MY_CHILD_ID, V_VAR2);
  msgSend.setDestination(GATEWAY_ID);
  send(msgSend.set(cardid.c_str()), true);
};
void GatewayLink::sendLog(char* logs, int buffersize){ };
void GatewayLink::sendStartup(byte pootid){ };

#include "../head/GatewayLink.h"

//todo: deze is nu gecopieerd vanuit maduino.cpp. Dit is lelijk en moet mooier.
#define MY_CHILD_ID 66

GatewayLink::GatewayLink(){
    this->msg = new MyMessage(MY_CHILD_ID, V_VAR2);

};
void GatewayLink::sendCard(String cardid){
  char* id2 = cardid.c_str();
  MyMessage msgSend(1, V_VAR2);
  msgSend.setDestination(0);
  send(msgSend.set(id2), true);
};
void GatewayLink::sendLog(char* logs, int buffersize){ };
void GatewayLink::sendStartup(byte pootid){ };

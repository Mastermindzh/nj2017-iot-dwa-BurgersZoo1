#include "../head/GatewayLink.h"

//todo: deze is nu gecopieerd vanuit maduino.cpp. Dit is lelijk en moet mooier.
#define MY_CHILD_ID 66
#define GATEWAY_ID 0

GatewayLink::GatewayLink(Poot *poot){
  this->poot = poot;
  this->msg = new MyMessage(MY_CHILD_ID, V_VAR2);
};
void GatewayLink::sendCard(String cardid){
  MyMessage msgSend(MY_CHILD_ID, V_VAR2);
  msgSend.setDestination(GATEWAY_ID);
  send(msgSend.set(cardid.c_str()), true);
};
void GatewayLink::sendLog(char* logs, int buffersize){ };

void GatewayLink::sendStartup(byte pootid){
  Serial.println(F("Send startup message"));
  MyMessage msgStartup(MY_CHILD_ID, V_VAR1);
  msgStartup.setDestination(GATEWAY_ID);
  send(msgStartup.set(pootid), true);
};

void GatewayLink::receive(const MyMessage &message){
  if(message.type == V_VAR3){ // received pootid
    this->poot->setPootid(message.getByte());
  }

}
void GatewayLink::sendTemperature(float temperature){
  MyMessage msgTemp(MY_CHILD_ID, V_TEMP);
  msgTemp.setDestination(GATEWAY_ID);
  send(msgTemp.setSensor(1).set(temperature,1));
};

void GatewayLink::sendHumidity(float humidity){
  MyMessage msgHum(MY_CHILD_ID, V_HUM);
  msgHum.setDestination(GATEWAY_ID);
  send(msgHum.setSensor(2).set(humidity,1));
};

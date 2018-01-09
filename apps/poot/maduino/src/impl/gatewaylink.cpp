#include "../head/GatewayLink.h"

GatewayLink::GatewayLink(Poot *poot){
  this->poot = poot;
};
void GatewayLink::sendCard(String cardid){

};
void GatewayLink::sendLog(char* logs, int buffersize){ };

void GatewayLink::sendStartup(byte pootid){

};

void GatewayLink::sendTemperature(float temperature){

};

void GatewayLink::sendHumidity(float humidity){

};

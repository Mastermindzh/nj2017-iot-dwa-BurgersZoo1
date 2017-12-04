#include "../head/Poot.h"

Poot::Poot(){
  this->gatewayLink = new GatewayLink();
  this->rangerDetector = new RangerDetector(this);
}
void Poot::loop(){ }

void Poot::pasScanned(String pasid){
  Serial.println(pasid);
  this->gatewayLink->sendCard(pasid);
}

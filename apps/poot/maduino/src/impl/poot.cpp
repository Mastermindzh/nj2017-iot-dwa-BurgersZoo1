#include "../head/Poot.h"

Poot::Poot(){
  this->gatewayLink = new GatewayLink();
  this->rangerDetector = new RangerDetector(this);
  this->auduinoPortal = new AuduinoPortal();
}
void Poot::loop(){
  this->rangerDetector->loop();
}

void Poot::pasScanned(String pasid){
  Serial.println("Pas gescand met id: " + pasid);
  this->auduinoPortal->playAudio();
  this->gatewayLink->sendCard(pasid);
}

#include "../head/Poot.h"

Poot::Poot(){
  this->gatewayLink = new GatewayLink(this);
  this->rangerDetector = new RangerDetector(this);
  this->auduinoPortal = new AuduinoPortal();

  this->gatewayLink->sendStartup(this->getPootid());
}
void Poot::loop(){
  this->rangerDetector->loop();
}

void Poot::pasScanned(String pasid){
  Serial.println("Pas gescand met id: " + pasid);
  this->auduinoPortal->playAudio();
  this->gatewayLink->sendCard(pasid);
}

byte Poot::getPootid(){
  int code = EEPROM_POOTID_DEFAULT_CODE;
  code = EEPROM.get(EEPROM_POOTID_ADDRESS, code);
  return code;
}

void Poot::setPootid(byte code){
  EEPROM.put(EEPROM_POOTID_ADDRESS, code);
}

void Poot::receive(const MyMessage &message){
  this->gatewayLink->receive(message);
}

/**
* software reset for Arduino
*/
void(* resetFunc) (void) = 0;

void Poot::resetEEPROM(){
  Serial.println(F("Reset EEPROM"));
  for (int i = 0 ; i < EEPROM.length() ; i++) {
      EEPROM.write(i, 0xFF);
  }
  Serial.println(F("Reset EEPROM done!"));
  resetFunc();
}

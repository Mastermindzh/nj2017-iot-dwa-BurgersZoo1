#include "../head/Poot.h"

Poot::Poot(){
  this->gatewayLink = new GatewayLink(this);
  this->rangerDetector = new RangerDetector(this);
  this->auduinoPortal = new AuduinoPortal();
  this->logger = new Logger(gatewayLink,this);
  this->tempSensor = new TempSensor(TEMPERATURE_PIN);
  this->humSensor = new HumidSensor(TEMPERATURE_PIN);
  this->gatewayLink->sendStartup(this->getPootid());

}

void Poot::loop(){
  this->rangerDetector->loop();
  this->logger->loop();

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

float Poot::getTemperature(){
  return this->tempSensor->getTemperature();
}

float Poot::getHumidity(){
  return this->humSensor->getHumidity();
}

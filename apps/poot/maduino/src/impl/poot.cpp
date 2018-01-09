#include "../head/Poot.h"

Poot::Poot(StatusLights* lights){
  this->lights = lights;
  this->lights->turnLightsOff();
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
  this->lights->loop();
}

void Poot::pasScanned(String pasid){
  Serial.println("Pas gescand met id: " + pasid);
  lights->auduinoStartTalking();
  lights->pas();
  this->auduinoPortal->playAudio();
  lights->auduinoStopTalking();
  this->gatewayLink->sendCard(pasid);
}

void Poot::wrongPasScanned(byte errorCode){
  /// unauthenticated = 500ms blink
  /// wrong content = 1000ms blink
  lights->wrongPas(errorCode == 1 ? 500 : 1000);
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

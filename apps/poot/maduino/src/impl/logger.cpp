#include "../head/Logger.h"

Logger::Logger(GatewayLink* gateway, Poot* poot){
  this -> gatewayLink = gateway;
  this -> poot = poot;
};
long tijd = millis();
void Logger::loop(){
  if(millis()-tijd>1000){
    tijd = millis();
    sendIntervalTemperatureMessage();
    delay(100);
    sendIntervalHumidityMessage();
  }
};

void Logger::sendIntervalTemperatureMessage(){

  float temp = this->poot->getTemperature();
  this->gatewayLink->sendTemperature(temp);
}

void Logger::sendIntervalHumidityMessage(){
  float hum = this->poot->getHumidity();
  this->gatewayLink->sendHumidity(hum);
}

#include "../head/Logger.h"

Logger::Logger(GatewayLink* gateway, Poot* poot){
  this -> gatewayLink = gateway;
  this -> poot = poot;
};
long tijd = millis();
int flipper = 0;
void Logger::loop(){
  if(millis()-tijd>1000){
    if(flipper==0){
      sendIntervalTemperatureMessage();
      flipper=1;
    }
    else{
      sendIntervalHumidityMessage();
      flipper=0;
    }
    tijd = millis();

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

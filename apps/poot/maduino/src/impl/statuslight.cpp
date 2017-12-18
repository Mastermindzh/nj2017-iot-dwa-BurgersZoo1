#include "../head/StatusLights.h"

StatusLights::StatusLights(){
  this->red = new Led(4);
  this->yellow = new Led(3);
  this->green = new Led(2);
};
void StatusLights::loop(){
  this->red->loop();
  this->yellow->loop();
  this->green->loop();
};
void StatusLights::turnLightsOff(){
  this->red->off();
  this->yellow->off();
  this->green->off();
};
void StatusLights::turnLightsOn(){
  this->red->on();
  this->yellow->on();
  this->green->on();
};

void StatusLights::auduinoStartTalking(){
  this->yellow->on();
}

void StatusLights::auduinoStopTalking(){
  this->yellow->off();
}

void StatusLights::wrongPas(unsigned int blinkLength){
  this->red->onFor(blinkLength);
}

void StatusLights::pas(){
  this->green->onFor(1000);
}

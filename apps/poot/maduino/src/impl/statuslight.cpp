#include "../head/StatusLights.h"

StatusLights::StatusLights(){
  this->red = new Led(4);
  this->yellow = new Led(3);
  this->green = new Led(2);
};
void StatusLights::loop(){
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

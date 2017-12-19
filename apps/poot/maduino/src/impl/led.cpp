#include "../head/Led.h"

Led::Led(byte pin){
  this->pin = pin;
  pinMode(this->pin, OUTPUT);
};

void Led::on(){
  digitalWrite(this->pin, HIGH);
  this->isOn = 1;
  this->switchMoment = 0;
};
void Led::off(){
  digitalWrite(this->pin, LOW);
  this->isOn = 0;
  this->switchMoment = 0;
};
void Led::onFor(unsigned int time) {
  this->on();
  this->switchMoment = millis() + time;
}
void Led::offFor(unsigned int time) {
  this->off();
  this->switchMoment = millis() + time;
}

void Led::loop(){
  if(this->switchMoment == 0)
    return;
  if(this->switchMoment < millis()){
    this->isOn ? this->off() : this->on();
  }
}

#include "../head/Led.h"

Led::Led(byte pin){
  this->pin = pin;
  pinMode(this->pin, OUTPUT);
};

void Led::on(){
  digitalWrite(this->pin, HIGH);
  this->isOn = 1;
};
void Led::off(){
  digitalWrite(this->pin, LOW);
  this->isOn = 0;
};
void Led::toggle(){
  if(this->isOn == 1)
    this->off();
  else
    this->on();
}

void Led::loop(){
  if(this->blinkDelay != 0 && this->lastBlink + this->blinkDelay < millis()){
    this->toggle();
    this->lastBlink = millis();
  }
}
void Led::blink(unsigned int delay){
  this->blinkDelay = delay;
  this->toggle();
  this->lastBlink = millis();
}

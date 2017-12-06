#include "../h/Led.h"
#define LED_TIMEOUT 500

Led::Led(){
  this->ledState = 0;
}

void Led::loop(){
    this->ledState = !this->ledState;
    digitalWrite(4, this->ledState);
}

void Led::setLedPin(int ledpin){
  this->ledPin = ledpin;
}

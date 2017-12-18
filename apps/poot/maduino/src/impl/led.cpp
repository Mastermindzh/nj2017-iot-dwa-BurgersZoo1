#include "../head/Led.h"

Led::Led(byte pin){
  this->pin = pin;
  pinMode(this->pin, OUTPUT);
};

void Led::on(){
  digitalWrite(this->pin, HIGH);
};
void Led::off(){
  digitalWrite(this->pin, LOW);
};

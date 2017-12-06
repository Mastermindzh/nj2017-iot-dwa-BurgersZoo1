#ifndef LED
#define LED

#include <Arduino.h>



class Led{
private:
  int ledPin;
  int ledState;
  unsigned long lastChange;
public:
  Led();
  void loop();
  void setLedPin(int ledpin);
};


#endif

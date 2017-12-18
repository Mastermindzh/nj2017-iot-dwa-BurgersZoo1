#ifndef LED
#define LED

#include <Arduino.h>

class Led {
  public:
    Led(byte pin);

    void on();
    void off();
    void onFor(unsigned int time);
    void offFor(unsigned int time);

    void loop();
  private:
    byte pin;
    bool isOn;
    unsigned long switchMoment;
};

#endif

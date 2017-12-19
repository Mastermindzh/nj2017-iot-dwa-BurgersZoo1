#ifndef LED
#define LED

#include <Arduino.h>

class Led {
  public:
    Led(byte pin);

    void on();
    void off();
    void toggle();

    void onFor(unsigned int time);
    void offFor(unsigned int time);
    //keeps blinking in eternity
    void blink(unsigned int delay);

    void loop();
  private:
    byte pin;
    bool isOn = 0;
    unsigned long lastBlink = 0;
    unsigned int blinkDelay = 0;
};

#endif

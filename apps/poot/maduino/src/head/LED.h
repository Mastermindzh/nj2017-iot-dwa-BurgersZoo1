#ifndef LED
#define LED

#include <Arduino.h>

class Led {
  public:
    Led(byte pin);

    /**
     * Turn a led on
     */
    void on();

    /**
     * Turn a led off
     */
    void off();
  private:
    byte pin;
};

#endif

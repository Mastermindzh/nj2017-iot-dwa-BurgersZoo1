#ifndef LED
#define LED

class Led {
  public:
    Led(char pin);

    /**
     * Turn a led on
     */
    void on();

    /**
     * Turn a led off
     */
    void off();
  private:
    char pin;
};

#endif

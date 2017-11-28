#ifndef LED
#define LED

class Led {
  public:
    Led(char pin);
    void on();
    void off();
  private:
    char pin;
};

#endif

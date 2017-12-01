#ifndef SERIALSERVICE
#define SERIALSERVICE

#include <Arduino.h>


class SerialService{
private:
  unsigned long lastChange;
  int counter = 0;
public:
  SerialService();
  void loop();
};

#endif

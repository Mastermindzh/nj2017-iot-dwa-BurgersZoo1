#ifndef ARDUINOPORTAL
#define ARDUINOPORTAL

#include <Wire.h>
#include <Arduino.h>

class AuduinoPortal {
public:
  AuduinoPortal();
  /**
   * Tell the auduino to play an audio file. This method will communicate
   * to the auduino to let it sing.
   */
  void playAudio();
private:

};
#endif

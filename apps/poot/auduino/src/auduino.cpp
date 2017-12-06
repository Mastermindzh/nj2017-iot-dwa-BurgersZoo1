#include <Arduino.h>
#include "./head/MaduinoPortal.h"

MaduinoPortal* portal;
Audio* audio;

void setup () {
  //use for debugging
  Serial.begin(115200);

  audio = new Audio();
  portal = new MaduinoPortal(audio);
}

void loop() {
}

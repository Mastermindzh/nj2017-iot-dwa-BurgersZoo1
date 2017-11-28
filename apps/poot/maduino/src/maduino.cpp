#include <Arduino.h>
#include "./head/Poot.h"

Poot* poot;

void setup () {
  poot = new Poot();
}

void loop() {
    poot->loop();
}

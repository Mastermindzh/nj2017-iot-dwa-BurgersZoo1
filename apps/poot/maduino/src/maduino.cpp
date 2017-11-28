#include <Arduino.h>
#include "./head/Poot.h"

#define MY_RADIO_NRF24
#include <MySensors.h>

MyMessage msg(15, V_TRIPPED);

Poot* poot;

void setup () {
  poot = new Poot();
}

void loop() {
    poot->loop();
}

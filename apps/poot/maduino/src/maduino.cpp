#include <Arduino.h>

#define MY_RF24_CHANNEL 69
#define MY_RADIO_NRF24
#define MY_NODE_ID 55
#define MY_CHILD_ID 66

#include <MySensors.h>

#include "./head/Poot.h"

Poot* poot;

void setup () {
  poot = new Poot();
}

void loop() {
    poot->loop();
}

void presentation() {
  present(MY_CHILD_ID, S_CUSTOM);
}

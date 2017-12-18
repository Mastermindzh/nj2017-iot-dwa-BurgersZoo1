#include <Arduino.h>

#define MY_DEBUG
#define MY_RF24_CHANNEL 69
#define MY_RADIO_NRF24
#define MY_NODE_ID 55
#define MY_CHILD_ID 66
#define MY_PARENT_NODE_ID 0
#define MY_PARENT_NODE_IS_STATIC

//todo: remove this duplicate code
#define RST_PIN 7
#define SS_PIN 8

#include <MySensors.h>

#include "./head/Poot.h"

Poot* poot;

void before() {
  pinMode(RST_PIN, OUTPUT);
  digitalWrite(RST_PIN, LOW);
  pinMode(SS_PIN, OUTPUT);
  digitalWrite(SS_PIN, LOW);
}

void setup () {
  poot = new Poot();
}

void loop() {
    poot->loop();
}

void presentation() {
  present(MY_CHILD_ID, S_CUSTOM);
}

void receive(const MyMessage &message) {
  poot->receive(message);
}

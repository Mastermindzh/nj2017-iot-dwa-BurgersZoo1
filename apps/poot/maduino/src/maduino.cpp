#include <Arduino.h>

//todo: remove this duplicate code
#define RST_PIN 7
#define SS_PIN 8


#include "./head/Poot.h"

StatusLights* lights;
Poot* poot;

void setup () {
  lights = new StatusLights();
  pinMode(RST_PIN, OUTPUT);
  digitalWrite(RST_PIN, LOW);
  pinMode(SS_PIN, OUTPUT);
  digitalWrite(SS_PIN, LOW);
  lights->turnLightsOn();
  poot = new Poot(lights);
}

void loop() {
    poot->loop();
}

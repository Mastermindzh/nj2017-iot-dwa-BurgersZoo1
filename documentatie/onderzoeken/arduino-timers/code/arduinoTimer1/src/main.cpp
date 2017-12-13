/**
* Code voorbeeld van Arduino timer met twee componenten, zonder externe library
*/
#include <Arduino.h>

#include "h/Led.h"
#include "h/SerialService.h"

Led *led;
SerialService *serialService;

void setup() {
  Serial.begin(9600);
  serialService = new SerialService();
  pinMode(4, OUTPUT);
  led = new Led();
}

void loop() {
  led->loop();
  serialService->loop();
}

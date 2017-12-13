/**
* Code voorbeeld van Arduino timer met twee componenten, zonder externe library
*/
#include <Arduino.h>
#include "h/SimpleTimer.h"


#include "h/Led.h"
#include "h/SerialService.h"

SimpleTimer timer;

Led *led;
SerialService *serialService;

void ledLoop(){
  led->loop();
}

void serialLoop(){
  serialService->loop();
}
void setup() {
  Serial.begin(9600);
  serialService = new SerialService();
  pinMode(4, OUTPUT);
  led = new Led();
  timer.setInterval(500, ledLoop);
  timer.setInterval(3000, serialLoop);
}

void loop() {
  timer.run();
}

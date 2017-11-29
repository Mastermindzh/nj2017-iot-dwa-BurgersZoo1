#include <Arduino.h>

void setup() {
    Serial.begin(9600);
}

unsigned long lastTime = 0;
void loop() {
  unsigned long current = millis();
  if(current - lastTime > 3000){
    lastTime = current;
    Serial.println("test");
  }
}

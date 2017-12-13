
#include "../h/SerialService.h"

SerialService::SerialService(){
  // empty constructor
}

void SerialService::loop(){
  unsigned long currTime = millis();
  if(currTime - this->lastChange >= 1000){
    this->lastChange = currTime;
    this->counter++;
    Serial.print("Message: #");
    Serial.println(this->counter);
  }
}

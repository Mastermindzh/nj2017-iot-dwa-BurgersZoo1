
#include "../h/SerialService.h"

#define SERIAL_LOOP_TIME 1000

SerialService::SerialService(){
  // empty constructor
}

void SerialService::loop(){
    this->counter++;
    Serial.print("Message: #");
    Serial.println(this->counter);
}

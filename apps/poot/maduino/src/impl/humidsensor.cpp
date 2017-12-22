#include "../head/HumidSensor.h"

HumidSensor::HumidSensor(int pin){
  this->pin = pin;
};
float HumidSensor::getHumidity(){
  byte hum = 99;
  byte temp = -1;

  int err = SimpleDHTErrSuccess;
  if ((err = this->dht.read(this->pin, NULL, &hum, NULL)) != SimpleDHTErrSuccess) {
    return (float) 111;
  }
  return (float) hum;
};

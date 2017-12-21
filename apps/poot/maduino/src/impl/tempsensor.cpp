#include "../head/TempSensor.h"

TempSensor::TempSensor(int pin){
  this->pin = pin;


};

float TempSensor::getTemperature(){

  byte temperature = 0;
  int err = SimpleDHTErrSuccess;
  if ((err = this->dht.read(this->pin, &temperature, NULL, NULL)) != SimpleDHTErrSuccess) {
    return (float) 111;
  }
  return (float) temperature;
};

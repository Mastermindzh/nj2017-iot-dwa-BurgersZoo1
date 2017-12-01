#include "../head/SerialReader.h"
#include <Arduino.h>
#include <core/MySensorsCore.h>

void addToVar(byte* targetVar, char toAdd){
  byte newValue = (*targetVar)*10 + (toAdd-48);
  *targetVar = newValue;
}

void SerialReader::loop(){
  while (Serial.available() > 0) {
    byte read = Serial.read();
    this->handleNextInputChar(read);
  }
}

void SerialReader::handleNextInputChar(char read){
  if(read == '\n'){
    this->finishReading();
    return;
  }
  if(read == ';'){
    switch(this->readingIndex){
      case INDX_NODEID:
        this->readingIndex = INDX_CHILDSENSORID; return;
      case INDX_CHILDSENSORID:
        this->readingIndex = INDX_COMMAND; return;
      case INDX_COMMAND:
        this->readingIndex = INDX_ACK; return;
      case INDX_ACK:
        this->readingIndex = INDX_TYPE; return;
      case INDX_TYPE:
        this->readingIndex = INDX_PYALOAD; return;
    }
  }
  switch(this->readingIndex){
    case INDX_NODEID:         addToVar(&this->nodeID, read); break;
    case INDX_CHILDSENSORID:  addToVar(&this->childSensorID, read); break;
    case INDX_COMMAND:        addToVar(&this->command, read); break;
    case INDX_ACK:            addToVar(&this->ack, read); break;
    case INDX_TYPE:           addToVar(&this->type, read);break;
    case INDX_PYALOAD:        this->payload.concat(read); break;
  }
}

void SerialReader::finishReading(){
  this->finished = 1;
}

void SerialReader::sendMessageIfPossible(){
  if(!this->finished)
    return;
  MyMessage msg(this->nodeID, this->type);
  msg.set(&this->payload, this->payload.length());
  msg.setSensor(this->childSensorID);
  send(msg, this->ack);
  this->finished = 0;
}

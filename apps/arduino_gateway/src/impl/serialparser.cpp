#include "../head/SerialReader.h"
#include <Arduino.h>
#include <core/MySensorsCore.h>

void addToVar(byte* targetVar, char toAdd){
  byte newValue = (*targetVar)*10 + (toAdd-48);
  *targetVar = newValue;
}

void SerialReader::loop(){
  String line;
  if(Serial.available()>0){
    line = Serial.readString();
    Serial.print(line);
    for(unsigned int i = 0; i < line.length(); i++){
      this->handleNextInputChar(line.charAt(i));
    }
  }
  this->sendMessageIfPossible();
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
    case INDX_PYALOAD:
      Serial.print(read);
      this->payload.concat(read);
      break;
  }
}

void SerialReader::finishReading(){
    this->finished = 1;
}

void SerialReader::sendMessageIfPossible(){
  if(this->finished){
    this->payload = "test";
    Serial.println(F("Sending message, payload: "));
    Serial.println(this->payload);
    MyMessage msg(this->nodeID, this->type);
    msg.set(this->payload);
    msg.setSensor(this->childSensorID);
    send(msg, this->ack);
    this->finished = 0;
  }
  this->reset();
}

void SerialReader::reset(){
  this->finished = 0;
  this->nodeID = 0;
  this->childSensorID = 0;
  this->command = 0;
  this->ack = 0;
  this->type = 0;
  this->payload = "";
}

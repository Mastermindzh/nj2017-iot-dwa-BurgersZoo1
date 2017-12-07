#include <Arduino.h>
#include "Tester.h"

#include "../head/SerialReader.h"

Tester::Tester(){

}

void Tester::runAllTests(){
  Serial.println(F("Starting test suite..."));

  this->testSerialReaderParser();
}

void Tester::testSerialReaderParser(){
  SerialReader* reader = new SerialReader();

  reader->handleNextInputChar('0');
  reader->handleNextInputChar('0');
  reader->handleNextInputChar(';');
  reader->handleNextInputChar('0');
  reader->handleNextInputChar(';');
  reader->handleNextInputChar('1');
  reader->handleNextInputChar(';');
  reader->handleNextInputChar('1');
  reader->handleNextInputChar(';');
  reader->handleNextInputChar('0');
  reader->handleNextInputChar('2');
  reader->handleNextInputChar('4');
  reader->handleNextInputChar(';');
  reader->handleNextInputChar('2');
  reader->handleNextInputChar('5');
  reader->handleNextInputChar('a');
  reader->handleNextInputChar('!');
  reader->handleNextInputChar('\n');

  this->assert(1, reader->finished, "isFinished");
  this->assert(0, reader->nodeID, "nodeID");
  this->assert(0, reader->childSensorID, "childSensorID");
  this->assert(1, reader->command, "command");
  this->assert(1, reader->ack, "ack");
  this->assert(24, reader->type, "type");
  this->assert("25a!", reader->payload, "payload");
}

void Tester::assert(int expected, int actual, String name){
  if(expected == actual)
    Serial.println("[ok] Assertion " + name);
  else
    Serial.println("[error] Assertion " + name + " failed. Expected " + expected + " but got " + actual);
}

void Tester::assert(String expected, String actual, String name){
  if(expected.equals(actual))
    Serial.println("[ok] Assertion " + name);
  else
    Serial.println("[error] Assertion " + name + "failed. Expected " + expected + " but got " + actual);
}

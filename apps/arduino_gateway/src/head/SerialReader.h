#ifndef SERIALREADER
#define SERIALREADER

#define INDX_NODEID 0
#define INDX_CHILDSENSORID 1
#define INDX_COMMAND 2
#define INDX_ACK 3
#define INDX_TYPE 4
#define INDX_PYALOAD 5

#include <Arduino.h>

class SerialReader {
public:
  void loop();
  void handleNextInputChar(char c);
  void finishReading();
  void sendMessageIfPossible();

  String payload;
  byte nodeID;
  byte childSensorID;
  byte command;
  byte ack;
  byte type;
  boolean finished = 0;

private:
  byte readingIndex;

};

#endif

#include <Arduino.h>

#define NODE_ID AUTO
#define MY_RADIO_NRF24
#define MY_RF24_CHANNEL 69

#define MY_RF24_PA_LEVEL RF24_PA_MAX
#define MY_RF24_DATARATE RF24_250KBPS

#define MY_NODE_ID 0
#define MY_GATEWAY_SERIAL

#ifdef MEGA
  #define MY_SOFTSPI
  #define MY_RF24_CE_PIN 53
  #define MY_RF24_CS_PIN 49
  #define MY_SOFT_SPI_SCK_PIN 52
  #define MY_SOFT_SPI_MISO_PIN 50
  #define MY_SOFT_SPI_MOSI_PIN 51
#endif

#ifndef TEST
    #include <MySensors.h>

    #include "./head/SerialReader.h"

    SerialReader* reader;

    void setup(){
        reader = new SerialReader();
    }

    void loop(){
      reader->loop();
      reader->sendMessageIfPossible();
    }

    void presentation(){}
    void receive(const MyMessage &message){}
#else
    #include "test/Tester.h"

    void setup(){
      Serial.begin(115200);
      while (!Serial) {  ;  }
      Tester* tester = new Tester();
      tester->runAllTests();
    }

    void loop(){}
#endif

/**
   Gateway for the Arduino Mega ADK.
*/

#include <Arduino.h>
// #define MY_DEBUG

#define NODE_ID AUTO
#define MY_RADIO_NRF24
#define MY_RF24_CHANNEL 69

// Options are: RF24_PA_MIN, RF24_PA_LOW, RF24_PA_HIGH or RF24_PA_MAX. MAX will use more power but will transmit the furthest
#define MY_RF24_PA_LEVEL RF24_PA_MAX

// NRF24L01+ Speed
// Options are: RF24_250KBPS, RF24_1MBPS, RF24_2MBPS
#define MY_RF24_DATARATE RF24_250KBPS


#define MY_NODE_ID 0
#define MY_GATEWAY_SERIAL

#define MY_SOFTSPI
#define MY_RF24_CE_PIN 53
#define MY_RF24_CS_PIN 49
#define MY_SOFT_SPI_SCK_PIN 52
#define MY_SOFT_SPI_MISO_PIN 50
#define MY_SOFT_SPI_MOSI_PIN 51

//#define MY_BAUD_RATE 115200

#include <MySensors.h>

#define MAX_SIZE_MY_SENSOR_MESSAGE 32

void setup(){
}

void presentation(){
  
}

void serialIncoming(){

}

void loop(){
  // serialIncoming();
}

void receive(const MyMessage &message){
}

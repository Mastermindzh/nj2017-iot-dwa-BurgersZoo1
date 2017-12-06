/**
   Gateway for the Arduino Mega ADK.
*/
//#define MY_DEBUG/

#define NODE_ID AUTO
#define MY_RADIO_NRF24
#define MY_RF24_CHANNEL 69

// Options are: RF24_PA_MIN, RF24_PA_LOW, RF24_PA_HIGH or RF24_PA_MAX. MAX will use more power but will transmit the furthest
#define MY_RF24_PA_LEVEL RF24_PA_MAX 

//RF24_250KBPS for 250kbs
// RF24_1MBPS for 1Mbps
//RF24_2MBPS for 2Mbps.
#define MY_RF24_DATARATE RF24_2MBPS

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

//#define PONGNODEID 15

//MyMessage msg(MY_NODE_ID, V_VAR1);

void setup(){
//  msg.setDestination(PONGNODEID);
}

void presentation(){}

long lastSent = 0;
void loop(){
//    if(millis() - lastSent >= 3000){
//      lastSent = millis();
//      send(msg.set("Message Gateway -> Pongnode"));
//    }
}

//void receive(const MyMessage &message){
//  send(msg.set("Mesage Pongnode -> Gateway"));
//}


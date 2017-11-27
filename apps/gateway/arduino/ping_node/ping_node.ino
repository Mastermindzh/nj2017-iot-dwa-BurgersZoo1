#define MY_DEBUG

//#define NODE_ID AUTO
#define MY_RADIO_NRF24
#define MY_RF24_CHANNEL 69
// Options are: RF24_PA_MIN, RF24_PA_LOW, RF24_PA_HIGH or RF24_PA_MAX. MAX will use more power but will transmit the furthest
#define MY_RF24_PA_LEVEL RF24_PA_MAX

//RF24_250KBPS for 250kbs
// RF24_1MBPS for 1Mbps
//RF24_2MBPS for 2Mbps.
#define MY_RF24_DATARATE RF24_2MBPS

#define MY_NODE_ID 14

#include <SPI.h>
#include <MySensors.h>

#define GATEWAYID 0
#define MY_REPEATER_FEATURE


MyMessage msg(1, V_VAR2);

void setup()  {
  Serial.println("Node id: " + String(getNodeId()));
  msg.setDestination(GATEWAYID);
  MyMessage msgSend(1, V_VAR1);
  msgSend.setDestination(GATEWAYID);
  send(msgSend.set(0x25), true);
}

void presentation()  {
  sendSketchInfo("Pong Node", "1.0");
}


long lastSent = 0;
int randint = random(2, 5) * 1000;
void loop() {
  if (millis() - lastSent >= randint) {
    randint = random(2, 5) * 1000;
    lastSent = millis();
//    send(msg.set("M/essage Pongnode14-> Gateway"), true);
  }
}


void receive(const MyMessage &message) {
}

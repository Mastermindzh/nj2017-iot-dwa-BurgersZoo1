#define MY_DEBUG

#define MY_RADIO_NRF24
#define MY_RF24_CHANNEL 69
#define MY_RF24_PA_LEVEL RF24_PA_MAX 

#define MY_RF24_DATARATE RF24_2MBPS

#define MY_NODE_ID 14

#include <SPI.h>
#include <MySensors.h>

#define GATEWAYID 0
#define MY_REPEATER_FEATURE

MyMessage msg(1, V_VAR1);

void setup()  {
  Serial.println("Node id: " + String(getNodeId()));
  msg.setDestination(GATEWAYID);
}

void presentation()  {
  sendSketchInfo("Pong Node", "1.0");
}


long lastSent = 0;
int randint = random(2,5) * 1000;
void loop() {
  if (millis() - lastSent >= randint) {
    randint = random(2, 5) * 1000;
    lastSent = millis();
    send(msg.set("Message Pongnode14-> Gateway"), true);
  }
}


void receive(const MyMessage &message) {
}
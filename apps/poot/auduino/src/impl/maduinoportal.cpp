#include "../head/MaduinoPortal.h"
#include "../head/Audio.h"

#define AUDUINO_ID 9

bool received = false;

void receiveEvent(int bytes) {
  Serial.println("Received event");
  while(Wire.available())
    Wire.read();
  //audioplayer->play() kan niet hier worden aangeroepen omdat deze receiveEvent
  //callback wordt uitgevoerd als interrupt. Het starten van audio duurt
  //relatief lang en mag niet tijdens interrupt gebeuren.
  // Zie http://forum.arduino.cc/index.php?topic=14483.msg106481#msg106481
  received = true;
}

void MaduinoPortal::loop(){
  if(received){
    this->audioPlayer->play();
    received = false;
  }
}

MaduinoPortal::MaduinoPortal(Audio* audio){
  this->audioPlayer = audio;
  Wire.begin(AUDUINO_ID);
  Wire.onReceive(receiveEvent);
  Serial.println("WIRE INITIALIZED");
};

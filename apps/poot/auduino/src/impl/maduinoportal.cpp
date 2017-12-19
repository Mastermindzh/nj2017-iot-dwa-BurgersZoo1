#include "../head/MaduinoPortal.h"
#include "../head/Audio.h"

#define AUDUINO_ID 9

Audio* audioPlayer;

void receiveEvent(int bytes) {
  Serial.println("Received event");
  while(Wire.available()){
    Wire.read();
    audioPlayer-> state = START;
  }
}

MaduinoPortal::MaduinoPortal(Audio* audio){
  audioPlayer = audio;
  Wire.begin(AUDUINO_ID);
  Wire.onReceive(receiveEvent);
  Serial.println("WIRE INITIALIZED");
};

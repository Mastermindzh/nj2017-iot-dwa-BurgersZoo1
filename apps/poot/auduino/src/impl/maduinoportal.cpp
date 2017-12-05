#include "../head/MaduinoPortal.h"
#include "../head/Audio.h"

#define AUDUINO_ID 9

Audio* abc;

void receiveEvent(int bytes) {
  abc->play();
}

MaduinoPortal::MaduinoPortal(Audio* audio){
  abc = audio;
  Wire.begin(AUDUINO_ID);
  Wire.onReceive(receiveEvent);
  Serial.begin(115200);
};

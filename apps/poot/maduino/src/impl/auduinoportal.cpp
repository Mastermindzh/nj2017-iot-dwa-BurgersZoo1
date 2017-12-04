#include "../head/AuduinoPortal.h"

#define AUDUINO_ID 9

AuduinoPortal::AuduinoPortal() {
   Wire.begin();
}
void AuduinoPortal::loop(){}
void AuduinoPortal::playAudio() {
  Wire.beginTransmission(AUDUINO_ID);
  Wire.write("playaudio");
  Wire.endTransmission();
}

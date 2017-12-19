#include <Arduino.h>
#include "./head/MaduinoPortal.h"

MaduinoPortal* portal;
Audio* audio;

void setup () {
  //use for debugging
  Serial.begin(115200);

  audio = new Audio();
  portal = new MaduinoPortal(audio);
}

void loop() {

  switch (audio -> state) {
    case IDLE:
    return;

    case START:
    if(audio -> isWeetjeGeluidAanwezig()){
      audio -> state = WEETJE_BESCHIKBAAR;
      // Serial.println("START WEETJE_BESCHIKBAAR");
      return;
    }
    else if(audio->isDierenGeluidAanwezig()){
      audio -> state = DIERENGELUID_BESCHIKBAAR;
      // Serial.println("START DIERENGELUID_BESCHIKBAAR");
      return;
    }
    else{
      audio -> state = IDLE;
      // Serial.println("START IDLE");
      return;
    }
    case WEETJE_BESCHIKBAAR:
    audio -> speelWeetje();
    audio -> state = WEETJE_AFSPELEN;
    // Serial.println("WEETJE_BESCHIKBAAR WEETJE_AFSPELEN");
    return;

    case WEETJE_AFSPELEN:
    if(!audio->isPlaying()){
      // Serial.println("WEETJE_AFSPELEN AFSPELEN_KLAAR");
      if(audio -> isDierenGeluidAanwezig()){
        audio -> state = DIERENGELUID_BESCHIKBAAR;
        // Serial.println("WEETJE_AFSPELEN AFSPELEN_KLAAR DIERENGELUID_BESCHIKBAAR");
        return;
      }
      else{
        audio -> state = IDLE;
        // Serial.println("WEETJE_AFSPELEN AFSPELEN_KLAAR IDLE");
        return;
      }
    }else{
      // Serial.println("WEETJE_AFSPELEN AFSPELEN_NIET_KLAAR ");
      return;
    }

    case DIERENGELUID_BESCHIKBAAR:
    audio -> speelDierengeluid();
    audio -> state = DIERENGELUID_AFSPELEN;
    // Serial.println("DIERENGELUID_BESCHIKBAAR DIERENGELUID_AFSPELEN ");
    return;


    case DIERENGELUID_AFSPELEN:
    if(!audio->isPlaying()){
      audio -> state = IDLE;
      // Serial.println("DIERENGELUID_AFSPELEN AFSPELEN_KLAAR IDLE ");
      return;

    }
    else{
      // Serial.println("DIERENGELUID_AFSPELEN AFSPELEN_NIET_KLAAR ");
      return;
    }
  }
}

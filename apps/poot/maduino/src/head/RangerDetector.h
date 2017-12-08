#ifndef RANGERDETECTOR
#define RANGERDETECTOR

#include <Arduino.h>
#include "Poot.h"
#include <MFRC522.h>

#define RST_PIN 7
#define SS_PIN 8

class Poot;

class RangerDetector {
  public:
    RangerDetector(Poot* poot);

    /**
     * Checks if a new ranger is read and executes the events that are listened.
     */
    void loop();
  private:
    Poot* poot;
    MFRC522* mfrc522;
    bool euqlasBurgersZoo(unsigned char* buffer);
    bool validateAuthStatus(MFRC522::StatusCode status);
    bool validateReadStatus(MFRC522::StatusCode status);
    String readPasid();
    MFRC522::MIFARE_Key makeKey();
    void stopReading();

    bool isCardAvailable();
    bool isCardAuthenticated();
    bool isCardContentValid();
    bool readCardData(unsigned char* buffer);
};

#endif

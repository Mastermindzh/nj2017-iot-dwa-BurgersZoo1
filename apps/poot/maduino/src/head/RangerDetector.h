#ifndef RANGERDETECTOR
#define RANGERDETECTOR

#include <Arduino.h>
#include "GatewayLink.h"
#include <MFRC522.h>

#define RST_PIN         7
#define SS_PIN          8

class RangerDetector {
  public:
    RangerDetector(GatewayLink* gatewayLink);
    void loop();
  private:
    GatewayLink* gatewayLink;
    MFRC522* mfrc522;
    bool euqlasBurgersZoo(char* buffer);
    bool validateAuthStatus(MFRC522::StatusCode status);
    bool validateReadStatus(MFRC522::StatusCode status);
    String readPasid();
    MFRC522::MIFARE_Key RangerDetector::makeKey();
};

#endif

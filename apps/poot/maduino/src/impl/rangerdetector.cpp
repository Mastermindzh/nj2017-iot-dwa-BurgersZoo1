#include "../head/RangerDetector.h"

RangerDetector::RangerDetector(Poot* poot){
  this->poot = poot;
  this->mfrc522 = new MFRC522(SS_PIN, RST_PIN);
  this->mfrc522->PCD_Init();
  Serial.println(F("mfrc522 initialized"));
};

void RangerDetector::loop(){
  MFRC522::MIFARE_Key key = this->makeKey();

  if (!this->mfrc522->PICC_IsNewCardPresent() || !this->mfrc522->PICC_ReadCardSerial())
    return;
  String pasid = this->readPasid();
  Serial.println(F("** CARD DETECTED **"));

  // read authentication from card
  MFRC522::StatusCode status = this->mfrc522->PCD_Authenticate(MFRC522::PICC_CMD_MF_AUTH_KEY_A, 1, &key, &(this->mfrc522->uid));
  if(!validateAuthStatus(status)){
    stopReading();
    return;
  }
  Serial.println(F("** CARD AUTHENTICATED **"));

  // read data from card
  char buffer[18];
  byte len = sizeof(buffer);
  status = this->mfrc522->MIFARE_Read(1, buffer, &len);
  if(!this->validateReadStatus(status)){
    stopReading();
    return;
  }
  Serial.println(F("** CARD READ **"));

  if(!this->euqlasBurgersZoo(buffer)){
    Serial.print(F("Pas content does not equal \"Burgers' Zoo\". Content: "));
    Serial.println(buffer);
    stopReading();
    return;
  }
  stopReading();
  Serial.println(F("** CARD BURGERS ZOO CONTENT **"));

  this->poot->pasScanned(pasid);
};

void RangerDetector::stopReading(){
  this->mfrc522->PICC_HaltA();
  this->mfrc522->PCD_StopCrypto1();
}

MFRC522::MIFARE_Key RangerDetector::makeKey() {
  MFRC522::MIFARE_Key key;
  for (byte i = 0; i < 6; i++)
    key.keyByte[i] = 0xFF;
  return key;
}

String RangerDetector::readPasid(){
  String pasid = "";
  for (byte i = 0; i < this->mfrc522->uid.size; i++){
    pasid.concat(String(this->mfrc522->uid.uidByte[i] < 0x10 ? " 0" : " "));
    pasid.concat(String(this->mfrc522->uid.uidByte[i], HEX));
  }
  return pasid;
}

bool RangerDetector::validateAuthStatus(MFRC522::StatusCode status){
  if (status != MFRC522::STATUS_OK) {
    Serial.print(F("Authentication failed: "));
    Serial.println(this->mfrc522->GetStatusCodeName(status));
    return false;
  }
  return true;
}

bool RangerDetector::validateReadStatus(MFRC522::StatusCode status) {
  if (status != MFRC522::STATUS_OK) {
    Serial.print(F("Reading failed: "));
    Serial.println(this->mfrc522->GetStatusCodeName(status));
    return false;
  }
  return true;
}

bool RangerDetector::euqlasBurgersZoo(char* buffer){
  char* burgerszoo = "Burgers' Zoo";
  for (int i = 0; i < strlen(burgerszoo); i++)
    if (buffer[i] != burgerszoo[i] )
      return false;
  return true;
}

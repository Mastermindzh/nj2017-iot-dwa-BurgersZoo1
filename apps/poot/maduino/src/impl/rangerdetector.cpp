#include "../head/RangerDetector.h"

RangerDetector::RangerDetector(Poot* poot){
  this->poot = poot;
  this->mfrc522 = new MFRC522(SS_PIN, RST_PIN);
  this->mfrc522->PCD_Init();
  Serial.println(F("mfrc522 initialized"));
};

void RangerDetector::loop(){
  String pasid = this->readPasid();

  if(this->isCardAvailable() && this->isCardAuthenticated() && this->isCardContentValid())
    this->poot->pasScanned(pasid);
  stopReading();
};

bool RangerDetector::isCardAvailable(){
  return this->mfrc522->PICC_IsNewCardPresent() && this->mfrc522->PICC_ReadCardSerial();
}

bool RangerDetector::isCardAuthenticated(){
  MFRC522::MIFARE_Key key = this->makeKey();
  MFRC522::StatusCode status = this->mfrc522->PCD_Authenticate(
      MFRC522::PICC_CMD_MF_AUTH_KEY_A, 1, &key, &(this->mfrc522->uid)
  );
  return this->validateAuthStatus(status);
}

bool RangerDetector::isCardContentValid(){
  unsigned char buffer[18];
  if(!this->readCardData(buffer))
    return false;
  return this->euqlasBurgersZoo(buffer);
}

bool RangerDetector::readCardData(unsigned char* buffer){
  byte len = 18;
  MFRC522::StatusCode status = this->mfrc522->MIFARE_Read(1, buffer, &len);
  return this->validateReadStatus(status);
}

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

bool RangerDetector::euqlasBurgersZoo(unsigned char* buffer){
  const char* burgerszoo = "Burgers' Zoo";
  for (unsigned int i = 0; i < strlen(burgerszoo); i++)
    if (buffer[i] != burgerszoo[i] )
      return false;
  return true;
}

#include "../head/RangerDetector.h"

RangerDetector::RangerDetector(Poot* poot){
  this->poot = poot;
  pinMode(RST_PIN, OUTPUT);
  digitalWrite(RST_PIN, LOW);
  pinMode(SS_PIN, OUTPUT);
  digitalWrite(SS_PIN, LOW);

  this->mfrc522 = new MFRC522(SS_PIN, RST_PIN);
  this->mfrc522->PCD_Init();
  Serial.println(F("mfrc522 initialized"));
};

void RangerDetector::loop(){
  MFRC522::MIFARE_Key key = this->makeKey();

  if (!this->mfrc522->PICC_IsNewCardPresent() || !this->mfrc522->PICC_ReadCardSerial())
    return;
  String pasid = this->readPasid();

  // read authentication from card
  MFRC522::StatusCode status = this->mfrc522->PCD_Authenticate(MFRC522::PICC_CMD_MF_AUTH_KEY_A, 1, &key, &(this->mfrc522->uid));
  if(!validateAuthStatus(status))
    return;

  // read data from card
  byte buffer[18];
  byte len;
  status = this->mfrc522->MIFARE_Read(1, buffer, &len);
  if(!this->validateReadStatus(status))
    return;

  if(!this->euqlasBurgersZoo(buffer)){
    Serial.println("Pas content does not equal \"Burgers' Zoo\"");
    return;
  }

  this->mfrc522->PICC_HaltA();
  this->mfrc522->PCD_StopCrypto1();

  this->poot->pasScanned(pasid);
};

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
}

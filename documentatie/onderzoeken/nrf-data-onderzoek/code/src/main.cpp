#include <Arduino.h>

#include <SPI.h>
#include <SD.h>

File myFile;
const int SD_CS = 4;

#define MY_DEBUG

#define NODE_ID 44
#define MY_RADIO_NRF24
#define MY_RF24_CHANNEL 69
#define GATEWAYID 0

#define MY_RF24_PA_LEVEL RF24_PA_MAX
#define MY_RF24_DATARATE RF24_250KBPS

#include <MySensors.h>

void setup() {
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }


  Serial.print("Initializing SD card...");

  if (!SD.begin(SD_CS)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

}

void loop() {
  // nothing happens after setup
}

void receive(MyMessage &message){
  Serial.println(message.getByte());
}


  // // open the file. note that only one file can be open at a time,
  // // so you have to close this one before opening another.
  // myFile = SD.open("test.txt", FILE_WRITE);
  //
  // // if the file opened okay, write to it:
  // if (myFile) {
  //   Serial.print("Writing to test.txt...");
  //   myFile.print("testing 1, 2, 3.");
  //   // close the file:
  //   myFile.close();
  //   Serial.println("done.");
  // } else {
  //   // if the file didn't open, print an error:
  //   Serial.println("error opening test.txt");
  // }
  //
  // // re-open the file for reading:
  // myFile = SD.open("test.txt");
  // if (myFile) {
  //   Serial.println("test.txt:");
  //
  //   // read from the file until there's nothing else in it:
  //   while (myFile.available()) {
  //     Serial.write(myFile.read());
  //   }
  //   // close the file:
  //   myFile.close();
  // } else {
  //   // if the file didn't open, print an error:
  //   Serial.println("error opening test.txt");
  // }

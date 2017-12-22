### Ontwikkeling Poot

De code van de Poot is gebouwd met behulp van het Arduino platform en een aantal libraries. Een gedetailleerd ontwerp van de code is te vinden in het technisch ontwerp.

#### Ontwikkelomgeving
Om te kunnen ontwikkelen aan de poot is [PlatformIO](http://platformio.org/) vereist. Installeer PlatformIO volgens de officiele [handleiding](http://platformio.org/platformio-ide). Vervolgens kan het project geopend worden in de ide. Dan kan de code gecompileerd en geupload worden. Er is gekozen voor Atom over de standaard arduino IDE omdat deze IDE automatisch libraries download én er een mogelijkheid is voor live-code feedback. Zie [dit](https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo1/tree/master/documentatie/onderzoeken/arduino-ide) onderzoekje voor details over deze keuze.

#### Libraries
Voor het ontwikkelen van de poot worden de volgende libraries gebruikt. Deze libraries worden automatisch gedownload door PlatformIO wanneer er voor de eerste keer gebouwd wordt.
##### Audino
- SPI, versie:1.2.1
- Wire, versie: 1.0.0
- SD, versie 1.2.1
- https://github.com/TMRh20/TMRpcm.git#v1.0, versie 1.0
- https://github.com/jbeynon/sdfatlib.git, versie commit: 2ee66d98e28758783400617f477da37d4379d47d
##### Maduino
- SPI, versie:1.2.1
- Wire, versie: 1.0.0
- MFRC522, versie 1.3.6
- MySensors, 2.1.1




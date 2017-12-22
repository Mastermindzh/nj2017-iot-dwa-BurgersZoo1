### Poot
In dit hoofdstuk wordt beschreven hoe een fysieke poot kan worden gebouwd.

#### 1. Onderdelen
Voor het bouwen van de Poot zijn de volgende interne componenten nodig. Daarnaast zijn er ook nog materialen voor de behuizing nodig. Deze worden in het volgende hoofdstuk behandeld.

* 2x Arduino Nano
* Rode led
* Oranje led
* Groene led
* Blauwe led
* Long Range NRF24L01+
* MicroSD kaart SPI lezer
* MicroSD kaart (max 32 gb) (zie onderstaande hoofdstuk)
* RFID-RC522 (Pas lezer)
* Socket Adapter Plate voor NRF24L01+
* Speaker met 3.5mm audio jack input
* 3.5mm audio jack output for arduino
* Meer dan genoeg Jumper wires
* Breadboard
* Pasjes (zie laatste hoofdstuk)


#### 2. Behuizing
De behuizing van de poot bestaat uit een houten voorplaat met op de achterkant een plastic bakje met daarin alle electronica. Hieronder een sfeerimpressie van de behuizing.

![images/impressie.png](images/impressie.png)

Een gedetailieërd ontwerp voor de behuizing is [hier](https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo1/blob/master/documentatie/technisch-ontwerp/poot-fysiek/poot-fysiek-ontwerp.md) te vinden.

#### 3. Aansluiting

Sluit de twee arduino's aan volgens het onderstaande aansluitschema of gebruik de aansluittabellen daaronder om de verbindingen tussen componenten en Arduino's te maken.

![images/aansluitschema.png](images/aansluitschema.png)

**Auduino**

| Component  | Pin op Component | Pin op Arduino |
|------------|------------------|----------------|
| Blauwe LED | +                | D2             |
| Blauwe LED | -                | GND            |
| Speaker    | +                | D9             |
| Speaker    | -                | GND            |
| SD-reader  | SCK              | D13            |
| SD-reader  | CS               | D4             |
| SD-reader  | MOSI             | D11            |
| SD-reader  | MISO             | D12            |
| SD-reader  | VCC              | 5V             |
| SD-reader  | GND              | GND            |
| Maduino    | A4               | A4             |
| Maduino    | A5               | A5             |
| Maduino    | GND              | GND            |

**Maduino**

| Component  | Pin op Component | Pin op Maduino   |
|------------|------------------|------------------|
| Groene LED | +                | D2               |
| Groene LED | -                | GND              |
| Oranje LED | +                | D3               |
| Oranje LED | -                | GND              |
| Rode LED   | +                | D4               |
| Rode LED   | -                | GRND             |
| NRF        | VCC              | 3.3V             |
| NRF        | GND              | GND              |
| NRF        | CE               | D10              |
| NRF        | CSN / CS         | D9               |
| NRF        | CSK              | D13              |
| NRF        | MOSI             | D11              |
| NRF        | MISO             | D12              |
| NRF        | IRQ              | NIET AANGESLOTEN |
| RFID       | VCC              | 3.3V             |
| RFID       | RST              | D7               |
| RFID       | GND              | GND              |
| RFID       | MISO             | D12              |
| RFID       | MOSI             | D11              |
| RFID       | SCK              | D13              |
| RFID       | NSS              | D8               |
| RFID       | IRQ              | NIET AANGESLOTEN |


#### 4. Code uploaden
De volgende stap is om de code te uploaden naar de Arduino's. 

1. Download [hier](https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo1/tree/master/deliverables/compiled-code) de gecompileerde hex bestanden. 
2. Installeer [XLoader](http://www.hobbytronics.co.uk/arduino-xloader) of [Arduino Uno Uploader Tool](http://rlangoy.github.io/Arduino-Uno-Uploader-Tool/)
3. Gebruik deze tool om de gedownloade hex files naar de juiste Arduino te uploaden.

Een alternatief is het handmatig compileren en uploaden van de code. Lees hiervoor de uitleg in het hoofdstuk ontwikkelhandleiding.

#### 5. SD kaart
De poot maakt gebruik van een MicroSD kaart waarop de weetjes en en dierengeluiden op staan. Deze MicroSD kaart kan maximaal 32GB zijn en moet geformateerd zijn in FAT32.

Op de MicroSD kaart moeten de audio bestanden volgens de volgende naamgeving:

- Een diergeluid in de root: dier.wav
- Weetjes genummerd, beginnend vanaf 0.  
Dus 0.wav, 1.wav, 2.wav etc.

De inhoud van de MicroSD kaart zal er als volgt uit zien:
```
/dier.wav
/0.wav
/1.wav
/2.wav
/3.wav
/[0...+].wav
```

Wanneer een wav bestandje op de MicroSD gezet moet worden, zal deze geconverteerd worden naar de goede settings. 
** todo: uitleggen hoe de wav bestanden geconverteerd moeten worden, dit komt in week 7 & 8. **

#### 6. Aanzetten
Nadat alle bovenstaande stappen doorlopen zijn kunnen de twee Arduino's op stroom worden gezet. Vervolgens gaan de twee Arduino's initialiseren. Om te kunnen zien of onderdelen goed worden geinitialiseerd moet worden gekeken naar de statuslampjes. Per Arduino is hieronder te vinden wat de statuslampjes betekeken.

##### Maduino
Als alles goed gaat dan gaan er 3 lampjes branden zodra de Maduino wordt opgestart. Wanneer het initialiseren compleet is gaan de drie lampjes uit. Verder zijn er een aantal abnormale lampcodes. Deze zijn hieronder uitgewerkt.

| Gedrag | Betekenis |
| --- | --- |
| Alle lampjes blijven aan staan. | Bezig met opstart sequence. Zoalang de Arduino nog niet verbonden is met een gateway worden deze lampjes laten zien. Als dit lang zo blijft staan dan is er waarschijnlijk iets mis met de NRF24L01+ óf kan de gateway niet worden gevonden. |
| Geel lampje continu aan | Er kan niet worden verbonden met de auduino. Er is iets mis met het verzenden naar de Auduino met I2C. |
| Geel lampje kort knipper | Er wordt verzonden naar de Auduino. Wanneer je een hele korte gele knipper ziet dan wordt er een signiaaltje verzonden naar de Auduino. |
| Rood lampje 0.5 seconde knipper | De gescande pas kon niet worden geauthenticeerd. |
| Rood lampje 1 seconde knipper | De gescande heeft niet de inhoud `Burgers Zoo`. |
| Groen lampje 1 seconde aan | Er is een valide pas gescant. |

##### Auduino
De Auduino laat geen led branden als er hij niks aan het doen is. De volgende statussen kunnen worden afgelezen van de blauwe status led:

| Gedrag | Betekenis |
| --- | --- |
| Blauwe led knippert snel | De SD kaart lezer kon niet worden geinitialiseerd. |
| Blauwe led brand continu | Er wordt een geluidje afgespeeld |

#### 7. Pasjes
De poot accepteert alleen nfc pasjes met een frequentie van 13.56 MHz. Elk pasje moet een uniek identificatienummer hebben. Verder moet de op de pas de tekst `Burgers' Zoo` staan. Pasjes die niet aan deze eisen voldoen worden niet geaccepteerd door de poot.



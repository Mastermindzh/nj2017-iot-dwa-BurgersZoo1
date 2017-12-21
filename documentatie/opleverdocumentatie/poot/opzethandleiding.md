In dit hoofdstuk wordt beschreven hoe een fysieke poot kan worden gebouwd.

## 1. Onderdelen

TODO: WELKE ONDERDELEN ZIJN NODIG?
TODO: EEPROM MOET LEEG ZIJN

## 2. Behuizing

TODO: FOTO' + TECHINSCHE TEKENING VAN BEHUIZING + LINK NAAR EXACTE DESIGN

## 3. Aansluiting

TODO: FRITZING SCHEMA

Als aanvulling van bovenstaande aansluitschema zijn hieronder alle aansluitingen in twee tabellen weergegeven.

**Auduino** 
| Component | Pin op Component | Pin op Arduino |
| Blauwe LED | + | D2 |
| Blauwe LED | - | GND |  
| Speaker | + | D9 |
| Speaker | - | GND |
| SD-reader | SCK  | D13 |
| SD-reader | CS   | D4 |
| SD-reader | MOSI | D11 |
| SD-reader | MISO | D12 |
| SD-reader | VCC  | 5V |
| SD-reader | GND  | GND |
| Maduino | A4   | A4 |
| Maduino | A5   | A5 |
| Maduino | GND  | GND |
  
**Maduino**  
  
| Component | Pin op Component | Pin op Maduino |
| Groene LED | + | D2 |
| Groene LED | - | GND |
| Oranje LED | + | D3 |
| Oranje LED | - | GND |
| Rode LED | + | D4 |
| Rode LED | - | GRND |
| NRF | VCC | 3.3V |
| NRF | GND | GND |
| NRF | CE  | D10 |
| NRF | CSN / CS | D9 |
| NRF | CSK	| D13 |
| NRF | MOSI | D11 |
| NRF | MISO | D12 |
| NRF | IRQ | NIET AANGESLOTEN |
| RFID | VCC | 3.3V |
| RFID | RST | D7 |
| RFID | GND | GND |
| RFID | MISO | D12 |
| RFID | MOSI | D11 |
| RFID | SCK | D13 |
| RFID | NSS | D8 |
| RFID | IRQ | NIET AANGESLOTEN |
	  

## 4. Code uploaden

TODO: LINK NAAR BUILT HEX FILES + UITLEG OVER HOE JE DEZE UPLOAD

## 5. SD kaart

TODO: HOE SD KAART FORMATTEREN?
TODO: NAAMGEVING VAN BESTANDEN OP SD KAART

## 6. Aanzetten


## Arduino Gateway
Dit project bevat de code voor op de Arduino van de gateway. Deze Arduino is in praktijk een doorgeefluik:
1. Alle berichten vanuit het MySensors worden doorgestuurd naar de seriele monitor zodat deze afgehandeld kunnen worden door de Raspberry Pi van de gateway.
2. Regels tekst ontvangen in de seriele monitor worden omgezet naar MySensors berichten en verstuurd naar de jusite node in het MySensors netwerk.

Zowel uitgaande als binnenkomende berichten op deze arduino wordt gebruik gemaakt van het [seriele protocol van MySensors](https://www.mysensors.org/download/serial_api_20). Alle seriele communicatie wordt gedaan met baud rate 115200.

### Ontwikkelen
Dit project wordt ontwikkeld met de [platformio ontwikkelomgeving](http://platformio.org/). Lees [hier](http://docs.platformio.org/en/latest/installation.html) hoe je deze ide kan installeren.

### Builden/Deployen
Het bouwen en builden van dit project moet met de PlatformIO builder. Doe dit door links in de IDE op het knopje `Run another target` te klikken. Vervolgens kun je kiezen voor `POI upload` voor het uploaden en `POI Build` voor het uploaden. Er zijn drie profielen voor de drie meestgebruikte aparaten: `UNO` voor de Arduino Uno, `NANO` voor de Arduino Uno en `MEGA` voor de Arduino Mega.

Bij de Arduino Uno en Arduino Nano wordt er uitgegaan van dat er een NRF24L01+ chip is aangesloten volgens de instructies van MySensors. [Lees hier](https://www.mysensors.org/build/connect_radio) hoe dit te doen.

Voor de Arduino Mega wordt gebruikt gemaakt van een andere pinlayout:
*  CE = 53
*  CS = 49
*  SCK = 52
*  MISO = 50
*  MOSI = 51

### Runnen unit tests
Voor de unit tests is er een aparte platformio environment beschikbaar genaamd `TESTING`. Gebruik het knopje `Run another target` in je IDE en vervolgens `PIO upload (TESTING)` om de testcode te uploaden naar een Arduino Uno. Wanneer een seriele monitor wordt verbonden, worden een aantal unit tests uitgevoerd. De resultaten worden weergegeven in de seriele monitor. Alle seriele communicatie wordt gedaan met baud rate 115200.

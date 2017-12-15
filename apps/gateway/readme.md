Gateway
====
Voor het gebruik van de gateway moet er een library geïnstalleerd zijn op de pc. Het gaat om de RXTX library. Deze zorgt voor de seriële communicatie. 

De library is te vinden via de volgende links:
- Linux: ~~[http://rxtx.qbang.org](http://rxtx.qbang.org/wiki/index.php/Download)~~ Het is alleen nodig om het volgende commando uit te voeren: `sudo apt-get install librxtx-java`
- Windows 64 bit: [http://fizzed.com](http://fizzed.com/oss/rxtx-for-java)

Zonder de instalatie van deze library zal er bij het bouwen van het project fouten optreden.

## Uitvoeren op de Raspberry Pi 3
Bij het uitvoeren van de jar op de Raspberry Pi 3 moet het volgende gebruikt worden:
`java -Djava.library.path=/usr/lib/jni -jar <GATEWAY.jar>`
Het gedeelte van ` -Djava.library.path=/usr/lib/jni ` moet voor de `-jar` staan


## Afspraken MySensors protecol

- `V_VAR1` wordt gebruikt om van de node naar de gateway zijn poot id te presenteren.
- `V_VAR2` wordt gebruikt om een pas id van een node naar de gateway te sturen.
- `V_VAR3` wordt gebruikt om vanaf de gateway naar een node een poot id te sturen.
- `V_VAR4` is gereserveerd voor het versturen van audio files.
- `V_VAR5` is gereserveerd voor het configureren van de Arduino, zoals het resetten van EEPROM of resetten van de Arduino zelf.
- `V_TEMP` wordt gebruikt om de temperatuur data door te sturen.
- `V_HUM` wordt gebruik om de humidity te versturen
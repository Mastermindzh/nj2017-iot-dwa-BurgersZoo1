Gateway
====
Voor het gebruik van de gateway moet er een library geïnstalleerd zijn op de pc. Het gaat om de RXTX library. Deze zorgt voor de seriële communicatie. 

De library is te vinden via de volgende links:
- Linux: ~~[http://rxtx.qbang.org](http://rxtx.qbang.org/wiki/index.php/Download)~~ Het is alleen nodig om het volgende commando uit te voeren: `sudo apt-get install librxtx-java`
- Windows 64 bit: [http://fizzed.com](http://fizzed.com/oss/rxtx-for-java)

Zonder de instalatie van deze library zal er bij het bouwen van het project fouten optreden.


### Upload via SSH naar Raspberry Pi 3
`sudo scp build/libs/gateway-1.0-SNAPSHOT.jar pi@IP_ADDRESS:~/gateway`


## Afspraken MySensors protecol

- `V_VAR1` wordt gebruikt om van de node naar de gateway zijn poot id te presenteren.
- `V_VAR2` wordt gebruikt om een pas id van een node naar de gateway te sturen.
- `V_VAR3` wordt gebruikt om vanaf de gateway naar een node een poot id te sturen.
Installatie Gateway
============

Om de gateway werkend te krijgen zijn er een aantal vereisten:

- Raspberry Pi 3.
- Arduino Nano, Mega of Uno met een aangesloten NRF24L01+.
- Er is een werkende versie van `RASPBIAN STRETCH WITH DESKTOP` geinstalleerd.
- Er is toegang via SSH of direct op de Raspberry Pi 3 terminal toegang.

## MongoDB
Omdat er het een en ander wordt opgeslagen op de Raspberry Pi 3 moet er een database geinstalleerd worden, in dit geval MongoDB.

Dit kan op de Raspberry Pi 3 gedaan worden met de volgende commando's in de terminal:

``` bash
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install mongodb-server
```
*Het upgrade process kan een tijdje duren.*

Als de MongoDB server succesvol geinstalleerd is, kan deze service gestart worden door: 
``` bash
$ sudo service mongodb start
```

## Java
De gateway draait in een JVM en het is dus nodig om de juiste Java installatie te installeren. 

``` bash
sudo su
echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu xenial main" | tee /etc/apt/sources.list.d/webupd8team-java.list
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys EEA14886
```
Mocht bij het uitvoeren van het bovenstaande een error naar voren komen over het ontbreken van `dirmngr` dan kan dat gefixed worden door dit te installeren:
``` bash
sudo apt-get install dirmngr
```
``` bash
sudo apt-get update
sudo apt-get install oracle-java8-installer
```

## RXTX

``` bash
sudo apt-get install librxtx-java
```

## Aansluiting Arduino
![Aansluitschema Arduino Nano met een NRF24L01+](images/Arduino_Nano_NRF24_bb.png)
*Aansluitschema Arduino Nano met een NRF24L01+*

De Arduino moet vervolgens verbonden worden via een USB kabel met de Raspberry Pi 3.

## Start gateway
Om de gateway te starten moet eerst de MongoDB aan staan. Dat kan met het eerste commando.
Als deze draait kan daarna de gateway zelf gestart worden. 
``` bash
sudo service mongodb start #starts mongo service

java -Djava.library.path=/usr/lib/jni -jar gateway.jar #gateway.jar is te vervangen met de jar naam van de gateway
```
Bij het tweede gedeelte, om Java te starten, is het belangrijk dat de volgende regel voor de -jar komt: `-Djava.library.path=/usr/lib/jni `. Anders wordt de RXTX library niet goed geladen.
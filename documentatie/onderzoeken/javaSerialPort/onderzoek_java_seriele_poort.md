Onderzoek naar de Seriele poort icm met Java
----------------

#TODO: SERIELE POORT VERVANGEN MET seriële POORT!!!!!!!

##Prototyping
Om dit te gaan onderzoeken ga ik een testopstelling maken, en gebruik dus de CMDMethode kaart Stepping Stones: Prototype.

## Hypothese
Ik hoop te leren hoe we gebruik kunnen maken van de seriele poort. Dit is nodig omdat we gebruik willen maken van de seriele gateway code van [MySensors](https://www.mysensors.org/). Omdat we niet direct met een NRF24L01+ kunnen communiceren, dit is uit eerdere onderzoeken gebleken, moeten we dit via een Arduino gateway doen. Er moet dan uitgezocht worden hoe we met Java met de seriele poort kunnen communiceren, dus niet alleen uitlezen maar ook naar toe schrijven van MySensor berichten.

## Testopzet
Wat ik ga doen is een prototype bouwen om te kijken welke methodes er aangeboden worden en welke software er nog voorgeinstalleerd moet staan op een laptop/Raspberry Pi3. 

Ik wil ook uiteindelijk een voorbeeld hebben dat gebruik kan worden tijdens het project.
 
## Resultaat/conclusie
Voordat het werkt moet er een programma/driver worden geinstalleerd. Er zijn verschillende manieren om de RXTX library te installeren.
De library is te vinden via de volgende links:

- Linux: ~~[http://rxtx.qbang.org](http://rxtx.qbang.org)~~ Het is alleen nodig om het volgende commando uit te voeren: `sudo apt-get install librxtx-java`. Dit kan afwijken bij verschillende Linux destributies, het commando werkt op Ubuntu 17.04
- Windows 64 bit: [http://fizzed.com](http://fizzed.com)
Zonder de instalatie van deze library zal er bij het bouwen van het project fouten optreden.
Onderzoek naar de seriële poort icm met Java
----------------

##Prototyping
Om dit te gaan onderzoeken ga ik een testopstelling maken, en gebruik dus de CMDMethode kaart Stepping Stones: Prototype.

## Hypothese
Ik hoop te leren hoe we gebruik kunnen maken van de seriele poort. Dit is nodig omdat we gebruik willen maken van de seriële gateway code van [MySensors](https://www.mysensors.org/). Omdat we niet direct met een NRF24L01+ kunnen communiceren, dit is uit eerdere onderzoeken gebleken, moeten we dit via een Arduino gateway doen. Er moet dan uitgezocht worden hoe we met Java met de seriele poort kunnen communiceren, dus niet alleen uitlezen maar ook naar toe schrijven van MySensor berichten.

## Testopzet
Wat ik ga doen is een prototype bouwen om te kijken welke methodes er aangeboden worden en welke software er nog voorgeinstalleerd moet staan op een laptop/Raspberry Pi3. 

Ik wil ook uiteindelijk een voorbeeld hebben dat gebruik kan worden tijdens het project.

Voordat het werkt moet er een programma/driver worden geinstalleerd. Er zijn verschillende manieren om de RXTX library te installeren.
De library is te vinden via de volgende links:

- Linux: ~~[http://rxtx.qbang.org](http://rxtx.qbang.org)~~ Het is alleen nodig om het volgende commando uit te voeren: `sudo apt-get install librxtx-java`. Dit kan afwijken bij verschillende Linux destributies, het commando werkt op Ubuntu 17.04
- Windows 64 bit: [http://fizzed.com](http://fizzed.com)
Zonder de instalatie van deze library zal er bij het bouwen van het project fouten optreden.
 
## Resultaat/conclusie

Ik heb meerdere voorbeelden bekeken en kleine tests mee gemaakt, waarbij er naar een Arduino gecomuniceerd kan worden. 
Er is een oplossing die heel interessant lijkt, de [JSerialComm](http://fazecast.github.io/jSerialComm/), mede omdat er geen instalatie vereist leek te zijn van RXTX library (dit werd niet op de Github pagina aangegeven, heb ik niet getest). Hiervan lukte het om een connectie te maken met de seriële poort en ook data uit te lezen maar de serial events kreeg ik niet werkend. Deze bleven hangen of reageerden niet. Het is dus nog steeds een alternatief die toegepast kan worden in het project, maar dan moet er wel zelf een event voor het uitlezen worden gecreëerd.

Een ander voorbeeld van [eclipsesource.com](https://eclipsesource.com/blogs/2012/10/17/serial-communication-in-java-with-raspberry-pi-and-rxtx/) lijkt nog het beste te werken. Het code voorbeeld dat deze site geeft is aanpasbaar en zal ook bewerkt moeten worden om te voldoen aan onze eisen. De basis werkt en de code is vrij helder en dus gemakkelijk aan te passen. Ook is het gelukt om te schrijven naar de seriële poort en berichten via deze zelfde poort weer uit te lezen.

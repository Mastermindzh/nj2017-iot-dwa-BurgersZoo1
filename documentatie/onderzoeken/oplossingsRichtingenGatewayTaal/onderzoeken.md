Beschrijving van de Onderzoeken
===============================

Geef een beschrijving van de test die je gedaan hebt met elk Proof of Concept. Voeg 
 de code ook toe in de map **code**.
 
#Onderzoek naar oplossingsrichtingen gateway taal

##Onderzoeksmethode (uit de cmd methods pack)
Comparison chart uit de categorie stepping stones. 
`Dit nog relevant?`

## hypothese:
Ik verwacht een geschikte methode te vinden waarmee we NRF kunnen uitlezen op de Raspberry Pi 3 (die we waarschijnlijk als gateway gaan gebruiken). Deze taal moet dan ondersteunen dat de infromatie uit het NRF netwerk uitgelezen kan worden.

## testopzet:
Ik ga kijken hoe ik het makkelijkste data uit het MySensor netwerk kan uitlezen. Dit ga ik in twee talen doen om te kijken of er nog verschillen in zitten qua onderhoudbaarheid/leesbaarheid. Ik ga dit doen met Java en met Python. Binnen het IoT team heeft iedereen al ervaring met Java en tijdens de course is ook Python aan bod gekomen.
 
## Resultaat: 

### Direct aansluiten
Ik heb als eerste geprobeerd een NRF24L01+ chip direct op een Raspberry Pi aan te sluiten. Dit gaat niet werken omdat er geen data wordt overgedragen. De chip lijkt goed aangesloten te zijn en dat heb ik ook op meerdere manieren geprobeerd. 

### Seriële poort
Met Python lijkt het uitlezen vrij simpel. Voor een minimale sketch (in de map code te vinden) is maar 26 regels code nodig. De code die al voorbeeld gebruikt is komt van dit forum: [Python seriële poort voorbeeld](https://forum.arduino.cc/index.php?topic=410574.0).

De Java code is iets uitgebreider en bied ook checks voor poorten. Ook wordt alles "netjes" gedaan en wordt zit er ook code bij om de seriële poort goed te sluiten. Ook is hier een code voorbeeld voor gebruikt, dit voorbeeld komt van de Arduino site af: [Arduino playground](https://playground.arduino.cc/Interfacing/Java)
## Systeemoverview

![system overview](images/overview.png)

De poot bestaat uit twee Arduino's. Er is één Arduino die volledig gaat over het afspelen van audio (genaamd Auduino). In een later stadium zou deze Auduino ook verantwoordelijk worden voor het opslaan van nieuwe ontvangen audiobestanden. De Auduino wordt aangestuurd door de Master Arduino.

De Master Arduino (genaamd Maduino) is verantwoordelijk voor alle primaire functionaliteiten en het aansturen van de Auduino. Zo zal de master Arduino een NFC-scanner hebben om passen te detecteren. Ook zal de Maduino de temperatuur en luchtvochtigheid meten. De Maduino staat via de NRF24 chip in verbinding met de Gateway en zal zo de Gateway op de hoogte houden over welke passen gesand zijn.

De resultaten van een speurtocht van bezoekers kunnen ingezien worden in de Ranger app. Dit is een webapp die na het bezoek aan Burgers' Zoo gebruikt kan worden om terug te kijken op een boezoek aan het park. De verkregen informatie wordt hier nogmaals getoond.

Beheerders van Burgers' Zoo kunnen via de Admin app de speurtocht bijhouden en aanpassen. Zo is het mogelijk op poten opnieuw te configureren of nieuwe geluiden of weetjes toe te voegen aan de speurtocht

De Ranger app en de Admin app draaien samen met de Backend en de database in Docker containers. Dit alles draait op een server.
### Gateway
De poten zullen communiceren met de twee backends van de twee groepen via een gateway. Deze gateway bestaat uit een Arduino en een Raspberry Pi. De Arduino zal draadloos communiceren via NRF24 chips met de poten en alle informatie doorsturen naar de Raspberry Pi. De Pi zal via HTTP/JSON communiceren met de backend's. De Pi kan op zijn beurt weer de Arduino binnen de gateway aansturen om zo informatie bij de poten te krijgen.

### Frontend apps
![frontends](images/frontends.png)

De gebruikers zullen werken met een van de twee client-applicaties: de Ranger App voor de rangers en de Admin App voor de administratoren. Deze twee applicaties draaien in de browser en zullen via HTTP/JSON communiceren met de Backends.

De front-end apps zijn modulair opgezet, deze apps draaien op hun eigen plekje en roepen het REST backend middels HTTP aan. Als zij data willen manipuleren zal dit dus ook via de back-end moeten verlopen. Alle front-end apps bij elkaar worden gezien als de "front-end laag", zelfs als deze op andere fysieke machines draaien. Het los koppelen van de applicaties bevordert de werkbaarheid en stabiliteit van de architectuur. Elke app kan afzonderlijk gedeployed / getest worden zonder de rest van de architectuur te beïnvloeden.

### Backend
Het back-end betreft een REST api welke wordt aangesproken met de verschillende front-ends. De REST api zelf spreekt de database laag aan om zijn data op te slaan en op te halen. Deze laag kan wederom uitgebreid worden met meerdere instanties van de back-end en/of met een loadbalancer.

### Database
De database laag zal enkel en alleen de database bevatten, op het moment van prototyping is dit één Mongo database. Dit kan echter uitgebreid worden met meerdere instances (voor redundancy, uitbreidbaarheid) en eventueel voorzien worden van een load balancer.

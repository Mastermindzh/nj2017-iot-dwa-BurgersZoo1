# Onderzoek Arduino Vs Raspberry Pi

**Onderzoeksmethode (uit de cmd method pack)**
Literature Study uit de categorie Library

## Hypothese:
De Arduino zal geschikter zijn voor pootjes ivm kosten en zelfde pin IO mogelijkheden als een Raspberry Pi.

Ook zal een Arduino geschikter zijn om te prototypen omdat de overhead ontbreekt die de Raspberry Pi meegeeft.

Verder verwacht ik dat de prijs van de Arduino een stuk minder is dan die Raspberry Pi. Dit is ook belangrijk om uit te zoeken ivm het beperkte budget dat we vanuit school hebben gekregen.

## Testopzet:  
Ik ga op internet bronnen zoeken en deze gebruiken om tot een resultaat te komen.
 
## Resultaat:
De Raspberry Pi heeft als testplatform een aantal nadelen; Stroomvoorziening. Wanneer wij een paal in Burgers Zoo willen testen is er niet per definitie een stroompunt beschikbaar. Wanneer we Raspberry Pi willen voorzien van batterijen zullen we daar extra hardware voor moeten gebruikten. Ook moeten we de Pi op tijd netjes afsluiten om systeem fouten te voorkomen [1].
De Arduino heeft deze problemen niet, zodra het stroom wegvalt zal de code stoppen en weer doorgaan zodra er weer stroom beschikbaar is. Verder kan een simpele 9v batterij een Arduino al voorzien van stroom. De Raspberry Pi heeft een constante 5v nodig en dit komt nou eenmaal niet uit batterijen. Ook verbruikt een Raspberry Pi meer stroom waardoor batterijen niet lang mee zullen gaan. [2]

Het voordeel van een Raspberry Pi heeft

|  |Raspberry Pi 3 |Arduino Nano| 
|---|---|---|
|RAM| 1 GB  | 2 KB|
|Ruimte voor pogramma's| Afhankelijk van de micro-sd kaart, kan ook eventueel uitgebreid worden met USB opslag| 32 KB (waarvan 2 KB door de bootloader wordt gebruikt)  |
|Stroom verbuik| 250 mA*** [4]  |  35mA[5] |
|Kosten|€ 38,95*|€ 1,95**|

*De kosten van een Raspberry Pi los, hier komen o.a. kosten bij zoals een SD kaart om het bestuuringssysteem op te zetten en een voedingskabel.

 **https://nl.aliexpress.com/item/Mini-USB-Nano-3-0-Atmega328P-atmega328-Controller-for-Arduino-CH340-CH340G-5V-16M-Board-Module/32828384828.html?src=google&albslr=222216413&isdl=y&aff_short_key=UneMJZVf&source=%7Bifdyn:dyn%7D%7Bifpla:pla%7D%7Bifdbm:DBM&albch=DID%7D&src=google&albch=shopping&acnt=494-037-6276&isdl=y&albcp=664365076&albag=32654332494&slnk=&trgt=68416666751&plac=&crea=nl32828384828&netw=g&device=c&mtctp=&gclid=CjwKCAiArrrQBRBbEiwAH_6sNOa3BhZOfqGonYvtW0vxTK0dpTbXvGEaNSA_bf4sHL9kIyCveGQQWBoCYOYQAvD_BwE

***HDMI off, LEDs off, onboard WiFi 

Het daadwerkelijke stroomvebruik van de Arduino zal hoger liggen wanneer er ook hardware componenten zijn aangesloten die ook stroom verbuiken.

## Conclusie
Voor de prototypes kan het beste een Arduino gebruikt worden. De hardware kan gemakkelijk aangesloten worden en er wordt weinig stroom verbuikt waardoor er een gedurende een testdag een accu gebruikt kan worden. 

De Raspberry Pi bied veel mogelijkheden maar is meer geschikt als gateway dan voor het aansturen en uitlezen van hardware componenten.


[1] https://www.digitaltrends.com/computing/arduino-vs-raspberry-pi/
[2] https://www.raspberrypi.org/forums/viewtopic.php?t=19341
[3] https://www.raspberrypi.org/products/raspberry-pi-3-model-b/
[4] https://www.pidramble.com/wiki/benchmarks/power-consumption
[5] https://tlextrait.svbtle.com/arduino-power-consumption-compared

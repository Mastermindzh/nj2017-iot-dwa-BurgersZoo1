# Class Diagram IoT Poot

![./Class diagram IoT v1.png](Class diagram IoT v1.png)

#### Poot
De `Poot` klasse is soortvan de baas van het management van alle subsysteempjes die op de poot draaien. Zo zal deze klasse de globale business logica implementeren. De `Poot` zal vanuit de ranger-detectie module te horen krijgen dat er een ranger voor de poot staat en zal de poot module de audio module en de logging module aansturen om hierop te reageren.

De `Poot` klasse zorgt ook voor registratie en aanmelden van de poot bij de gateway en het opslaan van het pootid in EEPROM.

#### RangerDetector
Deze is verantwoordelijk voor het detecteren van welke ranger er voor de paal staat. Op dit moment wordt deze geimplementeerd door een RFID-lezer uit te lezen en de data uit de pasjes te lezen. De `RangerDetector` rapporteert terug naar `Poot` zodat de `Poot` kan besluiten wat te doen met dit event.

#### GatewayLink
Alle communicatie naar de gateway wordt gedaan door de `GatewayLink`. Zo zal de `Gatewaylink` methodes hebben waarmee de `Logging`, `RangerDetector` en `Downloader`  

#### Logging
Deze module verzamelt informatie die te maken heeft met de uitvoering en omgeving van de poot. Bijvoorbeeld temperatuur, luchtvochtigheid, stroomverbruik en communicatie-informatie. Logging geeft de verzamelde informatie door aan de `GatewayLink` die zorgt dat deze informatie bij de gateway aankomt.

##### TempSensor
Een klasse die een fisieke thermometer beheert. Deze thermometer wordt uitgelezen door de `Logging`. 

##### HumiditySensor
Een klasse die een fisieke luchtvochtiheidsmeter beheert. Deze luchtvochtimeter wordt uitgelezen door de `Logging`.

#### Audio
Het afspelen en beheren van alle audio-gerelateerde zaken wordt geregeld door de `Audio` module. De audio module wordt aangestuurd door de `Poot` module. De Audio module zal de audio bestanden vanuit de `SD-Card` lezer ophalen.

##### Player << TMRPMC >>
De [TMRPMC](https://github.com/TMRh20/TMRpcm/wiki) library wordt gebruikt voor het afspelen van de library. Binnen het systeem wordt dit het `Player` component genomed.

##### Downloader
De downloader verzorgt het ontvangen van nieuwe audio-bestanden vanuit de `Communication` module. Dit ontvangen van audio-bestanden zal een speciaal protocol vereisen. Hiervoor zorgt de downloader.

#### StatusLight
Geeft door middel van een fisiek lampje feedback aan mensen die de paal onderhouden over het werk van de paal. Zo kan er een lampje zijn dat door middel van knipperen het verkeer op de communicatiekanalen aangeeft, of een lampje dat laat zien of er audio afgespeeld wordt. Het doel van de het `StatusLight` is een visuele indicatei geven van wat er binnenin de arduino afspeelt.

##### LED
Representeert een fisiek led lampje op een bepaalde fisieke pin op de arduino. Kan worden aangezet of uitgezet.

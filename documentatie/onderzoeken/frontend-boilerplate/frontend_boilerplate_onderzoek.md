# Front-end boilerplate generator

## Onderzoeksmethode

**Categorie**: Stepping Stones <br />
**Naam**: Comparison chart

## Inleiding
Tijdens het vak Client-side Web Development (CWD) hebben we geleerd om lokaal op je laptop een applicatie te draaien
in de browser. Voor het Burgers' Zoo project is dit echter niet genoeg, omdat de opdracht eist dat je een field-trial uitvoert waarbij gebruikers 'echt' je applicatie gebruiken. Het moet dus uiteindelijk live komen te staan. 

**Doel**<br />
Dit onderzoek focust zich op tools waarmee je je code op zo'n manier op kunt zetten cq. laten generen, dat je makkelijk kunt
deployen en kunt switchen tussen developer- en productieomgeving. Onder 'makkelijk' wordt verstaan: switchen tussen deployment en productie met één enkel commando. Daarnaast is het belangrijk dat de ontwikkelaars die de tool gebruiken direct aan de slag kunnen met React, zonder verdere dependency configuratie.

## Stakeholders & Concerns
Bij dit onderzoek is één stakeholder betrokken: De student, in de rol van ontwikkelaar.
Er zijn een aantal pre-condities en belangen opgesteld om de scope van het onderzoek in te verkleinen.

### Pre-condities
De opdracht moet, voor het gemak, zo veel mogelijk in lijn zijn met gebruikte technieken uit de Develop Web Application (DWA)
course. De tool moet minimaal aan de volgende punten voldoen:

1. React wordt als front-end library gebruikt.
2. Het Redux-pattern wordt toegepast.
3. Er wordt ontwikkeld in EcmaScript 6.
4. Webpack wordt **niet** door de student zelf geconfigureerd.

### Belangen en eisen
Het overkoepelende belang van alle onderstaande belangen is dat de ontwikkelaar met zo min mogelijk moeite direct aan de slag kan. Hoe meer de tool aan de onderstaande eisen voldoet, hoe meer dit belang behartigd wordt. De eisen staant hier als volgt geprioriteerd:

1. De tool moet zodanig veel boilerplatecode genereren dat er direct met React gewerkt kan worden, zonder verdere dependency
configuratie.
2. De tool moet een dev- en productieomgeving genereren.
3. De tool ondersteunt de punten genoemd in de pre-condities.
4. De tool installeert dependencies die geschreven code kan controleren op kwaliteit. (Denk aan property check, linting en 
tests)
5. De structuur van de directory waarin de boilerplate code wordt gezet moet zo veel mogelijk overeen komen met de conventies
die bij DWA en OOSE zijn gehanteerd.
6. De tool is open-source en is recentelijk (de afgelopen maand) nog geüpdatet. Dit geeft vertrouwen dat nieuwe versies van
dependencies regelmatig worden geïnstalleerd en dat de tool niet deprecated raakt.
7. De tool ondersteunt hot-reloading, zodat wijzigingen in de code direct zichtbaar zijn in de browser zonder deze handmatig
te hoeven refreshen.
8. De documentatie voor het gebruik van de tool is duidelijk terug te vinden op de desbetreffende code repository.


## Hypothese
Vanuit de DWA-course zijn twee middelen aangereikt om een React project op te starten. Een van de twee was een van te voren
opgezette boilerplate en maakte gebruik van Webpack versie 1. De ander was een tool genaamd Create React App, gemaakt door
Facebook Incubator, die een applicatie genereert. De eerst valt af, want inmiddels is Webpack versie 3 al uit. Daarom luidt
de hypothese:

"Create React App is de meest geschikte tool om client-side boilerplate code te genereren"

Dit is de verwachting, omdat React en Create React App door dezelfde organisatie wordt gemaakt. Of Create React App uiteindelijk de meest geschikte is,
moet blijken uit een 'comparison chart' waarin Create React App met andere tools wordt vergeleken. De hoogste score wint.

## Testopzet

Er wordt een tabel gecreëerd (comparison chart) met over de verticale as eisen en over de horizontale as tools. Een tool krijg een vinkje als het aan de eis voldoet en een kruisje als hij er niet aan voldoet. Het invullen van een comparison chart gebeurt in een aantal stappen:

1. Er worden 4 alternatieven voor Create React App op Google opgezocht en in de chart geplaatst.
2. Van elke tool wordt de installatiehandleiding gevolgd.
3. De boilerplate source code wordt bekeken en beoordeeld op de eisen uit hoofdstuk 'Belangen en eisen'.

## Kandidaat tools
Om geschikte kandidaat tools te vinden is er op Google gezocht naar "react redux boilerplate". De tools met de meeste GitHub stars en tools die genoemd zijn in gerenommeerde courses op Pluralsight en Udemy worden beschouwd als kandidaat tools:

- [Create React App, Facebook](https://github.com/facebookincubator/create-react-app)
- [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate)
- [Udemy Course, Stephen Grider](https://github.com/StephenGrider/ReduxSimpleStarter)
- [React Slingshot, Cory House](https://github.com/coryhouse/react-slingshot)
- [React Start Kit, Kirasoft](https://github.com/kriasoft/react-starter-kit)

## Resultaat
In de onderstaande tabel staan de onderzoeksbevindingen in een comparison chart:


![Comparison chart](https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo1/blob/onderzoek/boilerplateGenerator/documentatie/onderzoeken/frontend_boilerplate/ComparisonChartBoilerplate.png)

![Comparison chart](https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo1/blob/master/documentatie/onderzoeken/frontend_boilerplate/ComparisonChartBoilerplate.png)


## Conclusie
De hypothese *'Create React App is de meest geschikte tool om client-side boilerplate code te genereren'* is niet bevestigd. De meeste geschikte tool is React Slingshot. Deze tool heeft niet alleen een 100% score, maar is ook de enige tool die positief scoort op de belangrijkste eis: direct kunnen ontwikkelen. Voor het Burgers' Zoo project wordt daarom React Slingshot gebruikt.

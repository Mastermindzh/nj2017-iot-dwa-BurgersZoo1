# Front-end boilerplate generator

## Onderzoeksmethode

**Categorie**: Stepping Stones <br />
**Naam**: Comparison chart

## Inleiding
Tijdens het vak Client-side Web Development (CWD) hebben we geleerd om lokaal op je laptop een applicatie te draaien
in de browser. Voor het Burgers' Zoo project is dit echter niet genoeg, omdat de opdracht eist dat je een field-trial uitvoert
waarbij gebruikers 'echt' je applicatie gebruiken. Het moet dus uiteindelijk live komen te staan. 

**Doel**
Dit onderzoek focust zich op tools waarmee je je code op zo'n manier op kunt zetten cq. laten generen, dat je makkelijk kunt
deployen en kunt switchen tussen developer- en productieomgeving. Makkelijk betekent in deze zin: switchen door een
ander 

## Stakeholders & Concerns
Bij dit onderzoek is één stakeholder betrokken: De student, in de rol van ontwikkelaar.
Voor het dit onderzoek zijn een aantal pre-condities en belangen opgesteld om de scope van het onderzoek in te verkleinen.

### Pre-condities
De opdracht moet, voor het gemak, zo veel mogelijk in lijn zijn met gebruikte technieken uit de Develop Web Application (DWA)
course. De volgende punten zijn vastgesteld:

1. React wordt als front-end library gebruikt.
2. Het Redux-pattern wordt toegepast.
3. Er wordt ontwikkeld in EcmaScript 6.
4. Webpack wordt **niet** door de student zelf geconfigureerd.

### Belangen en eisen
Het belangrijkste belang is dat de ontwikkelaar direct aan de slag kan. Hoe meer de tool aan de onderstaande eisen voldoet, 
hoe meer dit belang behartigd wordt:

1. De tool moet zodanig veel boilerplatecode generen dat er direct met React gewerkt kan worden, zonder verdere dependency
configuratie.
2. De tool moet een dev- en productieomgeving genereren.
3. De tool ondersteunt de punten genoemd in de pre-condities.
4. De tool installeert dependencies die geschreven code kan controleren op kwaliteit. (Denk aan property check, linting en 
tests)
5. De tool is open-source en is recentelijk (de afgelopen maand) nog geüpdatet. Dit geeft vertrouwen dat nieuwe versies van
dependencies regelmatig worden geïnstalleerd.
6. De tool ondersteunt hot-reloading, zodat wijzigingen in de code direct zichtbaar zijn in de browser zonder deze handmatig
te hoeven refreshen.
7. De documentatie voor het gebruik van de tool is duidelijk terug te vinden op de code repository.


## Hypothese
Vanuit de DWA-course zijn twee middelen aangereikt om een React project op te starten. Een van de twee was een van te voren
opgezette boilerplate en maakte gebruik van Webpack versie 1. De ander was een tool genaamd Create React App, gemaakt door
Facebook Incubator, die een applicatie genereert. De eerst valt af, want inmiddels is Webpack versie 3 al uit. Daarom luidt
de hypothese:

"Create React App is de meest geschikte tool om client-side boilerplate code te genereren"

Dit is de verwachting, omdat React en Create React App door dezelfde organisatie wordt gemaakt. Of dit uiteindelijk zo is,
moet blijken uit een 'comparison chart' waarin Create React App met andere tools wordt vergeleken. De hoogste score wint.

## Opzet onderzoek

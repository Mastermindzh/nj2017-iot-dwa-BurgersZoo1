# Project Burgers' Zoo 1

## Inleiding
Dierentuin Koninklijk Burgers' Zoo is een dierentuin gelegen te Arnhem op een mooie bossige, heuvelige locatie. Burgers' Zoo kampt met een probleem: (oudere) bezoekers laten zich negatief uit over de mobiliteit in het park. Dit is te wijten aan de heuvelige locatie. Voor dit probleem wordt door een groep van vijf ICT-studenten een technische oplossing bedacht. Deze README is een verkorte versie van een plan van aanpak (PvA), waarin verteld wordt hoe het probleem wordt aangepakt en welke producten opgeleverd gaan worden.

### Context
Om het probleem van Burgers' Zoo op te lossen wordt in opdracht van de Hogeschool Arnhem Nijmegen (HAN) een multi-disciplinair project gestart, bestaande uit negen minor studenten die ieder gespecialiseerd zijn in Internet Of Things (IoT) of webdevelopment. Het project is begonnen op 14 november 2017 en loopt door tot eind januari 2018.

Deze opdracht is al eerder uitgevoerd door een andere groep studenten. Zij hebben een proof of concept uitgewerkt en een adviesrapport opgesteld, waaruit blijkt dat het probleem verminderd kan worden door een speurtocht in het park te introduceren voor kinderen. Het plezier dat de kinderen hieraan beleven heeft volgens technisch manager Frank Simon een gunstig psychologisch effect op de (oudere) begeleidende bezoeker. "Als de kinderen het leuk hebben, hebben de ouders het ook leuk.", aldus Frank Simon.

### De opdracht
Het is aan de deelnemers van het huidige project om het proof of concept van de eerdere projectuitvoering uit te werken tot een werkbaar prototype. Het prototype bestaat uit een netwerk van fysieke scanpunten (denk aan OV-chipkaart) welke verspreid zijn over de hoofdwandelroute van Burgers' Zoo. Deze scanpunten kunnen kinderen, ook wel 'rangers' genoemd, scannen met een pas die verkregen is bij de entree. Voor zo'n scan krijgt een ranger uiteindenlijk een beloning. Hoe er wordt beloond komt later terug in het hoofdstuk 'Producten'.

## De opdrachtgever(s)
De twee opdrachtgevers zijn de HAN en Burgers' Zoo. In de volgende hoofdstukken worden de belangen op een rijtje gezet.

### Belang Burgers' Zoo
Burgers' Zoo wil:

- Een werkbaar prototype dat het mobiliteitsprobleem in het park verhelpt.
- Een werkbaar prototype dat het een herbezoek aan het park stimuleert.

### Belangen Hogeschool Arnhem Nijmegen
De school vereist aan het einde van het project:
- Een werkbaar en **testbaar** prototype.
- Een field trial. Dit is een onderzoek in Burgers' Zoo waarbij bezoekers gedurende één hele dag met het prototype werken. Bij dit onderzoek hoort een van te voren opgesteld evaluatieplan dat bestaat uit data logs, vragen en/of interviews.

Daarnaast wordt van de student per week verwacht dat hij/zij:
- Een logboek van zijn/haar werkzaamheden maakt.
- Een groepsplanning voor de volgende week maakt.
- Minimaal twee onderzoeken per week uitvoert naar nieuwe technieken 

(bron: http://cmdmethods.nl/)

## Probleemstelling en doel
Vanuit het bedrijf:
- Bezoekers laten zich negatief uit over de mobiliteit in het park. 
- De heuvelachtige stukken in het park vormen een drempel voor (oudere) bezoekers met een mobiliteitsbeperking om eerder terug te komen in het park.

Vanuit de HAN (t.o.v de vorige iteratie):
-Het proof of concept was niet robuust en kon niet veel scans aan.
-Het proof of concept moet voor langere tijd betrouwbaar zijn in verschillende klimaatomstandigheden.

Het doel van de opdracht is kinderen (bezoekers) zodanig plezier aan het park laten beleven dat dat een gunstig psychologisch effect heeft op hun (oudere) begeleidende bezoeker, zodat hun mobiliteitsprobleem als minder vervelend wordt beschouwd waardoor de drempel om terug te keren in het park wordt verlaagd. 

## Resultaat
Een belangrijke vraag resteert: 'Hoe wordt gemeten dat het doel behaald is?' In deze iteratie van het project kan daar nog geen antwoord op worden gegegeven. De huidige iteratie focust zich op de technische kant van het probleem dat uit de vorige iteratie is ontstaan: het maken van een werkbaar prototype.

Is dit werkbare prototype technisch haalbaar? Daarvoor worden de volgende resultaten door ons opgeleverd:

- 6 stabiele scanpunten die informatie over dieren af kunnen spelen. Wij gaan kijken hoe zo'n scanpunt Burgers' Zoo 'overleeft.' Denk daarbij aan omgevingsfactoren zoals: stroomvoorzieningen, wifi-sterkte, GPS-verbinding, tolerantie voor temperatuur en luchtvochtigheid.
- Een webapplicatie waarop de technische dienst meetstatistieken van de scanpunten kan bekijken en scanpunten in het park kan configureren.
- Een webapplicatie waarop een kind zijn statistieken van zijn dag als 'ranger' terug kan vinden.

## Projectgrenzen
Waar zit precies de grens tussen wat wel en niet wordt opgeleverd en op welke vragen wel of geen antwoord wordt gegeven? Hier volgt een korte opsomming:

**Wel:**
- Alle producten genoemd in hoofdstuk 'Resultaat' worden gebouwd en gedemonstreerd tijdens een field trial.
- Een evaluatierapport van de field trial. Wat ging goed, wat ging niet goed, hoe ervaarden de kinderen en hun begeleiders de gebruikersinteractie met de scanpunten en was het doel van de speurtoch duidelijk?
- Overdrachtsdocumentatie van het scanpunt waarin wordt uitgelegd welke hardware gebruikt is en waarom, en met welke omgevingsfactoren rekening gehouden wordt. De overdrachtsdocumentatie bevat ook screenshots van de webapplicatie voor de technische dienst.


**Niet:**
- Inzicht bieden in hoeverre kinderen blij worden van het park.
- Bijdrage aan educatieve concepten van de speurtocht.
- Onderhoud en doorontwikkeling van opgeleverde producten na afloop van deze iteratie.
- Een grafisch vormgegeven product dat er marketing-wise aantrekkelijk uit ziet voor bezoekers.

## Randvoorwaarden
- De hardware van het scanpunt blijft in bezit van de HAN en verhuist na elk bezoek aan het park mee terug naar de HAN.
- De source code van het scanpunt en de webapplicaties blijven in het bezit van de HAN.
- Mocht Burgers' Zoo een realisatie van (grafische) vormgeving willen van een scanpunt of van één van de webapplicaties, bijvoorbeeld omdat dat een positieve invloed zou kunnen hebben op het resultaat van de field trial, dan dienen daar t.z.t. nieuwe afspraken voor gemaakt te worden.

## Werkwijze & Organisatie
Deze iteratie van het project wordt uitgevoerd door negen studenten onder begeleiding van één docent. Dit hoofdstuk biedt inzicht in de interne organisatie van het project, hun werkwijze en hun verantwoordelijkheden.

### Contactgegevens en rolverdeling

| Naam        | Rol           | Email  | Studentgroep
| ------------- | :-------------: | ---------- | :----------: |
| Frank Simon      | Oprachtgever | f.simon@burgerszoo.nl | x |
| Lars Tijsma      | Docent      | l.tijsma@han.nl | x |
| Asher de Vries | Contactpersoon, software developer | asher.devries@gmail.com | Groep 1 |
| Sharon Franke | Planner, software developer | sharonfranke94@gmail.com | Groep 1 |
| Rick van Lieshout | Operation manager & deployment specialist, software developer | info@rickvanlieshout.com | Groep 1 |
| Thomas Kool | Architect, Embedded software engineer | thomas.erin999@gmail.com | Groep 1 |
| Sijmen Huizenga | Architect, Embedded software engineer | sijmenhuizenga@gmail.com | Groep 1 |
| Wessel Hendriks | Tester, software developer | whendriks1993@hotmail.com | Groep 2 |
| Nick van den Burg | Planner, Software developer | nickvdburg.nvdb@gmail.com | Groep 2 |
| Sebastiaan Vonk | Embedded software engineer | bas-vonk@gmail.com | Groep 2 |
| Arne Heil | Embedded software engineer | arneheil@hotmail.com | Groep 2 |

**Rollendefinities:**
Hieronder staat een tabel van projectrollen die extra duidelijkheid vereisen:

| Rol        | Verantwoordelijkheid 
| ------------- | :-------------: |
| Planner | Het maken van een projectplanning en het maken van een wekelijkse planning |
| Software developer | Ontwikkelaar die aan de server en/of webapplicatie werkt. |
| Embedded software engineer | Ontwikkelt software die op de hardware van het scanpunt draait. Is tevens verantwoordelijk voor het feit dat deze hardware kan communiceren met de server |
| Operation manager & deployment specialist | Het live zetten en 'in de lucht houden' van de web applicaties en de server |
| Architect | Maakt high-level ontwerpbesluiten over het systeem en onderzoekt hoe alle sub-systemen met elkaar in verband staan en over welke protocollen ze met elkaar communiceren  |
| Tester | Het opstellen van test-cases voor de field trial and het documenteren van testresultaten  |

### Werkwijze
We hebben twee disciplines (embedded en software) onderverdeeld in twee groepen. In het onderstaande schema staat weergegeven hoe twee groepen samen werken aan meerdere producten.  

![alt text](https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo1/blob/docs/documentatie/Werkwijze%20BurgersZoo%20IoT.png "Werkwijze")

- Hypothesis driven development

### Overlegmomenten

**Tussen de groepen**
Niet nodig, ze zitten naast elkaar in het lokaal.

**Tussen de HAN en Burgers' Zoo**
Op afspraak, elke twee of drie weken om de status van het product te bespreken.

## Producten

-FO (wat zit er in, hoe werk je met ons prototype, wat zijn de requirements?)
-TO (welke onderzoeken lossen welke problemen op? --> waar worden beslissingen gedocumenteerd?, hoe zit ons prototype in elkaar)
-Poot prototype
-Overdrachtdocumentatie
-Testrapport



Tussenproduct (week 3 - groepsproduct)

Functioneel ontwerp
Design specification (stepping stones)
Requirements list (stepping stones)
Software guidebook
Testplan
Werkwijze en Planning
Elke week (groepsproduct)

Korte beschrijving van het eindproduct en de manier van testen.
Planning en taakverdeling
Elke week (individele producten)

Nieuwe tech
twee nieuwe libraries
Onderzoekjes (gebaseerd op onderzoeksmethoden hieronder)
twee korte onderzoekjes
Reflectie
Lijst van uitgevoerde werkzaamheden
Relevante onderzoeksmethod


## Planning



# Testplan
## Inleiding
In november 2017 kreeg een groep ict-studenten van de Hogeschool Arnhem en Nijmegen de opdracht om een speurtochtsysteem voor Burgers’ Zoo als technisch concept uit te werken. Dit speurtochtsysteem is bedoeld voor kinderen die de dierentuin bezoeken. Het concept is dat kinderen “Ranger” kunnen worden als ze de speurtocht succesvol afronden. Het systeem moet antwoord geven op de vraag in hoeverre het technisch haalbaar is om in Burgers Zoo een speurtochtnetwerk te zetten. 

Het systeem wordt in de week van 10 januari 2018 getest tijdens een field trial in Burgers' Zoo. Parkbezoekers gaan dan echt met het systeem aan de slag. In dit document staat beschreven wat de verwachtingen zijn van deze trial, hoe getest gaat worden en hoe de resultaten worden vastgelegd.

<!-- toc -->

## Technische context
Het speurtochtsysteem bestaat uit een MESH-netwerk van 6 devices die elk een onderdeel van de speurtocht vertegenwoordigt. Een ranger kan zo'n device, ook wel een 'poot', 'speurpunt' of 'scanpunt' genoemd, scannen met een verkregen rangerpas. Deze pas maakt gebruik van NFC-technologie. Alle scanacties van een ranger worden online in de cloud opgeslagen. Deze cloud is ook onderdeel van het systeem.

Educatoren van Burgers’ Zoo kunnen online de speurpunten beheren, dit houdt kortgezegd in dat ze voor de speurpunten een aantal gegevens (naam, verblijf, dierengeluid, etc.) in kunnen voeren en weetjes aan een speurpunt toe kunnen voegen. Zo kan de inhoud en vormgeving van de speurtocht aangepast worden.

Wanneer een ranger het park verlaten heeft, kan hij/zij achteraf via de ranger webapplicatie de geschiedenis van al zijn parkbezoeken terug zien.


## Begrippenlijst

| Begrip                | Uitleg                                                                                                                                                          |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| De educatiemedewerker | Een medewerker van Burgers Zoo welke de verantwoording draagt voor de kennisoverdracht naar de bezoekers / kinderen.                                            |
| De technische dienst  | Medewerkers van de Burgers zoo welke gaan over technische zaken in het park. Dit kan gaan over het aanleggen van een stroompunt tot het vervangen van een lamp. |
| Poot                  | Onder “Poot” wordt het apparaat verstaan dat gebruikt wordt om progressie te registreren. Dit is dus het voorwerp waar een bezoeker de pas scant.               |
| Field Trial           | CMD methode kaart FIELD                                                                                                                                         |
| IoT                   | De groep studenten die als minor Internet of Things gekozen hebben. Dit zijn Sijmen Huizenga en Thomas Kool.                                                    |
| DWA                   | De groep studenten die als minor Develop Web Applications gekozen hebben. Dit zijn Sharon Franke, Rick van Lieshout en Asher de Vries.                          |
| Speurpunt             | Een volledig geconfigureerde poot welke in een speurtocht staat.                                                                                                |

## Doel
Het doel van de test is om de techniek van het systeem te testen: werkt het? We willen testen dat wat er in de webapplicatie geconfigureerd is, gereflecteerd wordt in de hardware en andersom: als er iets met de hardware gebeurt, is dat terug te zien in de webapplicatie. De test wordt uitgevoerd in het Mangrove gebied van Burgers' Zoo.

### Hypothese
Met de hypothese wordt antwoord gegeven op de vraag of onze gekozen oplossingsrichting in praktijk goed werkt:

> Wij geloven dat een meshnetwerk van zes poten in de Mangrove, gebruikmakend van NRF-communicatie zal resulteren in een stabiel speurtocht-ranger-systeem dat verbonden staat met de cloud. We weten dat we succesvol zijn als een speurtocht via de webapplicatie geconfigureerd wordt, en de door ranger gescande resultaten van diezelfde speurtocht terug kunnen zien, in een web applicatie die de data uit de verbonden cloud toont.

## Out of scope
Het doel van deze test is niet om het concept van een speurtocht te testen. Dit is namelijk door een vorige projectgroep gedaan. Het testen of de speurtocht aanslaat bij kinderen valt buiten de scope van deze test. Verder is het ook niet het doel om de usability van de beheerder applicatie te testen. In hoeverre educatoren het design van de applicatie aanslaat en in hoeverre de educatoren zelf hun weg kunnen vinden door de applicatie valt buiten de scope van deze test.

De gebouwde ranger applicatie is niet onderdeel van het doel van de test. Zoals te lezen is in de teststrategie wordt deze ranger applicatie mogelijk wel ingezet, maar het gebruik van en de reactie op de ranger applicatie zal niet worden geanalyseerd.


## Testopzet

De testopzet bestaat uit:

- 1 gedeployde webapplicatie voor de educatiemedewerker
- 1 gedeployde webapplicatie voor de ranger
- 1 gedeployde cloud
- 5 voorgeconfigureerde poten
- 1 niet-geconfigureerde poot

We zetten zelf een dag van te voren de speurtocht klaar met de juiste geluidsconfiguratie. Eén poot laten we niet-geconfigureerd staan, omdat het toevoegen van een poot aan een speurtocht een testscenario is.

## Testscenario's

### Scenario 1: Educatoren test

Om de administratie app te testen gaan de DWA’ers met minimaal één educatiemedewerker zitten om een extra speurpunt aan het systeem toe te voegen. Tijdens deze test zal een medewerker van de educatie de 6de poot configureren, als dit lukt dan heeft de speurtocht 6 actieve punten i.p.v 5.

Tegen de educatiemedewerker wordt de volgende uitleg gegeven:

De bedoeling is dat u een nieuw speurpunt toevoegt waar u een dierengeluid en een aantal weetjes aan koppelt. Dit alles moet op poot nummer 6 worden ingesteld. Ik zit er naast om te ondersteunen als u er niet uitkomt.

De volgende regels worden als ondersteuning op een blaadje ernaast gehouden:

- Bedenk een lokatienaam. V.b "Mangrove, ocean, safari etc.."
- Voeg een verblijf toe aan het speurpunt (daar staat de poot). V.b "krabben, vlinders, zeekoeien etc."
- Upload een weetje en voeg deze toe aan het speurpunt.
- Sla het speurpunt op

Iemand van de technische dienst maakt een .zip bestand van deze configuratie, zet het op een sd kaart en plaatst de sd kaart handmatig in de bijbehorende poot.

### Scenario 2: Techniek Test
Het plan om de techniek te testen is als volgt:

1) In de Mangrove worden zes poten geplaatst.
2) Een of twee DWA'er staan in Burgers' Zoo kleding bij de ingang van de Mangrove en delen passen uit aan voorbijkomende bezoekers. 
3) Wanneer de bezoekers bij de uitgang van de Mangrove komen worden de pasjes weer ingenomen door de DWA'ers.

#### Testgroep
Hoofd van educatie Burgers' Zoo mevr. Constanze Mager heeft aangegeven dat er niet met groepen kinderen getest kan worden in verband met het Ocean event dat in Januari plaatsvindt. Ze adviseert om met elke bezoeker te testen, omdat we toch maar 30 passen tot onze beschikking hebben en dat kans klein is dat de doelgroep van 6-12 jaar aanwezig is op de testdag. Omdat wij de techniek testen en niet de content zijn wij daarmee akkoord gegaan.

### Begeleiding

Tegelijk zullen een aantal IoT leden van de projectgroep het systeem digitaal monitoren. Zo zal continu worden geobserveerd of de onderdelen van het systeem verbonden blijven en correct blijven functioneren met écht gebruik.


## Verantwoordelijkheden

### IoT
De verantwoordelijkheid van IoT is het opzetten, monitoren en analyseren van de werking van de poten. Hierbij wordt bedoeld de hardware en de software die daarop draait. Ook valt de onderlinge communicatie hieronder. Ook dient IoT technische ondersteuning te geven als er gedurende de dag iets mis gaat met de poten of de gateway.

### DWA
De projectgroep is hierbij verantwoordelijk dat de applicatie op een testserver draait. Voor de test van de beheerders app zullen de medewerkers van educatie met de applicatie werken. Hierbij kijkt, minimaal één lid van DWA mee om ook technische ondersteuning te bieden. 

### Speurtocht begeleider
Twee projectleden zullen in Burgers' Zoo kleding bij de ingang en uitgang van de Mangrove staan om ranger pasjes uit te delen en te innen.




### Dagschema
De verantwoordelijkheden op de dag zelf ziet er als volgt uit:

|  	| Dag 1 	| Dag 2 	|
|-----------------------------	|------------------------------------------------------------	|-----------------------------------------------------------------------------------------	|
| Hardware 	| Sijmen Huizenga, Thomas Kool, Sebastiaan Vonk en Arne Heil 	| Sijmen Huizenga, Thomas Kool, Sebastiaan Vonk en Arne Heil 	|
| Monitoring poten en gateway 	| Sijmen Huizenga, Thomas Kool, Sebastiaan Vonk en Arne Heil 	| Sijmen Huizenga, Thomas Kool, Sebastiaan Vonk en Arne Heil 	|
| Admin app ondersteunen 	| n.v.t 	| Asher de Vries, Sharon Franke, Rick van Lieshout, Wessel Hendriks en Nick van der Burg, 	|
| Observeren 	| n.v.t 	| Gehele groep 	|
## Infrastructuur
- Hoe ziet de techniek eruit?
- Waar komen de poten te staan?

## Randvoorwaarden
- Toegang tot de dierentuin Burgers’ Zoo en de Mangrove
- Beschikbaarheid van medewerkers educatie voor de begeleiding van kinderen.
- Beschikbaarheid kinderen.
- Laptop met internetverbinding voor de beheerapplicatie test.
- Stroomvoorziening tijdens de test. Er moet stroomvoorziening zijn voor de laptops van de projectgroep en de gateway.
- Voor de poten moet Burgers’ Zoo stroompunten voorzien óf accupacks verzorgen.
- Deployment server moet beschikbaar zijn.




## Risico’s en Uitwijkstrategie
Mocht er geen stroomvoorziening vanuit Burgers’ Zoo kunnen regelen, kan er geen test uitgevoerd worden op lokatie. Dit zal dan uitgevoerd moeten worden op de HAN, waarbij er meer controle is over de stroomvoorziening. Hierbij zal de test ook afhangen van de vrijwilligers (studenten/docenten) die op de HAN rondlopen.

Op het moment dat er geen verbinding is met de deployment server moet deze lokaal (op een laptop) worden gehost.

Wanneer er geen laptop beschikbaar is vanuit Burgers’ Zoo met een werkende internet verbinding, kan de test helaas niet op locatie doorgaan.

Geen toegang tot het park of geen aanwezige kinderen of geen medewerkers beschikbaar zijn voor het begeleiden van kinderen kan de test op locatie ook niet doorgaan.

Mocht er geen NRF verbinding op te zetten zijn kan de code op de poten aangepast worden zodat er wel gescand kan worden maar wordt deze informatie niet verstuurd naar de gateway en backend. Hierdoor kan er toch testen met de kinderen op locatie.

## Dagplanning
De datum van de field-trial is 11 januari 2018.

| Tijd          | Wat                                                       | Waar?                       | Benodigdheden van Burgers' Zoo                                                                                                                                                                                                                                 | Wie?                                                                 | Verantwoordelijkheden                                                                                                                                                                                            |
|---------------|-----------------------------------------------------------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 9:00          | Aanvang                                                   | Kassa 1                     | n.v.t.                                                                                                                                                                                                                                                         | Frank Simon + hele groep                                             | n.v.t.                                                                                                                                                                                                           |
| 9:00 - 9:15   | Startup                                                   | Mangrove                    | 7 stroompunten (220V) op de exacte doorgegeven locaties, 20 centimeter vanaf het montagepunt van een speurpunt.  We hebben geen haspels en verlengsnoeren. Gelieve 1-1,5 meter aan haspelrest achter te laten zodat we wat speling hebben bij het montagepunt. | Frank Simon + hele groep                                             | Frank begeleidt ons door de Mangrove en laat de stroompunten zien die gereserveerd zijn en instrueert de groep wat wel en niet is toegestaan deze dag.                                                           |
| 9:15 - 11:00  | Monteren van 6 speurpunten                                | Mangrove                    | 7 stroompunten                                                                                                                                                                                                                                                 | Rick, Sharon, Sijmen, Nick, Wessel, Thomas, Sijmen                   | n.v.t.  *NIETS MAG IN HET WATER VALLEN*                                                                                                                                                                          |
| 11:00 - 12:00 | Testen software/hardware                                  | Mangrove                    | n.v.t.                                                                                                                                                                                                                                                         | Hardware: Thomas, Sijmen, Asher, Sharon <br /> <br /> Software: Rick | Hardware: verbindingsterkte testen Software: server starten, database resetten                                                                                                                                   |
| 12:00-13:00   | Speurpunten monitor test                                  | Een vergaderruimte met WIFI | 2 laptops van met een stabiele internetverbinding. (Twee worden mee genomen door Nick en Wessel, voor de zekerheid is het handig dat Burgers' Zoo ook twee laptops regelt als backup)                                                                          | Nick, Wessel, Frank en twee leden van de technische dienst.          | Nick + Wessel: Uitleggen van de test Frank + TD: Uitvoeren van de test                                                                                                                                           |
| 12:00-14:00   | Field trial (tegelijkertijd met speurpunten monitor test) | Mangrove                    | Bedrijfskleding Burgers' Zoo                                                                                                                                                                                                                                   | Sharon en Sijmen  (misschien Constanze Mager)                        | Pasjes uitdelen aan bezoekers, bezoekers instrueren over de speurtocht. Pasjes aan het einde van de Mangrove weer innemen. <br /><br /> (De rest loopt in de Mangrove rond om speurpunten in de gaten te houden) |
| 14:00-15:00   | Uitloop field trial/opruimen                              | Mangrove                    | n.v.t.                                                                                                                                                                                                                                                         | Alle studenten                                                       |                                                                                                                                                                                                                  |
| 15:00-15:20   | Opruimen                                                  | Mangrove/Parkeerplaats      | n.v.t.                                                                                                                                                                                                                                                         | Alle studenten                                                       | Speurpunten voorzichtig demonteren en opbergen in de auto van Rick.                                                                                                                                              |
| 15:20 - 15:50 | Afsluiting                                                | Bush restaurant             | n.v.t.                                                                                                                                                                                                                                                         | Iedereen                                                             | Vervolgafspraken maken voor einde van project                                                                                                                                                                    |

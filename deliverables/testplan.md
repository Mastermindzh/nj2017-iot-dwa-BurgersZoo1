# Testplan
## Inleiding
Om de technische haalbaarheid van het project te testen wordt er een zogeheten Field Trial gedaan in de week van 10 januari. Tijdens deze Field Trial zal er gebruik gemaakt worden van een groep werknemers en vrijwilligers van Burgers’ Zoo om het gemaakte systeem te testen. In dit document wordt beschreven wat het doel van de tests zijn, wat er getest gaat worden, hoe dit getest gaat worden en andere details die van belang zijn op de testdag.

<!-- toc -->

- [Context](#context)
- [Begrippenlijst](#begrippenlijst)
- [Doel](#doel)
- [Teststrategie](#teststrategie)
  * [Techniek Test](#techniek-test)
  * [Educatoren test](#educatoren-test)
- [Aanpak, beheer en verantwoordelijkheden](#aanpak-beheer-en-verantwoordelijkheden)
    + [Verantwoordelijkheden](#verantwoordelijkheden)
- [Infrastructuur](#infrastructuur)
- [Randvoorwaarden](#randvoorwaarden)
- [Risico’s en Uitwijkstrategie](#risicos-en-uitwijkstrategie)
- [Planning](#planning)

<!-- tocstop -->

## Context
In november 2017 kreeg een groep studenten van de Hogeschool Arnhem en Nijmegen de opdracht om een speurtocht systeem voor Burgers’ Zoo als concept uit te werken. Dit speurtocht systeem is bedoeld voor kinderen die de dierentuin bezoeken. Het concept is dat kinderen “Ranger” worden en ze naar dieren moeten speuren. Om dit te doen worden de kinderen voorzien van een pasje waarmee de voortgang wordt bijgehouden. Terwijl de kinderen de dierentuin bezoeken kunnen ze zoeken naar dieren ‘poten’. Deze poten zijn paaltjes met daarop wat hardware in de vorm van een dierenpoot. Wanneer een kind een poot vindt, en de pas tegen de poot aan houdt, wordt de pas gescand en wordt het bezoek geregistreerd. Na afloop van het bezoek kunnen kinderen online zien welke poten ze gevonden hebben en welke poten ze nog gemist hebben.

Educatoren van Burgers’ Zoo kunnen online de speurpunten beheren, dit houdt kortgezegd in dat ze voor de speurpunten een aantal gegevens (naam, verblijf, dierengeluid, etc.) in kunnen voeren en weetjes aan een speurpunt toe kunnen voegen. Zo kan de inhoud en vormgeving van de speurtocht aangepast worden.

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
Het doel van de test is tweeledig. Aan de ene kant is het doel van de test om de techniek te testen. Hiermee wordt antwoord gegeven op de vraag of de gekozen oplossingsrichting in de techniek ook in praktijk goed werkt. Uit de bevindingen vloeit een advies hoe in de toekomst verder ontwikkeld kan worden aan de techniek van de poot.
Aan de andere kant is het doel om te zien of de functionaliteiten die gebouwd zijn voor de educatoren aansluiten bij de verwachtingen van de educatoren. Door te onderzoeken in hoeverre de applicatie aansluit bij de verwachtingen van de educatoren kan een advies worden gegeven over de doorontwikkeling van de beheerders applicatie.

Het doel van deze test is niet om het concept van een ranger-speurtocht te testen. Dit is namelijk door een vorige projectgroep gedaan. Het testen of de speurtocht aanslaat bij kinderen valt buiten de scope van deze test. Verder is het ook niet het doel om de usability van de beheerder applicatie te testen. In hoeverre educatoren het design van de applicatie aanslaat en in hoeverre de educatoren zelf hun weg kunnen vinden door de applicatie valt buiten de scope van deze test.

De gebouwde ranger applicatie is niet onderdeel van het doel van de test. Zoals te lezen is in de teststrategie wordt deze ranger applicatie mogelijk wel ingezet, maar het gebruik van en de reactie op de ranger applicatie zal niet worden geanalyseerd.



## Teststrategie
### Techniek Test
Het plan om de techniek te testen is als volgt. In de Mangrove worden zes poten verstopt. Kinderen krijgen van de educatie medewerker elk een pasje en de opdracht om op zoek te gaan naar poten. Wanneer de kinderen bij de uitgang komen worden de pasjes weer ingenomen. <!--Een beloning voor de kinderen kan worden verzorgd door de educatieve medewerkers, maar dit is niet aan de projectgroep. -->

Door Frank is voorgesteld om de Kids Club van Burgers’ Zoo hiervoor te gebruiken. Dit is een groep kinderen die vaak bij Burgers’ Zoo komen en vaker ingezet worden voor tests van nieuwe onderdelen van Burgers’ Zoo.

Rond de plekken waar de poten zijn verstopt staan leden van de projectgroep opgesteld om te observeren hoe de kinderen omgaan met de poten. Op deze manier kan worden onderzocht of de poten naar behoren werken.

Tegelijk zullen een aantal IoT leden van de projectgroep het systeem digitaal in de gaten houden. Zo zal continu worden geobserveerd of de onderdelen van het systeem verbonden blijven en correct blijven functioneren met écht gebruik.

Op deze manier kan advies gegeven worden op de vraag of de huidige techniek stabiel genoeg is om in praktijk te gebruiken.

### Educatoren test

Om de administratie app te testen gaan de DWA’ers met minimaal één educatiemedewerker zitten om een extra speurpunt aan het systeem toe te voegen. Tijdens deze test zal een medewerker van de educatie de 6de poot configureren, als dit lukt dan heeft de speurtocht 6 actieve punten i.p.v 5.

Tegen de educatiemedewerker wordt de volgende uitleg gegeven:

De bedoeling is dat u een nieuw speurpunt toevoegt waar u een dierengeluid en een aantal weetjes aan koppelt. Dit alles moet op poot nummer 6 worden ingesteld. Ik zit er naast om te ondersteunen als u er niet uitkomt.

De volgende regels worden als ondersteuning op een blaadje ernaast gehouden.
U mag zelf een locatienaam bedenken, de fysieke poot staat in de Mangrove bij de … (+ locatie van poot 6, bepaald op de eerste dag)
U moet het verblijf “Mangrove” toevoegen aan het speurpunt (daar staat de poot)
U mag zelf kiezen welk dierengeluid u aan het speurpunt toevoegt.
U mag zelf kiezen welke weetjes u toevoegt, u moet minimaal 1 weetje toevoegen en maximaal 3.
Om te testen of bovenstaande educatorentest geslaagd is zal een IOTer of DWAer zich voordoen als technische dienst en de zip downloaden om op de poot te zetten.



## Aanpak, beheer en verantwoordelijkheden
Een dag voorafgaand aan de Field Trial zal een gedeelte van de projectgroep in Burgers’ Zoo aanwezig zijn. Zij zullen deze dag gebruiken ter voorbereiding. Zo zal op deze dag alles in orde worden gemaakt om tijdens de testdag zonder problemen te kunnen testen. Denk hierbij aan het opzetten en testen van alle hardware in de dierentuin.

De educatiemedewerkers van Burgers’ Zoo zijn verantwoordelijk voor de kinderen tijdens de speurtocht. Het is aan deze medewerkers om invulling te geven aan de begeleiding van de kinderen. De kinderen krijgen van de educatie medewerkers een pasje die ze kunnen gebruiken tijdens de speurtocht. De projectgroep zorgt dat deze tijdig terecht komen bij de medewerkers van Burgers’ Zoo. De educatie medewerkers zijn tijdens de dag verantwoordelijk voor het uitdelen en terug ontvangen van de pasjes.

De verantwoordelijkheid van IoT is het opzetten, monitoren en analyseren van de werking van de poten. Hierbij wordt bedoeld de hardware en de software die daarop draait. Ook valt de onderlinge communicatie hieronder. Ook dient IoT technische ondersteuning te geven als er gedurende de dag iets mis gaat met de poten of de gateway.

Voor de test van de beheerders app zullen de medewerkers van educatie met de applicatie werken. Hierbij kijkt, minimaal één lid van DWA mee om ook technische ondersteuning te bieden. Omdat wij geen usability testen is het nodig dat er een projectlid naast zit de testpersoon zit om ondersteuning te bieden zodat de juiste functionele eisen getest worden.

De projectgroep is hierbij verantwoordelijk dat de applicatie op een testserver draait. Burgers’ Zoo is zal hierbij een laptop met internetverbinding verzorgen.


#### Verantwoordelijkheden
De verantwoordelijkheden op de dag zelf ziet er als volgd uit:

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

Op het moment dat er geen verbinding is met de deployment server is moet deze lokaal, op een laptop moeten worden gehost.

Wanneer er geen laptop beschikbaar is vanuit Burgers’ Zoo met een werkende internet verbinding, kan de test helaas niet op locatie doorgaan.

Geen toegang tot het park of geen aanwezige kinderen of geen medewerkers beschikbaar zijn voor het begeleiden van kinderen kan de test op locatie ook niet doorgaan.

Mocht er geen NRF verbinding op te zetten zijn kan de code op de poten aangepast worden zodat er wel gescand kan worden maar wordt deze informatie niet verstuurd naar de gateway en backend. Hierdoor kan er toch testen met de kinderen op locatie.
## Planning
- Wanneer gaan we testen?
- Hoe ziet de test op die dag eruit?


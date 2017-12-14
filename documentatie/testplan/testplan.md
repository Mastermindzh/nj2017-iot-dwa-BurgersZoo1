# Testplan

## Inleiding

## Context
In november 2017 kreeg een groep studenten van de Hogeschool Arnhem en Nijmegen de opdracht om een speurtocht systeem voor Burgers’ Zoo als concept uit te werken. Dit speurtocht systeem is bedoeld voor kinderen die de dierentuin bezoeken. Het concept is dat kinderen krijgen bij binnenkomst van de dierentuin een pasje krijgen en daarmee een ranger worden. Terwijl kinderen de dierentuin bezoeken kunnen ze zoeken naar dieren ‘poten’. Deze poten zijn paaltjes met daarop een dierenpoot afdruk. Wanneer een kind een poot vindt, en de pas tegen de poot aan houdt, wordt de pas gescand en wordt het bezoek geregistreerd. Na afloop van het bezoek kunnen kinderen online zien welke poten ze gevonden hebben en welke poten ze nog gemist hebben. 

Educatoren van Burgers’ Zoo kunnen online de poten beheren. Onder andere kunnen ze de weetjes instellen en de locatie van poten configureren. 

- Wie zijn er betrokken?
- Hoe werkt burgers’ zoo?
	Wat is de rol van Educatoren? Wat is hun achtergrond? 
	Wat voorn kinderen bezoeken? Wat is de leeftijd? Wat is hun kennis?


## Doel
Aan de ene kant is het doel van de test om de techniek te testen. Hiermee wordt antwoord gegeven op de vraag of de gekozen oplossingsrichting in de techniek ook in praktijk goed blijven werken. Op deze manier kan een advies worden gegeven hoe in de toekomst verder ontwikkeld kan worden aan de poot.

Aan de andere kant is het doel om te zien of de functionaliteiten die gebouwd zijn voor de educatoren aansluiten bij de verwachtingen van de educatoren. Door te onderzoeken in hoeverre de applicatie aansluit bij de verwachtingen van de educatoren kan een advies worden gegeven over de doorontwikkeling van de beheerders applicatie.

Het doel van deze test is niet om het concept van een ranger-speurtocht te testen. Dit is namelijk door een vorige projectgroep gedaan. Het testen of de speurtocht aanslaat bij kinderen valt buiten de scope van deze test.

Verder is het ook niet het doel om de usability van de beheerder applicatie te testen. In hoeverre educatoren het design van de applicatie aanslaat en in hoeverre de educatoren zelf hun weg kunnen vinden door de applicatie valt buiten de scope van deze test. 

De gebouwde ranger applicatie is niet onderdeel van het doel van de test. Zoals te lezen is in de teststrategie wordt deze ranger applicatie mogelijk wel ingezet, maar het gebruik van en de reactie op de ranger applicatie zal niet worden geanalyseerd.

Naast de doelen van de projectgroep kan het zijn dat andere stakeholders andere doelen hebben tijdens deze test. Zo kan het zijn dat de educatiemedewerkers van Burgers’ Zoo het doel hebben om uit te vinden of het concept van een pootjes-speurtocht aanslaat bij kinderen.


## Teststrategie
#### Techniek Test
Het plan om de techniek te te testen is als volgt. In de Mangrove worden zes poten verstopt. Kinderen krijgen van de educatie medewerker elk een pasje en de opdracht om op zoek te gaan naar poten. Wanneer de kinderen bij de uitgang komen worden de pasjes weer ingenomen. Een beloning voor de kinderen kan worden verzorgd door de educatieve medewerkers, maar dit is niet aan de projectgroep. 

Door Frank is voorgesteld om de Kids Club van Burgers Zoo hiervoor te gebruiken. Dit is een groep kinderen die vaak bij Burgers Zoo komen en vaker ingezet worden voor tests van nieuwe onderdelen van Burgers Zoo. 

Rond de plekken waar de poten zijn verstopt staan leden van de projectgroep verborgen opgesteld om te observeren hoe de kinderen interactie met de poten. Op deze manier kan worden onderzocht of de poten naar behoren werken. 

Tegelijk zullen een aantal IoT leden van de projectgroep het systeem digitaal in de gaten houden. Zo zal continu worden geobserveerd of de onderdelen van het systeem verbonden blijven en correct blijven functioneren met écht gebruik.

Op deze manier kan antwoord worden gegeven op de vraag of de huidige techniek stabiel genoeg is om in praktijk te gebruiken.

#### Educatoren test

Wat is de aanpak voor het testen met de educatoren?


## Aanpak, beheer en verantwoordelijkheden
Een dag voorafgaand aan de praktijktest zal een gedeelte van de projectgroep in Burgers’ Zoo aanwezig zijn. Zij zullen deze dag gebruiken ter voorbereiding. Zo zal op deze dag alles in orde worden gemaakt om tijdens de testdag zonder problemen te kunnen testen. Denk hierbij aan het opzetten en testen van alle hardware in de dierentuin. 

Op de dag zelf zal begonnen worden met een volledige use-case test om te controleren of alle functionaliteiten werken volgens zoals ze behoren te werken. Deze tests zal zo vroeg mogelijk worden uitgevoerd zodat eventuele technische problemen opgelost kunnen worden.

De educatiemedewerkers van Burgers’ Zoo zijn altijd verantwoordelijk zijn voor de kinderen tijdens de speurtocht. Het is aan deze medewerkers om invulling te geven aan de begeleiding van de kinderen. Dit is niet aan de studenten van de projectgroep.

De kinderen krijgen van de educatie medewerkers een pasje die ze kunnen gebruiken tijdens de speurtocht. De projectgroep zorgt dat deze tijdig terecht komen bij de medewerkers van Burgers’ Zoo. De educatie medewerkers zijn tijdens de dag verantwoordelijk voor het uitdelen en terug ontvangen van de pasjes. 

De verantwoordelijkheid van de IoT’ers van de projectgroep is het opzetten, monitoren en analyseren de werking van het systeem. Ook technische ondersteuning als er gedurende de dag iets mis gaat met de poten of de gateway is deel van de verantwoordelijkheid voor de IoT’ers.

Voor de test van de beheerders app zullen de medewerkers van educatie met de applicatie werken. Hierbij kijkt, minimaal 1 DWA’er mee om ook technische ondersteuning te bieden. Omdat wij geen usability testen is het nodig dat er een projectlid naast zit de testpersoon zit om ondersteuning te bieden zodat de juiste functionele eisen getest worden. 

De projectgroep is hierbij verantwoordelijk dat de applicatie op een testserver draait. Burgers’ Zoo is zal hierbij een internetverbinding en laptop verzorgen.


#### Verantwoordelijkheden
De verantwoordelijkheden op de dag zelf ziet er als volgd uit:
> mischien komt hier nog een tabel?

## Infrastructuur
- Hoe ziet de techniek eruit?
- Waar komen de poten te staan?

## Randvoorwaarden
- Laptop met internet verbinding voor de beheersapplicatie test
- Stroomvoorziening tijdens de test. Minimaal stroompunten voor laptops van de projectgroep en de gateway. In dit geval moet Burgers’ Zoo accupacks verzorgen waarmee de Pootjes van stroom voorzien kunnen worden.
- Hoe zit het met geld?
- Zijn er andere zaken nodig?

## Risico’s en Uitwijkstrategie

- uitwijking bij geen stroompunten, evt han testen voor techniek
Mocht er geen stroomvoorziening vanuit Burgers’ Zoo kunnen regelen, kan er geen test uitgevoerd worden op lokatie. Dit zal dan uitgevoerd moeten worden op de HAN, waarbij er meer controle is over de stroomvoorziening. Hierbij zal de test ook afhangen van de vrijwilligers (studenten/docenten) die op de HAN rondlopen.

## Planning
- Wanneer gaan we testen?
- Hoe ziet de test op die dag eruit?


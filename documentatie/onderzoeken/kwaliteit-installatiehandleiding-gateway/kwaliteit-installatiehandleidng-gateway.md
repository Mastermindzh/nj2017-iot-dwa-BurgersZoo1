Onderzoek kwaliteit installatiehandleiding gateway
===============================

**Onderzoeksmethode (uit de cmd methods pack)**
Interview uit field.

## Hypothese
Ik verwacht meer te gaan leren over de kwaliteit van de [installatiehandleding voor de gateway]](../../opleverings-documentatie/installatie-handleiding-gateway.md). Deze moet helder zijn en gemakkelijk te installeren zijn, ook voor iemand zonder veel kennis van Linux/Raspberry Pi 3 [Raspbian](https://www.raspberrypi.org/downloads/raspbian/).

## Testopzet 
Ik ga het testen door iemand van een andere groep de handleiding te laten volgen. Ik zet de Raspberry Pi 3 met SSH op, omdat dit een vereiste is van de handleiding en daarna help ik niet meer. Na afloop stel ik een aantal vragen:

- Heb je al kennis van Linux?
- Heb je al eens met een Raspberry Pi 3 gewerkt?
- Waren de stappen goed te volgen?
- Zijn de stappen duidelijk genoeg?
- Heb je nog feedback?
 
 Ik hoop hieruit een conclusie te kunnen trekken of de handleiding duidelijk genoeg is. 
 
## Resultaat
### Antwoorden Sebastiaan

Heb je al kennis van Linux?
> Niet veel

Heb je al eens met een Raspberry Pi 3 gewerkt?

> Ja, maar niet vaak.

Waren de stappen goed te volgen?
> Ja. Helder beschreven waarvoor het dient en wat er ingevoerd moest worden.

Heb je nog feedback?
> Een paar puntjes op de i:
>
-   Bij het installeren en updaten wordt de volgende vraag gesteld: “Do you want
    to continue (y/n)”. Hierover wordt niets vermeld in de handleiding.
    Misschien is het een idee om te vermelden dat er een y ingevoerd moet worden
    om door te gaan.
>
Een andere mogelijke oplossing is om -y toe te voegen aan het commando.
>
-   Bij het installeren van Java wordt er gevraagd om akkoord te gaan met
    licentievoorwaarden. Hierover wordt niets vermeld in de handleiding. Het zou
    handig zijn als er vermeld wordt dat hiermee akkoord gegaan moet worden.
>
-   Er lijkt niets te gebeuren bij het opstarten van mongo, terwijl de mongo
    service wel wordt opgestart. Niet iedereen weet dat er niets in beeld komt.
    Om onduidelijkheden te voorkomen zou een korte toelichting in de handleiding
    welkom zijn.


### Conclusie
De handleiding is vrij duidelijk en goed uit te voeren. Bij Sebastiaan was er vrij snel doorheen en had een werkende gateway. Er zijn nog wel een aantal tips om de stappen makkelijker te maken, zoals het niet hoeven invoeren van y en dan enter als dit gevraagd wordt. Ook moet ik nog wat dingen verduidelijken, zoals wat de mongodb service is en doet, want dit is nu niet duidelijk voor bijvoorbeeld CMD'ers die dit project de volgende keer kunnen gaan oppakken. 



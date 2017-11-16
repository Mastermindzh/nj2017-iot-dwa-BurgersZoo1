# Docker gebruiken voor dev. deployment

## Onderzoeksmethode

**Categorie**: Workshop <br />
**Naam**: Prototyping

## Hypothese

Ik verwacht dat het werken met Docker de samenwerking op dezelfde codebase bevordert.

Concreet levert dit de volgende vraag op:

> Zal het werken met meerdere ontwikkelaars aan de zelfde code makkelijker gaan door het gebruik van Docker?

Dit is onderzocht door een aantal back-ends op te zetten en deze op minimaal 2 andere laptops testen zonder dat hiervoor extra software voor te installeren. Naast het back-end zonder al te veel functionaliteit is er ook een database opgezet welke via de host benaderbaar dient te zijn.

## Test opzet

Om de hoofdvraag te kunnen beantwoorden is een backend gemaakt met nodeJS dat het aantal bezoeken telt. Dit backend is te vinden in de map `back-end`. De data van de database wordt alleen in-memory opgeslagen.

Er zijn in totaal 3 containers opgezet in een docker-compose bestand (docker-compose.yml).
Deze 3 containers worden onderverdeeld in 1 database container en 2 back-end containers.

Het doel is nu dat een andere developers dit kan draaien door alleen docker te installeren en het commando `docker-compose up` te typen.

De testopzet is echter tweevoudig. Naast bovenstaande test is er nog een tweede test, het draaien van een vooropgezet en ingewikkelder docker-compose bestand. Om dit te doen clonen we [Dockerfiles repo van Mastermindzh](https://github.com/Mastermindzh/Dockerfiles.git) en typen we in de Elasticsearch + kibana het `docker-compose up` commando.
Om te controlleren of dit werkt gaat de tester naar localhost:9200 en localhost:5601 om te verifieren dat alles werkt.

## Resultaat

Het onderzoek is uitgevoerd op de laptop van twee collega's en op mijn eigen systeem. De resultaten hiervan staan in de tabel hieronder:

| Laptop            |      Resultaat back-end      | Resultaat database           | Resultaat dockerfiles                             |
|-------------------|:----------------------------:|------------------------------|---------------------------------------------------|
| Rick van Lieshout | Teller telt op na elk bezoek | Robo3t kan erbij             | Beide systemen runnen                             |
| Sharon Franke     | Teller telt op na elk bezoek | Robo3t kan erbij             | Kibana werkt, elasticsearch niet: vmmaps te laag. |
| Sijmen            | Teller telt op na elk bezoek | Robo3t is niet geïnstalleerd | Beide systemen runnen                             |

Als we dit resultaat analyseren dan zien we dat management software zoals Robo3t wel nog los geinstalleerd moet worden maar dat de rest vrijwel direct werkt. Het probleem met elasticsearch op Sharon's laptop heeft te maken met de memory allocatie voor de jvm op haar pc en kan dus veilig genegeerd worden.

## Conclusie

Zoals te zien uit de test is het opzetten en draaien van de systemen erg simpel. Werkt het op 1 pc dan werkt het op alle pc's met een aantal zeer zeldzame uitzonderingen. (bijv. de lagere vmmap count bij 1 van de pcs)

Docker lijkt dus een hele mooie technologie om te gebruiken tijdens dit project.

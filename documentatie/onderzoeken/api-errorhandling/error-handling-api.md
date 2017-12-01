# API error handling onderzoek
Tijdens het testen van de endpoints van de API kwam ik er achter dat er geen fatsoenlijke errorhandling in zat. Bij de minste fouten crashte de server al. Dit is natuurlijk niet de bedoeling. Daarna heb ik snel, lelijk en inefficiënt error handling ingebouwd dat in ieder geval de server niet zou crashen bij een verkeerde request. Dit onderzoek is bedoeld om er achter te komen hoe je op een efficiënte manier error handling aan kan pakken in een API.
## Onderzoeksmethode
Dit onderzoek zal zich richten op de onderzoeksmethode *best, good and bad practices* uit *Library*.

## Hypothese
Ik denk dat anderen al hebben nagedacht over error handling in een API. Ik denk dat hier zeker methoden voor zijn die algemeen geaccepteerd worden als 'best practice'.

## Testopzet
Wat ik merkte tijdens het inbouwen van snelle errorhandling was dat een simpele try catch niet werkt. Dit komt omdat de API async werkt. Ik ben dus op zoek gegaan naar hoe anderen dit doen. Dit heb ik gedaan door te googlen naar: "Best practices  API error handling".

Wat belangrijk is zijn de volgende dingen:
- Is toepasbaar op async calls
- Is toepasbaar binnen NodeJs
- Zorgt dat de server niet crasht bij een verkeerde request
- Zorgt voor juiste status codes
- Relatief snel te implementeren


## Resultaat
Bedenk van te voren wat je wil dat er gebeurd bij een 'foute' request. Moet er dan wel een error status code gegeven worden, of geef je een 200 status code 'ok' terug en doe je niks met de request? Dit is iets wat bijvoorbeeld Facebook toepast volgens: [Restful api design](https://apigee.com/about/blog/technology/restful-api-design-what-about-errors).
Gebruik HTTP status codes. (Dit leek me vrij duidelijk, je communiceert over http...., dit heb ik in het begin ook al gedaan.)
Er zijn 3 scenario's die voor kunnen komen.
- Alles is goed gegaan
- De applicatie heeft iets fout gedaan
- De API heeft iets fout gedaan

Als je van bovenstaande scenario's uit gaat, kun je gemakkelijk de status code erbij zoeken. Daarvoor kun je deze [lijst](https://httpstatuses.com/) gebruiken als hulpmiddel.
[Deze bron](http://blog.restcase.com/rest-api-error-codes-101/) zegt ook: Ga niet te ver in deze lijst. Kies er een aantal uit die je gaat gebruiken.

Bovenstaande informatie is handig voor het uitwerken van welke errors je geeft, maar was nog niet voldoende om mijn vragen te beantwoorden. Ik wilde graag op zoek naar **hoe** je dit daadwerkelijk het beste kunt doen binnen NodeJs. Daarom heb ik mijn zoekopdracht aangepast naar ''. Hier kwam ik op een [link van stackoverflow](https://stackoverflow.com/questions/7310521/node-js-best-practice-exception-handling/23368579#23368579), met daarbij een link naar de officiële pagina's van [NodeJs](https://www.joyent.com/node-js/production/design/errors).
In deze bronnen wordt er gezegd dat je de error handling gemakkelijk kan aanpakken door gebruik te maken van callbacks. Het eerste argument in een callback is altijd de error die je krijgt. Dus zorg er voor dat wanneer je een error verwacht dat je een callback geeft met de error.

Uiteindelijk heb ik gevonden dat de manier van error handling gelijk is aan de manier die ik nu gebruikt heb. Zorg dat je  een callback met error geeft wanneer je een error verwacht. Geef daarbij een duidelijke status code met beschrijving. Het is hierbij blijkbaar prima om met if statements te kijken of een error van toepassing is of niet. Dit had ik niet verwacht omdat ik het zelf lelijk vond om alles in if statements te zetten.

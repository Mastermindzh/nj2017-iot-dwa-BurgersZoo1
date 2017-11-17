# Onderzoek Generators



## Onderzoeksmethode
Dit onderzoek zal gedaan worden volgens de CMD Methodekaart **Comparison Chart** uit de categorie **Stepping Stones**. Het doel is om er achter te komen of er generators gebruikt kunnen worden om de projectopzet te vergemakkelijken. Als dit kan, welke zijn hier dan geschikt voor?

## Hypothese
Ik denk dat het zeker mogelijk is om generators te gebruiken in dit project. Wat op dit moment al duidelijk is dat er docker gebruikt gaat worden. Er zijn ideeën over welke andere tools er gebruikt gaan worden, maar hier zijn nog geen afspraken over, wel is het handig deze mee te nemen in dit onderzoek. De tools/software in overweging zijn: NodeJS, React, Mongo en Elasticsearch. Ik heb gehoord van loopback en dat dit de perfecte tool moet zijn om een API te genereren voor een project, als ik de verhalen mag geloven denk ik dat dit de beste oplossing is. Echter, ga ik op zoek naar alternatieven en ga ik kijken welke tool werkelijk handig is om te gebruiken in dit project.

## Testopzet
Eerst is er gezocht naar een aantal generators die gebruikt kunnen worden om een API te genereren. Dit is gedaan door te googlen naar 'api generators' en de eerste 9 links te pakken. Daar komt de volgende lijst uit:
- [Loopback](https://loopback.io/)
- [generator-api](https://www.npmjs.com/package/generator-api)
- [Swagger](https://swagger.io/)
- [Api Blueprint](https://apiblueprint.org/)
- [Apiary](https://apiary.io/)
- [api-platform](https://api-platform.com/)
- [Osprey](https://github.com/mulesoft/osprey)
- [yeoman](http://yeoman.io/generator/)
- [infyOm](http://labs.infyom.com/laravelgenerator/)

Om de bovenstaande tools te kunnen vergelijken is een lijst met criteria nodig. Deze is te lezen in de linker kant van de tabel. Voor elke tool is ingevuld in hoeverre hier aan voldaan wordt.

| criterium                 |                    Loopback                   |    Generator-api    |     Swagger     |   Api Blueprint   |          Apiary          |      api-platform      |          Ospray          |
|---------------------------|:---------------------------------------------:|:-------------------:|:---------------:|:-----------------:|:------------------------:|:----------------------:|:------------------------:|
| Huidige versie            |                      3.x                      |        1.5.2        |       3.0       |        1A9        |             ?            |          2.1.3         |            1.0           |
| Gratis                    |                       +                       |          +          |        +        |         +         | Free plan is gelimiteerd |            +           |             +            |
| Werkt op Linux en Windows |                       +                       |          +          |        +        |         +         |                          | via composer of docker |             ?            |
| Genereert API Docs        |                       +                       |          ?          |        +        |         +         |                          |            +           |             -            |
| Ondersteuning voor NodeJS |                       +                       |          +          |        +        |         +         |                          |            -           |             +            |
| Ondersteuning voor Mongo  |                       +                       |          +          |        +        |         +         |                          |            +           |             ?            |
| Genereert een Mock API    | Heeft een API explorer om endpoints te testen |          ?          | swagger codegen | via externe tools |                          |            +           |             ?            |
| Genereert tests           |                                               |          ?          |        +        | via externe tools |                          |            +           |             ?            |
| dependencies              |                  NodeJs, npm                  | yeoman, nodeJs, npm |                 |                   |                          |                        | Raml API definition, npm |
|                           |                                               |                     |                 |                   |                          |                        |                          |

Bovenstaande tabel is ingevuld met informatie die op de website of in de documentatie van de tools gevonden kan worden. Dit toont gelijk aan of de documentatie uitgebreid is of niet.
Tijdens het onderzoeken van Apiary kwam ik er achter dat die een gratis en betaalde versie heeft. De gratis versie is erg gelimiteerd. Aangezien wij gratis volledige software een must vinden is deze niet verder uitgewerkt. Ook heb ik gemerkt dat api blueprint veel externe tools gebruikt om hetzelfde te kunnen bereiken als andere tools. Daarom lijkt deze me ook minder geschikt.



## Resultaat

Ik zou als generator Loopback of Swagger aanraden. Deze twee komen als beste uit de test. Api blueprint eindigt ook hoog, maar hier zijn veel externe tools voor nodig, wat weer zorgt voor extra afhankelijkheden van software. Dit lijkt me handiger om te voorkomen.

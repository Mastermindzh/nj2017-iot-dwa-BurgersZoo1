# Docker gebruiken voor dev. deployment

## Onderzoeksmethode

**Categorie**: Workshop <br />
**Naam**: Prototyping

Voor het project is de use case "alle geluiden van een speurpunt downloaden", aangezien dit aantal kan varieren is het noodzakelijk deze geluiden in een archief aan te leveren. Er is gekozen om dit in .zip formaat te doen voor dit onderzoek aangezien dat het meest ondersteunde formaat is.

## Hypothese

Ik verwacht een nodejs library te vinden welke gemakkelijk een array aan bestandsnamen kan comprimeren in een .zip archief.

## Test opzet

Om te testen hoe goed de libraries een aantal bestanden kunnen comprimeren zal de map "[./bestanden](./bestanden)", welke gevuld is met een aantal willekeurige bestanden van [compression.ca](http://compression.ca/act/act-files.html), worden gecomprimeerd. Om te testen welke library nu echt het "beste" is moeten er een aantal criteria opgesteld worden, deze zijn als volgt (geordend op hoe belangrijk ze zijn):

- Executie tijd
- Compressieresultaat
- Async?
- Integratie met bestaande frameworks
- Aantal regels code
- Aantal regels code bij het maken van 2 zips

De libraries welke onderzocht worden zijn:

- [Archiver](https://www.npmjs.com/package/archiver)
- [node-zip](https://www.npmjs.com/package/node-zip)
- [adm-zip](https://www.npmjs.com/package/adm-zip)

## Resultaat

| Library                              | Archiver | Node-zip | adm-zip |
|--------------------------------------|----------|----------|---------|
| Regels code                          |     9    |    6      |    7     |
| Regels code bij het maken van 2 zips |     17   |    7      |    10     |
| Compressieresultaat                  |  Geslaagd / 3.4MB   |    Geslaagd / 3.4MB      |  Gefaald / 3.7MB       |
| Executie tijd                        |   6.960ms  |     666.778ms     |   1665.972ms      |
| Community                            |   Redelijk       |     Vrijwel geen     | Geen |
| Async                                |    Yep, gebruikt FS in het voorbeeld dus het kan Async      |     Yep, gebruikt FS in het voorbeeld dus het kan Async     | Yep, callback bij het schrijven |

Dit resultaat is zeer opvallend. adm-zip faalt simpelweg om een zip te maken, zowel met het Github als met het voorbeeld zoals te vinden in [archiver.js](./code/archiver.js).

## Conclusie



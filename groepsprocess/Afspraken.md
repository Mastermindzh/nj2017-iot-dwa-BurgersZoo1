# Groepsafspraken

Alle groepsafspraken die we maken worden hieronder gedocumenteerd.

## Uren aanwezig

- 9:15 - 5 uur in principe aanwezig. Als het anders is dan wordt het van tevoren gecomuniceerd.
- Reflectie verslagen worden elke vrijdagmiddag gedaan, hier is tijd voor vrijgemaakt.
- Onderzoeken worden gedaan, in overleg, zodra een onderwerp aangesneden wordt.
- Pauze is rond 12 uur en duurt 45 minuten.

## Ontwikkelmethoden

- Elke dag zal er s' ochtends om 9:15 een standup plaatsvinden en om 4:30 een Sitdown
- Elke week bepalen we wat we die week opleveren. Dit lijkt op sprints. 

## Werktechnieken

### Git
Er zal gebruik gemaakt worden van 1 repo met per product een map.
De workflow:
![Workflow](nj2017-iot-dwa-BurgersZoo1/groepsprocess/20171113_161454.jpg  "Workflow")

Overal wordt het woord 'poot' gebruikt voor het fisieke ding waar kinderen naar zoeken. Dus niet 'pootje' en niet 'scanpunt' en niet 'paal'.

Branch namen zijn altijd volledig kleine letters met het - karater om woorden te scheiden. Een van de volgende prefixes moeten gebruikt:
* `onderzoek/` Voor nieuwe onderzoeken.
* `doc/` Voor nieuwe documentatie documenten. Bijvoorbeeld functioneel ontwerp en domeinmodel.
* `feature/` Voor nieuwe functionaliteit in code.
* `hotfix/` Voor hotfixes in alle onderdelen

### Afspraken mtb naamgeving in repo
1. Mapnamen moeten altijd volledig in kleine letters, zonder hoofdletters en met - om verschillende woorden te splitten. Bijvoorbeeld:
`werwijze-gateway`, `domeinmodel`, `iot-klassediagram`. Dus NIET `functioneel_ontwerp` of `use cases` of `App Datastore` of `ArduinoVsRaspberry`.
2. Subproducten die behoren bij een groter product worden toegevoegd als submap aan de map van het hoofdproduct. Zo is domeinmodel onderdeel van het functioneel ontwerp, en hoort dus in de map `functioneel-ontwerp/domeinmodel`.
3. Afbeeldingen horende bij een bepaalde markdown file moeten in een map `images` naast de markdown file.
4. Wanneer er 1 markdown file in een map staat, of als er 1 markdown file gezien kan worden als belangrijkste bestand in een map, dan moet deze markdown file `readme.md` heten. Op deze manier wordt altijd iets nuttigs weergegeven als je op github een map bezoekt.

## Deliverables

In het kort de dingen die we op willen leveren:

- Poot
 	- Weetje
 	- Next
- Backend + database
- Web App (admin, medewerker van Burgers’ Zoo)
	- Geluidjes instellen
	- Poten toevoegen
	- Routes programmeren etc
- (optioneel) Web App --> om herbezoek interessant te maken, history
- (optioneel) Web App → om je pas te activeren, routes te kiezen etc.

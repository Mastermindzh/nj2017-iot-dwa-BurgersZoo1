Onderzoek validatie binenkomende gegevens
========
Voor dit onderzoek heb ik de methode literatuur onderzoek, uit library gebruikt

## Hypothese
Omdat we via Arduino's data gaan oversturen kan er nog wel eens wat mis gaan. Om dit te voorkomen kunnen we controlles uitvoeren op de berichten die we versturen, om te valideren dat er geen bitjes zijn omgevallen (en dus het bericht corrupt is geraakt). Dit is dus een andere controlle dan een bevestigingsbericht, of iets daadwerkelijk is aangekomen.

Voorbeeld van de probleemstelling:
De code die ` 3f ca b5 89` was opeens ` 3f ca l5 89`.
Dit komt doordat de b (binair `01101100`) naar een l (binair `01100100`) was veranderd. Het verschil is 1 bit waardoor de overgekomen data niet meer valide was. 

## Testopzet 
Ik een literatuur studie doen, waarbij ik ga kijken welke methode's er zijn en welke (naar mijn mening) relatief makkelijk te implementeren zijn waarbij weinig overhead nodig is. Er kunnen maar 32 bytes in een MySensors bericht verstuurd worden dus de overheid mag eigenlijk niet groter zijn dan 1 of 2 bytes.

Als voorbeeld gebruik ik de volgende nummers:

| HEX         	| DEC        	| BIN                             	|
|-------------	|------------	|---------------------------------	|
| 66 43 67 a1 	| 1715693473 	| 1100110010000110110011110100001 	|
| 26 21 76 a1 	| 639727265  	| 100110001000010111011010100001  	|

 
## Resultaat
### Two's complement
Bij het gebruik van een checksum kan bepaald worden of er een bit is veranderd.
Bij het gebruik van de volgende tool: [easyonlineconverter](http://easyonlineconverter.com/converters/checksum_converter.html) kan berekend worden wat de checksum is van een hex getal.
Bij het invoeren van `66 43 67 a1 = 4F` en bij het veranderen van de a naar een b komt het volgende er uit: `66 43 67 b1 = 3F`. 
Een potentieel bericht dat dan verstuurd wordt kan er zo uit zien: | bericht | checksum |.
Bij het versturen wordt de checksum ingevuld en wanneer bijvoorbeeld de gateway het bericht ontvangt gaat deze ook de checksum uitrekenen over het gehele bericht heen. Vervolgens worden de twee checksum waardes met elkaar vergeleken en wanneer deze niet overeenkomen zal het bericht genegeerd worden of opnieuw opgevraagd worden.

### Modulo
Via het berekenen van een modulo wordt er ook op het einde van het bericht weer een getal meegegeven. Er wordt een modulo berekening gedaan met een vooraf afgesproken getal, bijvoorbeeld 256.
`1715693473 % 256 = 161`. Bij het veranderen van 1 nummer komt er een ander controlle getal uit: `1715693475 % 256 = 163`. Deze wordt weer aan bijde kanten uitgerekend en op het moment dat deze niet gelijk zijn wordt het bericht weggegooid. 

### Bits
Bij het tellen van alle bits binnen het bericht en dit aantal dan aan het einde toevoegen kan ook een controlle middel zijn. Er zit alleen wel een groot nadeel aan: op het moment dat er bijvoorbeeld een 1 naar een 0 veranderd en ergens anders een 0 naar een 1 werkt deze controlle dan niet meer. 

Er wordt afgesproken om alle 1'tjes te tellen maar die blijven in deze sitatie hetzelfde waardoor door de controlle dus faalt. 

##Conclusie
Aan de hand van dit onderzoek zou ik zeggen dat de Two's complement oplossing of de modulo oplossing het beste. Van deze twee lijkt de modulo weer het simpelst om te implementeren, omdat dat een standaart berekening is en dus niet een apparte methode in verschillende talen geimplementeerd hoeft te worden.
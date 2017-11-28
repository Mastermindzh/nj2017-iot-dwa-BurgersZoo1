# Onderzoek alternatieven Arduino IDE
De standaard [Arduino ide](https://www.arduino.cc/en/Main/OldSoftwareReleases) is handig voor kleine projectjes en testjes, maar voor grotere projecten missen er een aantal functionaliteiten. In dit onderzoek is uitgezocht of er een alternatief voor de Arduino IDE is die we dit project kunnen gebruiken.

## Hypothese
Ik verwacht dat er wel alternatieven voor de Arduino IDE zijn, maar dat ze allemaal net niet perfect zijn en dat we daardoor het beste bij de Arduino IDE kunnen blijven.

## Testopzet
Eerst zal ik een Requirements List (Stepping Stones) opstellen door met de toekomstige gebruikers te praten. Vervolgens zal ik een online zoeken naar de verschillende opties (Literature study: Library). Deze opties zullen worden vergeleken met de requirements in een Comparison Chart (Stepping Stones). De beste optie zal met een Quality Review (Showroom) worden getest. 

## Requirements List
Na gesproken te hebben met Thomas en mijzelf zijn de volgende verlangens opgesteld voor een perfecte Arduino IDE alternatief:
1. [Smart completion](https://en.wikipedia.org/wiki/Autocomplete#In_source_code_editors)
2. [Lint support](https://en.wikipedia.org/wiki/Lint_%28software%29)
3. Compile & Upload sketches
4. Library Management (automatisch downloaden van benodigde libraries)

Dan zijn er nog een basis requirements die verplicht zijn voor alle requirements tijdens dit project:
* Gratis voor studenten
* Beschikbaar op Windows én Linux
* Wordt actief onderhouden

## Literature study
Na wat googlen heb ik de volgende alternatieven gevonden die aan de basis-requirements voldoen:
* [Visual Studio Code](https://code.visualstudio.com/) + [Arduino Plugin](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino)
* [Atom](https://atom.io/) + [PlatformIO](http://platformio.org/)

De volgende zijn afgevallen op basis-requirements:
* Visual Studio met Visualmicro valt af omdat Visual Studio niet op Linux draait.
* PROGRAMINO valt af omdat deze betaal is.


## Comparison Chart
De twee overgebleven tools zijn in onderstaande tabel afgezet tegen de requirements list.

|                              | Smart completion | Lint support | Compile & Upload  | Library Management |
| ---------------------------- | ---------------- | ------------ | ----------------- | ------------------ |
| Visual Studio Code + Arduino | ✘                | ✘            | ✓                 | ✘                  |
| Atom + PlatformIO            | ✓                | ✓            | ✓                 | ✓                  |

Te zien is dat Atom + PlatformIO in theorie de perfecte tool is. 

## Quality Review
Door Atom en PlatformIO te installeren en te testen is gevalideerd dat deze tool ook in praktijk goed werkt.

Installeer PlatformIO volgens de [instructies](http://docs.platformio.org/en/latest/ide/atom.html#installation). Deze installatie ging zonder problemen. Alle stappen zijn helder beschreven en zijn in vijf minuten uit te voeren.

Vervolgens is het aanmaken van een nieuw project super simpel. De code auto-complete werkt snel en correct. Ook de linter is handig. Tot slot werkt ook het compileren en uploaden.

Het beheren van dependent libraries werkt door in de `platformio.ini` de url's van libraries te specificeren. Tijdens het compileren worden de libraries gedownlaod en meegenomen met de compilatie. Dit werkt 1000x beter dan het handmatig downloaden van dependencies en op je computer opslaan.

## Conclusie
Het gebruik van de Atom + PlatformIO maakt het ontwikkelen aan een Arduino applicatie veel prettigger! 



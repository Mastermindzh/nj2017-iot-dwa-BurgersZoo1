# Audio Converter onderzoek
Het team van educatie kan nieuwe geluiden of weetjes uploaden naar de backend. Het maakt niet veel uit wat dit file type is omdat de backend dit moet converteren naar een formaat die de Arduino kan afspelen. Natuurlijk kan er voor gekozen worden dat team Educatie het juiste bestandstype upload, maar dit is niet echt gebruikersvriendelijk. Het audio type dat vereist is, is hetvolgende: `wav mono 8 bit 16kHz`.

sox inputfile.wav --norm=-1 -e unsigned-integer -b 8 -r 31250 -c 1 -t raw outputfile.raw
https://audio.online-convert.com/convert-to-wav

## Onderzoeksmethode
Dit onderzoek gaat bestaan uit twee onderzoeksmethoden, enderzijds **Literature Study** uit **Library**, en anderzijds **Prototype** uit **Stepping Stones**.

## Hypothese
Tijdens een paar tests die Sijmen heeft gedaan in zijn onderzoek naar audioformaten die de Arduino af kan spelen, kwam hij een commandline tool tegen die dit gemakkelijk kon aanpassen. Deze tool was **sox**. Ik denk dat deze tool geschikt is om te gebruiken omdat het commandline is, en dus via een bash script uitgevoerd kan worden, en het audioformaat dat vereist is ondersteund. Ik denk dat het prototype aan gaat tonen dat het mogelijk is om een script te schrijven dat, wanneer er een file geupload wordt, deze file converteerd naar een specifiek file formaat.

## Testopzet
Eerst ga ik een Literature Study uitvoeren om er achter te komen welke tools er beschikbaar zijn.
Vereisten voor de tools zijn:
- Het liefste React ondersteund, anders Commandline of npm ondersteund
- Accepteert veel formaten
- Kan converteren naar Mono 8 bit 16kHz
- Gemakkelijk in gebruik
- Ondersteund Linux
- Software is gratis

Het liefste wil ik uitkomen op een audio library die ondersteund wordt door react. Echter, kwam ik na zoeken er achter dat dit eigenlijk alleen voor react native gedaan is. Helaas moeten we de audio dus gaan converteren in de backend.

Na het literatuur onderzoek (zie resultaten hieronder), heb ik geprobeerd een prototype te maken voor de gevonden resultaten.

Omdat mp3 een [veel gebruikt audioformaat](https://www.soundstore.nl/infogids/verschillende-audioformaten) is, en gepatendeerd zodat ondersteuning moeilijker is voor sommige programma's, wil ik dit gebruiken als test case voor alle tools.

SOX was gemakkelijk te testen omdat ik hier het commando al voor had:
> sox inputfile.mp3 --norm=-1 -e unsigned-integer -b 8 -r 16k -c 1 -t wav outputfile.wav

De andere tool tests zijn te vinden in de map code. Mijn bevindingen staan hier in code bij, met eventuele uitleg hoe te installeren.

## Resultaat
Uit de Literature Study komen de volgende restultaten:
- [SOX](http://sox.sourceforge.net/) -> commandline
- [audioconverter](https://www.npmjs.com/package/audio-converter) -> npm ondersteund
- [sox-audio](https://www.npmjs.com/package/sox-audio) -> npm ondersteund

Deze tools heb ik getest door er een mp3 audio file mee te laten converteren naar een `wav mono 8 bit 16kHz`  file.
Dit heb ik vervolgens laten afspelen op een arduino door Arne. Het bleek dat de file wat zacht is, dit is een verbetering voor wanneer je dit in gebruik gaat nemen.
sox-audio is te gebruiken om een file te converten, wel moet je er op letten dat je extra dingen moet installeren, zoals sox en mp3 packages voor sox. Aangezien we docker gebruiken moet dit geen probleem zijn, dit kan gemakkelijk toegevoegd worden aan het docker bestand.
Al met al een geslaagd onderzoek.
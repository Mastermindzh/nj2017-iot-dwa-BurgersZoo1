# API generatie onderzoek
Het doel van dit onderzoek is om er achter te komen hoe je met loopback een API genereert, en of het technisch mogelijk is om hier eigen endpoints en methodes aan te koppelen. Voor de gateway zijn er een aantal endpoints nodig die niet automatisch gegenereerd kunnen worden, deze moeten dus handmatig toegevoegd worden, en werken in het geheel.

## Onderzoeksmethode
Dit onderzoek zal zich richten op de onderzoeksmethode *Prototyping* uit *Workshop*.

## Hypothese
Ik denk dat het mogelijk is om met loopback een api te genereren die handmatig aan te passen is. De vraag is alleen hoe dit technisch mogelijk is en welke handelingen gedaan moeten worden.

## Testopzet
Ik heb gekeken naar het datamodel en hier een versimpelde versie van op proberen te zetten in loopback. Daarbij heb ik ook gekeken naar de api specificatie van de endpoints die IOT nodig heeft bij het onwtikkelen van de poot en de gateway. Hierit blijkt dat om alles te testen dat de volgende dingen nodig zijn:
- een database
- een model
- een model met een relatie
- een eigen gemaakte endpoint

Dit heb ik geprobeerd te maken in loopback. Het project is te zien in de map code. Om het te runnen is het volgende commando nodig: ` node . `. loopback genereert ook een api explorer. Deze is te zien op `localhost:3000/explorer`.


## Resultaat
Loopback is een ideale tool om simpele REST API's te genereren. Zo was het gemakkelijk om een project op te zetten met een database en een model. Na wat uitvogelen was een relatie opzetten tussen moddels ook kinderspel. Waar echter de moeilijkheid zat, was het toevoegen van eigen endpoints. Hier ging meer tijd in zitten, dus ik voorspel ook moeilijkheden met het maken van alle IOT endpoints. Het is dus belangrijk dat deze goed getest worden, en dat hier meer tijd voor ingepland wordt.

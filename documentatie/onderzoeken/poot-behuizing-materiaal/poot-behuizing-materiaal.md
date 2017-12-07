# Materiaal Poot Behuizing
Dit onderzoek is geschreven in samenwerking tussen Sebastiaan en Sijmen.

## Aanleiding van het onderzoek    
De hardware van de poten moeten in elk gebied van de dierentuin kunnen werken. Dat wil zeggen dat het tegen alle omstandigheden zo goed mogelijk beschermd moet worden. In de Bush is het bijvoorbeeld warm en vochtig, terwijl het in de desert droog is. Poten die buiten staan moeten tegen alle weersomstandigheden kunnen zoals regen, sneeuw en zon.
 
De poten die we maken moeten bij het scannen niet staan wiebelen, of moeten niet kapot gaan mochten ze (om)vallen. De behuizing van de poten moet dus van een stevig materiaal gemaakt worden. Ook mag er geen kortsluiting ontstaan op het moment dat het regent, of de lucht te vochtig is. De behuizing moet dus nat kunnen worden, en zo luchtdicht mogelijk zijn.
 
Door onderzoek te doen naar mogelijke materialen en specificaties, kan er in beeld gebracht worden welke behuizingen voor nu, maar ook voor in de toekomst, de hardware kunnen beschermen.

## Hypothese
Aangezien de hardware van de poten goed beschermd moet worden tegen de omstandigheden van elk gebied binnen de dierentuin, is de verwachting dat er verschillende soorten materiaal gebruikt moeten worden.

## Testopzet
Dit onderzoek bestaat uit een theoretisch en praktisch gedeelte. In het eerste gedeelte zal door middel van een literatuuronderzoek (Library) onderzocht worden welke requirements er zijn aan de materialen van een paal en welke  materialen geschikt zijn met betrekking tot deze requirement. Vervolgens zal met behulp van een benchmark (Stepping Stones) onderzocht worden of de behuizing vanuit het literatuuronderzoek ook in praktijk geschikt zijn om NFC signaal door te laten.

## Resultaten literatuuronderzoek

Allereerst is er tijdens dit onderzoek nagedacht over verschillende soorten materiaal die de behuizing zouden kunnen vormen voor de hardware. Zoals eerder benoemd wordt hierbij rekening gehouden met een aantal punten:
* Het materiaal moet op zichzelf stevig genoeg zijn om in een kubusvorm gemaakt te worden. Dat wil zeggen dat het niet eerst door een ander materiaal in een juiste vorm gehouden moet worden. (Bijv. rubber)
* Het materiaal moet tegen temperaturen onder nul graden Celsius kunnen.
* Het materiaal moet tegen temperaturen tot 40 graden Celsius kunnen.
* Het materiaal moet tegen een hoge luchtvochtigheid kunnen.
* Het materiaal moet in neerslag kunnen staan.
* Het materiaal moet in de volle zon kunnen staan.
* Het materiaal moet niet kapot gaan als het in aanraking komt met een dier. (Bijvoorbeeld een vogel die op een poot gaat zitten en schade veroorzaakt met één van zijn nagels).
* Het materiaal moet voor 1 pootje maximaal 10 euro kosten.
 
Met deze lijst van punten is gezocht naar materialen en zijn deze beoordeeld of deze nuttig kunnen zijn voor ons bij de demo of mogelijk in de toekomst als de palen in de dierentuin komen te staan. Dit geeft onderstaande tabel als uitkomst.
 
[INSERT TABLE]


Voor nu is het zo dat een behuizing van kunststof of een behuizing van hout voor ons van toepassing is. Beide materialen zijn stevig en kunnen een klap opvangen. Daarnaast kunnen beide materialen vochtig worden, mits er goede voorbereidingen getroffen worden.

## Resultaten praktijkonderzoek
Het volgende punt waarnaar gekeken is, is of er door het materiaal nfc passen doorheen gescand kunnen worden. Als de scanner de pas niet kan vinden dan is het materiaal onbruikbaar.

Voor het onderzoeken of kunststof nfc signaal doorlaat hoeft geen onderzoek gedaan te worden. In de eerste weken van dit project is steeds een kunststof bakje gebruikt om de hardware in te beschermen tijdens de tests bij burgers’ zoo. Tijdens deze tests heeft de sensor altijd gewerkt. Dit bewijst dat kunsttof het nfc signiaal niet verstoort.


Om de doorlaatbaarheid van hout te testen is allereerst in de bouwmarkt gezocht naar plaatmateriaal dat betaalbaar is én geschikt is om in vochtige ruimtes (zoals badkamers) te gebruiken. Hierbij is ondervonden dat hardhout multiplex de beste optie is. Wanneer dit type hout juist bewerkt wordt voldoet dit aan al onze eisen. Voor het experiment zijn de volgende diktes hardhout multiplex bekeken:
* 12 mm
* 18 mm
* 26 mm
* 28 mm

Kleinere diktes zijn niet relevant om te testen, omdat dit te dun is om er een stevige kubus van te maken. Hout dunner dan 12 mm is te buigbaar en valt de kubus sneller uit elkaar. Alle diktes zijn getest met hardhout multiplex.

De test is uitgevoerd door de Arduino met de scanner en ledjes aan de ene kant van het hout te leggen, en de pas tegen de andere kant van het hout aan te leggen. Als de pas gescand kan worden, dan kan het signaal van de pas door de scanner gelezen worden. Op dat moment gaat er een Led branden.

Op onderstaande afbeelding is de testopstelling te zien bij een 18 mm dik stuk hout. De pas wordt tegen de onderkant van het hout aangehouden, terwijl de scanner aan de bovenkant van het hout merkt dat er contact is. De Arduino laat vervolgens de groene feedback Led branden.

![](images/opstelling.png)

Het resultaat van deze tests is dat alle diktes hout het nfc signaal goed doorlaten. Er is geen verschil te merken tussen de verschillende diktes en houttypen op het gebied van scanbaarheid.

## Conclusie 

Uit dit onderzoek blijkt dat de hardware van de poten met twee soorten materiaal beschermt kan worden. Kunststof en hout zijn beide materialen die stevig genoeg zijn om in kubusvorm te produceren. Wel is het van belang dat beide luchtdicht gemaakt worden, zodat er geen vocht bij de hardware kan komen. Daarnaast is het bij hout belangrijk om ervoor te zorgen dat het tegen vochtige omstandigheden kan. De dikte en houtsoort maakt tot 28 mm niet uit, aangezien er door die dikte gescand kan worden. 

# Onderzoek gateway framework
Onderzoeksmethode (uit de cmd method pack):
> Naam en categorie

## Hypothese  

Ik heb een aantal verwachtigen van het framework voor de applicatie die geschreven moet worden:

- Gebruikt weinig resources omdat de gateway moet kunnen werken op een raspberry pi 3B.  
- HTTP endpoints kunnen aanbieden
- Gemakkelijk te intergreren met het MySensor netwerk (moet naar seriële poort kunnen luisteren)

## Testopzet
Ik ga naar een aantal frameworks bekijken en gebruik hiervoor als bron: [op 8 Java RESTful Micro Frameworks – Pros/Cons](https://www.gajotres.net/best-available-java-restful-micro-frameworks/) om een eerste beeld te krijgen van voor een nadelen van de verschillende frameworks. Hierna ga ik een test opset maken van de top 3, waarbij ik ga kijken naar de eisen die gesteld zijn in de hypothese.

De top 3 die ik heb gemaakt en dus ga testen zijn de volgende frameworks:

- [Spring Boot](https://projects.spring.io/spring-boot/)
- [Spark](http://sparkjava.com/)
- [2LIGHT-REST-4J - LIGHT JAVA](https://networknt.github.io/light-rest-4j/)
 
## Resultaat
Beschrijf in hoeverre de test uitsluitsel heeft gegeven over de hypothese.


| Framework | Resource gebruik | HTTP endpoints | MySensors |
|-----------------------------|------------------|--------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Spring Boot | ~235 mb | Ja, zijn makkelijk te schrijven middels controllers. | Is uit te lezen op een apparte thread, hierop zou dan MySensors berichten geparst kunnen worden. |
| Spark | ~58 mb | Ja, dit zijn Java 8 Lambda's. Ook lezen de Spark methodes prettig. | Dit is op dezelfde manier als uitgelezen als bij Spring. Ook in dit framework kan er een apparte thread gestart wordten waarop de MySensors berichten geparst kunnen worden. |
| 2LIGHT-REST-4J - LIGHT JAVA | ? | Ik kreeg errors bij het gebruik van dit framework | n.v.t. |

### Spring
Spring is makkelijk op te zetten en ik had in ongeveer 10 minuten een werkend geheel. Er was 1 endpoint die reageerde op requests en de seriële poort werd gemonitoord op MySensors berichten.

### Spark
Spark is vrij makkelijk aan de praat te krijgen. Het kost misschien 2 minuten, inclusief het opzoeken van het framework, om een eerste HTTP endpoint op te starten. Hierna is het iets meer uitzoekwerk om het te scheiden, al komt dat ook door het feit dat ik nog geen ervaring heb met Spark (in tegenstelling tot Spring).

Het uitlezen van het MySensors netwerk, ook weer via de seriële poort, gaat ook vrij simpel en is vervolgens uit te bereiden naar het daadwerkelijk parsen van de berichten.

Een pluspunt van Spark is wel dat het resource gebruik vrij laag ligt, met ram gebruik rond de 58 mb.

### 2LIGHT-REST-4J - LIGHT JAVA
Tijdens het gebruik van dit framework kreeg ik errors bij het volgen van de tutorial op de website.

## Conclusie
Voor dit project gaan we gebruik maken van het `Spark` framework. Dit doen we omdat tijdens het testen van de prototypes naar voren is gekomen dat Spark aanzienelijk minder resources gebruikt. We werken met een Rapsberry Pi 3 en dan zullen we toch goed moeten kijken naar resourcegebruik. Beide frameworks konden met de seriële poort overweg, dus daardoor bleven bijde beschikbaar.

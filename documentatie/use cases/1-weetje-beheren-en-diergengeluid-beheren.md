# Use Case - Weetje Beheren / Dierengeluid Beheren
** LET OP: VERVANG IN DEZE USE-CASE HET WOORD 'weetje' DOOR 'dierengeluid' EN DAN KRIJG JE DE USE-CASE dierengeluid-beheren. **

**Primaire Actor**: Educator  

**Brief Description**  
Een educator kan met behulp van het systeem de weetjes die op een bepaalde poot staan beluisteren en aanpassen.

## Preconditie
* De educator heeft een audio bestand beschikbaar met het weetje.  
* De educator weet welke poot hij wil aanpassen.

## Postconditie
* De weetjes die geconfigureerd zijn in het systeem zijn te horen op het pootjes.

## Success scenario

|Gebruiker|Systeem|
|---|---|
|1. De educator kiest in het systeem om de weetjes van een poot aan te passen.| 2. Het systeem laat een lijst met beschikbare pootjes weergeven. |
| 3. De educator kiest de poot waarvan hij de weetjes wil beheren.  | 4. Het systeem toont de weetjes die nu op de poot staan. |
| 5. De educator upload een nieuw audio bestand. | 6. Het systeem upload het nieuwe audio bestand stukje voor stukje naar de poot. |
| | 7. Het systeem geeft de voortgang van de upload naar de poot weer. Einde use-case. |

## Alternatieve flow - Weetje verwijderen

| Gebruiker | Systeem |
| --- | --- |
| 5a. De educator kiest ervoor om een bestaand weetje van een poot te verwijderen. | Het systeem verwijdert het weetje vanuit de poot. | 
| | Einde use case |

## Alternatieve flow - Weetje beluisteren

| Gebruiker | Systeem |
| --- | --- |
| 5a. De educator kiest ervoor om een bestaand weetje te beluisteren. | Het systeem laat het weetje op de computer afspelen. | 
| | Einde use case |
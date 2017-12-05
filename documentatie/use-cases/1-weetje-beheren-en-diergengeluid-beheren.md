## Use Case 1 en 2 - Weetje Beheren / Dierengeluid Beheren

De onderstaande use case behandelt twee use cases:

1. Weetjes beheren
2. Dierengeluiden beheren

In de use case wordt een aantal keer naar weetje/dierengeluid gerefereerd, dit om duplicatie te voorkomen.

**Primaire Actor**: Educator

**Brief Description**
Een educator kan met behulp van het systeem de weetjes/dierengeluiden die op een bepaalde poot staan beluisteren en aanpassen.

### Preconditie
* De educator heeft een audio bestand beschikbaar met het weetje/dierengeluid.
* De educator weet welke poot hij wil aanpassen.

### Postconditie
* De weetjes/dierengeluiden die geconfigureerd zijn in het systeem zijn te horen op het pootjes.

### Success scenario

|Gebruiker|Systeem|
|---|---|
|1. De educator kiest in het systeem om de weetjes/dierengeluiden van een poot aan te passen.| 2. Het systeem laat een lijst met beschikbare pootjes weergeven. |
| 3. De educator kiest de poot waarvan hij de weetjes/dierengeluiden wil beheren.  | 4. Het systeem toont de weetjes/dierengeluiden die nu op de poot staan. |
| 5. De educator upload een nieuw audio bestand. | 6. Het systeem upload het nieuwe audio bestand stukje voor stukje naar de poot. |
| | 7. Het systeem geeft de voortgang van de upload naar de poot weer. Einde use case. |

### Alternatieve flow - Weetje/dierengeluid verwijderen

| Gebruiker | Systeem |
| --- | --- |
| 5a. De educator kiest ervoor om een bestaand weetje van een poot te verwijderen. | Het systeem verwijdert het weetje vanuit de poot. |
| | Einde use case |

### Alternatieve flow - Weetje/dierengeluid beluisteren

| Gebruiker | Systeem |
| --- | --- |
| 5a. De educator kiest ervoor om een bestaand weetje te beluisteren. | Het systeem laat het weetje op de computer afspelen. |
| | Einde use case |

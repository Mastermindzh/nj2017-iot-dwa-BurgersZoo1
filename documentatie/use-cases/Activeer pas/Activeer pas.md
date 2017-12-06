# Use Case 10 - Activeer Pas

**Primaire Actor**: Ranger
<br />
**Scope**: Ranger applicatie in de dierentuin
	
Een ranger wil zijn pas activeren door zijn bestaande ranger account er op te laden. Dit account is overgebleven van een vorig bezoek.

## Preconditie

De ranger heeft een pas ontvangen bij de kassa.

## Postconditie

Het account van de ranger is op de pas geladen.

## Success scenario

|Gebruiker|Systeem|
|---|---|
|1. De ranger scant zijn pas bij de zuil.|   |
|| 2. Herkent de ranger pas en geeft de mogelijkheid om een ranger code in te voeren.|
|3. De ranger `voert zijn code in.||
||4. Het systeem herkent de code en laad de ranger gegevens op de pas.|

## Alternatieve flow(s)

4. Het systeem herkent de code niet en geeft de ranger de optie om opnieuw de code in te voeren.
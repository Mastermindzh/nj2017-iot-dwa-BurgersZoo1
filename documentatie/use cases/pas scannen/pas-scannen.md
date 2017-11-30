### Use Case 1 - Pas scannen

**Primaire Actor**: Ranger
<br />
**Scope**: Het scannen van de pas door een gebruiker

De ranger moet de pas op verschillende momenten scannen om een actie te voltooien.

#### Preconditie

De pas welke de ranger gebruikt is geactiveerd en gebruiksklaar.

#### Postconditie

De pas is gescand.

#### Success scenario

|Gebruiker   |Systeem|
|---|---|
|1. De ranger houdt de pas tegen de poot|   |
||2. De pas wordt gescant en de relevante info beschikbaar gemaat|

#### Alternatieve flow(s)

2. De pas is niet geactiveerd, het systeem laat een rood lampje branden en stopt de actieve usecase

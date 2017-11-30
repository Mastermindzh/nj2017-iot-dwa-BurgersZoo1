### Use Case 11 - weetje aan poot toevoegen

**Primaire Actor**: Administrator
<br />
**Scope**: binnen het administrator paneel

Een administrator wil een weetje aan een poot toevoegen.

#### Preconditie

De administrator heeft toegang tot de unieke identifier van de poot en de poot waar de administrator het weetje van wil aanpassen is online.

#### Postconditie

Weetje op de poot is toegevoegd of gewijzigd.

#### Success scenario

|Gebruiker|Systeem|
|---|---|
|1. Navigeert naar de "Poot aanpassen" pagina|   |
|| 2. Toont de "Poot aanpassen" pagina|
|3. Kiest ervoor om het weetje aan te passen||
||4. Toont beschikbare weetjes|
|5. Kiest een nieuw weetje en klikt op "Aanpassen"||
||6. Slaat nieuw weetje op bij de desbetreffende paal|
||7. Update de poot met het nieuwe weetje |

#### Alternatieve flow(s)

7. Poot valt onder het updaten weg.
    1. Poot zal geüpdate worden zodra deze online komt.

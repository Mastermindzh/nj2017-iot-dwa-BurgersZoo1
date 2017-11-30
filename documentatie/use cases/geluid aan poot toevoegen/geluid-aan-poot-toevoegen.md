### Use Case 8 - geluid aan poot toevoegen

**Primaire Actor**: Administrator
<br />
**Scope**: binnen het administrator paneel

Een administrator wil een dierengeluid aan een poot toevoegen.

#### Preconditie

De administrator heeft toegang tot de unieke identifier van de poot en de poot waar de administrator het geluid van wil aanpassen is online.

#### Postconditie

Geluid op de poot is toegevoegd of gewijzigd.

#### Success scenario

|Gebruiker|Systeem|
|---|---|
|1. Navigeert naar de "Poot aanpassen" pagina|   |
|| 2. Toont de "Poot aanpassen" pagina|
|3. Kiest ervoor om het dierengeluid aan te passen||
||4. Toont beschikbare dierengeluiden|
|5. Kiest een nieuw dierengeluid en klikt op "Aanpassen"||
||6. Slaat nieuw dierengeluid op bij de desbetreffende paal|
||7. Update de poot met het nieuwe geluid |

#### Alternatieve flow(s)

7. Poot valt onder het updaten weg.
    1. Poot zal geüpdate worden zodra deze online komt.

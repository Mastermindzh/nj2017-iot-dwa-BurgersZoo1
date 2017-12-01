# Use Case 3 - Poot bezoeken

**Primaire Actor**: Ranger

**Brief Description**  
Een ranger bezoekt een poot wanneer de ranger de pas tegen de poot aanhoud. De poot laat een weetje horen.

## Preconditie
* De poot is geconfigureerd met 1 of meerdere weetjes. 
* De ranger heeft een pas die bekend is binnen het systeem.
* De ranger heeft nog niet eerder deze poot bezocht

## Postconditie
* De ranger heeft het weetje gehooord. 
* Het bezoek van de ranger is terug te zien in de ranger-app.

## Success scenario

|Gebruiker|Systeem|
|---|---|
| 1. De ranger houdt de rangerpas tegen de poot aan. | 2. De poot laat een weetje horen. |
| | Het systeem laat een dierengeluid horen. |
| | Het systeem registreert het bezoek van deze ranger in het systeem. |

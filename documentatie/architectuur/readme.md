# Architectuur
In onderstaande afbeelding is een globale schets van de architectuur weergegeven.

![Architectuur](architectuur.png)

De poten zullen communiceren met de twee backends van de twee groepen via een gateway. Deze gateway bestaat uit een Arduino en een Raspberry Pi. De Arduino zal communiceren via NRF met de poten en alle informatie doorsturen naar de Raspberry Pi. De Pi zal via HTTP/JSON communiceren met de backend's. De Pi kan op zijn beurt weer de Arduino binnen de gateawy aansturen om zo informatie bij de poten te krijgen.

De architectuur van de poot is in onderstaande afbeelding in meer detail te zien.

![Architectuur Poot](architectuur-poot.png)

De poot bestaat uit twee Arduino's. Er is één Arduino die volledig gaat over het afspelen van audio. In een later stadium zou deze Arduino ook verantwoordelijk worden voor het opslaan van nieuw ontvangde audiobestanden. De Audio Arduino wordt aangestuurd door de Master Arduino.

De Master Arduino is verantwoordeling voor alle primaire functionaliteiten en het aansturen van de Audio ARduino. Zo zal de master arduino een NFC scanner hebben om passen te detecteren. Ook zal deze Master Arduino de temperatuur en luchtvochtigheid meten. De Master Arduino staat via de NRF24 chip in verbinding met de gateawy en zal zo de gateway op de hoogte houden over welke passen zijn langsgeweest. 
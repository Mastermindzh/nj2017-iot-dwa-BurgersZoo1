# Sequence diagrams

## Nieuwe poot aanmelden
Link naar use case: [Link naar use case](linktousecase.nl) 

---
Dit sequence diagram beschrijft de gebeurtenissen bij het aanmelden van een nieuwe poot. Deze poot heeft nog geen configuraties. De bedoeling is dat de poot een ID krijgt van de backend waarmee de poot identificeerbaar is. 
![Nieuwe poot aanmelden](nieuwe_poot_aanmelden.png) 

## Online komen poot
Link naar use case: [Link naar use case](linktousecase.nl) 

---
Wanneer een poot uit heeft gestaan en weer online komt nadat een poot offline is geweest (bijvoorbeeld voor onderhoud), zal deze een opstart sequence doorlopen. Wanneer een poot voor het eerst wordt opgestart zal de sequence diagram voor "*Nieuwe poot aanmelden*" doorlopen worden. 

Na het aanmelden bij de gateway zal de gateway aan de backend vragen naar de configuratie van de poot. De backend zal de configuratie terug sturen naar de gateway. De gateway zal dan de audio bestanden downloaden en lokaal ook opslaan. 

De audio bestanden die nog niet op de poot voorkomen zullen dan verzonden worden naar de poot en op de gateway wordt bijgewerkt welke audo files op de poot staan. Gedurende het verzenden van de audio files zal de gateway ook updates naar de backend sturen om de voortgang te melden.


![Online komen poot](online_komen_poot.png) 

## Poot versturen logdata
Link naar use case: [Link naar use case](linktousecase.nl) 

---
De poot verstuurd de logdata naar de gateway. De gateway zal een timestamp toevoegen en een JSON object opbouwen. Dit object wordt doorgestuurd naar de backend.

![Versutren logdata](Poot_verstuurt_Logdata.png)


## Ranger bezoekt poot
Link naar use case: [Link naar use case](linktousecase.nl) 

---
Wanneer een ranger een poot bezoekt scant de ranger de NFC kaart. De poot verstuurt het id dat op de pas staat door naar de gateway. De gateway voegt een timestamp toe aan het het scannen van de kaart en stuurt dit door naar de backend. 

![Ranger bezoekt poot](ranger_bezoekt_poot.png)
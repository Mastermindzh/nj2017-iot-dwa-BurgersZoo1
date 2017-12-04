Het Burgers' Zoo Ranger systeem bestaat uit tien fysieke componenten waarop source code draait:

- Een Raspberry Pi
- Twee back-ends
- Twee database servers
- Drie clients
- Twee Arduino's

Dit document beschrijft het systeem op architectuur niveau, inclusief subsystemen, services, hardware mapping en gebruikte protocollen. Het doel is om de lezer te informeren over het systeem, zonder in de code te hoeven duiken. Naast informatie is er ook argumentatie voor de gemaakte keuzes.

Normaal gesproken is een technisch ontwerp volgens de HAN een gedetailleerd document, met gedefiniëerde classes, dependencies, interfaces, packages en sequence diagrammen. Dit zit er nu niet in, omdat het maken er van te veel overhead creëert vanwege wijzigende requirements en prototyping. Het [uitgebreide functioneel ontwerp (FO)](https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo1/blob/master/deliverables/functioneel%20ontwerp.md) en [de api specificatie](https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo1/blob/master/deliverables/functioneel%20ontwerp.md) bevatten samen met dit technisch ontwerp genoeg informatie om de relatief kleine code base te begrijpen.


# Front-end boilerplate generator

## Onderzoeksmethode

**Categorie**: Proof of concept <br />
**Naam**: Readable code met React Redux en lodash

## Inleiding
Alle React webapplicaties van het Burgers' Zoo Ranger project zijn geschreven in React en maken gebruik van Redux, een library voor
app-state management. Met state wordt bedoeld: een set van mutable data, opgeslagen in wat een 'redux store' wordt genoemd.
Om data in de de store op te slaan schrijf je functies die inkomende data in het goede stukje van de store plaats. Dit worden 'reducers'
genoemd. Deze reducers kunnen naar verloop van tijd groot en moeilijk leesbaar worden. Doormiddel van een proof of concept wordt
onderzocht of lodash in combinatie met Redux kan zorgen voor leesbare (en daarmee bewerkbare) code.

Het onderzoek is uitgevoerd in samenwerking met Rick van Lieshout.

## Wat is Redux?
Als je nog niet weet wat Redux is, helpt dit hoofdstuk je even op gang. Met Redux beheer je state op applicatieniveau. Redux bestaat
uit een aantal onderdelen (behalve de ui view):

![Redux](https://cdn-images-1.medium.com/max/1200/1*bvAMo9Ou8yI3-zzB3aoMnA.png)

Het belangrijkste dat je moet onthouden is dit:

- store: opslagplaats van alle data als één grote POJO
- reducers: pure functies die de app-state bewerken op basis van binnengekregen data
- action creators: functies die iets doen, een API benaderen of iets uitrekenen. De uitkomst geven ze door aan de reducers. Dat wordt dispatchen genoemd.

**Doel**<br />


## Hypothese


## Testopzet


## Resultaat


## Conclusie


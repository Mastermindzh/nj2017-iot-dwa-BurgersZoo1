# Readable code met React Redux en lodash

## Onderzoeksmethode

**Categorie**: Workshop <br />
**Naam**: Proof of concept

## Inleiding
Alle React webapplicaties van het Burgers' Zoo Ranger project zijn geschreven in React en maken gebruik van Redux, een library voor
app-state management. Met state wordt bedoeld: een set van mutable data, opgeslagen in wat een 'Redux store' wordt genoemd.
Om data in de de store op te slaan schrijf je functies die inkomende data in het goede stukje van de store plaatst. Deze functies worden 'reducers'
genoemd. Deze reducers kunnen naar verloop van tijd groot en moeilijk leesbaar worden. Door middel van een proof of concept wordt
onderzocht of Lodash, een utility library voor JavaScript, in combinatie met Redux kan zorgen voor leesbare (en daarmee bewerkbare) code.

Het onderzoek is uitgevoerd in samenwerking met Rick van Lieshout.

## Wat is Redux?
Als je nog niet weet wat Redux is, helpt dit hoofdstuk je even op gang. Met Redux beheer je state op applicatieniveau. Redux bestaat
uit een aantal onderdelen (behalve de ui view uit de onderstaande afbeelding):

![Redux](https://cdn-images-1.medium.com/max/1200/1*bvAMo9Ou8yI3-zzB3aoMnA.png)

Het belangrijkste dat je moet onthouden is wat de onderdelen doen:

- __store__: opslagplaats van alle data als één groot object (POJO).
- __reducers__: pure functies die de app-state bewerken op basis van binnengekregen data uit zgn. action creators.
- __action creators__: functies die iets doen, bijvoorbeeld een API benaderen of iets uitrekenen. De uitkomst geven ze door aan de reducers. Dat doorgeven wordt 'dispatchen' genoemd.

## Doel

Reducers schrijven is soms vervelend om te doen. Zeker als je een hoop boilerplate code moet schrijven om een enkel (diepgenest) object uit de store te bewerken. Denk bijvoorbeeld aan het updaten van een gebruiker uit een lijst met gebruikers:

```
...
//neem aan dat 'action' een payload heeft met een user die geüpdatet moet worden

switch (action.type) {

  case UPDATE_USER:
    const newUsersState = state.users.map( user => {
      if (user.id === action.payload.user.id) {
        return action.payload.user;
      }
      return user;
    });
    return {...state, users: newUsersState}
  default :
    return state
    
}

...

```

Het doel van het onderzoek is om er voor te zorgen dat de bovenstaande boilerplate code niet voor elke update actie geschreven hoeft te worden in verschillende reducers.


## Hypothese
Lodash is een utility library voor JavaScript. Het haalt de spreekwoordelijke angel uit het bewerken van oa. arrays, objecten, strings en numbers. Omdat de redux store een object is, verwachten we dat Lodash ook hierbij kan helpen. Daarom luidt de hypothese:

_'Er wordt verwacht dat Lodash zorgt voor minder lines of code in Redux reducers, waardoor reducers leesbaarder en onderhoudbaarder worden.'_

## Testopzet
De Burgers' Zoo admin app wordt gekoppeld aan de back-end (API). Als dat toch sowieso moet gebeuren volgens de projectplanning, kan dit gelijk worden gebruikt als testopzet. Er wordt gelinkt naar een pullrequest waarin een reducer zonder Lodash is gemaakt, en vervolgens gerefactored is naar Lodash.

## Resultaat
Een array met objecten kun je met Lodash veranderen in een object, met id's als key's. Hier is een voorbeeld:

```
  [
     {
      id: 'Xfgs6',
      naam: 'Kees'
     },
     {
      id: 'CQh61',
      naam: 'Tessa'
     }
  ] 
  
  //wordt -->
  
  {
    Xfgs6: { id: 'Xfgs6', naam: 'Kees' },
    CQh61: { id: 'CQh61', naam: 'Tessa' }
  }
```

Dit is toegepast in een [pullrequest](https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo1/pull/94/files) van de Admin App. Met de ```mapKeys()``` functie van Lodash kan je van een object een property kiezen die je als key wil gaan gebruiken. In de meeste gevallen is dat een unieke ID:

```
import initialState from './initialState';
import _ from 'lodash';
import { SPEURPUNT_ACTION_TYPES } from './../../constants/actionTypes';


export default function speurpuntReducer(state = initialState, action) {
  switch (action.type) {

    case SPEURPUNT_ACTION_TYPES.FETCH_SPEURPUNTEN:
      return {...state, speurpunten: _.mapKeys(action.payload, "id")};

    default:
      return state;

  }


}
```

We zijn er nog niet, want hoe zorgt dit nu voor minder code? Stel je voor dat we een speurpunt willen updaten of verwijderen. Dan kan dankzij Lodash op deze manier:

```
...
      
  case SPEURPUNT_ACTION_TYPES.UPDATE_SPEURPUNT:
    return {...state, [action.payload.id]: action.payload}; //Kan dankzij _.mapKeys() van Lodash!
  
  case SPEURPUNT_ACTION_TYPES.DELETE_SPEURPUNT:
    return _.omit(state, action.payload.id);     //Lodash!

...

//in plaats van 

...

  case SPEURPUNT_ACTION_TYPES.UPDATE_SPEURPUNT:
    const newSpeurpuntState = state.speurpunten.map( speurpunt => {
      if (speurpunt.id === action.payload.speurpunt.id) {
        return action.payload.speurpunt;
      }
      return speurpunt;
    });
    return {...state,  speurpunten: newSpeurpuntState}
    
   
  case SPEURPUNT_ACTION_TYPES.DELETE_SPEURPUNT:
    const newSpeurpuntState = state.speurpunten.filter( speurpunt => {
      return speurpunt.id !== action.payload.id }
    );
    return {...state, speurpunten: newSpeurpuntState};

...

```

## Conclusie
Dankzij Lodash is de code in reducers veel leesbaarder en bewerkbaarder geworden. Het aantal lines of code is teruggebracht van 13 naar 4 voor een simpel UPDATE en DELETE statement. De hypothese is dus bevestigd. 

# Webapps

De web applicaties zijn drie [React](https://reactjs.org/) applicaties, geschreven in Ecmascript 6. Deze applicaties maken
gebruik van een aantal technieken en tools die in dit hoofdstuk beschreven staan.

## React

![react](https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg)

React is een JavaScript library om single page web applicaties te maken. Er is voor React gekozen, omdat dat tijdens
de DWA-course onderwezen is.

## Redux

Het maken van een applicatie in React kan snel uit de hand lopen als je applicatie groter wordt. Om structuur in de applicatie
aan te brengen is gekozen voor Redux.

Met Redux beheer je state op applicatieniveau. Redux bestaat
uit een aantal onderdelen (behalve de ui view uit de onderstaande afbeelding):

![Redux](https://cdn-images-1.medium.com/max/1200/1*bvAMo9Ou8yI3-zzB3aoMnA.png)

Het belangrijkste dat je moet onthouden is wat de onderdelen doen:

- __store__: opslagplaats van alle data als één groot object (POJO).
- __reducers__: pure functies die de app-state bewerken op basis van binnengekregen data uit zgn. action creators.
- __action creators__: functies die iets doen, bijvoorbeeld een API benaderen of iets uitrekenen. De uitkomst geven ze door aan de reducers. Dat doorgeven wordt 'dispatchen' genoemd.

In een kort ondezoek is MobX als alternatief onderzocht, maar dat is niet gebruikt vanwege de kleine community plus het
feit dat iedereen binnen de groep dat dan moet leren. Met Redux waren een aantal ontwikkelaars al bekend.


## Folderindeling (package structuur)

De folderindeling hanteert de naamgevingen van Redux, zodat iedereen die weet wat Redux is meteen snapt waar files moeten komen
te staan.

```
.
├── /build/                     # De folder voor gecompileerde output
├── /node_modules/              # 3rd-party libraries en utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators zoals beschreven in Redx
│   ├── /components/            # React components die enkel UI logica bevatten
│   ├── /constants/             # Constantes die over meerdere files gebruikt worden
│   ├── /containers/            # React components die toegang hebben tot de Redux app state
│   ├── /reducers/              # Redux reducers
│   ├── /routes/                # Page/screen components met routing informatie
│   ├── /store/                 # Bevat configuratie die nodig is om de Redux store op te bouwen
│   ├── /styles/                # Bevat styling files die over meerdere componenten gebruikt wordt
│   ├── /index.ejs              # Template voor de index.html file, wordt door webpack gebruikt
│   ├── /index.jsx              # Startup script, koppelt React aan de DOM
│   └── ...                     # Overige core files die door webpack gebruikt worden.
├── /tools/                     # Build automation scripts en utilities die webpack gebruikt.
├── package.json                # De lijst met 3rd party libraries en utilities
```

## Webpack

![webpackimage](https://cdn-images-1.medium.com/max/1920/1*gdoQ1_5OID90wf1eLTFvWw.png)

Webpack is een module bundler om grote JavaScript producten te bouwen. De core van webpack bestaat uit vier concepten:

- __Entry:__ Geeft aan wat de startmodule is om de hele interne dependency graph (data structure) te bouwen. 
- __Output:__ Vertelt webpack waar hij gemaakte bundles neer moet zetten en hoe ze genoemd moeten worden.
- __Loaders:__ Zorgen er voor dat webpack meer kan verwerken dan alleen JavaScript files. (webpack zelf verstaat alleen JavaScript) Loaders geven je de mogelijkheid om allerlei soorten files te converteren naar modules. Zoals SCSS files naar CSS modules.
- __Plugins:__ Terwijl loaders worden gebruikt voor transformatie, kunnen plugins een scala aan functionaliteiten leveren zoals optimalisatie, minificatie van files en het definiëren van environment-variables. Dat is bijvoorbeeld super handig om in je code onderscheid te maken tussen dev- en productie. Bij dev heb je Hot Module Replacement nodig, maar in productie weer niet. In je code kan je environment variables gebruiken.

## React Slingshot

![reactslingshot](https://cloud.githubusercontent.com/assets/3129129/22811426/bb69dc06-ef0c-11e6-8092-a0bea9060b35.png)

Webpack is niet zelf geconfigureerd, maar gegenereerd met behulp van [React Slingshot](https://github.com/coryhouse/react-slingshot), een starter-kit om snel een react-applicatie neer te zetten zonder zelf te hoeven configureren. React Slingshot is vergeleken met vier alternatieven in [een onderzoek](https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo1/blob/master/documentatie/onderzoeken/frontend-boilerplate/frontend_boilerplate_onderzoek.md) naar front-end boilerplate generators. React Slingshot kwam als beste naar voren, omdat het een 100% score haalde op de belangrijkste eis: *direct kunnen ontwikkelen*.

## Middleware

Aan React Redux kun je middleware toevoegen zodat het deel uitmaakt van de Redux chain. Alle webapplicaties maken gebruiken van Redux Thunk en Redux Dev Tools.

### Redux Thunk

**Het probleem:**<br />
Normaal gesproken returnen action creators een actie waarnaar Redux luistert. Dit brengt een probleem met zich mee als je asynchrone API calls maakt, want dan krijg je onafgehandelde promises in je redux app state. Vervolgens wordt er niet meer genotificeerd wanneer de promise afgehandeld (resolved is), dus weet Redux niet dat alle react componenten re-rendered moeten worden. Redux Thunk biedt hiervoor een oplossing.

**De oplossing:**<br />
Redux Thunk middleware geeft je de mogelijkheid om action creators te schrijven die een functie returnen in plaats van een actie. De middleware 'injecteert' alle functies van de Redux Store (zoals``` dispatch()``` en ```getState()```). Zo heb je als ontwikkelaar volledig de controle over het moment waarop je acties wil dispatchen. Bijvoorbeeld in een ```Promise.then()```, of onder een bepaalde conditie.

### Redux Dev Tools

Om je Redux applicatie te kunnen debuggen in de browser, moet je wel aangeven waar de browser naar kan luisteren. Vervolgens download je de [Google Chrome extensie](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) om te zien wat er in je state gebeurt:

![dev tools](https://d33wubrfki0l68.cloudfront.net/595e2922eee1bf85b801cdc86b8f7e135cc46ee0/0fd92/images/angular/store-devtools/store-devtools-screen.jpg)


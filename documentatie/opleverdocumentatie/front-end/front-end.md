### De front-end applicaties

De front-end applicaties zijn opgebouwd met een React seed van [Corey House](https://github.com/coryhouse), namelijk [react-slingshot](https://github.com/coryhouse/react-slingshot). Corey heeft op zijn Github repository een [uitgebreide uitleg](https://github.com/coryhouse/react-slingshot/blob/master/README.md#get-started) staan over het werken met zijn slingshot seed. De gekozen bundler voor dit project is [Webpack](https://webpack.js.org/).

#### Redux

Het maken van een applicatie in React kan snel uit de hand lopen als je applicatie groter wordt. Om structuur in de applicatie
aan te brengen is gekozen om Redux te gebruiken.

Met Redux beheer je state op applicatieniveau. Redux bestaat
uit een aantal onderdelen maar het belangrijkste dat je moet onthouden zijn de volgende drie:

- **store**: opslagplaats van alle data als één groot object (POJO).
- **reducers**: pure functies die de app-state bewerken op basis van binnengekregen data uit zgn. action creators.
- **action creators**: functies die iets doen, bijvoorbeeld een API benaderen of iets uitrekenen. De uitkomst geven ze door aan de reducers. Dat doorgeven wordt ***'dispatchen'*** genoemd.


#### Folderindeling (package structuur)

De folderindeling hanteert de naamgevingen van Redux, zodat iedereen die weet wat Redux is meteen snapt waar files moeten komen te staan.

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


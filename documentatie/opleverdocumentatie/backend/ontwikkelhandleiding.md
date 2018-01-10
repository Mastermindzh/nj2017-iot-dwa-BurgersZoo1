<a name="ontwikkelhandleiding"></a>
### Loopback

Loopback functioneert als het hart van de backend. Met een paar commando's is er gemakkelijk een krachtige API opgezet.

#### Installatie

Via de commandline valt Loopback gemakkelijk te installeren. Met dit commando wordt Loopback global geïnstalleerd. Dit zorgt er voor dat je loopback ook kan gebruiken buiten je huidige project.

```
npm install -g loopback-cli
```

Loopback is een commandline tool, dus vereist niets anders dan je commandline tool om er mee aan de slag te kunnen.

#### Gebruik:

Loopback genereert een API op basis van vragen en antwoorden in je commandline tool. Loopback werkt via models om data op te slaan, en functioneert hier dus als middleware tussen je applicatie en je data opslag.
De versie de gebruikt wordt is [versie 3.x](http://loopback.io/doc/en/lb3/index.html)

##### Maak een eerste app:

Hieronder staat een voorbeeld van de Loopback website.

```
$ lb          //dit is het basis commando om een nieuw project te starten
? What's the name of your application?    hello-world
? Enter name of the directory to contain the project:    hello-world

? Which version of LoopBack would you like to use? 3.x (current)
? What kind of application do you have in mind? hello-world (A project containing a controller,
including a single vanilla Message and a single remote method)
...
I'm all done. Running npm install for you to install the required dependencies.
If this fails, try running the command yourself.
...
```

Wat je nu hebt gemaakt is een hello-world app. De optie voor een API server is: `api-server`. Je kunt navigeren door de pijltjestoetsen te gebruiken en op enter te drukken. Je ziet hier ook de vraag-antwoord aard van Loopback terug. Loopback vraagt simpel wat je wil en geeft een aantal opties. Zo kun je een gehele applicatie op te stellen, zonder zelf een hoop code te hoeven intikken.

##### Maak een API

Ga naar de map waarin je de API wil aanmaken.
Gebruik de Loopback [application generator](http://loopback.io/doc/en/lb3/Application-generator.html) om het project aan te maken.

```
> lb
? What's the name of your application? (demo)    demo     //tussen haakjes staat standaard de map waarin je nu bent. Als je op enter drukt wordt de waarde tussen de haakjes gebruikt. Zo hoef je niet dingen over te typen.
? Which version of LoopBack would you like to use? (Use arrow keys)
  2.x (long term support
  3.x (current)   <--- pak deze
? What kind of application do you have in mind? (Use arrow keys)
> api-server (A LoopBack API server with local User auth)         <--- selecteer deze
  empty-server (An empty LoopBack API, without any configured models or datasources)
  hello-world (A project containing a controller, including a single vanilla Message and a single remote method)
  notes (A project containing a basic working example, including a memory database)
```

Nu komt de echte Loopback magie. Er worden een aantal bestanden aangemaakt waarin de configuratie van je project staat. Zo wordt er ook een package.json bestand aangemaakt met alle dependencies die je zeker nodig hebt, ze worden ook gelijk geïnstalleerd.
Als Loopback klaar is zie je hetvolgende:

```
Next steps:
  Create a model in your app
  $ lb model

  Run the app
  $ node .
```

Loopback geeft hier dus al aan wat de volgende stappen zijn die je moet ondernemen.
Het is handiger als je, voordat je deze stappen volgt, eerst zorgt voor een dataopslag.

##### Data opslaan

Zoals hierboven al gezegd, loopback werkt via models. Dit betekent dat alle data op een logische manier opgeslagen wordt in modellen. Deze modellen kunnen relaties hebben om zo data uit te breiden.

Allereerst is er een vorm van dataopslag nodig, bijvoorbeeld een [Mongo](https://www.mongodb.com/) database.
Daarvoor kun je de Loopback [data source generator](http://loopback.io/doc/en/lb3/Data-source-generator.html) gebruiken.

```
> lb datasource
? Enter the datasource name:  mongo
? Select the connector for mongo: (Use arrow keys)
MongoDB (supported by Strongloop)  <--- scroll net zo lang totdat je deze tegen komt.
? Connection string url to override other settings (eg: mongodb://username:password@hostname:port/database):    //Wat loopback hier aangeeft is dat je ook een volledige mongo connection string kan gebruiken in plaats van alle waarden zelf invoeren later. In dit voorbeeld laten we deze leeg om te laten zien hoe je de rest invult.
? host: localhost
? port: 27017   //dit is de default mongo port
? user:    //laten we leeg, want we hebben geen user authenticatie nodig
? password:   //idem dito
? database: demo
? Install loopback-connector-mongodb@^1.4 (Y/n)   //default antwoord is hier Yes, dit wil je zeker doen omdat
```

Nu is er een nieuwe Mongo database aangemaakt. Er is een connector geïnstalleerd via npm die er voor zorgt dat je applicatie kan praten met de mongo database. De database is geconfigureerd via het pad en poort dat je opgegeven hebt, en de databse heeft een naam gekeregen. Optioneel is user authenticatie, dat is hier weggelaten.

##### Nieuwe modellen aanmaken

Om een nieuw model te maken kun je de loopback [model generator](http://loopback.io/doc/en/lb3/Model-generator.html) gebruiken.

```
lb model
? Enter the model name: Persoon
? Select the datasource to attach Persoon to:
  db (memory)
  mongo (mongodb)   <-- dit is de datasource die we net aangemaakt hebben. Selecteer deze.
? Select the model's base class (Use arrow keys)
  Model
  PersistedModel   <-- we kiezen hiervoor. Een persistedModel wordt gebruikt wanneer je CRUD acties wil uitvoeren met data
? Expose Person via the REST API? (Y/n) Y  <-- wil je er via de REST API bij kunnen of is het alleen voor intern gebruik?
? Custom plural form (used to build REST URL):  personen  <-- geef de naam van de REST URL op. Dit is in het meervoud. In het nederlands raad ik aan om dit altijd in te voeren, anders krijg je persoon + s als antwoord.
? Common model or server only? (User arrow keys)  common // is het voor client en server of alleen voor de server?
Let's add some Persoon properties now.

Enter an empty property name when done.   //dit zijn de velden die je in je model wil hebben.
? Property name: naam
? Property type: (Use arrow keys)  string
? Required? (y/N)  Y
? Default value[leave blank for none]:


// Dit gaat door totdat je een property leeg laat. Laten we de volgende waarden ook toevoegen:
leeftijd: number
geslacht: string

// maak op dezelfde manier ook een hobby model aan met als property naam: string
```

##### Relaties

Om een relatie aan te maken kun je de [relation generator](http://loopback.io/doc/en/lb3/Relation-generator.html) van Loopback gebruiken.

```
lb relation
? Select the model to create the relationship from:  Persoon
? Relation type: has one
? Choose a model to create the realationship with: hobby
? Enter the property name for the realtion: hobby
? Optionally enter a custom foreign key:
? Allow the relatoin to be nested in REST APIs: No
? Disable the relation from being included: No

```

Er is nu een relatie gelegd tussen een persoon en een hobby. Dit zal later terug te vinden zijn in de API explorer
Om er achter te komen wat de relatie types exact doen, raadpleeg dan de [Loopback documentatie over relaties](http://loopback.io/doc/en/lb3/Creating-model-relations.html).

##### Modellen aanpassen

Loopback houdt zijn modellen bij in JSON bestanden. Wanneer je een model aanmaakt bepaal je in feite ook waar het model neer wordt gezet: in de server of in de common map. Daar, in het mapje models, vind je voor elk model een .json en een .js bestand. Deze bestanden samen maken het model dat Loopback gebruikt. Je kunt hier handmatig ook dingen wijzigen zonder de commandline tool te gebruiken.
Hieronder vind je een voorbeld van het persoon model dat we net aangemaakt hebben.

```
{
  "name": "Persoon",
  "plural": "personen",
  "base": "PersistedModel",
  "idInjection": true,
  "options": {
    "validateUpsert": true
  },
  "properties": {
    "naam": {
      "type": "string",
      "required": true
    },
    "leeftijd": {
      "type": "number",
      "required": true
    },
    "geslacht": {
      "type": "string"
    }
  },
  "validations": [],
  "relations": {
    "hobby": {
      "type": "hasOne",
      "model": "hobby",
      "foreignKey": ""
    }
  },
  "acls": [],
  "methods": {}
}

```

##### Eigen endpoints toevoegen

Loopback biedt de mogelijkheid om eigen endpoints of logica toe te voegen. Dit kan op model niveau, door dit toe te voegen aan het javascript bestand van de model (models/persoon.js). Verder is er nog een map boot in de map server. Daar kunnen allerlei scripts geplaatst worden die gedraaid moeten worden wanneer de API opgezet wordt.

##### API explorer

Loopback heeft een ingebouwde API explorer om te kijken hoe je API er uit ziet, maar ook om hier requests te testen en uit te voeren. De requests die je hierin uitvoert zijn échte requests, dus zonder mock data.
Om dit voor elkaar te krijgen moet je het project runnen en vervolgens naar het juiste adres gaan.
In de projectmap:

```
node .

Browse your REST API at http://0.0.0.0:3000/explorer  <-- dit geeft loopback terug als antwoord. In feite een beschrijving van waar je alles kan beginnen.
Web server listening at: http://0.0.0.0:3000/
```

Om de API explorer te gebruiken moet je dus ook gaan naar http://localhost:3000/explorer  .
Je zult hier zien dat er veel meer request methoden aangemaakt zijn per model dan je zou verwachten. Deze werken echter allemaal.

Voorbeeld:

![Voorbeeld](images/Loopback_voorbeeld.png)
![Voorbeeld](images/Loopback_voorbeeld2.png)

###### Filters

Een van de meest gebruikte filters in Loopback is de [include filter](https://loopback.io/doc/en/lb3/Include-filter.html), deze wordt gebruikt om verschillende domeinmodellen te koppelen.

Een include filter zorgt ervoor dat je documenten terugkrijgt met de eventuele subdocumenten daarin opgenomen.

Neem bijv het model "Bestelling", dit heeft de volgende velden:

- bestellingsnummer
- artikelen
- klantnaam

<details><summary>Klik hier om het JSON model te zien</summary><p>

---
{
"bestellingsnummer": 5,
"artikelen": [],
"klantnaam": "Loopback"
}
---

</p></details>

De klantnaam geeft daar niet veel informatie over de klant, de klant heeft namelijk de volgende velden:

- klantnaam
- leeftijd
- email

Om deze informatie **toch** te krijgen moeten we een include filter gebruiken.

Het resultaat wordt dan:

- bestellingsnummer
- artikelen
- klant
  - klantnaam
  - leeftijd
  - email

<details><summary>Klik hier om het JSON model te zien</summary><p>

---
{
"bestellingsnummer": 5,
"artikelen": [],
"klant": {
  "klantnaam": "Loopback",
  "leeftijd": 25,
  "email": "info@email.com",
}
}
---

</p></details>

Naast de include filter zijn er nog veel meer filters, deze zijn echter in veel mindere maten gebruikt in dit project. Om te zien hoe de rest van de filters werken verwijzen we door naar [de documentatie](https://loopback.io/doc/en/lb3/Querying-data.html)



##### Swagger Generator

Loopback kan zelfs zijn eigen API documenteren. Hiervoor is de [Loopback API definition generator](https://loopback.io/doc/en/lb3/API-definition-generator.html) (OpenAPI spec) bedoeld.
Dit valt op de volgende manier te gebruiken:
```
lb export-api-def
```

Gebruik de `-o` tag om een pad aan te geven waar je de definitie op wil slaan, anders wordt het alleen in de commandline getoond.

### Seedscript

Er is een seedscript beschikbaar om basis data aan te maken om te testen. Dit is te vinden in het bestandje *seedscript.sh*. Deze wordt automatisch uitgevoerd wanneer het `npm build` commando wordt aangeroepen. Dit bestandje haalt via de mongo restore functie een vooraf ingestelde database op en zet die in de lokale database.

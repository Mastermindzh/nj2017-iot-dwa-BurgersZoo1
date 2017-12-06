# deployment

Voor dit project wordt er gewerkt met twee deployment strategieën: deployment en productie. Het doel is om de productie build online te hebben bij de field-test, want dan simuleer je een echte situatie. We hebben echter ook een development deployment omgeving nodig om tegelijk te testen en bugs op te zoeken.

## Beide versies
Beide versies draaien op een black-box server waar [Docker](https://www.docker.com/) containers gedraaid kunnen worden (al dan niet met [docker-compose](https://docs.docker.com/compose/)). Voor zowel development- als productie deployment wordt docker gebruikt.

## Development versie

In de development deployment worden de softwareproducten gedraaid met hun built-in development servers. (bijv. npm start -> dev react app)

Dit staat ons toe om snel te schakelen tussen de verschillende producten aangezien er niks gebuild hoeft te worden.

![development](./images/development.png)

## Productie versie
In de productie versie is alle code getranspileerd (gebundeld) tot één geminimaliseerde JavaScript file dat op de webserver draait:

![development](./images/final%20deployment.png)

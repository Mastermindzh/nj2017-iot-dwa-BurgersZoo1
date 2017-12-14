# Onderzoek 2 - deployment-webservers

De deployment gebeurt vooralsnog met development versies, dit is erg makkelijk om mee te werken aangezien alle debugmogelijkheden meegeleverd worden.

## Onderzoeksmethode

De onderzoeksmethode voor dit onderzoek is tweeledig, allereerst zal er gekeken worden naar "best, good, and bad practices" (Library) en daarna zal er, met de behaalde resultaten, een comparison chart opgesteld worden.

**Categorie**: Library <br />
**Naam**: Best, good and bad practices

**Categorie**: Stepping stones <br />
**Naam**: Comparison chart

## Hypothese

Ik verwacht dat NGINX de meest geschike webserver zal zijn door zijn `performance profile` gecombineerd met de `directory level configuratie`. Ik verwacht daarnaast dat NGINX docker-containers beschikbaar heeft zodat we deze snel werkend kunnen hebben in dit project.

## Test opzet

Uit verschillende bronnen ([1](https://hackernoon.com/how-to-deploy-a-live-reactjs-redux-website-in-under-10-minutes-cadf73cfc75a),[2](https://medium.com/@bensigo/hosting-your-react-app-with-firebase-hosting-add1fa08c214),[3](https://www.fullstackreact.com/articles/deploying-a-react-app-to-s3/) ) komt naar voren dat het hosten van een react app simpel te regelen zou zijn met een CDN netwerk. Dit wordt vooral geprijsd voor kleinere apps zonder al te veel traffic. Uit de bronnen komen veel gratis oplossingen, een aantal van deze staan hieronder opgesomt:

- [surge](https://surge.sh/pricing)
- [github pages](https://pages.github.com/)
- [firebase](https://firebase.google.com/)
- [aws](https://aws.amazon.com/s3)

Naast deze opties zijn er ook de wat professionelere opties, volledige webservers, zoals bijv. apache, nginx of zelfs express.

Uit onderzoek blijkt dus dat er genoeg best/good practices te vinden zijn maar vrijwel geen "bad" practices. Het vermoeden hierachter is de simpele manier waarop een React front-end werkt. Na een bundeling van de bestanden blijft er niet veel over en [Bartosz Szczeciński](https://medium.com/@baphemot/understanding-react-deployment-5a717d4378fd) vat het in één zin heel goed samen:

> Our deployment process will at the very basic level be “put the files on the server”.

Ofwel:

> "Ons deployment process is in essentie: zet de bestanden op een server".

### De opties vergelijken (Comparison chart)

Aangezien de deployment vrij simpel is hebben we veel keuzes. CDN tools lijken ideaal als je kijkt hoe snel een developer ermee uit de voeten kan, maar een volledige server geeft je mogelijkheden tot afscherming van de app.

Om de belangrijkste aspecten makkelijk naast elkaar te zetten gebruik ik de onderzoeksmethode "comparison chart" uit de stepping stones categorie.

De volgende aspecten acht ik belangrijk in het project:

- Docker beschikbaarheid
- Eigen beheer
- Leerzaam
- Zonder problemen na te doen door een vervolg CMD groep / docenten
- Documentatie
- CORS support
- React support

Als we dit dan voor de producten naast elkaar zetten krijgen we:

| Standpunt                                                         | AWS hosting          | Firebase                                                           | Surge                             | Github pages | Express           | Apache            | NGINX             |
|-------------------------------------------------------------------|----------------------|--------------------------------------------------------------------|-----------------------------------|--------------|-------------------|-------------------|-------------------|
| Docker beschikbaarheid                                            | ❌                    | ❌                                                                  | ❌                                 | ❌            | ✓                 | ✓                 | ✓                 |
| Eigen beheer                                                      | ❌                    | ❌                                                                  | ❌                                 | ❌            | ✓                 | ✓                 | ✓                 |
| Leerzaam                                                          | ❌ / ✓                | ❌ / ✓                                                              | ❌ / ✓                             | ❌ / ✓        | ✓                 | ✓                 | ✓                 |
| Zonder problemen na te doen door een vervolg CMD groep / docenten | ❌ / ✓                | ❌ / ✓                                                              | ✓                                 | ✓            | ❌ (tenzij Docker) | ❌ (tenzij Docker) | ❌ (tenzij Docker) |
| Documentatie                                                      | ❌ / ✓                | ❌ / ✓                                                              | ✓                                 | ✓            | ❌ / ✓             | ✓                 | ✓                 |
| Prijs                                                             | € 0,- / 0.023 per GB | € 0,- / €25 / month                                                | € 0,- / €13 / month               | € 0,-        | € 0,-             | € 0,-             | € 0,-             |
| CORS support                                                      | ✓                    | ✓                                                                  | ❌                                 | ✓            | ✓                 | ✓                 | ✓                 |
| React support                                                     | ✓                    | ✓ (bundle.js moet / voor (absoluut pad) om problemen te voorkomen) | ❌ (client-side routing gaat niet) |              | ✓                 | ✓                 | ✓                 |

## Resultaat

Uit onderzoek is gebleken dat het hosten van een React applicatie een stuk simpeler is als verwacht, in essentie komt het er op neer dat je wat bestanden op een web server moet zetten. Het echte werk **kan** hem liggen in het opzetten van zo een server. Uit het onderzoek blijkt echter dat een aantal CDN providers ook een oplossing kunnen bieden als zelf een server opzetten geen uitkomst is.

## Conclusie

Het onderzoek wijst eigenlijk uit dat het vrijwel alle geboden opties geschikt zijn om een react front-end op te deployen. De meest uitgebreide opties zijn Apache en NGINX maar die zijn, zonder Docker, lastig door een vervolggroep op te pakken. Iets wat wel goed opgepakt kan worden is het hosten bij AWS, al heb je dan minder opties.

De eindconclusie is dus niet eenduidig, er zal echt gekeken moeten worden naar de belangrijke factoren voor de betreffende situatie. In ons geval zal het hoogstwaarschijnlijk Apache/NGINX op Docker worden.

## bronnen

- [using create react app with react router express js](https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d)
- [how to set up a node js application for production on ubuntu 14 04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04)
- [nginx vs apache](http://www.hostingadvice.com/how-to/nginx-vs-apache/)
- [how to deploy a live reactjs redux website in under 10 minutes](https://hackernoon.com/how-to-deploy-a-live-reactjs-redux-website-in-under-10-minutes-cadf73cfc75a)
- [understanding react deployment](https://medium.com/@baphemot/understanding-react-deployment-5a717d4378fd)
- [hosting your react app with firebase hosting](https://medium.com/@bensigo/hosting-your-react-app-with-firebase-hosting-add1fa08c214)
- [deploying a react app to s3](https://www.fullstackreact.com/articles/deploying-a-react-app-to-s3/)
- [surge vs github pages deploying a create-react-app project](https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089)
- [which is better cloud server amazon AWS or firebase](https://www.quora.com/Which-is-better-cloud-server-Amazon-AWS-or-Firebase)
- [serverless showdown - aws lambda vs firebase google cloud](https://medium.com/@ste.grider/serverless-showdown-aws-lambda-vs-firebase-google-cloud-functions-cc7529bcfa7d)

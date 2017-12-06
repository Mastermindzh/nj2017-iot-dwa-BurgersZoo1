# Onderzoek 2 - deployment-webservers

De deployment gebeurt vooralsnog met development versies, dit is erg makkelijk om mee te werken aangezien alle debugmogelijkheden meegeleverd wordt.

## Onderzoeksmethode

De onderzoeksmethode voor dit onderzoek is tweeledig, allereerst zal er gekeken worden naar "best, good, and bad practices" (Library) en daarna zal er , met de behaalde resultaten, een comparison chart opgesteld worden.

**Categorie**: Library <br />
**Naam**: Best, good and bad practices

**Categorie**: Stepping stones <br />
**Naam**: Comparison chart

## Hypothese

Ik verwacht dat NGINX de meest geschike webserver zal zijn door zijn `performance profile` gecombineerd met de `directory level configuratie`. Ik verwacht daarnaast dat NGINX docker-containers beschikbaar heeft zodat we deze snel werkend kunnen hebben in dit project.

## Test opzet

Uit verschillende bronnen ([1](https://hackernoon.com/how-to-deploy-a-live-reactjs-redux-website-in-under-10-minutes-cadf73cfc75a),[1](https://medium.com/@bensigo/hosting-your-react-app-with-firebase-hosting-add1fa08c214),[3](https://www.fullstackreact.com/articles/deploying-a-react-app-to-s3/) ) komt naar voren dat het hosten van een react app simpel te regelen zou zijn met een CDN netwerk. Dit wordt vooral gepreisd voor kleinere apps zonder al te veel traffic. Uit de bronnen komen veel gratis oplossingen, een aantal van deze staan hieronder opgesomt:

- [surge](https://surge.sh/pricing)
- [github pages](https://pages.github.com/)
- [firebase](https://firebase.google.com/)
- [aws](https://aws.amazon.com/s3)

Naast deze opties zijn er ook de wat professionelere opties, namelijk de volledige webservers.


github pages -> react client side routing -> kut
surge -> react client side routing -> beter maar kut
s3 -> buckets -> kan, veel werk


### Comparison chart

- surge -> geen CORS


## Resultaat



## Conclusie


## bronnen
- [](http://www.hostingadvice.com/how-to/nginx-vs-apache/)
- [](https://hackernoon.com/how-to-deploy-a-live-reactjs-redux-website-in-under-10-minutes-cadf73cfc75a)
- [](https://medium.com/@baphemot/understanding-react-deployment-5a717d4378fd)
- [](https://medium.com/@bensigo/hosting-your-react-app-with-firebase-hosting-add1fa08c214)
- [](https://www.fullstackreact.com/articles/deploying-a-react-app-to-s3/)
- [](https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089)

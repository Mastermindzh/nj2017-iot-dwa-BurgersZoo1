Onderzoek deployment Raspberry Pi
===============================
Omdat voor dit onderzoek weinig/geen code beschikbaar is, heb ik geprobeerd om mijn stappen uitgebreid te beschrijven. De Dockerfiles heb ik wel toegevoegd.
 
**Onderzoeksmethode (uit de cmd methods pack)**  
Prototyping uit stepping stones

## Hypothese/probleemstelling
Voor Burgers' Zoo gaan we o.a. een gateway opleveren die wij vrij veel bewerken en testen. Om dit probleem gedeeltelijk op te lossen testen wij dit natuurlijk lokaal, op onze eigen laptops. Om ook gemakkelijk de code op de Raspberry Pi 3 te krijgen is het dus handig als we een oplossing/script hebben die er voor zorgt dat de nieuwste code gedownload wordt en de gateway gestart wordt met de goede parameters.

Ik verwacht dan ook dat een buildtool zoals Jenkins of Teamcity hier een oplossing voor bied, waardoor code niet gecompileerd hoeft te worden op een Raspberry Pi 3. 

## Testopzet
Om dit te testen ga ik een testopzet maken met [Jenkins](https://jenkins-ci.org/) en [Teamcity](https://www.jetbrains.com). Hierna kan ik vergelijken hoe deze systemen werken en vooral ook welke beter werkt/makkelijker mee op te gaan is. 

### Jenkins opzet
Versie: `2.93`

#### Installatie
Jenkins is opgezet zonder Docker en draait op een VPS. Deze is dus vanaf een Rapsberry Pi 3 aan te roepen om de nieuwste artifacts op te halen. 

De installatie van Jenkins gaat gemakkelijk en is via de volgende tutorial te volgen: [Installatie Jenkins, Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-16-04).

Het installen van de SSH keys binnen Jenkins is een gedoe. Tijdens de installatie van Jenkins wordt namelijk een nieuwe "Jenkins" user en usergroep aangemaakt, waardoor deze niet bij de ingstelde SSH keys kunnen komen van de normale user. Dit is op zich een goede feature, maar voor iemand zoals ik die er geen ervaring mee heeft toch even uitzoeken waarom ik maar niet geautoriseerd ben voor de Git repo. Verder ging het instellen van de build artifacts vrij gemakkelijk te exporteren en te downloaden. (zie kopje "Deployment script").

### Gebruik
In het gewone gebruik ziet Jenkins er nogal oudbollig uit, maar het werkt wel. De buildsteps zijn gemakkelijk aan te maken en de Git webhooks zijn ook gemakkelijk in te stellen. Om extra functionaliteiten te installeren via plugins kan gemakkelijk vanuit de webinterface gedaan worden. Er is een lijst met veel plugins beschrikbaar die alleen maar aangeklikt hoeven te worden en ze worden geinstalleerd en in vele gevallen is het niet verplicht om de server te herstarten. 

### Deployment script
Dit script is getest op een laptop met Ubuntu 17.04 en Raspberry Pi 3. Op de Raspberry Pi 3 stond nog geen MongoDB dus die startte dan uiteraard niet. Ook moet de [RXTX library](http://rxtx.qbang.org/wiki/index.php/Main_Page) geinstalleerd zijn. 
``` bash
#!/bin/bash

echo "Start mongo service"
sudo service mongod start

echo "Removing old installation"
rm $(ls | grep "gateway")


echo "fetching new gateway version"
wget --auth-no-challenge --http-user=downloader --http-password=download  http:$

echo "Starting server"
java -Djava.library.path=/usr/lib/jni -jar $(ls | grep "gateway")
```


### Teamcity opzet
Versie: `2017.2`
#### Installatie 
Om Teamcity te draaien gebruik ik mijn laptop. Er bestaan docker images voor Teamcity waarmee een [server](https://hub.docker.com/r/jetbrains/teamcity-server/) en een [agent](https://hub.docker.com/r/jetbrains/teamcity-agent/) instantie mee op te zetten is. 

Om vervolgens de server te starten voer ik het volgende uit:
``` bash
sudo docker run -it --name teamcity-server-instance  \
    -v ~/HAN/minor/teamcity/server/datadir:/data/teamcity_server/datadir \
    -v ~/HAN/minor/teamcity/server/logs:/opt/teamcity/logs  \
    -p 8111:8111 \
    jetbrains/teamcity-server
``` 
Vervolgens kan ik naar de webpagina gaan om de server instantie te installeren. Omdat dit een test is gebruik ik gewoon een interne database, wat niet aan te raden is bij productie omgevingen. In de commandline is nu het wachtwoord zichtbaar om als super-user in te loggen en de server draait. 

Om de bijbehoorende agent te starten voer ik het volgende uit:
``` bash
sudo docker run -it -e SERVER_URL="192.168.178.17:8111"  \
    -v ~/HAN/minor/teamcity/agent_1/conf:/data/teamcity_agent/conf  \      
    teamcity-agent-gradle
``` 
Ik kwam er achter dat bij deze standaard Docker image geen Gradle zit. Dit is wel vereist om ons project te bouwen. Ik heb de Dockerfile dus moeten aanpassen om Gradle hieraan toe te voegen. Deze is te vinden in de code map. Na deze aanpassing werkt het wel met dezelfde aanroep. 

Om deze Dockerfile te bouwen moet het volgende worden uitgevoerd:
``` bash
sudo docker build . -t teamcity-agent-gradle
```

Hierbij is het belangrijk om het volledige ip addres op te geven, ondanks dat het beide op de zelfde machine draait. `localhost:8111` of `127.0.0.1:8111` werken dus niet.

Vervolgens is het een kwestie van server instellingen goed zetten, ssh key toevoegen voor GitHub etc. Normaal gesproken kun je op dit moment ook GitHub hooks regelen, zodat Teamcity hierop kan reageren als er bijvoorbeeld iets gepushed is op een project. Omdat ik lokaal werk en is deze callback niet mogelijk (ik ga geen porten in mijn router open zetten voor deze test).

#### Gebruik
Het instellen van de buildtaak is vrij gemakkelijk in te stellen. Er kan simpel een build.gradle geselecteerd worden, waar ook de `clean build test jar` taken als paramaters aan meegegeven kunnen worden. Hoe ik  precies de goede artifacts exporteer was iets meer uitzoekwerk, omdat dit weer anders werkt dan in Jenkins. 
Teamcity checkt de volledige repo uit (dat is ook het Git path dat je opgeeft) en vervolgens moet het volledige path opgegeven worden naar de build directory.
Uiteindelijk is dan de laatste succesvolle build artifact te downloaden via:
`http://192.168.178.17:8111/guestAuth/repository/download/Nj2017IotDwaBurgersZoo1_GatewayBuild/.lastSuccessful/gateway-1.0-SNAPSHOT.jar`.

Wat ook super handig is, is de testcoverage die inzichtelijk gemaakt wordt, direct in de build resultaten. Hierdoor is snel te zien hoe het met de tests zit (en dus een stukje code kwaliteit). ![Test coverage resultaten](/testcoverage-teamcity.PNG)

Het is ook mogenlijk om verschillende branches te bouwen, iets wat dus handig kan zijn om snel een artifact te creeëren voor een feature branch. ![Bouwen verschillende feature branches](/teamcity-branch-checkout.PNG)
 
## Resultaat
Het is vrij gemakkelijk om een build server op te zetten, ik heb hier niet meer dan een dag over gedaan om twee nieuwe build servers te onderzoeken, op te zetten en build taken op te zetten om artifacts te produceren voor de Raspberry Pi. 
Van de twee ziet Teamcity er professioneler uit en werkt naar mijn mening makkelijker. Ook bied Teamcity op een gemakkelijke manier mogelijkheden om feature branches te bouwen en te publiceren. Voor deze professionelere look en werking komt wel een prijs, het is wel een betaald product. De eerste 100 bouwconfiguraties zijn gratis en je kunt tot 3 build agents configureren. Hierna worden het duurdere betaalde licenties, terwijl Jenkins gratis is.

Verder werken zowel Teamcity als Jenkins goed met het aanroepen van het Gralde script (waar de bouwtaken van de gateway in staan). Ze leveren beiden een artifact die gedeployed kan worden op de Raspberry Pi waardoor het gemakkelijker is om met de Pi Te werken. Er hoeft immers alleen maar een deploy script uitgevoerd te worden en de nieuwe versie draait. 

Voor het schoolproject hoeven we maar een enkele bouwtaak te configureren waardoor teamcity een goede optie is. Het is gemakkelijk in gebruik en configuratie. 

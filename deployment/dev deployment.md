# Deployment

Dev deployment is relatief simpel en kan op twee manieren:


## Handmatig

1. Zorg ervoor dat je ssh toegang hebt tot de server (klik [hier]() om te lezen hoe dat moet)

2. voer het volgende commando uit in de map `~/groep1` of `~/groep2` (vervang branch met de branch die je live wilt)
    ```
    bash deploy.sh groep1 branch
    ```

## Door het rest backend aan te roepen

Groep 1 roept de volgende url aan (vervang de branch):
```
http://servers.rickvanlieshout.com:8149/groep1/branch
```

Groep 2 roept de volgende url aan (vervang de branch):
```
http://servers.rickvanlieshout.com:8149/groep2/branch
```

## Portainer

De docker-management interface [Portainer](https://github.com/portainer/portainer) is beschikbaar op:
[http://servers.rickvanlieshout.com:8148](http://servers.rickvanlieshout.com:8148).

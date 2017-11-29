#!/bin/sh
# Maak een paar poten aan
POOTEEN=$(curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' 'http://servers.rickvanlieshout.com:8001/api/poten/new')
POOTTWEE=$(curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' 'http://servers.rickvanlieshout.com:8001/api/poten/new')
POOTDRIE=$(curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' 'http://servers.rickvanlieshout.com:8001/api/poten/new')
echo Poten aangemaakt

passen = [1715693473, 639727265, 3630735449, 3066657185, 2936256137, 638218657, 1070249353, 3998198313]

for pas in passen
do :
    curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
   "pasid": '+pas+', \
   "active": true \
        }' 'http://servers.rickvanlieshout.com:8001/api/passen'
done


# Maak een aantal passen aan.
#curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
#   "pasid": 1715693473, \
#   "active": true \
# }' 'http://servers.rickvanlieshout.com:8001/api/passen'
#curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
#   "pasid": 639727265, \
#   "active": true \
# }' 'http://servers.rickvanlieshout.com:8001/api/passen'
#curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
#   "pasid": 3630735449, \
#   "active": true \
# }' 'http://servers.rickvanlieshout.com:8001/api/passen'
#curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
#   "pasid": 3066657185, \
#   "active": true \
# }' 'http://servers.rickvanlieshout.com:8001/api/passen'
#curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
#   "pasid": 2936256137, \
#   "active": true \
# }' 'http://servers.rickvanlieshout.com:8001/api/passen'
#curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
#   "pasid": 638218657, \
#   "active": true \
# }' 'http://servers.rickvanlieshout.com:8001/api/passen'
#curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
#   "pasid": 1070249353, \
#   "active": true \
# }' 'http://servers.rickvanlieshout.com:8001/api/passen'
#curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
#   "pasid": 3998198313, \
#   "active": true \
# }' 'http://servers.rickvanlieshout.com:8001/api/passen'
echo Passen aangemaakt

# Koppel een ranger aan een pas.
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
   "naam": "Lucky Luuk", \
   "email": "test@mail.com", \
   "rewardGiven": false \
 }' 'http://servers.rickvanlieshout.com:8001/api/passen/1715693473/ranger'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
   "naam": "Lucky Luuk", \
   "email": "test@mail.com", \
   "rewardGiven": false \
 }' 'http://servers.rickvanlieshout.com:8001/api/passen/639727265/ranger'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
   "naam": "Lucky Luuk", \
   "email": "test@mail.com", \
   "rewardGiven": false \
 }' 'http://servers.rickvanlieshout.com:8001/api/passen/3630735449/ranger'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
   "naam": "Lucky Luuk", \
   "email": "test@mail.com", \
   "rewardGiven": false \
 }' 'http://servers.rickvanlieshout.com:8001/api/passen/3066657185/ranger'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
   "naam": "Lucky Luuk", \
   "email": "test@mail.com", \
   "rewardGiven": false \
 }' 'http://servers.rickvanlieshout.com:8001/api/passen/2936256137/ranger'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
   "naam": "Lucky Luuk", \
   "email": "test@mail.com", \
   "rewardGiven": false \
 }' 'http://servers.rickvanlieshout.com:8001/api/passen/638218657/ranger'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
   "naam": "Lucky Luuk", \
   "email": "test@mail.com", \
   "rewardGiven": false \
 }' 'http://servers.rickvanlieshout.com:8001/api/passen/1070249353/ranger'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
   "naam": "Lucky Luuk", \
   "email": "test@mail.com", \
   "rewardGiven": false \
 }' 'http://servers.rickvanlieshout.com:8001/api/passen/3998198313/ranger'

# Maak speurpunten aan.


# Koppel speurpunten aan poten.


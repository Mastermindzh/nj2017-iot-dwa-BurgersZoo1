#!/bin/sh
# Wat er nog moet gebueren:

DB_HOST=localhost:8009
HOST=http://localhost:8001

mongo burgerszoo --eval "db.dropDatabase()" --host $DB_HOST

# Maak een paar poten aan
POOT1=$(curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pootid": 0}' 'http://localhost:8001/api/poten')
POOT2=$(curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' 'http://localhost:8001/api/poten/new')
POOT3=$(curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' 'http://localhost:8001/api/poten/new')
echo Poten aangemaakt.
# String magics incoming:
POOTID1=${POOT1##*:}
POOTID1=${POOTID1%\}}
POOTID2=${POOT2##*:}
POOTID2=${POOTID2%\}}
POOTID3=${POOT3##*:}
POOTID3=${POOTID3%\}}
# Maak een aantal passen aan.
PAS1=$(curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pasid": 1715693473,"active": true}' 'http://localhost:8001/api/passen')
PAS2=$(curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pasid": 639727265,"active": true}' 'http://localhost:8001/api/passen')
PAS3=$(curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pasid": 3630735449,"active": true}' 'http://localhost:8001/api/passen')
PAS4=$(curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pasid": 3066657185,"active": true}' 'http://localhost:8001/api/passen')
PAS5=$(curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pasid": 2936256137, "active": true}' 'http://localhost:8001/api/passen')
PAS6=$(curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pasid": 638218657,"active": true}' 'http://localhost:8001/api/passen')
PAS7=$(curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pasid": 1070249353,"active": true}' 'http://localhost:8001/api/passen')
PAS8=$(curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pasid": 3998198313,"active": true}' 'http://localhost:8001/api/passen')
# More String magics
PASID1=${PAS1%%,*} && PASID1=${PASID1##*:} && PASID1=${PASID1#\"} && PASID1=${PASID1%\"}
PASID2=${PAS2%%,*} && PASID2=${PASID2##*:} && PASID2=${PASID2#\"} && PASID2=${PASID2%\"}
PASID3=${PAS3%%,*} && PASID3=${PASID3##*:} && PASID3=${PASID3#\"} && PASID3=${PASID3%\"}
PASID4=${PAS4%%,*} && PASID4=${PASID4##*:} && PASID4=${PASID4#\"} && PASID4=${PASID4%\"}
PASID5=${PAS5%%,*} && PASID5=${PASID5##*:} && PASID5=${PASID5#\"} && PASID5=${PASID5%\"}
PASID6=${PAS6%%,*} && PASID6=${PASID6##*:} && PASID6=${PASID6#\"} && PASID6=${PASID6%\"}
PASID7=${PAS7%%,*} && PASID7=${PASID7##*:} && PASID7=${PASID7#\"} && PASID7=${PASID7%\"}
PASID8=${PAS8%%,*} && PASID8=${PASID8##*:} && PASID8=${PASID8#\"} && PASID8=${PASID8%\"}
echo Passen aangemaakt.
# Koppel een ranger aan elke pas.
curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"naam": "Lucky Luuk","email": "test@mail.com","rewardGiven": false}' 'http://localhost:8001/api/passen/'$PASID1'/ranger' >> /dev/null
curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"naam": "Ranger Bas","email": "test@mail.com","rewardGiven": false}' 'http://localhost:8001/api/passen/'$PASID2'/ranger' >> /dev/null
curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"naam": "Asher","email": "test@mail.com","rewardGiven": false}' 'http://localhost:8001/api/passen/'$PASID3'/ranger' >> /dev/null
curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"naam": "Sharon","email": "test@mail.com","rewardGiven": false}' 'http://localhost:8001/api/passen/'$PASID4'/ranger' >> /dev/null
curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"naam": "Rick","email": "test@mail.com","rewardGiven": false}' 'http://localhost:8001/api/passen/'$PASID5'/ranger' >> /dev/null
curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"naam": "Sijmen","email": "test@mail.com","rewardGiven": false}' 'http://localhost:8001/api/passen/'$PASID6'/ranger' >> /dev/null
curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"naam": "Thomas","email": "test@mail.com","rewardGiven": false}' 'http://localhost:8001/api/passen/'$PASID7'/ranger' >> /dev/null
curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"naam": "Superman","email": "test@mail.com","rewardGiven": false}' 'http://localhost:8001/api/passen/'$PASID8'/ranger' >> /dev/null
echo Rangers aangemaakt.
# Maak speurpunten aan die gekoppeld zijn aan de poten.
curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pootid": ['$POOTID1'],"geolocation": {"lat": 0,"lng": 0},"locatienaam": "Bush"}' 'http://localhost:8001/api/speurpunten' >> /dev/null
curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pootid": ['$POOTID2'],"geolocation": {"lat": 0,"lng": 0},"locatienaam": "Rimba"}' 'http://localhost:8001/api/speurpunten' >> /dev/null
curl -s -S -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"pootid": ['$POOTID3'],"geolocation": {"lat": 0,"lng": 0},"locatienaam": "Safari"}' 'http://localhost:8001/api/speurpunten' >> /dev/null
echo Speurpunten aangemaakt.

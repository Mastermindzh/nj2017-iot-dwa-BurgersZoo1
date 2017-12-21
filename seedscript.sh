#!/bin/sh
DB_HOST=localhost:8009
DIR=./assets/seed-data/burgerszoo

while getopts h: option
do
 case "${option}"
 in
 h) DB_HOST=${OPTARG};
 esac
done

mongorestore --host http://servers.rickvanlieshout.com:8019 --db burgerszoo --drop ./assets/seed-data/burgerszoo

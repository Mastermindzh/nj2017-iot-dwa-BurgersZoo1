#!/bin/sh
DB_HOST=localhost:8009
DIR=./assets/seed-data

while getopts h: option
do
 case "${option}"
 in
 h) DB_HOST=${OPTARG};
 esac
done

mongorestore --host ${DB_HOST} --nsInclude "burgerszoo.*" --drop ${DIR}

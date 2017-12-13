#!/bin/sh
DB_HOST=localhost:8009

while getopts h: option
do
 case "${option}"
 in
 h) DB_HOST=${OPTARG};;
 esac
done


mongorestore --host ${DB_HOST} --db burgerszoo --drop ./assets/seed-data

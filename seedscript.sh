#!/bin/sh
DB_HOST=localhost:8009
mongorestore --host ${DB_HOST} --db burgerszoo --drop ./assets/seed-data

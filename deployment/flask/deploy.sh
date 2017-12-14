#!/bin/bash

cd $1

echo "stashing changes"
git stash

echo "git checkout ...."

git checkout $2

echo "Pulling ...."

git pull
git pull origin $2

echo "Installing"
npm install

echo "Restarting docker ...."

docker-compose down
docker-compose up -d

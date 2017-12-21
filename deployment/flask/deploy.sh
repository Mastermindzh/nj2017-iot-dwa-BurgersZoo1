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

if [ "$3" = "dev" ]; then
  npm start
elif [ "$3" = "prod" ]; then
  npm run build
fi


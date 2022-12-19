#!/bin/bash

cd /usr/src/app

if grep next package.json >/dev/null; then
    echo Next is EXIST.
else
    cd /usr/src/app
    yarn create next-app --example blog-starter .
fi

while read line
do
  if grep "$line" package.json >/dev/null; then
    echo $line is EXIST.
  else
    echo $line is NOT EXIST.
    yarn add $line
  fi
done < /packages.txt


if [ "$STATUS" == "development" ]; then
  echo Starting in developer mode...
  yarn dev
elif [ "$STATUS" == "production" ]; then
  echo Starting in production mode...
  yarn build
  yarn start
else 
  echo Incorrect environment variable.
fi
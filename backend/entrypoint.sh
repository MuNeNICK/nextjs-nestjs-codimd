#!/bin/bash

cd /usr/src/app

if grep nest package.json >/dev/null; then
    echo Nest is EXIST.
else
    echo Nest is NOT EXIST.
    git clone https://github.com/nestjs/typescript-starter.git .
    yarn install
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
  yarn prisma studio &
  yarn start:dev
elif [ "$STATUS" == "production" ]; then
  echo Starting in production mode...
  yarn start
else 
  echo Incorrect environment variable.
fi
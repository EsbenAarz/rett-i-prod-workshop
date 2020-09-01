#!/bin/bash

function run_app {
  if [ "$1" == "-c" ]
  then
    docker run -p 49160:3000 -d esben.aarseth/node-web-app
    echo "Started application at port 49160"
  else
    echo "Not starting container"
  fi
}

npm run build
docker build -t esben.aarseth/node-web-app .

run_app $1
exit 1

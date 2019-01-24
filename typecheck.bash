#!/usr/bin/env bash

# Import folder into Docker image
docker run -t -d --name scilla-cont scilla bash
docker cp . scilla-cont:/zdex
docker commit scilla-cont scilla
# Clean before typecheck
docker stop scilla-cont
docker container rm scilla-cont

# Typecheck
docker run -t -d --name scilla-cont scilla bash
docker exec scilla-cont ./bin/scilla-checker -libdir src/stdlib /zdex/contracts/ZDExchange.scilla
# Clean after typecheck
docker stop scilla-cont
docker container rm scilla-cont

# ZDEX
Decentralized exchange for fungible tokens on Zilliqa.

Built with support from the Zilliqa Ecosystem Grant: https://blog.zilliqa.com/announcing-the-second-wave-of-zilliqa-ecosystem-grant-awardees-6e03edadcc0d

Inspired by UniSwap: https://uniswap.io/

## Current Status

The most recent versions of each contract can be found on the Zilliqa testnet at the addresses below:

Hub contract address:
`bb13aa89cac6e3d359b7636cdfaec4fdd478b002`

LiquidityManager contract address:
`3e5fae8f17e659f672eb816f1b2395f4c994bf99`

ZilToToken contract address:
`8ae7d36ac087eb394aca6242f897cedd05261e04`

TokenToZil contract address:
`8b723418c2fece8655bbe3cbdd0b6ba8dcecde86`

FungibleToken contract address:
`2c7764189c266f8523ecf29f85d91fc1d4700d9a`


## Run with Scilla Compiler (Docker)

### Typechecking

Start Docker.

The first time you typecheck, from the Scilla root folder, run:
```
docker build -t scilla .
```

From then on, from the ZDEX root folder, to typecheck the ZDExchange contract, run:
```
. typecheck.bash contracts/ZDExchange.scilla
```

To typecheck the FungibleToken contract, run:
```
. typecheck.bash contracts/FungibleToken.scilla
```

## Deploying

### Dummy Deployment

Sometimes, it's useful to simulate the behavior of deploying the contracts without actually doing this. To do so, from the ZDEX root folder, run:
```
cd tests
node deploy.js -1
```

### Deploying on Kaya

From the ZDEX root folder, run:
```
cd tests
node deploy.js
```

Or, run:
```
cd tests
node deploy.js 0
```

### Deploying on Testnet

From the ZDEX root folder, run:
```
cd tests
node deploy.js 1
```

## Testing

### Dummy Testing

From the ZDEX root folder, run:
```
cd tests
node test.js -1
```

### Testing on Kaya

From the ZDEX root folder, run:
```
cd tests
node test.js
```

Or, run:
```
cd tests
node test.js 0
```

### Testing on Testnet

From the ZDEX root folder, run:
```
cd tests
node test.js 1
```

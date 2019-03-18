# ZDEX
Decentralized exchange for fungible tokens on Zilliqa.

Built with support from the Zilliqa Ecosystem Grant: https://blog.zilliqa.com/announcing-the-second-wave-of-zilliqa-ecosystem-grant-awardees-6e03edadcc0d

Inspired by UniSwap: https://uniswap.io/

## Current Status

The most recent versions of each contract can be found on the Zilliqa testnet at the addresses below:

Hub contract address:
`ef767d4b1f39410a64670da167f38fe4ad2abbfb`

LiquidityManager contract address:
`d8be9be4b6fa6771ec8770dae0f0bcc02411a2c3`

ZilToToken contract address:
`ae3a6fbb5f1257dffea7e19fd1736fd08a0087ec`

TokenToZil contract address:
`4e791ec27c27ac3625f800a96e4e21d4c438bdb2`

FungibleToken contract address:
`19d50acde2caac28f4508219e223b26afaf9ed49`


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

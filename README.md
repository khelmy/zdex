# ZDEX
Decentralized exchange for fungible tokens on Zilliqa.

Built with support from the Zilliqa Ecosystem Grant: https://blog.zilliqa.com/announcing-the-second-wave-of-zilliqa-ecosystem-grant-awardees-6e03edadcc0d

Inspired by UniSwap: https://uniswap.io/

## Current Status

The most recent version of the ZDEX contract can be found on the Zilliqa testnet at the address `ce340ba5f5442694080df98104d7f6b9ef975457`.

The most recent version of the ZDEX-compatible FungibleToken contract can be found at the address `9bfda068611a430f2ce992e6cfa5db774fb4009c`.

## Run with Scilla Compiler (Docker)

### Typechecking

Start Docker.

The first time you typecheck, from the Scilla root folder, run:
```
docker build -t scilla .
```

From then on, from the ZDEX root folder, to typecheck the ZDExchange contract, run:
```
. typecheck.bash
```

To typecheck the FungibleToken contract, run:
```
. typecheck_token.bash
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

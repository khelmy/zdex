# ZDEX
Decentralized exchange for fungible tokens on Zilliqa.

Built with support from the Zilliqa Ecosystem Grant: https://blog.zilliqa.com/announcing-the-second-wave-of-zilliqa-ecosystem-grant-awardees-6e03edadcc0d

Inspired by UniSwap: https://uniswap.io/

Now available at https://zdex.cc.

## Usage Guide

The following is a brief usage guide for the ZDEX app. Please refer to the UniSwap documentation for a more thorough guide to the underlying mechanism.

To use the DEX on the testnet, first receive (testnet ZIL)[https://dev-wallet.zilliqa.com/faucet]. Then, navigate to the (app)[https://zdex.cc], and sign in with your private key or keystore file on the `Create Market`, `Manage Liquidity`, or `Swap` page.

### Opening a Market

To open a market on a token, go to the `Create Market` page and send the transaction for the relevant token. Before trading is opened, you need to allow the Hub contract to use each auxiliary contract for that token, so navigate to the remaining three tabs on that page and submit the token address and your desired limit on that token.

### Managing Liquidity

Before trading can commence, we need to add liquidity. First, authorize the liquidity contract to use your tokens by navigating to the `Manage Liquidity` page and going to the `Authorize Liquidity` tab, giving the `LiquidityManager` contract permission to move around as many tokens as you'd like to use. Then, go to the `Add Liquidity` tab and add as much liquidity as you'd like, following the same parameters as UniSwap. To remove liquidity, go to the `Remove Liquidity` tab and input your parameters.

As in UniSwap, liquidity providers share an 0.3% fee on trades in that market. 

### Trading

To trade, go to the `Swap` page.

To sell tokens for Zil, you first need to authorize the `TokenToZil` contract to transfer tokens. Go to the `Authorize Token to Zil` tab and give the `TokenToZil` contract permission to make trades on your behalf. Then, go to the `Token to Zil Swap` tab, enter the parameters you'd approve of, and submit the transaction. If such a deal can be made, the contract will perform the trade.

To buy tokens with Zil, go to the `Zil to Token Swap` tab, input your parameters, and submit.

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

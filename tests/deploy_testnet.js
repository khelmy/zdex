// Modified from https://github.com/Zilliqa/Zilliqa-JavaScript-Library
const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require ('@zilliqa-js/crypto');
const fs = require('fs')

const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');

// These are set by the core protocol, and may vary per-chain.
// For more information: https://apidocs.zilliqa.com/?shell#getnetworkid
const CHAIN_ID = 333;
const MSG_VERSION = 1;
const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);

// Populate the wallet with an account
// NOTE: if running on own machine, need to create a file "privkey.txt" with your private key
const privkey = fs.readFileSync('./privkey_testnet.txt', 'utf8');

zilliqa.wallet.addByPrivateKey(
  privkey
);

const address = CP.getAddressFromPrivateKey(privkey);
console.log("Your account address is:");
console.log(`0x${address}`);

const zdex_code = fs.readFileSync('../contracts/ZDExchange.scilla', 'utf8');

const zdex_init = [
  // this parameter is mandatory for all init arrays
  {
    vname: "_scilla_version",
    type: "Uint32",
    value: "1"
  }
];

/*
(owner : ByStr20,
 total_tokens : Uint128,
 name : String,
 symbol : String)
*/

const token_code = fs.readFileSync('../contracts/FungibleToken.scilla', 'utf8');
const token_init = [
  // this parameter is mandatory for all init arrays
  {
    vname: "_scilla_version",
    type: "Uint32",
    value: "1"
  },
  {
    vname: "owner",
    type: "ByStr20",
    value: `0x${address}`
  },
  {
    vname: "total_tokens",
    type: "Uint128",
    value: "1000000000000" //10^12 (like zil)
  },
  {
    vname: "name",
    type: "String",
    value: "Zilliqa DEX"
  },
  {
    vname: "symbol",
    type: "String",
    value: "ZDEX"
  }
];

// Verbose deploy function
async function deploy_v(code, init) {
  try {
    // Get Balance
    const balance = await zilliqa.blockchain.getBalance(address);
    // Get Minimum Gas Price from blockchain
    const minGasPrice = await zilliqa.blockchain.getMinimumGasPrice();
    console.log(`Your account balance is:`);
    console.log(balance.result)
    console.log(`Current Minimum Gas Price: ${minGasPrice.result}`);
    const myGasPrice = units.toQa('15000', units.Units.Li); // Gas Price that will be used by all transactions
    console.log(`My Gas Price ${myGasPrice.toString()}`)
    console.log('Sufficient Gas Price?');
    console.log(myGasPrice.gte(new BN(minGasPrice.result))); // Checks if your gas price is less than the minimum gas price

    // Deploy a contract
    // Instance of class Contract

    const contract = zilliqa.contracts.new(code, init);


    // Deploy the contract
    const [deployTx, ctr] = await contract.deploy({
        version: VERSION,
        gasPrice: myGasPrice,
        gasLimit: Long.fromNumber(10000)
      },
      3330,
      100
    );

    // Introspect the state of the underlying transaction
    console.log(`Deployment Transaction ID: ${deployTx.id}`);
    console.log(`Deployment Transaction Receipt:`);
    console.log(deployTx.txParams.receipt);

    // Get the deployed contract address
    console.log("The contract address is:");
    console.log(ctr.address);

    const state = await ctr.getState();
    console.log("The state of the contract is:");
    console.log(state);
    return ctr.address;
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  var z_deploy = await deploy_v(zdex_code, zdex_init);
  console.log(z_deploy);
  var t_deploy = await deploy_v(token_code, token_init);
  console.log(t_deploy);
}

main();
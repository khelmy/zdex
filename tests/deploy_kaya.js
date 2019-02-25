const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require ('@zilliqa-js/crypto');
const kayaCli = require('kaya-cli')
const fs = require('fs')
const readline = require('readline-sync');

const zilliqa = new Zilliqa('http://localhost:4200');

// These are set by the core protocol, and may vary per-chain.
// For more information: https://apidocs.zilliqa.com/?shell#getnetworkid
const VERSION = 1;

const zdex_code = fs.readFileSync('../contracts/ZDExchange.scilla', 'utf8');

const zdex_init = [
  {
    vname: "_scilla_version",
    type: "Uint32",
    value: "1"
  }
];

// Kaya's pkeys aren't accessible, so need to be manually inputted :(
const privkey = readline.question("Please input Private Keys (10): ");
console.log('Private key used: ' + privkey);

zilliqa.wallet.addByPrivateKey(
  privkey
);

const address = CP.getAddressFromPrivateKey(privkey);
console.log("Your account address is:");
console.log(`0x${address}`);

const token_code = fs.readFileSync('../contracts/FungibleToken.scilla', 'utf8');
const token_init = [
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
    var balance = await zilliqa.blockchain.getBalance(address);
    // Get Minimum Gas Price from blockchain
    const minGasPrice = await zilliqa.blockchain.getMinimumGasPrice();
    console.log(`Your account balance is:`);
    console.log(balance.result)
    console.log(`Current Minimum Gas Price: ${minGasPrice.result}`);
    const myGasPrice = units.toQa('1000', units.Units.Li); // Gas Price that will be used by all transactions
    console.log(`My Gas Price ${myGasPrice.toString()}`)
    console.log('Sufficient Gas Price?');
    console.log(myGasPrice.gte(new BN(minGasPrice.result))); // Checks if your gas price is less than the minimum gas price
    const myGasLimit = Long.fromNumber(1000000000);

    // Deploy a contract
    // Instance of class Contract
    const contract = zilliqa.contracts.new(code, init);
    // Deploy the contract
    const [deployTx, ctr] = await contract.deploy({
        version: VERSION,
        gasPrice: myGasPrice,
        gasLimit: myGasLimit
      }
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
    balance = await zilliqa.blockchain.getBalance(address);
    console.log(`Your new account balance is:`);
    console.log(balance.result)
    return ctr.address;
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  // var z_deploy = await deploy_v(zdex_code, zdex_init);
  // console.log(z_deploy);
  var t_deploy = await deploy_v(token_code, token_init);
  console.log(t_deploy);
  process.exit()
}


main();

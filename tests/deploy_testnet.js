// Modified from https://github.com/Zilliqa/Zilliqa-JavaScript-Library
const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require ('@zilliqa-js/crypto');
const fs = require('fs')

const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');

// These are set by the core protocol, and may vary per-chain.
// These numbers are JUST AN EXAMPLE. They will NOT WORK on the developer testnet
// or mainnet.
// For more information: https://apidocs.zilliqa.com/?shell#getnetworkid
const CHAIN_ID = 333;
const MSG_VERSION = 1;
const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);

// Populate the wallet with an account
const privkey = '3375F915F3F9AE35E6B301B7670F53AD1A5BE15D8221EC7FD5E503F21D3450C8';

zilliqa.wallet.addByPrivateKey(
  privkey
);

const address = CP.getAddressFromPrivateKey(privkey);
console.log("Your account address is:");
console.log(`0x${address}`);

async function testBlockchain() {
  try {

    // Get Balance
    const balance = await zilliqa.blockchain.getBalance(address);
    // Get Minimum Gas Price from blockchain
    const minGasPrice = await zilliqa.blockchain.getMinimumGasPrice();
    console.log(`Your account balance is:`);
    console.log(balance.result)
    console.log(`Current Minimum Gas Price: ${minGasPrice.result}`);
    const myGasPrice = units.toQa('1000', units.Units.Li); // Gas Price that will be used by all transactions
    console.log(`My Gas Price ${myGasPrice.toString()}`)
    console.log('Sufficient Gas Price?');
    console.log(myGasPrice.gte(new BN(minGasPrice.result))); // Checks if your gas price is less than the minimum gas price

    /*
    // Send a transaction to the network
    const tx = await zilliqa.blockchain.createTransaction(
      zilliqa.transactions.new({
        version: VERSION,
        toAddr: "573EC96638C8BB1C386394602E1460634F02ADDA",
        amount: new BN(units.toQa("1", units.Units.Zil)), // Sending an amount in Zil (1) and converting the amount to Qa
        gasPrice: myGasPrice, // Minimum gasPrice veries. Check the `GetMinimumGasPrice` on the blockchain
        gasLimit: Long.fromNumber(1)
      })
    );

    console.log(`The transaction status is:`);
    console.log(tx.receipt);
    */

    // Deploy a contract
    var zdex_code = ``;
    fs.readFile('../contracts/ZDExchange.scilla', 'utf8', function(err, contents) {
      zdex_code = contents;
    });

    const init = [
      // this parameter is mandatory for all init arrays
      {
        vname: "_scilla_version",
        type: "Uint32",
        value: "1"
      }
    ];

    // Instance of class Contract
    const contract = zilliqa.contracts.new(zdex_code, init);

    // Deploy the contract
    const [deployTx, zdex] = await contract.deploy({
      version: VERSION,
      gasPrice: myGasPrice,
      gasLimit: Long.fromNumber(10000)
    });

    // Introspect the state of the underlying transaction
    console.log(`Deployment Transaction ID: ${deployTx.id}`);
    console.log(`Deployment Transaction Receipt:`);
    console.log(deployTx.txParams.receipt);

    // Get the deployed contract address
    console.log("The contract address is:");
    console.log(zdex.address);
    /*
    (const callTx = await zdex.call(
      "setzdex",
      [
        {
          vname: "msg",
          type: "String",
          value: "zdex World"
        }
      ],
      {
        // amount, gasPrice and gasLimit must be explicitly provided
        version: VERSION,
        amount: new BN(0),
        gasPrice: myGasPrice,
        gasLimit: Long.fromNumber(8000),
      }
    );
    console.log(callTx);
    */
    //Get the contract state
    const state = await zdex.getState();
    console.log("The state of the contract is:");
    console.log(state);
  } catch (err) {
    console.log(err);
  }
}

testBlockchain();

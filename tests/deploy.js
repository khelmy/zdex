const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require ('@zilliqa-js/crypto');
const fs = require('fs');

function init_shared(privkey, zilliqa) {
  zilliqa.wallet.addByPrivateKey(
    privkey
  );
  const address = CP.getAddressFromPrivateKey(privkey);
  console.log("Your account address is:");
  console.log(`0x${address}`);

  const hub_code = fs.readFileSync('../contracts/Hub.scilla', 'utf8');

  const hub_init = [
    {
      vname: "_scilla_version",
      type: "Uint32",
      value: "0"
    }
  ];

  const token_code = fs.readFileSync('../contracts/FungibleToken.scilla', 'utf8');
  const token_init = [
    {
      vname: "_scilla_version",
      type: "Uint32",
      value: "0"
    },
    {
      vname: "owner",
      type: "ByStr20",
      value: `0x${address}`
    },
    {
      vname: "decimals",
      type: "Uint32",
      value: "12"
    },
    {
      vname: "total_tokens",
      type: "Uint128",
      value: "1000000000000"
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

  return [address, hub_code, hub_init, token_code, token_init];
}

function init_aux(h_address) {
  const l_m_code = fs.readFileSync('../contracts/LiquidityManager.scilla', 'utf8');
  const z_t_code = fs.readFileSync('../contracts/ZilToToken.scilla', 'utf8');
  const t_z_code = fs.readFileSync('../contracts/TokenToZil.scilla', 'utf8');

  const aux_init = [
    {
      vname: "_scilla_version",
      type: "Uint32",
      value: "0"
    },
    {
      vname: "hub",
      type: "ByStr20",
      value: `0x${h_address}`
    }
  ];

  return [l_m_code, z_t_code, t_z_code, aux_init]
}

function init_kaya() {
  const kayaCli = require('kaya-cli');
  const readline = require('readline-sync');

  const zilliqa = new Zilliqa('http://localhost:4200');

  // These are set by the core protocol, and may vary per-chain.
  // For more information: https://apidocs.zilliqa.com/?shell#getnetworkid
  const VERSION = 1;

  // Kaya's pkeys aren't accessible, so need to be manually inputted :(
  const privkey = readline.question("Please input Private Keys (10): ");
  console.log('Private key used: ' + privkey);

  const [address, hub_code, hub_init,
    token_code, token_init] = init_shared(privkey, zilliqa);

  return [zilliqa, VERSION, address, hub_code, hub_init, token_code, token_init];
}

function init_testnet() {
  const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');

  const CHAIN_ID = 333;
  const MSG_VERSION = 1;
  const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);

  const privkey = fs.readFileSync('./privkey_testnet.txt', 'utf8');

  const [address, hub_code, hub_init,
    token_code, token_init] = init_shared(privkey, zilliqa);

  return [zilliqa, VERSION, address, hub_code, hub_init, token_code, token_init];
}

// Verbose deploy function
async function deploy_v(zilliqa, VERSION, address, code, init) {
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
    const myGasLimit = Long.fromNumber(90000);

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

// Deploys all contracts
// Network: -1 = Dummy, 0 = Kaya, 1 = Testnet, 2 = Mainnet
async function deploy_all_v(network) {
  // DUMMY:
  if (network == -1) {
    var [zilliqa, VERSION, address, hub_code,
      hub_init, token_code, token_init] = init_kaya();
    // Dummy values
    var h_address = '68ec958221f4fe002b7f438465e68b1bb46cbc27'
    var t_address = '968393a8c8980185ba66edfe08658526a7dc48ea'
  } else{
    // KAYA:
    if (network == 0) {
      var [zilliqa, VERSION, address, hub_code,
        hub_init, token_code, token_init] = init_kaya();
    }
    // TESTNET:
    else if (network == 1) {
      var [zilliqa, VERSION, address, hub_code,
        hub_init, token_code, token_init] = init_testnet();
    }
    var h_address = await deploy_v(zilliqa, VERSION, address, hub_code, hub_init);
    var [l_m_code, z_t_code, t_z_code, aux_init] = init_aux(h_address);
    var l_m_address = await deploy_v(zilliqa, VERSION, address, l_m_code, aux_init);
    var z_t_address = await deploy_v(zilliqa, VERSION, address, z_t_code, aux_init);
    var t_z_address = await deploy_v(zilliqa, VERSION, address, t_z_code, aux_init);

    var t_address = await deploy_v(zilliqa, VERSION, address, token_code, token_init);
  }
  console.log("Hub contract address: ");
  console.log(h_address);
  console.log("LiquidityManager contract address: ");
  console.log(l_m_address);
  console.log("ZilToToken contract address: ");
  console.log(z_t_address);
  console.log("TokenToZil contract address: ");
  console.log(t_z_address);
  console.log("FungibleToken contract address: ");
  console.log(t_address);
  return [zilliqa, VERSION, address, hub_code, hub_init, token_code, token_init,
    l_m_code, z_t_code, t_z_code, aux_init,
    h_address, l_m_address, z_t_address, t_z_address, t_address];
}

async function main(network = 0) {
  await deploy_all_v(network);
  process.exit();
}

exports.deploy_all_v = deploy_all_v;

if (typeof require != 'undefined' && require.main === module) {
  process.argv.length == 2 ? main() : main(process.argv[2]);
}

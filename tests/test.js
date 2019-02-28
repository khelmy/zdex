const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require ('@zilliqa-js/crypto');

const deploy = require("./deploy.js");
const m_l = require("./m_l_tests.js");
const z_to_t = require("./z_to_t_tests.js");
const t_to_z = require("./t_to_z_tests.js");
const t_to_t = require("./t_to_t_tests.js");

async function test_all_v(network, z_addr, t_addr) {
  try {
    if (z_addr == 0 || t_addr == 0) {
      var [zilliqa, VERSION, address, zdex_code, zdex_init, token_code, token_init,
        z_address, t_address] = await deploy.deploy_all_v(network);
    }
    else {
      var z_address = z_addr;
      var t_address = t_addr;
    }
    var zdex = zilliqa.contracts.at(z_address);
    var fungible_token = zilliqa.contracts.at(t_address);
    var z_args = ({
      version: VERSION,
      toAddr: z_address,
      amount: units.toQa('0', units.Units.Zil),
      gasPrice: units.toQa('1000', units.Units.Li),
      gasLimit: Long.fromNumber(1000)
    });
    var t_args = ({
      version: VERSION,
      toAddr: t_address,
      amount: units.toQa('0', units.Units.Zil),
      gasPrice: units.toQa('1000', units.Units.Li),
      gasLimit: Long.fromNumber(1000)
    });
    
    await m_l.test_market_liquidity(zilliqa, VERSION,
        address, z_address, zdex, z_args, t_address, fungible_token, t_args);
    await z_to_t.test_zil_to_token_trades(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
    await t_to_z.test_token_to_zil_trades(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
    await t_to_t.test_token_to_token_trades(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
    console.log("######### All Tests Passed! #########")
  } catch(err) {
    console.log(err);
  }
}

async function main(network = 0, z_addr = 0, t_addr = 0) {
  await test_all_v(network, z_addr, t_addr);
  process.exit();
}

if (typeof require != 'undefined' && require.main === module) {
  if (process.argv.length == 2) {
    main();
  } else if (process.argv.length == 3) {
    main(process.argv[2])
  } else {
    // TODO: Implement command line args to avoid re-deployment
    main(process.argv[2], process.argv[3], process.argv[4])
  }
}

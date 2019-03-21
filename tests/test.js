const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require('@zilliqa-js/crypto');

const deploy = require("./deploy.js");
const hub = require("./hub_tests.js")
const l_m = require("./l_m_tests.js");
const z_t = require("./z_t_tests.js");
const t_z = require("./t_z_tests.js");

// Runs tests for all contracts
async function test_all_v(network, h_addr, l_m_addr, z_t_addr, t_z_addr, t_addr) {
  try {
    if (h_addr == 0 || l_m_addr == 0 || z_t_addr == 0 || t_z_addr == 0 || t_addr == 0) {
      var [zilliqa, VERSION, address, hub_code, hub_init, token_code, token_init,
        l_m_code, z_t_code, t_z_code, aux_init,
        h_address, l_m_address, z_t_address, t_z_address, t_address] = await deploy.deploy_all_v(network);
    }
    else {
      var h_address = h_addr;
      var l_m_address = l_m_addr;
      var z_t_address = z_t_addr;
      var t_z_address = t_z_addr;
      var t_address = t_addr;
    }
    var h_args = ({
      version: VERSION,
      toAddr: h_address,
      amount: units.toQa('0', units.Units.Zil),
      gasPrice: units.toQa('90000', units.Units.Li),
      gasLimit: Long.fromNumber(1000)
    });
    var t_args = ({
      version: VERSION,
      toAddr: t_address,
      amount: units.toQa('0', units.Units.Zil),
      gasPrice: units.toQa('90000', units.Units.Li),
      gasLimit: Long.fromNumber(1000)
    });
    await hub.test_hub(zilliqa, VERSION,
        address, h_address, h_args, l_m_address, z_t_address, t_z_address, t_address, t_args);
    await l_m.test_liquidity_manager(zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
    await z_t.test_zil_to_token(network, zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
    await t_z.test_token_to_zil(network, zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
    console.log("######### All Tests Passed! #########")
  } catch(err) {
    console.log(err);
  }
}

async function main(network = 0, h_addr = 0, l_m_addr = 0, z_t_addr = 0, t_z_addr = 0, t_addr = 0) {
  await test_all_v(network, h_addr, l_m_addr, z_t_addr, t_z_addr, t_addr);
  process.exit();
}

if (typeof require != 'undefined' && require.main === module) {
  if (process.argv.length == 2) {
    main();
  } else if (process.argv.length == 3) {
    main(process.argv[2])
  } else {
    // TODO: Implement command line args to avoid re-deployment
    main(process.argv[2], process.argv[3], process.argv[4], process.argv[5],
      process.argv[6])
  }
}

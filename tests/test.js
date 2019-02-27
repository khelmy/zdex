const deploy = require("./deploy.js");
const m_l = require("./m_l_tests.js");
const z_to_t = require("./z_to_t_tests.js");
const t_to_z = require("./t_to_z_tests.js");
const t_to_t = require("./t_to_t_tests.js");

async function test_all_v(network) {
  try {
    const [zilliqa, VERSION, address, zdex_code,
      zdex_init, token_code, token_init, z_address, t_address] = await deploy.deploy_all_v(network);
    await m_l.test_market_liquidity(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
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

async function main(network = 0) {
  await test_all_v(network);
  process.exit();
}

if (typeof require != 'undefined' && require.main === module) {
  process.argv.length == 2 ? main() : main(process.argv[2]);
}

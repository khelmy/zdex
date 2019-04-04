const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const common = require('./common.js');

async function test_add_liquidity(zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("Testing AddLiquidity");
  try {
    let add_liquidity_args = Object.assign({}, h_args);
    add_liquidity_args.amount = units.toQa('20', units.Units.Zil);
    let data = ([
      {
        vname: "_tag",
        type: "String",
        value: "AddLiquidity"
      },
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      },
      {
        vname: "min_liquidity",
        type: "Uint128",
        value: 2e4
      },
      {
        vname: "max_tokens",
        type: "Uint128",
        value: 4e4
      },
      {
        vname: "deadline",
        type: "BNum",
        value: 1e20
      }
    ]);
    let add_liquidity_call = await common.bundle_tx(zilliqa, add_liquidity_args, data);
    console.log(add_liquidity_call);
  } catch (err) {
    console.log(err);
  }
}

async function test_remove_liquidity(zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("Testing RemoveLiquidity");
  try {
    let data = ([
      {
        vname: "_tag",
        type: "String",
        value: "RemoveLiquidity"
      },
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      },
      {
        vname: "amount",
        type: "Uint128",
        value: 1e4
      },
      {
        vname: "min_zil",
        type: "Uint128",
        value: 1e13
      },
      {
        vname: "min_tokens",
        type: "Uint128",
        value: 2e4
      },
      {
        vname: "deadline",
        type: "BNum",
        value: 1e20
      },
      {
        vname: "recipient",
        type: "ByStr20",
        value: `0x${address}`
      }
    ]);
    let remove_liquidity_call = await common.bundle_tx(zilliqa, h_args, data);
    console.log(remove_liquidity_call);
  } catch (err) {
    console.log(err);
  }
}

// Runs tests for liquidity manager contract
async function test_liquidity_manager(zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("##### Testing LiquidityManager #####");
  try {
    await test_add_liquidity(zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
    await test_remove_liquidity(zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
  } catch (err) {
    console.log(err);
  }
}

exports.test_liquidity_manager = test_liquidity_manager;

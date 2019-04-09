const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const common = require('./common.js');
const assert = require('assert').strict;

async function test_add_liquidity(zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing AddLiquidity");
  try {
    let add_liquidity_args = Object.assign({}, args);
    add_liquidity_args.amount = new BN(1e8);
    let data = ([
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      },
      {
        vname: "min_liquidity",
        type: "Uint128",
        value: `${4e4}`
      },
      {
        vname: "max_tokens",
        type: "Uint128",
        value: `${8e4}`
      },
      {
        vname: "deadline",
        type: "BNum",
        value:  `${1e20}`
      }
    ]);
    // let add_liquidity_call = await common.bundle_tx(zilliqa, add_liquidity_args, data);
    let approve_call = await common.approve(zilliqa, args, t, l_m_address);
    let add_liquidity_call = await h.call("AddLiquidity", data, add_liquidity_args, 33, 1000, true);
    assert.strictEqual(add_liquidity_call.status, 2);
  } catch (err) {
    console.log(err);
  }
}

async function test_remove_liquidity(zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing RemoveLiquidity");
  try {
    let data = ([
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      },
      {
        vname: "amount",
        type: "Uint128",
        value: `${1e4}`
      },
      {
        vname: "min_zil",
        type: "Uint128",
        value: `${1e13}`
      },
      {
        vname: "min_tokens",
        type: "Uint128",
        value: `${2e4}`
      },
      {
        vname: "deadline",
        type: "BNum",
        value: `${1e20}`
      },
      {
        vname: "recipient",
        type: "ByStr20",
        value: `0x${address}`
      }
    ]);
    // let remove_liquidity_call = await common.bundle_tx(zilliqa, h_args, data);
    let remove_liquidity_call = await h.call("RemoveLiquidity", data, args, 33, 1000, true);
    assert.strictEqual(remove_liquidity_call.status, 2);
  } catch (err) {
    console.log(err);
  }
}

// Runs tests for liquidity manager contract
async function test_liquidity_manager(zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("##### Testing LiquidityManager #####");
  try {
    await test_add_liquidity(zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
    await test_remove_liquidity(zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
  } catch (err) {
    console.log(err);
  }
}

exports.test_liquidity_manager = test_liquidity_manager;

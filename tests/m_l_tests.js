const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require ('@zilliqa-js/crypto');

async function test_create_market(zilliqa, VERSION,
    address, z_address, zdex, z_args, t_address, fungible_token, t_args) {
  console.log("Testing CreateMarket");
  try {
    const c_m_msg = ([
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      }
    ]);
    var c_m_call = await zdex.call("CreateMarket", z_args, c_m_msg);
    console.log(c_m_call);
    /*
    var balanceof_message = ([
      {
        vname: "tokenOwner",
        type: "ByStr20",
        value: `0x${z_address}`
      }
    ]);
    var balanceof_call = await fungible_token.call("BalanceOf", t_args, balanceof_message);
    console.log(balanceof_call);
    */

  } catch (err) {
    console.log(err);
  }
}

async function test_add_liquidity(zilliqa, VERSION,
    address, z_address, zdex, z_args, t_address, fungible_token, t_args) {
  console.log("Testing AddLiquidity");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_remove_liquidity(zilliqa, VERSION,
    address, z_address, zdex, z_args, t_address, fungible_token, t_args) {
  console.log("Testing RemoveLiquidity");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_market_liquidity(zilliqa, VERSION,
    address, z_address, zdex, z_args, t_address, fungible_token, t_args) {
  console.log("##### Testing Market Creation and Liquidity #####");
  try {
    await test_create_market(zilliqa, VERSION,
        address, z_address, zdex, z_args, t_address, fungible_token, t_args);
    await test_add_liquidity(zilliqa, VERSION,
        address, z_address, zdex, z_args, t_address, fungible_token, t_args);
    await test_remove_liquidity(zilliqa, VERSION,
        address, z_address, zdex, z_args, t_address, fungible_token, t_args);
  } catch (err) {
    console.log(err);
  }
}

exports.test_market_liquidity = test_market_liquidity;

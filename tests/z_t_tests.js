const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const zdex_lib = require("./zdex_lib.js");
const common = require('./common.js');
const assert = require('assert').strict;

let transfer_address = "e1da14ab24527305bfbde31b9ecde2ac87eabf55";

async function test_zil_to_token_swap_input(network, zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing ZilToTokenSwapInput");
  try {
    let zil_to_token_swap_input_args = Object.assign({}, args);
    zil_to_token_swap_input_args.amount = new BN(1e4);
    let data = ([
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      },
      {
        vname: "min_tokens",
        type: "Uint128",
        value: `${1e2}`
      },
      {
        vname: "deadline",
        type: "BNum",
        value: `${1e20}`
      }
    ]);
    let approve_call = await common.approve(zilliqa, args, t, z_t_address);
    let zil_to_token_swap_input_call = await h.call("ZilToTokenSwapInput", data, zil_to_token_swap_input_args, 33, 1000, true);
    assert.strictEqual(zil_to_token_swap_input_call.status, 2);
  } catch (err) {
    console.log(err);
  }
}

async function test_zil_to_token_transfer_input(network, zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing ZilToTokenTransferInput");
  try {
    let zil_to_token_transfer_input_args = Object.assign({}, args);
    zil_to_token_transfer_input_args.amount = new BN(1e4);
    let data = ([
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      },
      {
        vname: "min_tokens",
        type: "Uint128",
        value: `${1e2}`
      },
      {
        vname: "deadline",
        type: "BNum",
        value: `${1e20}`
      },
      {
        vname: "recipient",
        type: "ByStr20",
        value: `0x${transfer_address}`
      }
    ]);
    let zil_to_token_transfer_input_call = await h.call("ZilToTokenTransferInput", data, zil_to_token_transfer_input_args, 33, 1000, true);
    assert.strictEqual(zil_to_token_transfer_input_call.status, 2);
  } catch (err) {
    console.log(err);
  }
}

async function test_zil_to_token_swap_output(network, zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing ZilToTokenSwapOutput");
  try {
    let zil_to_token_swap_output_args = Object.assign({}, args);
    zil_to_token_swap_output_args.amount = new BN(1e4);
    let data = ([
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      },
      {
        vname: "tokens_bought",
        type: "Uint128",
        value: `${1e2}`
      },
      {
        vname: "deadline",
        type: "BNum",
        value: `${1e20}`
      }
    ]);
    let zil_to_token_swap_output_call = await h.call("ZilToTokenSwapOutput", data, zil_to_token_swap_output_args, 33, 1000, true);
    assert.strictEqual(zil_to_token_swap_output_call.status, 2);
  } catch (err) {
    console.log(err);
  }
}

async function test_zil_to_token_transfer_output(network, zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing ZilToTokenTransferOutput");
  try {
    let zil_to_token_transfer_output_args = Object.assign({}, args);
    zil_to_token_transfer_output_args.amount = new BN(1e4);
    let data = ([
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      },
      {
        vname: "tokens_bought",
        type: "Uint128",
        value: `${1e2}`
      },
      {
        vname: "deadline",
        type: "BNum",
        value: `${1e20}`
      },
      {
        vname: "recipient",
        type: "ByStr20",
        value: `0x${transfer_address}`
      }
    ]);
    let zil_to_token_transfer_output_call = await h.call("ZilToTokenTransferOutput", data, zil_to_token_transfer_output_args, 33, 1000, true);
    assert.strictEqual(zil_to_token_transfer_output_call.status, 2);
  } catch (err) {
    console.log(err);
  }
}

// Tests for zil to token contract
async function test_zil_to_token(network, zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("### Testing ZilToToken ###");
  try {
    await test_zil_to_token_swap_input(network, zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
    await test_zil_to_token_transfer_input(network, zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
    await test_zil_to_token_swap_output(network, zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
    await test_zil_to_token_transfer_output(network, zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
  } catch (err) {
    console.log(err);
  }
}

exports.test_zil_to_token = test_zil_to_token;

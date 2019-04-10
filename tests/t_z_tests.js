const zdex_lib = require("./zdex_lib.js");
const common = require('./common.js');
const assert = require('assert').strict;

let transfer_address = "e1da14ab24527305bfbde31b9ecde2ac87eabf55";

async function test_token_to_zil_swap_input(network, zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing TokenToZilSwapInput");
  try {
    let data = ([
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      },
      {
        vname: "tokens_sold",
        type: "Uint128",
        value: `${1e12}`
      },
      {
        vname: "min_zil",
        type: "Uint128",
        value: `${1e4}`
      },
      {
        vname: "deadline",
        type: "BNum",
        value: `${1e20}`
      }
    ]);
    let approve_call = await common.approve(zilliqa, args, t, t_z_address);
    let token_to_zil_swap_input_call = await h.call("TokenToZilSwapInput", data, args, 33, 1000, true);
    assert.strictEqual(token_to_zil_swap_input_call.status, 2);
  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_zil_transfer_input(network, zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing TokenToZilTransferInput");
  try {
    let data = ([
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      },
      {
        vname: "tokens_sold",
        type: "Uint128",
        value: `${1e12}`
      },
      {
        vname: "min_zil",
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
    let token_to_zil_transfer_input_call = await h.call("TokenToZilTransferInput", data, args, 33, 1000, true);
    assert.strictEqual(token_to_zil_transfer_input_call.status, 2);
  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_zil_swap_output(network, zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing TokenToZilSwapOutput");
  try {
    let data = ([
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      },
      {
        vname: "zil_bought",
        type: "Uint128",
        value: `${1e4}`
      },
      {
        vname: "max_tokens",
        type: "Uint128",
        value: `${1e12}`
      },
      {
        vname: "deadline",
        type: "BNum",
        value: `${1e20}`
      }
    ]);
    let token_to_zil_swap_output_call = await h.call("TokenToZilSwapOutput", data, args, 33, 1000, true);
    assert.strictEqual(token_to_zil_swap_output_call.status, 2);
  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_zil_transfer_output(network, zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing TokenToZilTransferOutput");
  try {
    let data = ([
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      },
      {
        vname: "zil_bought",
        type: "Uint128",
        value: `${1e4}`
      },
      {
        vname: "max_tokens",
        type: "Uint128",
        value: `${1e12}`
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
    let token_to_zil_transfer_output_call = await h.call("TokenToZilTransferOutput", data, args, 33, 1000, true);
    assert.strictEqual(token_to_zil_transfer_output_call.status, 2);
  } catch (err) {
    console.log(err);
  }
}

// Tests for token to zil contract
async function test_token_to_zil(network, zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("### Testing TokenToZil ###");
  try {
    await test_token_to_zil_swap_input(network, zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
    await test_token_to_zil_transfer_input(network, zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
    await test_token_to_zil_swap_output(network, zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
    await test_token_to_zil_transfer_output(network, zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
  } catch (err) {
    console.log(err);
  }
}

exports.test_token_to_zil = test_token_to_zil;

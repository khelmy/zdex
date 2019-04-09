const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const common = require('./common.js');
const assert = require('assert').strict;

async function test_initialize(zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing Initialize");
  try {
    let data = ([
      {
        vname: "l_m_address",
        type: "ByStr20",
        value: `0x${l_m_address}`
      },
      {
        vname: "z_t_address",
        type: "ByStr20",
        value: `0x${z_t_address}`
      },
      {
        vname: "t_z_address",
        type: "ByStr20",
        value: `0x${t_z_address}`
      }
    ]);
    let initialize_call = await h.call("Initialize", data, args, 33, 1000, true);
    assert.strictEqual(initialize_call.status, 2);
  } catch (err) {
    console.log(err);
  }
}

async function test_create_market(zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing CreateMarket");
  try {
    let data = ([
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      }
    ]);
    // let create_market_call = await common.bundle_tx(zilliqa, h_args, data);
    let create_market_call = await h.call("CreateMarket", data, args, 33, 1000, true);
    assert.strictEqual(create_market_call.status, 2);
  } catch (err) {
    console.log(err);
  }
}

async function test_approve_aux(zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing ApproveAux");
  try {
    try {
      let aux = [l_m_address, z_t_address, t_z_address];
      let data = null;
      let approve_aux_call = null;
      for (i in aux) {
        data = ([
          {
            vname: "token",
            type: "ByStr20",
            value: `0x${t_address}`
          },
          {
            vname: "aux",
            type: "ByStr20",
            value: `0x${aux[i]}`
          },
          {
            vname: "limit",
            type: "Uint128",
            value: `${1e12}`
          }
        ]);
        approve_aux_call = await h.call("ApproveAux", data, args, 33, 1000, true);
        assert.strictEqual(approve_aux_call.status, 2);
      }
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
}

// Runs tests for hub contract
async function test_hub(zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("##### Testing Hub #####");
  try {
    await test_initialize(zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
    await test_create_market(zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
    await test_approve_aux(zilliqa, VERSION,
        address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args);
  } catch (err) {
    console.log(err);
  }
}

exports.test_hub = test_hub;

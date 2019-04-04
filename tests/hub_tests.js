const common = require('./common.js');

async function test_initialize(zilliqa, VERSION,
    address, h, h_address, l_m, l_m_address, z_t, z_t_address, t_z, t_z_address, t, t_address, args) {
  console.log("Testing Initialize");
  try {
    let data = ([
      {
        _vname: "l_m_address",
        type: "ByStr20",
        value: `0x${l_m_address}`
      },
      {
        _vname: "z_t_address",
        type: "ByStr20",
        value: `0x${z_t_address}`
      },
      {
        _vname: "t_z_address",
        type: "ByStr20",
        value: `0x${t_z_address}`
      }
    ]);;
    let initialize_call = await h.call("Initialize", data, args, 33, 1000, true);
    console.log(initialize_call);
    // console.log(initialize_call.receipt.errors);
    // console.log(initialize_call.receipt.errors["0"]);
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
    console.log(create_market_call);
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
            value: "1000000"
          }
        ]);
        // approve_aux_call = await common.bundle_tx(zilliqa, h_args, data);
        approve_aux_call = await h.call("ApproveAux", data, args, 33, 1000, true);
        console.log(approve_aux_call);
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

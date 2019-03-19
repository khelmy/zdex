const common = require('./common.js');

async function test_initialize(zilliqa, VERSION,
    address, h_address, h_args, l_m_address, z_t_address, t_z_address, t_address, t_args) {
  console.log("Testing Initialize");
  try {
    let data = ([
      {
        vname: "_tag",
        type: "String",
        value: "Initialize"
      },
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
    ]);
    let initialize_call = await common.bundle_tx(zilliqa, h_args, data);
    console.log(initialize_call);
  } catch (err) {
    console.log(err);
  }
}

async function test_create_market(zilliqa, VERSION,
    address, h_address, h_args, l_m_address, z_t_address, t_z_address, t_address, t_args) {
  console.log("Testing CreateMarket");
  try {
    let data = ([
      {
        vname: "_tag",
        type: "String",
        value: "ApproveAux"
      },
      {
        vname: "token",
        type: "ByStr20",
        value: `0x${t_address}`
      }
    ]);
    let create_market_call = await common.bundle_tx(zilliqa, h_args, data);
    console.log(create_market_call);
  } catch (err) {
    console.log(err);
  }
}

async function test_approve_aux(zilliqa, VERSION,
    address, h_address, h_args, l_m_address, z_t_address, t_z_address, t_address, t_args) {
  console.log("Testing ApproveAux");
  try {
    console.log("Testing CreateMarket");
    try {
      let aux = [l_m_address, z_t_address, t_z_address];
      let data = null;
      let approve_aux_call = null;
      for (i in aux) {
        data = ([
          {
            vname: "_tag",
            type: "String",
            value: "ApproveAux"
          },
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
        approve_aux_call = await common.bundle_tx(zilliqa, h_args, data);
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
    address, h_address, h_args, l_m_address, z_t_address, t_z_address, t_address, t_args) {
  console.log("##### Testing Hub #####");
  try {
    await test_initialize(zilliqa, VERSION,
        address, h_address, h_args, l_m_address, z_t_address, t_z_address, t_address, t_args);
    await test_create_market(zilliqa, VERSION,
        address, h_address, h_args, l_m_address, z_t_address, t_z_address, t_address, t_args);
    await test_approve_aux(zilliqa, VERSION,
        address, h_address, h_args, l_m_address, z_t_address, t_z_address, t_address, t_args);
  } catch (err) {
    console.log(err);
  }
}

exports.test_hub = test_hub;

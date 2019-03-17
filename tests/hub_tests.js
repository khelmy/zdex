const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require ('@zilliqa-js/crypto');

async function test_initialize(zilliqa, VERSION,
    address, h_address, h_args, l_m_address, z_t_address, t_z_address, t_address, t_args) {
  console.log("Testing Initialize");
  try {
    let initialize_msg = Object.assign({}, h_args);
    initialize_msg.data = ([
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
    let initialize_tx = zilliqa.transactions.new(initialize_msg);
    let initialize_call = await zilliqa.blockchain.createTransaction(initialize_tx);
    console.log(initialize_call);
  } catch (err) {
    console.log(err);
  }
}

async function test_create_market(zilliqa, VERSION,
    address, h_address, h_args, l_m_address, z_t_address, t_z_address, t_address, t_args) {
  console.log("Testing CreateMarket");
  try {
    let create_market_msg = Object.assign({}, h_args);
    create_market_msg.data = ([
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
    let create_market_tx = zilliqa.transactions.new(create_market_msg);
    let create_market_call = await zilliqa.blockchain.createTransaction(create_market_tx);
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
      for (i in aux) {
        approve_aux_msg = Object.assign({}, h_args);
        approve_aux_msg.data = ([
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
        approve_aux_tx = zilliqa.transactions.new(approve_aux_msg);
        approve_aux_call = await zilliqa.blockchain.createTransaction(approve_aux_tx);
        console.log(approve_aux_call);
      }
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
}

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

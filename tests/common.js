const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require('@zilliqa-js/crypto');
const assert = require('assert').strict;

// Bundle and deploy contract call
async function bundle_tx(zilliqa, args, data) {
  try {
    let msg = Object.assign({}, args);
    msg.data = JSON.stringify(data);
    // msg.toDS = true;
    let tx = zilliqa.transactions.new(msg, true);
    // let tx_signed = await zilliqa.wallet.sign(tx);
    //console.log(tx_signed);
    // let tx_call = await zilliqa.blockchain.createTransaction(tx_signed);
    let tx_call = await zilliqa.blockchain.createTransaction(tx, 33, 1000);
    return tx_call;
  } catch (err) {
    console.log(err);
  }
}

async function approve(zilliqa, args, t, other_address) {
  try {
    let approve_data = ([
      {
        vname: "spender",
        type: "ByStr20",
        value: `0x${other_address}`
      },
      {
        vname: "tokens",
        type: "Uint128",
        value: `${1e12}`
      }
    ]);
    let approve_call = await t.call("Approve", approve_data, args, 33, 1000, true);
    assert.strictEqual(approve_call.status, 2);
    return approve_call;
  } catch (err) {
    console.log(err);
  }
}


exports.bundle_tx = bundle_tx;
exports.approve = approve;

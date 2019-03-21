const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require('@zilliqa-js/crypto');

// Bundle and deploy contract call
async function bundle_tx(zilliqa, args, data) {
  try {
    let msg = Object.assign({}, args);
    msg.data = JSON.stringify(data);
    msg.toDS = true;
    let tx = zilliqa.transactions.new(msg);
    console.log(tx);
    let tx_call = await zilliqa.blockchain.createTransaction(tx);
    return tx_call;
  } catch (err) {
    console.log(err);
  }
}

exports.bundle_tx = bundle_tx;

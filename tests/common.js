const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require('@zilliqa-js/crypto');

// Bundle and delploy contract call
async function bundle_tx(zilliqa, args, data) {
  try {
    let msg = Object.assign({}, args);
    msg.data = data;
    let tx = zilliqa.transactions.new(msg);
    let tx_call = await zilliqa.blockchain.createTransaction(tx);
    return tx_call;
  } catch (err) {
    console.log(err);
  }
}

exports.bundle_tx = bundle_tx;

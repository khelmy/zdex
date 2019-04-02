const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require('@zilliqa-js/crypto');

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

exports.bundle_tx = bundle_tx;

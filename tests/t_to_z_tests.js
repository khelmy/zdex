const zdex_lib = require("./zdex_lib.js");

async function test_token_to_zil_swap_input(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing TokenToZilSwapInput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_zil_transfer_input(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing TokenToZilTransferInput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_zil_swap_output(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing TokenToZilSwapOutput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_zil_transfer_output(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing TokenToZilTransferOutput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_zil_trades(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("### Testing Token To Zil Trades ###");
  try {
    await test_token_to_zil_swap_input(network, zilliqa, VERSION,
      address, zdex_code, zdex_init, token_code,
      token_init, z_address, t_address);
    await test_token_to_zil_transfer_input(network, zilliqa, VERSION,
          address, zdex_code, zdex_init, token_code,
          token_init, z_address, t_address);
    await test_token_to_zil_swap_output(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
    await test_token_to_zil_transfer_output(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
  } catch (err) {
    console.log(err);
  }
}

exports.test_token_to_zil_trades = test_token_to_zil_trades;

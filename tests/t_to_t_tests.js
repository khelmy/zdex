const zdex_lib = require("./zdex_lib.js");

async function test_token_to_token_swap_input(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing TokenToTokenSwapInput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_token_transfer_input(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing TokenToTokenTransferInput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_token_swap_output(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing TokenToTokenSwapOutput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_token_transfer_output(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing TokenToTokenTransferOutput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_token_trades(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("### Testing Token To Token Trades ###");
  try {
    await test_token_to_token_swap_input(network, zilliqa, VERSION,
      address, zdex_code, zdex_init, token_code,
      token_init, z_address, t_address);
    await test_token_to_token_transfer_input(network, zilliqa, VERSION,
          address, zdex_code, zdex_init, token_code,
          token_init, z_address, t_address);
    await test_token_to_token_swap_output(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
    await test_token_to_token_transfer_output(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
  } catch (err) {
    console.log(err);
  }
}

exports.test_token_to_token_trades = test_token_to_token_trades;

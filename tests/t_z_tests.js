const zdex_lib = require("./zdex_lib.js");
const common = require('./common.js');

async function test_token_to_zil_swap_input(network, zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("Testing TokenToZilSwapInput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_zil_transfer_input(network, zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("Testing TokenToZilTransferInput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_zil_swap_output(network, zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("Testing TokenToZilSwapOutput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_zil_transfer_output(network, zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("Testing TokenToZilTransferOutput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_token_to_zil(network, zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("### Testing TokenToZil ###");
  try {
    await test_token_to_zil_swap_input(network, zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
    await test_token_to_zil_transfer_input(network, zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
    await test_token_to_zil_swap_output(network, zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
    await test_token_to_zil_transfer_output(network, zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
  } catch (err) {
    console.log(err);
  }
}

exports.test_token_to_zil = test_token_to_zil;

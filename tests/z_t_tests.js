const zdex_lib = require("./zdex_lib.js");
const common = require('./common.js');


async function test_zil_to_token_swap_input(network, zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("Testing ZilToTokenSwapInput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_zil_to_token_transfer_input(network, zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("Testing ZilToTokenTransferInput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_zil_to_token_swap_output(network, zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("Testing ZilToTokenSwapOutput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_zil_to_token_transfer_output(network, zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("Testing ZilToTokenTransferOutput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_zil_to_token(network, zilliqa, VERSION,
    address, h_address, h_args, t_address, t_args) {
  console.log("### Testing ZilToToken ###");
  try {
    await test_zil_to_token_swap_input(network, zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
    await test_zil_to_token_transfer_input(network, zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
    await test_zil_to_token_swap_output(network, zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
    await test_zil_to_token_transfer_output(network, zilliqa, VERSION,
        address, h_address, h_args, t_address, t_args);
  } catch (err) {
    console.log(err);
  }
}

exports.test_zil_to_token = test_zil_to_token;

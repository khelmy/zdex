const deploy = require("./deploy.js")

async function test_create_market(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing CreateMarket");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_add_liquidity(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing AddLiquidity");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_remove_liquidity(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing RemoveLiquidity");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_market_liquidity(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("##### Testing Market Creation and Liquidity #####");
  try {
    await test_create_market(network, zilliqa, VERSION,
      address, zdex_code, zdex_init, token_code,
      token_init, z_address, t_address);
    await test_add_liquidity(network, zilliqa, VERSION,
          address, zdex_code, zdex_init, token_code,
          token_init, z_address, t_address)
    await test_remove_liquidity(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address)
  } catch (err) {
    console.log(err);
  }
}

async function test_zil_to_token_swap_input(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing ZilToTokenSwapInput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_zil_to_token_transfer_input(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing ZilToTokenTransferInput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_zil_to_token_swap_output(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing ZilToTokenSwapOutput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_zil_to_token_transfer_output(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("Testing ZilToTokenTransferOutput");
  try {

  } catch (err) {
    console.log(err);
  }
}

async function test_zil_to_token_trades(network, zilliqa, VERSION,
    address, zdex_code, zdex_init, token_code,
    token_init, z_address, t_address) {
  console.log("### Testing Zil To Token Trades ###");
  try {
    await test_zil_to_token_swap_input(network, zilliqa, VERSION,
      address, zdex_code, zdex_init, token_code,
      token_init, z_address, t_address);
    await test_zil_to_token_transfer_input(network, zilliqa, VERSION,
          address, zdex_code, zdex_init, token_code,
          token_init, z_address, t_address);
    await test_zil_to_token_swap_output(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
    await test_zil_to_token_transfer_output(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
  } catch (err) {
    console.log(err);
  }
}

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


async function test_all_v(network) {
  try {
    const [zilliqa, VERSION, address, zdex_code,
      zdex_init, token_code, token_init, z_address, t_address] = await deploy.deploy_all_v(network);
    await test_market_liquidity(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
    await test_zil_to_token_trades(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
    await test_token_to_zil_trades(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
    await test_token_to_token_trades(network, zilliqa, VERSION,
        address, zdex_code, zdex_init, token_code,
        token_init, z_address, t_address);
    console.log("######### All Tests Passed! #########")
  } catch(err) {
    console.log(err);
  }
}

async function main(network = 0) {
  await test_all_v(network);
  process.exit();
}

if (typeof require != 'undefined' && require.main === module) {
  process.argv.length == 2 ? main() : main(process.argv[2]);
}

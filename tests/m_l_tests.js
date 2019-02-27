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

exports.test_market_liquidity = test_market_liquidity;

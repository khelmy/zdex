const deploy = require("./deploy.js")

async function main(network = 0) {
  const [zilliqa, VERSION, address, zdex_code,
    zdex_init, token_code, token_init, z_address, t_address] = deploy.deploy_all_v(network);
}

if (typeof require != 'undefined' && require.main === module) {
  process.argv.length == 2 ? main() : main(process.argv[2]);
}

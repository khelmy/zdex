var assert = require('assert')

const fee_ratio_kept = 997;
const fee_ratio_denom = 1000;

/*
let input_price =
    fun (input_amount : Uint128) =>
    fun (input_reserve : Uint128) =>
    fun (output_reserve : Uint128) =>
        (* assert input_reserve > 0 and output_reserve > 0 *)
        let input_fee_kept = builtin mul input_amount fee_ratio_kept in
        let numerator = builtin mul input_fee_kept output_reserve in
        let input_reserve_denom = builtin mul input_reserve fee_ratio_denom in
        let denominator = builtin add input_reserve_denom input_fee_kept in
        builtin div numerator denominator
*/
function input_price(input_amount, input_reserve, output_reserve) {
  assert(input_reserve > 0 && output_reserve > 0)
  return (Math.floor((input_amount * fee_ratio_kept * output_reserve) /
    ((input_reserve * fee_ratio_denom) + (input_amount * fee_ratio_kept))));
}

/*
let output_price =
    fun (output_amount : Uint128) =>
    fun (input_reserve : Uint128) =>
    fun (output_reserve : Uint128) =>
        (* assert input_reserve > 0 and output_reserve > 0 *)
        let in_res_out_amount = builtin mul input_reserve output_amount in
        let numerator = builtin mul in_res_out_amount fee_ratio_denom in
        let out_res_amount = builtin sub output_reserve output_amount in
        let denominator = builtin mul out_res_amount fee_ratio_kept in
        let ratio = builtin div numerator denominator in
        builtin add ratio one
*/
function output_price(output_amount, input_reserve, output_reserve) {
  assert(input_reserve > 0 && output_reserve > 0)
  assert(output_reserve >= output_amount)
  return (Math.floor(((input_reserve * output_amount * fee_ratio_denom) /
    ((output_reserve - output_amount) * fee_ratio_kept)) + 1));
}

exports.input_price = input_price;
exports.output_price = output_price;

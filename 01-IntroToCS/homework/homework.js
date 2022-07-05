'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let bin = num.split('');
  let dec = 0;
  for (let i = bin.length - 1; i >= 0; i--) {
    dec += bin[i]*2**(bin.length - 1 -i);
  }
  return dec;

function DecimalABinario(num) {
  // tu codigo aca
  let bin = '';
  while (num > 0) {
		bin = num%2 + bin;
    num = Math.floor(num/2);
  }
  return bin;
  /*Codigo alternativo con array
  let bin = [];
  while (num > 0) {
		bin.unshift(num%2);
    num = Math.floor(num/2);
  }
  return bin.join(''); */
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
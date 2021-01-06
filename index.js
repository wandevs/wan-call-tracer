const BigNumber = require('bignumber.js');
const Web3 = require('web3');

function toAddress(str) {
  return '0x' + str.slice(str.length - 40);
}

function toHex(str) {
  return '0x' + (new BigNumber('0x' + str)).toString(16);
}

function callTracer(log) {
  if (log.error) {
    return;
  }
  var op = log.op;
  // If a new method invocation is being done, add to the call stack
  if (op == 'CALL') {
    if (Number(toHex(log.stack[log.stack.length - 3])) > 0) {
      // console.log('log', log);
      // console.log('to', toAddress(log.stack[log.stack.length - 2]));
      // console.log('value', toHex(log.stack[log.stack.length - 3]));
      return {to: toAddress(log.stack[log.stack.length - 2]), value: toHex(log.stack[log.stack.length - 3])};
    }
    return;
  }
}

async function wanCallTracer(txHash, rpcHttpUrl) {
  const web3 = new Web3(new Web3.providers.HttpProvider(rpcHttpUrl));
  web3.extend({
    property: 'debug',
    methods: [{
        name: 'traceTransaction',
        call: 'debug_traceTransaction',
        params: 1,
    }]
  });

  const data = await web3.debug.traceTransaction(txHash);
  let ret = data.structLogs.map(callTracer);
  ret = ret.filter(v=>v);
  // console.log('wanCallTracer return value:', ret);
  return ret;
}

// async function main() {
//   await wanCallTracer('0x695bb83db0a836557ece3b231b22d95cd4a2a0e91592ad7c561b6ea2a7754655', 'http://192.168.1.2:8545');
// }

// main();

// exports.wanCallTracer = wanCallTracer;

module.exports = wanCallTracer;


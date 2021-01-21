const Web3 = require('web3');

async function wanCallTracer(txHash, rpcHttpUrl) {
  const web3 = new Web3(new Web3.providers.HttpProvider(rpcHttpUrl));
  web3.extend({
    property: 'debug',
    methods: [{
        name: 'traceTransaction',
        call: 'debug_traceTransaction',
        params: 2,
    }]
  });

  const data = await web3.debug.traceTransaction(txHash, {tracer:'{callstack:[],step:function(t){var r={};"CALL"===t.op.toString()&&(r.from=t.contract.address(),r.to=t.contract.caller(),r.value=t.stack.peek(2).String(),"0"!==r.value&&this.callstack.push(r))},result:function(){return this.callstack},toHexString:function(t){for(var r=t.split(","),c=[],a=0;a<r;a++)c[a]=("0"+(255&r[a]).toString(16)).slice(-2);return c.join()}}'});

  return data;
}

module.exports = wanCallTracer;


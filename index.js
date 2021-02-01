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

  const data = await web3.debug.traceTransaction(txHash, {tracer:'{callstack:[],step:function(t){var r={};"CALL"===t.op.toString()&&(r.from=t.contract.address(),r.to=t.stack.peek(1).Bytes(),r.value=t.stack.peek(2).String(),"0"!==r.value&&this.callstack.push(r))},result:function(){return this.callstack},toHexString:function(t){for(var r=t.split(","),a=[],c=0;c<r;c++)a[c]=("0"+(255&r[c]).toString(16)).slice(-2);return a.join()}}'});


  return data.map((v)=>{
    return {
      from: v.from,
      to:  '0x' + Buffer.from(v.to, 'base64').toString('hex'),
      value: v.value
    }
  });
}

module.exports = wanCallTracer;


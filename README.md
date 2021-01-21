# WAN-CALL-TRACER

wan-call-tracer use to monitor internal transaction of wan.

## Install

```
$ yarn add @wandevs/wan-call-tracer

```

## How to use

```
const wanCallTracer = require('@wandevs/wan-call-tracer');

async function main() {
  
  let txHash = '0x695bb83db0a836557ece3b231b22d95cd4a2a0e91592ad7c561b6ea2a7754655';

  let rpcHttpUrl = 'http://192.168.1.2:8545';

  let ret = await wanCallTracer(txHash, rpcHttpUrl);

  console.log(ret);
}

main();


///////OUT PUT///////////
[ { from: '0xdabd997ae5e4799be47d6e69d9431615cba28f48',
    to: '0xea300406fe2eed9cd2bf5c47d01beca8ad294ec1',
    value: '20678828788640514153' },
  { from: '0xea300406fe2eed9cd2bf5c47d01beca8ad294ec1',
    to: '0x69fb45e04bb4ec1445871fa4cb86976e0778fe32',
    value: '20678828788640514153' } ]
///////////////////////

```
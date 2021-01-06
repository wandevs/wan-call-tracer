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

  let ret = await wanCallTracer(
      txHash, 
      'http://192.168.1.2:8545');

  console.log(ret);
}

main();


///////OUT PUT///////////
 [ { to: '0xea300406fe2eed9cd2bf5c47d01beca8ad294ec1',
    value: '0x23ebc8cb293b89a4' },
  { to: '0x4cf0a877e906dead748a41ae7da8c220e4247d9e',
    value: '0x23ebc8cb293b89a4' } ]
///////////////////////

```
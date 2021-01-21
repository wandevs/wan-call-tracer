const wanCallTracer = require('./index');
async function main() {
  let ret = await wanCallTracer('0xb1e90de321d412494069079044f80cee38740168210cdd17f9132de35c48b0cc', 'http://192.168.1.2:9545');
  console.log(ret);


  ret = await wanCallTracer('0x695bb83db0a836557ece3b231b22d95cd4a2a0e91592ad7c561b6ea2a7754655', 'http://192.168.1.2:8545');
  console.log(ret);
}

main();


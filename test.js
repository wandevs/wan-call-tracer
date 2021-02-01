const wanCallTracer = require('./index');
async function main() {
  let ret = await wanCallTracer('0xc148b7ac2b022d62dc66303906924020fd9edd1910401db4111610e6d2b9243d', 'http://192.168.1.2:9545');
  console.log(ret);
}

main();


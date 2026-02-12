import os from 'os'

console.log(os);

const plat = os.platform()
console.log(plat);


const arch = os.arch()
console.log(arch);

const mem = os.totalmem()
console.log(mem);

const host = os.hostname()
console.log(host);

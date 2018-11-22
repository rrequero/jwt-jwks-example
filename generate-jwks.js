const fs = require('fs');
const { pem2jwk } = require('pem-jwk');

const str = fs.readFileSync('./keys/privkey.pem');
const jwk = pem2jwk(str);

jwk.use = 'sig';
jwk.kid = 'kidKey';
fs.writeFileSync('./jwks.json', JSON.stringify({keys: [jwk]}));
console.log('File generated in jwk.json');
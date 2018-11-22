const { sign } = require('jsonwebtoken');
const { readFileSync } = require('fs');

const cert = readFileSync('./keys/privkey.pem');

const token = sign(
  {
      data: {
        name: 'commitConf',
        email: 'info@commitconf.com',
        id: 2018
      }
  },
  { key: cert },
  {
      expiresIn: '24h',
      algorithm: 'RS256',
      audience: 'commitConf',
      issuer: 'ra',
      header: { kid: 'kidKey' },
  },
);

console.log(token);

const Koa = require('koa');
const Router = require('koa-router');
const jwt = require('koa-jwt');
const jwksRsa = require('jwks-rsa');


const audience = 'commitConf';
const issuer = 'ra';

const app = new Koa();

app.use(jwt({
  secret: jwksRsa.koaJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 2,
    jwksUri: `http://localhost:8080/jwks.json`
  }),
  audience,
  issuer,
  algorithms: [ 'RS256' ]
}));

const router = new Router();

router.get('/me', ctx => {
  ctx.body = ctx.state.user
});

app.use(router.middleware());

// Start the server.
const port = 3000;
app.listen(port, (err) =>  {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server started in port: 3000');
});

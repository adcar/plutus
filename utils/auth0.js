import { initAuth0 } from '@auth0/nextjs-auth0';
const cryptoRandomString = require('crypto-random-string');

export default initAuth0({
  domain: 'dev-624rasw3.auth0.com',
  clientId: 'tIMRXlqT4j8YLNGRG0yGAbKF3udf53L1',
  clientSecret: process.env.AUTH0_PRIVATE_KEY,
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: cryptoRandomString({length: 32})
  ,
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: 60 * 60 * 8,

  },
});

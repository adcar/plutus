import { initAuth0 } from '@auth0/nextjs-auth0';
export default initAuth0({
  domain: 'dev-624rasw3.auth0.com',
  clientId: 'tIMRXlqT4j8YLNGRG0yGAbKF3udf53L1',
  clientSecret: process.env.AUTH0_PRIVATE_KEY,
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {

    // The secret used to encrypt the cookie.
    cookieSecret: process.env.COOKIE_SECRET,
    // ~68 years
    cookieLifetime: 2147483647,
    storeIdToken: true,
    storeAccessToken: true,
    storeRefreshToken: true

  },
});

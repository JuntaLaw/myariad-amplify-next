import { Amplify } from 'aws-amplify';
// import config from './amplifyconfiguration.json';
// Amplify.configure(config);

const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID, 
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
      region: process.env.NEXT_PUBLIC_REGION,
      loginWith: {
        oauth: {
          domain: process.env.NEXT_PUBLIC_OAUTH_DOMAIN,
          scopes: ['openid', 'email', 'phone', 'profile', 'aws.cognito.signin.user.admin'],
          redirectSignIn: ['http://localhost:3000/', 'https://main.d1endqjhx9pbv7.amplifyapp.com'],
          redirectSignOut:['http://localhost:3000/', 'https://main.d1endqjhx9pbv7.amplifyapp.com'],
          responseType: 'code',
          },
          username: 'true',
          email: 'false', // オプション
          phone: 'false', // オプション
          }
          }
          }
          };
          export default amplifyConfig;
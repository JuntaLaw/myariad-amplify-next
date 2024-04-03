import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolClientId: '7jncvgbm69oa18ar9d0v2lghec',
      userPoolId: 'us-east-1_FrgJ7Dy89',
      region: 'us-east-1',
      loginWith: {
        oauth: {
          domain: 'https://myariad.auth.us-east-1.amazoncognito.com',
          scopes: ['openid', 'email', 'phone', 'profile', 'aws.cognito.signin.user.admin'],
          redirectSignIn: ['http://localhost:3000/', 'https://main.d1endqjhx9pbv7.amplifyapp.com/'],
          redirectSignOut:['http://localhost:3000/', 'https://main.d1endqjhx9pbv7.amplifyapp.com/'],
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
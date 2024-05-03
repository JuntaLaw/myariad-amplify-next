import { Amplify, API } from "aws-amplify"; 
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig, { ssr: true }); 

export default function ConfigureAmplifyClientSide() {
  return null;
}
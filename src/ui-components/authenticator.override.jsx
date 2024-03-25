import React from 'react';
import { Authenticator, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './authenticator.override.css';
import { PiSignOut } from 'react-icons/pi';

const CustomSignOutButton = ({ signOut }) => (
  <Button onClick={signOut} className="btn btn-ghost glass">
    <PiSignOut size={25} className="mr-2" />
    Sign Out
  </Button>
);

export const CustomAuthenticator = (props) => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="authenticated-content">
          <p>Hello {user.username}</p> 
          <CustomSignOutButton signOut={signOut} />
          {props.children}
        </div>
      )}
    </Authenticator>
  );
};
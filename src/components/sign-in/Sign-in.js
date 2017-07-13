import React from 'react';
import {auth, googleAuthProvider} from '../../firebase';

export default class Signin extends React.Component {
  signin = () => {
    auth.signInWithPopup(googleAuthProvider)
    .then(result => {
      console.log('signed in', result);
    });
  }

  signout = () => {
    auth.signOut();
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={this.signin}>Sign In</button>
        <button type="submit" onClick={this.signout}>Sign Out</button>
      </div>
    );
  }
}

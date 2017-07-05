import React from 'react';
import {auth, googleAuthProvider} from '../../firebase';

export default class Signin extends React.Component {
  signin = () => {
    auth.signInWithPopup(googleAuthProvider)
    .then(result => {
      console.log('signed in', result);
    });
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={this.signin}>Sign In</button>
      </div>
    );
  }
}

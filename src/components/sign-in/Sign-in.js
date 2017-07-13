import React from 'react';
import {auth, googleAuthProvider} from '../../firebase';
import RaisedButton from 'material-ui/RaisedButton';

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
        <RaisedButton label="Sign In" primary={true} onClick={this.signin} />
        <RaisedButton label="Sign Out" primary={true} onClick={this.signout} style={ {marginLeft: 12} }/>
      </div>
    );
  }
}

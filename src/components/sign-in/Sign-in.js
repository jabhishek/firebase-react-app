import React from 'react';
import {auth, googleAuthProvider} from '../../firebase';
import './Sign-in.css';
import RaisedButton from 'material-ui/RaisedButton';
import {PageHeader} from '../common/page-header/page-header';

export default class Signin extends React.Component {
  signin = () => {
    auth.signInWithRedirect(googleAuthProvider)
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
        <div className="app">
          <div className="app--background">
            <div className="overlay"></div>
            <div className="app--content">
              <PageHeader/>
              <h1>Portfolio Manager</h1>
            </div>
          </div>
        </div>
{/*
        <RaisedButton label="Sign In" primary={true} onClick={this.signin} />
        <RaisedButton label="Sign Out" primary={true} onClick={this.signout} style={ {marginLeft: 12} }/>
*/}
      </div>
    );
  }
}

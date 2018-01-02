// @flow
import React from 'react';
import {auth, googleAuthProvider} from '../../../firebase';
import './page-header.css';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {ProfileInfo} from '../profile-info/profile-info';
import type {User} from '../../../actions/auth';

const logIn = () => {
  auth.signInWithPopup(googleAuthProvider).then(user => {
    console.log('user', user);
  }).catch(err => {
    console.log('err', err);
  });
};

const RightComponent = ({user}: {user: User}) => {
  if (user) {
    return (
      <ProfileInfo user={user}/>
    );
  } else {
    return <RaisedButton label="Sign In" primary={true} onClick={logIn} />;
  }
};

export const PageHeader = ({user}: {user: User}) => {
  return (
    <div className="page-header">
      <div className="page-header__left"></div>
      <div className="page-header__right">
        <RightComponent user={user}/>
      </div>
    </div>
  );
};
const mapStateToProps = ({user}) => ({ user });
export default connect(mapStateToProps)(PageHeader);

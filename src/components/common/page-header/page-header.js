import React from 'react';
import {auth, googleAuthProvider} from '../../../firebase';
import './page-header.css';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {ProfileInfo} from '../profile-info/profile-info';

const logIn = () => {
  auth.signInWithRedirect(googleAuthProvider);
};

const RightComponent = ({user}) => {
  if (user) {
    return (
      <ProfileInfo user={user}/>
    );
  } else {
    return <RaisedButton label="Sign In" primary={true} onClick={logIn} />;
  }
};

export const PageHeader = ({user}) => {
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
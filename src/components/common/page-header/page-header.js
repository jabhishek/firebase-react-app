import React from 'react';
import {auth, googleAuthProvider} from '../../../firebase';
import './page-header.css';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {ProfileImage} from '../profile-image/profile-image';

const signIn = () => {
  auth.signInWithRedirect(googleAuthProvider)
    .then(result => {
      console.log('signed in', result);
    });
};

const signOut = () => {
  auth.signOut();
};

const RightComponent = ({user}) => {
  if (user) {
    return <ProfileImage user={user}/>;
  } else {
    return <RaisedButton label="Sign In" primary={true} onClick={signIn} />;
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
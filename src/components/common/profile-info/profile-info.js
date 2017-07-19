import React from 'react';
import {auth} from '../../../firebase';
import {ProfileImage} from '../profile-image/profile-image';
import RaisedButton from 'material-ui/RaisedButton';
import './profile-info.css';

const signOut = () => {
  auth.signOut();
};

export const ProfileInfo = ({user}) => {
  return (
    <div className="profile-info">
      <ProfileImage user={user}/>
      <RaisedButton label="Sign Out" primary={true} onClick={signOut} style={{marginLeft: 5}} />
    </div>
  )
};

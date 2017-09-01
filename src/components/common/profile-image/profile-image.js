// @flow
import React from 'react';
import './profile-image.css';
import type {User} from '../../../actions/auth';

export const ProfileImage = ({user}: {user: User}) => {
  return (
    <div>
      <div className="profile-image" style={ { backgroundImage: `url(${user.photoURL})` } } alt="user image"/>
    </div>
  );
};

import React from 'react';
import './profile-image.css';

export const ProfileImage = ({user}) => {
  return (
    <div>
      <div className="profile-image" style={ { backgroundImage: `url(${user.photoURL})` } } alt="user image"/>
    </div>
  )
};
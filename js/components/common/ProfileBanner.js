import React from 'react';

import './profile-banner.scss';

const ProfileBanner = () => {
  return (
    <div className="profile-banner">
      <div className="profile-banner-container">
        <div className="profile-banner-row">
          <div className="profile-banner-img-container">
            <img src="https://via.placeholder.com/150" alt="profile image"/>
          </div>
          <div className="profile-banner-user-container">
            <div className="profile-banner-user">John Smith</div>
            <div className="profile-banner-user-details">Member since: 10/15/2018</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBanner;
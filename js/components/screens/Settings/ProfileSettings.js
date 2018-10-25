import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../Routes';
import ProfileBanner from '../../common/ProfileBanner';
import ContactCard from '../../common/ContactCard';

import './profile-settings.scss';

const LeftPanelContent = () => (
  <div className="panel-left-content">
    <Link to={routes.USER_SETTINGS} className="panel-link">Profile</Link>
    <Link to={routes.USER_SETTINGS} className="panel-link">Purchase</Link>
    <Link to={routes.USER_SETTINGS} className="panel-link">Ride History</Link>
  </div>
);

const RightPanelContent = () => (
  <div className="panel-right-content">
    <ContactCard type="generalInfo" onSubmit={(e) => e.preventDefault()} />
    <ContactCard type="digitalInfo" onSubmit={(e) => e.preventDefault()} />
  </div>
);

const ProfileSettings = () => {
  return (
    <div className="profile-settings">
      <ProfileBanner />

      <div className="profile-settings-content row">
        <div className="col-md-3 panel-left">
          <LeftPanelContent />
        </div>

        <div className="col-md-9 panel-right">
          <RightPanelContent />
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;

import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../Routes';
import './header.scss';

const LeftLinks = () => (
  <ul className="header-row-left">
    <li className="header-nav">
      <div className="header-logo-container">
        <img
          className="header-logo pointer"
          src="//blog.chariot.com/wp-content/uploads/2017/11/chariot_logo-03-blog-logo.jpg"
          alt="Chariot"
          scale="0"/>
      </div>
    </li>
    <li className="header-nav">
      <Link to={routes.HOME} className="header-link">Home</Link>
    </li>
  </ul>
);

const RightLinks = () => (
  <ul className="header-row-right">
    <li className="header-nav">
      <Link to={routes.USER_SETTINGS} className="header-link">Profile</Link>
    </li>
    <li className="header-nav">
      <Link to={routes.HOME} className="header-link">Log Out</Link>
    </li>
  </ul>
);


const Header = () => {
  return (
    <div className="header">
      <div className="header-row">
        <LeftLinks />
        <RightLinks />
      </div>
    </div>
  );
}

export default Header;
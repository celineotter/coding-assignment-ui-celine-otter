import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/common/Header';

import HomePage from './components/screens/Home/Home';
import ProfileSettingsPage from './components/screens/Settings/ProfileSettings';

export const routes = {
  HOME: '/',
  USER_SETTINGS: '/settings/profile',
};

const Routes = () => (
  <Router>
    <div className="content-root">
      <Header />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.USER_SETTINGS} component={ProfileSettingsPage} />
    </div>
  </Router>
);

export default Routes;

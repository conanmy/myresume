import React from 'react';
import { Route } from 'react-router';
import App from './components/index';
import Home from './components/Home';
import Resume from './components/Resume';

export default (
  <Route name="app" component={App} path="/">
  	<Route component={Home} path="home" />
  	<Route component={Resume} path="resume/add" />
    <Route component={Resume} path="resume/edit/:resumeId" />
  </Route>
);
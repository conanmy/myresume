import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppView from './components/index';
import HomeView from './components/Home';
import ResumeView from './components/Resume';
import LoginView from './components/Login';

export default (
  <Route name="app" component={AppView} path="/">
  	<IndexRoute component={HomeView} />
  	<Route component={LoginView} path="login" />
  	<Route component={ResumeView} path="resume/add" />
    <Route component={ResumeView} path="resume/edit/:resumeId" />
  </Route>
);

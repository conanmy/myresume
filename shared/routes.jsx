import React from 'react';
import { Route } from 'react-router';
import AppView from './components/index';
import HomeView from './components/Home';
import ResumeView from './components/Resume';
import LoginView from './components/Login';

export default (
  <Route name="app" component={AppView} path="/">
  	<Route component={HomeView} path="" />
  	<Route component={LoginView} path="login" />
  	<Route component={ResumeView} path="resume/add" />
    <Route component={ResumeView} path="resume/edit/:resumeId" />
  </Route>
);
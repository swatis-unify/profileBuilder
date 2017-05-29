import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import SignUpPage from './components/auth/signup/SignUpPage';
// import SignInPage from './components/auth/SignInPage';
import EmployeePage from './components/employee/EmployeePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="signup" component={SignUpPage} />
    <Route path="user/home" component={EmployeePage} />
  </Route>
);

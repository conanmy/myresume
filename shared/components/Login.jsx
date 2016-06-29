import React from 'react';

export default class LoginView extends React.Component {
  render() {
    return (
      <div className="intro">
        <p>With our website, you can manage:</p>
        <ul>
          <li>Your resumes for different purposes.</li>
          <li>Your skills and experiences described in different ways.</li>
        </ul>
        <a href="/auth/facebook" className="facebook-login-btn">Login with Facebook</a>
      </div>
    );
  }
}
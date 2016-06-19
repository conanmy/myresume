import React from 'react';
import { Link } from 'react-router'

export default class AppView extends React.Component {
  render() {
    return (
      <div class="sidenav">
        <div class="title">MyResume</div>
        <div class="title-account">manage your skills</div>
      </div>
      <div class="wrapper">
        <div class="main">
            <div class="title"></div>
            <div class="content" ui-view="content">{this.props.children}</div>
            <div class="footer">copyright @conanmy 2015</div>
        </div>
        <div class="sidebar">
            <div class="title">
                <div class="top-icon"><div class="icon-star"></div></div>
            </div>
            <div>
              <ul>
                  <li>><Link to="/home">Home</Link></li>
                  <li><Link to="/pool">Pool</Link></li>
              </ul>
              <div class="user-info"></div>
            </div>
        </div>
      </div>
    );
  }
}
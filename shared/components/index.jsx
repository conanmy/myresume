import React from 'react';
import { Link } from 'react-router'

export default class AppView extends React.Component {
  render() {
    return (
      <div>
        <div className="sidenav">
          <div className="title">MyResume</div>
          <div className="title-account">manage your skills</div>
        </div>
        <div className="wrapper">
          <div className="main">
              <div className="title"></div>
              <div className="content">{this.props.children}</div>
              <div className="footer">copyright @conanmy 2015</div>
          </div>
          <div className="sidebar">
              <div className="title">
                  <div className="top-icon"><div className="icon-star"></div></div>
              </div>
              <div>
                <ul>
                    <li>><Link to="/home">Home</Link></li>
                    <li><Link to="/pool">Pool</Link></li>
                </ul>
                <div className="user-info"></div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
import React from 'react';

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
                    <li><a href="/home">Home</a></li>
                    <li><a href="/pool">Pool</a></li>
                </ul>
                <div className="user-info"></div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
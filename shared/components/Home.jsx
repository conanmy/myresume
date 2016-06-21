import React from 'react';
// import { bindActionCreators } from 'redux';
import * as resumeActions from '../actions/resumeActions';
import { connect } from 'react-redux';

class Home extends React.Component {
  static needs = [
    resumeActions.getResumes
  ];
  
  render() {
    const { resumes, dispatch } = this.props;
    
    return (
      <div className="home">
        <div className="resume-list">
          <div className="clearfix">
            {
              resumes.map((resume) => {
                <a href={"/resume/edit/" + resume._id}>
                  <span>{resume.title}</span>
                </a>
              })
            }
            <a className="add-resume" href="/resume/add">+</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ resumes: state.resumes }))(Home)
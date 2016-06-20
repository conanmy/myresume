import React from 'react';
import { bindActionCreators } from 'redux';
import * as ResumeActions from '../actions/ResumeActions';
import { connect } from 'react-redux';

class Home extends React.Component {
  static needs = [
    ResumeActions.getResumes
  ];
  
  render() {
    const { resumes, dispatch } = this.props;
    
    return (
      <div class="home">
        <div class="resume-list">
          <div class="clearfix">
            {
              resumes.map((resume) => {
                <a href="#/resume/edit/{{resume._id}}">
                  <span>{resume.title}</span>
                </a>
              })
            }
            <a class="add-resume" href="#/resume/add">+</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ resumes: state.resumes }))(Home)
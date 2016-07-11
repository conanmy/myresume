import React from 'react';
import * as resumeActions from '../actions/resumeActions';
import { connect } from 'react-redux';

class HomeView extends React.Component {

  constructor() {
    super();
    this.needs = [
      resumeActions.getResumes.bind(null, this.props.user)
    ];
  }
  
  render() {
    const resumes = this.props.resumes.toJS();
    
    return (
      <div className="home">
        <div className="resume-list">
          <div className="clearfix">
            {
              resumes.map(resume => {
                return (
                  <a href={"/resume/edit/" + resume._id}>
                    <span>{resume.title}</span>
                  </a>
                );
              })
            }
            <a className="add-resume" href="/resume/add">+</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ resumes: state.resumes, user: state.user }))(HomeView)

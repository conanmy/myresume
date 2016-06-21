import React from 'react';
import * as resumeActions from '../actions/resumeActions';
import { connect } from 'react-redux';

class Resume extends React.Component {
  static needs = [
    resumeActions.getResume
  ];

  constructor(props) {
    super(props);
    this.state = {
      resume: this.props.resume.toJS()
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addExp = this.addExp.bind(this);
  }

  handleSave() {
    this.props.dispatch(resumeActions.createResume(this.state.resume));
  }

  handleDelete() {

  }

  addExp() {
    let resume = this.state.resume;
    resume.exp.push('new experience');
    this.setState({resume: resume});
  }

  render() {
    const { resume } = this.state;
    console.log(resume.exp);

    return (
      <div className="clearfix resume-edit-wrapper">
        <a className="btn-remove" onClick={this.handleDelete}>
          Delete
        </a>
        <span className="tip-remove">Deleting...</span>
        <div className="resume-edit">
          <p>
            Resume Title:
            <input type="text" ng-model="resume.title" />
          </p>
          <p>Name:<input type="text" ng-model="resume.name" /></p>
          <p>Email:<input type="text" ng-model="resume.email" /></p>
          <div>
            Experiences:
            {
              resume.exp.map(expitem => <textarea ng-model="expitem.text">{expitem.text}</textarea>)
            }
            <a className="btn-add" onClick={this.addExp}>+</a>
          </div>
        </div>
        <div className="resume-preview">
          <p>Resume Title: {resume.title}</p>
          <p>Name: {resume.name}</p>
          <p>Email: {resume.email}</p>
          <div>
            Experiences:
            {
              resume.exp.map(expitem => <p>{expitem.text}</p>)
            }
          </div>
        </div>
        <a className="btn-save" onClick={this.handleSave}>Save</a>
      </div>
    );
  }
}
export default connect(state => ({ resume: state.resume }))(Resume)
import React from 'react';
import * as resumeActions from '../actions/resumeActions';
import { connect } from 'react-redux';
import LinkedStateMixin from './mixins/LinkedStateMixin';

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
    this.linkState = LinkedStateMixin.linkState.bind(this);
  }

  handleSave() {
    this.props.dispatch(this.state.resume._id ?
      resumeActions.updateResume(this.state.resume) : resumeActions.createResume(this.state.resume)
    );
  }

  handleDelete() {
    this.props.dispatch(
      resumeActions.deleteResume(this.state.resume._id)
    );
  }

  addExp() {
    let resume = this.state.resume;
    resume.exp.push({text: 'new experience'});
    this.setState({resume: resume});
  }

  render() {
    const { resume } = this.state;

    return (
      <div className="clearfix resume-edit-wrapper">
        <a className="btn-remove" onClick={this.handleDelete}>
          Delete
        </a>
        <div className="resume-edit">
          <p>
            Resume Title:
            <input type="text" valueLink={this.linkState('resume.title')} />
          </p>
          <p>Name:<input type="text" valueLink={this.linkState('resume.name')} /></p>
          <p>Email:<input type="text" valueLink={this.linkState('resume.email')} /></p>
          <div>
            Experiences:
            {
              resume.exp.map((expitem, key) =>
                <textarea valueLink={this.linkState('resume.exp.' + key + '.text')}></textarea>
              )
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
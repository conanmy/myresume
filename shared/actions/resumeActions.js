import request from 'request-promise';
import config from 'config';

const getConfig = function(keyName) {
  return config.get ? config.get(keyName) : config[keyName];
};
const API_URL = getConfig('BASE_URL') + getConfig('API_PATH');
export function createResume(resume) {
  return {
    type: 'CREATE_RESUME',
    promise: request({
      method: 'POST',
      uri: API_URL + '/resumes/',
      body: resume,
      json: true
    }).then(function() {
      window.location.assign('/home');
    })
  }
}
export function updateResume(resume) {
  return {
    type: 'UPDATE_RESUME',
    promise: request({
      method: 'PUT',
      uri: API_URL + '/resumes/' + resume._id,
      body: resume,
      json: true
    }).then(function() {
      window.location.assign('/home');
    })
  };
}
export function deleteResume(resumeId) {
  return {
    type: 'DELETE_RESUME',
    promise: request({
      method: 'DELETE',
      uri: API_URL + '/resumes/' + resumeId,
      json: true
    }).then(function() {
      window.location.assign('/home');
    })
  };
}
export function getResume(params) {
  let action = {type: 'GET_RESUME'};
  if (params.resumeId) {
    action.promise = request({
      method: 'GET',
      uri: API_URL + '/resumes/' + params.resumeId,
      json: true
    });
  } else {
    action.resume = {
      title: 'your title',
      name: 'your name',
      email: 'your email',
      exp: [{text: 'new experience'}]
    };
  }

  return action;
}
export function getResumes() {
  console.log('in getResume');
  return {
    type: 'GET_RESUMES',
    promise: request({
      method: 'GET',
      uri: API_URL + '/resumes/',
      json: true
    })
  }
}
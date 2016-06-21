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
    })
  }
}
export function editResume(id, text) {
  return {
    type: 'EDIT_RESUME',
    id,
    text,
    date: Date.now()
  };
}
export function deleteResume(id) {
  return {
    type: 'DELETE_RESUME',
    id
  };
}
export function getResume(params) {
  let action = {type: 'GET_RESUME'};
  if (params.resumeId) {
    action.promise = request({
      method: 'GET',
      uri: API_URL + '/resumes/' + resumeId,
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
  return {
    type: 'GET_RESUMES',
    promise: request({
      method: 'GET',
      uri: API_URL + '/resumes/',
      json: true
    })
  }
}
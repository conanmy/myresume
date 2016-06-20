import request from 'request-promise';
import { API_PATH } from '../config';

export function createResume(text) {
  return {
    type: 'CREATE_RESUME',
    promise: request({
      method: 'POST',
      uri: API_PATH,
      body: { text },
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
export function getResumes() {
  return {
    type: 'GET_RESUMES',
    promise: request({
      method: 'GET',
      uri: API_PATH + '/resumes/',
      json: true
    })
  }
}
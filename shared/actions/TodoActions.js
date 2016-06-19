import request from 'request-promise';
const BACKEND_URL = 'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1';

export function createTodo(text) {
  return {
    type: 'CREATE_TODO',
    promise: request({
      method: 'POST',
      uri: BACKEND_URL,
      body: { text },
      json: true
    })
  }
}
export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    id,
    text,
    date: Date.now()
  };
}
export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  };
}
export function getTodos() {
  return {
    type: 'GET_TODOS',
    promise: request({
      method: 'GET',
      uri: BACKEND_URL,
      json: true
    })
  }
}
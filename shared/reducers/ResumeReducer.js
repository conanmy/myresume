import Immutable from 'immutable';
const defaultState = new Immutable.List();
export default function resumeReducer(state = defaultState, action) {
  switch(action.type) {
    case 'CREATE_RESUME':
      return state.concat(action.res.text);
    case 'EDIT_RESUME':
      return state.set(action.id, action.text);
    case 'DELETE_RESUME':
      return state.delete(action.id);
    case 'GET_RESUMES':
      return state.concat(action.res);
    default:
      return state;
  }
}
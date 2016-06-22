import Immutable from 'immutable';
const defaultState = new Immutable.List();
export default function resumesReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_RESUMES':
      return state.concat(action.res);
    default:
      return state;
  }
}
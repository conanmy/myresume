import Immutable from 'immutable';
const defaultState = new Immutable.Map();
export default function resumeReducer(state = defaultState, action) {
  switch(action.type) {
    case 'SET_USER':
      return Immutable.fromJS(action.user);
    default:
      return state;
  }
}
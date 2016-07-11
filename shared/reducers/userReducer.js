import Immutable from 'immutable';
const defaultState = new Immutable.Map();
export default function resumeReducer(state = defaultState, action) {
  switch(action.type) {
    case 'SET_USER':
      return action.user ? Immutable.fromJS(action.user) : state;
    default:
      return state;
  }
}

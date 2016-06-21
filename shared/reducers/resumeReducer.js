import Immutable from 'immutable';
const defaultState = new Immutable.Map();
export default function resumeReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_RESUME':
      console.log(action.res);
      return Immutable.fromJS(action.res ?  action.res : action.resume);
    default:
      return state;
  }
}
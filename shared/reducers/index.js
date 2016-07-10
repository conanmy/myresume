import resumeReducer from './resumeReducer';
import resumesReducer from './resumesReducer';
import userReducer from './userReducer';

const reducers = {
  resumes: resumesReducer,
  resume: resumeReducer,
  user: userReducer
};

module.exports = reducers;
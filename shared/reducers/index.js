import resumeReducer from './resumeReducer';
import resumesReducer from './resumesReducer';

const reducers = {
  resumes: resumesReducer,
  resume: resumeReducer
};

module.exports = reducers;
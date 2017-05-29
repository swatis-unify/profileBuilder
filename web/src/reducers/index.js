import {combineReducers} from 'redux';
import employees from './employeesReducer';
import user from './userReducer';
import registrationInProgress from './registrationReducer';
import registrationStep from './registrationStepReducer';

const rootReducer = combineReducers({
  employees,
  user,
  registrationInProgress,
  registrationStep
});

export default rootReducer;

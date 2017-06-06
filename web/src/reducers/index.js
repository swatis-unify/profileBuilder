import {combineReducers} from 'redux';
import employees from './employeesReducer';
import user from './userReducer';
import registrationInProgress from './registrationReducer';
import registrationStep from './registrationStepReducer';
import roles from './rolesReducer';

const rootReducer = combineReducers({
  employees,
  user,
  registrationInProgress,
  registrationStep,
  roles
});

export default rootReducer;

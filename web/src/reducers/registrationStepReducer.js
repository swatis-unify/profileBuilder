import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function registrationReducer(state=initialState.registrationStep, action){
  switch(action.type) {
    case types.REGISTER_EMPLOYEE_START:
      return state+1;

    case types.REGISTER_EMPLOYEE_PROCEED:
      return state+1;

    case types.REGISTER_EMPLOYEE_SKIP:
      return state+1;

    case types.REGISTER_EMPLOYEE_COMPLETE:
      return 0;

    default:
      return state;
  }
}

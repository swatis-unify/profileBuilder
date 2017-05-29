import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function registrationReducer(state=initialState.registrationInProgress, action){
  debugger;
  switch(action.type) {
    case types.REGISTER_EMPLOYEE_START:
      return true;

    case types.REGISTER_EMPLOYEE_COMPLETE:
      return false;

    default:
      return state;
  }
}

import * as types from './actionTypes';
import authApi from '../api/mockAuthApi';

export function registerEmployeeSuccess(employee){
  return {type: types.REGISTER_EMPLOYEE_SUCCESS, employee};
}

export function registerEmployeeStart(employee){
  return {type: types.REGISTER_EMPLOYEE_START, employee};
}

export function registerEmployee(employee){
  return function(dispatch) {
    return authApi.registerEmployee(employee).then((savedEmployee) => {
      dispatch(registerEmployeeSuccess(savedEmployee));
      dispatch(registerEmployeeStart(savedEmployee));
    }, (error) => {
      throw(error);
    });
  };
}

import * as types from './actionTypes';
import employeeApi from '../api/mockEmployeeApi';

export function moveForward(employee){
  return {type: types.REGISTER_EMPLOYEE_PROCEED, employee};
}

export function completeRegistration(employee){
  return {type: types.REGISTER_EMPLOYEE_COMPLETE, employee};
}

export function updateEmployeeSuccess(employee){
  return {type: types.UPDATE_EMPLOYEE_SUCCESS, employee};
}

export function updateEmployeeDetails(employee){
  return function(dispatch) {
    return employeeApi.updateEmployee(employee).then((savedEmployee) => {
      let newEmployee = Object.assign({}, savedEmployee);
      dispatch(updateEmployeeSuccess(newEmployee));
    }, (error) => {
      throw(error);
    })
  }
}

export function updateRolesSuccess(roles){
  return {type: types.EMPLOYEE_ROLES_SUCCESS, roles};
}

export function fetchRoles(experty){
  return function(dispatch) {
    return employeeApi.fetchRoles(experty).then(roles => {
      debugger;
      dispatch(updateRolesSuccess(roles));
    }, (error) => {
      throw(error);
    });
  }
}

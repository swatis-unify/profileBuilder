import * as types from './actionTypes';
import employeeApi from '../api/mockEmployeeApi';

export function moveForward(employee){
  return {type: types.REGISTER_EMPLOYEE_COMPLETE, employee}
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

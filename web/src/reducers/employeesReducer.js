import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function employeesReducer(state=initialState.employees, action){
  switch(action.type) {
    case types.REGISTER_EMPLOYEE_SUCCESS:
      return [...state,
        Object.assign({}, action.employee)
      ];

    case types.UPDATE_EMPLOYEE_SUCCESS:
      return [
          ...state.filter(employee => {employee.id !== action.employee.id; }),
          Object.assign({}, action.employee)
        ];

    default:
      return state;
  }
}

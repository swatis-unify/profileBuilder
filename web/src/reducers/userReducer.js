import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state=initialState.user, action){
  switch(action.type) {
    case types.REGISTER_EMPLOYEE_SUCCESS:
      return Object.assign({}, action.employee);

    case types.UPDATE_EMPLOYEE_SUCCESS:
      return Object.assign({}, action.employee);

    default:
      return state;
  }
}

import delay from './delay';
const employees = [];
const generateId = (val='') => {
  return val.replace(/\s/g, '-');
};

class AuthApi {
  static registerEmployee(employee) {
    employee = Object.assign({}, employee); // to avoid manipulating object passed in
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const manadatoryAttrs = ['name', 'email', 'password'];

        manadatoryAttrs.forEach(function(attr){
          if(!employee[attr]){
            reject(`${attr} is required`);
          }
        });

        employee.id = generateId(employee.name);
        employees.push(employee);

        resolve(employee);
      }, delay);
    });
  }
}

export default AuthApi;

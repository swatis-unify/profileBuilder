import delay from './delay';
const employees = [];

class EmployeeApi {
  static updateEmployee(employee) {
    let newEmployee = Object.assign({}, employee); // to avoid manipulating object passed in
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      //  const existingEmployeeIndex = employees.findIndex(e => e.id == newEmployee.id);
        //employees.splice(existingEmployeeIndex, 1, newEmployee);

        resolve(newEmployee);
      }, delay);
    });
  }
}

export default EmployeeApi;

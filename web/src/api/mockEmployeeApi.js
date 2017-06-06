import delay from './delay';
const employees = [];

class EmployeeApi {
  static updateEmployee(employee) {
    let newEmployee = Object.assign({}, employee); // to avoid manipulating object passed in
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingEmployeeIndex = employees.findIndex(e => e.id == newEmployee.id);
        employees.splice(existingEmployeeIndex, 1, newEmployee);

        resolve(newEmployee);
      }, delay);
    });
  }

  static fetchRoles(experty){
    const experties = {
      'softwareengineering': [
        "Backend Engineer", 
        "Build/Release Engineer", 
        "Data Engineer", 
        "Database Administrator", 
        "DevOps Engineer", 
        "Embedded Engineer", 
        "Engineering Manager", 
        "Frontend Engineer", 
        "Full Stack Engineer", 
        "Machine Learning Engineer", 
        "Mobile Engineer", 
        "QA/Test Engineer", 
        "Security Engineer", 
        "UX Engineer"],
      "design": [
        "Brand/Graphic Designer", "Product Designer", "UX Designer", 
        "UX Researcher", "Visual/UI Designer"],
      'datascience': ['Data Analyst', 'Data Scientist'],
      'productmanagement': [],
      'finance/operation': ["Accounting", "Financial Management / Analysis", "General Management", "Office Administration"],
      'recruiting/peopleops': ["HR Business Partner", "People Ops Management", "People Ops Specialist", 
                              "Recruiter", "Recruiting Coordinator", "Sourcer"]
    };

    

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        experty = experty.replace(/\s/g, '');
        experty = experty.replace(/^[\d]/g, '');
        experty = experty.toLowerCase();
        resolve((experties[experty] || []));
      }, delay);
    });
  }
}

export default EmployeeApi;

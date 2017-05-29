import React, {PropTypes} from 'react';
import EmployeePersonalInfo from './EmployeePersonalInfo';

const RegistrationSteps = ({registrationStep, employee, errors, onSubmit, onChange, onSkip}) => {
  let registrationForm = '';
  if (registrationStep === 1){
    registrationForm = <EmployeePersonalInfo name={employee.name} errors={errors} phone={employee.phone} photo={employee.photo} onChange={onChange} onSave={onSubmit} onSkip={onSkip} />;
  }

  return(
    <div id="user-registration-steps" className="jumbotron bg-white">
      {registrationForm}
    </div>
  );
};

RegistrationSteps.propTypes = {
  employee: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
  registrationStep: PropTypes.number
};

export default RegistrationSteps;

import React, {PropTypes} from 'react';
import EmployeePersonalInfo from './EmployeePersonalInfo';
import EmployeeHeadLine from './EmployeeHeadLine';
import EmployeeSkillsInfo from './EmployeeSkills';

const RegistrationSteps = ({registrationStep, userRoles, employee, errors, onSubmit, onChange, onSkip}) => {
  let registrationForm = '';

  switch(registrationStep){
    case 1:
      registrationForm = <EmployeePersonalInfo name={employee.name} errors={errors} phone={employee.phone} photo={employee.photo} onChange={onChange} onSave={onSubmit} onSkip={onSkip} />;
      break;

    case 2:
      registrationForm = <EmployeeHeadLine headline={employee.headline} errors={errors} onChange={onChange} onSave={onSubmit} onSkip={onSkip} />;
      break;

    case 3:
      registrationForm = <EmployeeSkillsInfo 
                            errors={errors} 
                            areaInterested={employee.areaInterested}
                            experience={employee.experience}
                            roles={employee.roles || []}
                            allRoles={userRoles || []}
                            areaPreference={employee.preference}
                            onChange={onChange}
                            onSave={onSubmit}
                            onSkip={onSkip} />
      break;

    default:
      registrationForm = '';
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
  registrationStep: PropTypes.number,
  userRoles: PropTypes.array
};

export default RegistrationSteps;

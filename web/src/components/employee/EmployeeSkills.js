import React, {PropTypes} from 'react';
import TextBox from '../common/TextBox';
import * as constants from '../../helper/constants';
import RadioButtonBand from '../common/RadioButtonBand';
import CheckBoxBand from '../common/CheckBoxBand';

const EmployeeSkillsInfo = ({errors, areaInterested, experience, allRoles, roles, preference, onChange, onSave, onSkip, loading}) => {
    return (
      <div id="skills bg-white">
        <h2 className="text-center">Role and Skills</h2>
      
        <form id="employee-skills-form">
            <RadioButtonBand 
              options={constants.experties}
              value={areaInterested}
              label="What area are you most interested in?"
              required={true}
              description=""
              onChange={onChange}
              error={errors.areaInterested}
              perRow={3}
              name="areaInterested" />

            <RadioButtonBand 
              options={constants.experienceBands}
              value={experience}
              label="How many years of work experience do you have?"
              required={true}
              description=""
              onChange={onChange}
              error={errors.experience}
              perRow={4}
              name="experience" />

            <CheckBoxBand 
              options={allRoles || []}
              value={roles}
              label="What roles are you most interested in?"
              required={true}
              description="Choose the roles you are interested in"
              onChange={onChange}
              error={errors.roles}
              perRow={4}
              name="roles" />

            <TextBox 
                name="preference"
                label="In your own words, describe your preferences around the role you are looking for:"
                required={false}
                onChange={onChange}
                value={preference}
                error={errors.preference}
                placeholder="Describe the type of role you are looking for, skills/technologies you want to use, type/scope of work your want to do, etc." />

            <div className="actions">
              <input
                type="submit"
                disabled={loading}
                value={loading ? 'Saving...' : 'Save'}
                className="btn bg-red fg-white"
                onClick={onSave} />

              <a className="fg-red pull-right" onClick={onSkip}>>>Skip</a>
            </div>
        </form>
      </div>
    );
}

EmployeeSkillsInfo.propTypes = {
    errors: PropTypes.object,
    areaInterested: PropTypes.string,
    experience: PropTypes.string,
    allRoles: PropTypes.array,
    roles: PropTypes.array,
    areaPreference: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onSkip: PropTypes.func.isRequired,
    loading: PropTypes.bool
};

export default EmployeeSkillsInfo;
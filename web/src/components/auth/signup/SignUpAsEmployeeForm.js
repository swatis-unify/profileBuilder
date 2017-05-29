import React, {PropTypes} from 'react';
import TextInput from '../../common/TextInput';

const SignUpAsEmployeeForm = ({employee, loading, onChange, onSave, errors}) => {
  return(
    <form id="sign-up-form">
      <TextInput
        type="text"
        name="name"
        label="Name"
        required= {true}
        value={employee.name}
        error={errors.name}
        onChange={onChange}
        placeholder="First and Last Name"  />

        <TextInput
          type="email"
          name="email"
          label="Email"
          required={true}
          value={employee.email}
          error={errors.email}
          onChange={onChange}
          placeholder="you@company.com"  />

          <TextInput
            type="password"
            name="password"
            label="Password"
            required={true}
            value={employee.password}
            error={errors.password}
            onChange={onChange}
            placeholder="Create Password"  />

            <TextInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              required={true}
              value={employee.confirmPassword}
              error={errors.confirmPassword}
              onChange={onChange}
              placeholder="Re-enter Password"  />

        <input
          type="submit"
          disabled={loading}
          value={loading ? 'GETING STARTED...' : 'GET STARTED'}
          className="btn bg-red fg-white"
          onClick={onSave} />
    </form>
  );
};

SignUpAsEmployeeForm.propTypes = {
  employee: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default SignUpAsEmployeeForm;

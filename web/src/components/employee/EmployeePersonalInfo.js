import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const EmployeePersonalInfo = ({errors, name, phone, photo, onChange, onSave, onSkip, loading}) => {
  return(
    <div id="personal-info bg-white">
      <h2 className="text-center">Personal Info</h2>
      <div className="sub-section row">
        <div className="col-md-4 text-left">
          <div className="info">Profile Photo</div>
        </div>
        <div className="col-md-4 text-center">
          <div className="photo-place-holder"></div>
        </div>
        <div className="col-md-4 text-left">
          <div className="info">
            <h5>Smile! Having a profile photo helps add personality to your page.</h5>
          </div>
        </div>
      </div>
      <div>
        <form id="personal-details-form">
          <TextInput
            type="text"
            name="name"
            label="Name"
            required= {true}
            value={name}
            error={errors.name}
            onChange={onChange}
            placeholder="First and Last Name"  />

            <TextInput
              type="text"
              name="phone"
              label="Phone Number"
              required= {false}
              value={phone}
              error={errors.phone}
              onChange={onChange}
              placeholder="Phone Number"  />

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
    </div>
  );
};

EmployeePersonalInfo.propTypes = {
  errors: PropTypes.object,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
  phone: PropTypes.string,
  photo: PropTypes.object,
  loading: PropTypes.bool
};

export default EmployeePersonalInfo;

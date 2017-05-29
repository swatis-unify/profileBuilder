import React, {PropTypes} from 'react';
import classnames from 'classnames';

const TextInput = ({name, label, placeholder, required, value, type, onChange, error}) => {
  let wrapperClass = classnames({
    'form-group': true,
    'has-error': !!error
  });

  let inputClass = classnames({
    'form-control': true,
    'error-input': !!error
  });

  let props = {
    name,
    label,
    placeholder,
    value,
    type,
    onChange,
    className: inputClass
  };

  return (
    <div className={wrapperClass}>
      {label && <label for={name}>{label} {required && <span className="required fg-red">*</span>}</label>}
      {error && <span className="error fg-red">{error}</span>}
      <input {...props} />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default TextInput;

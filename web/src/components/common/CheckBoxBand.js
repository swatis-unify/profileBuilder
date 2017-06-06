import React, {PropTypes} from 'react';
import classnames from 'classnames';

const CheckBoxBand = ({options, value, name, error, required, label, perRow, description, onChange}) => {
    let wrapperClass = classnames({
        'form-group': true,
        'has-error': !!error
    });

    let inputClass = classnames({
        'hidden': true       
    });

    let inputs = (options || []).map(option => {
        return (
            <div className={"col-md-" + (12/perRow) + " " + (value.includes(option) ? 'checked' : '')}>
                <label className="bg-gray checkbox-band text-center pointer">
                    <input type="checkbox" name={name} onChange={onChange} checked={value===option} value={option} className={inputClass} />
                    <span className="text">{option}</span>
                </label>
            </div>
        );
    });

    return (
        <div className={wrapperClass}>
            {label && <label for={name}>{label}{required && <span className="required">*</span>}</label>}
            {description && <p>{description}</p>}

            <div className="row checkbox-group">
                {inputs}
            </div>
        </div>

    );
};

CheckBoxBand.propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    perRow: PropTypes.number,
    description: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    error: PropTypes.string
};

export default CheckBoxBand;
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const RadioButtonBand = ({options, value, name, error, required, label, perRow, description, onChange}) => {
    let wrapperClass = classnames({
        'form-group': true,
        'has-error': !!error
    });

    let inputClass = classnames({
        'hidden': true       
    });

    let inputs = (options || []).map(option => {
        return (
            <div className={"col-md-" + (12/perRow) + " " + ((value===option) ? 'checked' : '')}>
                <label className="bg-gray radio-band text-center pointer">
                    <input type="radio" name={name} onChange={onChange} checked={value===option} value={option} className={inputClass} />
                    <span className="text">{option}</span>
                </label>
            </div>
        );
    });

    return (
        <div className={wrapperClass}>
            {label && <label for={name}>{label}{required && <span className="required">*</span>}</label>}
            {description && <p>{description}</p>}

            <div className="row radio-button-group">
                {inputs}
            </div>
        </div>

    );
};

RadioButtonBand.propTypes = {
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

export default RadioButtonBand;
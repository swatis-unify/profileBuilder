import React, {PropTypes} from 'react';
import TextBox from '../common/TextBox';

const EmployeeHeadLine = ({errors, headLine, onChange, onSave, onSkip, loading}) => {
    return (
      <div id="headline bg-white">
        <h2 className="text-center">HEADLINE</h2>
        <p>A great headline helps you stand out and leads to more interviews. Try listing a professional accomplishment that best showcases your abilities to future employers.</p>
        <p>This information is the most prominent information displayed to employers on the list and profile pages.</p>
      
        <form id="employee-headline-form">
            <TextBox 
                name="headline"
                label=""
                required={true}
                onChange={onChange}
                value={headLine}
                error={errors.headline}
                placeholder="150 characters max" />

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

EmployeeHeadLine.propTypes = {
    errors: PropTypes.object,
    headLine: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onSkip: PropTypes.func.isRequired,
    loading: PropTypes.bool
};

export default EmployeeHeadLine;
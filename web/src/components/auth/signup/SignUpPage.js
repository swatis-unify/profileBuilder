import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../../actions/authActions';
import {browserHistory} from 'react-router';
import SignUpAsEmployeeForm from './SignUpAsEmployeeForm';
import EmailValidator from '../../../helper/EmailValidator';
import Header from '../../common/Header';

class SignUpPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      employee: Object.assign({}, this.props.employee),
      errors: {},
      loading: false
    };

    this.updateEmployeeDetails = this.updateEmployeeDetails.bind(this);
    this.registerEmployee = this.registerEmployee.bind(this);
    this.isValidEmployee = this.isValidEmployee.bind(this);
    this.validateEmployee = this.validateEmployee.bind(this);
  }

  updateEmployeeDetails(event){
    let attr = event.target.name;
    let employee = this.state.employee;

    employee[attr] = event.target.value;
    this.setState({employee: employee});

    if (this.state.errors[attr]){
      this.validateEmployee(attr);
    }
  }

  validateEmployee(field){
    const employee = this.state.employee;
    let mandatoryFields = ['name', 'email', 'password', 'confirmPassword'];

    if (field){
      let errors = Object.assign({}, this.state.errors);
      errors[field] = '';

      if (mandatoryFields.includes(field) && !employee[field]){
        errors[field] = 'required';
      } else if (field === 'email') {
        !EmailValidator.isValidEmail(employee.email) && (errors['email'] = 'invalid');
      } else if (field === 'confirmPassword'){
        (employee.password !== employee.confirmPassword) && (errors['confirmPassword'] = 'must match password');
      }

      this.setState({errors: errors});

      return errors[field];
    }

    let errors = {};
    mandatoryFields.forEach((field) => {
      if (!employee[field]){
        errors[field] = 'required';
      } else if (field === 'email') {
        !EmailValidator.isValidEmail(employee.email) && (errors['email'] = 'invalid');
      } else if (field === 'confirmPassword'){
        (employee.password !== employee.confirmPassword) && (errors['confirmPassword'] = 'must match password');
      }
    });

    this.setState({errors: errors});
    return errors;
  }

  isValidEmployee(){
    let errors = this.validateEmployee();

    return !Object.values(errors).some((e) => e);
  }

  registerEmployee(event){
    event.preventDefault();
    if (!this.isValidEmployee()){
      return false;
    }
    this.props.actions.registerEmployee(this.state.employee).then(() => {
      this.context.router.push('user/home');
    });
  }

  render(){
    return (
      <div>
        <Header />

        <div className="container-fluid">
          <div id="sign-up-page">
            <div className="col-md-6 bg-white">
              <div className="info text-center">
                <h3>We Bring Job Offers to You</h3>
                <p>Join thousands of people who’ve found their dream job using Hired.</p>
              </div>
              <SignUpAsEmployeeForm
                employee={this.state.employee}
                errors={this.state.errors}
                loading={this.state.loading}
                onChange={this.updateEmployeeDetails}
                onSave={this.registerEmployee} />
            </div>
            <div className="col-md-6">
              <div className="info text-center">
                <h3>{'3 Reasons You\'ll Love Hired'}</h3>

                <h5 className="row-buffer">{'Companies apply to you, not the other way around.'}</h5>
                <h5 className="row-buffer">{'You may hide your info from current and former employers.'}</h5>
                <h5 className="row-buffer">{'It\'s free for candidates, plus you get a $300 hiring bonus!'}</h5>

                <h4><strong>Get started and find your dream job today!</strong></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  actions: PropTypes.object.isRequired,
  employee: PropTypes.object.isRequired
};

SignUpPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state){
  let employee = {name: '', email: '', password: '', confirmPassword: '', phone: ''};
  return ({
    employee: employee
  });
}

function mapDispatchToProps(dispatch){
  return ({
    actions: bindActionCreators(authActions, dispatch)
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as employeeActions from '../../actions/employeeActions';
import Header from './Header';
import RegistrationSteps from './RegistrationSteps';

class EmployeePage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      employee: this.props.employee,
      errors: {},
      loading: false
    };

    this.changeAttribute = this.changeAttribute.bind(this);
    this.updateEmployeeDetails = this.updateEmployeeDetails.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.completeRegistration = this.completeRegistration.bind(this);

    if (this.state.employee.areaInterested){
      this.props.actions.fetchRoles(this.state.employee.areaInterested);
    }
  }

  changeAttribute(event){
    debugger;
    let attr = event.target.name;
    let employee = this.state.employee;

    if (event.target.type === "radio"){
      employee[attr] = (event.target.checked ? event.target.value : '');
    } else if (event.target.type === 'checkbox') {
      employee[attr] = (employee[attr] || []);
      if (event.target.checked){
        employee[attr].push(event.target.value);
      } else {
        let index = employee[attr].index(event.target.value);
        if (index !== -1){
          employee[attr].splice(index, 1);
        }
      }
    } else {
      employee[attr] = event.target.value;
    }
    this.setState({employee: employee});

    // fetch roles if the interest area changes;
    if (event.target.name === 'areaInterested'){
      this.props.actions.fetchRoles(employee.areaInterested);
    }
  }

  validateEmployee(field){
    const employee = this.state.employee;
    let mandatoryFields = ['name'];

    if (field){
      let errors = Object.assign({}, this.state.errors);
      errors[field] = '';

      if (mandatoryFields.includes(field) && !employee[field]){
        errors[field] = 'required';
      }

      this.setState({errors: errors});

      return errors[field];
    }

    let errors = {};
    mandatoryFields.forEach((field) => {
      if (!employee[field]){
        errors[field] = 'required';
      }
    });

    this.setState({errors: errors});
    return errors;
  }

  isValidEmployee(){
    this.validateEmployee();

    return !Object.values(this.state.errors).some((e) => e);
  }

  updateEmployeeDetails(event){
    event.preventDefault();
    if (!this.isValidEmployee()){
      return false;
    }

    this.setState({loading: true});
    if (this.props.registrationInProgress) {
      this.props.actions.updateEmployeeDetails(this.state.employee).then(() => {
        this.setState({loading: false});
        if (this.props.registrationStep === 3){
          this.completeRegistration()
        } else {
          this.moveForward();
        }
      });
    } else {
      this.props.actions.updateEmployeeDetails(this.state.employee).then(() => {
        this.setState({loading: false});
      });
    }

  }

  moveForward(){
    this.props.actions.moveForward(this.state.employee);
  }

  completeRegistration(){
    this.props.actions.completeRegistration(this.state.employee);
  }

  render(){
    let userInfo = '';
    let employee = this.state.employee;

    if (this.props.registrationInProgress){
      userInfo = (<RegistrationSteps
        registrationStep={this.props.registrationStep}
        userRoles={this.props.roles}
        employee={this.state.employee}
        errors={this.state.errors}
        onChange={this.changeAttribute}
        onSubmit={this.updateEmployeeDetails}
        onSkip={this.moveForward}
        loading={this.state.loading} />);
    } else {
      userInfo = (<div>
        <h1>{employee.name}</h1>
        <p>Email: {employee.email}</p>
        <p>Phone: {employee.phone}</p>
        <p>HeadLine: {employee.headline}</p>
        <p>Interest In: {employee.areaInterested}</p>
        <p>Experience: {employee.experience} Years</p>
        <p>Most interested in {employee.roles.join(', ')} roles</p>
        <p>{employee.preferences}</p>
      </div>);
    }

    return(
      <div id="user-info">
        <Header />

        <div className="container">
          {userInfo}
        </div>
      </div>
    );
  }
}

EmployeePage.propTypes = {
  employee: PropTypes.object.isRequired,
  registrationInProgress: PropTypes.bool,
  registrationStep: PropTypes.number,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    employee: state.user,
    registrationInProgress: state.registrationInProgress,
    registrationStep: state.registrationStep,
    roles: state.roles
  };
}

function mapDispatchToProps(dispatch){
  return ({
    actions: bindActionCreators(employeeActions, dispatch)
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);

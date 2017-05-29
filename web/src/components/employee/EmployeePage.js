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
  }

  changeAttribute(event){
    let attr = event.target.name;
    let employee = this.state.employee;

    employee[attr] = event.target.value;
    this.setState({employee: employee});
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
    let errors = this.validateEmployee();

    return !Object.values(errors).some((e) => e);
  }

  updateEmployeeDetails(event){
    event.preventDefault();
    if (!this.isValidEmployee()){
      return false;
    }

    this.setState({loading: true});
    if (this.props.registrationInProgress) {
      this.props.actions.updateEmployeeDetails(this.state.employee).then(() => {
        debugger;
        this.setState({loading: false});
        this.moveForward();
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

  render(){
    debugger;
    let userInfo = '';

    if (this.props.registrationInProgress){
      userInfo = (<RegistrationSteps
        registrationStep={this.props.registrationStep}
        employee={this.state.employee}
        errors={this.state.errors}
        onChange={this.changeAttribute}
        onSubmit={this.updateEmployeeDetails}
        onSkip={this.moveForward}
        loading={this.state.loading} />);
    } else {
      userInfo = (<div>
        <h1>{this.state.employee.name}</h1>
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
  debugger;
  return {
    employee: state.user,
    registrationInProgress: state.registrationInProgress,
    registrationStep: state.registrationStep
  };
}

function mapDispatchToProps(dispatch){
  return ({
    actions: bindActionCreators(employeeActions, dispatch)
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);

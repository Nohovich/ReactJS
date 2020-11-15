import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// The UI of every React application we develop, gets broken down into Components.
//  Every react application we develop will be comprising of multiple components.
// There will be one Root Component and this component can have one or more Child Components in it.
// And this nesting can go further as the Application UI gets developed.
// We want to Develop one Employee Component, in which we will be having sections like Employee Personal Info, Project Details, Salary Details Section and Department section.

//So the Application UI can be designed in such a way that, we will create components like,

// PersonalInfo Component

// ProjectDetails Component

// SalaryDetails Component

// DepartmentComponent

// And in EmployeeComponent we will use the above Components.

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UpdatedSalary: null,
    };
  }

  // getUpdatedSalary function will receive the salary from Salary Component and we can store this in state object using setState method 
  getUpdatedSalary = (salary) => {
    this.setState({ updatedSalary: salary });
  };

  render() {
    return (
      <div>
        <h1>Employee Component...</h1>
        <p>
          <label>
            Id : <b>{this.props.Id}</b>
          </label>
        </p>
        <p>
          <label>
            Name : <b>{this.props.Name}</b>
          </label>
        </p>
        <p>
          <label>
            Location : <b>{this.props.Location}</b>
          </label>
        </p>
        <p>
          <label>
            Total Salary : <b>{this.props.Salary}</b>
          </label>
        </p>
        <p>
          <label>
            Updated Salary : <b>{this.state.updatedSalary}</b>
          </label>
        </p>
        <Salary
          // Call this Salary Component from Employee Component.
          BasicSalary={this.props.BasicSalary}
          SpecialAllowance={this.props.SpecialAllowance}
          onSalaryChanged={this.getUpdatedSalary}
        ></Salary>
      </div>
    );
  }
}

class Salary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: this.props.BasicSalary,
      sa: this.props.SpecialAllowance,
    };
  }
  updateSalary = () => {
    let salary =
      parseInt(this.refs.BasicSalary.value) +
      parseInt(this.refs.SpecialAllowance.value);
      // fter the Salary is Calculated, I push this salary into a new Property called onSalaryChanged and use this property as Callback.
    this.props.onSalaryChanged(salary);
  };

  render() {
    return (
      <div>
        <h1>Salary Details...</h1>
        <p>
          <label>
            Basic Salary :
            <input
              type="text"
              defaultValue={this.state.basic}
              ref="BasicSalary"
            />
          </label>
        </p>
        <p>
          <label>
            Special Allowance :{" "}
            <input
              type="text"
              defaultValue={this.state.sa}
              ref="SpecialAllowance"
            />
          </label>
        </p>
        <button onClick={this.updateSalary}>Update</button>
      </div>
      //Button with the text as Update and Call a function Called as UpdateSalary on the Click.
    );
  }
}

//Employee is the Parent and Salary Component is the Child.
// Parent Component is passing the Data to Child Components through properties.
const e = (
  <Employee
    Id="101"
    Name="David"
    Location="Tel-Aviv"
    Salary="50000"
    BasicSalary="25000"
    SpecialAllowance="15000"
  ></Employee>
);

ReactDOM.render(e, document.getElementById("root"));

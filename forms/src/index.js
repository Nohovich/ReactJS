import React from "react";
import ReactDOM, { render } from "react-dom";

// Class Component
class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    // create a state object
    this.state = {
      employee: {
        Id: "",
        Name: "",
        Location: "",
        Salary: "",
      },
    };
  }

  // we save the input text box value into our state object using the setState method. 
  //We can get the input value using e.target.value.
  // With this function, we have to handle the onChange event for all the inputs and update the state object using setState
  changeHandler = (e) => {
    // get the input element Name using
    const name = e.target.name;
    // Get the value of that input using
    const value = e.target.value;
    // Now we call setState method and we pass an employee object.
    this.setState({
      employee: {
        ...this.state.employee,
        // add a new Property to this employee object.
        // Name of this property will be the input element name and this property will hold the value of that respective input element
        [name]: value,
        // Whenever User makes a change on any of the input elements, we are updating our state object using the setState method.
      },
    });
  };

  onCreateEmployee = () => {
    console.log(this.state.employee);
  };

  render() {
    return (
      <div>
        <h2> New Employee form...</h2>
        <form>
          <p>
            <label>
              Employee ID :{" "}
              <input
                type="text"
                name="Id"
                value={this.state.employee.Id}
                onChange={this.changeHandler}
              ></input>
            </label>
          </p>
          <p>
            <label>
              Employee Name :{" "}
              <input
                type="text"
                name="Name"
                value={this.state.employee.Name}
                onChange={this.changeHandler}
              ></input>
            </label>
          </p>
          <p>
            <label>
              Employee Location :{" "}
              <input
                type="text"
                name="Location"
                value={this.state.employee.Location}
                onChange={this.changeHandler}
              ></input>
            </label>
          </p>
          <p>
            <label>
              Employee Salary :{" "}
              <input
                type="text"
                name="Salary"
                value={this.state.employee.Salary}
                onChange={this.changeHandler}
              ></input>
            </label>
          </p>
        </form>
        <button onClick={this.onCreateEmployee}>Create</button>
      </div>
    );
  }
}

const element = <EmployeeComponent></EmployeeComponent>;

ReactDOM.render(element, document.getElementById("root"));

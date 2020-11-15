import React from "react";
import ReactDOM from "react-dom";
// npm install node-fetch
const fetch = require("node-fetch");
// or npm install axios
// import axios from 'axios';

class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // property employees initialized it to empty array.
      employees: [],
      message: ""
    };
  }

  componentDidMount() {
    
    // call fetch method,  passing the Url of Web API.
    fetch("https://localhost:44348/api/Employee")
      // convert the response into JSON objects
      .then((res) => res.json())
      // we assign this result list to our state object employees property
      .then((result) => {
        this.setState({
          employees: result
        });
      });
      

       /*
       
       // another way to use AJAX(axios)
      axios.get('"https://localhost:44348/api/Employee')
      // convert the response into JSON automatically
      .then(res => {
        console.log(res.data);
         // we assign this result list to our state object employees property
        this.setState({
          employees: result
        });
      })
       */

  }

  onCreateEmployee = () => {
    // creating an object that has this Fields
    let empInfo = {
      Id: this.refs.Id.value,
      Name: this.refs.Name.value,
      Location: this.refs.Location.value,
      Salary: this.refs.Salary.value,
    };
    // call the Promise method 
    fetch("https://localhost:44348/api/Employee", {
      method: "POST",
      headers: { "Content-type" : "application/json" },
      // sending the object in json
      body: JSON.stringify(empInfo),
    })
    // using then, convert the response into JSON object, 
      .then((r) => r.json())
      // // and then set the message property of the state object using setState method upon receiving true from our Web API.
      .then((res) => {
        if (res) {
          console.log(empInfo);
          this.setState({ message: "New Employee is Created Successfully" });
        }
      });
  };

  render() {
    return (
      <div>
        <h2>Employees Data...</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((emp) => (
              <tr key={emp.Id}>
                <td>{emp.Id}</td>
                <td>{emp.Name}</td>
                <td>{emp.Location}</td>
                <td>{emp.Salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Please Enter Employee Details...</h2>
        <p>
          <label>
            Employee ID : <input type="text" ref="Id"></input>
          </label>
        </p>
        <p>
          <label>
            Employee Name : <input type="text" ref="Name"></input>
          </label>
        </p>
        <p>
          <label>
            Employee Location : <input type="text" ref="Location"></input>
          </label>
        </p>
        <p>
          <label>
            Employee Salary : <input type="text" ref="Salary"></input>
          </label>
        </p>
        <button onClick={this.onCreateEmployee}>Create</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
const element = <EmployeeComponent></EmployeeComponent>;

ReactDOM.render(element, document.getElementById("root"));

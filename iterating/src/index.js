import React from "react";
import ReactDOM from "react-dom";

// function Component
// his function component accept a list of employees as a Parameter.
// this function component returns a div container in which we will display the Employee Details by reading from the function Parameter.
function Employee(props) {
  return (
    //  apply an inline style to this div and set the border.
    <div style={{ border: "3px solid red" }}>
      <p>
        Employee ID : <b>{props.data.Id}</b>
      </p>
      <p>
        Employee Name : <b>{props.data.Name}</b>
      </p>
      <p>
        Employee Location : <b>{props.data.Location}</b>
      </p>
      <p>
        Employee Salary : <b>{props.data.Salary}</b>
      </p>
    </div>
  );
}

// function component
function DisplayEmployees(props) {
  // access the array of employees from the function parameter.
  const list = props.employeeList;
  // we loop through the list using the JavaScript map() function and assign the output of this function to a variable named listElements.
  // call the Employee Component with in the map method, will pass the Employee Details through a Property called as data.
  const listElements = list.map((emp) => <Employee key={emp.Id} data={emp} />);
  return <div>{listElements}</div>;
}

const employees = [
  { Id: 101, Name: "David", Location: "Israel", Salary: 12345 },

  { Id: 102, Name: "Amir", Location: "Israel", Salary: 23456 },

  { Id: 103, Name: "Elad", Location: "Israel", Salary: 34567 },
];

const element = <DisplayEmployees employeeList={employees}></DisplayEmployees>

ReactDOM.render(element,document.getElementById('root'));
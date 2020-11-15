import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// component is a JavaScript class or function that accepts inputs which are properties(props),
// and returns a React element that describes how a section of the User Interface should appear.
// a component can be created as Function Component or Class Component.
// a component has to start with a capital letter
// // or
//function Employee(data) {
// return (
// <div>
//   <p>Name : {data.name}</p>
//  <p>Salary : {data.salary}</p>
// </div>
// );
//}

//const Employee=(data)=> {
// return <div><p>Name : {data.name}</p>
//  <p>Salary : {data.salary}</p></div>;
//}

const Employee = (data) => {
  return (
    <div>
      <p>Name : {data.name}</p>
      <p>Salary : {data.salary}</p>
      <Department dept={data.dept} head={data.head} />
    </div>
  );
};

const Department = (deptInfo) => {
  return (
    <div>
      <p>
        Dept Name is : <b>{deptInfo.dept}</b>
      </p>
      <p>
        Dept Head is : <b>{deptInfo.head}</b>
      </p>
    </div>
  );
};

// Call this component by writing
const element = <Employee name="Sara" salary="12345" dept="Test" head="Head" />;

ReactDOM.render(element, document.getElementById("root"));

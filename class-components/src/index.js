import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class  component
class Employee extends React.Component {

  render(){
    return <div>
      <h2>Employee Details...</h2>
      <p>
        <label>Name : <b>{this.props.Name}</b></label>
      </p>
      <Department Name={this.props.DeptName}/>
      </div>;
  }
}

class Department extends React.Component {

  render(){
    return <div>
      <h2>Department Details...</h2>
      <p>
        <label>Name : <b>{this.props.Name}</b></label>
      </p>
      </div>;
  }
}

// Calling the Class Component 
const element=<Employee Name="David" DeptName="Dev"/>

ReactDOM.render(element,document.getElementById("root"));

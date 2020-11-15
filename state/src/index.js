import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Employee extends React.Component {
  // State is similar to props, but it is private and fully controlled by the component.
  //State contains data specific to a given component that may change over time.
  //The state is user defined plain javascript object.
  // By adding a “local state” to a class, we can move data from the props onto a state which can be updated. 
  state = { counter: 0 };
  addEmployee = () => {
    // setState() tells React that this component and its children (sometimes delayed and grouped into a single batch) should be re-rendered with the most updated state. 
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <h2>Employee Component...</h2>
        <button onClick={this.addEmployee}>Add Employee</button>
        <p>
          <label>
            Add Employee Button is Clicked : <b>{this.state.counter}</b>
          </label>
        </p>
      </div>
    );
  }
}
const element1 = <Employee></Employee>;
//ReactDOM.render(element1, document.getElementById("root"));

class CountCharacters extends React.Component{

  constructor(props){

    // base constructor
      super(props);

      this.state={

          message:'',

          counter:10

      };

  }

  onMessageChange(text){
      this.setState({
          message:'Message has '+text.length+' number of Characters'
      });
  }
  render(){
      return <div>
          <h2>Welcome to Count Characters Component...</h2>
          <p>
              <label>Enter Message : <input type="text" 
                          onChange={e=>this.onMessageChange(e.target.value)}></input></label>
          </p>

          <p>
              <label>{this.state.message}</label>
          </p>
          <p>
              <label>{this.state.counter}</label>
          </p>
      </div>
  }
}
const element=<CountCharacters></CountCharacters>

ReactDOM.render(element,document.getElementById("root"));


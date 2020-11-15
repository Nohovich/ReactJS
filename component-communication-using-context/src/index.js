import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// how we use Context to pass the data between components at different nesting levels.
// Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.
// Context is primarily used when some data needs to be accessible by many components at different nesting levels.

// create context object
const EmployeeContext = React.createContext({
  data: "",
  changeEmployeeInfo: () => {},
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { Id: 101 },
      // New Property to the state object named changeEmployeeInfo whose name is same as the one we have created in our Context Object and Pass this function name as its Value.
      changeEmployeeInfo: this.updateEmployeeDetails,
    };
  }
  //changes the state object data through the setState Method.
  updateEmployeeDetails = () => {
    this.setState({ data: { Id: 102 } });
  };

  render() {
    return (
      <div>
        <h2>Welcome to App Component</h2>
        <p>
          <label>
            Employee Id : <b>{this.state.data.Id}</b>
          </label>
        </p>
        <EmployeeContext.Provider value={this.state}>
          <Employee />
        </EmployeeContext.Provider>
      </div>
    );

    // Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
    // Context Provider Accepts a value property to be passed to consuming components that are descendants of this Provider.
    // One Provider can be connected to many consumers.
    // Providers can be nested to override values deeper within the tree.
    // All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
    // So we modify the way how Employee Component is being Called from App Component
  }
}

class Employee extends React.Component {
  // create a static variable and assign the EmployeeContext Object.
  static contextType = EmployeeContext;
  render() {
    return (
      <div>
        <h2>Welcome to Employee Component...</h2>
        <p>
          <label>
            Employee Id : <b>{this.context.data.Id}</b>
          </label>
        </p>
        <p>
          <button onClick={this.context.changeEmployeeInfo}>Change</button>
        </p>
      </div>
      // call this context function on Click .
    );
  }
}

const element = <App />;
ReactDOM.render(element, document.getElementById("root"));

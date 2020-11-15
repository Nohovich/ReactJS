import React, { Component } from 'react'

//
class Counter  extends Component {
   
    // object
    state = {
        value : this.props.value,
        //tags : ['tag1', 'tag2', 'tag3']
     };

     // Render  = return a reference to the component 
    render() { 
        return (
          // React.Fragment = to return multiple elements(Fragments let you group a list of children without adding extra nodes to the DOM)
          // className = using bootstrap class
          <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
              onClick={(product) => this.handleIncrement(product)}
              className="btn btn-secondary btn-sm"
            >
              Increment
            </button>
            <ul>
 
            </ul>
          </React.Fragment>
        );
    }

    // incrementing the count
    handleIncrement = (product) => {
    //    this.state.count++;
    this.setState({ value: this.state.value + 1 });
    //console.log("Increment Clicked", this);
  };


    getBadgeClasses(){
        let classes = 'badge m-2 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }


    //
    formatCount(){
        //
        const { value } = this.state;
        // if the value of the count is 0 return Zero els return the state count
        return value  === 0 ? 'Zero' : value;
    }
a
}
export default Counter;
// Refs provide a way to access DOM nodes or React elements created in the render method.

import ReactDOM from "react-dom";

import React, { Component } from "react";

// import video from '../src/assets/Draft_1.mp4';

class QuantityIncrement extends React.Component {
  constructor(props) {
    super(props);

    // input element = reference object
    this.quantityRef = React.createRef();
  }

  incrementQuantity = () => {
    // access this ref instance and increment the value.
    this.quantityRef.current.value++;
  };

  render() {
    alert("Text Message");

    return (
      <div>
        <p>
          <label>
            Enter Quantity : <input type="text" ref={this.quantityRef}></input>
            <button onClick={this.incrementQuantity}>+</button>
          </label>
        </p>
      </div>
    );
  }
}

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.userNameRef = React.createRef();
  }

  componentDidMount() {
    this.userNameRef.current.focus();
  }

  render() {
    return (
      <div>
        <h2>LogIn Screen...</h2>

        <p>
          <label>
            UserName : <input type="text" ref={this.userNameRef}></input>
          </label>
        </p>

        <p>
          <label>
            PassWord : <input type="text"></input>
          </label>
        </p>

        <button>LogIn</button>
      </div>
    );
  }
}

{
  /* class VideoPlayer extends React.Component{

  constructor(props){

    super(props);

    this.videoRef=React.createRef();

  }



  playVideo=()=>{

    this.videoRef.current.play();

  }



  pauseVideo=()=>{

    this.videoRef.current.pause();

  }

  render(){

    return(

      <div>

        <video ref={this.videoRef} width="300" height="200" controls>

          <source src={video} type="video/mp4"></source>

        </video>

        <div>

           <button onClick={this.playVideo}>Play</button>  

           <button onClick={this.pauseVideo}>Pause</button>  

        </div>        

      </div>

    );

  }
} */
}

// ref to our function component use forwardRef method
const DemoComponent = React.forwardRef((props, ref) => {
  function testClick() {
    //  call a function on Click of this button 
    // will call the focus method using the reference which is being passed.
    ref.current.focus();
  }
  // return a button from this Component
  return <button onClick={testClick}>Click</button>;
});

class Elevator extends React.Component {
  constructor(props) {
    super(props);

    this.elevatorRef = React.createRef();
  }

  render() {
    return (
      <div>
        <h2>Welcome to Elevator Ordering Screen...</h2>

        <p>
          <label>
            Elevator Name : <input ref={this.elevatorRef} type="text"></input>
          </label>
        </p>

        <p>
          <label>
            Elevator Speed : <input type="text"></input>
          </label>
        </p>

        <p>
          <label>
            Elevator Load : <input type="text"></input>
          </label>
        </p>

        <Summary innerRef={this.elevatorRef}></Summary>

        <DemoComponent ref={this.elevatorRef}></DemoComponent>
      </div>
    );
  }
}

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  focusInput = () => {
    this.props.innerRef.current.focus();
  };

  render() {
    return (
      <div>
        <h2>Summary Details...</h2>

        <p onClick={this.focusInput}>
          <label>
            Elevator Name : <b>Name - 1</b>
          </label>
        </p>

        <p>
          <label>
            Elevator Speed : <b>10 m/s</b>
          </label>
        </p>

        <p>
          <label>
            Elevator Load : <b>550 Kg</b>
          </label>
        </p>
      </div>
    );
  }
}

function testComponent() {
  let testRef = null;

  function handleClick() {
    testRef.focus();
  }

  return (
    <div>
      <input type="text" ref={(e) => (testRef = e)} />

      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}

const element = <Elevator></Elevator>;
ReactDOM.render(element, document.getElementById("root"));

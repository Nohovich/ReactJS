import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contacts";
import About from "./components/About";
import Post from "./components/Post";
 // single page application
class App extends Component {
  render() {
    return (
      // doing client side routing with URL segments
      <BrowserRouter>
        <div className="App">
          <header className="App">
          {/* this component(Navbar) is always shown */}
            <Navbar />
            {/* if the link ends with / load the Home component */}
            <Route exact path="/" component={Home} />
            {/* if the link ends with Contact load the Contact component */}
            <Route path="/contact" component={Contact} />
            {/* if the link ends with About load the About component */}
            <Route path="/about" component={About} />
            {/* if the link ends with Post load the Post component */}
            <Route path="/posts/:post_id" component={Post} />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

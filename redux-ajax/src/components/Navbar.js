import React from "react";
// using npm i react-router-dom
import { Link, NavLink, withRouter } from "react-router-dom";
const Navbar = (props) => {
  console.log(props.history);
  /*
  setTimeout( () => { 
    props.history.push('/') }, 2000); 
    */
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo center">Poke' Times</a>
        <ul className="right">
          {/*  contains the DOM bindings for React Router. In other words,
           the router components for websites.
          when you click around on the different <Link>s,
           the router renders the matching <Route>. */} 
          <li>
             {/* changes the url ending to /(we cant see it) */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
             {/* changes the url ending to /about */}
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
             {/* changes the url ending to /contact */}
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
// passing the component(Navbar) through the high component(withRouter)
export default withRouter(Navbar);

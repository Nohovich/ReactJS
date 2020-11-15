import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// An element specifies what should be there in our UI. 
//An Element is a plain object describing what we want to appear in terms of the DOM nodes.
// assign some styles to this element. Apply this class to the element using className attribute.
// const element=<h1 className="testClass">Hi...</h1>

// an Element which contains div and div has a h1 tag and h2 tag and we render this element to the div container.
const element = (

  <div>

    <h1>Welcome to React Programming World</h1>

    <h2>Understanding React Rendering…</h2>

  </div>

);


// We have created an Object of type h1 and assigned it to a variable called as element. 
//This element should be rendered into the Browser DOM, and for that we need a container. 
//Open Index.html and there is a div with id as root and we will use that div as our container.
ReactDOM.render(element, document.getElementById('root'));

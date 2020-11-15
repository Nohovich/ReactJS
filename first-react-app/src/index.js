// https://www.digitalcitizen.life/command-prompt-how-use-basic-commands
// creat the react app: npx create-react-app name-of-app
// cd my-app = changing the path
// run the app: npm start(we need to be on the root of the app)
import React from 'react';
import reactDOM from 'react-dom';
const element = <h1>Hello word</h1>
reactDOM.render(element,document.getElementById('root'));
console.log(element);
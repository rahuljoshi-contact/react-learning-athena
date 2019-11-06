import React from 'react';
import ReactDOM from 'react-dom' ;
import App from './App' ;

// syntax using jsx
// ReactDOM.render(<h1>Hi inside a root element</h1>, document.getElementById("root"));


// syntax using createelement
// ReactDOM.render(React.createElement("h1", null, "now using createelement"), document.getElementById("root"));


// rendering app component
ReactDOM.render(<App />, document.getElementById("root")) ;

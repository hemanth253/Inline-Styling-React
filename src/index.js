import React from "react";
import ReactDOM from "react-dom";

//  tag a requires closing tags
//  pass js object to the style using {}
//  camelCasing of keys of js objects
//  values of js object shoud be string

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

//  use of inline styling - can convert in 1 go.
customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);

import React from "react";
import { render } from "react-dom";

const HelloComponent = () => {
  return <h1>Hello World</h1>;
};

const wrapper = document.getElementById("container");
wrapper ? render(<HelloComponent />, wrapper) : false;

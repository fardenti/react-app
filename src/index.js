import React from "react";
import { render } from "react-dom";
import App from "./App";

const wrapper = document.getElementById("container");
wrapper ? render(<App />, wrapper) : false;

// ReactDOM.render(<App />, document.getElementById("container"));

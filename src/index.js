import React from "react";
import { render } from "react-dom";
import App from "./App";

const wrapper = document.getElementById("wrapper");
wrapper ? render(<App />, wrapper) : false;

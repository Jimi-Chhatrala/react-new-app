import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import New, { App2 } from "./App";
// import New from "./App";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloMessage from "./HelloMessage";
import House from "./House";

const root = ReactDOM.createRoot(document.getElementById("root"));
let a = "Jimmy";
let b = 30;
const friends = ["Amit", "Jazz", "Kumar", "Roy"];
root.render(
  <React.StrictMode>
    {/* <New /> */}
    {/* <House /> */}
    <App />
    {/* <App2 /> */}
    {/* <HelloMessage name={a} age={b} > */}
    {/* <p>Children Element 1</p> */}
    {/* </HelloMessage> */}
    {/* <HelloMessage name={a} age={b} isMarried={false} arr={friends} /> */}
    {/* <HelloMessage name="Kumar" age="25" /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

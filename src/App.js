import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

// import React from "react";

// class App extends React.Component {
//   render() {
//     return <h1>Hello Class Component</h1>;
//   }
// }
import React, { Component } from "react";

// export default class App extends Component {
export class App extends Component {
  render() {
    return (
      <>
        <h1>Hello Class Component</h1>
        <p>This is class component paragraph.</p>;
      </>
    );
  }
}
// function App() {
//   return (
//     <>
//       <Header />
//       <Sidebar />
//       <Footer />
//       <App2 />
//     </>
//   );
// }

// export function App2() {
// function App2() {
//   return (
//     <>
//       <h1>App2</h1>
//     </>
//   );
// }

// export { App2 };
// export default App;
// export { App, App2 };

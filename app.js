import React from "react";
import ReactDOM from "react-dom/client";
// -------React Element---------
// -------This is a way to create element using Core react-----
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//------This is a way to create using JSX----
// const heading = <h1 id="heading">Namaste React</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// React Component
// 1 ClassBase Component
// 2 Function Base Component
// Function component
const Title = () => <h1>Hello Brother</h1>;
// Component Composition
const numbers = 1000;
const HeadingComponent = () => (
  <div id="container">
    <h2>{numbers}</h2>
    <Title />

    <h1 className="heading">Namaste Rahul Jangid</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

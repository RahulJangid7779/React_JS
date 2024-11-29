import React from "react";
import ReactDOM from "react-dom/client";
// React Element
// This is a way to create element using Core react
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// This is a way to create using JSX
const jsxheading = <h1>Namaste React</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);

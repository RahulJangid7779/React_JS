const heading = React.createElement("h1", {
    id: "heading"
}, "Hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}), [
    React.createElement("h1", {}, "hello world"),
    React.createElement("h2", {}, "good bo ")
]);
root.render(parent);
console.log(parent);

//# sourceMappingURL=index.7c0ccee6.js.map

//create the h1 tag in React => we've put it in Dom => render

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!!!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "This is H1 Tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", {}, "This is H2 Tag")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

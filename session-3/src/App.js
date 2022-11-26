import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

//Nested header element using React.createElement

// const heading = React.createElement("div", { id: "title" }, [
//   React.createElement("h1", null, "h1 using React.createElement"),
//   React.createElement("h2", null, "h2 using React.createElement"),
//   React.createElement("h3", null, "h3 using React.createElement"),
// ]);

//Nested header element using JSX

// const heading = (
//   <div id="title" className="title-class" tabIndex="1">
//     <h1>h1 </h1>
//     <h2>h2 </h2>
//     <h3>h3 </h3>
//   </div>
// );

// functional component with JSX

const TitleComponent = () => {
  return (
    <h1>Composition of Titlecomponent using functional component with JSX</h1>
  );
};

const HeadingComponent = () => {
  return (
    <div id="title" className="title-class" tabIndex="1">
      <Header />
      <TitleComponent />
      <h1>h1 using functional component with JSX </h1>
      <h2>h2 using functional component with JSX</h2>
      <h3>h3 using functional component with JSX</h3>
    </div>
  );
};
// when try to use {TitleComponent}
// index.js:1 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
//     at div
//     at HeadingComponent

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

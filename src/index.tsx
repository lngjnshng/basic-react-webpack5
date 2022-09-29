import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <h1>A Basic React Application with webpack 5 and TypeScript</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
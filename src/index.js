import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./colors.css";
import App from "./components/App.jsx";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

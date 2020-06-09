import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import store from "./redux/store";

// import App from "./components2/App/App";
// import store from "./redux2/store";
import axios from "axios";
axios.get("http://localhost:8080/posts").then(console.log);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

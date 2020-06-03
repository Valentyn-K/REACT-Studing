import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import App from "./components/App/App";
// import store from "./redux/store";

import App from "./components2/App/App";
import store from "./redux2/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

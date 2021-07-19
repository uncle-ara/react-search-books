import React from "react";
import App from "./App";
import { store } from "./store";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.module.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

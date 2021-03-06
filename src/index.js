import React from "react";
import ReactDOM from "react-dom";
import { store } from "./reducers";
import "./index.scss";
import App from "./components/App/App";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

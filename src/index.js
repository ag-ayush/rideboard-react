import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configuration from "./configuration";
import ComponentOverride from "./components/ComponentOverride";
import { Oidc, InMemoryWebStorage } from "@axa-fr/react-oidc-redux";
import store from "./store";

const isEnabled = configuration.isEnabled;
if (configuration.configurations.length <= 0) {
  throw new Error(`No configuration found`);
}
const authenticationConfig = configuration.configurations[1];

console.log(authenticationConfig);

const Start = (
  <Provider store={store}>
    <Oidc
      store={store}
      configuration={authenticationConfig.config}
      isEnabled={isEnabled}
      callbackComponentOverride={ComponentOverride}
      UserStore={InMemoryWebStorage}
    >
      <Router>
        <App />
      </Router>
    </Oidc>
  </Provider>
);

ReactDOM.render(Start, document.getElementById("root"));

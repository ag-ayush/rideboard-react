import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import configuration from './configuration';
import ComponentOverride from './components/ComponentOverride';

import { Oidc, InMemoryWebStorage } from '@axa-fr/react-oidc-redux';

const isEnabled = configuration.isEnabled;
if (configuration.configurations.length <= 0) {
  throw new Error(`No configuration found`);
}
// TODO: Figure out CORS error with CSH, and add multiple login buttons, etc. Probably the login button will set state then redirect to index and based on that state we pick authenticationConfig.
const authenticationConfig = configuration.configurations[0];

console.log(authenticationConfig)

const Start = (
  <Provider store={store}>
    <Router>
      <Oidc
        store={store}
        configuration={authenticationConfig.config}
        isEnabled={isEnabled}
        callbackComponentOverride={ComponentOverride}
        UserStore={InMemoryWebStorage}
      >
        <App />
      </Oidc>
    </Router>
  </Provider>
);

ReactDOM.render(Start, document.getElementById('root'));

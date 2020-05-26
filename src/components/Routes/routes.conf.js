import React from 'react';

import {Home} from '../Home';
import User from "../User";

import { Link } from "react-router-dom";
import { oidcSecure } from "@axa-fr/react-oidc-redux";

const NotProtectedChild = () => (
  <div>
    <header className="App-header">
      <h1 className="App-title">Protected 1</h1>
    </header>
    <Link to="/">Home</Link>
    <User />
  </div>
);

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    titlebar: {
      title: 'Home',
      subtitle: '',
    },
  },
  {
    name: 'Protected 1',
    path: '/protected1',
    component: oidcSecure(NotProtectedChild),
    titlebar: {
      title: 'Protected',
      subtitle: '',
    },
  },
];

export default routes;

import React from 'react';
import { withAuthentication } from "@axa-fr/react-oidc-redux-fetch";
import { compose, withProps } from "recompose";
import { Link } from "react-router-dom";

const fetch = (status) => (url, options) => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          status,
        }),
      350
    );
  });
};

const enhance401 = compose(
  withAuthentication(fetch(401)),
  withProps((props) => ({
    handleClick: (e) => {
      e.preventDefault();
      props
        .fetch("http://www.demo.url")
        .then(() => alert("fetch end"))
        .catch((e) => alert(e));
    },
  }))
);

const Button401 = ({ handleClick }) => (
  <button onClick={handleClick} type="button">
    Simulate 401
  </button>
);

const Button401Enhance = enhance401(Button401);

export const Home = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Home</h1>
    </header>
    <Link to="/protected1">protected1</Link>
    <Button401Enhance />
  </div>
);

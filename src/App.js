import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes';
import Header from './containers/Header';
import Footer from './containers/Footer';

import './app.css';

const App = () => (
  <Router>
    <div>

      <Header />

      <main className="content">
        <Routes />
      </main>

      <Footer />

    </div>
  </Router>
);

export default hot(module)(App);

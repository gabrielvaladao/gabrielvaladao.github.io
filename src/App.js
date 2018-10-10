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
      {(function tryFont() {
        const trial = document.createElement('script');
        trial.type = 'text/javascript';
        trial.async = true;
        trial.src = 'https://easy.myfonts.net/v2/js?sid=156092(font-family=Sweater+School+Regular)&sid=156093(font-family=Sweater+School+SemiBold)&sid=156094(font-family=Sweater+School+Bold)&key=4ZAHmQwhBS';
        const head = document.getElementsByTagName('head')[0];
        head.appendChild(trial);
      }())}
      <Header />

      <main className="content">
        <Routes />
      </main>

      <Footer />

    </div>
  </Router>
);

export default hot(module)(App);

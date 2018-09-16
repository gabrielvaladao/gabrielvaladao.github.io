import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes';

import './app.css';

const App = () => (
  <Router>
    <div>
      <header>
        <h1 id="site-title">Labrysinthe</h1>

        <nav>
          <Link exact to="/">Home</Link>
          <Link to="/shows">Shows</Link>
          <Link to="/music">Music</Link>
          <Link to="/bio">Bio</Link>
          <Link to="/press">Press</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="content">
        <Routes />
      </main>

      <footer>
        {/* TODO: DRY. Reuse header nav */}
        <nav>
          <Link exact to="/">Home</Link>
          <Link to="/shows">Shows</Link>
          <Link to="/music">Music</Link>
          <Link to="/bio">Bio</Link>
          <Link to="/press">Press</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* signup form (large) */}
        <h2>Sign up</h2>
        <p>
          Show some love and be the first to hear about upcoming gigs. We'll respect your privacy and promise not to spam you.
        </p>
        <form id="signup-lg" action="" method="post">
          <label htmlFor="signup-lg-email">
            Email
            <input type="email" id="signup-lg-email" required />
          </label>
          <button type="submit">Sign up</button>
        </form>

        {/* socket */}
        &copy; 2018 Labrysinthe
      </footer>
    </div>
  </Router>
);

export default hot(module)(App);

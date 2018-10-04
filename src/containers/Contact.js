import React from 'react';
import { Link } from 'react-static';

/*
  TODO: Does Link support 'title' attributes?
  Should I use them here, or should I use
  aria-label and/or aria-tooltip?
*/

export default () => (
  <React.Fragment>
    <h1>Contact</h1>
    <address>
      <Link to="mailto:labrysinthe@gmail.com">labrysinthe@gmail.com</Link>
    </address>

    {/* TODO: generate socials from data */}
    <ul id="socials">
      <li>
        <Link to="https://soundcloud.com/labrysinthe" title="SoundCloud">
          <span className="icon-soundcloud">SoundCloud</span>
        </Link>
      </li>
      <li>
        <Link to="https://www.facebook.com/labrysinthe/" title="Facebook">
          <span className="icon-facebook">Facebook</span>
        </Link>
      </li>
      <li>
        <Link to="https://twitter.com/labrysinthe" title="Twitter">
          <span className="icon-twitter">Twitter</span>
        </Link>
      </li>
      <li>
        <Link to="https://www.instagram.com/labrysinthe/" title="Instagram">
          <span className="icon-instagram">Instagram</span>
        </Link>
      </li>
    </ul>
  </React.Fragment>
);

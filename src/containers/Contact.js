import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';

const Ul = styled.ul`
  padding-left: 0;
`;

const Li = styled.li`
  list-style-type: none;
`;

export default () => (
  <React.Fragment>
    <h1>Contact</h1>
    <address>
      <Link to="mailto:labrysinthe@gmail.com">labrysinthe@gmail.com</Link>
    </address>

    {/* TODO: generate socials from data */}
    <Ul>
      <Li>
        <Link to="https://soundcloud.com/labrysinthe" title="SoundCloud">
          <span className="icon-soundcloud">SoundCloud</span>
        </Link>
      </Li>
      <Li>
        <Link to="https://www.facebook.com/labrysinthe/" title="Facebook">
          <span className="icon-facebook">Facebook</span>
        </Link>
      </Li>
      <Li>
        <Link to="https://twitter.com/labrysinthe" title="Twitter">
          <span className="icon-twitter">Twitter</span>
        </Link>
      </Li>
      <Li>
        <Link to="https://www.instagram.com/labrysinthe/" title="Instagram">
          <span className="icon-instagram">Instagram</span>
        </Link>
      </Li>
    </Ul>
  </React.Fragment>
);

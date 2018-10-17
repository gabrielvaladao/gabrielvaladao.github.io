import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';

const Ul = styled.ul`
  padding-left: 0;
`;

const Li = styled.li`
  list-style-type: none;
  display: inline-block;
  margin-left: 2em;
  &:first-child {
    margin-left: 0;
  }
`;

const Address = styled.address`
  display: inline;
  font-style: inherit;
`;

export default () => (
  <React.Fragment>
    <h1>Contact</h1>
    For booking and inquiries, email{' '}
    <Address>
      <Link to="mailto:labrysinthe@gmail.com">labrysinthe@gmail.com</Link>
    </Address>

    {/* TODO: generate socials from data */}
    <Ul>
      <Li>
        <Link to="https://www.beatport.com/artist/labrysinthe/640674" title="Beatport">
          <span className="icon-beatport">Beaport</span>
        </Link>
      </Li>
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

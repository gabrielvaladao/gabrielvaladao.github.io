import React from 'react';
import styled from 'styled-components';
//
import StyledLink from '../elements/StyledLink';
import H1 from '../elements/H1';

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
    <H1>Contact</H1>
    For booking and inquiries, email{' '}
    <Address>
      <StyledLink to="mailto:labrysinthe@gmail.com">labrysinthe@gmail.com</StyledLink>
    </Address>

    {/* TODO: generate socials from data */}
    <Ul>
      <Li>
        <StyledLink to="https://www.beatport.com/artist/labrysinthe/640674" title="Beatport">
          <span className="icon-beatport">Beaport</span>
        </StyledLink>
      </Li>
      <Li>
        <StyledLink to="https://soundcloud.com/labrysinthe" title="SoundCloud">
          <span className="icon-soundcloud">SoundCloud</span>
        </StyledLink>
      </Li>
      <Li>
        <StyledLink to="https://www.facebook.com/labrysinthe/" title="Facebook">
          <span className="icon-facebook">Facebook</span>
        </StyledLink>
      </Li>
      <Li>
        <StyledLink to="https://twitter.com/labrysinthe" title="Twitter">
          <span className="icon-twitter">Twitter</span>
        </StyledLink>
      </Li>
      <Li>
        <StyledLink to="https://www.instagram.com/labrysinthe/" title="Instagram">
          <span className="icon-instagram">Instagram</span>
        </StyledLink>
      </Li>
    </Ul>
  </React.Fragment>
);

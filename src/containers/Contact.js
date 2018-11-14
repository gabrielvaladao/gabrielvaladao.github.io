import React from 'react';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import P from '../elements/P';
import StyledLink from '../elements/StyledLink';

const Socials = styled.ul`
  padding-left: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: middle;
`;

const Li = styled.li`
  list-style-type: none;
  text-align: center;
  display: inline-block;
`;

const Icon = styled(StyledLink)`
  font-size: ${props => props.theme.type.h2.fontSize};
  text-align: center;
  border-radius: 50%;
  border-bottom: none;
  padding: ${props => props.theme.space.half};
  opacity: 0.9;

  &:hover {
    background: #6fdfdf;
    color: #fff;
  }

  &:active {
    background: #1f9f9f;
    color: #fff;
  }
`;

const Address = styled.address`
  display: inline;
  font-style: inherit;
`;

export default () => (
  <React.Fragment>
    <H1>Contact</H1>
    <P>
      For booking and inquiries, email{' '}
      <Address>
        <StyledLink to="mailto:labrysinthe@gmail.com">labrysinthe@gmail.com</StyledLink>
      </Address>
    </P>

    {/* TODO: generate socials from data */}
    <Socials>
      <Li>
        <Icon
          to="https://www.beatport.com/artist/labrysinthe/640674"
          title="Beatport"
          className="icon-beatport"
          role="img"
          aria-label="Beaport"
        />
      </Li>
      <Li>
        <Icon
          to="https://soundcloud.com/labrysinthe"
          title="SoundCloud"
          className="icon-soundcloud"
          role="img"
          aria-label="SoundCloud"
        />
      </Li>
      <Li>
        <Icon
          to="https://open.spotify.com/artist/4YkYhnarkLP5K1l55l5Y3e"
          title="Spotify"
          className="icon-spotify"
          role="img"
          aria-label="Spotify"
        />
      </Li>
      <Li>
        <Icon
          to="https://www.facebook.com/labrysinthe/"
          title="Facebook"
          className="icon-facebook"
          role="img"
          aria-label="Facebook"
        />
      </Li>
      <Li>
        <Icon
          to="https://twitter.com/labrysinthe"
          title="Twitter"
          className="icon-twitter"
          role="img"
          aria-label="Twitter"
        />
      </Li>
      <Li>
        <Icon
          to="https://www.instagram.com/labrysinthe/"
          title="Instagram"
          className="icon-instagram"
          role="img"
          aria-label="Instagram"
        />
      </Li>
    </Socials>
  </React.Fragment>
);

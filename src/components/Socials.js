import React from 'react';
import styled from 'styled-components';
//
import StyledLink from '../elements/StyledLink';

const Wrapper = styled.ul`
  padding: 0 0 ${props => props.theme.space.two} 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: middle;
`;

const Li = styled.li`
  list-style-type: none;
  text-align: center;
  display: inline-block;
  margin-right: 0.5ch;
`;

const Icon = styled(StyledLink)`
  font-size: ${props => props.theme.icon.fontSize};
  text-align: center;
  border-radius: 50%;
  border-bottom: none;
  padding: ${props => props.theme.space.half};
  opacity: 0.9;

  &:hover {
    background: ${props => props.theme.color.primaryOverlay};
    color: white;
    border-bottom: none;
  }

  &:active {
    background: ${props => props.theme.color.primaryOverlay};
    color: white;
  }
`;

/* TODO: generate socials from data */
/* TODO: each Social to be its own component */
export default () => (
  <Wrapper>
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
  </Wrapper>
);

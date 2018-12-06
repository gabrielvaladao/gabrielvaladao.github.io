import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
//

const Wrapper = styled.ul`
  padding: 0 0 ${({ theme }) => theme.space.three} 0;
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

const Icon = styled(Link)`
  font-size: ${({ theme }) => theme.icon.fontSize};
  text-align: center;
  border-radius: 50%;
  border-bottom: none;
  padding: ${({ theme }) => theme.space.half};
  opacity: 0.9;
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.color.primaryOverlay};
    color: white;
    border-bottom: none;
  }

  &:active {
    background: ${({ theme }) => theme.color.primaryDark};
    color: white;
  }
`;

/* TODO: generate socials from data */
/* TODO: each Social to be its own component */
const Socials = () => (
  <Wrapper>
    <Li key="beatport">
      <Icon
        to="https://www.beatport.com/artist/labrysinthe/640674"
        title="Beatport"
        className="icon-beatport"
        role="img"
        aria-label="Beaport"
      />
    </Li>
    <Li key="soundcloud">
      <Icon
        to="https://soundcloud.com/labrysinthe"
        title="SoundCloud"
        className="icon-soundcloud"
        role="img"
        aria-label="SoundCloud"
      />
    </Li>
    <Li key="spotify">
      <Icon
        to="https://open.spotify.com/artist/4YkYhnarkLP5K1l55l5Y3e"
        title="Spotify"
        className="icon-spotify"
        role="img"
        aria-label="Spotify"
      />
    </Li>
    <Li key="facebook">
      <Icon
        to="https://www.facebook.com/labrysinthe/"
        title="Facebook"
        className="icon-facebook"
        role="img"
        aria-label="Facebook"
      />
    </Li>
    <Li key="twitter">
      <Icon
        to="https://twitter.com/labrysinthe"
        title="Twitter"
        className="icon-twitter"
        role="img"
        aria-label="Twitter"
      />
    </Li>
    {/* <Li key="instagram">
      <Icon
        to="https://www.instagram.com/labrysinthe/"
        title="Instagram"
        className="icon-instagram"
        role="img"
        aria-label="Instagram"
      />
    </Li> */}
  </Wrapper>
);

export default Socials;
import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
//
import { SocialsStyles, LiStyles, IconStyles } from './Socials-styles';

const Wrapper = styled.ul`
  ${SocialsStyles}
`;

const Li = styled.li`
  ${LiStyles}
`;

const Icon = styled(Link)`
  ${IconStyles}
`;

/* TODO: generate socials from data and include PropTypes */
const Socials = () => (
  <Wrapper>
    {false && <Li key="beatport">
      <Icon
        to="https://www.beatport.com/artist/labrysinthe/640674"
        title="Beatport"
        className="icon-beatport"
        role="img"
        aria-label="Beaport"
      />
    </Li>}
    {false && <Li key="soundcloud">
      <Icon
        to="https://soundcloud.com/labrysinthe"
        title="SoundCloud"
        className="icon-soundcloud"
        role="img"
        aria-label="SoundCloud"
      />
    </Li>}
    {false && <Li key="spotify">
      <Icon
        to="https://open.spotify.com/artist/4YkYhnarkLP5K1l55l5Y3e"
        title="Spotify"
        className="icon-spotify"
        role="img"
        aria-label="Spotify"
      />
    </Li>}
    <Li key="facebook">
      <Icon
        to="https://www.facebook.com/gabriel.valadao.10"
        title="Facebook"
        className="icon-facebook"
        role="img"
        aria-label="Facebook"
      />
    </Li>
    {false && <Li key="twitter">
      <Icon
        to="https://twitter.com/labrysinthe"
        title="Twitter"
        className="icon-twitter"
        role="img"
        aria-label="Twitter"
      />
    </Li>}
    <Li key="instagram">
      <Icon
        to="https://www.instagram.com/gvaladao1/"
        title="Instagram"
        className="icon-instagram"
        role="img"
        aria-label="Instagram"
      />
    </Li>
  </Wrapper>
);

export default Socials;

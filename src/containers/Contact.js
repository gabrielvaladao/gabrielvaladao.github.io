import React from 'react';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import P from '../elements/P';
import StyledLink from '../elements/StyledLink';

const Socials = styled.ul`
  padding-left: 0;
  border: 1px solid crimson;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Li = styled.li`
  list-style-type: none;
  display: inline-block;
`;

/**
 * TODO: Can we remove this comment or are we using it?
 * min-width sets the max number of icons per row
 */
const Icon = styled(StyledLink)`
  font-size: ${props => props.theme.type.h2.fontSize};
  height: ${props => props.theme.icon.size};
  width: ${props => props.theme.icon.size};
  text-align: center;
  border-radius: 48%;
  border-bottom: none;
  padding: ${props => props.theme.space.half};
  opacity: 0.9;

  &:hover {
    background: #6fdfdf;
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
    <P>For booking and inquiries, email{' '}
      <Address>
        <StyledLink to="mailto:labrysinthe@gmail.com">labrysinthe@gmail.com</StyledLink>
      </Address>
    </P>

    {/* TODO: generate socials from data */}
    <Socials>
      <Li>
        <Icon to="https://www.beatport.com/artist/labrysinthe/640674" title="Beatport">
          <span className="icon-beatport" role="img" aria-label="Beaport" />
        </Icon>
      </Li>
      <Li>
        <Icon to="https://soundcloud.com/labrysinthe" title="SoundCloud">
          <span className="icon-soundcloud" role="img" aria-label="SoundCloud" />
        </Icon>
      </Li>
      <Li>
        <Icon to="https://open.spotify.com/artist/4YkYhnarkLP5K1l55l5Y3e" title="Spotify">
          <span className="icon-spotify" role="img" aria-label="Spotify" />
        </Icon>
      </Li>
      <Li>
        <Icon to="https://www.facebook.com/labrysinthe/" title="Facebook">
          <span className="icon-facebook" role="img" aria-label="Facebook" />
        </Icon>
      </Li>
      <Li>
        <Icon to="https://twitter.com/labrysinthe" title="Twitter">
          <span className="icon-twitter" role="img" aria-label="Twitter" />
        </Icon>
      </Li>
      <Li>
        <Icon to="https://www.instagram.com/labrysinthe/" title="Instagram">
          <span className="icon-instagram" role="img" aria-label="Instagram" />
        </Icon>
      </Li>
    </Socials>
  </React.Fragment>
);

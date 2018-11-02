import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
//
import Track from '../components/Track';
import StyledLink from '../elements/StyledLink';
import H1 from '../elements/H1';

const Ul = styled.ul`
  padding-left: 0;
`;

const Li = styled.li`
  list-style-type: none;
`;

export default withRouteData(() => (
  <div>
    <H1>Music</H1>
    <p>Select downloads are available on <StyledLink to="https://www.beatport.com/artist/labrysinthe/640674/tracks">Labrysinthe's Beatport</StyledLink></p>
    <Ul>
      <Li key="fire-loves-sugar-teaser">
        <Track
          title="Fire Loves Sugar (Teaser)"
          soundCloudEmbed={[
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/489549831&color=%235f1f5f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
          ]}
        />
      </Li>
      <Li key="shake-the-dust-teaser">
        <Track
          title="Shake the Dust (Teaser)"
          soundCloudEmbed={[
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/368663576&color=%2308000f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
          ]}
        />
      </Li>
      <Li key="delicious-monster-ep-previews">
        <Track
          title="Delicious Monster EP - Previews"
          soundCloudEmbed={[
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/343832514&color=%23ef1f4f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
          ]}
          cta={{
            text: 'Download on Beatport',
            url: 'https://www.beatport.com/release/delicious-monster/2106224',
          }}
        />
      </Li>
      <Li key="far-and-away">
        <Track
          title="Far and Away"
          soundCloudEmbed={[
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/342470222&color=%231f9f9f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
          ]}
        />
      </Li>
    </Ul>
  </div>
));

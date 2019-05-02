import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData, Link } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../common/H1';
import TextLink from '../common/TextLink';
import Track from '../components/Track';
import { UlStyles, LiStyles } from './Demos-styles';
import AWSSoundPlayer from '../components/AWSSoundPlayer';

const Ul = styled.ul`
  ${UlStyles}
`;

const Li = styled.li`
  ${LiStyles}
`;

/** Demos */
import sharkAudio from '../audios/demos/shark.mp3';
import mstAudio from '../audios/demos/mst.mp3';

/** Local Production */
import bless1Audio from '../audios/local/bless-1.mp3';
import bless2Audio from '../audios/local/bless-2.mp3';

/** Local Production */
import placeAudio from '../audios/ntm/place.mp3';

/* Known bug with SoundCloud embeds: unique key prop error */

/**
 * TODO: Create iframe Component from track ID.
 * For user-friendliness, let client paste in a full embed code.
 * App should extract the track ID and apply brand color to play button.
 */

/**
 * TODO: iframe title attribs have been added by hand to satisfy eslint a11y error. generate these.
 */
const Demos = ({ id }) => (
  <section id={id}>
    <H1>Demos</H1>
    This is some demos that I wrote and recorded myself:
    <AWSSoundPlayer streamUrl={sharkAudio} trackTitle='Gabriel Valadão' preloadType="auto" />
    <AWSSoundPlayer streamUrl={mstAudio} trackTitle='Gabriel Valadão' preloadType="auto" />
    <H1>Local Production</H1>
    This is the first local artist that I produced, called Erick Bless. I made the instrumental,
    production, mix and master. He didn't release his EP yet but is already done, here's some material:
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/w6hJNgZX_tM?showinfo=0&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <AWSSoundPlayer streamUrl={bless1Audio} trackTitle='Erick Bless' preloadType="auto" />
    <AWSSoundPlayer streamUrl={bless2Audio} trackTitle='Erick Bless' preloadType="auto" />
    <H1>NTM</H1>
    I got first place at the The Story So Far Nailthemix secondary pool.
    <H1>NTM portfolio builder</H1>
    This is a song that it's already out. URM academy let us do our own mix to put on our portfolio:
    <AWSSoundPlayer streamUrl={placeAudio} trackTitle='' preloadType="auto" />
    <p>Producer: Vasco Ramos</p>
    <p>Engineer: Tiago Canadas</p>
    <p>Original Mix and Mastering: Marco Cipriano</p>
    {false && <p>
      Select downloads are available on{' '}
      <TextLink>
        <Link to="https://www.beatport.com/artist/labrysinthe/640674/tracks">Beatport</Link>
      </TextLink>
    </p>}
    {false &&
      <Ul>
        <Li key="live-dj-set-pms-the-l-night-party-kinzig9">
          <Track
            title="Live/DJ set @ PMS - The L-Night party / Kinzig9"
            soundCloudEmbed={[
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/546185124&color=%236fdfdf&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                title="Live/DJ set @ PMS - The L-Night party / Kinzig9"
              />
            ]}
          />
        </Li>
        <Li key="fire-loves-sugar-teaser">
          <Track
            title="Fire Loves Sugar (Teaser)"
            soundCloudEmbed={[
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/489549831&color=%236fdfdf&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                title="Fire Loves Sugar (Teaser)"
              />
            ]}
            cta={{
              text: 'Download the full EP on Beatport',
              url: 'https://www.beatport.com/release/fire-loves-sugar/2510399'
            }}
          />
        </Li>
        <Li key="shake-the-dust-teaser">
          <Track
            title="Shake the Dust (Teaser)"
            soundCloudEmbed={[
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/368663576&color=%236fdfdf&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                title="Shake the Dust (Teaser)"
              />
            ]}
            cta={{
              text: 'Download the full EP on Beatport',
              url: 'https://www.beatport.com/release/fire-loves-sugar/2510399'
            }}
          />
        </Li>
        <Li key="delicious-monster-ep-previews">
          <Track
            title="Delicious Monster EP - Previews"
            soundCloudEmbed={[
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/343832514&color=%236fdfdf&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                title="Delicious Monster EP - Previews"
              />
            ]}
            cta={{
              text: 'Download the full EP on Beatport',
              url: 'https://www.beatport.com/release/delicious-monster/2106224'
            }}
          />
        </Li>
        <Li key="far-and-away">
          <Track
            title="Far and Away"
            soundCloudEmbed={[
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/342470222&color=%236fdfdf&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                title="Far and Away"
              />
            ]}
          />
        </Li>
      </Ul>}
  </section>
);

Demos.propTypes = {
  id: PropTypes.string
};

export default withRouteData(Demos);

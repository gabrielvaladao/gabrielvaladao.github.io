import React from 'react';
import { withRouteData, Link } from 'react-static';

/*
  TODO: I want to use the releaseDate info
  to sort the tracks, but not display it.
  Pass it to parent.
*/


export default () => (
  /*
    TODO: I want these attributes to be applied
    to the <li> element where they live (see Music.js)
  */
  <article aria-labelledby="track-title">
    <h3 id="track-title">Delicious Monster EP - Previews</h3>
    <iframe title="delicious-monster-ep-previews" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/343832514&color=%23ffaa88&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
    <Link className="cta" to="https://www.beatport.com/release/delicious-monster/2106224" aria-labelledby="track-title">Download on Beatport</Link>
  </article>
);

// TODO: remove or adapt. The following code shows placeholder data
/*
export default withRouteData(({ track }) => (
  <div>
    <Link to="/music/">{'<'} Back</Link>
    <br />
    <h3>{track.title}</h3>

    <p>{track.body}</p>

  </div>
));
*/

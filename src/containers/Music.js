import React from 'react';
import { withRouteData, Link } from 'react-static';
import Track from '../components/Track';

export default withRouteData(() => (
  <div>
    <h1>Music</h1>
    <p>High quality downloads are available on <Link to="https://www.beatport.com/artist/labrysinthe/640674/tracks">Labrysinthe's Beatport</Link></p>
    <ul>
      <li>
        <Track
          title="Fire Loves Sugar (Teaser)"
          soundCloudEmbed={[
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/489549831&color=%2388e8b8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
          ]}
        />
      </li>
      <li>
        <Track
          title="Shake the Dust (Teaser)"
          soundCloudEmbed={[
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/368663576&color=%23663399&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
          ]}
        />
      </li>
      <li>
        <Track
          title="Delicious Monster EP - Previews"
          soundCloudEmbed={[
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/343832514&color=%2388e8b8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
          ]}
          ctaText="Download on Beatport"
          ctaUrl="https://www.beatport.com/release/delicious-monster/2106224"
        />
      </li>
      <li>
        <Track
          title="Far and Away"
          soundCloudEmbed={[
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/342470222&color=%23663399&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>,
          ]}
        />
      </li>
    </ul>
  </div>
));

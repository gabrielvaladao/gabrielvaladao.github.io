
import React from 'react';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';

export default withSoundCloudAudio(props => {
  const { trackTitle } = props;

  return (
    <div>
      <PlayButton {...props} />
      <h2>{trackTitle}</h2>
      <Timer {...props} />
    </div>
  );
});

import React from 'react';
import { Link } from 'react-static';

export default () => (
  <React.Fragment>
    <h1>Bio</h1>
    <p className="callout">
      Labrysinthe is voluntarily committed to the institution of psytrance and stands for better machines, brighter knowledge, bolder music, and the blissful ecstacies of the beat.
    </p>
    <div className="bodyText">
      <p>
        Labrysinthe is Natalia Lincoln, who took the scenic route to psytrance -- first through classical training, then joining gothic/apocalyptic folk band Unto Ashes (NYC) as premium purveyor of keyboards, vocals, and gloom.
      </p>
      <p>
        Natalia moved to Berlin in 2008 to taste the delightfully twisted freakquencies of electronic psychedelica, at which point Labrysinthe was born into this world that could neither spell her name nor name her spell.
      </p>
      <p>
        Since then, she-who-must-be-Labrysinthe studied at dBs Music Berlin and with Nica Iliuchina (now Reality Test). She is an original member of the <Link to="https://soundcloud.com/strength_in_numbers" aria-label="Listen to Strength in Numbers on SoundCloud" title="SoundCloud">Strength in Numbers</Link> beat collective in Berlin.
      </p>
    </div>
  </React.Fragment>
);

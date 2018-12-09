import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-static';
import styled from 'styled-components';
//
import StyledLinkText from '../elements/StyledLinkText';
import H1 from '../elements/H1';
//
const Large = styled.p`
  font-size: ${({ theme }) => theme.type.large.fontSize};
  margin-bottom: ${({ theme }) => theme.type.large.marginBottom};
`;

const P = styled.p`
  margin-bottom: ${({ theme }) => theme.space.one};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Bio = ({ id }) => (
  <section id={id}>
    <H1>Bio</H1>
    <Large>
      Labrysinthe is voluntarily committed to the institution of psytrance and stands for better
      machines, brighter knowledge, bolder music, and the blissful ecstasies of the beat.
    </Large>
    <P>
      Labrysinthe is Natalia Lincoln, who took the scenic route to psytrance -- first through
      classical training, then joining gothic/apocalyptic folk band Unto Ashes (NYC) as premium
      purveyor of keyboards, vocals, and gloom.
    </P>
    <P>
      Natalia moved to Berlin in 2008 to taste the delightfully twisted freakquencies of electronic
      psychedelica, at which point Labrysinthe was born into this world that could neither spell her
      name nor name her spell.
    </P>
    <P>
      Since then, she-who-must-be-Labrysinthe studied at dBs Music Berlin and with Nica Iliuchina
      (now Reality Test). She is an original member of the{' '}
      <StyledLinkText>
        <Link
          to="https://soundcloud.com/strength_in_numbers"
          aria-label="Listen to Strength in Numbers on SoundCloud"
          title="SoundCloud"
        >
          Strength in Numbers
        </Link>
      </StyledLinkText>{' '}
      beat collective in Berlin.
    </P>
  </section>
);

Bio.propTypes = {
  id: PropTypes.string
};

export default Bio;

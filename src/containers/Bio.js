import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData, Link } from 'react-static';
import styled from 'styled-components';
//
import TextLink from '../common/TextLink';
import H1 from '../common/H1';
import { LargeStyles, PStyles } from './Bio-styles';
//
const Large = styled.p`
  ${LargeStyles}
`;

const P = styled.p`
  ${PStyles}
`;

const Bio = ({ id }) => (
  <section id={id}>
    <H1>Bio</H1>
    <Large>
      My name is Gabriel Valadão Moura, i'm from Lagoa Santa, Minas Gerais, Brazil.
    </Large>
    <P>
      I'm 22 years old and i'm looking for a job in the audio area.
    </P>
    <P>
      I started studying mix  one year and half ago through Urm Academy.
    </P>
    {false && <P>
      Since then, she-who-must-be-Labrysinthe studied at dBs Music Berlin. She is an original member
      of the{' '}
      <TextLink>
        <Link
          to="https://soundcloud.com/strength_in_numbers"
          aria-label="Listen to Strength in Numbers on SoundCloud"
          title="SoundCloud"
        >
          Strength in Numbers
        </Link>
      </TextLink>{' '}
      beat collective in Berlin.
    </P>}
  </section>
);

Bio.propTypes = {
  id: PropTypes.string
};

export default withRouteData(Bio);

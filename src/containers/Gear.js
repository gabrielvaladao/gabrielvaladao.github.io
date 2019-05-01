import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData } from 'react-static';
import styled from 'styled-components';

/** Styles */
import H1 from '../common/H1';
import { PStyles } from './Gear-styles';

const P = styled.p`
  ${PStyles}
`;

const Gear = ({ id }) => (
  <section id={id}>
    <H1>Gear</H1>
    <P>
      Focusrite Scarlett 2i2 audio interface
    </P>
    <P>
      Krk Rokit 5 monitors 
    </P>
    <P>
      Audio Technica Ath M50x Headphones 
    </P>
    <P>
      M-Audio Axiom 49 MIDI controller
    </P>
    <P>
      Mxl 990es condenser mic 
    </P>
    <P>
      Focusrite Scarlett 2i2 audio interface
    </P>
    <P>
      Focusrite Scarlett 2i2 audio interface
    </P>
    <H1>PC</H1>
    <P>
      Intel Core i5 2gen
    </P>
    <P>
      12gb ram 1333mhz
    </P>
    <P>
      Ssd Sansung evo 500gb
    </P>
    <P>
      Gtx680 2gb 
    </P>
    <H1>Plugins</H1>
    <P>
      Slate digital bundle 
    </P>
    <P>
      Weaves SSL
    </P>
    <P>
      FabFilter Pro q 
    </P>
    <H1>DAW</H1>
    <P>
      Cubase Elements
    </P>
  </section>
);

Gear.propTypes = {
  id: PropTypes.string
};

export default withRouteData(Gear);

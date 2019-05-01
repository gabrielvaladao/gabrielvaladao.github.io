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

/**  Gear :
-Focusrite Scarlett 2i2 audio interface
-Krk Rokit 5 monitors 
-Audio Technica Ath M50x Headphones 
-M-Audio Axiom 49 MIDI controller
-Mxl 990es condenser mic 

 Pc:
-Intel Core i5 2gen
 12gb ram 1333mhz 
 Ssd Sansung evo 500gb
 Gtx680 2gb 
 Instruments :
-Esp Ltd h-1001 Deluxe W emg 81 85
-Tagima Stratocaster
-Di Giorgio Nylon Acoustic guitar 
-ukulele vogga 

Plugins :
-Slate digital bundle 
-Weaves SSL
-FabFilter Pro q 
DAW:
Cubase Elements  */

const Bio = ({ id }) => (
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

Bio.propTypes = {
  id: PropTypes.string
};

export default withRouteData(Bio);

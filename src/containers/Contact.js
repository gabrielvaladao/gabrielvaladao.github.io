import React from 'react';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import StyledLink from '../elements/StyledLink';
//
const P = styled.p`
  text-align: center;
`;

const Address = styled.address`
  display: inline;
  font-style: inherit;
`;

export default () => (
  <div id="contact">
    <H1>Contact</H1>
    <P>
      For booking and inquiries, email{' '}
      <Address>
        <StyledLink to="mailto:labrysinthe@gmail.com">labrysinthe@gmail.com</StyledLink>
      </Address>
    </P>
  </div>
);

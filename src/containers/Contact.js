import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import StyledLinkText from '../elements/StyledLinkText';
//
const Info = styled.div`
  text-align: center;
`;

const Address = styled.address`
  display: inline;
  font-style: inherit;
`;

export default ({ id, ...props }) => (
  <section id={id}>
    <H1>Contact</H1>
    <Info>
      For booking and inquiries, email{' '}
      <Address>
        <StyledLinkText>
          <Link to="mailto:labrysinthe@gmail.com">labrysinthe@gmail.com</Link>
        </StyledLinkText>
      </Address>
    </Info>
  </section>
);

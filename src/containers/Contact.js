import React from 'react';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import P from '../elements/P';
import StyledLink from '../elements/StyledLink';

const CenteredP = styled(P)`
  text-align: center;
`;

const Address = styled.address`
  display: inline;
  font-style: inherit;
`;

export default () => (
  <React.Fragment>
    <H1>Contact</H1>
    <CenteredP>
      For booking and inquiries, email{' '}
      <Address>
        <StyledLink to="mailto:labrysinthe@gmail.com">labrysinthe@gmail.com</StyledLink>
      </Address>
    </CenteredP>
  </React.Fragment>
);

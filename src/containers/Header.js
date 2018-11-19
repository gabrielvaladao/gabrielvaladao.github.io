import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import Menu from '../components/Menu';

const Wrapper = styled.header`
  background-color: #08000f;
  color: #fefdff;
`;

const SiteTitle = styled(H1)`
  font-family: 'raincoatregular', sans-serif;
  letter-spacing: 0.12ch;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  font-size: ${props => props.theme.type.h3.fontSize};

  @media (min-width: 576px) {
    font-size: ${props => props.theme.type.h2.fontSize};
  }

  @media (min-width: 768px) {
    font-size: ${props => props.theme.type.h1.fontSize};
  }
`;

export default () => (
  <Wrapper id="home">
    <SiteTitle>Labrysinthe</SiteTitle>
    <nav>
      <Menu />
    </nav>
  </Wrapper>
);

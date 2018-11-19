import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import Menu from '../components/Menu';
import Button from '../elements/Button';

const SiteTitle = styled(H1)`
  font-family: 'raincoatregular', sans-serif;
  letter-spacing: 0.12ch;
  text-transform: uppercase;
  text-align: center;
  font-size: ${props => props.theme.type.h2.fontSize};

  /* @media (min-width: 576px) {
    font-size: ${props => props.theme.type.h2.fontSize};
  }
 */
  @media (min-width: 768px) {
    font-size: ${props => props.theme.type.h1.fontSize};
  }
`;

const Wrapper = styled.header`
  background-color: #08000f;
  color: #fefdff;
`;

const Ul = styled.ul`
  padding-left: 0;
`;

const Li = styled.li`
  font-size: 0.9em;
  padding-right: 1rem;
  text-align: right;
  display: inline;
`;

export default () => (
  <Wrapper id="home">
    <nav>
      <Ul>
        <Li>
          <Button>Menu</Button>
        </Li>
        <Li>
          <Button>Newsletter</Button>
        </Li>
      </Ul>
    </nav>
    <SiteTitle>Labrysinthe</SiteTitle>
  </Wrapper>
);

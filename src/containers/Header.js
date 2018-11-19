import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import Menu from '../components/Menu';
import Button from '../elements/Button';

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
  </Wrapper>
);

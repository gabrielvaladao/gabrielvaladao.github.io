import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';
//
import Menu from '../components/Menu';
import Button from '../elements/Button';
//
const Wrapper = styled.header`
  top: 0;
`;

const Nav = styled.nav`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: ${props => props.theme.space.one} 0 0 0;
`;

const Ul = styled.ul`
  padding-left: 0;
`;

const Li = styled.li`
  font-size: 0.9em;
  text-align: right;
  display: inline;
  padding-right: 0.5ch;

  &:last-child {
    padding-right: 0;
  }
`;

const ResponsiveLi = styled(Li)`
  display: none;

  @media (min-width: 576px) {
    display: inline;
  }
`;

export default () => (
  <Wrapper id="home">
    <Nav>
      <Ul>
        <Li>
          <Button>Menu</Button>
        </Li>
        <ResponsiveLi>
          <Button>Newsletter</Button>
        </ResponsiveLi>
      </Ul>
    </Nav>
  </Wrapper>
);

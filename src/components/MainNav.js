import React from 'react';
import { NavLink, Link } from 'react-static';
import styled from 'styled-components';
//
import Menu from './Menu';
import {
  MainNavStyles,
  MiniMenuStyles,
  LiStyles,
  ResponsiveLiStyles,
  DrawerStyles,
  HeaderMenuStyles,
  OpenLinkStyles,
  CloseLinkStyles,
  BackdropStyles
} from './MainNav-styles';
//
const Wrapper = styled.nav`
  ${MainNavStyles}
`;

const MiniMenu = styled.ol`
  ${MiniMenuStyles}
`;

const Li = styled.li`
  ${LiStyles}
`;

const ResponsiveLi = styled(Li)`
  ${ResponsiveLiStyles}
`;

const Drawer = styled.div`
  ${DrawerStyles}
`;

const HeaderMenu = styled(Menu)`
  ${HeaderMenuStyles}
`;

const OpenLink = styled(Link)`
  ${OpenLinkStyles}
`;

const CloseLink = styled(Link)`
  ${CloseLinkStyles}
`;

const Backdrop = styled(Link)`
  ${BackdropStyles}
`;

/* TODO: add role aria-controls aria-expanded to Open Close and Drawer */
const MainNav = () => (
  <Wrapper>
    <MiniMenu id="mini-menu">
      {false && <ResponsiveLi key="newsletter">
        <NavLink to="#newsletter">Newsletter</NavLink>
      </ResponsiveLi>}
      <Li key="open">
        <OpenLink
          to="#menu"
          id="open"
          role="button"
          aria-controls="menu"
          aria-label="Open the main menu"
        >
          Menu
        </OpenLink>
      </Li>
    </MiniMenu>

    <Drawer id="menu" className="drawer">
      <CloseLink to="#open" role="button" aria-controls="menu" aria-label="Close the main menu">
        <span role="img">&#215;</span>
      </CloseLink>
      <HeaderMenu />
    </Drawer>
    <Backdrop className="backdrop" to="#open" />
  </Wrapper>
);

export default MainNav;

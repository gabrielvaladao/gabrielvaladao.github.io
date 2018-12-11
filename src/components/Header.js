/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
import MainNav from '../components/MainNav';
import H1 from '../common/H1';
import { HeaderStyles, SiteTitleStyles } from './Header-styles';
//

const Wrapper = styled.header`
  ${HeaderStyles}
`;

const SiteTitle = styled(H1)`
  ${SiteTitleStyles}
`;

class Header extends Component {
  render() {
    const { scrolled } = this.props;
    return (
      <Wrapper scrolled={scrolled}>
        <SiteTitle scrolled={scrolled}>
          <a href="#home">Labrysinthe</a>
        </SiteTitle>
        <MainNav />
      </Wrapper>
    );
  }
}

Header.propTypes = {
  scrolled: PropTypes.bool
};

export default Header;

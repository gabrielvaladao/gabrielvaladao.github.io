/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import styled from 'styled-components';
//
import MainNav from '../components/MainNav';
import H1 from '../elements/H1';
//

/* Conditional styles change on scroll */

const borderColor = ({ scrolled, theme }) =>
  scrolled ? theme.color.overlayLight : theme.color.overlayDark;

const boxShadow = ({ scrolled }) => (scrolled ? '0 4px 8px rgba(0, 0, 0, 0.7)' : 'none');

const opacity = ({ scrolled }) => (scrolled ? 1 : 0);

const marginTop = ({ scrolled }) => (scrolled ? '0' : '-1em');

const Wrapper = styled.header`
  position: sticky;
  z-index: 900;
  top: 0;
  height: ${({ theme }) => theme.space.three};
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.overlayDark};
  border-bottom: 1px solid ${borderColor};
  box-shadow: ${boxShadow};
  transition: box-shadow 0.5s ease-in-out;
  padding: 0 ${({ theme }) => theme.space.one};
`;

const SiteTitle = styled(H1)`
  float: left;
  font-size: ${({ theme }) => theme.type.large.fontSize};
  font-family: 'raincoatregular', sans-serif;
  letter-spacing: 0.06ch;
  text-transform: uppercase;
  text-align: left;
  padding-top: 0;
  opacity: ${opacity};
  margin-top: ${marginTop};
  transition: opacity 0.5s ease-in-out, margin-top 0.4s ease-in-out;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper {...this.props}>
        <SiteTitle {...this.props}>
          <a href="#home">Labrysinthe</a>
        </SiteTitle>
        <MainNav />
      </Wrapper>
    );
  }
}

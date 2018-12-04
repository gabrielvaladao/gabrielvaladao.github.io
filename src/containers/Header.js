/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import styled from 'styled-components';
//
import MainNav from '../components/MainNav';
import H1 from '../elements/H1';
//

/* Conditional styles change on scroll */
const justifyContent = ({ scrolled }) => (scrolled ? 'space-between' : 'flex-end');

const borderColor = ({ scrolled, theme }) =>
  scrolled ? theme.color.overlayLight : theme.color.overlayDark;

const boxShadow = ({ scrolled }) => (scrolled ? '0 4px 8px rgba(0, 0, 0, 0.7)' : 'none');

const Wrapper = styled.header`
  position: sticky;
  z-index: 900;
  top: 0;
  height: ${({ theme }) => theme.space.three};
  display: flex;
  justify-content: ${justifyContent};
  background: ${({ theme }) => theme.color.overlayDark};
  border-bottom: 1px solid ${borderColor};
  box-shadow: ${boxShadow};
`;

const SiteTitle = styled(H1)`
  font-size: ${({ theme }) => theme.type.large.fontSize};
  font-family: 'raincoatregular', sans-serif;
  letter-spacing: 0.06ch;
  text-transform: uppercase;
  text-align: left;
  padding-top: 0;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default class Header extends Component {
  componentDidMount() {
    console.log('So far so good in the Header');
  }

  componentDidUpdate() {
    console.log('Is there anybody in the Header?');
  }

  render() {
    return (
      <Wrapper {...this.props}>
        {(() => {
          console.log(`scrollin'? ${this.props.scrolled}`);
        })()}
        {this.props.scrolled && (
          <SiteTitle>
            <a href="#home">Labrysinthe</a>
          </SiteTitle>
        )}
        <MainNav />
      </Wrapper>
    );
  }
}

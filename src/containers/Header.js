/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
//
import MainNav from '../components/MainNav';
import H1 from '../elements/H1';
import Waypoint from 'react-waypoint';
//

/* Conditional styles change on scroll */
const justifyContent = props => (props.scrolled ? 'space-between' : 'flex-end');

const borderColor = props =>
  props.scrolled ? props.theme.color.overlayLight : props.theme.color.overlayDark;

const boxShadow = props => (props.scrolled ? '0 4px 8px rgba(0, 0, 0, 0.7)' : 'none');

const Wrapper = styled.header`
  position: sticky;
  z-index: 900;
  top: 0;
  height: ${props => props.theme.space.three};
  display: flex;
  justify-content: ${justifyContent};
  background: ${props => props.theme.color.overlayDark};
  border-bottom: 1px solid ${borderColor};
  box-shadow: ${boxShadow};
`;

const SiteTitle = styled(H1)`
  font-size: ${props => props.theme.type.large.fontSize};
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

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: true };
  }

  render() {
    return (
      <Wrapper scrolled={this.state.scrolled} {...this.props}>
        {this.state.scrolled && (
          <SiteTitle>
            <a href="#home">Labrysinthe</a>
          </SiteTitle>
        )}
        <MainNav />
      </Wrapper>
    );
  }
}

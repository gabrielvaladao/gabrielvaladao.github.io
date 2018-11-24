import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import StyledLink from '../elements/StyledLink';
//
import smColorLogo from '../images/logo-color-550x620.png';
import mdColorLogo from '../images/logo-color-665x750.png';
import lgColorLogo from '../images/logo-color-1326x1496.png';
//
const Wrapper = styled.section`
  overflow: hidden;
`;

const SiteTitle = styled(H1)`
  padding-top: ${props => props.theme.space.eight};
  padding-bottom: ${props => props.theme.space.one};
  font-family: 'raincoatregular', sans-serif;
  letter-spacing: 0.06ch;
  text-transform: uppercase;
  text-align: center;
  font-size: ${props => props.theme.type.h2.fontSize};

  @media (min-width: 576px) {
    letter-spacing: 0.12ch;
    padding-top: ${props => props.theme.space.ten};
    padding-bottom: ${props => props.theme.space.two};
  }

  @media (min-width: 768px) {
    font-size: ${props => props.theme.type.h1.fontSize};
    letter-spacing: 0.12ch;
  }
`;

const Large = styled.p`
  font-size: ${props => props.theme.type.large.fontSize};
  text-align: center;
  margin-bottom: ${props => props.theme.type.large.marginBottom};
  position: relative;
  z-index: 1;
`;

const Logo = styled.img`
  margin-top: -${props => props.theme.space.three};
  margin-left: 50%;
  transform: translateX(-50%);
  display: block;
  padding-top: ${props => props.theme.space.one};
  position: relative;
  z-index: -99999;
`;

export default withSiteData(() => (
  <Wrapper>
    <SiteTitle>Labrysinthe</SiteTitle>

    <Large>
      New EP coming soon!
      <br />
      <strong>Fire Loves Sugar</strong>
      <br />
      <StyledLink to="./#music">Listen to the teaser</StyledLink>
    </Large>

    <picture>
      <source media="(min-width: 768px)" srcSet={lgColorLogo} />
      <source media="(min-width: 576px)" srcSet={mdColorLogo} />
      <Logo alt="" src={smColorLogo} />
    </picture>
  </Wrapper>
));

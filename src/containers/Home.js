import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import StyledLinkText from '../elements/StyledLinkText';
//
import smColorLogo from '../images/logo-color-550x620.png';
import mdColorLogo from '../images/logo-color-665x750.png';
import lgColorLogo from '../images/logo-color-1326x1496.png';
//
const Wrapper = styled.section`
  overflow: hidden;
`;

const SiteTitle = styled(H1)`
  padding-top: ${({ theme }) => theme.space.four};
  padding-bottom: ${({ theme }) => theme.space.one};
  font-family: 'raincoatregular', sans-serif;
  letter-spacing: 0.06ch;
  text-transform: uppercase;
  text-align: center;
  font-size: ${({ theme }) => theme.type.h2.fontSize};

  @media (min-width: 576px) {
    letter-spacing: 0.12ch;
    padding-bottom: ${({ theme }) => theme.space.two};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.type.h1.fontSize};
    letter-spacing: 0.12ch;
  }

  @media (min-width: 768px) {
    padding-top: ${({ theme }) => theme.space.six};
  }
`;

const Large = styled.p`
  font-size: ${({ theme }) => theme.type.large.fontSize};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.type.large.marginBottom};
  position: relative;
  z-index: 1;
`;

const Logo = styled.img`
  margin-top: -${({ theme }) => theme.space.three};
  margin-left: 50%;
  transform: translateX(-50%);
  min-width: 140%;
  display: block;
  padding-top: ${({ theme }) => theme.space.one};
  position: relative;
  z-index: -99999;

  @media (min-width: 992px) {
    min-width: 0;
  }
`;

export default withSiteData(props => (
  <Wrapper {...props}>
    <SiteTitle>Labrysinthe</SiteTitle>

    <Large>
      New EP coming soon!
      <br />
      <strong>Fire Loves Sugar</strong>
      <br />
      <StyledLinkText>
        <Link to="./#music">Listen to the teaser</Link>
      </StyledLinkText>
    </Large>

    <picture>
      <source media="(min-width: 768px)" srcSet={lgColorLogo} />
      <source media="(min-width: 576px)" srcSet={mdColorLogo} />
      <Logo alt="" src={smColorLogo} />
    </picture>
  </Wrapper>
));

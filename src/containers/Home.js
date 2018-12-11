import React from 'react';
import PropTypes from 'prop-types';
import { withSiteData, Link } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../common/H1';
import TextLink from '../common/TextLink';
import { HomeStyles, SiteTitleStyles, LargeStyles, LogoStyles } from './Home-styles';
//
import smColorLogo from '../images/logo-color-550x620.png';
import mdColorLogo from '../images/logo-color-665x750.png';
import lgColorLogo from '../images/logo-color-1326x1496.png';
//
const Wrapper = styled.section`
  ${HomeStyles}
`;

const SiteTitle = styled(H1)`
  ${SiteTitleStyles}
`;

const Large = styled.p`
  ${LargeStyles}
`;

const Logo = styled.img`
  ${LogoStyles}
`;

const Home = ({ id }) => (
  <Wrapper id={id}>
    <SiteTitle>Labrysinthe</SiteTitle>

    <Large>
      New EP coming soon!
      <br />
      <strong>Fire Loves Sugar</strong>
      <br />
      <TextLink>
        <Link to="./#music">Listen to the teaser</Link>
      </TextLink>
    </Large>

    <picture>
      <source media="(min-width: 768px)" srcSet={lgColorLogo} />
      <source media="(min-width: 576px)" srcSet={mdColorLogo} />
      <Logo alt="" src={smColorLogo} />
    </picture>
  </Wrapper>
);

Home.propTypes = {
  id: PropTypes.string
};

export default withSiteData(Home);

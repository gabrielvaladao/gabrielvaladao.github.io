import React from 'react';
import PropTypes from 'prop-types';
import { withSiteData, Link } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../common/H1';
import TextLink from '../common/TextLink';
import { HomeStyles, SiteTitleStyles, LargeStyles, LogoStyles, PlainLogoStyles } from './Home-styles';
//
import smColorLogo from '../images/logo-color-550x620.png';
import mdColorLogo from '../images/logo-color-665x750.png';
import lgColorLogo from '../images/logo-color-1326x1496.png';
import studioPhoto from '../images/studio.jpg';
import profilePhoto from '../images/profile.jpg';
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

const PlainLogo = styled.img`
  ${PlainLogoStyles}
`;

const Home = ({ id }) => (
  <Wrapper id={id}>
    <SiteTitle>Gabriel Valadão</SiteTitle>

    <Large>
      Mixing, 
      <br />
      <strong>mastering</strong>
      <br />
      <TextLink>
        <Link to="https://gabrielvaladao.github.io/">
          and recording/production
        </Link>
      </TextLink>
    </Large>

    <div className="parallax-2"></div>

    {false && <div className="losange">
      <div className="los1">
        <source media="(min-width: 768px)" srcSet={profilePhoto} />
        <source media="(min-width: 576px)" srcSet={profilePhoto} />
        <PlainLogo alt="" src={profilePhoto} />
      </div>
    </div>}

    {false && <picture>
      <source media="(min-width: 768px)" srcSet={profilePhoto} />
      <source media="(min-width: 576px)" srcSet={profilePhoto} />
      <Logo alt="" src={profilePhoto} />
    </picture>}
  </Wrapper>
);

Home.propTypes = {
  id: PropTypes.string
};

export default withSiteData(Home);

import React from 'react';
import { hot } from 'react-hot-loader';
//
import { Router } from 'react-static';
import Routes from 'react-static-routes';
//
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
//
import theme from './styles/Theme';
import './styles/app.css';
import './styles/social-icons.css';
//
import Header from './containers/Header';
import Footer from './containers/Footer';
//
import Home from './containers/Home';
import Shows from './containers/Shows';
import Music from './containers/Music';
import Bio from './containers/Bio';
import Contact from './containers/Contact';

/* eslint-disable-next-line */
injectGlobal`
  * { padding: 0; margin: 0; }
  ${styledNormalize}
  html {
    font-size: 20px;
    background-color: #08000f;
    color: #eeedef;

    width: 100vw;
    overflow: scroll;
    
    @media (min-width: 576px) {
      font-size: 25px;
    }
  }
`;

const BaseStyles = styled.div`
  font-family: ${props => props.theme.type.base.fontFamily};
  font-weight: ${props => props.theme.type.base.fontWeight};
  font-size: ${props => props.theme.type.base.fontSize};
  line-height: ${props => props.theme.type.base.lineHeight};
  letter-spacing: ${props => props.theme.type.base.letterSpacing};
`;

const StyledHeader = styled(Header)`
  padding: 0 4rem 0 4rem;
`;

const Main = styled.main`
  padding: 1.2rem 2rem 2rem 2rem;

  @media (min-width: 576px) {
    padding: 1.2rem 4rem 2rem 4rem;
  }
`;

const StyledFooter = styled(Footer)`
  padding: 0 4rem 0 4rem;
`;

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <BaseStyles>
        <StyledHeader />

        <Main className="content">
          <Home />
          <Shows />
          <Music />
          <Bio />
          <Contact />
        </Main>

        <StyledFooter />
      </BaseStyles>
    </ThemeProvider>
  </Router>
);

export default hot(module)(App);

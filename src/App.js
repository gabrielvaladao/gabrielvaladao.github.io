import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Router } from 'react-static';
// import Routes from 'react-static-routes';

/** Styles Dependencies */
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';

/** Styles */
import theme from './styles/Theme';
import './styles/app.css';
import './styles/social-icons.css';

/** Components */
import Scroller from './components/Scroller';
import Footer from './components/Footer';

/** Containers */
import Home from './containers/Home';
// import Shows from './containers/Shows';
import Music from './containers/Music';
import Bio from './containers/Bio';
import Gear from './containers/Gear';
import Contact from './containers/Contact';
import Newsletter from './containers/Newsletter';

/**
 * Global styles
 *
 * font-size: Must be set on html element to serve as basis for rem units.
 * background-color: Must be set on html element for full-bleed effect.
 * color: Must be set on same element as background-color to ensure contrast.
 *
 * Colors here should match those set in Theme.js
 * (for now these must be updated manually)
 */

/* eslint-disable-next-line */
injectGlobal`
  * { padding: 0; margin: 0; }
  ${styledNormalize}
  html {
    font-size: 20px;
    background-color: rgba(8, 0, 15, 1);
    color: rgb(238, 237, 239);
    
    @media (min-width: 576px) {
      font-size: 25px;
    }
  }

  body {
    margin-top: -1rem;
  }
`;

const BaseStyles = styled.div`
  font-family: ${({ theme }) => theme.type.primary.fontFamily};
  font-weight: ${({ theme }) => theme.type.primary.fontWeight};
  font-size: ${({ theme }) => theme.type.primary.fontSize};
  line-height: ${({ theme }) => theme.type.primary.lineHeight};
  letter-spacing: ${({ theme }) => theme.type.primary.letterSpacing};
`;

const PaddedDiv = styled.div`
  /* Small padding makes the ReCAPTCHA look better on tiny screens */
  padding: 0 1rem 2rem 1rem;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.space.golden};

  /* Undo above padding on bigger screens */
  @media (min-width: 380px) {
    padding: 0 2rem 2rem 2rem;
  }
`;

const StyledFooter = styled(Footer)`
  padding: ${({ theme }) => theme.space.one} 0 ${({ theme }) => theme.space.two};
`;

// Removed <Shows id="shows" /> from the PaddedDiv below.

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <BaseStyles>
            <Scroller /> {/* contains header */}
            <main>
              <Home id="home" />
              <PaddedDiv>
                <Music id="music" />
                <Bio id="bio" />
                <Gear id="gear" />
                {false && <Newsletter id="newsletter" />}
                <Contact id="contact" />
              </PaddedDiv>
            </main>
            <StyledFooter />
          </BaseStyles>
        </ThemeProvider>
      </Router>
    );
  }
}

export default hot(module)(App);

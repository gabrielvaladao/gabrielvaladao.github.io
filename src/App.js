import React from 'react';
import { hot } from 'react-hot-loader';
//
import { Router } from 'react-static';
import Routes from 'react-static-routes';
//
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
//
import Header from './containers/Header';
import Footer from './containers/Footer';
//
import theme from './styles/Theme';
import './styles/app.css';
import './styles/social-icons.css';
//

/* eslint-disable-next-line */
injectGlobal`
  * { padding: 0; margin: 0; }
  ${styledNormalize}
  html { font-size: 25px; }
`;

const BaseStyles = styled.div`
  font-family: ${props => props.theme.type.base.fontFamily};
  font-weight: ${props => props.theme.type.base.fontWeight};
  font-size: ${props => props.theme.type.base.fontSize};
  line-height: ${props => props.theme.type.base.lineHeight};
  letter-spacing: ${props => props.theme.type.base.letterSpacing};
`;

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <BaseStyles>

        <Header />

        <main className="content">
          <Routes />
        </main>

        <Footer />

      </BaseStyles>
    </ThemeProvider>
  </Router>
);

export default hot(module)(App);

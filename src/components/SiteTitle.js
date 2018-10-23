import React from 'react';
import styled, { injectGlobal } from 'styled-components';
//

injectGlobal`
  @font-face {
    font-family: 'raincoatregular';
    src: url('/fonts/typodermic_-_raincoat-regular-webfont.woff2') format('woff2'),
        url('/fonts/typodermic_-_raincoat-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

const SiteTitle = styled.h1`
  font-family: 'raincoatregular', sans-serif;
  letter-spacing: 0.12ch;
  text-transform: uppercase;
  display: inline-block;
  margin: 0;
`;

export default () => (
  <SiteTitle>Labrysinthe</SiteTitle>
);

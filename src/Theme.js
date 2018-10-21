/* Import Google Fonts */
(function importGoogleFonts() {
  if (typeof document !== 'undefined') {
    const gFontImport = document.createElement('style');

    gFontImport.innerHTML = "@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600|Lato:300,400,700');";

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(gFontImport);
  }
}());

/* Base typography */
/**
 * font-size for the html element is defined in App.js. This is the
 * basis for the global layout, since rem units are based on it.
 */
const fontFamily = '"Josefin Sans", sans-serif';
const fontWeight = 300; /* Light */
const lineHeight = 1.2; /* rem for global vertical rhythm */
const ratio1 = 1.618; /* Golden section based on modularscale.com */
const ratio2 = 1.2; /* Minor third based on modularscale.com */

export default () => (
  {
    type: {
      base: {
        fontFamily,
        fontWeight,
        fontSize: '1em',
        lineHeight: `${lineHeight}rem`,
      },
      calc: {
        h1: {
          fontSize: `${ratio1 * 3}em`,
        },
        h2: {
          fontSize: `${ratio1 * 2}em`,
          lineHeight: `${lineHeight * 2}rem`,
          marginTop: `${lineHeight * 2}rem`,
          marginBottom: `${lineHeight * 1}rem`,
        },
        h3: {
          fontSize: `${ratio1}em`,
        },
        h4: {
          fontSize: `${ratio1}em`, /* TODO */
        },
        h5: {
          fontSize: `${ratio1}em`, /* TODO */
        },
        h6: {
          fontSize: `${ratio1}em`, /* TODO */
        },
        callout: {
          fontSize: `${ratio2}em`,
        },
      },
    },
  }
);

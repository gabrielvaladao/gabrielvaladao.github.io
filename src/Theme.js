/* Base typography */

/* Import Google Fonts */
(function importGoogleFonts() {
  if (typeof document !== 'undefined') {
    const gFontImport = document.createElement('style');

    gFontImport.innerHTML = "@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600|Lato:300,400,700');";

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(gFontImport);
  }
}());

/**
 * font-size for the html element is defined in App.js.
 * This is the basis for rems and rhythm in the global layout.
 *
 * See end of file for some preset typography configs that
 * work well for body type in either Josefin Sans or Lato.
 */

const josefinSans = '"Josefin Sans", sans-serif';
const lato = 'Lato, sans-serif';

const light = 300;
const regular = 400;
const semiBold = 600; /* Josefin Sans only */
const bold = 700; /* Lato only */

const lineHeight = 1.35; /* rem for global vertical rhythm */
const letterSpacing = 0; /* ch */

const ratio1 = 1.618; /* Golden section based on modularscale.com */
const ratio2 = 1.2; /* Minor third based on modularscale.com */

export default () => (
  {
    type: {
      base: {
        fontFamily: lato,
        fontWeight: light,
        fontSize: '1em',
        lineHeight: `${lineHeight}rem`,
        letterSpacing: `${letterSpacing}ch`,
      },
      calc: {
        h1: {
          fontSize: `${ratio1 * 3}em`,
        },
        h2: {
          fontFamily: josefinSans,
          fontWeight: regular,
          fontSize: `${ratio1 * ratio2}em`,
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

/**
 * The following presets are suited to body text.
 * For now, the values must be applied manually, both
 * above in this file and in App.js where indicated.
 */

/**
 * Preset 1: Josefin Sans Light
 *
 * App.js > injectGlobal > html { font-size: 25px }
 * lineHeight = 1.2rem
 * letterSpacing = -0.04ch
 * base {
 *   fontFamily: josefinSans,
 *   fontWeight: light,
 *   ...
 * },
 */

/**
 * Preset 2: Lato Light
 *
 * App.js > injectGlobal > html { font-size: 24px }
 * lineHeight = 1.35rem
 * letterSpacing = 0
 * base {
 *   fontFamily: lato,
 *   fontWeight: light,
 *   ...
 * },
 */

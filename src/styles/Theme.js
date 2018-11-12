/* Base typography */

/* Import Google Fonts */
(function importGoogleFonts() {
  if (typeof document !== 'undefined') {
    const gFontImport = document.createElement('style');

    gFontImport.innerHTML = `
      @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600|Lato:300,400,700');
    `;

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

const lineHeight = 1.2; /* rem for global vertical rhythm */
const letterSpacing = -0.04; /* ch */

const ratio1 = 1.618; /* Golden section based on modularscale.com */
const ratio2 = 1.2; /* Minor third based on modularscale.com */

export default () => (
  {
    type: {
      base: {
        fontFamily: josefinSans,
        fontWeight: light,
        fontSize: '1em',
        lineHeight: `${lineHeight}rem`,
        letterSpacing: `${letterSpacing}ch`,
      },
      h1: {
        fontFamily: josefinSans,
        fontSize: `${ratio1 * 2}em`,
      },
      h2: {
        fontFamily: josefinSans,
        fontWeight: regular,
        fontSize: `${ratio1 * ratio2}em`,
        lineHeight: `${lineHeight * 2}rem`,
        marginBottom: `${lineHeight}rem`,
      },
      h3: {
        fontFamily: josefinSans,
        fontWeight: regular, /* bold? */
        fontSize: `${ratio2}em`,
        marginTop: 0,
        marginBottom: `${lineHeight}rem`,
      },
      h4: {
        fontFamily: lato,
        fontWeight: bold,
        fontSize: `${ratio2}em`,
        lineHeight: `${lineHeight}rem`,
        marginBottom: `${lineHeight / 4}rem`,
      },
      h5: {
        fontSize: `${ratio2}em`, /* TODO */
      },
      h6: {
        fontSize: `${ratio2}em`, /* TODO */
      },
      strong: {
        fontWeight: semiBold, bold,
      },
      large: {
        fontSize: `${ratio2}em`,
        marginTop: `${lineHeight * 2}rem`,
        marginBottom: `${lineHeight}rem`,
      },
      small: {
        fontSize: `${(1 / ratio2)}em`,
        marginTop: 0,
        marginBottom: `${lineHeight}rem`,
      },
      smaller: {
        fontSize: `${(1 / ratio1)}em`,
        marginTop: 0,
        marginBottom: `${lineHeight}rem`,
      },
      compact: {
        fontFamily: lato,
        fontWeight: regular,
        lineHeight: `${lineHeight / ratio2}rem`,
      },
    },
    space: {
      quarter: `${lineHeight / 4}rem`,
      half: `${lineHeight / 2}rem`,
      one: `${lineHeight}rem`,
      two: `${lineHeight * 2}rem`,
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
 * App.js > injectGlobal > html { font-size: 22px }
 * lineHeight = 1.35rem
 * letterSpacing = 0
 * base {
 *   fontFamily: lato,
 *   fontWeight: light,
 *   ...
 * },
 */

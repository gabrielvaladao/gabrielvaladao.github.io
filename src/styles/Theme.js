/* Base typography */

/* Import Google Fonts */
(function importGoogleFonts() {
  if (typeof document !== 'undefined') {
    const gFontImport = document.createElement('style');

    gFontImport.innerHTML = `
      @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600|Montserrat:300,400,600,700');
    `;

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(gFontImport);
  }
})();

/**
 * font-size for the html element is defined in App.js.
 * This is the basis for rems and rhythm in the global layout.
 *
 * See end of file for some preset typography configs that
 * work well for body type in either Josefin Sans or Montserrat.
 */

const primary = '"Josefin Sans", sans-serif';
const secondary = 'Montserrat, sans-serif';

const light = 300;
const regular = 400;
const semiBold = 600;
const bold = 700; /* not available for Josefin Sans */

const lineHeight = 1.2; /* rem for global vertical rhythm */
const letterSpacing = -0.04; /* ch */

const ratio1 = 1.618; /* Golden section based on modularscale.com */
const ratio2 = 1.2; /* Minor third based on modularscale.com */

export default () => ({
  /* TODO: color variations should be calculated, not constant */
  border: {
    radius: {
      small: `3px`
    },
    size: {
      thin: `1px`,
      base: `2px`
    }
  },
  color: {
    brandBlack: `rgba(8, 0, 15, 1)`,
    brandWhite: `rgba(238, 237, 239, 1)`,
    overlayDark: `rgba(8, 0, 15, 0.7)`,
    overlayMedium: `rgba(255, 255, 255, 0.04)`,
    overlayLight: `rgba(255, 255, 255, 0.15)`,
    overlayLighter: `rgba(255, 255, 255, 0.7)`,
    primary: `rgba(111, 223, 223, 1)`,
    primaryDark: `rgba(31, 159, 159, 1)`,
    primaryLight: `rgba()`,
    error: `crimson`,
    white: `rgba(255,255,255,1)`,
    black: `rgba(0,0,0,1)`
  },
  icon: {
    fontSize: `${ratio1}em`
  },
  space: {
    quarter: `${lineHeight / 4}rem`,
    half: `${lineHeight / 2}rem`,
    one: `${lineHeight}rem`,
    two: `${lineHeight * 2}rem`,
    three: `${lineHeight * 3}rem`,
    eight: `${lineHeight * 8}rem`,
    ten: `${lineHeight * 10}rem`
  },
  type: {
    primary: {
      fontFamily: primary,
      fontWeight: light,
      fontSize: '1em',
      lineHeight: `${lineHeight}rem`,
      letterSpacing: `${letterSpacing}ch`
    },
    secondary: {
      fontFamily: secondary,
      fontWeight: regular,
      lineHeight: `${ratio1 / lineHeight}rem`
    },
    h1: {
      fontFamily: primary,
      fontSize: `${ratio1 * 2}em`
    },
    h2: {
      fontFamily: primary,
      fontWeight: regular,
      fontSize: `${ratio1 * ratio2}em`,
      lineHeight: `${lineHeight * 2}rem`,
      marginTop: `${lineHeight}rem`,
      marginBottom: `${lineHeight}rem`
    },
    h3: {
      fontFamily: primary,
      fontWeight: regular,
      fontSize: `${ratio2}em`,
      marginTop: `${lineHeight / 4}rem`,
      marginBottom: `${lineHeight / 4}rem`
    },
    h4: {
      fontFamily: secondary,
      fontWeight: semiBold,
      fontSize: `${ratio2}em`,
      lineHeight: `${lineHeight}rem`,
      marginTop: `${lineHeight / 4}rem`,
      marginBottom: `${lineHeight / 4}rem`
    },
    large: {
      fontSize: `${ratio2}em`,
      marginTop: `${lineHeight}rem`,
      marginBottom: `${lineHeight}rem`
    },
    small: {
      fontSize: `${1 / ratio2}em`,
      marginTop: 0,
      marginBottom: `${lineHeight}rem`
    },
    smaller: {
      fontSize: `${1 / ratio1}em`,
      marginTop: 0,
      marginBottom: `${lineHeight}rem`
    }
  }
});

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
 *   fontFamily: primary,
 *   fontWeight: light,
 *   ...
 * },
 */

/**
 * Preset 2: Montserrat
 *
 * App.js > injectGlobal > html { font-size: 22px }
 * lineHeight = 1.35rem
 * letterSpacing = -0.04ch
 * base {
 *   fontFamily: secondary,
 *   fontWeight: regular,
 *   ...
 * },
 */

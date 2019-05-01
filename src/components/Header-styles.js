/* eslint-disable prettier/prettier */
import { css } from 'styled-components';

/* Conditional styles change on scroll */

const borderColor = ({ scrolled, theme }) =>
  scrolled ? theme.color.overlayLight : theme.color.overlayDark;

const boxShadow = ({ scrolled }) => (scrolled ? '0 4px 8px rgba(0, 0, 0, 0.7)' : 'none');

const opacity = ({ scrolled }) => (scrolled ? 1 : 0);

const marginTop = ({ scrolled }) => (scrolled ? '0' : '-0.5em');

const HeaderStyles = css`
  position: sticky;
  z-index: 900;
  top: 0;
  height: ${({ theme }) => theme.space.three};
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.overlayDark};
  border-bottom: 1px solid ${borderColor};
  box-shadow: ${boxShadow};
  transition: box-shadow 0.5s ease-in-out;
  padding: 0 ${({ theme }) => theme.space.one};

  @media (min-width: 992px) {
    padding: 0 ${({ theme }) => theme.space.two};
  }
`;

const SiteTitleStyles = css`
  float: left;
  font-size: ${({ theme }) => theme.type.large.fontSize};
  font-family: ${({ theme }) => theme.type.large.fontSize};
  letter-spacing: 0.06ch;
  text-transform: uppercase;
  text-align: left;
  padding-top: 0;
  opacity: ${opacity};
  margin-top: ${marginTop};
  transition: opacity 0.5s ease-in-out, margin-top 0.2s ease-in-out;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export { HeaderStyles, SiteTitleStyles };

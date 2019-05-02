import { css } from 'styled-components';

const HomeStyles = css`
  overflow: hidden;
`;

const SiteTitleStyles = css`
  padding-top: ${({ theme }) => theme.space.four};
  padding-bottom: ${({ theme }) => theme.space.one};
  font-family: ${({ theme }) => theme.type.large.fontSize};
  letter-spacing: 0.06ch;
  text-transform: uppercase;
  text-align: center;
  font-size: ${({ theme }) => theme.type.h2.fontSize};

  @media (min-width: 576px) {
    letter-spacing: 0.12ch;
    padding-bottom: ${({ theme }) => theme.space.two};
  }

  @media (min-width: 768px) {
    padding-top: ${({ theme }) => theme.space.six};
    font-size: ${({ theme }) => theme.type.h1.fontSize};
    letter-spacing: 0.12ch;
  }
`;

const LargeStyles = css`
  font-size: ${({ theme }) => theme.type.large.fontSize};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.type.large.marginBottom};
  position: relative;
  z-index: 1;
`;

const PlainLogoStyles = css`
  margin-top: -${({ theme }) => theme.space.one};
  margin-left: 50%;
  transform: translateX(-50%);
  min-width: 140%;
  display: block;
  padding-top: ${({ theme }) => theme.space.one};
  position: relative;
  z-index: -99999;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);

  @media (min-width: 992px) {
    min-width: 0;
  }
`;

const LogoStyles = css`
  margin-top: -${({ theme }) => theme.space.one};
  margin-left: 50%;
  transform: translateX(-50%);
  min-width: 140%;
  display: block;
  padding-top: ${({ theme }) => theme.space.one};
  z-index: -99999;

  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);

  @media (min-width: 992px) {
    min-width: 0;
  }
`;

export { HomeStyles, SiteTitleStyles, LargeStyles, LogoStyles, PlainLogoStyles };

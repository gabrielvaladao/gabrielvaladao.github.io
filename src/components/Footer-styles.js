import { css } from 'styled-components';

const FooterStyles = css`
  padding: 0 0 ${({ theme }) => theme.space.one} 0;
`;

const FooterMenuStyles = css`
  /* border-bottom: 1px solid black;
  border-top: solid 1px ${({ theme }) => theme.color.overlayLight}; */
  background-color: ${({ theme }) => theme.color.overlayMedium};
  border-bottom: 1px solid ${({ theme }) => theme.color.overlayMedium};
  border-top: solid 1px black;
  padding: ${({ theme }) => theme.space.one} 0 ${({ theme }) => theme.space.two} 0;
`;

const LogoStyles = css`
  margin: 0 auto;
  display: block;
  padding-top: ${({ theme }) => theme.space.two};
`;

const SocketStyles = css`
  text-align: center;
  padding-top: ${({ theme }) => theme.space.one};
`;

export { FooterStyles, FooterMenuStyles, LogoStyles, SocketStyles };

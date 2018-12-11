import { css } from 'styled-components';

const H1Styles = css`
  margin-top: 0;
  padding-top: ${({ theme }) => theme.space.three};
  text-align: center;
  font-family: ${({ theme }) => theme.type.h1.fontFamily};
  font-weight: ${({ theme }) => theme.type.h1.fontWeight};
  line-height: ${({ theme }) => theme.type.h1.lineHeight};
  font-size: ${({ theme }) => theme.type.h2.fontSize};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.type.h1.fontSize};
  }
`;

export default H1Styles;

import { css } from 'styled-components';

const H2Styles = css`
  font-family: ${({ theme }) => theme.type.h2.fontFamily};
  font-weight: ${({ theme }) => theme.type.h2.fontWeight};
  line-height: ${({ theme }) => theme.type.h2.lineHeight};
  font-size: ${({ theme }) => theme.type.h3.fontSize};
  margin-bottom: ${({ theme }) => theme.space.half};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.type.h2.fontSize};
  }
`;

export default H2Styles;

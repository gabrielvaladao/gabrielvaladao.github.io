import { css } from 'styled-components';

const H4Styles = css`
  font-family: ${({ theme }) => theme.type.h4.fontFamily};
  font-weight: ${({ theme }) => theme.type.h4.fontWeight};
  line-height: ${({ theme }) => theme.type.h4.lineHeight};
  font-size: ${({ theme }) => theme.type.primary.fontSize};
  margin-bottom: ${({ theme }) => theme.space.quarter};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.type.h4.fontSize};
  }
`;

export default H4Styles;

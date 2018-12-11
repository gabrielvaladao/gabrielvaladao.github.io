import { css } from 'styled-components';

const LargeStyles = css`
  font-size: ${({ theme }) => theme.type.large.fontSize};
  margin-bottom: ${({ theme }) => theme.type.large.marginBottom};
`;

export default LargeStyles;

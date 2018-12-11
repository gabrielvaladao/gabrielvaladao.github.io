import { css } from 'styled-components';

const LargeStyles = css`
  font-size: ${({ theme }) => theme.type.large.fontSize};
  margin-bottom: ${({ theme }) => theme.type.large.marginBottom};
`;

// const P = styled.p`
const PStyles = css`
  margin-bottom: ${({ theme }) => theme.space.one};

  &:last-child {
    margin-bottom: 0;
  }
`;

export { LargeStyles, PStyles };

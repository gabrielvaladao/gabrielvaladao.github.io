import { css } from 'styled-components';

// const P = styled.p`
const PStyles = css`
  margin-bottom: ${({ theme }) => theme.space.one};

  &:last-child {
    margin-bottom: 0;
  }
`;

export { PStyles };

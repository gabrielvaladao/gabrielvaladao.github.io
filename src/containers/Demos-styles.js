import { css } from 'styled-components';

const UlStyles = css`
  padding-left: 0;
`;

const LiStyles = css`
  list-style-type: none;
  margin-top: ${({ theme }) => theme.space.one};
`;

export { UlStyles, LiStyles };

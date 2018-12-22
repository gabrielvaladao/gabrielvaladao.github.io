import { css } from 'styled-components';

const ShowsStyles = css`
  margin-top: ${({ theme }) => theme.space.one};
`;

const StyledH3Styles = css`
  &:not(first-of-type) {
    margin-top: ${({ theme }) => theme.space.one};
  }

  &:first-of-type {
    margin-top: 0;
  }
`;

const UlStyles = css`
  padding-left: 0;
`;

export { ShowsStyles, StyledH3Styles, UlStyles };

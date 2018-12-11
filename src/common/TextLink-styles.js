import { css } from 'styled-components';

const TextLinkStyles = css`
  a {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;

    &:hover {
      border-bottom: solid ${({ theme }) => theme.border.size.base} ${({ theme }) => theme.color.primary};
    }

    &:active {
      color: ${({ theme }) => theme.color.primaryDark};
      border-bottom: 2px solid ${({ theme }) => theme.color.primaryDark};
    }
  }
`;

export default TextLinkStyles;

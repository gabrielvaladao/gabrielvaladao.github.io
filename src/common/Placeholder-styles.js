import { css } from 'styled-components';

const PlaceholderStyles = css`
  iframe {
    border-radius: ${({ theme }) => theme.border.radius.small};
    background-color: ${({ theme }) => theme.color.overlayLight};
  }
`;

export default PlaceholderStyles;

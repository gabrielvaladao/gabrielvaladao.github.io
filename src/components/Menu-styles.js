import { css } from 'styled-components';

const OlStyles = css`
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const LiStyles = css`
  text-align: center;
  list-style-type: none;

  font-size: ${({ theme }) => theme.type.large.fontSize};
  font-family: ${({ theme }) => theme.type.primary.fontFamily};
  font-weight: ${({ theme }) => theme.type.primary.fontWeight};
  line-height: ${({ theme }) => theme.type.primary.lineHeight};
  padding: ${({ theme }) => theme.space.half} 0;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.color.overlayLight};
  }
`;

const AStyles = css`
  color: ${({ theme }) => theme.color.brandWhite};
  text-decoration: none;

  &:active {
    color: ${({ theme }) => theme.color.overlayLighter};
  }
`;

export { OlStyles, LiStyles, AStyles };

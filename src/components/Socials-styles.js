import { css } from 'styled-components';

const SocialsStyles = css`
  padding: 0 0 ${({ theme }) => theme.space.three} 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: middle;
`;

const LiStyles = css`
  list-style-type: none;
  text-align: center;
  display: inline-block;
  margin-right: 0.5ch;
`;

const IconStyles = css`
  font-size: ${({ theme }) => theme.icon.fontSize};
  text-align: center;
  border-radius: 50%;
  border-bottom: none;
  padding: ${({ theme }) => theme.space.half};
  opacity: 0.9;
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.color.primaryOverlay};
    color: white;
    border-bottom: none;
  }

  &:active {
    background: ${({ theme }) => theme.color.primaryDark};
    color: white;
  }
`;

export { SocialsStyles, LiStyles, IconStyles };

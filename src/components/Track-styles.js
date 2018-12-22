import { css } from 'styled-components';

const TrackH3Styles = css`
  margin-bottom: ${({ theme }) => theme.type.h3.marginBottom};
`;

const StyledPlaceholderStyles = css`
  height: 166px; /* same as SoundCloud embed */
  border: 1px solid ${({ theme }) => theme.color.overlayLight};
  border-radius: ${({ theme }) => theme.border.radius.small};
`;

export { TrackH3Styles, StyledPlaceholderStyles };

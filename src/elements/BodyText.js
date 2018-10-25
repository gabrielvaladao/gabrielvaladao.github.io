import React from 'react';
import styled from 'styled-components';
//

/**
 * FIXME: BodyText is having an identity crisis.
 * Is it a div? a p? does it contain ps? Is it a span?
 * How is it expected to be used?
 * Is that similar to how other <elements> in this dir are used (i.e. clear enough for the next monkey)?
 */
const BodyText = styled.div`
  & p {
    margin-bottom: ${props => props.theme.space.one};
  }
`;

export default props => (
  <BodyText {...props}>{props.children}</BodyText>
);

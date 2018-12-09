import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
const Wrapper = styled.div`
  iframe {
    border-radius: ${({ theme }) => theme.border.radius.small};
    background-color: ${({ theme }) => theme.color.overlayLight};
  }
`;

const Placeholder = props => <Wrapper {...props}>{props.children}</Wrapper>;

Placeholder.propTypes = {
  children: PropTypes.node.isRequired
};

export default Placeholder;

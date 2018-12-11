import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
import PlaceholderStyles from './Placeholder-styles';

const Wrapper = styled.div`
  ${PlaceholderStyles}
`;

const Placeholder = props => <Wrapper {...props}>{props.children}</Wrapper>;

Placeholder.propTypes = {
  children: PropTypes.node.isRequired
};

export default Placeholder;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
import PStyles from './P-styles';

const Wrapper = styled.p`
  ${PStyles}
`;

const P = props => <Wrapper {...props}>{props.children}</Wrapper>;

P.propTypes = {
  children: PropTypes.node.isRequired
};

export default P;

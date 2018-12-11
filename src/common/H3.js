import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
import H3Styles from './H3-styles';

const Wrapper = styled.h3`
  ${H3Styles}
`;

const H3 = props => <Wrapper {...props}>{props.children}</Wrapper>;

H3.propTypes = {
  children: PropTypes.node.isRequired
};

export default H3;

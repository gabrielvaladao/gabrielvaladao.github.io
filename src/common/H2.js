import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
import H2Styles from './H2-styles';

const Wrapper = styled.h2`
  ${H2Styles}
`;

const H2 = props => <Wrapper {...props}>{props.children}</Wrapper>;

H2.propTypes = {
  children: PropTypes.node.isRequired
};

export default H2;

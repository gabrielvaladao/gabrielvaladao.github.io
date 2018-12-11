import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
import H1Styles from './H1-styles';

const Wrapper = styled.h1`
  ${H1Styles}
`;

const H1 = props => <Wrapper {...props}>{props.children}</Wrapper>;

H1.propTypes = {
  children: PropTypes.node.isRequired
};

export default H1;

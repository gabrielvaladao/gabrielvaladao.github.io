import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
import H4Styles from './H4-styles';

const Wrapper = styled.h4`
  ${H4Styles}
`;

const H4 = props => <Wrapper {...props}>{props.children}</Wrapper>;

H4.propTypes = {
  children: PropTypes.node.isRequired
};

export default H4;

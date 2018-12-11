import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
import ButtonStyles from './Button-styles';

const Wrapper = styled.button`
  ${ButtonStyles}
`;

const Button = props => <Wrapper {...props}>{props.children}</Wrapper>;

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;

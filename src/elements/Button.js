import React from 'react';
import PropTypes from 'prop-types';
//
import styled from 'styled-components';
//

/**
 * TODO:
 *  - Calculate padding based on Theme
 *  - Use same padding for Newsletter > Input
 * */

const Wrapper = styled.button`
  -webkit-appearance: none;
  font-family: ${({ theme }) => theme.type.primary.fontFamily};
  font-size: ${({ theme }) => theme.type.small.fontSize};
  text-align: center;
  letter-spacing: -0.03ch;
  padding: 0.3rem 0.5rem;
  background-color: ${({ theme }) => theme.color.brandBlack};
  color: white;
  border-style: solid;
  border-width: ${({ theme }) => theme.border.size.base};
  border-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.border.radius.small};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.brandGrayDark};
    cursor: pointer;
  }

  &:active {
    background-color: ${({ theme }) => theme.color.primaryDark};
    border-color: ${({ theme }) => theme.color.primaryDark};
    color: ${({ theme }) => theme.color.brandGrayDark};
  }

  a:hover,
  a:active {
    color: ${({ theme }) => theme.color.brandGrayDark};
    border: none;
  }
`;

const Button = props => <Wrapper {...props}>{props.children}</Wrapper>;

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;

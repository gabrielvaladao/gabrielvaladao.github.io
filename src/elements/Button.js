import React from 'react';
//
import styled from 'styled-components';
//

/**
 * TODO:
 *  - Calculate padding based on Theme
 *  - Use same padding for Newsletter > Input
 * */

const Button = styled.button`
  -webkit-appearance: none;
  font-family: ${props => props.theme.type.primary.fontFamily};
  font-size: ${props => props.theme.type.small.fontSize};
  text-align: center;
  letter-spacing: -0.03ch;
  padding: 0.3rem 0.5rem;
  background-color: ${props => props.theme.color.brandBlack};
  color: white;
  border-style: solid;
  border-width: ${props => props.theme.border.size.base};
  border-color: ${props => props.theme.color.primary};
  border-radius: ${props => props.theme.border.radius.small};

  &:hover {
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.brandGrayDark};
    cursor: pointer;
  }

  &:active {
    background-color: ${props => props.theme.color.primaryDark};
    border-color: ${props => props.theme.color.primaryDark};
    color: ${props => props.theme.color.brandGrayDark};
  }

  a:hover,
  a:active {
    color: ${props => props.theme.color.brandGrayDark};
    border: none;
  }
`;

export default props => <Button {...props}>{props.children}</Button>;

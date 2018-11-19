import React from 'react';
//
import styled from 'styled-components';
//

/**
 * TODO:
 *  - Calculate padding based on Theme
 *  - Use same padding for Newsletter > Input
 *  - Define border-radius in Theme
 * */

const Button = styled.button`
  -webkit-appearance: none;
  font-family: ${props => props.theme.type.secondary.fontFamily};
  font-size: ${props => props.theme.type.small.fontSize};
  text-align: center;
  letter-spacing: -0.1ch;
  padding: 0.2rem 0.5rem 0.3rem 0.5rem;
  background-color: ${props => props.theme.color.brandBlack};
  color: ${props => props.theme.color.white};
  border: 2px solid ${props => props.theme.color.primary};
  border-radius: 3px;

  &:active {
    background-color: ${props => props.theme.color.primaryDark};
    color: ${props => props.theme.color.white};
  }
`;

export default props => <Button {...props}>{props.children}</Button>;

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
  font-family: ${props => props.theme.type.compact.fontFamily};
  font-size: ${props => props.theme.type.small.fontSize};
  text-align: center;
  letter-spacing: -0.1ch;
  padding: 0.2rem 0.5rem 0.3rem 0.5rem;
  background-color: #08000f;
  color: #eeedef;
  border: 2px solid #6fdfdf;
  border-radius: 3px;

  &:active {
    background-color: #1f9f9f;
    color: #fff;
  }
`;

export default props => <Button {...props}>{props.children}</Button>;

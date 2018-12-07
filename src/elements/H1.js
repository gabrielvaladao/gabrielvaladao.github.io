import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
const Wrapper = styled.h1`
  margin-top: 0;
  padding-top: ${({ theme }) => theme.space.three};
  text-align: center;
  font-family: ${({ theme }) => theme.type.h1.fontFamily};
  font-weight: ${({ theme }) => theme.type.h1.fontWeight};
  line-height: ${({ theme }) => theme.type.h1.lineHeight};
  font-size: ${({ theme }) => theme.type.h2.fontSize};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.type.h1.fontSize};
  }
`;

const H1 = props => <Wrapper {...props}>{props.children}</Wrapper>;

H1.propTypes = {
  children: PropTypes.node.isRequired
};

export default H1;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
const Wrapper = styled.h3`
  font-family: ${({ theme }) => theme.type.h3.fontFamily};
  font-weight: ${({ theme }) => theme.type.h3.fontWeight};
  line-height: ${({ theme }) => theme.type.h3.lineHeight};
  font-size: ${({ theme }) => theme.type.primary.fontSize};
  margin-bottom: ${({ theme }) => theme.space.quarter};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.type.h3.fontSize};
  }
`;

const H3 = props => <Wrapper {...props}>{props.children}</Wrapper>;

H3.propTypes = {
  children: PropTypes.node.isRequired
};

export default H3;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
const Wrapper = styled.h4`
  font-family: ${({ theme }) => theme.type.h4.fontFamily};
  font-weight: ${({ theme }) => theme.type.h4.fontWeight};
  line-height: ${({ theme }) => theme.type.h4.lineHeight};
  font-size: ${({ theme }) => theme.type.primary.fontSize};
  margin-bottom: ${({ theme }) => theme.space.quarter};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.type.h4.fontSize};
  }
`;

const H4 = props => <Wrapper {...props}>{props.children}</Wrapper>;

H4.propTypes = {
  children: PropTypes.node.isRequired
};

export default H4;

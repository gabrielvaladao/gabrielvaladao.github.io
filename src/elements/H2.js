import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
const Wrapper = styled.h2`
  font-family: ${({ theme }) => theme.type.h2.fontFamily};
  font-weight: ${({ theme }) => theme.type.h2.fontWeight};
  line-height: ${({ theme }) => theme.type.h2.lineHeight};
  font-size: ${({ theme }) => theme.type.h3.fontSize};
  margin-bottom: ${({ theme }) => theme.space.half};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.type.h2.fontSize};
  }
`;

const H2 = props => <Wrapper {...props}>{props.children}</Wrapper>;

H2.propTypes = {
  children: PropTypes.node.isRequired
};

export default H2;

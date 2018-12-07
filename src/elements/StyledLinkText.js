/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
const Wrapper = styled.span`
  a {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;

    &:hover {
      border-bottom: solid ${({ theme }) => theme.border.size.base}
        ${({ theme }) => theme.color.primary};
    }

    &:active {
      color: ${({ theme }) => theme.color.primaryDark};
      border-bottom: 2px solid ${({ theme }) => theme.color.primaryDark};
    }
  }
`;

const StyledLinkText = props => <Wrapper {...props}>{props.children}</Wrapper>;

/* TODO: Specify Link or anchor element */
StyledLinkText.propTypes = {
  children: PropTypes.element.isRequired
};

export default StyledLinkText;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
import TextLinkStyles from './TextLink-styles';

const Wrapper = styled.span`
  ${TextLinkStyles}
`;

const TextLink = props => <Wrapper {...props}>{props.children}</Wrapper>;

/* TODO: Specify Link or anchor element */
TextLink.propTypes = {
  children: PropTypes.element.isRequired
};

export default TextLink;

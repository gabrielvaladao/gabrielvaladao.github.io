import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../common/H1';
import TextLink from '../common/TextLink';
import { ContactInfoStyles, AddressStyles } from './Contact-styles';
//
const Info = styled.div`
  ${ContactInfoStyles}
`;

const Address = styled.address`
  ${AddressStyles}
`;

const Contact = ({ id }) => (
  <section id={id}>
    <H1>Contact</H1>
    <Info>
      For booking and inquiries, email{' '}
      <Address>
        <TextLink>
          <Link to="mailto:labrysinthe@gmail.com">labrysinthe@gmail.com</Link>
        </TextLink>
      </Address>
    </Info>
  </section>
);

Contact.propTypes = {
  id: PropTypes.string
};

export default Contact;

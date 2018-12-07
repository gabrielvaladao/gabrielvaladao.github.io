import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
//
import PressRelease from '../components/PressRelease';
import H1 from '../elements/H1';

const Ul = styled.ul`
  padding-left: 0;
`;

const Li = styled.li`
  list-style-type: none;
`;

/* TODO: aria-sort: date, descending */

const Press = ({ id }) => (
  <section id={id}>
    <H1>Press</H1>
    <Ul>
      <Li>
        <PressRelease />
      </Li>
      <Li>
        <PressRelease />
      </Li>
    </Ul>
  </section>
);

Press.propTypes = {
  id: PropTypes.string
};

export default withRouteData(Press);

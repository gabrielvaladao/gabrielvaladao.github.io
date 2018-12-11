import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
//
import PressRelease from '../components/PressRelease';
import H1 from '../common/H1';
import { UlStyles, LiStyles } from './Press-styles';

const Ul = styled.ul`
  ${UlStyles}
`;

const Li = styled.li`
  ${LiStyles}
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

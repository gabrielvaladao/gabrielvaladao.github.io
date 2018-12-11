import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import Header from '../components/Header';

class Scroller extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  state = { scrolled: false };

  handleScroll({ waypointTop }) {
    if (waypointTop < 0) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Header scrolled={this.state.scrolled} />
        <Waypoint onPositionChange={this.handleScroll} />
        {children}
      </React.Fragment>
    );
  }
}

Scroller.propTypes = {
  children: PropTypes.element
};

export default Scroller;

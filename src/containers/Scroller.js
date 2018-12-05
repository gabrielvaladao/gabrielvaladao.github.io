import React, { Component } from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import Header from './Header';

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
    return (
      <React.Fragment>
        <Header scrolled={this.state.scrolled} />
        <Waypoint onPositionChange={this.handleScroll} />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Scroller;

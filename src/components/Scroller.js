import React, { Component } from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import Header from '../containers/Header';

const StyledHeader = styled(Header)`
  padding: 0 2rem;
`;

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
        <StyledHeader scrolled={this.state.scrolled} />
        <Waypoint onPositionChange={this.handleScroll} />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Scroller;

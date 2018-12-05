import React, { Component } from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import Header from './Header';

const StyledHeader = styled(Header)`
  padding: 0 2rem;
`;

class Scroller extends Component {
  constructor(props) {
    super(props);

    this.handleScrollDown = this.handleScrollDown.bind(this);
    this.handleScrollToTop = this.handleScrollToTop.bind(this);
  }

  state = { scrolled: false };

  handleScrollDown() {
    this.setState({ scrolled: true });
  }

  handleScrollToTop() {
    this.setState({ scrolled: false });
  }

  render() {
    return (
      <React.Fragment>
        <StyledHeader scrolled={this.state.scrolled} />
        <Waypoint onLeave={this.handleScrollDown} onEnter={this.handleScrollToTop} />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Scroller;

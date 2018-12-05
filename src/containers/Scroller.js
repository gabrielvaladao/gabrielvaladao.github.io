import React, { Component } from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import Header from './Header';

const StyledHeader = styled(Header)`
  padding: 0 2rem;
`;

class Scroller extends Component {
  state = { scrolled: false };

  componentDidMount() {
    console.log('So far so good in the Scroller');
  }

  componentDidUpdate() {
    console.log('Is there anybody in the Scroller?');
  }

  handleScrollDown() {
    this.setState({ scrolled: true });
    console.log(`on a jet plane: ${this.state.scrolled}`);
  }

  handleScrollToTop() {
    this.setState({ scrolled: false });
    console.log(`back again: ${this.state.scrolled}`);
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

import React from 'react';
import isEmail from 'validator/lib/isEmail';
import styled from 'styled-components';
//
import H2 from '../elements/H2';
import BodyText from '../elements/BodyText';

const ErrorMessage = styled.div`
  /* TODO use a margin from theme sizes */
  margin-top: 0.5em;
  color: crimson;
`;

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (typeof document !== 'undefined') {
      document.querySelector('#error').setAttribute('hidden', 'true');
    }
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (isEmail(this.state.user_email)) {
      const form = e.target;

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state,
        }),
      })
        .then(this.showThanks())
        .catch(error => alert(error));
    } else {
      if (typeof document !== 'undefined') {
        document.querySelector('#error').removeAttribute('hidden');
      }
    }
  }

  showThanks() {
    alert(JSON.stringify(this.state));
    if (typeof document !== 'undefined') {
      document.querySelector('#mc-sign-up').setAttribute('hidden', 'true');
      document.querySelector('#thanks').removeAttribute('hidden');
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="mc-sign-up">
          <H2>Sign up</H2>
          <BodyText>
            Be the first to hear about upcoming gigs and music.
          </BodyText>
          <form
            name="mc_sign_up"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <div style={{ display: 'none' }}>
              <label htmlFor="bot-field">Spam catcher. Do not fill:
                <input id="bot-field" name="bot-field" form-name="mcSignUp" onChange={this.handleChange} />
              </label>
            </div>

            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="user_email"
                onChange={this.handleChange}
                required
              />
            </label>

            <button type="submit">Sign up</button>

          </form>
        </div>
        <ErrorMessage id="error" hidden>
          <BodyText>
            <p>
              {/* TODO: Variable error message */}
              <strong>Error</strong> Please enter a valid email address<br />
            </p>
          </BodyText>
        </ErrorMessage>
        <div id="thanks" hidden>
          <H2>Thanks!</H2>
          <BodyText>
            <p>
              You've been added to the mailing list.
            </p>
            <p>
              Please check your email and confirm your address. You'll be in the loop as soon as Labrysinthe drops anything shiny.
            </p>
          </BodyText>
        </div>
      </React.Fragment>
    );
  }
}

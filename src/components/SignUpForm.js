import React from 'react';
import isEmail from 'validator/lib/isEmail';
import styled from 'styled-components';
//
import H2 from '../elements/H2';
import BodyText from '../elements/BodyText';
import Button from './Button';

/* TODO use a margin from theme sizes */
const ErrorMessage = styled(BodyText)`
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
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    /* Suppress redirect */
    e.preventDefault();
    try {
      if (this.state.user_email && isEmail(this.state.user_email)) {
        const form = e.target;

        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            ...this.state,
          }),
        })
          .then(() => this.showThanks())
          .catch(error => this.showError(error));
      } else {
        throw new Error('Please enter a valid email address');
      }
    } catch (error) {
      this.showError(error);
    }
  }

  showThanks() {
    if (typeof document !== 'undefined') {
      document.querySelector('#mc-sign-up').setAttribute('hidden', 'true');
      document.querySelector('#error').setAttribute('hidden', 'true');
      document.querySelector('#thanks').removeAttribute('hidden');
    }
  }

  showError(error) {
    if (typeof document !== 'undefined') {
      const errorMessage = document.querySelector('#error');
      errorMessage.textContent = error;
      document.querySelector('#error').removeAttribute('hidden');
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
            noValidate
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

            <Button type="submit">Sign up</Button>

          </form>
        </div>
        <ErrorMessage id="error" hidden>
          Error: Please try again later
        </ErrorMessage>
        <div id="thanks" hidden>
          <H2>Thanks!</H2>
          <BodyText>
            You've been added to the mailing list.
          </BodyText>
          <BodyText>
            Please check your email and confirm your address. You'll be in the loop as soon as Labrysinthe drops anything shiny.
          </BodyText>
        </div>
      </React.Fragment>
    );
  }
}

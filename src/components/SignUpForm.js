import React from 'react';
import isEmail from 'validator/lib/isEmail';
import styled from 'styled-components';
//
import H2 from '../elements/H2';
import P from '../elements/P';
import Button from './Button';

const Wrapper = styled.section`
  text-align: center;
  padding-bottom: ${props => props.theme.space.two};
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: ${props => props.theme.type.small.fontSize};
  width: 30ch;
  margin: -${props => props.theme.type.small.fontSize} auto 0 auto;
`;

/* TODO: calculate padding based on Theme */
const Input = styled.input`
  text-align: left;
  letter-spacing: -0.1ch;
  padding: 0.2em 0.5em;
  display: block;
  width: 100%;
  margin-bottom: ${props => props.theme.space.half};
`;

/* TODO use a margin from theme sizes */
const ErrorMessage = styled(P)`
  text-align: left;
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
      <Wrapper>
        <div id="mc-sign-up">
          <H2>Sign up</H2>
          <P>
            Be the first to hear about upcoming gigs and music.
          </P>
          <form
            name="mc_sign_up"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            noValidate
          >
            <div style={{ display: 'none' }}>
              <label htmlFor="bot-field">
                Spam catcher. Do not fill:
                <input id="bot-field" name="bot-field" form-name="mcSignUp" onChange={this.handleChange} />
              </label>
            </div>

            <Label htmlFor="email">
              Email:
              <Input
                type="email"
                id="email"
                name="user_email"
                onChange={this.handleChange}
                required
              />
              <ErrorMessage id="error" hidden>
                Error: Please try again later
              </ErrorMessage>
            </Label>


            <Button type="submit">Sign up</Button>

          </form>
        </div>
        <div id="thanks" hidden>
          <H2>Thanks!</H2>
          <P>
            You've been added to the mailing list.
          </P>
          <P>
            Please check your email and confirm your address. You'll be in the loop as soon as Labrysinthe drops anything shiny.
          </P>
        </div>
      </Wrapper>
    );
  }
}

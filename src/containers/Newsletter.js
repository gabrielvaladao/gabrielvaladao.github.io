import React from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import H2 from '../elements/H2';
import Placeholder from '../elements/Placeholder';
import Button from '../elements/Button';

/* UTILITIES */

class EmailError extends Error {
  name = 'EmailError';
  message = 'Please enter a valid email address';
}

class ReCAPTCHAError extends Error {
  name = 'ReCAPTCHAError';
  message = "Please check the box if you're human";
}

/* Encode data for the form's POST resquest */
function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

/* STYLES */

const Wrapper = styled.section`
  text-align: center;
`;

const P = styled.p`
  margin-bottom: ${({ theme }) => theme.space.one};
`;

const Form = styled.form`
  display: grid;
  margin: 0 auto;
  grid-template-columns: minmax(0, min-content) minmax(0, 1fr);
  grid-template-rows: repeat(6, min-content);
  grid-column-gap: 1ch;
  grid-row-gap: 0.5ch;

  /* This is what Google generates automatically */
  max-width: 304px;

  @media (min-width: 576px) {
    grid-template-columns: minmax(0, min-content) minmax(min-content, 1fr);
    max-width: inherit;
  }
`;

/* TODO: width is hacky. do this with box-sizing or borders */
const Label = styled.label`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
`;

/**
 * TODO: calculate padding based on Theme
 * Use same padding for Button
 * */
const Input = styled.input`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  border-radius: ${({ theme }) => theme.border.radius.small};
  border: 0;
  letter-spacing: -0.1ch;
  padding: 0.2rem 0.5rem;
`;

const StyledPlaceholder = styled(Placeholder)`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  margin: 0 auto;
`;

const Submit = styled(Button)`
  grid-column: 1 / 3;
  grid-row: 5 / 6;
  padding: ${({ theme }) => theme.space.quarter};
`;

const ErrorMessage = styled.p`
  display: none;
  font-size: ${({ theme }) => theme.type.small.fontSize};
  color: ${({ theme }) => theme.color.error};
  white-space: normal;
`;

const EmailErrorMessage = styled(ErrorMessage)`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

const ReCAPTCHAErrorMessage = styled(ErrorMessage)`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
`;

const GenericErrorMessage = styled(ErrorMessage)`
  grid-column: 1 / 3;
  /* last row before submit button */
  grid-row: 4 / 5;
`;

const Thanks = styled.div`
  p {
    text-align: left;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleReCAPTCHA = this.handleReCAPTCHA.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleReCAPTCHA(response) {
    this.setState({ 'g-recaptcha-response': response });
  }

  handleSubmit(e) {
    /* Suppress redirect */
    this.resetErrors();
    e.preventDefault();
    try {
      if (!this.state.user_email || !isEmail(this.state.user_email)) {
        throw new EmailError();
      }
      if (!this.state['g-recaptcha-response']) {
        throw new ReCAPTCHAError();
      }
      const form = e.target;

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state
        })
      })
        .then(() => this.displayThanks())
        .catch(error => this.displayError(error));
    } catch (error) {
      this.displayError(error);
    }
  }

  displayThanks() {
    if (typeof document !== 'undefined') {
      document.querySelector('#mc-sign-up').setAttribute('hidden', 'true');
      document.querySelector('#error').style.display = 'none';
      document.querySelector('#error').style.position = 'absolute';
      document.querySelector('#thanks').removeAttribute('hidden');
    }
  }

  displayError(error) {
    if (typeof document !== 'undefined') {
      let errorMessage;
      if (error.name === 'EmailError') {
        document.querySelector('#email').setAttribute('aria-invalid', 'true');
        errorMessage = document.querySelector('#email-error');
      } else if (error.name === 'ReCAPTCHAError') {
        document.querySelector('#recaptcha').setAttribute('aria-invalid', 'true');
        errorMessage = document.querySelector('#recaptcha-error');
      } else {
        errorMessage = document.querySelector('#error');
      }
      errorMessage.textContent = `Error: ${error.message}`;
      errorMessage.style.position = 'relative';
      errorMessage.style.display = 'block';
    }
  }

  resetErrors() {
    if (typeof document !== 'undefined') {
      /* reset any inputs previously marked as invalid */
      const inputs = document.querySelectorAll('.input');
      for (const input of inputs) {
        input.setAttribute('aria-invalid', 'false');
      }

      /* hide error messages */
      const messages = document.querySelectorAll('.error-msg');
      for (const msg of messages) {
        msg.style.display = 'none';
      }
    }
  }

  render() {
    const { id } = this.props;
    return (
      <Wrapper id={id}>
        <H1>Newsletter</H1>
        <div id="mc-sign-up">
          <P>Be the first to hear about upcoming gigs and fresh music.</P>
          <Form
            name="mc_sign_up"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha
            onSubmit={this.handleSubmit}
            noValidate
          >
            <div style={{ display: 'none' }}>
              <label htmlFor="bot-field">
                Spam catcher. Do not fill:
                <input
                  id="bot-field"
                  name="bot-field"
                  form-name="mcSignUp"
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="user_email"
              className="input"
              onChange={this.handleChange}
              required
            />
            <EmailErrorMessage id="email-error" className="error-msg" />
            <StyledPlaceholder>
              <ReCAPTCHA
                id="recaptcha"
                className="input"
                sitekey="6LdrhHkUAAAAAAWeHoi6gPJV6DiLoU3Cn9OptAWF"
                onChange={this.handleReCAPTCHA}
              />
            </StyledPlaceholder>
            <ReCAPTCHAErrorMessage id="recaptcha-error" className="error-msg" />

            <GenericErrorMessage id="error" className="error-msg" />

            <Submit type="submit">
              <span>SIGN&nbsp;UP</span>
            </Submit>
          </Form>
        </div>
        <Thanks id="thanks" hidden>
          <H2>Thanks!</H2>
          <P>You've been added to the mailing list.</P>
          <P>
            Please check your email and confirm your address. You'll be in the loop as soon as
            Labrysinthe drops new shiny.
          </P>
        </Thanks>
      </Wrapper>
    );
  }
}

Newsletter.propTypes = {
  id: PropTypes.string
};

export default Newsletter;

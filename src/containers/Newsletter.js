import React from 'react';
import { withRouteData } from 'react-static';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
//
import H1 from '../common/H1';
import H2 from '../common/H2';
import P from '../common/P';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';
import {
  NewsletterStyles,
  FormStyles,
  LabelStyles,
  InputStyles,
  ReCAPTCHAPlaceholderStyles,
  SubmitStyles,
  ErrorMessageStyles,
  EmailErrorMessageStyles,
  ReCAPTCHAErrorMessageStyles,
  GenericErrorMessageStyles,
  ThanksStyles
} from './Newsletter-styles';

/* STYLES */

const Wrapper = styled.section`
  ${NewsletterStyles}
`;

const Form = styled.form`
  ${FormStyles}
`;

const Label = styled.label`
  ${LabelStyles}
`;

const Input = styled.input`
  ${InputStyles}
`;

const StyledPlaceholder = styled(Placeholder)`
  ${ReCAPTCHAPlaceholderStyles}
`;

const Submit = styled(Button)`
  ${SubmitStyles}
`;

const ErrorMessage = styled.p`
  ${ErrorMessageStyles}
`;

const EmailErrorMessage = styled(ErrorMessage)`
  ${EmailErrorMessageStyles}
`;

const ReCAPTCHAErrorMessage = styled(ErrorMessage)`
  ${ReCAPTCHAErrorMessageStyles}
`;

const GenericErrorMessage = styled(ErrorMessage)`
  ${GenericErrorMessageStyles}
`;

const Thanks = styled.div`
  ${ThanksStyles}
`;

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
      const errors = [];
      if (!this.state.user_email || !isEmail(this.state.user_email)) {
        errors.push(new EmailError());
      }
      if (!this.state['g-recaptcha-response']) {
        errors.push(new ReCAPTCHAError());
      }
      /* After testing all inputs, raise all errors at once */
      if (errors.length > 0) {
        throw errors;
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
    } catch (errors) {
      errors.map(err => {
        this.displayError(err);
        return err;
      });
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
          <P>
            You've been added to the mailing list. You'll be in the loop as soon as Labrysinthe
            drops anything new and shiny.
          </P>
        </Thanks>
      </Wrapper>
    );
  }
}

Newsletter.propTypes = {
  id: PropTypes.string
};

export default withRouteData(Newsletter);

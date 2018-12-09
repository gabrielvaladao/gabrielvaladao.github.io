import React from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
//
import H1 from '../elements/H1';
import H2 from '../elements/H2';
import Button from '../elements/Button';

const Wrapper = styled.section`
  text-align: center;
`;

const P = styled.p`
  margin-bottom: ${({ theme }) => theme.space.one};
`;

/* TODO: calculate ch values and max-width based on Theme */
const Form = styled.form`
  /* TODO: remove previous grid styles */
  display: block;
  grid-template-columns: min-content minmax(0, 1fr) max-content;
  grid-template-rows: min-content minmax(0, min-content);
  column-gap: 0.5ch;
  margin: 0 auto;
  text-align: left;

  @media (min-width: 576px) {
    max-width: 500px;
    grid-template-columns: min-content minmax(6ch, 1fr) min-content;
    grid-template-rows: min-content minmax(0, min-content);
  }
`;

const Label = styled.label`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
`;

/**
 * TODO: calculate padding based on Theme
 * Use same padding for Button
 * */
const Input = styled.input`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border: 0;
  letter-spacing: -0.1ch;
  padding: 0.2rem 0.5rem;
  box-sizing: border-box;

  @media (min-width: 576px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
`;

const Submit = styled(Button)`
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  display: inline-block;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.space.quarter};

  @media (min-width: 576px) {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
  }
`;

/* TODO use a margin from theme sizes */
const ErrorMessage = styled.p`
  visibility: hidden;
  grid-row: 2 / 3;
  grid-column: 2 / 4;
  font-size: ${({ theme }) => theme.type.small.fontSize};
  color: ${({ theme }) => theme.color.error};
  margin: ${({ theme }) => theme.space.quarter} 0;
  white-space: normal;

  @media (min-width: 576px) {
    grid-row: 2 / 3;
    grid-column: 2 / 4;
  }
`;

const Thanks = styled.div`
  p {
    text-align: left;
  }
`;

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    /* Suppress redirect */
    e.preventDefault();
    try {
      if (!this.state.user_email || !isEmail(this.state.user_email)) {
        throw new Error('Please enter a valid email address');
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
        .then(() => this.showThanks())
        .catch(error => this.showError(error));
    } catch (error) {
      this.showError(error);
    }
  }

  showThanks() {
    if (typeof document !== 'undefined') {
      document.querySelector('#mc-sign-up').setAttribute('hidden', 'true');
      document.querySelector('#error').style.visibility = 'hidden';
      document.querySelector('#error').style.position = 'absolute';
      document.querySelector('#thanks').removeAttribute('hidden');
    }
  }

  showError(error) {
    console.log('show error');
    if (typeof document !== 'undefined') {
      console.log('document true');
      const errorMessage = document.querySelector('#error');
      errorMessage.textContent = error;
      document.querySelector('#error').style.position = 'relative';
      document.querySelector('#error').style.visibility = 'visible';
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
              onChange={this.handleChange}
              required
            />
            <ErrorMessage id="error" />

            <Submit type="submit">
              <span>Sign&nbsp;up</span>
            </Submit>
          </Form>
        </div>
        <Thanks id="thanks" hidden>
          <H2>Thanks!</H2>
          <P>You've been added to the mailing list.</P>
          <P>
            Please check your email and confirm your address. You'll be in the loop as soon as
            Labrysinthe drops anything shiny.
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

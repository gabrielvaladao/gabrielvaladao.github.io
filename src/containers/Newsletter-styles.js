import { css } from 'styled-components';

const NewsletterStyles = css`
  text-align: center;
`;

const FormStyles = css`
  display: grid;
  margin: 0 auto;
  grid-template-columns: minmax(0, min-content) minmax(0, 1fr);
  grid-template-rows: repeat(6, min-content);
  grid-column-gap: 1ch;
  grid-row-gap: 0.5ch;

  /* This is the CAPTCHA size that Google generates automatically */
  max-width: 304px;

  @media (min-width: 576px) {
    grid-template-columns: minmax(0, min-content) minmax(min-content, 1fr);
    max-width: inherit;
  }
`;

/* TODO: width is hacky. do this with box-sizing or borders */
const LabelStyles = css`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
`;

/**
 * TODO: calculate padding based on Theme
 * Use same padding for Button
 * */
const InputStyles = css`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  border-radius: ${({ theme }) => theme.border.radius.small};
  border: 0;
  letter-spacing: -0.1ch;
  padding: 0.2rem 0.5rem;
`;

const ReCAPTCHAPlaceholderStyles = css`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  margin: 0 auto;
`;

const SubmitStyles = css`
  grid-column: 1 / 3;
  grid-row: 5 / 6;
  padding: ${({ theme }) => theme.space.quarter};
`;

const ErrorMessageStyles = css`
  display: none;
  font-size: ${({ theme }) => theme.type.small.fontSize};
  color: ${({ theme }) => theme.color.error};
  white-space: normal;
`;

const EmailErrorMessageStyles = css`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

const ReCAPTCHAErrorMessageStyles = css`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
`;

const GenericErrorMessageStyles = css`
  grid-column: 1 / 3;
  /* last row before submit button */
  grid-row: 4 / 5;
`;

const ThanksStyles = css`
  p {
    text-align: left;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export {
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
};

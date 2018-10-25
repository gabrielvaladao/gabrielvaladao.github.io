import React from 'react';
import styled from 'styled-components';
//
import H2 from '../elements/H2';
import BodyText from '../elements/BodyText';
import InputText from './InputText';
import Button from './Button';

export default () => (
  <form action="">
    <H2>Sign up</H2>
    <BodyText>
      Be the first to hear about upcoming gigs and music.
    </BodyText>

    {/* ESLint expects an input element instead of an InputText component which returns an input */}
    {/* eslint-disable-next-line */}
    <label htmlFor="input-email">
      Email:{' '}
      <InputText type="email" value="" id="input-email" placeholder="email address" required />
    </label>

    {/* Mailchimp spam decoy. Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
      <input type="text" name="b_4075336e0f256e14e1da4ad74_cea2bf53fe" tabIndex="-1" value="" />
    </div>

    <div className="clear">
      <Button type="submit" value="Sign up" name="sign-up" id="mc-embedded-subscribe" className="button" />
    </div>
  </form>
);

import React from 'react';
import styled from 'styled-components';

const Callout = styled.p`
  font-size: 1em;
`;

export default () => (

  <div id="mc_embed_signup">
    <form action="https://fb.us16.list-manage.com/subscribe/post?u=4075336e0f256e14e1da4ad74&amp;id=cea2bf53fe" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
      <div id="mc_embed_signup_scroll">
        <h2>Sign up</h2>
        <Callout>
          Be the first to hear about upcoming gigs and music.
        </Callout>
        <label htmlFor="mce-EMAIL">
          Email:{' '}
          <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
        </label>

        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_4075336e0f256e14e1da4ad74_cea2bf53fe" tabIndex="-1" value="" />
        </div>
        <div className="clear">
          <input type="submit" value="Sign up" name="sign-up" id="mc-embedded-subscribe" className="button" />
        </div>
      </div>
    </form>
  </div>
);

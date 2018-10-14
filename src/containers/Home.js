import React from 'react';
import { withSiteData } from 'react-static';

import SiteTitle from '../components/SiteTitle';

export default withSiteData(() => (
  <div>
    <span className="site-tagline">Enter the...</span>
    <SiteTitle />
  </div>
));

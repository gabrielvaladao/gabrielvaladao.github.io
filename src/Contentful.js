/*
  This file gets data from app.contentful.com and exports a component.
  This component returns a single object, which contains all the data
  that needs to be publicly available at each route, e.g:
  publicSiteData { home, shows, music, bio, press, contact }

  All routes will contain their own fields (e.g. title).
  Some routes will also contain collections of other content types, e.g:
  - Shows contains show entries
  - Music contains track entries
  - Press contains pressRelease entries

  Here's an example of the expected data format for each:
  
  publicSiteData {
    bio: {title, tagLine, callout, body},
    music: {title, body, tracks[
      {title, releaseDate, soundcloudUrl, beatportUrl}, ...tracks
    ]},
    ...routes
  }
*/

const c = require('contentful');

const Contentful = () => {
  const publicSiteData = {};

  /* Identify the relevant Contentful data set and authenticate */

  /* A space is like a project folder in Contentful terms. */
  const SPACE_ID = 'y6491y2bhr47';
  /* Content Delivery API (CDA) token for this space */
  const ACCESS_TOKEN = '3af466809b9de4c5c65bcd5efeaaa66e4f57b461e3320d8ae1620985ae184b41';
  /* Space ID and access token are available at app.contentful.com */

  const client = c.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  });

  /* Get all data for this space as per Contentful's boilerplate */

  /* Populate public data */

  /* TODO: WIP - just testing */
  // publicSiteData.bio = { title: 'wheep', tagLine: 'whoa' };

  return publicSiteData;
};

export default Contentful();

/**
 * The following parameters must be preconfigured in the Contentful web app:
 *
 * - space: A space is like a project folder in Contentful terms.
 * - accessToken:  The Content Delivery API (CDA) key for this space.
 * - Optionally choose another environment (e.g. dev, staging).
 *  If no environment is set, Contentful will default to 'master'.
 *  See Contentful docs for a full list of createClient() params:
 *  https://contentful.github.io/contentful.js/contentful/latest/contentful.html#.createClient
 */

const clientConfig = {
  space: 'y6491y2bhr47',
  accessToken: '3af466809b9de4c5c65bcd5efeaaa66e4f57b461e3320d8ae1620985ae184b41',
  environment: 'master'
};

export default clientConfig;

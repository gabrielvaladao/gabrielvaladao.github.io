import React from 'react';
import axios from 'axios';
import Contentful from './src/Contentful';

export default {
  siteRoot: 'https://adoring-galileo-1070ff.netlify.com/',
  stagingSiteRoot: 'https://elated-leavitt-544c11.netlify.com/',
  /**
   *  Enable bundleAnalyzer to check the pkg size footprint
   *  of a production/staging build
   */
  // bundleAnalyzer: true,

  plugins: ['react-static-plugin-styled-components'],
  getSiteData: () => ({
    title: 'Labrysinthe'
  }),
  getRoutes: async () => {
    const { data: shows } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data: tracks } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data: pressReleases } = await axios.get('https://jsonplaceholder.typicode.com/posts');

    /* TODO remove debugging log */
    console.log(Contentful.bio);

    return [
      {
        path: '/',
        component: 'src/containers/Home'
      },
      {
        path: '/shows',
        component: 'src/containers/Shows',
        getData: () => ({
          shows
        }),
        children: shows.map(show => ({
          path: `/show/${show.id}`,
          component: 'src/components/Show',
          getData: () => ({
            show
          })
        }))
      },
      {
        path: '/music',
        component: 'src/containers/Music',
        getData: () => ({
          tracks
        }),
        children: tracks.map(track => ({
          path: `/track/${track.id}`,
          component: 'src/components/Track',
          getData: () => ({
            track
          })
        }))
      },
      {
        path: '/bio',
        component: 'src/containers/Bio'
      },
      {
        path: '/newsletter',
        component: 'src/containers/Newsletter'
      },
      {
        path: '/contact',
        component: 'src/containers/Contact'
      },
      {
        is404: true,
        component: 'src/containers/404'
      }
    ];
  },
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        <title>Labrysinthe</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
        {/* Facebook + Twitter thumbnails */}
        <meta property="og:title" content="Labrysinthe" />
        <meta property="og:description" content="Fire Loves Sugar &mdash; New EP coming soon!" />
        <meta
          property="og:image"
          content="https://adoring-galileo-1070ff.netlify.com/website-thumbnail.png"
        />
        <meta property="og:url" content="https://adoring-galileo-1070ff.netlify.com/" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicons */}

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#08000F" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#fbf4ff" />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
};

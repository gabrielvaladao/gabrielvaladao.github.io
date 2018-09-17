import axios from 'axios';
import Contentful from './src/Contentful';

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: shows } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    const { data: tracks } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    const { data: pressReleases } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );

    /* TODO remove debugging log */
    console.log(Contentful.bio);

    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/shows',
        component: 'src/containers/Shows',
        getData: () => ({
          shows,
        }),
        children: shows.map(show => ({
          path: `/show/${show.id}`,
          component: 'src/containers/Show',
          getData: () => ({
            show,
          }),
        })),
      },
      {
        path: '/music',
        component: 'src/containers/Music',
        getData: () => ({
          tracks,
        }),
        children: tracks.map(track => ({
          path: `/track/${track.id}`,
          component: 'src/containers/Track',
          getData: () => ({
            track,
          }),
        })),
      },
      {
        path: '/bio',
        component: 'src/containers/Bio',
      },
      {
        path: '/press',
        component: 'src/containers/Press',
        getData: () => ({
          pressReleases,
        }),
        children: pressReleases.map(pressRelease => ({
          path: `/pressRelease/${pressRelease.id}`,
          component: 'src/containers/PressRelease',
          getData: () => ({
            pressRelease,
          }),
        })),
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ];
  },
};

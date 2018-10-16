import React from 'react';
import { withRouteData } from 'react-static';
import Show from '../components/Show';

export default withRouteData(() => (
  <div>
    <h1>Shows</h1>
    <br />
    {/* Show this conditionally:
    <section aria-labelledby="shows-upcoming">
      <h2 id="shows-upcoming">Upcoming shows</h2>
      <ul>
        <li></li>
      </ul>
    </section> */}
    <section aria-labelledby="shows-previous">
      <h2 id="shows-previous">Previous shows</h2>
      <ul>
        <li>
          <Show
            title="Electronic Events Experience Exchange (EEEE&nbsp;Party!!!!)"
            host={{
              name: 'Fractal Portal',
              url: 'http://www.fractalportal.com/',
            }}
            when={{
              start: {
                day: 'Saturday',
                date: '4 NOV',
                year: '2017',
              },
            }}
            venue={{
              name: 'Velvet Monkeys Club',
              url: 'https://www.facebook.com/Velvet-Monkey-erlebnisgastronomie-1823655237858506/',
              address: 'Herzbergstraße 53b, 10365 Berlin',
              gMapsUrl: 'https://goo.gl/maps/CkDUTdspCkL2',
            }}
            fbEventUrl="https://www.facebook.com/events/351769011903873/"
          />
        </li>
      </ul>
    </section>
  </div>
));

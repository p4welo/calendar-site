import React from 'react';
import { Link } from 'gatsby';

import { Event } from '@app/model';

import { EventTile } from '../event-tile';

interface PromotedListProps {
  events: Event[]
}

export const PromotedList = ({ events }: PromotedListProps) => {

  const EventList = () => events.map((event, i) => <EventTile event={ event } key={ i } />)

  return events.length > 0 && (
      <div className="mb-20">
        <h1>
          <span className="mr-20">Proponowane wydarzenia</span>
          <Link className="text-semibold text-indigo"
                id="see-all-top"
                style={ { fontSize: '14px' } }
                to="/upcoming">Zobacz wszystkie</Link>
        </h1>

        <div className="row" style={ { display: `flex`, flexWrap: `wrap` } }>
          <EventList/>
        </div>
        {/*<div className="text-center">*/}
        {/*  <Link to="/upcoming"*/}
        {/*        id="see-all-bottom"*/}
        {/*        style={ { padding: '9px 40px' } }*/}
        {/*        className="btn bg-indigo-100 text-indigo">Zobacz wszystkie</Link>*/}
        {/*</div>*/}
      </div>
  )
}

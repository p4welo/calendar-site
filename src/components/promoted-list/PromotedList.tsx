import React from 'react';
import { Link } from 'gatsby';

import { Event } from '@app/model';

import { EventTile } from '../event-tile';

interface PromotedListProps {
  events: Event[]
}

export const PromotedList = ({ events }: PromotedListProps) => {

  const EventList = () => (
      <>
        { events.map((event, i) => <EventTile event={ event } key={ i }/>) }
      </>
  )

  if (events.length === 0) {
    return <span/>
  }

  return (
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
      </div>
  )
}

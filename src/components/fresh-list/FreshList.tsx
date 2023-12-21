import { EventTile } from '@app/components';
import { Event } from '@app/model';
import { Link } from 'gatsby';
import React, { PureComponent } from 'react';

interface FreshListProps {
  events: Event[]
}

export const FreshList = ({ events }: FreshListProps) => {
  if (events.length === 0) {
    return <div/>
  }
  return (
      <>
        <h1>
          <span className="mr-20">Ostatnio dodane</span>
          <Link className="text-semibold text-indigo"
                id="see-all-top"
                style={ { fontSize: '14px' } }
                to="/upcoming">Zobacz wszystkie</Link>
        </h1>

        <div className="row" style={ { display: `flex`, flexWrap: `wrap` } }>
          {
            events.map((event, i) => <EventTile event={ event } key={ i }/>)
          }
        </div>
      </>
  )
}

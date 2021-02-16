import { EventTile } from '@app/components';
import { Event } from '@app/model';
import { Link } from 'gatsby';
import React, { PureComponent } from 'react';

interface FreshListProps {
  events: Event[]
}

export class FreshList extends PureComponent<FreshListProps> {
  render() {
    return this.props.events.length > 0 ?
        (
            <>
              <h1>
                Ostatnio dodane
                <Link className="ml-20 text-semibold"
                    id='see-all-top'
                    style={{ fontSize: '14px' }}
                    to='/upcoming'>Zobacz wszystkie</Link>
              </h1>

              <div className="row" style={{ display: `flex`, flexWrap: `wrap` }}>
                {
                  this.props.events.map((event, i) => <EventTile event={event} key={i}></EventTile>)
                }
              </div>
            </>
        ) :
        <span></span>;
  }
}

import React, { Component } from 'react';
import { Link } from 'gatsby';

import { Event } from '@app/model';

import { EventTile} from '../event-tile';

interface PromotedListProps {
  events: Event[]
}
export class PromotedList extends Component<PromotedListProps> {
  render() {
    return (
        <>
          <h1>
            Proponowane wydarzenia
            <Link className="ml-20 text-semibold"
                id='see-all-top'
                style={{ fontSize: '14px'}}
                to='/upcoming'>Zobacz wszystkie</Link>
          </h1>

          <div className="row" style={{display: `flex`, flexWrap: `wrap`}}>
            {
              this.props.events.map((event, i) => <EventTile event={event} key={i}></EventTile>)
            }
          </div>
          <div className="text-center">
            <Link to='/upcoming'
                id='see-all-bottom'
                style={{ padding: '9px 40px' }}
                className='btn btn-default btn-raised mb-20'>Zobacz wszystkie</Link>
          </div>
        </>
    );
  }
}

import React, { Component } from 'react';

import { Event } from '@app/model';
import { formatHeaderFromKey } from '@app/utils/date-utils';

import { EventTile } from '../event-tile';

interface MonthSectionProps {
  header: string;
  events: Event[];
}
export class MonthSection extends Component<MonthSectionProps> {
  render() {
    const sectionKey = this.props.header;
    const events = this.props.events;

    return (
        <>
          <div className="text-center content-group text-muted content-divider">
            <span className="pt-10 pb-10">{formatHeaderFromKey(sectionKey)}</span>
          </div>
          <div className="row pt-20" style={{ display: `flex`, flexWrap: `wrap` }}>
            {
              this.props.events.map((event, i) => <EventTile event={event} key={i}></EventTile>)
            }
          </div>
        </>
    );
  }
}

import React from 'react';
import { formatHeaderFromKey } from '../../utils/date-utils';
import EventTile from './event-tile';

class MonthSection extends React.Component {
  render() {
    const sectionKey = this.props.header;
    const events = this.props.events;

    return (
        <>
          {/*<h6 className='text-semibold no-margin-top'>{ formatHeaderFromKey(sectionKey) }</h6>*/}
          <div className="text-center content-group text-muted content-divider">
            <span className="pt-10 pb-10">{ formatHeaderFromKey(sectionKey) }</span>
          </div>
          <div className="row pt-20" style={{display: `flex`, flexWrap: `wrap`}}>
            {
              this.props.events.map((event, i) => <EventTile event={event} key={i}></EventTile>)
            }
          </div>
        </>
    );
  }
}
export default MonthSection;
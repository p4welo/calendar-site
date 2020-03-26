import React from 'react';
import EventTile from './event-tile';

class PromotedList extends React.Component {
  render() {
    return (
        <>
          <h3>Proponowane wydarzenia</h3>
          <div className="row" style={{display: `flex`, flexWrap: `wrap`}}>
            {
              this.props.events.map((event, i) => <EventTile event={event} key={i}></EventTile>)
            }
          </div>
        </>
    );
  }
}

export default PromotedList;
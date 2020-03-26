import React from 'react';
import { formatHeaderFromKey, groupByMonth } from '../../utils/date-utils';
import MonthSection from './month-section';

class EventList extends React.Component {
  render() {
    const groupped = groupByMonth(this.props.events);

    return (
        <div>
          <h3>Nadchodzące wydarzenia</h3>
          {
            Object.keys(groupped).map((key) =>
                <MonthSection events={ groupped[key] } header={ key }></MonthSection>
            )
          }
        </div>
    );
  }
}

export default EventList;
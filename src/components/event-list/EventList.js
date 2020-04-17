import React, { Component } from 'react';
import { groupByMonth } from '../../utils/date-utils';
import { MonthSection } from '../month-section';

export class EventList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filtered: this.props.events
    };
  }

  getFilteredEventsForText(text = '') {
    return this.props.events
        .filter(event => event.title.toLowerCase().includes(text.toLowerCase()));
  }

  filterEvents(filter = {}) {
    const { title } = filter;
    if (title) {
      this.setState({
        filtered: this.getFilteredEventsForText(title)
      });
    }
  }

  render() {
    const groupped = groupByMonth(this.state.filtered);

    return (
        <div>
          <h3>Nadchodzące wydarzenia</h3>
          {/*<FilterArea filterChange={this.filterEvents.bind(this)}></FilterArea>*/}

          {
            Object.keys(groupped).map((key, i) =>
                <MonthSection events={groupped[key]} header={key} key={i}></MonthSection>
            )
          }
        </div>
    );
  }
}

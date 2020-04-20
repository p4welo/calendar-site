import React, { Component } from 'react';
import { groupByMonth } from '@app/utils/date-utils';
import { MonthSection } from '@app/components/month-section';
import { Event } from '@app/model';

interface EventListProps {
  events: Event[];
}

interface EventListState {
  filtered: Event[];
}

interface EventFilter {
  title?: string;
}
export class EventList extends Component<EventListProps, EventListState> {

  initialState: EventListState = {
    filtered: this.props.events
  };

  state: EventListState = this.initialState;

  getFilteredEventsForText(text = '') {
    return this.props.events
        .filter(event => event.title.toLowerCase().includes(text.toLowerCase()));
  }

  filterEvents(filter: EventFilter = {}) {
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
          <p></p>
          {/*<FilterArea filterChange={this.filterEvents.bind(this)}></FilterArea>*/}

          {
            Object.keys(groupped).map((key, i) =>
                <MonthSection events={groupped[key]} header={key} key={i}/>
            )
          }
        </div>
    );
  }
}

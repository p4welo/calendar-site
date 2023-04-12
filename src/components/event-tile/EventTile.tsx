import React, { Component } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby'

import { Event } from '@app/model';
import { formatDate } from '@app/utils/date-utils';
import { Ribbon } from '../ribbon';
import './EventTile.scss';

interface EventTileProps {
  event: Event;
}

export class EventTile extends Component<EventTileProps, any> {

  date(event: Event) {
    const from = formatDate(event.dateFrom);
    const to = formatDate(event.dateTo);
    if (event.multiday) {
      return <span>{ from } - { to }</span>
    }
    return <span>{ from }</span>
  }

  new(event: Event) {
    return event.new && <span className="label bg-success text-uppercase event-tile__label-new">Nowość</span>
  }

  cancelled(event: Event) {
    return event.cancelled && (
        <div className="text-center btn-block" style={ { position: 'absolute', top: '50%' } }>
          <span className="label label-danger label-cancelled">Odwołany</span>
        </div>
    )
  }

  thumbnailClass(event: Event) {
    return `thumbnail btn-raised mb-20 ${ !!event.cancelled ? 'thumbnail-cancelled' : '' }`;
  }

  render() {
    const { event } = this.props;
    return (
        <div className="col-lg-4 col-sm-6 col-xs-12"
             style={ { display: `flex`, flexDirection: `column`, marginBottom: `50px` } }>
          <Link to={ event.path }
                className={ `event-tile-link ${ event.promoted ? 'promoted-event-tile-link' : '' }` }>
            <div
                className={ this.thumbnailClass(event) }
                style={ { padding: '0', height: 'auto', transition: 'all 150ms ease-in-out', position: 'relative' } }>
              <div className="thumb" style={ { height: `250px` } }>
                <Img className="thumb-image"
                     fluid={ event.image }
                     alt={ event.title }/>
                { this.cancelled(event) }
              </div>
              { event.promoted && <Ribbon/> }
            </div>
            <span className="text-indigo text-semibold mb-5">
            { this.date(event) }
          </span>
            <h6 className="text-semibold no-margin text-uppercase" style={ { color: '#333' } }>
              { event.title }
              { this.new(event) }
            </h6>
            <small className="display-block" style={ { color: '#999' } }>
              { event.city }
            </small>
          </Link>
        </div>

    );
  }
}

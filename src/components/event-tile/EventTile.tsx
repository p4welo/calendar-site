import React, { Component } from 'react';
import Img from 'gatsby-image';
import { Link } from "gatsby"

import { Event } from '@app/model';
import { formatDate } from '@app/utils/date-utils';
import './EventTile.scss';

interface EventTileProps {
  event: Event;
}
export class EventTile extends Component<EventTileProps> {

  star(event: Event) {
    return (
        <p>
          <span className='icon-star-full2'></span>
        </p>
    )
  }

  date(event: Event) {
    const from = formatDate(event.dateFrom);
    const to = formatDate(event.dateTo);
    if (event.multiday) {
      return <span>{from} - {to}</span>
    }
    return <span>{from}</span>
  }

  new(event: Event) {
    return event.new ?
        <span className="label bg-success text-uppercase event-tile__label-new">Nowość</span> :
        <span></span>
  }

  ribbon(event: Event) {
    return event.promoted ?
        <div className="ribbon-container" style={{ right: '9px' }}>
          <div className="ribbon bg-primary">Polecamy</div>
        </div> :
        <span></span>;
  }

  cancelled(event: Event) {
    if (event.cancelled) {
      return (
          <div className='text-center btn-block' style={{ position: 'absolute', top: '50%' }}>
            <span className="label label-danger label-cancelled">Odwołany</span>
          </div>
      );
    } else {
      return <span></span>
    }
  }

  thumbnailClass(event: Event) {
    return `thumbnail btn-raised mb-20 ${!!event.cancelled ? 'thumbnail-cancelled' : ''}`;
  }

  render() {
    const { event } = this.props;
    return (
        <div className="col-lg-4 col-sm-6 col-xs-12"
            style={{ display: `flex`, flexDirection: `column`, marginBottom: `50px` }}>
          <Link to={event.path}
              className={`event-tile-link ${event.promoted ? 'promoted-event-tile-link' : ''}`}>
            <div
                className={this.thumbnailClass(event)}
                style={{ padding: '0', height: 'auto', transition: 'all 150ms ease-in-out' }}>
              <div className="thumb" style={{ height: `250px` }}>
                <Img className='thumb-image'
                    fluid={event.image}
                    alt={event.title}/>
                {/*<div className="caption-overflow">*/}
                {/*  <span>*/}
                {/*    <a href style={{ borderRadius: '50%', width: '42px', height: '42px' }}*/}
                {/*        className="btn btn-flat border-white text-white btn-rounded btn-icon legitRipple">*/}
                {/*      <i className="fas fa-arrow-up"></i>*/}
                {/*    </a>*/}
                {/*  </span>*/}
                {/*</div>*/}
                {this.cancelled(event)}
              </div>
              {this.ribbon(event)}
            </div>
            <span className="text-primary text-semibold mb-5">
            {this.date(event)}
          </span>
            <h6 className="text-semibold no-margin text-uppercase" style={{ color: '#333' }}>
              {event.title}
              {this.new(event)}
            </h6>
            <small className="display-block" style={{ color: '#999' }}>
              {event.city}
            </small>
          </Link>
        </div>

    );
  }
}

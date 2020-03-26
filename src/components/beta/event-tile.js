import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { formatDate } from '../../utils/date-utils';

class EventTile extends React.Component {

  star(event) {
    return (
        <p>
          <span className='icon-star-full2'></span>
        </p>
    )
  }

  date(event) {
    const from = formatDate(event.dateFrom);
    const to = formatDate(event.dateTo);
    if (event.multiday) {
      return <span>{ from } - { to }</span>
    }
    return <span>{ from }</span>
  }

// { event.dateFrom }
// { event.multiday && <span> - {event.dateTo}</span> }

  new(event) {
    return event.new ?
        <span className="label bg-success text-uppercase event-tile__label-new">Nowość</span> :
        <span></span>
  }

  ribbon(event) {
    return event.promoted ?
        <div className="ribbon-container" style={{ right: '9px' }}>
          <div className="ribbon bg-primary">Polecamy</div>
          {/*<div className="ribbon bg-indigo-400">Polecamy</div>*/}
        </div> :
        <span></span>;
  }

  render() {
    const { event } = this.props;
    return (
        <div className="col-lg-4 col-sm-6 col-xs-12"
            style={{ display: `flex`, flexDirection: `column`, marginBottom: `50px` }}>
          <Link to={event.path}>
            <div
                className='thumbnail btn-raised mb-20'
                style={{ padding: '0', height: 'auto', transition: 'all 150ms ease-in-out' }}>
              <div className="thumb" style={{ height: `250px` }}>
                <Img className='thumb-image'
                    fluid={event.image}
                    alt={event.title}/>
                <div className="caption-overflow">
                  <span>
                    <a href style={{ borderRadius: '50%', width: '42px', height: '42px' }}
                        className="btn btn-flat border-white text-white btn-rounded btn-icon legitRipple">
                      <i className="fas fa-arrow-up"></i>
                    </a>
                  </span>
                </div>
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

export default EventTile;
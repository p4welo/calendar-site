import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { formatDate, isNew } from '../utils/date-utils';

const Component = React.Component;

class EventTile extends Component {
  render() {
    const data = this.props.event;
    const event = {
      new: isNew(data.frontmatter.date),
      date: data.frontmatter.date,
      promoted: data.frontmatter.promoted,
      image: data.frontmatter.image.childImageSharp.fluid,
      title: data.frontmatter.title,
      dateFrom: formatDate(data.frontmatter.dateFrom),
      dateTo: formatDate(data.frontmatter.dateTo),
      multiday: data.frontmatter.dateTo !== data.frontmatter.dateFrom,
      path: data.frontmatter.path,
      city: data.frontmatter.city
    };

    function Ribbon() {
      return event.promoted ?
          <div className="ribbon-container">
            <div className="ribbon bg-indigo-400">Polecamy</div>
          </div> : <span></span>;
    }

    return (
        <div className="col-xs-12 col-sm-6 col-md-4 event-container">
          <div className="thumbnail">
            <div className="thumb">
              <Img fluid={event.image}
                  className="event-tile__image"
                  alt={event.title}/>
              <span className="label label-striped label-date">
                { event.dateFrom }
                { event.multiday && <span> - {event.dateTo}</span> }
              </span>
            </div>

            <div className="caption">
              <h6 className="text-semibold no-margin text-uppercase">
                {event.title}
                {
                  event.new &&
                  <span
                      className="label bg-success text-uppercase event-tile__label-new">Nowość</span>
                }
              </h6>
              <small className="display-block event-tile__city">
                {event.city}
              </small>
              <Link to={event.path}
                  className='event-link promoted-event-link btn btn-default'>
                Szczegóły
              </Link>
            </div>

            <Ribbon/>
          </div>
        </div>
    );
  }
}


export default EventTile;
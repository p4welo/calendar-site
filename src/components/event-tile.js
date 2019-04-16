import React from 'react';
import Img from 'gatsby-image';
import moment from 'moment';
import { Link } from 'gatsby';

const Component = React.Component;

class EventTile extends Component {
  render() {
    const data = this.props.event;
    const event = {
      promoted: data.frontmatter.promoted,
      image: data.frontmatter.image.childImageSharp.fluid,
      title: data.frontmatter.title,
      dateFrom: moment(data.frontmatter.dateFrom).format("DD/MM/YYYY"),
      dateTo: moment(data.frontmatter.dateTo).format("DD/MM/YYYY"),
      multiday: data.frontmatter.dateTo !== data.frontmatter.dateFrom,
      path: data.frontmatter.path,
      city: data.frontmatter.city
    };

    return (
        <div className="col-xs-12 col-sm-6 col-md-4 event-container">
          <div className="thumbnail">
            {event.promoted &&
            <div className="ribbon-container">
              <div className="ribbon bg-indigo-400">Polecamy</div>
            </div>
            }
            <div className="thumb">
              <Img fluid={event.image}
                  className="event-tile__image"
                  alt={event.title}/>
              <span className="label label-striped label-date">
                {event.dateFrom}
                {event.multiday && <span> - {event.dateTo}</span>}
              </span>
            </div>

            <div className="caption">
              <h6 className="text-semibold no-margin text-uppercase">
                {event.title}
              </h6>
              <small className="display-block event-tile__city">
                {event.city}
              </small>
              <Link to={event.path}
                  className='event-link promoted-event-link btn btn-default'>
                Szczegóły
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

export default EventTile;
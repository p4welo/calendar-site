import React from 'react';
import { Navbar, Seo } from '../components';
import { graphql } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import { formatDate, isNowOrFuture } from '../utils/date-utils';
import banner from '../images/banner-karta.jpg';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    const isPast = ({ node }) => !isNowOrFuture(node.frontmatter.dateTo);
    this.state = {
      events: props.data.allMarkdownRemark.edges.filter(isPast).map((event) => {
        const data = event.node.frontmatter;
        return {
          title: data.title,
          dateFrom: formatDate(data.dateFrom),
          dateTo: formatDate(data.dateTo),
          multiday: data.dateTo !== data.dateFrom,
          path: data.path,
          city: data.city
        };
      })
    };
  }

  render() {
    return (
        <>
          <Seo title='Archiwum wydarzeń'/>
          <Navbar/>
          <div className='container'>
            <div className='karta-zgloszen-banner'>
              <a href='https://kartazgloszen.pl'
                  rel="noopener noreferrer"
                  target='_blank'>
                <img src={banner}/>
              </a>
            </div>
            <div className='page-title'>
              <h4>Archiwum wydarzeń</h4>
            </div>

            {
              this.state.events.map((event, i) => (
                  <Link to={event.path} key={i}>
                    <div className='panel panel-flat mb-5 no-border-radius btn-raised' key={i}>
                      <div className='panel-body'>
                        <div>
                          {event.dateFrom}
                        </div>
                        <div>
                          <strong>{event.title}</strong>
                          <p className='no-margin text-muted'>{event.city}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
              ))
            }
          </div>
        </>
    )
  }
}

export default ArchivePage;

export const query = graphql`
    query ArchiveListQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___dateFrom] }) {
            edges {
                node {
                    frontmatter {
                        path
                        promoted
                        visible
                        dateFrom
                        dateTo
                        title
                        city
                        image {
                            childImageSharp {
                                resize(width: 1500, height: 1500) {
                                    src
                                }
                                fluid(maxWidth: 786) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

import React from 'react';
import Navbar from '../components/navbar';
import { graphql, Link } from 'gatsby';
import { formatDate, isNowOrFuture } from '../utils/date-utils';
import SEO from '../components/seo';
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
          <SEO title='Archiwum wydarzeń'/>
          <Navbar/>
          <div className='container'>
            <div className='karta-zgloszen-banner'>
              <a href='https://kartazgloszen.pl' target='_blank'>
                <img src={banner}/>
              </a>
            </div>
            <div className='page-title'>
              <h4>Archiwum wydarzeń</h4>
            </div>

            <div className='panel panel-flat table-responsive'>
              <table className='table'>
                <tbody>
                {
                  this.state.events.map((event, i) => (
                      <tr key={i}>
                        <td>{event.dateFrom}</td>
                        <td style={{ textTransform: `uppercase` }}>
                          <Link to={event.path}>{event.title}</Link>
                        </td>
                        <td>{event.city}</td>
                      </tr>
                  ))
                }
                </tbody>
              </table>
            </div>
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
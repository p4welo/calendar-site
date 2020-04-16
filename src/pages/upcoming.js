import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/seo';
import Navbar from '../components/beta/navbar';
import { isFuture, isVisible, mapToEventEntities } from '../utils/event-utils';
import EventList from '../components/beta/event-list';
import FilterArea from '../components/beta/filter-area';
import Footer from '../components/beta/footer';

const IncomingPage = ({ data }) => {
  const eventList = mapToEventEntities(data);

  return (
      <>
        <SEO title={`Zawody taneczne`}/>
        <Navbar></Navbar>
        <div className='page-container'>
          <div className="page-content">
            <div className="content-wrapper">
              <div className="container">
                <EventList events={
                  eventList
                      .filter(isVisible)
                      .filter(isFuture)
                }></EventList>
              </div>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </>
  );
};
export default IncomingPage;

export const query = graphql`
    {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___dateFrom] }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    frontmatter {
                        path
                        date
                        promoted
                        cancelled
                        visible
                        dateFrom
                        dateTo
                        title
                        city
                        image {
                            childImageSharp {
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
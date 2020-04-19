import React from 'react';
import { graphql } from 'gatsby';

import { isFuture, isVisible, mapToEventEntities } from '@app/utils/event-utils';
import { EventList, Footer, Navbar, Seo } from '@app/components';

const IncomingPage = ({ data }: any) => {
  const eventList = mapToEventEntities(data);

  return (
      <>
        <Seo title={`Zawody taneczne`}/>
        <Navbar/>
        <div className='page-container'>
          <div className="page-content">
            <div className="content-wrapper">
              <div className="container">
                <EventList events={
                  eventList
                      .filter(isVisible)
                      .filter(isFuture)
                }/>
              </div>
              <Footer/>
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

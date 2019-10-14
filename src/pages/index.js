import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HomeHeader from '../components/home/home-header';
import SEO from '../components/seo';
import EventTile from '../components/event-tile';
import SocialButtons from '../components/social-buttons';
import { Link } from '@reach/router';
import { isNowOrFuture } from '../utils/date-utils';

const IndexPage = ({ data }) => {
  const eventList = data.allMarkdownRemark.edges;
  const isPromoted = ({ node }) => {
    const { visible, promoted } = node.frontmatter;
    return visible && promoted;
  };
  const isFuture = ({ node }) => isNowOrFuture(node.frontmatter.dateTo);

  return (
      <div className='home-page'>
        <SEO title='Strona główna'/>
        <HomeHeader eventAmount={eventList.length}
            futureAmount={eventList.filter(isFuture).length}/>

        <Layout>

          <h3 style={{marginTop: '40px'}} id='main'>Proponowane wydarzenia</h3>
          <div className="row home-page__event-row">
            {
              eventList
                  .filter(isFuture)
                  .filter(isPromoted)
                  .map(({ node }, i) => <EventTile event={node} key={i}/>)
            }
          </div>

          <div style={{ display: `flex`, justifyContent: `center` }}>
            <div className="well well-white text-center">
              <SocialButtons/>
            </div>
          </div>

          <h3 style={{marginTop: '40px'}}>Nadchodzące wydarzenia</h3>
          <div className='row home-page__event-row'>
            {
              eventList
                  .filter(isFuture)
                  .map(({ node }, i) => <EventTile event={node} key={i}/>)
            }
          </div>

          <Link to='/archive' className='btn btn-default btn-raised btn-go-to-archive'
              style={{ marginBottom: `20px` }}>Przejdź do archiwum wydarzeń</Link>
        </Layout>
      </div>
  )
};


export default IndexPage;

export const query = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___dateFrom] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            path
            date
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
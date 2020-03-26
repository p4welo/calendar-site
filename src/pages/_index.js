import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HomeHeader from '../components/home/home-header';
import SEO from '../components/seo';
import EventTile from '../components/event-tile';
import SocialButtons from '../components/social-buttons';
import { Link } from '@reach/router';
import { isNowOrFuture } from '../utils/date-utils';
import banner from '../images/baner-percent.jpg';
import bannerMobile from '../images/baner-mobile.jpg';

const IndexPage = ({ data }) => {
  const eventList = data.allMarkdownRemark.edges;
  const isPromoted = ({ node }) => {
    return node.frontmatter.promoted;
  };
  const isVisible = ({ node }) => node.frontmatter.visible;
  const isFuture = ({ node }) => isNowOrFuture(node.frontmatter.dateTo);

  return (
      <div className='home-page'>
        <SEO title='Strona główna'/>
        <HomeHeader eventAmount={eventList.length}
            futureAmount={eventList.filter(isVisible).filter(isFuture).length}/>

        <Layout>
          <div style={{ display: `flex`, justifyContent: `center`, marginTop: '30px' }}>
            <div className="well well-white text-center">
              <SocialButtons/>
            </div>
          </div>

          <h3 style={{marginTop: '40px'}} id='main'>Proponowane wydarzenia</h3>
          <div className="row home-page__event-row mb-20">
            {
              eventList
                  .filter(isVisible)
                  .filter(isFuture)
                  .filter(isPromoted)
                  .map(({ node }, i) => <EventTile event={node} key={i}/>)
            }
          </div>

          <div className='karta-zgloszen-banner'>
            <a href='https://kartazgloszen.pl' target='_blank' className='karta-zgloszen-banner-link2 banner-sm'>
              <img src={banner} className='' />
            </a>
            <a href='https://kartazgloszen.pl' target='_blank' className='karta-zgloszen-banner-link2 banner-xs'>
              <img src={bannerMobile} className='' />
            </a>
          </div>

          <h3 style={{marginTop: '40px'}}>Nadchodzące wydarzenia</h3>
          <div className='row home-page__event-row'>
            {
              eventList
                  .filter(isVisible)
                  .filter(isFuture)
                  .map(({ node }, i) => <EventTile event={node} key={i}/>)
            }
          </div>

          <Link to='/archive' className='btn btn-default btn-raised btn-go-to-archive'
              style={{ marginBottom: `20px` }}>Przejdź do archiwum wydarzeń</Link>
          <Link to='/beta'>.</Link>
        </Layout>
      </div>
  )
};


export default IndexPage;

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
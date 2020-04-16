import React from 'react';
import { graphql } from 'gatsby';

import Navbar from '../components/beta/navbar';
import Hero from '../components/beta/hero';
import PromotedList from '../components/beta/promoted-list';
import AmountLine from '../components/beta/amount-line';
import SocialSection from '../components/beta/social-section';
import SEO from '../components/seo';
import {
  isFuture,
  isNotCancelled,
  isPromoted,
  isVisible,
  mapToEventEntities
} from '../utils/event-utils';
import Footer from '../components/beta/footer';
import banner from '../images/baner-percent.jpg';
import bannerMobile from '../images/baner-mobile.jpg';

const BetaPage = ({ data }) => {
  const eventList = mapToEventEntities(data);

  return (
      <>
        <SEO title='Strona główna'/>
        <Navbar></Navbar>
        <div className='page-container'>
          <div className="page-content">
            <div className="content-wrapper">
              <Hero />
              <AmountLine futureAmount={
                eventList.filter(isVisible).filter(isFuture).length
              } eventAmount={
                eventList.length
              }></AmountLine>
              <div className="container">
                <SocialSection />

                <PromotedList events={
                  eventList
                      .filter(isVisible)
                      .filter(isNotCancelled)
                      .filter(isFuture)
                      .filter(isPromoted)
                }></PromotedList>

                {/*<EventList events={*/}
                {/*  eventList*/}
                {/*      .filter(isVisible)*/}
                {/*      .filter(isFuture)*/}
                {/*}></EventList>*/}
                {/*<div classNae="text-center">*/}
                {/*  <Link to='/archive'*/}
                {/*      id='index-go-to-archive'*/}
                {/*      className='btn btn-default btn-raised mb-20'>Przejdź do archiwum wydarzeń</Link>*/}
                {/*</div>*/}

                <div className='karta-zgloszen-banner mb-20'>
                  <a href='https://kartazgloszen.pl'
                      id='index-karta-zgloszen-banner-desktop'
                      target='_blank'
                      className='banner-sm'>
                    <img src={banner} className='' />
                  </a>
                  <a href='https://kartazgloszen.pl'
                      target='_blank'
                      id='index-karta-zgloszen-banner-mobile'
                      className='banner-xs'>
                    <img src={bannerMobile} className='' />
                  </a>
                </div>

              </div>
              {/*<AboutUs></AboutUs>*/}
              <Footer></Footer>
            </div>
          </div>

        </div>
      </>
  );
};
export default BetaPage;

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
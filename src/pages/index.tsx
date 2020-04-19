import { Event } from '@model/Event';
import React from 'react';
import { graphql } from 'gatsby';
import { injectIntl, FormattedMessage, changeLocale } from 'gatsby-plugin-intl';


import {
  AmountLine,
  Footer,
  Hero,
  Navbar,
  PromotedList,
  SocialSection,
  Seo,
} from '@components/index';
import {
  isFuture,
  isNotCancelled,
  isPromoted,
  isVisible,
  mapToEventEntities
} from '@utils/event-utils';
// @ts-ignore
import banner from '@images/baner-percent.jpg';
// @ts-ignore
import bannerMobile from '@images/baner-mobile.jpg';

interface IndexPageProps {
  data: any;
  intl: any;
}

const BetaPage = ({ data, intl }: IndexPageProps) => {
  const eventList: Event[] = mapToEventEntities(data);

  return (
      <>
        <Seo title='Strona główna'/>
        {/*<Seo title='Strona główna'/>*/}
        <Navbar/>
        <div className='page-container'>
          <div className="page-content">
            <div className="content-wrapper">
              <Hero/>
              <AmountLine futureAmount={
                eventList.filter(isVisible).filter(isFuture).length
              } eventAmount={
                eventList.length
              }/>
              <div className="container">
                <SocialSection/>

                {/*<FilterView />*/}

                <PromotedList events={
                  eventList
                      .filter(isVisible)
                      .filter(isNotCancelled)
                      .filter(isFuture)
                      .filter(isPromoted)
                }/>

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
                    <img src={banner} className=''/>
                  </a>
                  <a href='https://kartazgloszen.pl'
                      target='_blank'
                      id='index-karta-zgloszen-banner-mobile'
                      className='banner-xs'>
                    <img src={bannerMobile} className=''/>
                  </a>
                </div>

              </div>
              {/*<AboutUs></AboutUs>*/}
              <Footer/>
            </div>
          </div>

        </div>
      </>
  );
};
export default injectIntl(BetaPage);

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
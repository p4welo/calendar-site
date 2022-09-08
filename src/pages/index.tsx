import { FreshList } from '@app/components/fresh-list/FreshList';
import React from 'react';
import { graphql } from 'gatsby';

import { Event } from '@app/model';
import {
  AmountLine,
  Footer,
  Hero,
  Navbar,
  PromotedList,
  SocialSection,
  Seo,
} from '@app/components';
import {
  isFresh,
  isFuture,
  isNotCancelled,
  isPromoted,
  isVisible,
  mapToEventEntities
} from '@app/utils/event-utils';
import banner from '@app/images/baner-percent.jpg';
import bannerMobile from '@app/images/baner-mobile.jpg';
import { OrganizerBlog } from '@app/components/organizer-blog';
import { HolidayBox } from '@app/components/holiday-box';

interface IndexPageProps {
  data: any;
}

const IndexPage = ({ data }: IndexPageProps) => {
  const eventList: Event[] = mapToEventEntities(data);
  const futureEvents = eventList
      .filter(isVisible)
      .filter(isNotCancelled)
      .filter(isFuture);

  return (
      <>
        <Seo title='Strona główna'/>
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

                {/*<Login />*/}

                <HolidayBox events={ futureEvents } />

                <PromotedList events={ futureEvents.filter(isPromoted) }/>
                <FreshList events={ futureEvents.filter(isFresh) }/>

                <OrganizerBlog />

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
                      className='banner-sm '>
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

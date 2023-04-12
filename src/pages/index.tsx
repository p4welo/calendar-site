import { FreshList } from '@app/components/fresh-list/FreshList';
import React from 'react';
import { graphql, Link } from 'gatsby';

import { Event } from '@app/model';
import {
  AmountLine,
  Footer,
  Hero,
  Navbar,
  PromotedList,
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
import { HolidayBox } from '@app/components/holiday-box';
import { NewSocialSection } from '@app/components/new-social-section';

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
        <Seo title="Strona główna"/>
        <Navbar/>
        <div className="page-container">
          <div className="page-content">
            <div className="content-wrapper">
              <Hero/>

              <div className="container">

                <AmountLine futureAmount={ eventList.filter(isVisible).filter(isFuture).length }/>

                <HolidayBox events={ futureEvents }/>

                <PromotedList events={ futureEvents.filter(isPromoted) }/>
                <FreshList events={ futureEvents.filter(isFresh) }/>

                <div style={ { marginBottom: '4rem' } }>
                  <div style={ {
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '100vw',
                    width: '350px',
                    margin: '0 auto'
                  } }>
                    <Link to="/upcoming"
                          className="btn bg-indigo-100 btn-block text-indigo">Zobacz wszystkie</Link>
                    <a href="https://goo.gl/forms/l2Ri9kqlDrPJsUnO2" target="_blank"
                       className="btn bg-indigo btn-block ">Dodaj turniej</a>
                  </div>
                </div>

                <div style={ { marginBottom: '5rem' } }>
                  <NewSocialSection/>
                </div>

                <div>
                  <div className="karta-zgloszen-banner mb-20">
                    <a href="https://kartazgloszen.pl"
                       id="index-karta-zgloszen-banner-desktop"
                       target="_blank"
                       className="banner-sm ">
                      <img src={ banner } className=""/>
                    </a>
                    <a href="https://kartazgloszen.pl"
                       target="_blank"
                       id="index-karta-zgloszen-banner-mobile"
                       className="banner-xs">
                      <img src={ bannerMobile } className=""/>
                    </a>
                  </div>
                </div>

              </div>
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

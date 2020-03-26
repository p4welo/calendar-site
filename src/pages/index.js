import React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/beta/navbar';
import Hero from '../components/beta/hero';
import PromotedList from '../components/beta/promoted-list';
import AmountLine from '../components/beta/amount-line';
import { formatDate, isNew, isNowOrFuture } from '../utils/date-utils';
import EventList from '../components/beta/event-list';
import SocialSection from '../components/beta/social-section';
import { Link } from '@reach/router';

const BetaPage = ({ data }) => {
  const eventList = data.allMarkdownRemark.edges.map(({node}) => {
    return {
      new: isNew(node.frontmatter.date),
      date: node.frontmatter.date,
      promoted: node.frontmatter.promoted,
      visible: node.frontmatter.visible,
      image: node.frontmatter.image.childImageSharp.fluid,
      title: node.frontmatter.title,
      dateFrom: node.frontmatter.dateFrom,
      dateTo: node.frontmatter.dateTo,
      multiday: node.frontmatter.dateTo !== node.frontmatter.dateFrom,
      path: node.frontmatter.path,
      city: node.frontmatter.city
    };
  });
  const isPromoted = (event) => event.promoted;
  const isVisible = (event) => event.visible;
  const isFuture = (visible) => isNowOrFuture(visible.dateTo);



  return (
      <>
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
                <PromotedList events={
                  eventList
                      .filter(isVisible)
                      .filter(isFuture)
                      .filter(isPromoted)
                }></PromotedList>
                <SocialSection />
                <EventList events={
                  eventList
                      .filter(isVisible)
                      .filter(isFuture)
                }></EventList>
                <div className="text-center">
                  <Link to='/archive'
                      id='index-go-to-archive'
                      className='btn btn-default btn-raised mb-20'>Przejdź do archiwum wydarzeń</Link>
                </div>
              </div>
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
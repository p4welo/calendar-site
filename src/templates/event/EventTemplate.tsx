import React from 'react';
import Img from 'gatsby-image';

import { formatDate } from '@app/utils/date-utils';
import { Navbar, Seo } from '@app/components';
import Layout from '@app/components/layout';
import { Ribbon } from '@app/components/ribbon';
import { NewSocialSection } from '@app/components/new-social-section';

interface EventTemplateProps {
  pageContext: { event: any };
  location: any;
  data: any;
}

export default function EventTemplate({ pageContext, location, data }: EventTemplateProps) {
  const { event } = pageContext;
  const eventData = {
    ...event.frontmatter,
    image: undefined,
    thumbnail: event.frontmatter.image.childImageSharp.fluid
  };

  const ContestyButton = () => (
      <div style={ { marginBottom: '20px' } }>
        <a href="https://moja.kartazgloszen.pl"
           rel="dofollow"
           target="_blank"
           className="btn bg-indigo"
           style={ { display: 'inline-flex', padding: '7px 17px 7px 13px', alignItems: 'center' } }>
          <img src="https://moja.kartazgloszen.pl/assets/icons/apple-touch-icon.png" alt=""
               style={ { height: '24px', marginRight: '8px' } }/>
          Wyślij zgłoszenie
        </a>
      </div>
  )

  return (
      <>
        <Seo title={ eventData.title }
             description={ event.excerpt }
             image={ eventData.thumbnail.src }
             url={ location.pathname }/>
        <Navbar />
        <Layout>
          <div className="page-title">
            <button onClick={ () => history.back() }
               className="btn btn-link text-indigo post-back-to-upcoming no-padding-left">
              Powrót
            </button>
          </div>

          <div className="blog-horizontal blog-horizontal-1" style={ { marginBottom: '4rem' } }>
            <div style={ { position: 'relative' } }>
              <div className="thumb"
                   style={ { float: `right`, marginRight: `0`, marginLeft: `10px` } }>
                <Img fluid={ eventData.thumbnail }
                     className="img-responsive"/>
              </div>
              {
                eventData.promoted && <Ribbon/>
              }

            </div>
            <div className="blog-preview">
              <h1 className="panel-title text-semibold">
                { eventData.title }
              </h1>

              <h4 className="text-uppercase">{ eventData.city }</h4>

              <span className="label label-striped label-date" style={ { marginBottom: '20px' } }>
                { formatDate(eventData.dateFrom) }
                {
                  eventData.dateTo !== eventData.dateFrom &&
                  <span> - { formatDate(eventData.dateTo) }</span>
                }
                </span>

              {
                eventData.promoted && <ContestyButton/>
              }

              <div style={ { margin: '3rem 0' } } dangerouslySetInnerHTML={ { __html: event.html } }/>
              <a href={ eventData.link }
                 target="_blank"
                 id="post-goto-organizer-site"
                 rel="noopener noreferrer nofollow"
                 className="btn bg-indigo-100 text-indigo">
                Strona organizatora
              </a>
            </div>
          </div>

          <div style={ { marginBottom: '5rem' } }>
            <NewSocialSection/>
          </div>
        </Layout>
      </>
  )
}

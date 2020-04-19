import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby-plugin-intl';
// @ts-ignore
import { DiscussionEmbed } from 'disqus-react';

import banner from '@app/images/baner-percent.jpg';
import { formatDate } from '@app/utils/date-utils';
import { Navbar, Seo } from '@app/components';
import Layout from '@app/components/layout';


interface EventTemplateProps {
  pageContext: { event: any };
  intl: any;
  location: any;
  data: any;
}

export default function EventTemplate({ pageContext, intl, location, data }: EventTemplateProps) {
  const { event } = pageContext;
  const eventData = {
    ...event.frontmatter,
    image: undefined,
    thumbnail: event.frontmatter.image.childImageSharp.fluid
  };

  const disqusShortname = `${process.env.DISQUS_ID}`;
  const disqusConfig = {
    identifier: eventData.title,
    title: eventData.title,
  };
  return (
      <>
        <Seo title={eventData.title}
            description={event.excerpt}
            image={eventData.thumbnail.src}
            url={location.pathname}/>
        <Navbar></Navbar>
        <Layout>
          <div className='page-title no-padding-bottom'>
            <Link to='/upcoming' className='btn btn-link btn-xs btn-raised post-back-to-upcoming'
                id='post-back-to-upcoming'>
              Powrót do nadchodzących wydarzeń
            </Link>
          </div>

          <div className='panel panel-flat blog-horizontal blog-horizontal-1 event-post'>
            <div className='panel-body'>
              <div className='thumb'
                  style={{ float: `right`, marginRight: `0`, marginLeft: `10px` }}>
                <Img fluid={eventData.thumbnail}
                    className='img-responsive'/>
              </div>
              <div className='blog-preview'>
                <h1 className='panel-title text-semibold'>
                  {eventData.title}
                </h1>

                <h4 className='text-uppercase'>{eventData.city}</h4>

                <span className='label label-striped label-date'>
                {formatDate(eventData.dateFrom)}
                  {
                    eventData.dateTo !== eventData.dateFrom &&
                    <span> - {formatDate(eventData.dateTo)}</span>
                  }
              </span>
                <div dangerouslySetInnerHTML={{ __html: event.html }}/>
                <a href={eventData.link}
                    target='_blank'
                    id='post-goto-organizer-site'
                    rel='noopener noreferrer nofollow'
                    className='btn btn-primary'>
                  Strona organizatora
                </a>
              </div>
            </div>
          </div>

          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>

          <div className='karta-zgloszen-banner mb-20'>
            <a href='https://kartazgloszen.pl'
                rel="noopener noreferrer"
                target='_blank'
                id='post-karta-zgloszen-banner'>
              <img src={banner}/>
            </a>
          </div>
        </Layout>
      </>
  )
}

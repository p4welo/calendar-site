import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import Img from 'gatsby-image';
import { Link } from '@reach/router';
import SEO from '../components/seo';
import { DiscussionEmbed } from 'disqus-react';
import Navbar from '../components/navbar';
import { formatDate } from '../utils/date-utils';
// import banner from '../images/baner-percent.jpg';
import banner from '../images/baner-percent.jpg';

export default function Template({ location, data }) {
  const page = data.markdownRemark;
  const event = {
    ...page.frontmatter,
    thumbnail: page.frontmatter.image.childImageSharp.fluid
  };
  const disqusShortname = `${process.env.DISQUS_ID}`;
  const disqusConfig = {
    identifier: page.title,
    title: event.title,
  };

  return (
      <>
        <SEO title={event.title}
            description={page.excerpt}
            image={event.thumbnail.src}
            url={location.pathname}/>

        <Navbar/>
        <Layout>
          <div className='page-title'>
            <Link to='/' className='btn btn-default btn-xs btn-raised return-to-home'>
              Powrót do strony głównej
            </Link>
          </div>

          <div className='panel panel-flat blog-horizontal blog-horizontal-1 event-post'>
            <div className='panel-body'>
              <div className='thumb' style={{float: `right`, marginRight: `0`, marginLeft: `10px`}}>
                <Img fluid={event.thumbnail}
                    className='img-responsive'/>
              </div>
              <div className='blog-preview'>
                <h1 className='panel-title text-semibold'>
                  {event.title}
                </h1>

                <h4 className='text-uppercase'>{event.city}</h4>

                <span className='label label-striped label-date'>
                {formatDate(event.dateFrom)}
                  {
                    event.dateTo !== event.dateFrom &&
                    <span> - {formatDate(event.dateTo)}</span>
                  }
              </span>
                <div dangerouslySetInnerHTML={{ __html: page.html }}/>
                <a href={event.link}
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                    className='btn btn-primary organizer-site'>
                  Strona organizatora
                </a>
              </div>
            </div>
          </div>

          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>

          <div className='karta-zgloszen-banner mb-20'>
            <a href='https://kartazgloszen.pl' target='_blank' className='karta-zgloszen-banner-link2'>
              <img src={banner} />
            </a>
          </div>

        </Layout>
      </>
  )
}

export const query = graphql`
  query PostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        path
          dateFrom
          dateTo
          title
          city
          link
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
`;
import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import Img from 'gatsby-image';
import { Link } from '@reach/router';
import SEO from '../components/seo';
import { DiscussionEmbed } from "disqus-react";
import Navbar from '../components/navbar';

export default function Template({ location, data }) {
  const { markdownRemark: post } = data;
  const disqusShortname = `${process.env.DISQUS_ID}`;
  const disqusConfig = {
    identifier: post.title,
    title: post.frontmatter.title,
  };

  return (
      <>
        <SEO title={post.frontmatter.title}
            description={post.excerpt}
            image={post.frontmatter.image.childImageSharp.fluid.src}
            url={location.pathname}/>

        <Navbar/>
        <Layout>
          <div className='page-title'>
            <Link to='/' className='btn btn-default btn-xs btn-raised return-to-home'>
              Powrót do strony głównej
            </Link>
          </div>

          <div className='panel panel-flat blog-horizontal blog-horizontal-1'>
            <div className='panel-body'>
              <div className="thumb">
                <Img fluid={post.frontmatter.image.childImageSharp.fluid}
                    className="img-responsive"/>
              </div>
              <div className="blog-preview">
                <h1 className="panel-title text-semibold">
                  {post.frontmatter.title}
                </h1>

                <span className="label label-striped label-date">
                {post.frontmatter.dateFrom}
                  {
                    post.frontmatter.dateTo !== post.frontmatter.dateFrom &&
                    <span> - {post.frontmatter.dateTo}</span>
                  }
              </span>
                <div dangerouslySetInnerHTML={{ __html: post.html }}/>
                <a href={post.frontmatter.link}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="btn btn-primary organizer-site">
                  Strona organizatora
                </a>
              </div>
            </div>
          </div>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
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
          dateFrom(formatString: "DD MMMM YYYY", locale: "pl")
          dateTo(formatString: "DD MMMM YYYY", locale: "pl")
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
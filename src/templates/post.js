import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import Img from 'gatsby-image';
import { Link } from '@reach/router';
import SEO from '../components/seo';
import { DiscussionEmbed } from "disqus-react";

export default function Template({ location, data }) {
  const { markdownRemark: post } = data;
  const disqusShortname = `${process.env.DISQUS_ID}`;
  const disqusConfig = {
    identifier: post.title,
    title: post.frontmatter.title,
  };

  return (
      <Layout>
        <SEO title={post.frontmatter.title} image={post.frontmatter.image.childImageSharp.fluid.src} url={location.pathname}/>
        <Link to='/' class='return-to-home'>Powrót</Link>
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
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <a href={post.frontmatter.link}
                  target='_blank'
                  rel="noopener noreferrer"
                  class="btn btn-primary organizer-site">
                Strona organizatora
              </a>
            </div>
          </div>
        </div>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Layout>
  )
}

export const postQuery = graphql`
  query PostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
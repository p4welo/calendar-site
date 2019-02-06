import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import Img from 'gatsby-image';
import { Link } from '@reach/router';
import SEO from '../components/seo';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
      <Layout>
        <SEO title={post.frontmatter.title}/>
        <Link to='/' class='return-to-home'>Powrót</Link>
        <div className='panel panel-flat blog-horizontal blog-horizontal-1'>
          <div className="panel-heading">
            <h1 className="panel-title text-semibold">
              {post.frontmatter.title}
            </h1>
          </div>
          <div className='panel-body'>
            <div className="thumb">
              <Img fluid={post.frontmatter.image.childImageSharp.fluid}
                  className="img-responsive"/>
              <span className="label label-striped"
                  style={{ width: `100%` }}>
                {post.frontmatter.dateFrom}
              </span>
            </div>
            <div className="blog-preview">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <a href={post.frontmatter.link}
                  target='_blank'
                  rel="noopener noreferrer"
                  class="btn btn-default organizer-site">
                Strona organizatora
              </a>
            </div>
          </div>
        </div>
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
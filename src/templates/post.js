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
        <SEO title={post.frontmatter.title} />
        <Link to='/'>Powrót</Link>
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
            </div>
            <div className="blog-preview">
              <p dangerouslySetInnerHTML={{ __html: post.html }}/>
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
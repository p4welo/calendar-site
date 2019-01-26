import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HomeHeader from '../components/home-header';

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
      <>
        <HomeHeader/>
        <Layout>
          {postList.edges.map(({ node }, i) => (
              <Link to={node.frontmatter.path} key={i}>
                <div className="panel panel-flat">
                  <div className="panel-body">
                    <h1>{node.frontmatter.title}</h1>
                    <Img fluid={node.frontmatter.image.childImageSharp.fluid}/>
                    <span>{node.frontmatter.date}</span>
                  </div>
                </div>
              </Link>
          ))}
        </Layout>
      </>
  )
};


export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            path
            date(formatString: "MMMM Do YYYY")
            title
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
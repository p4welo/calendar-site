import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HomeHeader from '../components/home/home-header';

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
      <>
        <HomeHeader/>
        <Layout>
          <div className='row'>
            {postList.edges.map(({ node }, i) => (
                <div className="col-xs-12 col-sm-6 col-md-4" key={i}>
                  <Link to={node.frontmatter.path}>
                    <div className="thumbnail">
                      <div className="thumb">
                        <Img fluid={node.frontmatter.image.childImageSharp.fluid}
                            style={{
                              height: `350px`
                            }}/>
                      </div>

                      <div className="caption text-center">
                        <h6 className="text-semibold no-margin">
                          {node.frontmatter.title}
                        </h6>
                        <small className="display-block">
                          {node.frontmatter.city}
                        </small>
                      </div>
                    </div>
                  </Link>
                </div>
            ))}
          </div>
        </Layout>
      </>
  )
};


export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___dateFrom] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            path
            dateFrom(formatString: "DD MMMM YYYY")
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
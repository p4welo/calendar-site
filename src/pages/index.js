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
                    <div className="thumbnail btn-raised"
                        style={{
                          transition: `box-shadow 100ms ease-in-out`
                        }}>
                      <div className="thumb">
                        <span className="label label-striped"
                          style={{
                            position: `absolute`,
                            zIndex: `1`,
                            left: `0`,
                            bottom: `0`,
                            width: `100%`
                          }}>
                          {node.frontmatter.dateFrom}
                        </span>
                        <Img fluid={node.frontmatter.image.childImageSharp.fluid}
                            style={{ height: `450px` }}/>
                      </div>

                      <div className="caption" style={{height: `120px`}}>
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
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___dateFrom] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
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
    }
  }
`;
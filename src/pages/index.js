import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HomeHeader from '../components/home/home-header';
import SEO from '../components/seo';

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
      <>
        <SEO title='Strona główna' />
        <HomeHeader/>
        <Layout>
          <h3 className='text-center'>Sezon 2018/2019</h3>
          <div className='row'>
            {postList.edges.map(({ node }, i) => (
                <div className="col-xs-12 col-sm-6 col-md-4"
                    key={i}
                    style={{marginBottom: `20px`}}>
                    <div className="thumbnail"
                        style={{
                          transition: `box-shadow 100ms ease-in-out`,
                          marginBottom: `0`
                        }}>
                      <div className="thumb">
                        <Img fluid={node.frontmatter.image.childImageSharp.fluid}
                            style={{ height: `450px` }}/>
                        <span className="label label-striped"
                            style={{ width: `100%` }}>
                          {node.frontmatter.dateFrom}
                        </span>
                      </div>

                      <div className="caption" style={{height: `120px`}}>
                        <h6 className="text-semibold no-margin">
                          <Link to={node.frontmatter.path} class='event-link'>
                            {node.frontmatter.title}
                          </Link>
                        </h6>
                        <small className="display-block event-city">
                          {node.frontmatter.city}
                        </small>
                      </div>
                    </div>
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
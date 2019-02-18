import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import moment from 'moment';

import Layout from '../components/layout';
import HomeHeader from '../components/home/home-header';
import SEO from '../components/seo';

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
      <div className='home-page'>
        <SEO title='Strona główna'/>
        <HomeHeader/>

        <Layout>
          <h5 className="text-light">Wydarzenia promowane</h5>
          <div className="row">
            {
              postList.edges
                  .filter(({ node }) => node.frontmatter.visible &&
                      node.frontmatter.promoted &&
                      moment(node.frontmatter.dateTo).isSameOrAfter(moment()))
                  .map(({ node }, i) => (
                      <div className="col-xs-12 col-sm-6 col-md-4 event-container" key={i}>
                        <div className="thumbnail">
                          {node.frontmatter.promoted &&
                          <div className="ribbon-container">
                            <div className="ribbon bg-indigo-400">Polecamy</div>
                          </div>
                          }
                          <div className="thumb">
                            <Img fluid={node.frontmatter.image.childImageSharp.fluid}
                                style={{ height: `450px` }}
                                alt={node.frontmatter.title}/>
                            <span className="label label-striped label-date">
                              {moment(node.frontmatter.dateFrom).format("DD/MM/YYYY")}
                              {
                                node.frontmatter.dateTo !== node.frontmatter.dateFrom &&
                                <span> - {moment(node.frontmatter.dateTo).format("DD/MM/YYYY")}</span>
                              }
                            </span>
                          </div>

                          <div className="caption">
                            <h6 className="text-semibold no-margin text-uppercase">
                              {node.frontmatter.title}
                            </h6>
                            <small className="display-block event-city">
                              {node.frontmatter.city}
                            </small>
                            <Link to={node.frontmatter.path}
                                className='event-link promoted-event-link btn btn-primary'>
                              Szczegóły
                            </Link>
                          </div>
                        </div>
                      </div>
                  ))}
          </div>

          <div style={{display: `flex`, justifyContent: `center`}}>
            <div className='panel panel-flat col-xs-12'>
              <div className='panel-body'>
                <p>Polub nas na Facebooku!</p>
                <div className="fb-like" data-href="https://facebook.com/tanecznykalendarz/"
                    data-layout="button_count" data-action="like" data-size="large"
                    data-show-faces="true" data-share="true"></div>
              </div>
            </div>
          </div>

          <h5 className="text-light">Sezon 2018/2019</h5>
          <div className='row'>
            {
              postList.edges
                  .filter(({ node }) => node.frontmatter.visible &&
                      moment(node.frontmatter.dateTo).isSameOrAfter(moment())
                  )
                  .map(({ node }, i) => (
                      <div className="col-xs-12 col-sm-6 col-md-4 event-container"
                          key={i}>
                        <div className="thumbnail">
                          <div className="thumb">
                            <Img fluid={node.frontmatter.image.childImageSharp.fluid}
                                style={{ height: `450px` }}
                                alt={node.frontmatter.title}/>
                            <span className="label label-striped label-date">
                          {moment(node.frontmatter.dateFrom).format("DD/MM/YYYY")}
                              {
                                node.frontmatter.dateTo !== node.frontmatter.dateFrom &&
                                <span> - {moment(node.frontmatter.dateTo).format("DD/MM/YYYY")}</span>
                              }
                      </span>
                          </div>

                          <div className="caption">
                            <h6 className="text-semibold no-margin text-uppercase">
                              {node.frontmatter.title}
                            </h6>
                            <small className="display-block event-city">
                              {node.frontmatter.city}
                            </small>
                            <Link to={node.frontmatter.path}
                                className='event-link btn btn-primary'>
                              Szczegóły
                            </Link>
                          </div>
                        </div>
                      </div>
                  ))
            }
          </div>
        </Layout>
      </div>
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
            promoted
            visible
            dateFrom
            dateTo
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
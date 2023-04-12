const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const eventTemplate = path.resolve('src/templates/event/EventTemplate.tsx');

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            path
            dateFrom
            dateTo
            title
            promoted
            city
            link
            image {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxWidth: 786) {
                  src
                  srcSet
                  sizes
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  }`)
      .then(res => {
        if (res.errors) {
          return Promise.reject(res.errors);
        }

        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: eventTemplate,
            context: {
              event: node
            }
          })
        })
      })
};

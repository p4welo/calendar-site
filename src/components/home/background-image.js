import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const BackgroundImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home.jpg" }) {
          childImageSharp {
                fixed(width: 800) {
          ...GatsbyImageSharpFixed
        }
              }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed}
        style={{
          height: `100%`,
          left: `0`,
          position: `absolute`,
          top: `0`,
          width: `100%`
        }}/>}
  />
);
export default BackgroundImage

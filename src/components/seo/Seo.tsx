import React from "react"
import PropTypes from "prop-types"
// @ts-ignore
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby"

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: any;
  keywords?: string[];
  title?: string;
  image?: string;
  url?: string;
}

export const Seo = ({ description, lang, meta, keywords = [], title, image, url }: SeoProps) => {
  return (
      <StaticQuery
          query={detailsQuery}
          render={data => {
            const metaDescription =
                description || data.site.siteMetadata.description;
            return (
                <Helmet
                    htmlAttributes={{
                      lang,
                    }}
                    title={title}
                    titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                    meta={[
                      {
                        name: `description`,
                        content: metaDescription,
                      },
                      {
                        property: `og:title`,
                        content: title,
                      },
                      {
                        property: `og:description`,
                        content: metaDescription,
                      },
                      {
                        property: `og:type`,
                        content: `website`,
                      },
                      {
                        property: `og:image`,
                        content: image,
                      },
                      {
                        property: `og:url`,
                        content: `http://tanecznykalendarz.pl${url}`,
                      },
                      {
                        name: `og:locale`,
                        content: `pl_PL`,
                      },
                      {
                        name: `twitter:card`,
                        content: `summary`,
                      },
                      {
                        name: `twitter:creator`,
                        content: data.site.siteMetadata.author,
                      },
                      {
                        name: `twitter:title`,
                        content: title,
                      },
                      {
                        name: `twitter:description`,
                        content: metaDescription,
                      },
                    ]
                        .concat(
                            keywords.length > 0
                                ? {
                                  name: `keywords`,
                                  content: keywords.join(`, `),
                                }
                                : []
                        )
                        .concat(meta)}
                />
            )
          }}
      />
  )
};

Seo.defaultProps = {
  lang: `pl`,
  meta: [],
  keywords: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`

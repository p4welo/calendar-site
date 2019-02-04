import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from '@reach/router';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="container" style={{minHeight: `calc(100vh - 326px)`}}>
          { children }
        </div>
          <footer style={{
            background: `#07beb8`,
            color: `white`,
            padding: `100px 0`
          }}>
            <div className="container">
            <p>
              <span>© {new Date().getFullYear()}</span>
              <Link to='/' className='btn btn-link'>Taneczny kalendarz</Link>
            </p>
            <p>
              <span>Kontakt: </span>
              <a className='btn btn-link' href='mailto:kontakt@tanecznykalendarz.pl'>kontakt@tanecznykalendarz.pl</a>
            </p>
            <p>Administrator nie odpowiada za treści publikowane przez organizatorów.</p>
            </div>
          </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout

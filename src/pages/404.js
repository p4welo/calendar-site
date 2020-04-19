import React from 'react'
// import { FormattedMessage } from "gatsby-plugin-intl";

import Layout from '../components/layout'
import { Seo } from '../components'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>
      {/*<FormattedMessage id="404.header" />*/}
    </h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage

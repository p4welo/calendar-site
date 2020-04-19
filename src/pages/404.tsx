import React from 'react'

import Layout from '@app/components/layout'
import { Seo } from '@app/components'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>
      404
      {/*<FormattedMessage id="404.header" />*/}
    </h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage

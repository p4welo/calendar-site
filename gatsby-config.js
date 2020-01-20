let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `http://www.tanecznykalendarz.pl`,
    title: `Taneczny kalendarz`,
    description: `Kalendarz taneczny to wszystkie turnieje tańca w jednym miejscu! Zgłoś swój turniej ZA DARMO i dotrzyj do nowych odbiorców.`,
    author: `Paweł Radomski`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Taneczny kalendarz`,
        short_name: `Taneczny kalendarz`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#07beb8`,
        display: `minimal-ui`,
        icon: `src/images/android-icon-192x192.png`, // This path is relative to the root of the
        // site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-purgecss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/events`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: process.env.FULLSTORY_ORG_ID,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FB_PIXEL_ID,
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: process.env.YANDEX_METRIKA_TRACKING_ID,
        webvisor: true,
        trackHash: true,
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET_VERSION
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`
    // `gatsby-plugin-offline`
  ],
};
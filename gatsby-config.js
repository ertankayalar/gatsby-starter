module.exports = {
  siteMetadata: {
    title: 'gatsby_v3 Boilerplate',
    description: 'Gatsby Boilerplate Project',
    author: '@ertankayalar',
    titleTemplate: '%s - Site Name',
    url: 'https://example.com', // No trailing slash allowed!
    image: '/images/sample.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@erkasoft',
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '11111111',
      },
    },
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    `gatsby-plugin-sass`,
  ],
}

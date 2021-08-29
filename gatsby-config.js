module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
    description: 'Gatsby Starter Project for static sites',
    author: '@ertankayalar',
    titleTemplate: '%s - Gatsby Starter',
    url: 'https://gatsby-starter.netlify.app', // No trailing slash allowed!
    image: '/images/sample.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@erkasoft',
    siteUrl: `https://gatsby-starter.netlify.app`,
    mainMenu: [
      { href: '/', label: 'Giriş' },
      { href: '/hizmetler', label: 'Hizmetler' },
      { href: '/hakkimizda', label: 'Hakkımızda' },
      { href: '/blog', label: 'Blog' },
      { href: '/iletisim', label: 'İletişim' },
    ],
    footerMenu: [
      { href: '/', label: 'Giriş' },
      { href: '/hizmetler', label: 'Hizmetler' },
      { href: '/hakkimizda', label: 'Hakkımızda' },
      { href: '/blog', label: 'Blog' },
      { href: '/iletisim', label: 'İletişim' },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@layouts': 'src/layouts',
          '@utils': 'src/utils',
          '@pages': 'src/pages',
          '@sass': 'src/sass',
          '@templates': 'src/templates',
          '@posts': 'content/posts',
        },
        extensions: ['js', 'mdx'],
      },
    },
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

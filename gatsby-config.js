module.exports = {
  siteMetadata: {
    title: `restaurant`,
    description: `Restaurant website with a ticket ordering app`,
    author: `@milos_dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `restaurant & register`,
        short_name: `restaurant`,
        start_url: `/`,
        background_color: `#bfc0c4`,
        theme_color: `#436573`,
        display: `minimal-ui`,
        icon: `src/images/fork.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}

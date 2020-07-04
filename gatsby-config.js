module.exports = {
    siteMetadata: {
      description: "Personal page of Sam Roebuck",
      locale: "en",
      showThemeLogo: true,
      title: "Sam Roebuck"
    },
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require("tailwindcss")(require("./tailwind.config")("sam")),
            require("postcss-input-range"),
            require("autoprefixer"),
          ],
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-yaml`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: 'content/',
        },
      },
      {
        resolve: "gatsby-plugin-react-svg",
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sam Roebuck Dev`,
        short_name: `Sam Portfolio`,
        start_url: `/`,
        background_color: `#CE7E8F`,
        theme_color: `#CE7E8F`,
        display: `minimal-ui`,
        icon: `content/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    ],
  }

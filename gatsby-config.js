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
    ],
  }

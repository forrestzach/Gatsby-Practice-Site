module.exports = {
  siteMetadata: {
    title: "gatsbypractice",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],    
};

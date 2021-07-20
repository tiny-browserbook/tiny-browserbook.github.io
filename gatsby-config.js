module.exports = {
  siteMetadata: {
    siteTitle: "ちいさな Web ブラウザを作ってみよう",
    defaultTitle: "ちいさな Web ブラウザを作ってみよう",
    siteTitleShort: "ちいさな Web ブラウザを作ってみよう",
    siteDescription:
      "本オンラインブックはセキュリティ・キャンプ全国大会 2021 オンラインの講義「ちいさなWebブラウザを作ってみよう」の事前学習資料です。ちいさな Web ブラウザを作ることを通して現代の Web ブラウザの仕組みを学びましょう。",
    siteUrl: "https://browserbook.shift-js.info",
    siteAuthor: "@lmt_swallow",
    siteImage: "/banner.png",
    siteLanguage: "ja",
    themeColor: "#8257E6",
    basePath: "/",
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [require("remark-emoji")],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 440,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-numbered-footnotes`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
        ],
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-images`],
      },
    },
    {
      resolve: "@rocketseat/gatsby-theme-docs",
      options: {
        configPath: "src/config",
        docsPath: "src/docs",
        repositoryUrl: "https://github.com/lmt-swallow/browserbook",
        baseDir: "",
        withMdx: false,
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://browserbook.shift-js.info",
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: `src/@types/gatsby-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-KEE2K7WXT7"],
      },
    },
  ],
};

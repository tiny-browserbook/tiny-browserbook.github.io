module.exports = {
  siteMetadata: {
    siteTitle: "ちいさな Web ブラウザを作ってみよう",
    defaultTitle: "ちいさな Web ブラウザを作ってみよう",
    siteTitleShort: "ちいさな Web ブラウザを作ってみよう",
    siteDescription:
      "ちいさな Web ブラウザを作るための解説ページです。これはセキュリティ・キャンプ全国大会 2021 オンラインの講義「ちいさなWebブラウザを作ってみよう」の講義資料となっています。",
    siteUrl: "https://browserbook.shift-js.info",
    siteAuthor: "@lmt_swallow",
    siteImage: "/banner.png",
    siteLanguage: "ja",
    themeColor: "#8257E6",
    basePath: "/",
  },
  pathPrefix: "/2nd",
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: "@rocketseat/gatsby-theme-docs",
      options: {
        configPath: "src/config",
        docsPath: "src/docs",
        repositoryUrl: "https://github.com/lmt-swallow/browserbook",
        baseDir: "",
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
  ],
};

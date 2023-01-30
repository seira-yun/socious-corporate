require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require(`path`);


module.exports = {
  siteMetadata: {
    url: 'https://socious.io',
    // title and description are deprecated, use i18n instead
    title: 'Socious | Impact Network Powered by Blockchain & AI',
    titleJapanese:
      'ソーシャス | ブロックチェーンを活用したSDG人材プラットフォーム',
    titleTemplate: '%s | Socious',
    titleTemplateJapanese: '%s · ソーシャス',
    description:
      'Socious is an impact network with a mission to help make a difference. We use AI and blockchain technologies to connect change makers',
    descriptionJapanese:
      'ソーシャスは、「社会・環境インパクトを加速させる」というミッションのもと、誰でも気軽に社会貢献できるように、社会貢献にインセンティブを与えるAI・ブロックチェーンプラットフォームを開発しています。',
    image: 'https://socious.io/socious-og.png',
    imageJapanese: 'https://socious.io/socious-og-ja.png',
    twitterImage: 'https://socious.io/socious-og-twitter.png',
    favicon: {
      ico: 'favicons/favicon.ico',
      sm: 'favicons/favicon-16x16.png',
      lg: 'favicons/favicon-32x32.png',
      manifest: 'favicons/site.webmanifest',
      safariPinnedTab: 'favicons/safari-pinned-tab.svg',
      appleTouchIcon: 'favicons/apple-touch-icon.png',
    },
    trailingSlash: "ignore",
  },
  plugins: [
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WGLLNNL',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-MXDPH6PE8M', // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.WORDPRESS_ENDPOINT}/graphql`,
        schema: {
          timeout: 200000,
          perPage: 5,
          requestConcurrency: 3,
        },
        html: {
          useGatsbyImage: false,
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   option: {
    //     endpoint:
    //     'https://socious.us6.list-manage.com/subscribe/post?u=131eb0c7f6b2c3a36daf52940&amp;id=521f139131',
    //     // 'https://us6.list-manage.com/contact-form?u=131eb0c7f6b2c3a36daf52940&form_id=8ac2ed4e02b1104cad3be462bb898bb4',
    //     timeout: 3500,
    //   },
    // },
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_SECRET_TOKEN,
        databaseId: process.env.NOTION_DATABASE_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT, // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpcontent",
        url: process.env.WORDPRESS_ENDPOINT + "/graphql"
      }
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.SEGMENT_PRODUCTION_WRITE_KEY,
        devKey: process.env.SEGMENT_DEV_WRITE_KEY,
        trackPage: true,
        trackPageDelay: 50,
        delayLoad: false,
        delayLoadTime: 1000,
        manuaLoad: false
      }
    }
  ],
};

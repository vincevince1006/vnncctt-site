module.exports = {
  siteMetadata: {
    title: `Vincent Dubay`,
    author: {
      name: `Vince`,
      summary: `who lives and works in Washington, DC.`,
    },
    social: {
      twitter: 'vnncctt'
    },
    menuLinks: [
      {
        key: 1,
        name: 'home',
        link: '/'
      },
      {
        key: 2,
        name: 'portfolio',
        link: '/works'
      },
      {
        key: 3,
        name: 'resume',
        link: '/resume'
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        jpegQuality: 100,
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `merriweather`,
            `muli\:300,500`
        ],
        display: 'swap'
      }
    }
  ]
}

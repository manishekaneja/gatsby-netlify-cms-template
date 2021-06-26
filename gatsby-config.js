module.exports = {
  siteMetadata: {
    title: 'Project Exhibition',
    author: 'Manish Aneja',
    description:
      "Single Platform the showcase and share some fun projects and learnings. In this exhibition, you will find multiple small projects ans some brief about them, all at a single place. Also, code for these projects code's can be found on my github account (@manishekaneja) as well.",
    socialAccounts: [
      {
        title: 'github',
        slug: 'Github | Manish Aneja',
        link: 'https://github.com/manishekaneja/',
        priority: 1,
      },
      {
        title: 'linkedin',
        slug: 'Linkedin | Manish Aneja',
        link: 'https://www.linkedin.com/in/manishaneja/',
        priority: 2,
      },
      {
        title: 'hashnode',
        slug: 'Hashnode | Manish Aneja',
        link: 'https://manishaneja.hashnode.dev/',
        priority: 3,
      },
      {
        title: 'portfolio',
        slug: 'Portfolio | Manish Aneja',
        link: 'https://me.manishaneja.com/',
        priority: 4,
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: [], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                'heading[depth=3]':
                  'text-2xl font-semibold mb-5 text-red-300 sm:text-3xl',
                'list[ordered=false]':
                  'ml-10 list-decimal my-2 text-yellow-200 sm:my-5 ',
                listItem: 'mb-2 sm:text-lg',
                paragraph: 'text-base text-gray-100 mb-6 sm:text-lg',
                strong: 'text-green-200 my-6',
                link: 'text-blue-200 underline text-semibold italic',
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Project Exhibition | Manish Aneja`,
        short_name: `Project Expo`,
        description: `Single Platform the showcase and share some fun projects and learnings. In this exhibition, you will find multiple small projects ans some brief about them, all at a single place. Also, code for these projects code's can be found on my github account (@manishekaneja) as well.`,
        display: `standalone`,
        lang: `en`,
        icon: 'static/images/logo.svg',
        start_url: `/`,
        background_color: `#111827`,
        theme_color: `#111827`,
      },
    },
  ],
};

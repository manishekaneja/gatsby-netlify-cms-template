const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');
const {fmImagesToRelative} = require('gatsby-remark-relative-images');

// exports.sourceNodes = ({actions}) => {
//   actions.createTypes(`
//   type markdownRemark implements Node @dontInfer{
//     collection:String!
//   }`);
// };

// exports.createResolvers = ({createResolvers, getNode}) => {
//   const collection = (source) => getNode(source.parent).relativeDirectory;

//   createResolvers({
//     MD: {
//       collection: {
//         resolve: (source) => collection(source),
//       },
//     },
//   });
// };

exports.createPages = ({actions, graphql, reporter}) => {
  const {createPage} = actions;

  return graphql(`
    query CreatePageQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              projectId
            }
          }
        }
      }
    }
  `)
    .then((result) => {
      if (result.errors) {
        result.errors.forEach((e) => console.error(e.toString()));
        return Promise.reject(result.errors);
      }
      const projectList = result.data.allMarkdownRemark.edges;

      projectList.forEach((singleProject) => {
        const projectId = singleProject.node.frontmatter.projectId;
        createPage({
          path: projectId,
          component: path.resolve(`src/screen-render/project-page.js`),
          context: {
            id: projectId,
          },
        });
      });
    })
    .catch((error) => {
      reporter.panic('Error While creating Page', error);
      return Promise.reject(error);
    });
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;
  fmImagesToRelative(node);
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

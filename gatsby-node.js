const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');
const {fmImagesToRelative} = require('gatsby-remark-relative-images');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;

  return graphql(`
    query CreatePageQuery {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            internal {
              content
            }
            frontmatter {
              description
              name
              projectId
              techStack
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const projets = result.data.allMarkdownRemark.edges;

    projets.forEach((singleProject) => {
      const id = singleProject.node.frontmatter.projectId;
      createPage({
        path: id,
        component: path.resolve(`src/screen-render/project-page.js`),
        context: {
          id,
        },
      });
    });
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

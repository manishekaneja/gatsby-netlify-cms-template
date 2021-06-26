import {graphql} from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import {ProjectPageTemplate} from '../templates/project-page';

const ProjectPage = ({data}) => {
  const {frontmatter, html} = data.markdownRemark;
  return (
    <Layout layout={2} documentTitle={frontmatter.name}>
      <ProjectPageTemplate
        image={frontmatter.image}
        title={frontmatter.name}
        techStack={frontmatter.techStack}
        mainpitch={html}
        description={frontmatter.description}
      />
    </Layout>
  );
};

export default ProjectPage;

export const singleItemQuery = graphql`
  query SingleGraphQuery($id: String!) {
    markdownRemark(frontmatter: {projectId: {eq: $id}}) {
      id
      frontmatter {
        description
        name
        image {
          childImageSharp {
            fluid(maxWidth: 4048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        projectId
        techStack
        title
      }
      html
    }
  }
`;

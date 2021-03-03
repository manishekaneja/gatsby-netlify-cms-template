import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { SubTitle, Tag } from '../pages';

export const ProjectPageTemplate = ({
  image,
  title,
  techStack,
  mainpitch,
  description,
  date,
}) => (
  <Layout layout={2} documentTitle={title}>

    <div
      className="bg-no-repeat bg-cover h-4/6 bg-center bg-fixed flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
      >
      <div className="absolute w-full h-full bg-black opacity-60 z-0" />
      <div className="z-10 shadow-xl py-10 px-20 bg-black rounded-sm">
        <h1 className="text-6xl text-center font-extrabold mb-5 text-yellow-100">
          {title}
        </h1>
        <h3 className="text-base font-extralight text-purple-200">
          {description}
        </h3>
      </div>
    </div>
    <section>
      <div className="max-w-6xl m-auto p-5">
        <div className="mb-5 p-2 outline-white">
          <SubTitle name="relatable - tech - tags">
            {techStack.map((tag) => (
              <Tag name={tag} key={tag} />
            ))}
          </SubTitle>
        </div>
        <div className="my-5 p-2 ">
          <SubTitle name="about - section">            
            <HTMLContent content={mainpitch} />
            </SubTitle>
        </div>
      </div>
    </section>
    </Layout>
);

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const ProjectPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <div>
      <ProjectPageTemplate
        image={frontmatter.image}
        title={frontmatter.name}
        techStack={frontmatter.techStack}
        mainpitch={html}
        description={frontmatter.description}
        date={frontmatter.date}
      />
    </div>
  );
};

export default ProjectPage;

export const singleItemQuery = graphql`
  query SingleGraphQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      internal {
        content
      }
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
        date
      }
      html
    }
  }
`;

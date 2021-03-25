import React from 'react';
import { SlidingCard } from '../../components/SlidingCard';
import { ProjectPageTemplate } from '../../templates/project-page-template';

const ProjectPagePreview = ({ entry, widgetFor }) => {
  return (
    <>
      <div className="bg-gray-900 text-white h-screen overflow-y-auto ">
        <ProjectPageTemplate
          title={entry.getIn(['data', 'name'])}
          description={entry.getIn(['data', 'description'])}
          image={entry.getIn(['data', 'image'])}
          mainpitch={entry.getIn(['data', 'body'])}
          techStack={entry.getIn(['data', 'techStack']) || []}
        />
      </div>
      <br />
      <div className="bg-gray-900 text-white w-screen h-screen px-2 py-2 flex justify-center items-center sm:px-4 sm:py-4 overflow-hidden relative">
        <SlidingCard
          position={0}
          data={{
            node: {
              frontmatter: {
                projectId: '',
                name: entry.getIn(['data', 'name']),
                image: {
                  childImageSharp: {
                    fluid: entry.getIn(['data', 'image']),
                    alt: "none"
                  },
                },
                techStack: entry.getIn(['data', 'techStack']) || [],
                description: entry.getIn(['data', 'description']),
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default ProjectPagePreview;

import React from 'react';
import {HTMLContent} from '../components/HTMLContent';
import {SubTitle} from '../components/SubTitle';
import {Tag} from '../components/Tag';

export const ProjectPageTemplate = ({
  image,
  title,
  mainpitch,
  description,
  date,
  techStack = [],
}) => (
  <>
    <div
      className="bg-no-repeat bg-cover h-4/6 bg-center bg-fixed flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${
          !!(image && image.childImageSharp)
            ? image.childImageSharp.fluid.src
            : image
        })`,
      }}
    >
      <div className="absolute w-full h-full bg-black opacity-60 z-0" />
      <div className="z-10 shadow-xl py-10 px-20 bg-black rounded-sm">
        <h1 className="text-6xl text-center font-extrabold mb-5 text-yellow-100">
          {title}
        </h1>
        <h3 className="text-base font-extralight text-purple-200 text-center">
          {description}
        </h3>
      </div>
    </div>
    <section>
      <div className="max-w-6xl m-auto p-5">
        <div className="mb-5 p-2">
          <SubTitle name="tech-tags">
            {techStack.map((tag) => (
              <Tag name={tag} key={tag} />
            ))}
          </SubTitle>
        </div>
        <div className="my-5 px-4 py-6 outline-white">
          <HTMLContent content={mainpitch} />
        </div>
      </div>
    </section>
  </>
);

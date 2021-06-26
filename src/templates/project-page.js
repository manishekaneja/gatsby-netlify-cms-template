import {Link} from 'gatsby';
import {withPrefix} from 'gatsby-link';
import React from 'react';
import {HTMLContent} from '../components/HTMLContent';
import {SubTitle} from '../components/SubTitle';
import {Tag} from '../components/Tag';

export const ProjectPageTemplate = ({
  image,
  title,
  mainpitch,
  description,
  techStack = [],
}) => (
  <>
    <div
      className="bg-no-repeat bg-cover h-screen md:h-4/5 bg-center bg-fixed flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${
          !!(image && image.childImageSharp)
            ? image.childImageSharp.fluid.src
            : image
        })`,
      }}
    >
      <div className="absolute w-full h-full bg-black opacity-60 z-0" />
      <div className="z-10 shadow-xl px-10 py-10 md:px-20 bg-black rounded-sm">
        <h1 className="text-4xl md:text-6xl text-center font-extrabold mb-5 text-yellow-100">
          {title}
        </h1>
        <h3 className=" text-sm md:text-base font-extralight text-purple-200 text-center">
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
        <div className="px-4">
          <Link
            to="/"
            className=" inline-flex opacity-50 hover:opacity-100 items-center py-1"
          >
            <img
              className="h-6"
              src={`${withPrefix('/')}images/left.svg`}
              alt="go-back"
            />
            <span className="text-base underline">Go Back</span>
          </Link>
        </div>
      </div>
    </section>
  </>
);

import { Link } from 'gatsby';
import React from 'react';
import { EndSlidingCard } from './EndSlidingCard';
import { IntroSlidingCard } from './IntroSlidingCard';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { SubTitle } from './SubTitle';
import { Tag } from './Tag';
import { Title } from './Title';

export const SlidingCard = ({ position, data }) =>
  !data ? null : data === 'Intro' ? (
    <IntroSlidingCard {...{ position }} />
  ) : data === 'End' ? (
    <EndSlidingCard {...{position}} />
  ) : (
    <div
      className={`w-full h-full absolute flex justify-center items-center transition duration-500 ease-in-out ${
        position === 0
          ? ''
          : position >= -1 && position <= 1
          ? 'opacity-0 sm:opacity-100'
          : 'opacity-0 '
      } `}
      style={{
        transform: `translateX(${position * 200}px) ${
          position === 0 ? 'scale(1)' : 'scale(0.75)'
        }`,
        zIndex: 10 - Math.abs(position || 0),
        ...(position >= -1 && position <= 1 ? {} : {}),
      }}
    >
      <section
        style={{
          zIndex: 10 - Math.abs(position || 0),
        }}
        className="bg-gray-700 rounded-none text-white grid-rows-2 max-w-md font-sans text-2xl w-full h-full md:h-3/4 grid grid-cols-1 md:w-11/12 md:grid-cols-2 md:grid-rows-1 md:max-w-3xl md:max-h-96 shadow-2xl"
      >
        <div className="rounded-none overflow-hidden ">
          <div className="object-cover w-full h-full transition-transform duration-2000 ease-out transform hover:scale-125">
            <PreviewCompatibleImage imageInfo={data.node.frontmatter.image} />
          </div>
        </div>
        <div className="p-4 flex overflow-x-hidden overflow-y-auto flex-col">
          <section className="pb-2  flex-none md:mt-5">
            <Link
              to={`/${data.node.frontmatter.projectId}`}
              className="underline"
            >
              <Title title={data.node.frontmatter.name} />
            </Link>
          </section>
          <section className="py-1 px-2 flex-none outline-white my-2">
            <SubTitle name="tech-stack-used" />
            <p className="flex text-sm flex-wrap justify-start">
              {data.node.frontmatter.techStack.map((tag) => (
                <Tag name={tag} key={tag} />
              ))}
            </p>
          </section>
          <section className="flex-1 h-full py-1 px-2 outline-white my-2">
            <SubTitle name="description" />
            <p className="px-2 text-sm text-left overflow-ellipsis overflow-hidden whitespace-wrap">
              {data.node.frontmatter.description}
            </p>
          </section>
        </div>
      </section>
    </div>
  );

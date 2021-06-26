import {withPrefix} from 'gatsby-link';
import React from 'react';
import {CharacterRandomizer} from './CharacterRandomizer';

export const EndSlidingCard = ({position}) => {
  return (
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
        className="bg-gray-800 md:outline-none items-center p-5 justify-center rounded-none text-white max-w-md font-sans text-2xl w-full h-full md:h-3/4 md:w-11/12  md:max-w-3xl md:max-h-96 shadow-2xl flex "
      >
        <div className="h-3/6 flex  items-center justify-center flex-col ">
          <div className="mx-2 text-3xl">
            <CharacterRandomizer string="Find-Me-at" />
          </div>
          <div className="text-xl my-4 flex">
            <div className="mx-2 hover:shadow-xl  transition-all duration-700 m-3 ">
              <abbr title="Github - Manish Aneja">
                <img
                  src={`${withPrefix('/')}images/github.svg`}
                  alt="Github - Manish Aneja"
                />
              </abbr>
            </div>
            <div className="mx-2 hover:shadow-xl  transition-all duration-700 m-3 ">
              <abbr title="LinkedIn - Manish Aneja">
                <img
                  src={`${withPrefix('/')}images/linkedin.svg`}
                  alt="LinkedIn - Manish Aneja"
                />
              </abbr>
            </div>
            <div className="mx-2 hover:shadow-xl  transition-all duration-700 m-3 ">
              <abbr title="Hashnode Blog">
                <img
                  src={`${withPrefix('/')}images/blog.svg`}
                  alt="Hashnode Blog"
                />
              </abbr>
            </div>
            <div className="mx-2 hover:shadow-xl  transition-all duration-700 m-3 ">
              <abbr title="Portfolio - Manish Aneja">
                <img
                  src={`${withPrefix('/')}images/portfolio.svg`}
                  alt="Portfolio - Manish Aneja"
                />
              </abbr>
            </div>
          </div>
          <div className="text-lg my-2 block  ">
            <p className="text-blue-200 text-center">
              Drop a mail to me on{' '}
              <a
                href="mailto:manishekaneja@gmail.com"
                className="underline font-bold text-red-100"
              >
                manishekaneja@gmail.com
              </a>{' '}
              for feedback.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

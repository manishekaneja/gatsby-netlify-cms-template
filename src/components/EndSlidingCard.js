import {graphql, useStaticQuery} from 'gatsby';
import {withPrefix} from 'gatsby-link';
import React from 'react';
import {CharacterRandomizer} from './CharacterRandomizer';

export const EndSlidingCard = ({position}) => {
  const {
    site: {
      siteMetadata: {socialAccounts},
    },
  } = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            socialAccounts {
              link
              slug
              title
              priority
            }
          }
        }
      }
    `
  );

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
            {socialAccounts
              .sort((e1, e2) => e1.priority - e2.priority)
              .map((socialElement) => (
                <a
                  href={socialElement.link}
                  className="mx-2 p-2 border-gray-300 border rounded-full hover:shadow-xl hover:bg-gray-900 cursor-pointer  transition-all duration-700 m-3 "
                >
                  <abbr title={socialElement.slug}>
                    <img
                      src={`${withPrefix('/')}images/${
                        socialElement.title
                      }.svg`}
                      alt={socialElement.slug}
                    />
                  </abbr>
                </a>
              ))}
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

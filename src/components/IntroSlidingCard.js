import React from 'react';
import {CharacterRandomizer} from './CharacterRandomizer';

export const IntroSlidingCard = ({position}) => {
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
        className="bg-gray-800 md:outline-none items-stretch p-5 justify-center rounded-none text-white max-w-md font-sans text-2xl w-full h-full md:h-3/4 md:w-11/12  md:max-w-3xl md:max-h-96 shadow-2xl flex flex-col"
      >
        <div className="flex flex-wrap items-center justify-center ">
          <div className="text-5xl h-30 mx-2">
            <CharacterRandomizer string="project" />
          </div>
          <div className="text-5xl h-30 mx-2">
            <CharacterRandomizer string="expo" />
          </div>
          <div className="text-5xl h-30 mx-2">
            <CharacterRandomizer string="By" />
          </div>

        </div>

        <a
          href="https://me.manishaneja.com"
          className=" p-2 m-2 transition-all duration-700 items-center hover:bg-gray-700 hover:shadow-lg hover:bg-opacity-30 justify-center flex cursor-pointer"
        >
          <div className="h-30 mx-2">
            <CharacterRandomizer string="Manish" />
          </div>
          <div className="h-30 mx-2">
            <CharacterRandomizer string="Aneja" />
          </div>
        </a>
        <div
          className=" pb-3 mb-3 transition-all duration-700 items-center justify-center flex cursor-pointer"
        >
          <div className="h-30 mx-2 text-sm">
            <CharacterRandomizer string="( CREATOR )" />
          </div>
        </div>
      </section>
    </div>
  );
};

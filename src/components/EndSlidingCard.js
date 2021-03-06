import React from 'react';
import { CharacterRandomizer } from './CharacterRandomizer';

export const EndSlidingCard = ({ position }) => {
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
        className="bg-gray-900 md:outline-white items-center p-5 justify-center rounded-none text-white max-w-md font-sans text-2xl w-full h-full md:h-3/4 md:w-11/12  md:max-w-3xl md:max-h-96 shadow-2xl flex "
      >
        <div className="h-3/6 flex flex-wrap items-center justify-center flex-col ">
          <div className="mx-2 text-3xl h-30">
            <CharacterRandomizer string="For-Feedback" />
          </div>
          <div className="text-xl h-30 mx-2">
            <p>manishekaneja@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

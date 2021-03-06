import React, { useEffect, useRef, useState, useCallback } from 'react';

export const CharacterRandomizer = ({ string }) => {
  const colors = useRef([
    'text-red-400',
    'text-yellow-200',
    'text-green-400',
    'text-blue-400',
    'text-indigo-300',
    'text-purple-500',
  ]).current;

  const [randomColorIdx, setRandomColorIdx] = useState(
    new Array(string.length || 0)
      .fill(0)
      .map(() => Math.floor(Math.random() * (colors.length || 1)))
  );
  useEffect(() => {
    setRandomColorIdx(
      new Array(string.length || 0)
        .fill(0)
        .map(() => Math.floor(Math.random() * (colors.length || 1)))
    );
  }, [colors,string]);
  const updateSingleCharacter = useCallback(
    (idx) => {
      setRandomColorIdx((pa) => {
        return pa.map((v, i) => idx === i ? Math.floor(Math.random() * (colors.length || 1)) : v
        );
      });
    },
    [setRandomColorIdx, colors]
  );
  return (
    <>
      {string.split('').map((character, idx) => {
        return (
          <button
            key={idx}
            onClick={updateSingleCharacter.bind(this, idx)}
            className={`${colors[randomColorIdx[idx]]} font-bold uppercase focus:outline-none cursor-default`}
          >
            {character}
          </button>
        );
      })}
    </>
  );
};

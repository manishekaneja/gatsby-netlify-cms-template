import React from 'react';

export const SubTitle = ({name, children}) =>
  children ? (
    <>
      <h3 className="text-left text-base md:text-xl mb-2">
        <span className="text-purple-400 font-bold">{'< '}</span>
        <span className="text-red-200">{name}</span>
        <span className="text-purple-400 font-bold">{' >'}</span>
      </h3>
      <section className="py-3 px-0  sm:px-2">{children}</section>
      <h3 className="text-left text-base md:text-xl mb-2">
        <span className="text-purple-400 font-bold">{'</ '}</span>
        <span className="text-red-200">{name}</span>
        <span className="text-purple-400 font-bold">{' >'}</span>
      </h3>
    </>
  ) : (
    <h3 className="text-left text-base md:text-xl mb-2">
      <span className="text-purple-400 font-bold">{'< '}</span>
      <span className="text-red-200">{name}</span>
      <span className="text-purple-400 font-bold">{' />'}</span>
    </h3>
  );

import React from 'react';

export const HTMLContent = ({ content, className = '' }) => (
  <>
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
    <p className="text-2xl font-semibold mb-5 text-red-300 sm:text-3xl hidden"></p>
    <p className="ml-10 list-decimal my-2 text-yellow-200 sm:my-5 hidden"></p>
    <p className="mb-2 sm:text-lg hidden"></p>
    <p className="text-base text-gray-100 mb-6 sm:text-lg hidden"></p>
    <p className="text-green-200 my-6 hidden"></p>
    <p className="text-blue-200 underline text-semibold italic hidden"></p>

  </>
);

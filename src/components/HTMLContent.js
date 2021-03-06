import React from 'react';

export const HTMLContent = ({ content, className = '' }) => (
  <>
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
    <div class="undefined">
      <h3 class="text-xl font-semibold mb-5 text-red-300 ">
        For Every <em>Developer</em> having a portfolio is an essential.
      </h3>
      <p class="text-base sm:text-lg text-gray-100 mb-6">
        That's what I think. So I did the same, created a web portfolio to share
        the following points:
      </p>
      <ul class="ml-10 list-decimal sm:my-5 my-2 text-yellow-200">
        <li class="sm:text-lg mb-2">
          <em>What I actually do.</em>
        </li>
        <li class="sm:text-lg mb-2">
          <em>What technologies I have worked on.</em>
        </li>
        <li class="sm:text-lg mb-2">
          <em>Kind of projects I have made till now.</em>
        </li>
      </ul>
      <p class="text-base sm:text-lg text-gray-100 mb-6">
        So I end up making a portfolio with a simple but nice-looking design.
        Tried giving a consistent theme to the whole application.
      </p>
      <p class="text-base sm:text-lg text-gray-100 mb-6">
        The special part of this side project of mine is, I have used{' '}
        <a
          href="https://www.gatsbyjs.com/"
          class="text-blue-200 underline text-semibold italic"
        >
          Gatsby
        </a>{' '}
        for the first time in this. The only purpose for using{' '}
        <a
          href="https://www.gatsbyjs.com/"
          class="text-blue-200 underline text-semibold italic"
        >
          Gatsby
        </a>{' '}
        was to build an information-representing-webpage and not an Application.
        And being a fan of{' '}
        <a
          href="https://reactjs.org/"
          class="text-blue-200 underline text-semibold italic"
        >
          React
        </a>
        , Gatsby seems to be a perfect choice.{' '}
        <em>(And of course, I really wanted to give Gatsby a try).</em>{' '}
      </p>
      <p class="text-base sm:text-lg text-gray-100 mb-6">
        <strong class="text-green-200 my-6">
          So I ended up making my portfolio using{' '}
          <a
            href="https://www.gatsbyjs.com/"
            class="text-blue-200 underline text-semibold italic"
          >
            Gatsby
          </a>
          .
        </strong>{' '}
      </p>
      <p class="text-base sm:text-lg text-gray-100 mb-6">
        <strong class="text-green-200 my-6">
          <em>
            Here is the link to my{' '}
            <a
              href="https://me.manishaneja.com"
              class="text-blue-200 underline text-semibold italic"
            >
              Portfolio
            </a>
            . Have a glance and share your views.
          </em>
        </strong>
      </p>
    </div>
  </>
);

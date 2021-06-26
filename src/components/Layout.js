import {withPrefix} from 'gatsby';
import React from 'react';
import {Helmet} from 'react-helmet';
import useSiteMetadata from './SiteMetadata';

const Layout = ({documentTitle, children, layout = 1}) => {
  const {title, author, description} = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>
          {documentTitle || title} | {author}
        </title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}images/logo.svg`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}images/logo.svg`}
            sizes="32x32"
          />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}images/logo.svg`}
          sizes="16x16"
        />
        <link
            rel="mask-icon"
            href={`${withPrefix('/')}images/logo.svg`}
            color="#111827"
          />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta pproperty="og:title" content={documentTitle || title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      {layout === 1 && (
        <div className="bg-gray-900 text-white w-screen h-screen px-2 py-2 flex justify-center items-center sm:px-4 sm:py-4 overflow-hidden">
          {children}
        </div>
      )}
      {layout === 2 && (
        <div className="bg-gray-900 text-white h-screen overflow-y-auto ">
          {children}
        </div>
      )}
    </div>
  );
};

export default Layout;

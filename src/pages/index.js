import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import left from '../styles/assets/left.svg';
import right from '../styles/assets/right.svg';

const query = graphql`
  query MyQuery1 {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          id
          internal {
            content
          }
          frontmatter {
            description
            name
            projectId
            techStack
            image {
              childImageSharp {
                fluid(maxHeight: 500, maxWidth: 400, quality: 95) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
        }
      }
    }
  }
`;

const RootPage = () => {
  const [idx, setIdx] = useState(0);
  const {
    allMarkdownRemark: { edges:ref },
  } = useStaticQuery(query);

  const xDown = useRef(null);
  const yDown = useRef(null);
  const handleTouchStart = useCallback((evt) => {
    const firstTouch = (evt.touches || evt.originalEvent.touches)[0];
    xDown.current = firstTouch.clientX;
    yDown.current = firstTouch.clientY;
  }, []);
  const handleTouchMove = useCallback((evt) => {
    if (!xDown.current || !yDown.current) {
      return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown.current - xUp;
    var yDiff = yDown.current - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        setIdx((idx) => Math.max(idx - 1, -1 * ref.length + 1));
      } else {
        setIdx((idx) => Math.min(idx + 1, 0));
      }
    }
    xDown.current = null;
    yDown.current = null;
  }, [ref]);

  useEffect(() => {
    let touchStartListener = null;
    let touchMoveListener = null;
    if (window.length <= 640) {
      touchStartListener = document.addEventListener(
        'touchstart',
        handleTouchStart,
        false
      );
      touchMoveListener = document.addEventListener(
        'touchmove',
        handleTouchMove,
        false
      );
    }

    return () => {
      if (touchStartListener) {
        document.removeEventListener('touchstart', touchStartListener);
      }
      if (touchMoveListener) {
        document.removeEventListener('touchmove', touchMoveListener);
      }
    };
  }, [handleTouchMove, handleTouchStart]);

  return (
    <>
      <Layout>
        <div className="relative w-full h-full">
          {ref.map((_, index) => (
            <SlidingCard key={index} data={_} position={idx + index} />
          ))}
        </div>
        <div className="absolute hidden h-screen w-1/6 top-0 left-0 sm:flex justify-start  z-40">
          <button
            onClick={setIdx.bind({}, (idx) => Math.min(idx + 1, 0))}
            className="focus:outline-none pl-5"
          >
            <img src={left} alt="left" />
          </button>
        </div>
        <div className="absolute hidden h-screen w-1/6 top-0 right-0 sm:flex justify-end  z-40">
          <button
            className="focus:outline-none pr-5"
            onClick={setIdx.bind({}, (idx) =>
              Math.max(idx - 1, -1 * ref.length + 1)
            )}
          >
            <img src={right} alt="left" />
          </button>
        </div>
      </Layout>
    </>
  );
};

export default RootPage;

const SlidingCard = ({ position, data }) =>
  !data ? null : (
    <div
      className={`w-full h-full absolute flex justify-center items-center transition duration-1000 ease-out ${
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
        zIndex: 10 - Math.abs(position),
        ...(position >= -1 && position <= 1 ? {} : {}),
      }}
    >
      <section
        style={{
          zIndex: 10 - Math.abs(position),
        }}
        className="bg-gray-700 rounded-none text-white grid-rows-2 max-w-md font-sans text-2xl w-full h-full md:h-3/4 grid grid-cols-1 md:w-11/12 md:grid-cols-2 md:grid-rows-1 md:max-w-3xl md:max-h-96 shadow-2xl"
      >
        <div className="rounded-none overflow-hidden ">
          <div className="object-cover w-full h-full transition-transform duration-2000 ease-out transform hover:scale-125">
            <PreviewCompatibleImage imageInfo={data.node.frontmatter.image} />
            {/* <img
            className="object-cover w-full h-full transition-transform duration-2000 ease-out transform hover:scale-125"
            src={data.node.frontmatter.image}
            alt=""
          /> */}
          </div>
        </div>
        <div className="p-4 flex overflow-x-hidden overflow-y-auto flex-col">
          <section className="pb-2  flex-none md:mt-5">
            <Link to={`/${data.node.id}`}>
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

const Title = ({ title }) => (
  <h2 className="text-center text-2xl md:text-3xl text-blue-100">
    <span>{title}</span>
  </h2>
);

const SubTitle = ({ name, children }) =>
  children ? (
    <>
      <h3 className="text-left text-base md:text-xl mb-2">
        <span className="text-purple-400 font-bold">{'< '}</span>
        <span className="text-red-200">{name}</span>
        <span className="text-purple-400 font-bold">{' >'}</span>
      </h3>
      <section className="py-10 px-6">{children}</section>
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

const Tag = ({ name }) => (
  <span className="mx-2 my-1 px-2 py-1 bg-green-800 shadow lowercase">
    {name}
  </span>
);

export { Tag, SubTitle };

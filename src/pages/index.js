import {graphql} from 'gatsby';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import Layout from '../components/Layout';
import {SlidingCard} from '../components/SlidingCard';
import left from '../styles/assets/left.svg';
import right from '../styles/assets/right.svg';

export const query = graphql`
  query IntroPageQuery {
    allMarkdownRemark {
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

const RootPage = ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => {
  const [idx, setIdx] = useState(0);
  const xDown = useRef(null);
  const yDown = useRef(null);
  const goLeft = useCallback(() => setIdx((idx) => Math.min(idx + 1, 0)), []);
  const goRight = useCallback(
    () => setIdx((idx) => Math.max(idx - 1, -1 * (edges.length + 1))),
    [edges.length]
  );

  useEffect(() => {
    let touchStartListener = null;
    let touchMoveListener = null;
    const handleTouchStart = (evt) => {
      const firstTouch = (evt.touches || evt.originalEvent.touches)[0];
      xDown.current = firstTouch.clientX;
      yDown.current = firstTouch.clientY;
    };

    const handleTouchMove = (evt) => {
      if (!xDown.current || !yDown.current) {
        return;
      }
      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;
      var xDiff = xDown.current - xUp;
      var yDiff = yDown.current - yUp;
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) goRight();
        else goLeft();
      }
      xDown.current = null;
      yDown.current = null;
    };
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
    return () => {
      document.removeEventListener('touchstart', touchStartListener);
      document.removeEventListener('touchmove', touchMoveListener);
    };
  }, [edges, goLeft, goRight]);

  useEffect(() => {
    const handler = (event) => {
      if (event.code === 'ArrowRight' || event.code === 'Space') goRight();
      else if (event.code === 'ArrowLeft') goLeft();
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [goLeft, goRight]);

  const cardsList = useMemo(() => ['Intro', ...edges, 'End'], [edges]);
  if (!edges) {
    return null;
  }

  return (
    <>
      <Layout>
        <div className="relative w-full h-full">
          {cardsList.map((_, index) => (
            <SlidingCard key={index} data={_} position={idx + index} />
          ))}
        </div>
        {idx < 0 && (
          <div className="absolute hidden h-screen w-1/6 top-0 left-0 sm:flex justify-start z-40">
            <button onClick={goLeft} className="focus:outline-none pl-5">
              <img src={left} alt="left" />
            </button>
          </div>
        )}
        {idx - 1 > -1 * (edges.length + 2) && (
          <div className="absolute hidden h-screen w-1/6 top-0 right-0 sm:flex justify-end z-40">
            <button className="focus:outline-none pr-5" onClick={goRight}>
              <img src={right} alt="left" />
            </button>
          </div>
        )}
      </Layout>
    </>
  );
};

export default RootPage;

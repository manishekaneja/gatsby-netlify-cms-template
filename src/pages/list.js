import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import left from '../styles/assets/left.svg';
import right from '../styles/assets/right.svg';

const TestPage = () => {
  const [idx, setIdx] = useState(0);
  const ref = useRef([1, 2, 3, 5]).current;
  return (
    <>
      <Layout>
        <div className="relative w-full h-full">
          {ref.map((_, index) => (
            <SlidingCard position={idx + index} />
          ))}
        </div>
        <div className="absolute h-screen w-1/6 top-0 left-0 flex justify-start  z-40">
          <button
            onClick={setIdx.bind({}, (idx) => Math.min(idx + 1, 0))}
            className="focus:outline-none pl-5"
          >
            <img src={left} alt="left" />
          </button>
        </div>
        <div className="absolute h-screen w-1/6 top-0 right-0 flex justify-end  z-40">
          <button
            className="focus:outline-none pr-5"
            onClick={setIdx.bind({}, (idx) =>
              Math.max(idx - 1, -1 * ref.length +1)
            )}
          >
            <img src={right} alt="left" />
          </button>
        </div>
      </Layout>
    </>
  );
};

export default TestPage;

const SlidingCard = ({ position }) => (
  <div
    className={`w-full h-full absolute flex justify-center items-center transition transition-all duration-1000 ease-out ${
      position === 0 ? '' : position >= -1 && position <= 1?'opacity-0 sm:opacity-100':'opacity-0 '
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
      className={`bg-gray-700 rounded-none text-white  grid-rows-2 max-w-md font-sans text-2xl w-full h-full md:h-3/4 grid grid-cols-1 md:w-11/12 md:grid-cols-2 md:grid-rows-1 md:max-w-3xl md:max-h-96 shadow-2xl`}
    >
      <div className="rounded-none overflow-hidden">
        <img
          className="object-cover w-full h-full transition-transform duration-2000 ease-out transform hover:scale-125"
          src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg"
          alt=""
        />
      </div>
      <div className="p-4 flex overflow-hidden flex-col">
        <section className="pb-2  flex-none md:mt-5">
          <Title title="Flower Seperator" />
        </section>
        <section className="pb-2 flex-none">
          <SubTitle name="< tech-stack-used />" />
          <p className="flex text-sm flex-wrap justify-start">
            {['javascript', 'node', 'graphql'].map((tag) => (
              <Tag name={tag} key={tag} />
            ))}
          </p>
        </section>
        <section className="flex-1 h-full">
          <SubTitle name="< description />" />
          <p className="px-2 text-sm text-left overflow-ellipsis overflow-hidden whitespace-wrap">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            nemo vel deserunt repellendus nostrum quos illum est perferendis
            repudiandae ex obcaecati, corrupti porro ipsa vero! Eaque
          </p>
        </section>
      </div>
    </section>
  </div>
);

const Title = ({ title }) => (
  <h2 className="text-center text-2xl md:text-3xl">
    <span>{title}</span>
  </h2>
);

const SubTitle = ({ name }) => (
  <h3 className="text-left text-base md:text-xl mb-2">
    <span>{name}</span>
  </h3>
);

const Tag = ({ name }) => (
  <span className="mx-2 my-1 px-2 py-1 bg-green-800 shadow lowercase">
    {name}
  </span>
);

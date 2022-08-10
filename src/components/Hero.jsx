import React from "react";
import ReactTyped from "react-typed";

const Hero = () => {
  return (
    <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 text-center sm:mb-0">
            <a href="/" className="mb-6 mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                <svg
                  className="w-10 h-10 text-[#00df9a]"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
              <h3 className="text-[#00df9a] font-semibold">
                GROWING WITH DATA ANALYTICS
              </h3>
              <h1 className="max-w-lg text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl md:mx-auto">
                Grow with data
              </h1>
              <div>
                <h3 className="text-xl text-white font-semibold mb-6 sm:text-2xl md:text-4xl">
                  Fast, flexible financing for{" "}
                  <ReactTyped
                    strings={["BTB", "BTC", "SASS"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                  />
                </h3>
              </div>
              <p className="text-base text-indigo-100 md:text-lg">
                Monitor your data analytics to increase revenue for BTB, BTC &
                SASS platforms
              </p>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-10 font-semibold tracking-wide text-[#000300] transition duration-200 rounded bg-[#00df9a] hover:text-[#00df9a] hover:bg-[#000300] hover:outline"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
